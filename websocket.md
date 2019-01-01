# :mortar_board: WebSocket

**WebSockets API** позволяет веб-приложениям использовать протокол `WebSockets` для двусторонней связи с удаленным хостом

**_`WebSockets`_**, как и **_`Local Storage`_** и **_`Geolocation`_**, изначально был частью спецификации **`HTML5`**

Cогласно спецификации протокола, соединение WebSocket стартует как HTTP-соединение, гарантируя полную обратную совместимость с миром до WebSocket

Переключение протокола с HTTP на WebSocket называется рукопожатием WebSocket

При отправке запроса на сервер с помощью заголовка **`Upgrade`** браузер сообщает, что он хочет переключиться с протокола `HTTP` на `WebSocket`:
###### Request Headers
```console
Accept-Encoding: gzip, deflate
Accept-Language: en-US,en;q=0.9,ru;q=0.8
Cache-Control: no-cache
Connection: Upgrade
Host: echo.websocket.org
Origin: null
Pragma: no-cache
Sec-WebSocket-Extensions: permessage-deflate; client_max_window_bits
Sec-WebSocket-Key: FWRPxaoGQhQaeqg1eRPHTw==
Sec-WebSocket-Version: 13
Upgrade: websocket
User-Agent: Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/71.0.3578.98 Safari/537.36
```
Если сервер поддерживает протокол `WebSocket`, он соглашается на переключение протокола через заголовок **`Upgrade`**
###### Response Headers
```console
Access-Control-Allow-Credentials: true
Access-Control-Allow-Headers: content-type
Access-Control-Allow-Headers: authorization
Access-Control-Allow-Headers: x-websocket-extensions
Access-Control-Allow-Headers: x-websocket-version
Access-Control-Allow-Headers: x-websocket-protocol
Access-Control-Allow-Origin: null
Connection: Upgrade
Date: Mon, 31 Dec 2018 19:53:07 GMT
Sec-WebSocket-Accept: OQbuqh0sOBKbPsVMFPKNpI75N8I=
Server: Kaazing Gateway
Upgrade: websocket
```
В этот момент соединение HTTP разрывается и заменяется `WebSocket`-соединением через то же TCP/IP

Соединение WebSocket использует те же порты по умолчанию, что и HTTP (80) и HTTPS (443)
***
:briefcase:

Нет ничего проще, чем создание `WebSocket`-соединения

Воспользуемся готовым WebSocket-сервером `ws://echo.websocket.org`
```javascript
const websocket = new WebSocket( "ws://echo.websocket.org" )
```
Созданный с помощью конструктора `WebSocket` экземпляр **_`websocket`_** имеет свойства `onopen`, `onmessage`, `onclose` и `onerror`, а также методы `send()` и `close()`, и всем этим арсеналом мы сейчас воспользуемся:

###### :coffee: :one: websocket.org
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

***
Для получения некоторого экспириенса с веб-сокетами нам придется познакомиться с серверным JS

Не забудьте создать отдельную папку для наших экспериментов и перейти в нее

Итак, платформа **`Node.js`** станет основой нашего приложения

В **`Node.js`** нет встроенной поддержки `WebSocket`, поэтому установим плагин **`ws`**

### <img src="https://github.com/garevna/js-course/blob/master/images/git-bush-ico.png?raw=true" height="30"/> Установка
```
$ npm install ws
```
Теперь создадим вебсокет-сервер 

Для этого нам нужен **серверный** скрипт

Создадим файл **_start.js_**

В **`Node.js`** все файлы, включаемые в приложение - это отдельные модули

Чтобы подключить модуль к исполняемому скрипту, необходимо использовать функцию **_`require`_**

Нам нужно подключить модуль **`ws`**, который мы уже установили:
```javascript
const WebSocket = require('ws')
```
Теперь этот модуль доступен нам под именем **_WebSocket_**

С его помощью мы и создадим WebSocket сервер на порту 8080

###### server
```javascript
const server = new WebSocket
    .Server({
        port: 8080
    })
```
Теперь в переменной **server** у нас ссылка на объект **_WebSocket_**-сервера

Используя событие `connection` **_WebSocket_**-сервера,

```javascript
server.on ( 'connection', socket => {
    socket.on ( 'message', received => {
        console.log ( received )
        socket.send ( `Получено от клиента:\n${received}` )
    })
```

###### start.js
```javascript
const WebSocket = require('ws')

const server = new WebSocket
    .Server({
        port: 8080
    })
```

### Клиентская часть

###### создание объекта WebSocket

При вызове конструктора **_WebSocket_** необходимо передать ему обязательный аргумент 
```
протокол://домен:порт
```
* протокол может быть `ws` или `wss`
* поскольку мы создаем сервер на локальной машине, домен будет `localhost` или `127.0.0.1`
* порт мы уже выбрали - 8080

```javascript
const socket = new WebSocket('ws://localhost:8080')
```

## :mortar_board: Сервер

Для работы с веб-сокетами нам необходим сервер

Сервер мы создадим на `localhost`

###### start.js
```javascript
const WebSocket = require('ws')

const server = new WebSocket.Server({ port: 8080 })

server.on('connection', socket => {
  socket.on('message', message => {
    console.log(`received from a client: ${message}`)
    socket.send( `Получено от клиента: ${message}!` )
  })
  socket.send('Hello world!')
})
```
###### index.js
```javascript
const socket = new WebSocket('ws://localhost:8080')

socket.addEventListener('open', () => {
  socket.send('Привет, студент!')
})

socket.addEventListener( 'message', event => {
    console.log( `Сообщение от сервера: ${event.data}` )
    setTimeout (
      () => {
        let user = users[
            Math.round (
                Math.random() * (users.length-1)
            )
        ]
        socket.send( `Hello, I'm ${user.name}!` )
      },
      2000
    )
})

var users = [
  {
    name: "Mary",
    photo: ""
  },
  {
    name: "Margaret",
    photo: ""
  },
  {
    name: "Pedro",
    photo: ""
  },
  {
    name: "Stephan",
    photo: ""
  },
]
function sendMessage(socket, userName, content) {
  socket.send(
    JSON.stringify({
      userName,
      content
    })
  )
}

function receiveMessage(message) {
  console.log(`${message.userName} is saying: ${message.content}`)
}
```