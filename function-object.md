<a name="top"></a>
# 🎓 Объект   function

| [:arrow_double_down:](#bottom) | <img width="800"/> | [:arrow_heading_down:](#2) |
|-|-|-|

<table>
    <tr>
        <td width="500"><a href="#3">▶️</a><code> Объект <strong>arguments</strong></code></td>
        <td rowspan=4 width="30%">
            <img src="https://github.com/garevna/js-course/blob/master/pictures/medical-car.png"
                 width="120">
        </td>
    </tr>
    <tr>
        <td><a href="#4">▶️</a><code> Контекст выполнения</code></td>
    </tr>
    <tr>
        <td><a href="#5">▶️</a><code> Контекст вызова</code></td>
    </tr>
    <tr>
        <td><a href="#6">▶️</a><code> Область видимости</code></td>
    </tr>
</table>

Как машина скорой помощи, функция может перемещаться от одного объекта к другому ( откуда она вызвана )

У :ambulance:  есть "`контекст исполнения`": 

| **свойства** ( переменные ) | **методы** ( функции ) |
|-|-|
| `комплект инструментов, медикаментов, перевязочных матералов, различные приборы ( капельницы, дефибриллятор, аппарат искусственного дыхания и т.д.  )` | `профессиональные навыки персонала машины скорой помощи ( могут сделать укол, поставить капельницу, применить дефибриллятор, перенести больного на носилках и т.д. )` |

Все это функция :ambulance: возит с собой

В момент вызова у функции :ambulance: появляется **контекст вызова**:

:house: 

    конкретные условия 
    ( частный дом, квартира в многоэтажке, 
    наличие или отсутствие лифта, водопровода и т.д. )

:neckbeard:

    конкретный больной с конкретными симптомами, 
    возрастом, историей болезни, характером и т.д.

<a name="1"></a>
## :mortar_board: КОНТЕКСТ ВЫЗОВА

| [:arrow_heading_up:](#top) | <img width="800"/> | [:arrow_heading_down:](#2) |
|-|-|-|

    Итак, функция может быть вызвана в различном внешнем контексте
    в этом контексте есть свои переменные,
    и они не принадлежат функции

## :mortar_board: КОНТЕКСТ ИСПОЛНЕНИЯ

    У функции есть собственный "рабочий" контекст
    свои собственные внутренние переменные и функции
    они не принадлежат контексту вызова

## :mortar_board: ИНКАПСУЛЯЦИЯ

    Таким образом, функция - это "капсула" со своим содержимым
    Содержимое "капсулы" недоступно из контекста вызова
    ( посторонние не могут использовать материалы, инструменты 
    и аппараты 🚑 )

## :mortar_board: this

    Однако функция должна работать с переменными контекста вызова
    Т.е. ей нужен доступ к контексту вызова
    Для этого и существует ключевое слово  this
    это ссылка на объект, в контексте которого вызвана функция

:coffee: Например, для функции :ambulance: 

     this.адрес
     this.этаж
     this.квартира
     this.больной.имя
     this.больной.возраст
     this.больной.симптомы
     ...

Если бы не  `this`, вряд ли функция могла бы помочь "больному" 😉

<a name="2"></a>
## :ledger: Сигнатура функции

| [:arrow_heading_up:](#1) | <img width="800"/> | [:arrow_heading_down:](#3) |
|-|-|-|

Сигнатура функции - это ее имя + список формальных параметров

Формальные параметры функции - это имена переменных, перечисленные в круглых скобках при объявлении функции

Аргументами функции являются фактические значения, передаваемые функции при вызове

Если:

:point_up_2: функции будет передано аргументов больше числа формальных параметров, то лишние аргументы будут отброшены;

:point_up_2: функции будет передано аргументов меньше числа формальных параметров, то недостающие аргументы получат значение `undefined`

<a name="3"></a>
## :ledger: Объект arguments

| [:arrow_heading_up:](#2) | <img width="800"/> | [:arrow_heading_down:](#4) |
|-|-|-|

Функции JavaScript имеют встроенный объект **`arguments`**

У него есть свойство **`length`**, как у массива

Его элементы доступны по индексу, как и элементы массива

⚠️ Однако это не массив

Поэтому к нему нельзя применить методы работы с массивами ( **`push`**, **`pop`** и т.д. )

Его можно преобразовать в обычный массив с помощью метода  **`Array.from`**

```javascript
var args = Array.from ( arguments )
```
В объекте **`arguments`**  находятся все аргументы, переданные функции при ее вызове

Они будут доступны по индексу строго в том порядке, в каком они были переданы функции при вызове

:coffee: Например:
```javascript
function testArguments () {
    for ( var i = 0;  i < arguments.length;  i++ ) {
        console.log ( `[ ${ ( i + " ]" ).padEnd ( 10 ) } ${ arguments [ i ] }` )
    }
}

testArguments ( 27, false, "Fill", [ 7, 4, 5 ], null )
```

<a name="4"></a>
### :ledger: arguments.callee

| [:arrow_heading_up:](#3) | <img width="800"/> | [:arrow_heading_down:](#5) |
|-|-|-|

У объекта **arguments** есть свойство **arguments.`callee`** - 

ссылка на выполняемую функцию ( функцию-"хозяина" объекта  `arguments` )

#### :coffee: 1
```javascript
function testArguments () {
        console.log ( arguments.callee )
}

testArguments ( 5, false )
```
`В свойстве  arguments.callee  находится ссылка на саму функцию  testArguments`


#### :coffee: 2

Объявим функцию  **getArguments**:
```javascript
function getArguments ( param ) {
        return param ? param : arguments.callee
}
```
    которая, если ей был передан аргумент, 
    возвращает значение этого аргумента,
    в противном случае 
    возвращает ссылку на саму себя

    Теперь вызовем эту функцию с параметром и без:

```javascript
var x = getArguments ()
var y = getArguments ( "Привет!" )
```
    результат вызова функции без аргументов 
    мы поместили в переменную  x,
    а результат вызова с аргументом "Привет!" 
    мы поместили в переменную  y

    Теперь выведем в консоль переменные x и y
    в переменной x находится 
    точная копия функции getArguments
    а в переменной y - строка "Привет!"

    Вызовем функцию x:
```javascript
x ( "До свидания!" )
```
    и получим строку "До свидания!"

<a name="5"></a>
### ❓ как мы можем использовать **`arguments.callee`**

| [:arrow_heading_up:](#4) | <img width="800"/> | [:arrow_heading_down:](#6) |
|-|-|-|

    Мы знаем, что функция является объектом 
    Значит, у нее могут быть свойства
    предположим, мы хотим динамически определять 
    свойства объекта-функции 
    внутри самой функции

    Объявим функцию, которая "сама себя лечит",
    т.е. сама добавляет себе свойства и методы:

#### :coffee: 3
```javascript
function setProperty ( prop, val ) {
        arguments.callee [ prop ] = val
}
```

    Теперь заставим ее создать себе парочку свойств:

```javascript
setProperty ( "isActive", false )
setProperty ( "value", 50 )
```
    Ну, и для пущей убедительности 
    заставим ее создать себе метод:

```javascript
setProperty ( "method", function () {
        console.log ( "А еще я умею вышивать крестиком" )
} ) 
```
    здесь мы передаем ей 
    в качестве второго аргумента функцию

    Теперь проверим, что эти свойства и метод 
    появились у функции  setProperty

    Выведем в консоль свойства isActive и value
    функции  setProperty
    и вызовем ее метод  method

#### :coffee: 4

    Создадим функцию, которая "накапливает" 
    результаты собственных вычислений

    Пусть это будет функция, 
    вычисляющая факториал числа

```javascript
var factorial = function ( num ) {
        var res = 1, n = 1
        while ( n <= num )  res *= n++
}
```
    "модифицируем" ее следующим образом:
```javascript
var factorial = function ( num ) {
        if ( !arguments.callee.res )  arguments.callee.res = []
        var res = 1, n = 1
        while ( n <= num )  res *= n++
        arguments.callee.res.push ( res )
        return res
}
```
#### :coffee: 5
```javascript
var buttons = []
for ( var n = 0; n < 5; n++ ) {
        buttons [ n ] = document.body.appendChild ( document.createElement( 'button' ) )
        buttons [ n ].innerText = n
        buttons [ n ].onclick = function ( event ) {
                if ( !arguments.callee.res )
                        arguments.callee.res = []
                arguments.callee.res.push ( event.timeStamp )
                console.log ( arguments.callee.res )
        }
}
```
    В этом примере создаются анонимные функции,
    которые обрабатывают событие click  кнопок
    Каждая функция "накапливает" данные
    о времени клика на кнопке
    в массиве arguments.callee.res
    Модифицируем этот код:
```javascript
var buttons = []
for ( var n = 0; n < 5; n++ ) {
        buttons [ n ] = document.body.appendChild ( document.createElement( 'button' ) )
        buttons [ n ].innerText = n
        buttons [ n ].onclick = function ( event ) {
                if ( !arguments.callee.clicksTime )
                        arguments.callee.clicksTime = []
                arguments.callee.clicksTime.push ( event.timeStamp )
                console.log ( arguments.callee.clicksTime )
                arguments.callee.res = arguments.callee.clicksTime.length > 1 ? 
                        arguments.callee.clicksTime [ arguments.callee.clicksTime.length - 1 ] -
                        arguments.callee.clicksTime [ arguments.callee.clicksTime.length - 2 ] : 0

                console.info ( `Интервал между последними кликами: ${arguments.callee.res}` )
        }
}
```

    Что теперь делает каждый обработчик
    клика на кнопке ?

| [:arrow_heading_up:](#6) | <a name="bottom"><img width="800"/></a> | [:arrow_double_up:](#top) |
|-|-|-|

[:briefcase: Упражнения]()