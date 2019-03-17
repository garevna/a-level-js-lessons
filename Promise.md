# :mortar_board: Promise

| :coffee: [Примеры](#samples) | [:frog: Промис в картинках](Promise-through-pictures) |
|-|-|

***

#### Где живут колбэки ?

Понятие асинхронности связано с понятием функции обратного вызова ( _callback_ )

Колбэки - обычные функции с необычным вызовом

Т.е. наш скрипт их, как правило, не вызывает

И, тем не менее, они исполняются

Исполняются они асинхронно относительно основного скрипта

Как бы "живут в другом измерении", и в непредсказуемые моменты времени появляются в нашем "измерении"

Функция обратного вызова всегда "привязана" к какому-то событию в браузере

1. событие может исходить от пользователя ( мышь, клавиатура, pointer на сенсорных девайсах... )
2. может быть связано с сервером, поскольку наше приложение запрашивает и отправляет данные
3. кроме того, есть еще таймеры - отдельная песня

Все эти события связывает следующее: 

* они могут произойти в любое время
* первым об этом узнает браузер - основной "хост" событий
* браузер должен знать, что нужно делать, когда событие произойдет
* для этого и нужны колбэки

Функции являются колбэками, если они не вызываются из основного потока, а "возвращаются" из [**`Event Loop`**](event-loop)

***

#### Зачем нужны промисы ?

Промисы - это способ организации асинхронного кода

Можно сказать больше: это способ создания асинхронного кода

Промисы - это "обертка"

Код, завернутый в промис, становится асинхронным, даже не будучи связан с каким-либо событием в браузере

Т.е. он не будет выполняться в основном ( и единственном ) потоке скрипта

Он "вернется", когда основной ( синхронный ) код отработает

## Конструктор Promise

Создание экземпляра **`Promise`** - это банальный вызов конструктора

```javascript
const promise = new Promise ( ... )
```

:warning: Конструктору передается функция - это обязательно

```javascript
const promise = new Promise ( 
    function ( ... ) {
        ...
    } 
)
```

Если вызвать конструктор **`Promise`** без аргумента:

```javascript
const promise = new Promise ()
```

будет сгенерировано исключение

```console
⛔️ Uncaught TypeError: Promise resolver undefined is not a function
```

***

Функция-исполнитель будет вызвана в основном потоке, синхронно, сразу при создании промиса

```javascript
console.log ( "Start" )

new Promise ( () => console.log ( "Promise starts" ) )

console.log ( "End" )
```

###### console

```console
Start
Promise starts
End
```

***

Предполагается, что функция, передаваемой конструктору **`Promise`** ( давайте в дальнейшем называть ее "**_исполнитель_**" ), запускает асинхронный процесс

* это может быть таймер
* это может быть AJAX

Однако, как мы видим из примера выше, это вовсе не обязательно :wink:

Когда процесс, запущенный функцией-исполнителем, завершится ( а если он асинхронный, то время завершения неизвестно ), то результатом могут быть какие-то данные

* либо это данные, которые ждет наш скрипт
* либо это объект ошибки, которая возникла при выполнении [ асинхронной ] операции, которую запустила функция

Но она не вернет результат до тех пор, пока не узнает, кому его нужно вернуть

Поэтому у функции-исполнителя есть два формальных параметра - колбэки

```javascript
const promise = new Promise ( 
    function ( resolve, reject ) {
        ...
    } 
)
```

здесь **`resolve`** и **`reject`** - колбэк-функции

В принципе, функция-исполнитель вольна вызывать их по своему ( т.е. нашему ) усмотрению

Например, так:

```javascript
new Promise (
    ( resolve, reject ) =>
        new Date().getSeconds() > 30 ? 
            resolve ( new Date().getSeconds() ) : 
            reject ( new Error (
                `Time is out: ${new Date().getSeconds()}` )
            )
)
```

Но вот совсем другое дело - как передать ей конкретные ссылки на колбэки

Вот здесь наша "обертка" и пригодится

Потому что у экземпляра `Promise` есть методы **_`then`_** и **_`catch`_**

Этим методам мы и передадим реальные колбэк-функции, которые будут использованы вместо формальных параметров **`resolve`** и **`reject`**

```javascript
new Promise (
    ( resolve, reject ) =>
        new Date().getSeconds() > 30 ? 
            resolve ( new Date().getSeconds() ) : 
            reject ( new Error (
                `Time is out: ${new Date().getSeconds()}` )
            )
)
    .then ( data => console.log ( data ) )
    .catch ( err => console.warn ( err ) )
```

***

Давайте помотрим, что произойдет, если мы создадим экземпляр `Promise` значительно раньше, чем повесим колбэки с помощью методов **_`then`_** и **_`catch`_**

```javascript
var test = new Promise (
    resolve => 
        resolve ( `Time: ${new Date().getSeconds()}/` )
)
```

Выждав несколько секунд, выполним код:

```javascript
console.log ( "Start" )
test
    .then ( data => console.log ( data, new Date().getSeconds() ) )

console.log ( "End" )
```

В консоли мы увидим что-то вроде:

```
Start
End
Time: 24/ 36
```

Т.е. в мемент создания промиса `test` было 24 секунды, а когда мы добавили колбэки, было уже 36 секунд

***

Давайте умышленно используем обычные функции, у которых есть объект `aguments` и, соответственно, `aguments.callee`

Пусть все наши функции выводят в консоль свое имя

Так мы сможем увидеть, как они вызываются и отрабатывают

```javascript
console.log ( "Start" )

new Promise (
    function executor ( resolve, reject ) {
        console.log ( arguments.callee.name )
        Math.random() >= 0.5 ? 
            resolve ( arguments.callee.name ) : 
            reject ( new Error ( arguments.callee.name ) )
    }
)
    .then (
        function resolve ( data ) {
            console.log ( `${arguments.callee.name}: ${data}` )
        }
    )
    .catch (
        function reject ( err ) {
            console.log ( `${arguments.callee.name}: ${err}` )
        }
    )

console.log ( "End" )
```

###### Результат в случае резолва:

```console
Start
executor
End
resolve: executor
```

###### Результат в случае реджекта:

```console
Start
executor
End
reject: Error: executor
```

Как мы видим, **`executor`** была вызвана сразу при создании промиса

Затем синхронный поток отработал, и вернулся колбэк

В первом случае - **`resolve`**

Во втором - **`reject`**

Каждый из них вывел свое имя и переданные ему данные

Колбэку **`resolve`** было передано имя функции-исполнителя

Колбэку **`reject`** был передан объект ошибки с именем функции-исполнителя

При этом ничего асинхронного в коде функции-исполнителя не было

Однако колбэки отработали асинхронно

***

В принципе, использование метода **`ca


```javascript
console.log ( "Start" )

new Promise (
    ( resolve, reject ) => {
        console.log ( "Promise starts" )
        Math.random() > 0.4 ? resolve( "Resolve" ) : 
            reject ( new Error ( "The promise was rejected" ) )
    })
    .then(
        data => console.log ( data ),
        err => console.warn ( err )
    )

console.log ( "End" )
```

Для этого у нее есть два формальных параметра - ссылки на колбэк-функции: 
* первый колбэк - для передачи ему 

Однако не банальным здесь является то, что мы не сразу передаем колбэк-функцию

Мы заворачиваем код 

Более того, мы передаем н

```javascript
console.log ( "Start" )

new Promise (
    ( resolve, reject ) => 
        Math.random() > 0.4 ? resolve( {
            name: "Google",
            type: "service"
        } ) : 
        reject ( new Error ( "The promise was rejected" ) ),
    )
    .then(
        data => console.log ( data ),
        err => console.warn ( err, data )
    )

console.log ( "End" )
```


***

```javascript
function fetchData() {
    return new Promise (
        ( resolve, reject ) => setTimeout (
            () => Math.random() > 0.4 ? resolve( {
                    name: "Google",
                    type: "service"
                } ) : 
                reject ( new Error ( "The promise was rejected" ) ),
            Math.round ( Math.random() * 5000 )
        )
    )
}

fetchData()
    .then(
        data => console.log ( data ),
        err => console.warn ( err )
    )
```

***

<a name="samples"></a>
### :coffee: Примеры

Итак, объект 🤖 создается с помощью конструктора **`Promise`**

Параметр, который передается конструктору - это функция, выполняющая некую асинхронную операцию

Эта функция, в свою очередь, получает на входе два параметра, оба - коллбэки, т.е. функции

***

:coffee: :one:

```javascript
var promise = new Promise ( 
    function ( resolve, reject ) { 
        ...
        if ( ... ) resolve 
        else reject 
    } 
)
```

***

:coffee: :two:

Используем Battery API  для получения инфо о зарядке аккумулятора

( метод  **_getBattery()_**  объекта  **navigator** возвращает промис ):
```javascript
navigator.getBattery().then ( result => {
    for ( var x in result ) 
        console.log ( `${x}: ${result[x]}` )
})
```

***

:coffee: :three:

```javascript
var promises = [
    new Promise ( resolve => setTimeout ( () => resolve ( "Hello" ), 1000 ) ),
    new Promise ( resolve => setTimeout ( () => resolve ( "Bye" ), 3000 ) ),
    new Promise ( resolve => setTimeout ( () => resolve ( "How are you?" ), 2000 ) )
]

Promise.all ( promises ).then ( response => document.body.innerHTML += `<p>${response}</p>` )
```

***

| [:coffee: :four:](https://plnkr.co/edit/WpZrRvD1ScHbCN3eUfC8?p=preview) | [:coffee: :five:](https://plnkr.co/edit/BpFFu73mwsXDmZSdVOTn?p=preview) | [:coffee: :six:](https://repl.it/@garevna/promise-sample-1) |
|-|-|-|

***

:coffee: :seven:

Для понимания полезности промисов в нашей асинхронной жизни рассмотрим простенький пример

```javascript
console.log ( "hello" )

new Promise (
    resolve => resolve ( "Promise successfully rejected" )
).then ( response => console.log ( response ) )

console.log ( "wait for promise" )
```

Обратите внимание, что функция, переданная конструктору `Promise`, отнюдь не асинхронная

Однако, завернув ее в промис, мы убрали ее из основного потока

Она будет выполнена тогда, когда **`Call Stack`** освободится, т.е. все текущие операции в основном потоке завершатся

Это позволяет избежать блокирующих операций

Если какой-то фрагмент кода содежит слишком "тяжеловесные" вычисления или операции, которые могут длиться достаточно долго, чтобы заблокировать основной поток - заверните такой код в промис, и он "уйдет" в [**`Event Loop`**](event-loop)

Почти аналогичного результата можно достичь с помощью таймера с нулевой задержкой:

```javascript
console.log ( "start" )

setTimeout ( () => console.log ( "Time is over" ), 0 )

console.log ( "Application finished" )
```

Однако результат с таймером все-таки отличается от результата с промисом

В первом случае ( с промисом ) приложение не завершает работу, пока промис не вернет результат

В случае с таймером приложение завершит работу к тому моменту, когда колбэк таймера сработает

```javascript
console.log ( "Start" )

setTimeout ( () => console.log ( "Timeout is over" ), 0 )

let promise = new Promise (
    resolve => resolve ( "Promise successfully resolved" )
)

promise.then ( response => console.log ( response ) )

console.log ( "Finish" )
```

Запустите этот код в консоли и обратие внимание, что таймер сработает после промиса, хотя промис в коде следует за таймером

```console
Start
Finish
Promise successfully rejected
undefined   // выполнение кода основного потока завершено
Timeout is over
```

***

:coffee: :eight:

Обратите внимание, в какой последовательности будут срабатывать колбэки промисов

```javascript
console.log ( "Диалог в чате" )

new Promise ( resolve => resolve ( "Привет, тебя как зовут?" ) )
    .then ( response => console.log ( response ) )
    .then ( () => console.log ( "А меня Миша. Ты где живешь?" ) )
    .then ( () => console.log ( "Во Львове. Ты работаешь или учишся?" ) )
    .then ( () => console.log ( "Я тоже. Ладно, до связи, удачи!" ) )

new Promise ( resolve => resolve ( "Привет, Маша, а тебя?" ) )
    .then ( response => console.log ( response ) )
    .then ( () => console.log ( "В Харькове. А ты где?" ) )
    .then ( () => console.log ( "Учусь, и работаю. А ты?" ) )
    .then ( () => console.log ( "Спасибо, и тебе )" ) )

console.log ( "___________________" )
```

Из этого примера очевидно, что промисы позволяют организовать асинхронное выполнение кода