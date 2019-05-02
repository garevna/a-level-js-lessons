[footer]: https://github.com/garevna/js-course/raw/master/images/a-level-ico.png?raw=true
[me]: https://raw.githubusercontent.com/garevna/a-level-js-lessons/master/ico/myPhoto-40.png "Ⓒ Irina Fylyppova ( garevna ) 2019"

[up]: https://raw.githubusercontent.com/garevna/a-level-js-lessons/master/ico/up-25.png
[top]: https://raw.githubusercontent.com/garevna/a-level-js-lessons/master/ico/top-25.png
[down]: https://raw.githubusercontent.com/garevna/a-level-js-lessons/master/ico/down-25.png
[bottom]: https://raw.githubusercontent.com/garevna/a-level-js-lessons/master/ico/bottom-25.png
[left]: https://raw.githubusercontent.com/garevna/a-level-js-lessons/master/ico/left-20.png
[right]: https://raw.githubusercontent.com/garevna/a-level-js-lessons/master/ico/right-20.png

[green-ok]: https://raw.githubusercontent.com/garevna/a-level-js-lessons/master/ico/green-ok-20.png

[ambulance]: https://raw.githubusercontent.com/garevna/a-level-js-lessons/master/ico/ambulance-20.png

[wink]: https://raw.githubusercontent.com/garevna/a-level-js-lessons/master/ico/wink-20.png

[ico20]: https://raw.githubusercontent.com/garevna/a-level-js-lessons/master/ico/a-level-20.png
[ico25]: https://raw.githubusercontent.com/garevna/a-level-js-lessons/master/ico/a-level-25.png
[hw-30]: https://raw.githubusercontent.com/garevna/a-level-js-lessons/master/ico/briefcase-30.png
[cap-20]: https://raw.githubusercontent.com/garevna/a-level-js-lessons/master/ico/coffee-20.png
[cap-25]: https://raw.githubusercontent.com/garevna/a-level-js-lessons/master/ico/coffee-25.png
[cap-30]: https://raw.githubusercontent.com/garevna/a-level-js-lessons/master/ico/coffee-30.png
[warn]: https://raw.githubusercontent.com/garevna/a-level-js-lessons/master/ico/warning-25.png
[link]: https://raw.githubusercontent.com/garevna/a-level-js-lessons/master/ico/link-20.png
[err-20]: https://raw.githubusercontent.com/garevna/a-level-js-lessons/master/ico/no_entry-20.png
[err-25]: https://raw.githubusercontent.com/garevna/a-level-js-lessons/master/ico/no_entry-25.png
[err-30]: https://raw.githubusercontent.com/garevna/a-level-js-lessons/master/ico/no_entry-30.png
[space-800]: https://raw.githubusercontent.com/garevna/a-level-js-lessons/master/ico/space-800.png

[lesson]: ../lessons/lesson-03.md

