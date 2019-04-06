# AJAX

###### :mortar_board: [`XMLHttpRequest`](XMLHttpRequest)

***

* [`Последовательность действий`](XMLHttpRequest-steps)
* [`Экземпляр XMLHttpRequest`](XMLHttpRequest-content)
* [`Метод open()`](XMLHttpRequest-open)
* [`Метод send()`](XMLHttpRequest-send)
* [`Свойство readyState`](XMLHttpRequest-readyState)
* [`Свойство status`](XMLHttpRequest-status)

***

### :mortar_board: `responseText`

###### :warning: Только для чтения

"Тело" ответа сервера

При получении от сервера текстового файла содержимое файла будет значением этого свойства

При обработке асинхронного запроса данные могут быть загружены не полностью, но значение `responseText` всегда содержит 
тот текст, который уже получен от сервера

Свойство `responseText` допустимо только для текстового содержимого

:coffee: 1

```javascript
var transport = new XMLHttpRequest ()

transport.open (
    "GET",
    "https://www.random.org/strings/?num=1&len=10&digits=on&upperalpha=on&loweralpha=on&unique=on&format=plain&rnd=new"
)

transport.onreadystatechange = function ( event ) {
   if ( this.readyState === 4 && 
        this.status === 200 ) 
           console.log ( this.responseText )
}

transport.send()
```

:coffee: 2

```javascript
var transport = new XMLHttpRequest ()

transport.open (
    "GET",
    "https://www.random.org/strings/?num=10&len=20&digits=on&upperalpha=on&loweralpha=on&unique=on&format=plain&rnd=new"
)

transport.onload = function ( event ) {
   this.status === 200 ? 
       console.log ( this.responseText ) :
       null
}

transport.send()
```

***

* [`Обработка событий`](XMLHttpRequest-events)
* [`Метод setRequestHeader`](XMLHttpRequest-setRequestHeader)
* [`Метод getAllResponseHeaders()`](XMLHttpRequest-response#getAllResponseHeaders)
* [`Свойство responseType`](XMLHttpRequest-response#responseType)
* [`Свойство withCredentials`](XMLHttpRequest-withCredentials)

***

| [:briefcase: Упражнения](https://docs.google.com/forms/d/e/1FAIpQLSdA3JwhlOTXdZxCO3y1MdLe-pe-cynNVGeboy7IV0aWHliGHA/viewform) | [:link: `Протокол TCP`](https://xakep.ru/2002/04/11/14943/) | [:link: **`RFC793`**](https://www.lissyara.su/doc/rfc/rfc793/) |
|-|-|-|