# ![ico-30 study] Паттерны проектирования

## ![ico-25 icon] Observer

Разберем конкретную ситуацию, в которой можно применить этот паттерн

Есть модель - это данные, которые динамически обновляются

Есть представление - данные должны отображаться пользователю

Нужно обеспечить реактивность приложения, т.е. отображение должно оперативно обновляться при обновлении данных модели

При этом модули должны быть независимы

Как оповестить модуль, отвечающий за представление, об изменении данных модели ?

_______________________________

![ico-25 cap] ** 1**

Пусть есть массив идентификаторов для элементов:

~~~javascript
const inputs = [
    "author",
    "topic",
    "message"
]
~~~

функция, создающая и вставляющая элемент на страницу:

~~~javascript
const addElem = ( tag = "input", container ) =>
    ( container && container.nodeType === 1 ?
                container : document.body )
        .appendChild ( document.createElement ( tag ) )
~~~

Создадим массив элементов _~input~_:

~~~javascript
const observed = inputs.map (
    item => {
        let label = addElem ( "label" )
        let elem = addElem()
        elem.id = item
        label.for = item
        label.innerText = item
        addElem ( "br" )
        return elem
    }
)
~~~

Итак, пользователь может в любой момент изменить данные модели

_________________________________________________________

Давайте создадим представление:

~~~javascript
const subscriber = document.body.appendChild (
    document.createElement ( "section" )
)
~~~

можно даже стилизовать этот элемент:

~~~javascript
subscriber.style = `
    border: inset 1px;
    padding: 10px 20px;
    font-family: Arial;
    color: darkblue;
    margin: 20px;
`
~~~

Будем отображать в **~subscriber~** данные, которые пользователь вводит в поля *~input~*

Для этого создадим ему метод **_~showInfo~_**

~~~javascript
subscriber.showInfo = function ( data ) {
    this.topic = data.topic ? data.topic : this.topic ? this.topic : ""
    this.author = data.author ? data.author: this.author ? this.author : ""
    this.message = data.message ? data.message: this.message ? this.message : ""
    this.innerHTML = `
       <h3>${this.topic}</h3>
       <small>${this.author}</small>
       <p>${this.message}</p>
    `
}.bind ( subscriber )
~~~

Этому методу передается объект **_~data~_**, в котором содержатся данные модели

Метод обновляет контент элемента **~subscriber~**

Осталось только "подписать" **~subscriber~** на обновления данных модели

___________________________________________

Создадим класс **~Observer~**:

~~~~js
class Observer {
    constructor ( subjects ) {
        this.subscribers = []
        this.events = subjects.map (
            function ( elem ) {
                elem.oninput = function ( event ) {
                    this.broadcast ( { [elem.id]: event.target.value } )
                }.bind(this)
                return elem.oninput
            },
            this
        )
    }
    subscibe ( client ) {
        typeof client === "function" ? this.subscribers.push ( client ) :
            console.warn ( "Invalide subscriber" )
    }
    unsubscibe ( client ) {
        this.subscribers = this.subscribers
            .filter ( subscriber !== client )
    }
    broadcast ( data ) {
        this.subscribers.forEach (
            client => client ( data )
        )
    }
}
~~~~

Конструктору класса **~Observer~** передается массив **_~subjects~_**

Это массив ссылок на элементы _~input~_, которые обозреватель будет отслеживать

при изменении значений элементов обозреватель должен оповестить всех подписчиков об обновлении данных и передать им обновленные данные

^^Подписчики - это функции, которые нужно будет вызвать при изменении данных модели^^
Ссылки на них будут храниться в массиве **_~subscribers~_**

• Для того, чтобы подписаться на уведомления обозревателя, нужно вызвать его метод **_~subscibe~_**
• Для того, чтобы отписаться от уведомлений обозревателя, нужно вызвать его метод **_~unsubscibe~_**
• Для оповещения подписчиков есть метод **_~broadcast~_**

Осталось только создать экземпляр обозревателя **~observer~**, передав ему ссылки на отслеживаемые элементы **_~observed~_**:

~~~javascript
const  = new Observer ( observed )
~~~

и подписать на его оповещения наше представление **~subscriber~**:

~~~javascript
observer.subscibe ( subscriber.showInfo )
~~~

Тееперь при изменении значений в полях _~input~_ созданное нами представление **~subscriber~** будет реактивно обновляться:

| ![](https://github.com/garevna/js-course/blob/master/pictures/observer-1.gif?raw=true) |

____________________________________________________

Полный код сниппета:

~~~~js
const inputs = [
    "author",
    "topic",
    "message"
]

const addElem = ( tag = "input", container ) =>
    ( container && container.nodeType === 1 ?
                container : document.body )
        .appendChild ( document.createElement ( tag ) )


const observed = inputs.map (
    item => {
        let label = addElem ( "label" )
        let elem = addElem()
        elem.id = item
        label.for = item
        label.innerText = item
        addElem ( "br" )
        return elem
    }
)

const subscriber = document.body.appendChild (
    document.createElement ( "section" )
)

subscriber.showInfo = function ( data ) {
    this.topic = data.topic ? data.topic : this.topic ? this.topic : "topic"
    this.author = data.author ? data.author: this.author ? this.author : "author"
    this.message = data.message ? data.message: this.message ? this.message : "message"
    this.innerHTML = `
       <h3>${this.topic}</h3>
       <small>${this.author}</small>
       <p>${this.message}</p>
    `
}.bind ( subscriber )


class Observer {
    constructor ( subjects ) {
        this.subscribers = []
        this.events = subjects.map (
            function ( elem ) {
                elem.oninput = function ( event ) {
                    this.broadcast ( { [elem.id]: event.target.value } )
                }.bind(this)
                return elem.oninput
            },
            this
        )
    }
    subscibe ( client ) {
        typeof client === "function" ? this.subscribers.push ( client ) :
            console.warn ( "Invalide subscriber" )
    }
    unsubscibe ( client ) {
        this.subscribers = this.subscribers
            .filter ( subscriber !== client )
    }
    broadcast ( data ) {
        this.subscribers.forEach (
            client => client ( data )
        )
    }
}

const observer = new Observer ( observed )

observer.subscibe ( subscriber.showInfo )
~~~~

![](https://github.com/garevna/js-course/blob/master/pictures/observer-2.gif?raw=true)
