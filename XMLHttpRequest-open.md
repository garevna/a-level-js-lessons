# AJAX

###### :mortar_board: [`XMLHttpRequest`](XMLHttpRequest)

***

* [`Последовательность действий`](XMLHttpRequest-steps)
* [`Экземпляр XMLHttpRequest`](XMLHttpRequest-content)

***

### :mortar_board: `open`

Метод `open` устанавливает соединение с сервером

* Первый аргумент - метод доступа ( string )
* Второй аргумент - URI ресурса ( string )
* Третий аргумент ( опциональный, по умолчанию **`true`** ) позволяет сделать запрос синхронным, если установить его значение в `false` ( :warning: чего делать категорически не рекомендуется )

> `Ресурс - это любые данные на стороне сервера, имеющие `**`URI`**` ( идентификатор ресурса )`

>> **`URI`**` ( `_`Uniform Resource Identifier`_` )`

> `Ресурсом может быть файл, база данных, запись в базе данных и т.д.`

***

#### Метод

Метод доступа к ресурсу идентифицирует операцию с ресурсом

| `GET` | `POST` | `PUT` | `DELETE` | `HEAD` |
|-|-|-|-|-|

* `GET` - получить данные
* `POST` - создание нового ресурса ( новой записи )
* `PUT` - обновление существующего ресурса ( записи )
* `DELETE` - удаление ресурса
* `HEAD` - получение информации о ресурсе

***

#### URI ресурса ( файла )

откуда предполагается получить ( **`GET`** ) или куда предполагается записать ( **`POST`**, **`PUT`**, **`DELETE`** ) данные

:coffee:

```javascript
var request = new XMLHttpRequest ()
request.open ( 
    'GET', 
    'https://ajax.googleapis.com/ajax/libs/jquery/2.2.0/jquery.min.js'
)
```

***

* [`Метод send()`](XMLHttpRequest-send)
* [`Свойство readyState`](XMLHttpRequest-readyState)
* [`Свойство status`](XMLHttpRequest-status)
* [`Свойство responseText`](XMLHttpRequest-responseText)
* [`Обработка событий`](XMLHttpRequest-events)
* [`Метод setRequestHeader`](XMLHttpRequest-setRequestHeader)
* [`Метод getAllResponseHeaders()`](XMLHttpRequest-response#getAllResponseHeaders)
* [`Свойство responseType`](XMLHttpRequest-response#responseType)
* [`Свойство withCredentials`](XMLHttpRequest-withCredentials)

***

| [:briefcase: Упражнения](https://docs.google.com/forms/d/e/1FAIpQLSdA3JwhlOTXdZxCO3y1MdLe-pe-cynNVGeboy7IV0aWHliGHA/viewform) | [:link: `Протокол TCP`](https://xakep.ru/2002/04/11/14943/) | [:link: **`RFC793`**](https://www.lissyara.su/doc/rfc/rfc793/) |
|-|-|-|