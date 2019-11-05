# ![ico-30 study] async | await

**ES7**

______________________________________________________________

Для объявления асинхронной функции используется ключевое слово **~async~** ( перед **_function_** )

~~~js
async function sigma () {
  ...
}
~~~

или так:

~~~js
const sayHello = async () => "Hello"
~~~

________________________________________________________________________________________________

## ![ico-25 icon] async function as a Promise

![ico-20 warn] Вызов асинхронной функции возвращает промис

Поэтому с помощью асинхронной функции можно очень просто создавать промисы:


◘◘![ico-25 cap] **Пример 1**◘◘

~~~js
const func = async message => message

setTimeout ( () => console.log ( "Task" ) )

func( "Microtask" )
    .then ( response => console.log ( response ) )

console.log ( "Main thread" )
~~~

^^Первым в скрипте устанавливается таймер с нулевой задержкой ( время мы опустили )^^

^^Далее вызывается асинхронная функция **func**, которая, как мы знаем, возвращает промис, поэтому результат ее работы мы "ловим" в колбэке, который передаем с помощью метода **~then~**^^
^^Обратите внимание, что асинхронная функция **func** всего лишь возвращает то, что ей передадут при вызове^^

^^Последний вызов **~console.log~** должен вывести в консоль сообщение _~Main thread~_^^

^^Однако последовательность вывода в консоль абсолютно не соответствует последовательности, заданной в скрипте^^

~~~console
Main thread
Microtask
Task
~~~

Как работала "машинка":

^^В Call Stack попал код основного потока^^
^^В очередь задач попал колбэк таймера^^
^^В очередь микротасков попал колбэк, который мы передали методу **~then~** промиса, возвращенного асинхронной функцией **func**^^

| **Call Stack**                   | **Task Queue**                  | **Microtask Queue**                     |
| ^^_console.log("Main thread")_^^ | ^^_() => console.log("Task")_^^ | ^^_response => console.log(response)_^^ |

^^Первым отработал синхронный код основного потока и мы получили сообщение _~Main thread~_^^
^^Далее, когда Call Stack освободился, в него попал колбэк из очереди микротасков^^
^^Когда он вывел сообщение ~_Microtask~_ и завершил работу, Call Stack освободился, и в него попал колбэк из очереди тасков, который вывел в консоль сообщение _~Task~_^^

Таким образом, мы создали промис без конструктора Promise
Мы просто использовали ключевое слово **~async~**:

~~~js
const func = async message => message
~~~

и поэтому вызов функции **func** возвращает промис,
у которого, как мы знаем, есть метод **~then~** для передачи колбэка

Что получит этот колбэк ?
Чем резолвится промис, возвращаемый асинхронной функцией?

![ico-20 warn] Он резолвится тем, что возвращает асинхронная функция с помощью оператора **~return~**

Если в асинхронной функции нет оператора ~return~, то возвращаемый ею промис будет резолвиться значением ~undefined~

________________________

◘◘![ico-25 cap] **Пример 2**◘◘


~~~js
const asyncFunc = async message => message

const func = message => asyncFunc ( message )
    .then ( response => console.log ( response ) )

setTimeout ( () => console.log ( "Task" ) )
func( "Microtask 1" )
func( "Microtask 2" )
func( "Microtask 3" )
console.log ( "Main thread" )
~~~

~~~console
Main thread
Microtask 1
Microtask 2
Microtask 3

Task
~~~

________________________________________________________________________________________________

## ![ico-25 icon] await

![ico-20 warn] Ключевое слово  **~await~**  можно использовать только внутри асинхронных функций

^^В противном случае будет сгенерировано исключение^^

••![ico-20 error] Uncaught SyntaxError: await is only valid in async function••

Ключевое слово  **~await~**  выполняет ту же роль, что и метод **~then()~** каждого промиса

◘◘**^^Promise^^**◘◘

~~~js
let promise = new Promise (
    ( resolve, reject ) => Math.random () > 0.5 ? resolve ( "good" ) : reject ( "bad" )
)

promise.then (
    response => console.log ( response ),
    err => console.warn ( err )
)
~~~

