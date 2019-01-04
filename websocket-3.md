### :briefcase: Упражнение :three:

| [:rewind:](websocket#samples) |
|-|

Создадим простенький чат

#### Серверная часть

Теперь серверный скрипт будет немного сложнее, поэтому углубимся в **`Node.js`**

<img src="https://github.com/garevna/js-course/blob/master/images/node.png?raw=true" height="50"/> 

Первое, с чем мы познакомимся - это [**_`File System`_**](https://nodejs.org/api/fs.html) ( **`fs`** ) `Node.js`

Для подключения модуля **`fs`** нужно использовать функцию `require`:

```javascript
const fs = require('fs')
```

С помощью модуля `fs` мы будем читать ( а можно и писать ) файлы на сервере

Давайте сначала создадим такие файлы

###### users.json
```json
[
    {
        "name": "Иван",
        "photo": "https://apollo-ireland.akamaized.net/v1/files/5bucx1wiqmes-UA/image;s=644x461"
    },
    {
        "name": "Ольга",
        "photo": "https://orig00.deviantart.net/ecd9/f/2015/050/9/3/gravity_falls_icon__wendy_by_mikeinel-d8iowct.gif"
    },
    {
        "name": "Демьян",
        "photo": "https://leoterra.com/sites/default/files/clAvHWVG4GE.jpg"
    },
    {
        "name": "Денис",
        "photo": "https://avatars.mds.yandex.net/get-pdb/1058492/c606d11d-e4fb-4d5b-9de6-84e590c34f8b/s1200"
    },
    {
        "name": "Вероника",
        "photo": "https://super.urok-ua.com/wp-content/uploads/2017/04/Avatarka-11-2.jpg"
    }
]
```
###### messages.json
```json
[
    "Привет!",
    "Пойдем в кино ?",
    "Кто сделал домашку ?",
    "У меня проблемы с промисами... :(",
    "Кто вчера был на конфе ? Поделитесь впечатлениями",
    "Я повторяю веб-компоненты - совсем опух...",
    "Похоже, гитлаб опять лег...",
    "Кто уже закачал проект на гит ?",
    "Я спал вчера 2 часа",
    "А я начинаю понимать промисы :)",
    "Вот бы недельку передышки, чтобы только пилить код :)",
    "Меня посылают в командировку, похоже, не попаду на защиту :(",
    "Кто завтра идет на коворкинг ? Встречаемся ?",
    "Отослал резюме на джуна, жду ответа",
    "Завтра у меня собес, пожелайте мне ни пуха",
    "Кто чем планирует заниматься на праздники ?",
    "Мне достался такой жуткий проект по верстке, что я в осадке...",
    "Не очень получается отцентровать иконки соцсетей в окружностях",
    "Я респонсив замутил уже, правда только до 1024рх"
]
```

Объявим два пустых массива

```javascript
let users = []
let messages = []
```

в которые мы будем помещать данные из файлов **users.json** и **messages.json**

Теперь воспользуемся методом **_`readFile()`_** модуля **`fs`** для чтения этих файлов

```javascript
fs.readFile(
    'users.json',
    'utf8',
    ( err, content ) => users = JSON.parse ( content )
)

fs.readFile(
    'messages.json',
    'utf8',
    ( err, content ) => messages = JSON.parse ( content )
)
```

Этот метод принимает три аргумента:

* имя файла ( и путь к файлу, если он расположен не в корневой папке )
* кодировка
* коллбэк-функция, которая будет вызвана, когда файл будет прочитан, и ей будет передано два аргумента:
    * сообщение об ошибке, если чтение файла завершится неудачей
    * содержимое файла в противном случае

Прочитанное содержимое мы помещаем в ранее объявленные массивы **_users_** и **_messages_**

Далее мы создаем вебсокет-сервер, как мы это уже делали в предыдущем упражнении

```javascript
const WebSocket = require('ws')
const server = new WebSocket
        .Server({ port: 8080 })
```

Теперь нужно познакомиться поближе с вебсокет-сервером

Каждый раз, когда происходит подключение нового клиента к вебсокет-серверу, происходит событие `connection`

Мы устанавливаем обработчика события `connection`

Этот event handler получает в качестве аргумента экземпляр нового соединения

```javascript
server.on ( 'connection', client => {
    ...
}
```
Этот экземпляр ( _client_ ) попадает в итерабельный объект **`server.clients`** ( экземпляр класса `Set` )

От своего конструктора ( `Set` ) **`server.clients`** наследует методы:

* `add`
* `clear`
* `delete`
* `entries`
* `forEach`
* `has`
* `keys`
* `values`

Мы воспользуемся методом `forEach`, чтобы сделать рассылку каждого нового сообщения всем подключенным клиентам

```javascript
server.on ( 'connection', client => {
    client.on ( 'message', received => {
        server.clients.forEach(
            client => client.send( received )
        )
    })
}
```

Для более оживленного чата при каждом поступлении на сервер сообщения от клиента добавим отправку всем клиентам случайно выбранного сообщения из массива **_messages_** от случайно выбранного клиента  из массива **_users_**

```javascript
server.on ( 'connection', client => {
    client.on ( 'message', received => {
        server.clients.forEach(
            client => client.send( received )
        )
        let newMessage = {
            user: users [
                randomValue ( users.length - 1 )
            ],
            message: messages [
                randomValue ( messages.length - 1 )
            ]
        }
        server.clients.forEach(
            client => client.send(
                JSON.stringify ( newMessage )
            )
        )
    })
}
```

где **_randomValue_** - функция:

```javascript
const randomValue = num =>
    Math.round (
        Math.random() * num
    )
```

Итак, серверный скрипт полностью готов:

###### start.js
```javascript
const fs = require('fs')

let users = []
let messages = []

fs.readFile(
    'users.json',
    'utf8',
    ( err, content ) => users = JSON.parse ( content )
)

fs.readFile(
    'messages.json',
    'utf8',
    ( err, content ) => messages = JSON.parse ( content )
)

const WebSocket = require('ws')

const server = new WebSocket
        .Server({ port: 8080 })

server.on ( 'connection', client => {
    client.on ( 'message', received => {
        server.clients.forEach(
            _client => _client.send( received )
        )
        let newMessage = {
            user: users [
                randomValue ( users.length - 1 )
            ],
            message: messages [
                randomValue ( messages.length - 1 )
            ]
        }
        server.clients.forEach(
            _client => _client.send(
                JSON.stringify ( newMessage )
            )
        )
    })
})

const randomValue = num =>
    Math.round (
        Math.random() * num
    )
```

***

#### Клиентская часть

###### index.html

```html
<!DOCTYPE html>
<html lang="ru">
  <head>
    <meta charset="UTF-8">
    <title>Websocket</title>
  </head>

  <body>
    <chat-element
        username="user"
        photo="https://i.pinimg.com/originals/0c/a9/e2/0ca9e28dcb12dc698cfd2beda6d6fa64.jpg">
    </chat-element>
    <script src = "./chat.js"></script>
    <script src = "./index.js"></script>
  </body>

</html>
```

Как можно увидеть из кода разметки, мы подключаем два файла скриптов ( chat.js и index.js ), которые должны находиться в корневой папке приложения

Кроме того, в разметке присутствует веб-компонент `<chat-element>` с атрибутами **_`username`_** и **_`photo`_**, значения которых вы можете изменить по своему усмотрению

###### chat.js

```javascript
class ChatElement extends HTMLElement {
    constructor () {
        super ()

        this.name = this.getAttribute( "username" ) || "admin"
        this.photo = this.getAttribute( "photo" ) || "http://hypeava.ru/uploads/posts/2018-03/1522076645_4.jpg"

        let shadow = this.attachShadow ( { mode: 'open' } )

        this.chatWindow = document.createElement ( 'div' )
        this.chatWindow.className = "chat"
        let input = document.createElement ( 'input' )
        input.innerText = 'Send message'
        input.onchange = this.sendMessage.bind ( this )

        this.css = document.createElement ( 'style' )
        this.css.textContent = `
            * {
                font-family: monospace, Arial;
            }
            .chat {
                width: ${window.innerWidth - 20}px;
                height: ${window.innerHeight - 120}px;
                border: inset 1px;
            }
            input {
                width: ${window.innerWidth - 50}px;
                border: inset 1px;
                background-color: #ded;
                box-shadow: inset 3px 3px 5px #00000090;
                padding: 8px 14px;
                outline: none;
            }
            p, img, .small, .text {
                margin: 4px 8px;
            }
            p {
              font-weight: bold;
              color: green;
            }
            .small {
              font-size:10px;
            }
        `
        shadow.appendChild ( this.css )
        shadow.appendChild ( this.chatWindow )
        shadow.appendChild ( input )
    }
    sendMessage ( event ) {
        let mess = {
            user: {
                name: this.name,
                photo: this.photo
            },
            message: event.target.value
        }
        socket.send( JSON.stringify ( mess ) )
    }
    reseiveMessage ( mess ) {
        let messageObject = JSON.parse ( mess )
        let messageElement = document.createElement ( 'div' )
        let ava = document.createElement ( 'img' )
        ava.src = messageObject.user.photo || "https://i.cartoonnetwork.com/prismo/props/chars/ben17_180x180_0.png"
        ava.width = "50"
        messageElement.appendChild ( ava )
        let userName = document.createElement ( 'p' )
        userName.innerText = messageObject.user.name
        messageElement.appendChild ( userName )
        let data = document.createElement ( 'div' )
        data.innerText = new Date().toLocaleString()
        data.className = "small"
        messageElement.appendChild ( data )
        let message = document.createElement ( 'span' )
        message.className = "text"
        message.innerText = messageObject.message
        messageElement.appendChild ( message )
        this.chatWindow.appendChild ( messageElement )
    }
    resize () {
        let rules = Array.from ( this.css.sheet.cssRules )

        rules.filter (
            rule => rule.selectorText === '.chat'
        )[0].style.cssText = `
            width: ${window.innerWidth - 20}px;
            height: ${window.innerHeight - 120}px;
            border: inset 1px;
        `
        rules.filter (
            rule => rule.selectorText === 'input'
        )[0].style.width = `${window.innerWidth - 50}px`
    }
}

customElements.define (
    'chat-element',
    ChatElement
)
```

###### index.js
```javascript
const socket = new WebSocket('ws://localhost:8080')

const chat = document.querySelector ( "chat-element" )

const user = {
    name: "garevna",
    photo: "https://github.com/garevna/js-course/blob/master/images/my-photo.png?raw=true"
}

socket.addEventListener( 'open', () => {
    socket.send(
        JSON.stringify ({
            user: user,
            message: 'Hello, do you listen to me ?'
        })
    )
})

socket.addEventListener( 'message', event => {
    chat.reseiveMessage ( event.data )
})

window.onresize = chat.resize.bind( chat )
```

