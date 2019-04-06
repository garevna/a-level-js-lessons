# <img src="https://avatars2.githubusercontent.com/u/19735284?s=40&v=4" width="30" title="Ⓒ Irina Fylyppova ( garevna ) 2019"/> AJAX

###### :mortar_board: [`XMLHttpRequest`](XMLHttpRequest)

***

* [`Последовательность действий`](XMLHttpRequest-steps)
* [`Экземпляр XMLHttpRequest`](XMLHttpRequest-content)
* [`Метод open()`](XMLHttpRequest-open)
* [`Метод send()`](XMLHttpRequest-send)
* [`Свойство readyState`](XMLHttpRequest-readyState)
* [`Свойство status`](XMLHttpRequest-status)
* [`Свойство responseText`](XMLHttpRequest-responseText)
* [`Обработка событий`](XMLHttpRequest-events)
* [`Метод setRequestHeader`](XMLHttpRequest-setRequestHeader)
* [`Метод getAllResponseHeaders()`](XMLHttpRequest-response#getAllResponseHeaders)
* [`Свойство responseType`](XMLHttpRequest-response#responseType)

***

## withCredentials

###### boolean
###### :warning: Используется при кросс-доменных запросах

Значение `true` означает:

* разрешение на отправку аутентификационных данных клиента вместе с запросом ( содержимого `cookie`, например )
* разрешение `third-party cookies` ( сохранение на клиенте `cookie` домена, с которого пришел ответ на наш запрос )

Посмотрим на примере

:coffee:

Перейдем на **_ptsv2.com_**

Откроем инструменты разработчика => вкладку **`Application`**

в панели навигации ( слева ) откроем раздел **`Cookies`**

Вручную вставим в куки любые данные

###### Cookies

![](http://icecream.me/uploads/6c1f4e083053d065535dcae47a0100f4.png)

Теперь у нас есть куки с домена **_ptsv2.com_**

Отправим из консоли запрос на сервер с опцией **_`withCredentials`_**

```javascript
var obj = {
    provider: "Google",
    type: "service",
    eco: "git"
}

var request = new XMLHttpRequest
request.open (
    "POST",
    'http://ptsv2.com/t/garevna/post'
)

request.withCredentials = true
request.setRequestHeader (
    "Content-Type",
    "application/json"
)

request.onload = function() {
   if ( this.status === 200 ) {
        console.log ( this.response )
   }
}
request.send ( JSON.stringify ( obj ) )
```

###### Заголовки дампа на сервере `ptsv2.com`

| ![](http://icecream.me/uploads/030a928d8525e6c9738f0e35f744673b.png) |
|-|

Как видите, вместе с данными на сервер были отправлены куки

Сервер эти куки получил

Если открыть вкладку **`Network`** инструментов разработчика, то мы увидим, что кроме **Headers**, **Preview**, **Response** и **Timing** для нашего запроса появилась вкладка **Cookies**

![](http://icecream.me/uploads/c39e024f7afd6d962457a8ca1435585d.png)

В этой вкладке мы видим и те куки, которые "поехали" с запросом на сервер, и те куки, которые пришли назад

( ничего не пришло,
потому что **_ptsv2.com_** не пишет куки,
и ему наплевать на наше разрешение писать свои куки на клиенте )


***

| [:briefcase: Упражнения](https://docs.google.com/forms/d/e/1FAIpQLSdA3JwhlOTXdZxCO3y1MdLe-pe-cynNVGeboy7IV0aWHliGHA/viewform) | [:link: `Протокол TCP`](https://xakep.ru/2002/04/11/14943/) | [:link: **`RFC793`**](https://www.lissyara.su/doc/rfc/rfc793/) |
|-|-|-|