◘◘**^^async function^^**◘◘

~~~js
let test = async () => Math.random () > 0.5 ? await "good" : await "bad"

test().then ( response => console.log ( response ) )
~~~

Обратите внимание на последовательность вывода в консоль:

◘◘![ico-25 cap] **Пример 3**◘◘

~~~js
async function hello ( message ) {
    console.log ( message )
    return "I've finished"
}

console.log ( "Start" )

hello( "Hello!" ).then ( response => console.log ( response ) )

console.log ( "Finish" )
~~~

Результат

••Start<br>Hello!<br>Finish<br>I've finished••


При отсутствии **~await~** код внутри асинхроной функции отработал в основном потоке, синхронно

^^Обратите внимание, что точно так же отрабатывает код функции, передаваемой конструктору **Promise**^^

Функция ~hello~ возвращает промис, который резолвится строкой "I've finished"

А теперь используем ключевое слово **~await~**:

^^^[await]

~~~js
async function hello ( message ) {
    console.log ( await message )
    return "I've finished"
}

console.log ( "Start" )

hello( "Hello!" ).then ( response => console.log ( response ) )

console.log ( "Finish" )
~~~

Последовательность вывода в консоль изменилась ![ico-20 smile]

••Start<br>Finish<br>Hello!<br>I've finished••

^^^

Теперь передадим функции ~hello~ не строку "Hello!", а промис, который резолвится этой строкой:

^^^[Promise]

~~~js
async function hello ( message ) {
    console.log ( await message )
    return "I've finished"
}

console.log ( "Start" )

hello( new Promise (
    resolve => resolve ( "Hello!" )
) ).then ( response => console.log ( response ) )

console.log ( "Finish" )
~~~

••Start<br>Finish<br>Hello!<br>I've finished••

^^Как мы видим, результат идентичен предыдущему^^

^^^

**Вывод**: если после **~await~** следует любое значение, то это значение "заврачивается" в промис, который резолвится этим значением

^^Это означает, что создавать асинхронщину с помощью асинхронной функции очень легко ![ico-20 smile]^^

__________________________________________________________________________

В этом примере код основного потока отработает при значении ** 5** переменной ~num~

Однако вызов асинхронной функции ~sample()~ приведет к тому, что после завершения работы кода основного потока значение переменной ~num~ будет уже 10

◘◘![ico-25 cap] **Пример 4**◘◘

~~~js
let num = 5

async function sample ( arg ) {
    num = await arg
}

sample ( 10 ).then ( () => console.log ( `Finish value: ${num}` ) )
console.log ( "Start value: ", num )
~~~

**Output**:

••Start value:  5••
••Finish value: 10••

_________________________________


◘◘![ico-25 cap] **Пример 5**◘◘

~~~js
async function getUser ( userNum ) {
    return ( await (
      await fetch (`https://api.github.com/users/${userNum}`)
    ).json() ).name
}

getUser ( 5 )
  .then ( response => console.log ( response ) )
~~~

**Output**:

••Yuriy Semchyshyn••

_____________________________________

![ico-20 warn] Если после ключевого слова **~await~** стоит ссылка на любой объект, у которого есть метод **~then()~**, 
то будет вызван метод **~then()~** этого объекта

Сам объект при этом вовсе не обязательно должен быть промисом ![ico-20 smile]

_____________________________________

◘◘![ico-25 cap] **Пример 6**◘◘

~~~js
const browsers = [ "Chrome", "Mozilla", "Safari", "IE" ]

browsers.then = ( function () {
    let current = 0
    return function ( resolve ) {
        let response = {
            value: this [ current++ ],
            done: current > this.length
        }

        setTimeout (
            () => resolve.call ( null, response ),
            1000
        )
    }
})()

async function showBrowsers () {
    do {
        var { done, value } = await browsers
        console.log ( `{ value: ${value}, done: ${done} }` )
    } while ( !done )
}

showBrowsers ()
~~~

В этом примере мы используем асинхронную функцию в качестве итератора
Массиву **browsers** мы добавили метод **then**
Этот метод возвращает объект с двумя свойствами: **value** и **done**
Когда в теле асинхронной функции мы ставим **await** перед **browsers**,
происходит вызов метода **then** массива **browsers**

