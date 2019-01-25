# AJAX

###### :mortar_board: [`XMLHttpRequest`](XMLHttpRequest)

* [`Последовательность действий`](XMLHttpRequest-steps)
* [`Экземпляр XMLHttpRequest`](XMLHttpRequest-content)
* [`Метод open()`](XMLHttpRequest-open)
* [`Метод send()`](XMLHttpRequest-send)
* [`Свойство readyState`](XMLHttpRequest-readyState)
* [`Свойство status`](XMLHttpRequest-status)
* [`Свойство responseText`](XMLHttpRequest-responseText)

***

### :mortar_board: Обработка событий

Значения свойств, начинающиеся на **`on`**, могут быть ссылкой на колбэк-функцию, которая будет вызвана в момент возникновения события

Тип обрабатываемого события - текст, следующий за **`on`** в имени свойства

* [`readystatechange`](#onreadystatechange)
* [`ProgressEvent`](#ProgressEvent)
* [`load`](#onload)
* [`error`](#onerror)
* [`loadstart`](#on)
* [`loadend`](#on)
* [`progress`](#on)
* [`timeout`](#ontimeout)

***

<a name="onreadystatechange"></a>

#### :mortar_board: `onreadystatechange`

Свойство, значение которого является ссылкой на колбэк-функцию, которая будет обрабатывать событие изменения значения  `readyState`

Назначить обработчика:

```javascript
var transport = new XMLHttpRequest ()

transport.onreadystatechange = function ( event ) {
   if ( this.readyState === 4 && 
        this.status === 200 ) 
           console.log ( event )
}
```

При вызове колбэк-функции ей будет передан объект события:

```console
▼ Event {isTrusted: true, type: "readystatechange", target: XMLHttpRequest, currentTarget: XMLHttpRequest, eventPhase: 2, …}
    bubbles: false
    cancelBubble: false
    cancelable: false
    composed: false
  ► currentTarget: XMLHttpRequest { onreadystatechange: ƒ, readyState: 4, timeout: 0, withCredentials: false, upload: XMLHttpRequestUpload, … }
    defaultPrevented: false
    eventPhase: 0
    isTrusted: true
  ► path: []
    returnValue: true
  ► srcElement: XMLHttpRequest { onreadystatechange: ƒ, readyState: 4, timeout: 0, withCredentials: false, upload: XMLHttpRequestUpload, … }
  ► target: XMLHttpRequest { onreadystatechange: ƒ, readyState: 4, timeout: 0, withCredentials: false, upload: XMLHttpRequestUpload, … }
    timeStamp: 87810968.4
    type: "readystatechange"
  ► __proto__: Event
```

| [:coffee:](https://plnkr.co/edit/b5gXN9q5FdturHenpo3b?p=preview) `Пример в песочнице` | [:link: `HTTP Status Messages` ](https://www.w3schools.com/tags/ref_httpmessages.asp) |
|-|-|

***

<a name="ProgressEvent"></a>

#### ProgressEvent

Остальные события ( [`loadstart`](#on), [`loadend`](#on), [`progress`](#on), [`load`](#onload), [`error`](#onerror), [`timeout`](#ontimeout) ) отличаются от события [`readystatechange`](#onreadystatechange) - они относятся к категории **_`ProgressEvent`_**:

```console
▼ ƒ ProgressEvent()
    arguments: null
    caller: null
    length: 1
    name: "ProgressEvent"
  ► prototype: ProgressEvent {constructor: ƒ, Symbol(Symbol.toStringTag): "ProgressEvent"}
  ► __proto__: ƒ Event()
```

***

<a name="onload"></a>

#### :mortar_board: `onload`

Это свойство содержит ссылку колбэк-функцию, которая будет обрабатывать событие благополучного завершения загрузки данных с сервера

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

<a name="on"></a>

#### :mortar_board: `onloadstart` | `onprogress` | `onloadend`

```javascript
var request = new XMLHttpRequest()
request.open (
    "get",
    'https://httpbin.org/get',
    true 
)
request.responseType = "arraybuffer";

request.onloadstart = function( event ) {
   console.log ( 'START' )
}
request.onloadend = function( event ) {
   console.log ( 'END' )
}
request.onprogress = function( event ) {
   console.log ( `progress: ${event.loaded} / ${event.total}` )
}
request.onload = function( event ) {
   console.log ( this.response )
}
request.send ()
```

***

<a name="ontimeout"></a>

#### :mortar_board: `ontimeout`

Это свойство содержит ссылку колбэк-функцию, которая будет вызвана, когда истечет установленный временной интервал

Временной интервал устанавливается путем определения значения свойства **_timeout_**

```javascript
var request = new XMLHttpRequest()
request.open (
    "POST",
    'https://httpbin.org/post'
)

request.setRequestHeader (
    "Content-Type",
    "application/x-www-form-urlencoded"
)

request.timeout = 100

request.ontimeout = function( event ) {
   console.log ( event )
}
```

***

<a name="onerror"></a>

#### :mortar_board: `onerror`

Это свойство содержит ссылку колбэк-функцию, которая будет обрабатывать ошибки, возникающие при загрузке данных с сервера

```javascript
var transport = new XMLHttpRequest ()

transport.onerror = function ( err ) {
    console.log ( this.responseText )
}
```

| [:coffee:](https://plnkr.co/edit/BqbCvoAnbikBtTFTRBHp?p=preview) `Пример в песочнице` | [:coffee:](https://plnkr.co/edit/DLH49iWObtxqcijNT9oY?p=preview) `Пример в песочнице` |
|-|-|

***

* [`Метод setRequestHeader`](XMLHttpRequest-setRequestHeader)
* [`Метод getAllResponseHeaders()`](XMLHttpRequest-response#getAllResponseHeaders)
* [`Свойство responseType`](XMLHttpRequest-response#responseType)
* [`Свойство withCredentials`](XMLHttpRequest-withCredentials)

***

| [:briefcase: Упражнения](https://docs.google.com/forms/d/e/1FAIpQLSdA3JwhlOTXdZxCO3y1MdLe-pe-cynNVGeboy7IV0aWHliGHA/viewform) | [:link: `Протокол TCP`](https://xakep.ru/2002/04/11/14943/) | [:link: **`RFC793`**](https://www.lissyara.su/doc/rfc/rfc793/) |
|-|-|-|