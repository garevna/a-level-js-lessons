# AJAX

## :mortar_board: [`XMLHttpRequest`](XMLHttpRequest)

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

***

<a name="responseType"></a>

### :mortar_board: `responseType`

Свойство **`responseType`** объекта `XMLHttpRequest` определяет тип данных ответа сервера

Возможными значениями являются:

* пустая строка (по умолчанию)
* arraybuffer
* blob
* document
* json
* text

Свойство **`response`** будет содержать тело объекта в соответствии с `responseType`

* ArrayBuffer
* Blob
* Document
* JSON
* string

Если запрос завершился неудачей, то значением **`response`** будет `null`

:coffee:

###### Получение двоичных данных

```javascript
var request = new XMLHttpRequest()
request.open (
    "get",
    'https://httpbin.org/get'
)
request.responseType = "arraybuffer"

request.onreadystatechange = function() {
   if (
      this.readyState === 4
      && this.status === 200 
   ) {
        console.log ( this.response )
   }
}
request.send ()
```

***

<a name="getAllResponseHeaders"></a>

### :mortar_board: getAllResponseHeaders()

```javascript
var transport = new XMLHttpRequest ()

transport.onload = function ( event ) {
    console.dir ( this.getAllResponseHeaders() )
}
transport.open ( 
    'GET', 
    'https://ajax.googleapis.com/ajax/libs/jquery/2.2.0/jquery.min.js'
)
transport.send()
```

###### Заголовки ответа сервера:

```console
last-modified: Tue, 20 Dec 2016 18:17:03 GMT
content-type: text/javascript; charset=UTF-8
cache-control: public, max-age=31536000, stale-while-revalidate=2592000
expires: Wed, 09 Oct 2019 00:23:02 GMT
```

***

| [:briefcase: Упражнения](https://docs.google.com/forms/d/e/1FAIpQLSdA3JwhlOTXdZxCO3y1MdLe-pe-cynNVGeboy7IV0aWHliGHA/viewform) | [:link: `Протокол TCP`](https://xakep.ru/2002/04/11/14943/) | [:link: **`RFC793`**](https://www.lissyara.su/doc/rfc/rfc793/) |
|-|-|-|