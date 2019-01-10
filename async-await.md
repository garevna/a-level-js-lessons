# :mortar_board: async | await 
###### ES7

Иногда нужно синхронизировать несколько асинхронных операций

В ES7 это достигается легко с помощью асинхронной функции

Для объявления асинхронной функции используется ключевое слово **`async`** ( перед **_function_** )

в теле асинхронной функции перед каждым выражением, возвращающим промис, ставится ключевое слово  **`await`**

Результатом будет объект класса **AsyncFunction**

```javascript
async function test () {}
console.dir ( test )
```
```console
▼ async ƒ test()
    arguments: (...)
    caller: (...)
    length: 0
    name: "test"
  ▼ __proto__: AsyncFunction
        arguments: (...)
        caller: (...)
      ► constructor: ƒ AsyncFunction()
        Symbol(Symbol.toStringTag): "AsyncFunction"
      ▼ __proto__: ƒ ()
        ► apply: ƒ apply()
          arguments: (...)
        ► bind: ƒ bind()
        ► call: ƒ call()
          caller: (...)
        ► constructor: ƒ Function()
          length: 0
          name: ""
        ► toString: ƒ toString()
        ► Symbol(Symbol.hasInstance): ƒ [Symbol.hasInstance]()
        ► get arguments: ƒ ()
        ► set arguments: ƒ ()
        ► get caller: ƒ ()
        ► set caller: ƒ ()
        ► __proto__: Object
```
:warning: **AsyncFunction** не является глобальным объектом

Попытка отратиться к объекту **AsyncFunction** вызовет исключение:
```javascript
test instanceof AsyncFunction
```
###### :no_entry_sign:` Uncaught ReferenceError: AsyncFunction is not defined`

поэтому получить ссылку на нее можно, например, так:
```javascript
var AsyncFunctionConstructor = test.__proto__.constructor
```
или:
```javascript
var AsyncFunction = ( async function () {} ).__proto__.constructor
```
Теперь исключения не будет:
```javascript
test instanceof AsyncFunction  // true
```
:warning: Асинхронная функция всегда возвращает промис

> Поэтому нельзя конструктор объявить как асинхронную функцию - конструктор должен возвращать экземпляр объекта, а не обещание

***
### :mortar_board: Принцип работы

Асинхронная функция является промисом, который обещает, что все асинхронные операции внутри него будут выполнены в строго заданном порядке, но когда это произойдет - неизвестно, поскольку каждая из операций будет выполнятся неизвестно сколько времени

В принципе, того же эффекта можно достичь с помощью цепочки промисов

Однако асинхронная функция делает код линейным и прозрачным

Синхронизируются внутри асинхронной функции промисы

Ключевое слово  **`await`**  выполняет ту же роль, что и метод `then()` каждого промиса

Различие в том, что метод `then()` промиса запускает свой коллбэк асинхронно, 

а ключевое слово **`await`** запускает функцию обратного вызова в нужное время

:warning: Если бы сама асинхронная функция не была промисом, при ее вызове мы получили бы блокирующую операцию, что недопустимо

Итак, асинхронная функция является "оберткой" для нескольких асинхронных операций, которые строго упорядочиваются, т.е. их коллбэки вызываются в заданной последовательности 

:warning: Ключевое слово  **`await`**  можно использовать только внутри асинхронных функций<br/>
В противном случае будет сгенерировано исключение
```console
⛔️ Uncaught SyntaxError: await is only valid in async function
```

***

:coffee: :one: 

###### Асинхронные процессы

```javascript
function common ( message ) {
    return new Promise (
        ( resolve, reject ) => {
            setTimeout (
                () => resolve ( message ),
                Math.random() * 8000
            )
        }
    )
}

function first () {
    return common ( "first" )
}

function second () {
    return common ( "second" )
}

function third () {
    return common ( "third" )
}
```

Задача - синхронизировать вызов коллбэков так, 

чтобы первым в консоль было выведено "**_first_**", затем "**_second_**", а затем "**_third_**"

Аасинхронный код выводит их в случайном порядке:

###### асинхронный код

```javascript
first().then( res => console.log ( res) )
second().then( res => console.log ( res) )
third().then( res => console.log ( res) )
```

###### цепочка промисов

```javascript
first().then(
    res => {
        console.log ( res )
        second().then(
            res => {
                console.log ( res )
                third().then(
                    res => console.log ( res )
                )
            }
        )
    } 
)
```

###### асинхронная функция

```javascript
let test = async () => {
    console.log ( await first() )
    console.log ( await second() )
    console.log ( await third() )
}

test()
```

Как видно из примера, код асинхронной функции проще, чем цепочка промисов

***

:coffee: :two:

```javascript
async function getUsersData ( userName ) {

    let readJSON = url => fetch ( url )
        .then ( response => response.json() )

    let userData = await readJSON (
        `https://api.github.com/users/${userName}`
    )

    document.body.appendChild (
        document.createElement ( "img" )
    ).src = userData.avatar_url

    let userRepos = await readJSON ( userData.repos_url )

    return readJSON ( userRepos[0].events_url )
}