{{{async-await-6.js}}}

____________________________________________________________

Создадим две асинхронные функции: 

**async&#95;without&#95;await**
**async&#95;await**

Как видно из их названий, в одной из них используется ключевое слово **~await~**, а в другой - нет

Кроме того, создадим промис **promise**, который сразу разрезолвим

◘◘![ico-25 cap] **Пример 7**◘◘

~~~js
const async_without_await = async () => "async without await"
const async_await = async () => await "async and await"
const promise = Promise.resolve ( "promise resolved" )

const show = resp => console.log ( resp )
~~~

◘◘Вариант 1◘◘

~~~js
show ( "Start" )

async_await ().then ( show )
promise.then ( show )
async_without_await ().then ( show )

show ( "Finish" )
~~~

Как видите, первой идет **async&#95;await**, следом - **promise**, а потом - **async&#95;without&#95;await**
Однако результат в консоли будет несколько иным:

{{{async-await-7-1.js}}}

т.е. **async&#95;await** разрезолвилась последней

________________

◘◘Вариант 2◘◘

~~~js
show ( "Start" )

promise.then ( show )
async_await ().then ( show )
async_without_await ().then ( show )

show ( "Finish" )
~~~

Здесь первым идет **promise**, затем - **async&#95;await**, а замыкает цепочку опять **async&#95;without&#95;await**

{{{async-await-7-2.js}}}

Однако в консоли "замыкающим" будет вовсе не **async&#95;without&#95;await**, а опять **async&#95;await**
При этом **promise** и **async&#95;without&#95;await** поддерживают порядок следования их в коде

◘◘Вариант 3◘◘

~~~js
show ( "Start" )

async_await ().then ( show )
async_without_await ().then ( show )
promise.then ( show )

show ( "Finish" )
~~~

Обратите внимание, что **async&#95;await** всегда резолвится последней, даже если ее положение в коде раньше **promise** и **async&#95;without&#95;await**

{{{async-await-7-3.js}}}

Это связано с тем, что использование ключевого слова **~await~** перед строкой "_async and await_" 
равносильно использованию Promise.resolve ("_async and await_"), 
т.е. мы получаем промис, "завернутый" в промис, в силу чего он и резолвится всегда последним

______________________________________________

Разберите работу кода:

◘◘![ico-25 cap] **Пример 8**◘◘

~~~js
let promise = message => new Promise (
    resolve => {
        let time = Math.round ( Math.random() * 3000 )
        setTimeout (
            () => resolve ( `${message}: ${time}` ),
            time
        )
    }
)

async function test () {
    return await promise (
        await promise (
            await promise ( "start" )
        )
    )
}

test().then ( response => console.log ( response ) )
~~~

{{{async-await-8.js}}}

В принципе, того же эффекта можно достичь с помощью цепочки промисов
Однако асинхронная функция делает код линейным и прозрачным
Внутри асинхронной функции синхронизируются вызовы коллбэков промисов

______________________________________________

### ![ico-20 icon] Работа с событиями элементов DOM

◘◘![ico-25 cap] **Пример 9**◘◘

~~~js
let promise = message => new Promise (
    resolve => {
        let input = document.body.appendChild (
            document.createElement ( "input" )
        )
        input.placeholder = message
        input.onchange = function ( event ) {
            resolve ( event.target.value )
            event.target.remove()
        }
    }
)

const func = async () => {
    console.log ( await promise ( "Your name" ) )
    console.log ( await promise ( "Your hobby" ) )
    console.log ( await promise ( "Your speciality" ) )
}

func()
~~~

{{{async-await-9.js}}}

______________________________________________

◘◘![ico-25 cap] **Пример 10**◘◘

~~~JS
let promise = message => new Promise (
    resolve => {
        let input = document.body.appendChild (
            document.createElement ( "input" )
        )
        input.placeholder = message
        input.onchange = function ( event ) {
            resolve ( event.target.value )
            event.target.remove()
        }
    }
)

