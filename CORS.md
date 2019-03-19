# :mortar_board: CORS

###### Cross-origin resource sharing

> Кросс-доменное использование ресурсов ( **CORS** ) - это рабочий проект _W3C_, который определяет, как браузер и сервер должны взаимодействовать при доступе к внешним ресурсам ( с других доменов )

>> Суть CORS заключается в использовании дополнительных заголовков, позволяющих браузеру и серверу "опознать" друг друга, чтобы определить, может ли запрос быть удовлетворен 

>> **`XMLHttpRequest`** и **`Fetch API`** следуют политике одного источника 

>> ( **_same-origin policy_** )

>> т.е. если приложения не используют CORS-заголовки, они могут запрашивать ресурсы только с того домена, с которого были загружены

***

## Preflight request

[Предварительный запрос](https://developer.mozilla.org/en-US/docs/Glossary/Preflight_request) автоматически отправляется браузером

Этот запрос использует три заголовка:

* Access-Control-Request-Method
* Access-Control-Request-Headers
* Origin

**`Access-Control-Request-Method`** сообщает серверу, какой метод HTTP будет использоваться при выполнении фактического запроса

В ответ сервер должен прислать в заголовке **`Access-Control-Allow-Methods`** список методов ( GET, POST, PUT, DELETE... ), которые он поддерживает

Заголовок **`Access-Control-Allow-Headers`**, возвращаемый сервером в ответ на `preflight request`, содержит перечень заголовков, которые можно использовать при отправке реального запроса

Если вы используете пользовательские заголовки ( например, _x-authentication-token_ ), сервер должен вернуть его в заголовке **`Access-Control-Allow-Headers`**, иначе запрос будет заблокирован

***

### Origin

Валидный CORS-запрос всегда содержит заголовок **Origin**

Заголовок **Origin** добавляется браузером ( его нельзя подделать )

Значение этого заголовка описывает происхождение запроса:

* протокол ( http, ftp, file, about...  ), 
* домен ( например, tweet.com ) 
* порт ( включается в заголовок только в том случае, если это не порт по умолчанию, например 81 )

***

## Response Headers

Все CORS-заголовки **_ответа_** сервера имеют префикс «**Access-Control-**»

#### Access-Control-Allow-Origin ( обязательный )

этот заголовок должен быть включен во все валидные ответы CORS

отсутствие этого заголовка приведет к сбою запроса CORS

Значение заголовка может либо таким же, как и заголовок запроса **Origin**, либо "*", что означает, что запросы разрешены из любого источника

***

#### Access-Control-Expose-Headers ( необязательный )

Во время запроса CORS можно получить доступ только к простым заголовкам ответов

###### Простые заголовки ответов:

     Cache-Control
     Content-Language
     Content-Type
     Expires
     Last-Modified
     Pragma

В заголовке `Access-Control-Expose-Headers` ответа сервера перечисляются заголовки ответа, которые будут доступны клиенту

***

#### Access-Control-Allow-Credentials ( необязательный )

Стандартные запросы CORS не отправляют и не устанавливают файлы **_cookie_** по умолчанию

Это нужно сделать самостоятельно:

###### XMLWttpRequest

```javascript
var request = new XMLWttpRequest()
request.withCredentials = true
```

###### Fetch API

```javascript
fetch ( url, {
    ...,
    credentials: 'include'
})
```

Чтобы это cработало, сервер также должен вернуть заголовок `Access-Control-Allow-Credentials` со значением `true`

При этом в запрос будут включены cookie-файлы удаленного домена, а удаленный домен будет писать свои cookie на клиенте

Однако в силу действия политики одного и того же происхождения эти cookie недоступны вашему скрипту, если он запущен с другого домена

Они контролируются только удаленным доменом

***

#### Access-Control-Expose-Headers

В заголовке ответа сервера `Access-Control-Expose-Headers` перечисляются заголовки, которые будут доступны клиенту

Все остальные заголовки будут недоступны

По умолчанию клиенту открыты только 6 "простых" заголовков:

* Cache-Control
* Content-Language
* Content-Type
* Expires
* Last-Modified
* Pragma

***

#### Origin, Host, Referer

В заголовках ответа сервера ( объект **`headers`** ) есть свойство **`Host`** ( *куда был направлен запрос* ) и свойство **`Origin`** ( домен, *с которого пришел запрос* )

Свойство **`Referer`** указывает *полный адрес*, с которого пришел запрос

Если сделать запрос с пустой страницы ( не имеющей адреса в сети ), то в заголовках ответа сервера свойство **`Origin`** будет иметь значение `null`, а свойство **`Referer`**  будет отсутствовать

***

## :warning: Proxy for CORS request

Попробуйте запустить следующий код в консоли пустой вкладки ( about:blank )

```javascript
fetch ( "http://humor.fm/uploads/posts/2016-03/17/umndflr0wjc.jpg" )
    .then ( response => response.text()
        .then ( response => console.log ( response ) )
    )
```

Ответ будет заблокирован браузером

```console
⛔️ Access to fetch at 'http://humor.fm/uploads/posts/2016-03/17/umndflr0wjc.jpg' from origin 'null' has been blocked by CORS policy: No 'Access-Control-Allow-Origin' header is present on the requested resource. If an opaque response serves your needs, set the request's mode to 'no-cors' to fetch the resource with CORS disabled.
```

Во вкладке **Network** отладчика можно посмотреть заголовки ответа:

```
▼ Response Headers
    Accept-Ranges: bytes
    Cache-Control: max-age=604800
    Content-Length: 127387
    Content-Type: image/jpeg
    Date: Tue, 19 Mar 2019 08:30:36 GMT
    ETag: "56ea8363-1f19b"
    Expires: Tue, 26 Mar 2019 08:30:36 GMT
    Last-Modified: Thu, 17 Mar 2016 10:13:55 GMT
    Server: nginx/1.12.2
```

Как мы видим, `Access-Control-Allow-Origin` отсутствует, что и становится причиной блокирования браузером ответа

Теперь воспользуемся готовым прокси-сервером

Для этого добавим в запросе урл прокси: **`https://cors-anywhere.herokuapp.com/`**

```javascript
fetch ( "https://cors-anywhere.herokuapp.com/http://humor.fm/uploads/posts/2016-03/17/umndflr0wjc.jpg" )
    .then ( response => response.blob()
        .then ( blob => document.body.appendChild (
            document.createElement ( "img" )
        ).src = URL.createObjectURL ( blob ) )
    )
```

Теперь наш запрос благополучно проходит, на странице появляется картинка, а во вкладке **Network** можно увидеть такие заголовки ответа:

```
▼ Response Headers
    Accept-Ranges: bytes
    Access-Control-Allow-Origin: *
    Access-Control-Expose-Headers: server,date,content-type,content-length,last-modified,connection,etag,expires,cache- 
    control,accept-ranges,x-final-url,access-control-allow-origin
    Cache-Control: max-age=604800
    Connection: keep-alive
    Content-Length: 127387
    Content-Type: image/jpeg
    Date: Tue, 19 Mar 2019 08:31:09 GMT
    Etag: "56ea8363-1f19b"
    Expires: Tue, 26 Mar 2019 08:31:09 GMT
    Last-Modified: Thu, 17 Mar 2016 10:13:55 GMT
    Server: nginx/1.12.2
    Via: 1.1 vegur
    X-Final-Url: http://humor.fm/uploads/posts/2016-03/17/umndflr0wjc.jpg
    X-Request-Url: http://humor.fm/uploads/posts/2016-03/17/umndflr0wjc.jpg
```

Прокси-сервер добавил необходимые заголовки к ответу, и браузер вернул нам ответ - файл изображения получен :simple_smile:

***

При желании вы можете "поднять" собственный [**прокси-сервер**](https://github.com/Rob--W/cors-anywhere/)