getUsersData( 'josh' )
    .then ( events => console.log ( events ) )
```

***

:coffee: :three:

Предположим, есть две функции, возвращающие промис:

```javascript
var getNames = () => 
    new Promise ( ( resolve, reject ) => {
        setTimeout ( () => { resolve ( "Success" ) }, 1000 )  
    } )
var getPosts = () => 
    new Promise ( ( resolve, reject ) => { 
        setTimeout ( () => { resolve ( "Success" ) }, 1000 )
    } )
```
Каждый вызов длится 1 секунду<br/>
Нам нужно получить ответы от этих функций прежде, чем продолжить выполнение кода

Объявим асинхронную функцию:
```javascript
async function getData () {
    console.time ( 'time' )
    var posts = await getPosts ().then ( response => response )
    var names = await getNames ().then ( response => response )
    console.timeEnd ( 'time' )
    console.info ( `names: ${ names } | posts: ${ posts }` )
}
```
Функция **getData ()** фиксирует время начала операций<br/>
затем вызовет функцию **getPosts ()** с ключевым словом  **`await`**,<br/>
что означает, что пока асинхронный процесс функции **getPosts ()**<br/>
не завершится тем или иным образом,<br/>
выполнение кода будет приостановлено

Итак, **getData ()** ждет завершения асинхронной операции **getPosts ()**,<br/>
которая длится 1 сек.<br/>
Когда операция будет завершена<br/>
( т.е. промис функции **getPosts ()** будет разрешен либо resolve, либо reject ),<br/>
функция **getData ()** вызовет функцию **getNames ()**, <br/>
опять-таки  с ключевым словом  **`await`**<br/>
Опять ожидание ( 1 сек ) завершения асинхронного процесса <br/>
функции getNames (), после чего функция **getData ()** <br/>
выведет в консоль суммарную продолжительность всех операций <br/>
и полученные результаты

Теперь вызовем функцию **getData ()**
```javascript
getData ()
```
и посмотрим в консоль
```console
2 сек. names: Success  | posts: Success
```
`Аналогичного результата мы могли достичь с помощью цепочки промисов`

Что плохо?

То, что несвязанные между собой асинхронные процессы выстраиваются в очередь<br/>
Суммарная продолжительность операций 2 сек

Посмотрим на альтернативный вариант

:coffee: :four:
```javascript
function getData ( typ ) {
    return new Promise ( function ( resolve, reject ) {
        setTimeout ( () => {
            console.log ( 'Promise resolved: ', typ )
            resolve ( typ )
        }, 1000 )
    })
}

async function getAllData () {
    console.time ( "Total" )
    let promises = Array.from ( arguments )
        .map ( x => getData ( x ) )
    await Promise.all ( promises )
         .then ( response => {
             console.timeEnd ( "Total" )
             console.log ( "response: ", response )
          })
}

getAllData ( "figures", "colors", "diameters" )
```
Функция  **getData ()**  возвращает промис<br/>
Промис будет разрешен через 1 сек

Асинхронная функция  **getAllData ()**<br/>
формирует  массив промисов  **promises**<br/>
и запускает сразу все асинхронные процессы <br/>
с помощью метода  **_Promise.all ()_**

Перед вызовом метода  **_Promise.all ()_**  стоит ключевое слово  **await`**

Что происходит в этом случае:

Мы не выстраиваем очередь, а запускаем сразу все асинхронные процессы параллельно

Общая продолжительность операции не будет суммой продолжительности всех асинхронных процессов

В нашем примере вместо 3 секунд, которые мы получили бы в случае последовательной обработки запросов ( как в примере 1 ) мы получили общую продолжительность 1 сек

Используем  fetch  для получения данных трех типов:  **_JSON_**, **_text_**, **_img_**

[:coffee: :five:](https://plnkr.co/edit/jsH8XKmc0B6g4q8iPZBf?p=preview)

:coffee: :six:
```javascript
function getData ( typ ) {
    var __data = {
        colors: [ "blue", "green", "yellow", "orange", "red" ],
        figures: [ "triangle", "circle", "elipse", "square" ],
        diameters: [ 100, 200, 150, 250, 300 ]
    }
    return new Promise ( function ( resolve, reject ) {
        setTimeout ( () => {
            console.log ( 'Promise resolved: ', typ )
            Object.keys ( __data ).indexOf ( typ ) < 0 
                    ? reject ( "Data error" ) 
                    : resolve ( __data [ typ ] )
        }, Math.floor ( 2000 * Math.random() ) )
    })
}

async function getAllData () {
    let promises = []
    for ( var x of arguments ) {
        promises.push ( getData ( x ) )
    }
    return res = await Promise.all ( promises )
}

getAllData ( "figures", "colors", "diameters" )
    .then ( response => console.log ( 'response: ', response ) )
```
***
### [:briefcase: Упражнения](https://docs.google.com/forms/d/e/1FAIpQLScCfkFXktsQVNsDi4VVF8xJuEV_TpZ1bwtzPFHR0eqTbcwxiQ/viewform)