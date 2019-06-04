# ![ico-30 study] async | await

**ES7**

Иногда бывает нужно упорядочить выполнение нескольких асинхронных операций

Мы уже можем решить такую задачу с помощью промиса и цепочки вызовов метода **~then~**

Однако есть альтернативный вариант - асинхронная функция

^^По факту, это просто альтернативный синтаксис того же промиса - вызов асинхронной функции возвращает промис^^

^^т.е. она обещает, что все асинхронные операции внутри нее будут выполнены в строго заданном порядке, но когда это произойдет - неизвестно, поскольку каждая из операций будет выполнятся неизвестно сколько времени^^

Это означает, что результат работы асинхронной функции нужно ловить в коллбэке метода **~then~**

Для объявления асинхронной функции используется ключевое слово **~async~** ( перед **_function_** )

~~~js
async function sigma () {
  ...
}
~~~

в теле асинхронной функции перед каждым выражением, возвращающим промис, ставится ключевое слово  **~await~**

_________________________

![ico-25 cap] **Пример 1**

Тут мы внутри асинхронной функции объявляем функцию **promise**, которая возвращает промис, при этом биндит колбэку **resolve** первый аргумент, переданный функции **promise**
Второй аргумент функции **promise** используется для установки таймера

~~~js
async function sigma () {
    function promise () {
        return new Promise (
            resolve => {
                setTimeout (
                    resolve.bind ( null, arguments[0] ),
                    arguments[1] * 1000
                )
            }
        )
    }

  console.log ( await promise( "Start", 5 ) )
  console.log ( await promise( "Continue", 3 ) )
  console.log ( await promise( "End", 2 ) )
  return "Finish"
}

sigma().then ( response => console.log ( response ) )
~~~

__________________________________

## ![ico-25 icon] Конструктор AsyncFunction

Асинхронная функция является экземпляром класса **AsyncFunction**

![ico-20 warn] AsyncFunction **не** является глобальным объектом

~~~js
async function test () {}
console.dir ( test )
~~~

~~~~test()
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
~~~~

^^Попытка отратиться к объекту **AsyncFunction** вызовет исключение:^^

~~~js
test instanceof AsyncFunction
~~~

![ico-20 err] ~Uncaught ReferenceError: AsyncFunction is not defined~

^^поэтому получить ссылку на нее можно, например, так:^^

~~~js
const AsyncFunctionConstructor = test.__proto__.constructor
~~~

^^или:^^

~~~js
const AsyncFunction = ( async function () {} ).__proto__.constructor
~~~

^^Теперь исключения не будет:^^

~~~js
test instanceof AsyncFunction  // true
~~~

Более того, мы можем теперь использовать ссылку на конструктор AsyncFunction для создания экземпляра асинхронной функции:

~~~javascript
const asyncFunc = new AsyncFunction

console.log ( asyncFunc )
~~~

**Result**

~~~js
async ƒ anonymous(
) {

}
~~~

Но и это еще не все ![ico-20 smile]

__________________________________

![ico-25 cap] **Пример 2**

Давайте немного "порезвимся" и добавим в прототип конструктора асинхронных функций метод **waitFor**:

~~~js
( async function () {} )
    .__proto__
        .waitFor = ( message, time ) =>
            new Promise (
                resolve => setTimeout (
                    () => resolve ( message ),
                    time * 1000
                )
            )
~~~

а теперь создадим асинхронную функцию **sample**:

~~~js
const sample = async ( message, time ) =>
    console.log (
        await sample.waitFor ( message, time )
    )
~~~

Осталось только вызвать функцию **sample**:

~~~js
console.log ( "Start" )

sample( "Hello", 3 )

console.log ( "End" )
~~~

_______________________________

## ![ico-25 icon] async function as a Promise

![ico-20 warn] Вызов асинхронной функции возвращает промис

![ico-20 warn] Если бы асинхронная функция не была промисом, при ее вызове мы получили бы **блокирующую** операцию

Поэтому с помощью асинхронной функции можно очень просто создавать промисы:

![ico-25 cap] **Пример 3**

~~~js
console.log ( "start" )

const sample = async resolve => resolve( "hello" )

sample( response => response )
    .then( response => console.log ( response ) )

console.log ( "..." )


const sigma = async resolve => await resolve( "baby" )

sigma( response => response )
    .then( response => console.log ( response ) )

console.log ( "end" )
~~~

^^Обе асинхронные функции ( **sample** и **sigma** ) получают в качестве аргумента простейшую колбэк-функцию ~response => response~, которая возвращает то, что получает^^

^^В первом случае мы не использовали ключевое слово **~await~** в теле асинхронной функции **sample**, а во втором ( функция **sigma** ) мы вызываем колбэк-функцию с ключевым словом **~await~**^^

^^Обратите внимание на последовательность выполнения коллбэков:^^
^^сначала выполняется весь синхронный код,^^
^^а затем возвращаются из Event Loop колбэки и отрабатывают в той последовательности, в которой были вызваны их асинхронные функции^^

~~~console
start
...
end
hello
baby
~~~

Таким образом, промисы можно создавать без конструктора **Promise** ![ico-20 smile]

________________________

![ico-25 cap] **Пример 4**

Разберите работу кода:

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

Результат в консоли:

~~~console
start: 2669: 2775: 477
~~~

В принципе, того же эффекта можно достичь с помощью цепочки промисов
Однако асинхронная функция делает код линейным и прозрачным
Внутри асинхронной функции синхронизируются вызовы коллбэков промисов

___________________________

## ![ico-25 icon] await

![ico-20 warn] Ключевое слово  **~await~**  можно использовать только внутри асинхронных функций

^^В противном случае будет сгенерировано исключение^^

^^![ico-20 err] ~Uncaught SyntaxError: await is only valid in async function~^^

