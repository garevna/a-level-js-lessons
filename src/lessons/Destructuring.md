# ![ico-40 icon] Деструктуризация

**ES6**

_Деструктуризация - это разложение структуры данных на элементарные составляющие_

**Структура данных** - это совокупность элементов, объединенных под одним именем и организованных по определенному принципу

Фактически структура данных - это именованная капсюла с четким протоколом доступа к ее содержимому:
    в массиве - по индексу элемента массива,
    в объекте - по имени свойства

Структуру данных можно "рассыпать" в отдельные переменные

Это и есть **деструктуризация**

![ico-25 warn] Как правило, при деструктуризации имеет место присваивание

В левой части оператора присваивания будет перечень переменных в квадратных или фигурных скобках ( в зависимости от того, что деструктурируем ), в правой - массив или объект, который мы деструктурируем

_______________________________________________________________

## ![ico-25 icon] Массивы

При деструктуризации массива переменные в левой части оператора присваивания должны перечисляться в **квадратных** скобках

~~~js
const fruits = [ "банан", "апельсин", "киви" ]
let [ var1, var2, var3 ] = fruits

console.info ( var1 )   // "банан"
console.info ( var2 )   // "апельсин"
console.info ( var3 )   // "киви"
~~~

Пусть функция **_getArr_** возвращает массив

~~~js
let getArr = deg => [ Math.sin ( deg ), Math.cos ( deg ) ]
~~~

Получим результат ее работы в переменные  _sin30_  и  _cos30_

~~~js
let [ sin30, cos30 ] = getArr ( Math.PI/3 )

console.info ( sin30 )  // 0.8660254037844386
console.info ( cos30 )  // 0.5
~~~

___________________________________________________________

### ![ico-20 icon] Обмен значениями

Деструктуризация позволяет одной строкой выполнить обмен значениями между переменными:

~~~js
let x = 5, y = 7, z = 9
[ x, y, z ] = [ y, z, x ]

console.info ( x )  // 7
console.info ( y )  // 9
console.info ( z )  // 5
~~~

___________________________________________________________

### ![ico-20 icon] Выборка отдельных значений из массива

Пусть функция **_getAngleData_** возвращает массив

Вызовем эту функцию, но "пропустим" возвращаемое ею значение тангенса угла:

~~~js
let getAngleData =
    deg => [
        Math.sin ( deg ),
        Math.cos ( deg ),
        Math.tan ( deg ),
        Math.atan ( deg )
    ]

let [ sin30, cos30, , arctg30 ] = getAngleData ( Math.PI/3 )

console.info ( sin30 )  // 0.8660254037844386
console.info ( cos30 )  // 0.5
console.info ( arctg30 )  // 0.808448792630022
~~~

_____________________________________________________________

## ![ico-25 icon] Объекты

Если мы деструктурируем объект, то переменные в левой части оператора присваивания будут перечисляться в **фигурных** скобках

![ico-20 warn] При этом имена переменных должны совпадать с именами свойств объекта<br/>
( порядок следования не имеет значения )

~~~javascript
const user = {
    name: "Georg",
    role: "admin",
    stars: 5
}

let { name, role, stars } = user

console.info ( name )   // "Georg"
console.info ( role )   // "admin"
console.info ( stars )  // 5
~~~

![ico-25 warn] Если при деструктуризации объекта переменные в левой части оператора присваивания были объявлены ранее, то все выражение нужно заключить в круглые скобки:

~~~javascript
let name, age

( { name, age } = { name: "Ivan", age: 25 } )
~~~

В противном случае будет сгенерировано исключение

~~~console
⛔️ Uncaught SyntaxError: Unexpected token =
~~~

![ico-25 warn] Если мы хотим присвоить значение переменной с именем, отличающимся от имени свойства деструктурируемого объекта, то при перечислении имен свойств в левой части оператора присваивания через двоеточие можно указать новое имя переменной:

~~~js
const user = {
    login: "Ivan",
    age: 42,
    works: true
}

let {
    login: userName,
    works: employed
} = user

console.log( userName )   // "Ivan"
console.log( employed )   // true
~~~

![ico-25 warn] При деструктуризации объектов можно устанавливать значения переменных по умолчанию

( на случай, если такого свойства в объекте нет )

~~~js
let {
    login = "Сергей",
    speciality = "слесарь"
} = { login: "Ivan", age: 42 }

console.log( login )       // "Ivan"
console.log( speciality )  // "слесарь"
~~~

____________________________________________________________________


## ![ico-25 icon] spread ( ... )

Оператор **...** позволяет получить:
• результат деструктуризации массива
• остаток от дестуктурированного массива

![ico-30 cap] 2

функция  _getAngleData_  возвращает массив

~~~js
let getAngleData =
    deg => [
        Math.sin ( deg ),
        Math.cos ( deg ),
        Math.tan ( deg ),
        Math.atan ( deg )
    ]
