### :briefcase: Упражнение :one:

| [:rewind:](websocket#samples) |
|-|

***

<img src="http://websocket.org/img/websocketlogo-medium.png" height="40"/>

***

Воспользуемся готовым WebSocket-сервером **`ws://echo.websocket.org`**, который возвращает назад сообщение, отправленное ему с клиента

Современные браузеры поддерживают протокол WebSocket, поэтому создание объекта WebSocket-соединения не представляет проблемы - это просто вызов конструктора

Создадим `WebSocket`-соединение прямо в консоли браузера:

```javascript
const websocket = new WebSocket( "ws://echo.websocket.org" )
```

При вызове конструктора **_WebSocket_** необходимо передать ему обязательный аргумент

```
протокол://домен:порт
```

* протокол может быть `ws` или `wss`
* домен будет `echo.websocket.org`
* порт мы оставляем на усмотрение сервера

Созданный с помощью конструктора `WebSocket` экземпляр **_`websocket`_** имеет свойства `onopen`, `onmessage`, `onclose` и `onerror`, а также методы `send()` и `close()`, и всем этим арсеналом мы сейчас воспользуемся:

```javascript
const websocket = new WebSocket( "ws://echo.websocket.org" )
websocket.onopen = function ( event ) {
    console.log ( "CONNECTED" )
    websocket.send( "Happy New Year!" )
}
websocket.onclose = function ( event ) {
    console.log ( "DISCONNECTED" )
}
websocket.onmessage = function ( event ) {
    console.log ( event.data )
    websocket.close()
}
websocket.onerror = function ( event ) {
    console.error ( `ERROR: ${event.data}` )
}
```
###### Результат в консоли:
```console
CONNECTED
Happy New Year!
DISCONNECTED
```

![](https://kaazing.com/favicon.ico)

***
| [:rewind:](websocket#samples) |
|-|

_________________________________________________________________________

![](https://github.com/garevna/js-course/raw/master/images/a-level-ico.png?raw=true)
