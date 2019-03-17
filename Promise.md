# :mortar_board: Promise

| [:frog: Промис в картинках](Promise-through-pictures) |
|-|

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

Промисы - это "коробки" для функций

Их особенность в том, что функция внутри промиса исполняется синхронно, но вот результат ее работы возращается всегда асинхронно

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

## Функция-исполнитель

Функция-исполнитель будет вызвана в основном потоке, синхронно, сразу при создании промиса

:warning: это не колбэк

это обычная функция

и если ей не передать колбэк-функции, и она нечего не будет вызывать ( ввиду отсутствия колбэков ), то ничего асинхронного не произойдет

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

То есть асинхронность будет тогда, когда появятся колбэки

***

## Колбэки

Поэтому у функции-исполнителя предусмотрены два формальных параметра - колбэки

```javascript
const promise = new Promise ( 
    function ( resolve, reject ) {
        ...
    } 
)
```

здесь **`resolve`** и **`reject`** - колбэк-функции

Однако это только формальные параметры...

Но функция внутри промиса уже вызвана...

Почему же не генерируется исключение ?

Рассмотрим простой пример без "обертки" ( промиса )

```javascript
console.log ( "Start" )

const resolve = data => console.log ( data )
const reject = err => console.warn ( err )

const executor = ( resolve, reject ) =>
    new Date().getSeconds() > 30 ? 
        resolve ( "success :)" ) : 
        reject ( new Error ( "ups... :(" ) )

executor ( resolve, reject )

console.log ( "Finish" )
```

В консоли:

```
Start
success :)
Finish
```

Если бы мы не объявили функции **`resolve`** и **`reject`** до вызова функции **`executor`**, было бы сгенерировано исключение **ReferenceError**

Почему же после "заворачивания" в промис функция, которая запускается сразу и вызывает необъявленный колбэк **`resolve`** или **`reject`**, срабатывает без иключения **ReferenceError** ?

Потому, что вызов колбэков произойдет асинхронно, и никак не раньше того момента, когда мы передадим функции **`executor`** конкретные функции вместо формальных параметов **`resolve`** и **`reject`**

Вопрос - как их передать ?

***

## then | catch

Вот здесь наша "обертка" ( промис ) и пригодится

Потому что у экземпляра `Promise` есть методы **_`then`_** и **_`catch`_**

>> Прикольно то, что эти методы возвращают... промис :wink:

Эти методы принимают колбэк-функции ( и ничего другого )

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

## Ожидание

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

Т.е. в момент создания промиса **`test`** было 24 секунды, а когда мы добавили колбэки, было уже 36 секунд

Если мы повторим:

```javascript
test
    .then ( data => console.log ( data, new Date().getSeconds() ) )
```

то мы увидим новое значение после слеша, и так можно "резвиться" до бесконечности :stuck_out_tongue_winking_eye:

***

### :coffee: 1

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

## Альтернатива `catch`

В принципе, не обязательно использовать метод **`catch`** для перехвата ошибки

Можно передать второй аргумент ( callback ) методу **`then`**

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

### :coffee: 2

Добавим реальной асинхронности:

```javascript
function randomResult () {
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

randomResult ()
    .then(
        data => console.log ( data ),
        err => console.warn ( err )
    )
```

В этом примере мы не только не знаем, что вызовет функция-испольнитель, мы не знаем, когда это произойдет  

***

### :coffee: 3

Используем **Battery API**  для получения инфо о зарядке аккумулятора

( метод  **_getBattery()_**  объекта  **navigator** возвращает промис ):

```javascript
navigator.getBattery().then ( result => {
    for ( var x in result ) 
        console.log ( `${x}: ${result[x]}` )
})
```

***

## Promise.all

Супер-удобная штука

Этот метод принимает массив промисов, и возвращает массив ответов тогда, когда все промисы разрезолвятся

```javascript
var promises = [
    new Promise ( resolve => setTimeout ( () => resolve ( "Hello" ), 1000 ) ),
    new Promise ( resolve => setTimeout ( () => resolve ( "Bye" ), 3000 ) ),
    new Promise ( resolve => setTimeout ( () => resolve ( "How are you?" ), 2000 ) )
]

Promise.all ( promises ).then ( response => document.body.innerHTML += `<p>${response}</p>` )
```

Плохо то, что если какой-то промис в массиве разреджектится, то слетят все остальные...

```javascript
const executor = ( resolve, reject ) =>
    Math.random () > 0.5 ? 
        resolve ( "success :)" ) : 
        reject ( new Error ( "ups... :(" ) )

var promises = [
    new Promise ( executor ),
    new Promise ( executor ),
    new Promise ( executor )
]

Promise.all ( promises )
    .then (
        response => document.body.innerHTML += `<p>${response}</p>`,
        err => console.warn ( err )
    )
```


***

| [:coffee: 4](https://plnkr.co/edit/WpZrRvD1ScHbCN3eUfC8?p=preview) | [:coffee: 5](https://plnkr.co/edit/BpFFu73mwsXDmZSdVOTn?p=preview) | [:coffee: 6](https://repl.it/@garevna/promise-sample-1) |
|-|-|-|

***

### :coffee: 7

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

### :coffee: 8

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