~~~

функция  _func_  принимает 4 аргумента

~~~js
let func = ( x, y, z, w ) => {
    console.log ( x )
    console.log ( y )
    console.log ( z )
    console.log ( w )
}
~~~

Передадим результат работы функции _getAngleData_ функции _func_

~~~js
func ( ...getAngleData ( Math.PI/3 ) )

// 0.8660254037844386
// 0.5000000000000001
// 1.7320508075688767
// 0.808448792630022
~~~

получим остаток массива, возвращаемого функцией _getAngleData_, в массив _rest30_

~~~js
let [ sin30, ...rest30 ] = getAngleData ( Math.PI/3 )

console.info ( sin30 )  // 0.8660254037844386
console.log ( rest30 )  
// (3) [0.5000000000000001, 1.7320508075688767, 0.808448792630022]
~~~

____________________________________________________________


Деструктурировать можно не только массивы, но любые итерабельные структуры данных

![ico-30 cap] 3

Деструктурируем NodeList и HTMLCollection:

**разметка**

~~~html
<body>
    <p class="paragraph">1</p>
    <p class="paragraph">2</p>
    <p class="paragraph">3</p>
    <p class="paragraph">4</p>
</body>
~~~


**JS**


~~~js
let [ first, second, third, forth ] =
    document.querySelectorAll ( '.paragraph' )

// let [ first, second, third, forth ] =
//    document.querySelectorAll ( '.paragraph' )
~~~


**результат**


~~~js
console.log ( first )   // <p class="paragraph">1</p>
console.log ( second )  // <p class="paragraph">2</p>
console.log ( third )   // <p class="paragraph">3</p>
console.log ( forth )   // <p class="paragraph">4</p>
~~~

____________________________________________________________________

![ico-30 cap] 4

Посмотрим, как с помощью деструктуризации можно сократь код:

Разметка

~~~html
<body>
    <button id="registration">Регистрация</button>
    <button id="sign-in">Вход</button>
    <h3 id="title">Hello</h3>
    <div id="demo">
        <p>User name:</p>
        <input id="name"/>
        <p>password:</p>
        <input id="pass" type="password"/>
        <button>Submit</button>
    </div>
</body>
~~~

Получить элементы по **`id`**

~~~js
var demo = document.getElementById ( "demo" )
var btnReg = document.getElementById ( "registration" )
var btnSignIn = document.getElementById ( "sign-in" )
var nameElem = document.getElementById ( "name" )
var passElem = document.getElementById ( "pass" )
var title = document.getElementById ( "title" )
~~~

Альтернативный вариант

~~~js
var [ demo, btnReg, btnSignIn, nameElem, passElem, title ] =
    [ "demo", "registration", "sign-in", "name", "pass", "title" ]
        .map ( item => document.getElementById ( item ) )
~~~

_______________________________________________________________________

![ico-30 cap] 5

Посчитаем, сколько раз встречается каждый символ в строке

Результат поместим в объект, где имя каждого свойства будет буквой, а значение - числом, сколько раз этот символ встречается в строке `str`

~~~js
const lettersCounter = str => Object.assign ( {},
    ...str.split('')
        .map( letter => {
            return {
                [ letter ]: str.match (eval (`/${letter}/g`)).length
            }
    })
)

lettersCounter ( "htkolkhlfottko" )
~~~

результат

~~~console
▼ {h: 2, t: 3, k: 3, o: 3, l: 2, …}
    f: 1
    h: 2
    k: 3
    l: 2
    o: 3
    t: 3
  ► __proto__: Object
~~~

___________________________________________________________________

### ![ico-30 icon] Other samples

![ico-25 cap] 6

~~~javascript
function func ( a, b, c ) {
    console.log ( a + b + c )
}

var user = { a: 5, b: 8, c: 13 }
user [ Symbol.iterator ] = function* () {
    yield this.a
    yield this.b
    yield this.c
}

func ( ...user )
~~~

-------------------------------------

![ico-25 cap] 7

~~~js
var x = [ ..."012345" ]

var x = { ..."012345" }

function func ( a, b, c ) {
    console.log ( a*1 + b*1 + c*1 )
}

func ( ..."578" )


function test ( { a, b, c } = { a: 3, b: 4, c: 5 } ) {
    console.log ( a + b + c )
}

func ()

func ( { a: 5, b: 7, c: 8 } )
~~~

### ![ico-30 hw] Упражнение

Что может вернуть следующий код ( все варианты ):

~~~js
function first () {
    return Math.random() > 0.5 ? "First" : ""
}
function second () {
    return Math.random() < 0.5 ? "second" : ""
}

second() || console.log ( ...[first(),second()] )
~~~

_______________________________________________________________________________


### [![ico-25 hw] Тесты](https://garevna.github.io/js-quiz/)

_______________________________________________________________________________