| ![ico25] <br/><sup>[**Lesson&nbsp;3**][lesson]</sup> | <h2>Объект `function`</h2>![space-800]<sup>[• arguments](#arguments) [• arguments.callee](#callee) [• prototype](#prototype) [• Контекст выполнения](#execution-context) [• Lexical Environment](#lexical-environment) [• hoisting](#hoisting) [• Область видимости](#scope) [• this](#this) [• Контекст вызова](#call-context)</sup> | ![me] <br/><sup>[**Занятие&nbsp;3**][lesson]</sup> |
|-|-|-|

<a name="top"></a>
___________________________________________________________________________________________________

###### ECMAScript® 2016 Language Specification

| ![green-ok] _Функция является вызываемым объектом_ |
|-|

| ![green-ok] _Функция, связанная с объектом через свойство, называется методом_ |
|-|

___________________________________________________________________________________________________

<img src="https://github.com/garevna/js-course/blob/master/pictures/medical-car.png" width="100">

Как машина скорой помощи, функция может перемещаться от одного объекта к другому ( откуда она вызвана )

У функции ![ambulance]  есть "`контекст исполнения`":

| **свойства** ( переменные ) | **методы** ( функции ) |
|-|-|
| <sup>комплект инструментов, медикаментов, перевязочных матералов, различные приборы ( капельницы, дефибриллятор, аппарат искусственного дыхания и т.д. )</sup> | <sup>профессиональные навыки персонала машины скорой помощи ( могут сделать укол, поставить капельницу, применить дефибриллятор, перенести больного на носилках и т.д. )</sup> |

Все это функция ![ambulance] возит с собой

В момент вызова у функции ![ambulance] появляется **контекст вызова**:

:house: <sup>конкретные условия ( частный дом, квартира в многоэтажке, наличие или отсутствие лифта, водопровода и т.д. )</sup>

:neckbeard: <sup>конкретный больной с конкретными симптомами, возрастом, историей болезни, характером и т.д.</sup>

_____________________________________________________________________________

<a name="call-context"></a>
## ![ico20] КОНТЕКСТ ВЫЗОВА

| <sup>[◉ arguments](#arguments) [◉ arguments.callee](#callee) [◉ prototype](#prototype) [◉ Контекст выполнения](#execution-context) [◉ Lexical Environment](#lexical-environment) [◉ hoisting](#hoisting) [◉ Область видимости](#scope) [◉ this](#this)</sup> |
|-|

Контекст вызова - это объект

Обычно имя этого объекта стоит перед именем функции, и отделено от него точкой

Как правило, если имя объекта перед именем функции не указано, то контекстом вызова функции является глобальный объект **`window`**

<sup>Исключение составляют функции, контекст вызова которых установлен с помощью метода bind()</sup>

![warn] Отсюда следует, что все функции JS являются методами

Если объект ( "хозяин" метода ) не указан, подразумевается глобальный объект

| [![cap-25] 1](call-context-sample-1 "Пример") |
|-|

__________________________________________________________________________________

## ![ico20] ИНКАПСУЛЯЦИЯ

Таким образом, функция - это "капсула" со своим содержимым

Содержимое "капсулы" недоступно из контекста вызова

<sup>( посторонние не могут использовать материалы, инструменты и аппараты ![ambulance] )</sup>

_____________________________________________________________________________________

## ![ico20] **this**

Ключевое слово  **`this`** - это ссылка на объект, в контексте которого вызвана функция

![cap-25] Например, для функции ![ambulance]

```javascript
this.адрес
this.этаж
this.квартира
this.больной.имя
this.больной.возраст
this.больной.симптомы
...
```

Если бы не  **`this`**, вряд ли функция могла бы помочь "больному" ![wink]

_________________________________________________________________________________________________

<a name="signature"></a>
## ![ico20] Сигнатура функции

| <sup>[◉ arguments](#arguments) [◉ arguments.callee](#callee) [◉ prototype](#prototype) [◉ Контекст выполнения](#execution-context) [◉ Lexical Environment](#lexical-environment) [◉ hoisting](#hoisting) [◉ Область видимости](#scope) [◉ this](#this) [◉ Контекст вызова](#call-context)</sup> |
|-|

Сигнатура функции - это ее имя + список формальных параметров

Формальные параметры функции - это имена переменных, перечисленные в круглых скобках при объявлении функции

Аргументами функции являются фактические значения, передаваемые функции при вызове

Если:

<sup>• функции будет передано аргументов больше числа формальных параметров, то лишние аргументы будут отброшены</sup>

<sup>• функции будет передано аргументов меньше числа формальных параметров, то недостающие аргументы получат значение `undefined`</sup>

_________________________________________________________________________________________________________________

<a name="arguments"></a>
## ![ico20] Объект arguments

| <sup>[◉ arguments.callee](#callee) [◉ prototype](#prototype) [◉ Контекст выполнения](#execution-context) [◉ Lexical Environment](#lexical-environment) [◉ hoisting](#hoisting) [◉ Область видимости](#scope) [◉ this](#this) [◉ Контекст вызова](#call-context)</sup> |
|-|

Функции JavaScript имеют встроенный объект **`arguments`**

У него есть свойство **`length`**, как у массива

Его элементы доступны по индексу, как и элементы массива

![warn] Однако это не массив

Поэтому к нему нельзя применить методы работы с массивами ( **`push`**, **`pop`** и т.д. )

Его можно преобразовать в обычный массив с помощью метода  **`Array.from`**

```javascript
var args = Array.from ( arguments )
```

В объекте **`arguments`**  находятся все аргументы, переданные функции при ее вызове

Они будут доступны по индексу строго в том порядке, в каком они были переданы функции при вызове

![cap-25] Например:

```javascript
function testArguments () {
    for ( var i = 0;  i < arguments.length;  i++ ) {
        console.log ( `[ ${ ( i + " ]" ).padEnd ( 10 ) } ${ arguments [ i ] }` )
    }
}

testArguments ( 27, false, "Fill", [ 7, 4, 5 ], null )
```
________________________________________________________________________________________________

<a name="callee"></a>
### ![ico20] arguments.callee

| <sup>[◉ arguments](#arguments) [◉ prototype](#prototype) [◉ Контекст выполнения](#execution-context) [◉ Lexical Environment](#lexical-environment) [◉ hoisting](#hoisting) [◉ Область видимости](#scope) [◉ this](#this) [◉ Контекст вызова](#call-context)</sup> |
|-|

У объекта **arguments** есть свойство **arguments.`callee`** -

ссылка на выполняемую функцию ( функцию-"хозяина" объекта  `arguments` )

```javascript
function testArguments () {
        console.log ( arguments.callee )
}

testArguments ( 5, false )
```

<sup>В свойстве  `arguments.callee`  находится ссылка на саму функцию  `testArguments`</sup>

| [![cap-25] 2](callee-sample-2 "Пример") | [![cap-25] 3](callee-sample-3 "Пример") | [![cap-25] 4](callee-sample-4 "Пример") | [![cap-25] 5](callee-sample-5 "Пример") |
|-|-|-|-|

___________________________________________________________________________________________________________________

<a name="execution-context"></a>
## ![ico20] КОНТЕКСТ ИСПОЛНЕНИЯ

| <sup>[◉ arguments](#arguments) [◉ arguments.callee](#callee) [◉ prototype](#prototype) [◉ Lexical Environment](#lexical-environment) [◉ hoisting](#hoisting) [◉ Область видимости](#scope) [◉ this](#this) [◉ Контекст вызова](#call-context)</sup> |
|-|

<sup>Когда происходит вызов функции, она активируется</sup>

<sup>Ей нужно где-то безопасно "разместить" свои данные, с которыми она будет работать</sup>

<sup>Кроме аргументов, которые она получит при вызове, у нее могут быть свои внутренние данные, которые нужны для временного хранения промежуточных результатов вычислений</sup>

<sup>Итак, у активной функции есть контекст выполнения, где разворачивается работа функции</sup>

![warn] Контекст выполнения создается каждый раз, когда происходит вызов функции

Что же будет в этом контексте?

![green-ok] При вызове функции создается объект, содержащий все необходимые переменные

Этот объект в спецификации языка называется **`LexicalEnvironment`**

В этом объекте будут храниться полученные аргументы и все переменные функции

поэтому его еще называют *объектом переменных* или *объектом активации*

`Когда функция завершит работу, объект LexicalEnvironment будет удален из памяти`

![green-ok] Однако функция может использовать какие-то переменные, которых нет в ее `LexicalEnvironment`

<sup>Они являются внешними, и находятся в другом контексте</sup>

<sup>Но они доступны функции</sup>

<sup>Функция "видит" их, поэтому они находятся в ее "области видимости"</sup>

![warn] Область видимости -  важная часть контекста выполнения

![warn] Каждый вызов функции приводит к созданию нового контекста выполнения

Создание контекста выполнения происходит в два этапа:

![green-ok] сразу после вызова функции, но до начала выполнения кода
![green-ok] на этапе выполнения кода

При каждом возврате ( **`return`** ) происходит выход из контекста выполнения

Пока выполнение функции не завершено, ее контекст будет активным

Поскольку функции могут вызывать друг друга, их контекст помещается в стек

<sup>( очередь: последним пришел - первым ушел )</sup>

Верхним в этом стеке всегда будет текущий контекст исполнения

![](https://raw.githubusercontent.com/garevna/js-course/master/pictures/stack.png)

____________________________________________________________________________________

<a name="lexical-environment"></a>
### ![ico20] Lexical Environment

| <sup>[◉ arguments](#arguments) [◉ arguments.callee](#callee) [◉ prototype](#prototype) [◉ Контекст выполнения](#execution-context) [◉ hoisting](#hoisting) [◉ Область видимости](#scope) [◉ this](#this) [◉ Контекст вызова](#call-context)</sup> |
|-|

Объект активации ( `Lexical Environment` ) содержит аргументы функции и все объявленные внутри функции переменные
( включая функции )

<sup>Таким образом, объект активации можно сравнить со шкафчиком для хранения "личных вещей" функции</sup>

![warn] Получить доступ к объекту активации невозможно

_________________________________________________________________________________________________________________

<a name="hoisting"></a>
### ![ico20] hoisting

| <sup>[◉ arguments](#arguments) [◉ arguments.callee](#callee) [◉ prototype](#prototype) [◉ Контекст выполнения](#execution-context) [◉ Lexical Environment](#lexical-environment) [◉ Область видимости](#scope) [◉ this](#this) [◉ Контекст вызова](#call-context)</sup> |
|-|

После вызова функции:

В первую очередь формируется контекст исполнения:

* создается объект переменных ( или объект активации ),
* определяется область видимости
* устанавливается значение **`this`**

Затем внутренним переменным присваиваются значения, код интерпретируется и выполняется

![warn] Обратите внимание на тот факт, что объявления всех внутренних переменных и вложенных функций происходит раньше, чем код начинает выполняться, независимо от порядка их появления в коде

![warn] А вот присвоение переменным значений происходит, когда код начинает выполняться

Это приводит к "поднятию" ( **hoisting** ) объявлений переменных и функций

| [![cap-25] 1](function-hoisting-sample-1 "Пример") | [![cap-25] 2](function-hoisting-sample-2 "Пример") |
|-|-|

______________________________________________________________________________________________________

<a name="scope"></a>
## ![ico20] Область видимости

| <sup>[◉ arguments](#arguments) [◉ arguments.callee](#callee) [◉ prototype](#prototype) [◉ Контекст выполнения](#execution-context) [◉ Lexical Environment](#lexical-environment) [◉ hoisting](#hoisting) [◉ this](#this) [◉ Контекст вызова](#call-context)</sup> |
|-|

Область видимости ( **`scope`** ) ограничивает действие идентификаторов переменных и функций

<sup>Представьте себе двух человек по имени Саша:</sup> 👨‍💼 <sup>парня и</sup> 🙎 <sup>девушку</sup>

<sup>Есть две комнаты, и парень Саша</sup>  👨‍💼 <sup>находится в первой комнате, а девушка Саша</sup> 🙎<sup> - во второй</sup>

<sup>В каждой комнате есть наблюдатель</sup>

<sup>Если мы спросим наблюдателя из первой комнаты: "Кем является Саша?", то он ответит: "Парень"</sup> 👨‍💼

<sup>Зададим аналогичный вопрос наблюдателю из второй комнаты, и получим ответ: "Девушка"</sup> 🙎

<sup>Это происходит потому, что у каждой комнаты есть своя область видимости</sup>

<sup>Однако область видимости вложенных функций будет несколько иной</sup>

<sup>Предположим, что вложенные функции - коробки со стенками из тонированного стекла</sup>

<sup>Наши функции-коробки вложены одна в другую, как матрешки:</sup>

<sup>вторая коробка находится внутри первой,<br>
<sup>третья - внутри второй, и так далее...</sup>

<sup>Наблюдатель в коробке 2 будет видеть не только содержимое коробки 2,</sup><br>
<sup>но и содержимое коробки 1</sup><br>
<sup>и комнаты, внутри которой находятся все коробки</sup>

<sup>но он не может увидеть содержимое коробки 3, хотя наблюдатель в коробке 3 его отлично видит...<br>
как и наблюдателей во всех остальных коробках<br>
и в комнате</sup>

<sup>Таким образом, если внутри функции будет обращение к переменной, то сначала функция будет искать эту переменную
в своем "шкафчике для личных вещей",<br>
и если не найдет, то не постесняется "позаимствовать" эту переменную из внешнего шкафчика,<br>
внутри которого она находится</sup>

![warn] <sup>Все доступные ей чужие "шкафчики" представляют собой **цепочку областей видимости функции**, которая является частью ее **контекста выполнения**</sup>

| [![cap-20] 3](function-scope-sample-3 "Пример") | [![cap-20] 4](function-scope-sample-4 "Пример") | [![cap-20] 5](function-scope-sample-5 "Пример") |
|-|-|-|

_______________________________________________________________________________________________________

<a name="this"></a>
## ![ico20] this

| <sup>[◉ arguments](#arguments) [◉ arguments.callee](#callee) [◉ prototype](#prototype) [◉ Контекст выполнения](#execution-context) [◉ Lexical Environment](#lexical-environment) [◉ hoisting](#hoisting) [◉ Область видимости](#scope) [◉ Контекст вызова](#call-context)</sup> |
|-|

**`this`** - это еще одна составляющая контекста исполнения функции

**`this`** является ссылкой на контекст вызова функции

С помощью ключевого слова  **`this`**  можно получить доступ из функции ( или метода ) к свойствам объекта, в контексте которого была вызвана функция

#### ![cap-25] 6

```javascript
function func () {
   console.log ( this )
}
```

при вызове функции  **`func ()`** в консоль будет выведен объект  *`window`*

Внутри  функции  **`func ()`** *`this`*   указывает на объект  *`window`*

_______________________________________________________________________________________________________

#### ![cap-25] 7

```javascript
function func () {
   child ()
   function child () {
      console.log ( 'child this: ', this )
   }
}

func ()  // window
```

_______________________________________________________________________________________________________

#### ![cap-25] 8

| <sup>[◉ arguments](#arguments) [◉ arguments.callee](#callee) [◉ prototype](#prototype) [◉ Контекст выполнения](#execution-context) [◉ Lexical Environment](#lexical-environment) [◉ hoisting](#hoisting) [◉ Область видимости](#scope) [◉ this](#this) [◉ Контекст вызова](#call-context)</sup> |
|-|

Если же функция является методом объекта, то ее контекстом вызова будет этот объект

```javascript
var human = {
    name: "Ivan",
    say: function () {
        console.log ( 'this: ', this )
    }
}

human.say () // будет выведен объект  human
```

_______________________________________________________________________________________________________

#### ![cap-25] 9

Теперь посмотрим на функцию как на объект

```javascript
function say () {
   console.log ( 'function say: this: ', this )
}
function girl () {
   console.log ( 'function girl: this: ', this )
}
```

Добавим функции  **`girl`**  свойство  **`say`** и вызовем функцию `girl` и ее свойство `say`:

```javascript
girl.say = say
girl.say ()     //  girl
girl ()         // window
```

_______________________________________________________________________________________________________

<a name="prototype"></a>
## ![ico20] prototype

| <sup>[◉ arguments](#arguments) [◉ arguments.callee](#callee) [◉ Контекст выполнения](#execution-context) [◉ Lexical Environment](#lexical-environment) [◉ hoisting](#hoisting) [◉ Область видимости](#scope) [◉ this](#this) [◉ Контекст вызова](#call-context)</sup> |
|-|

* Функцию *как объект* нельзя вывести с помощью метода **`console.log`**
* Для этой цели следует использовать метод **`console.dir`**

```javascript
function sample () {}

console.dir ( sample )
```

В консоли мы получим следующую картинку:

```console
▼ ƒ sample()
      arguments: null
      caller: null
      length: 0
      name: "sample"
    ▼ prototype:
        ► constructor: ƒ sample()
        ► __proto__: Object
    ► __proto__: ƒ ()
      [[FunctionLocation]]: VM476:1
    ▼ [[Scopes]]: Scopes[1]
        ► 0: Global {type: "global", name: "", object: Window}
```

![warn] Обратите внимание на свойство **`prototype`**, которое есть только у функций

* это объект
* в этом объекте есть свойство **`constructor`**
* свойство **`constructor`** - это ссылка на саму функцию *sample()*

Обратите также внимание на свойство **`__proto__`**, которое мы разберем далее

* это **ссылка** на объект, от которого функция унаследовала свои свойства и методы
* любая функция создается встроенным нативным объектом ( конструктором ) **Function ()**
* это свидетельствует о том, что функция - это **объект**
* свойство **`constructor`** в **`__proto__`** - это ссылка на **Function ()**

<sup>• `[[FunctionLocation]]` и `[[Scopes]]` добавляет Chrome DevTools для целей отладки</sup>

_______________________________________________________________________________________________________

[![link] w3schools](https://www.w3schools.com/js/js_scope.asp)

| <sup>[◉ arguments](#arguments) [◉ arguments.callee](#callee) [◉ prototype](#prototype) [◉ Контекст выполнения](#execution-context) [◉ Lexical Environment](#lexical-environment) [◉ hoisting](#hoisting) [◉ Область видимости](#scope) [◉ this](#this) [◉ Контекст вызова](#call-context)</sup> |
|-|

_______________________________________________________________________________________________________

### [![hw-30] Упражнения](https://docs.google.com/forms/d/e/1FAIpQLSfMKUQjVnYrQq_YpPCNG81_DXOU0x8rVnb1bAJ4O_UnvvzwKg/viewform)

_______________________________________________________________________________________________________

![footer]