Ключевое слово  **~await~**  выполняет ту же роль, что и метод **~then()~** каждого промиса

![ico-25 cap] **Пример 5**

~~~js
async function getUser ( userNum ) {
    return await (
      await fetch (`https://api.github.com/users/${userNum}`)
    ).json()
}

getUser ( 5 )
  .then ( response => console.log ( response ) )
~~~

_____________________

![ico-20 warn] При этом главное - это наличие метода **~then()~** у объекта, который будет после ключевого слова **~await~**
Сам объект при этом вовсе не обязательно должен быть промисом ![ico-20 smile]

![ico-25 cap] **Пример 6**

~~~js
const browsers = [ "Chrome", "Mozilla", "Safari", "IE" ]
browsers.then = ( function () {
    let current = 0
    return function ( resolve ) {
        let response = {
            value: this [ current++ ],
            done: current < this.length
        }

        setTimeout (
            () => resolve.call ( null, response ),
            1000
        )
    }
})()

async function showBrowsers () {
    console.log ( await browsers )
    console.log ( await browsers )
    console.log ( await browsers )
    console.log ( await browsers )
    console.log ( await browsers )
}

showBrowsers ()
~~~

______________________________________________

## ![ico-25 icon] Упорядочивание асинхронных процессов

Итак, асинхронная функция является "оберткой" для нескольких асинхронных операций, которые строго упорядочиваются, т.е. их коллбэки отрабатывают в заданной последовательности

![ico-25 cap] **Пример 7**

Предположим, есть три функции: **_first_**, **_second_** и **_third_**, которые возвращают промис

Асинхронные процессы

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

~~~javascript
first().then( res => console.log ( res) )
second().then( res => console.log ( res) )
third().then( res => console.log ( res) )
~~~

^^**цепочка промисов**^^

~~~~js
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
~~~~

^^**асинхронная функция**^^

~~~~js
let test = async () => {
    console.log ( await first() )
    console.log ( await second() )
    console.log ( await third() )
}

test()
~~~~

^^Как видно из примера, код асинхронной функции проще, чем цепочка промисов^^

________________________________

![ico-25 cap] **Пример 8**

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

## ![ico-25 icon] async function vs Propmise.all

![ico-25 cap] **Пример 9**

Синхронизация асинхронных процессов приводит к увеличению времени выполнения

^^Предположим, есть две функции, возвращающие промис:^^

~~~js
var getNames = () =>
    new Promise ( ( resolve, reject ) =>
        setTimeout (
            () => resolve ( "Names" ),
            1000
        )  
    )

var getPosts = () =>
    new Promise ( ( resolve, reject ) =>  
        setTimeout (
            () => resolve ( "Posts" ),
            1000
        )
    )
~~~

^^Каждый вызов длится 1 секунду^^

^^Если мы будем использовать асинхронную функцию для последовательного вызова **getNames** и **getPosts**, то суммарная продолжительность выполнения этих двух асинхронных операций составит не менее 2 сек^^

~~~js
async function getData () {
    console.time ( 'time' )
    var posts = await getPosts ()
    var names = await getNames ()
    console.timeEnd ( 'time' )
    console.info ( `\n${ names } | ${ posts }\n\n` )
}

getData ()
~~~

**Результат в консоли**

~~~console

Names | Posts

time: 2002.258056640625ms
~~~

^^Что плохо?^^

^^То, что несвязанные между собой асинхронные процессы выстраиваются в очередь^^

^^Посмотрим на альтернативный вариант^^

~~~js
function getData () {
    console.time ( 'time' )
    Promise.all ([
        getNames (),
        getPosts ()
    ])
        .then (
            result => {
                console.info ( `\n${ result[0] } | ${ result[1] }\n\n` )
                console.timeEnd ( 'time' )
            }
        )
}
~~~

**Результат в консоли**

~~~console

Names | Posts

time: 1001.474365234375ms
~~~

_________________________________

![ico-25 cap] **Пример 10**

~~~js
function getData ( typ ) {
    return new Promise ( function ( resolve, reject ) {
        setTimeout ( () => {
            console.log ( 'Promise resolved: ', typ )
            resolve ( typ )
        }, 1000 )
    })
}

function getAllData () {
    console.time ( "Total" )
    let promises = Array.from ( arguments )
        .map ( x => getData ( x ) )
    Promise.all ( promises )
         .then ( response => {
             console.timeEnd ( "Total" )
             console.log ( "response: ", response )
          })
}

getAllData ( "figures", "colors", "diameters" )
~~~

^^Функция  **getData()**  возвращает промис^^

^^Промис будет разрешен через 1 сек^^

^^Функция  **getAllData()** формирует  массив промисов  **promises** и запускает сразу все асинхронные процессы с помощью метода  **_Promise.all ()_**^^

^^Что происходит в этом случае:^^

^^Мы не выстраиваем очередь, а запускаем сразу все асинхронные процессы параллельно^^

^^Однако упорядоченность возвращаемых данных контролирует **_Promise.all ()_**^^

^^В возвращаемом массиве данные будут упорядочены в той последовательности, в которой упорядочены промисы в массиве промисов^^

^^В этом случае **_Promise.all ()_** является удобной альтернативой асинхронной функции^^

^^Общая продолжительность операции не будет суммой продолжительности всех асинхронных процессов^^

^^В этом примере вместо 3 секунд, которые выполнялся бы код в случае последовательной обработки запросов, общая продолжительность составила 1 сек^^

___________________________

[![ico-25 cap] **Пример 11** ](https://plnkr.co/edit/jsH8XKmc0B6g4q8iPZBf?p=preview)

_______________________

[![ico-30 hw] **Тесты**](https://garevna.github.io/js-quiz/#async)
