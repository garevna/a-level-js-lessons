# AJAX

###### :mortar_board: [`XMLHttpRequest`](XMLHttpRequest)

***

* [`Последовательность действий`](XMLHttpRequest-steps)
* [`Экземпляр XMLHttpRequest`](XMLHttpRequest-content)
* [`Метод open()`](XMLHttpRequest-open)
* [`Метод send()`](XMLHttpRequest-send)
* [`Свойство readyState`](XMLHttpRequest-readyState)

***

### :mortar_board: `status`

###### :warning: Только для чтения

Содержит код завершения операции

Если запрошенные данные благополучно загружены, то значением будет  **`200`**

В противном случае значением будет код ошибки ( например, **`404`** )

:coffee:

```javascript
var request = new XMLHttpRequest
request.open (
    "get",
    'https://www.random.org/integers/?num=10&min=0&max=255&col=1&base=16&format=plain&rnd=new'
)

request.onload = function() {
   if ( this.status === 200 ) {
        console.log ( this.response )
   }
}
request.send ()
```

***

### :mortar_board: `statusText`

###### :warning: Только для чтения

Текст статуса ответа сервера, соответствующий коду

если `status === 200`,  то  `statusText` будет `"OK"`

если `status === 404`,  то  `statusText` будет `"Not Found"`

***

* [`Свойство responseText`](XMLHttpRequest-responseText)
* [`Обработка событий`](XMLHttpRequest-events)
* [`Метод setRequestHeader`](XMLHttpRequest-setRequestHeader)
* [`Метод getAllResponseHeaders()`](XMLHttpRequest-response#getAllResponseHeaders)
* [`Свойство responseType`](XMLHttpRequest-response#responseType)
* [`Свойство withCredentials`](XMLHttpRequest-withCredentials)

***

| [:briefcase: Упражнения](https://docs.google.com/forms/d/e/1FAIpQLSdA3JwhlOTXdZxCO3y1MdLe-pe-cynNVGeboy7IV0aWHliGHA/viewform) | [:link: `Протокол TCP`](https://xakep.ru/2002/04/11/14943/) | [:link: **`RFC793`**](https://www.lissyara.su/doc/rfc/rfc793/) |
|-|-|-|