const func = async () => {
    let user = {}
    const messages = [ "name", "hobby", "speciality" ]

    let responses = await Promise.all (
        messages.map ( message => promise ( message ) )
    )

    responses.forEach (
        ( val, index ) => Object.assign (
            user,
            { [ messages [ index ] ] : val }
        )
    )
    return user
}

func().then ( response => console.log ( response ) )
~~~

{{{async-await-10.js}}}

______________________________________________

### ![ico-20 icon] Упорядочивание асинхронных процессов

Итак, асинхронная функция является "оберткой" для нескольких асинхронных операций, выполнение которых можно упорядочить во времени, т.е. сделать так, чтобы их коллбэки отрабатывали в заданной последовательности

![ico-25 cap] **Пример 11**

^^Предположим, есть три функции: **_first_**, **_second_** и **_third_**, которые возвращают промис^^

~~~~js
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

function  () {
    return common ( "second" )
}

function third () {
    return common ( "third" )
}
~~~~

^^Задача - синхронизировать вызов коллбэков так, чтобы первым в консоль было выведено "**_first_**", затем "**_second_**", а затем "**_third_**"^^

^^Асинхронный код выводит их в случайном порядке:^^

~~~js
first().then( res => console.log ( res) )
second().then( res => console.log ( res) )
third().then( res => console.log ( res) )
~~~

^^**цепочка промисов**^^

~~~js
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
~~~

^^**асинхронная функция**^^

~~~js
let test = async () => {
    console.log ( await first() )
    console.log ( await second() )
    console.log ( await third() )
}

test()
~~~

^^Как видно из примера, код асинхронной функции проще, чем цепочка промисов^^

________________________________


Рассмотрим чисто умозрительный вариант 
( на практике такое делать не надо ):

◘◘![ico-25 cap] **Пример 12**◘◘

~~~js
let users = [ "Stephan", "Andry" ].reduce (
    async ( result, item ) => {
        let data = await ( await fetch ( `https://garevna-json-server.glitch.me/users?name=${item}` ) ).json()
        result = await result
        result.push( data[0] )
        return result
    },
    []
)
~~~

Что здесь интересно:

методу **reduce** передается асинхронная функция, которая возвращает промис
Поэтому после каждой итерации переменная **result** будет промисом,
и ее надо резолвить с помощью **await**

В результате работы скрипта в переменной **users** будет промис
Извлечем результат из промиса:

~~~js
users.then ( res => console.log ( res ) )
~~~

![ico-20 yes] Внимание, чтобы сократь число обращений к серверу, лучше сделать так:

~~~js
fetch ( `https://garevna-json-server.glitch.me/users?name=Stephan&name=Andry`)
    .then ( res => res.json() )
        .then ( resp => console.log ( resp ) )
~~~

или так:

~~~js
let getUsers = async ( endpoint, userList ) =>
    await ( await fetch (
        userList.reduce (
            ( result, item, index ) => result += `${index > 0 ? "&" : ""}name=${item}`,
            endpoint + "?"
        )
    ) ).json()

getUsers (
    "https://garevna-json-server.glitch.me/users",
    [ "Stephan", "Andry" ]
).then ( response => console.log ( response ) )
~~~

___________________________________________

◘◘![ico-25 cap] **Пример 13**◘◘

~~~js
async function getUsersData ( userName ) {

    let userData = await (
      await fetch ( `https://api.github.com/users/${userName}` )
    ).json()

    const addElem = tagName =>
        document.body.appendChild (
            document.createElement ( tagName )
        )

    addElem ( "img" ).src = userData.avatar_url

    let userRepos = await (
        await fetch ( userData.repos_url )
    ).json()

    for ( let item of userRepos )
        addElem ( "div" ).innerText = item.events_url

    return "Ready"
}

getUsersData( 'josh' )
    .then ( event => console.log ( event ) )
~~~

_________________________________________


[:::**Пример в песочнице**:::](https://plnkr.co/edit/jsH8XKmc0B6g4q8iPZBf?p=preview)

_______________________

[%%%**Тесты**%%%](https://garevna.github.io/js-quiz/#async)
