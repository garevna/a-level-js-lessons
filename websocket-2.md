### :briefcase: Упражнение :two:

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
const socket = require('ws')
```
Теперь этот модуль доступен нам под именем **_socket_**

С его помощью мы и создадим `WebSocket` сервер на порту `8080`

###### server
```javascript
const server = new WebSocket
    .Server({
        port: 8080
    })
```
Теперь в переменной **_server_** у нас ссылка на объект **_WebSocket_**-сервера

Используя событие `connection` **_WebSocket_**-сервера,

создадим обработчика события `message` объекта **_socket_**

Обработчик будет отсылать в ответ на полученное сообщение JSON-строку

с именем отправителя "server" и текстом "I listen to you",

а затем выводить в консоль полученное от клиента сообщение:

```javascript
server.on ( 'connection', socket => {
    socket.on ( 'message', received => {
        socket.send(
            JSON.stringify ( {
                name: "server",
                message: "I listen to you"
            } )
        )
        let mess = JSON.parse ( received )
        console.log (
            `received from a client:
                ${mess.user.name}
                ${mess.message}`
        )
    })
```
Итак, серверный скрипт готов, сохраним его в файл **start.js**
###### start.js
```javascript
const WebSocket = require('ws')

const server = new WebSocket
    .Server({
        port: 8080
    })

server.on ( 'connection', socket => {
    socket.on ( 'message', received => {
        socket.send(
            JSON.stringify ( {
                name: "server",
                message: "I listen to you"
            } )
        )
        let mess = JSON.parse ( received )
        console.log (
            `received from a client:
                ${mess.name}
                ${mess.message}`
        )
    })
```

<img src="https://github.com/garevna/js-course/blob/master/images/git-bush-ico.png?raw=true" width="20"/> и запустим с помощью консольной команды:

<table><tr><td><pre>
$ node start.js
</pre></td></tr></table>

Теперь откроем новую вкладку и введем в адресной строке браузера:
    http://localhost:8080/

На странице появится сообщение _`Upgrade Required`_

Это потому, что мы указали протокол `http`, а запущенный нами на порту `8080` сервер работает по протоколу `ws`

В консоли этой вкладки введем "клиентский" код:

```javascript
const socket = new WebSocket('ws://localhost:8080')

socket.addEventListener( 'open', () => {
    socket.send(
        JSON.stringify ({
            name: "Admin",
            message: 'Hello, do you listen to me ?'
        })
    )
})

socket.addEventListener( 'message', event => {
    console.log ( JSON.parse ( event.data ) )
})
```

поскольку мы создаем сервер на локальной машине, 

домен будет `localhost` или `127.0.0.1`

порт мы уже выбрали - 8080

После выполнения кода:

```javascript
const socket = new WebSocket('ws://localhost:8080')
```

в переменной **socket** у нас будет ссылка на экземпляр WebSocket-соединения, 

у которого есть событие **`open`** и метод **`send`** 

( как видим, события и методы на стороне сервера и клиента одни и те же, 

поскольку это соединение двух "равноправных" партнеров для обмена сообщениями )

Итак, когда соединение будет открыто, клиент 

( пока из консоли браузера ) 

отправит на сервер сообщение - JSON-строку 

с именем отправителя "_Admin_" и текстом "_Hello, do you listen to me ?_"

###### <img src="https://github.com/garevna/js-course/blob/master/images/git-bush-ico.png?raw=true" width="25"/> Результат в консоли
<table><tr><td><pre>
$ node start.js
received from a client:
                Admin
                Hello, do you listen to me ?
</pre></td></tr></table>

###### Результат в консоли браузера
<table><tr><td><pre>
▼ { name: "server", message: "I listen to you" }
    message: "I listen to you"
    name: "server"
  ► __proto__: Object
</pre></td></tr></table>

***

