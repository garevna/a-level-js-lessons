# ![ico-30 study] Итерирующие методы массивов

Выведя в консоль свойство **_~prototype~_** конструктора массивов, можно убедиться, что эти структуры данных наследуют много методов, и некоторые из них мы уже знаем

^^^[Array.prototype]

~~~js
▼ [constructor: ƒ, concat: ƒ, copyWithin: ƒ, fill: ƒ, find: ƒ, …]
  ► concat: ƒ concat()
  ► constructor: ƒ Array()
  ► copyWithin: ƒ copyWithin()
  ► entries: ƒ entries()
  ► every: ƒ every()
  ► fill: ƒ fill()
  ► filter: ƒ filter()
  ► find: ƒ find()
  ► findIndex: ƒ findIndex()
  ► flat: ƒ flat()
  ► flatMap: ƒ flatMap()
  ► forEach: ƒ forEach()
  ► includes: ƒ includes()
  ► indexOf: ƒ indexOf()
  ► join: ƒ join()
  ► keys: ƒ keys()
  ► lastIndexOf: ƒ lastIndexOf()
    length: 0
  ► map: ƒ map()
  ► pop: ƒ pop()
  ► push: ƒ push()
  ► reduce: ƒ reduce()
  ► reduceRight: ƒ reduceRight()
  ► reverse: ƒ reverse()
  ► shift: ƒ shift()
  ► slice: ƒ slice()
  ► some: ƒ some()
  ► sort: ƒ sort()
  ► splice: ƒ splice()
  ► toLocaleString: ƒ toLocaleString()
  ► toString: ƒ toString()
  ► unshift: ƒ unshift()
  ► values: ƒ values()
  ► Symbol(Symbol.iterator): ƒ values()
  ► Symbol(Symbol.unscopables): {copyWithin: true, entries: true, fill: true, find: true, findIndex: true, …}
  ► __proto__: Object
~~~

^^^

Часть методов, с которыми мы уже знакомы, выполняют какую-то операцию с массивом ( добавляют элемент в массив, удаляют или заменяют элементы в массиве, объединяют несколько массивов в один и т.д. )

Итерирующие методы перебирают элементы массива один за другим строго в порядке возрастания их индексов ( за исключением ~reduceRight~ )

В процессе перебора значений происходит вызов указанной нами функции, которая и получает очередной элемент массива в качестве аргумента

^^^[Методы массивов]

| ^^Обычные^^ | ^^Итерирующие^^ |
| ~concat~ | ~entries~ |
| ~copyWithin~ | ~every~ |
| ~fill~ | ~filter~ |
| ~flat~ ![ico-20 warn] | ~find~ |
| ~includes~| ~findIndex~ |
| ~indexOf~ | ~flatMap~ ![ico-20 warn] |
| ~join~ | ~forEach~ |
| ~lastIndexOf~ | ~keys~ |
| ~pop~ | ~map~ |
| ~push~| ~reduce~ |
| ~reverse~ | ~reduceRight~ |
| ~shift~ | ~some~ |
| ~slice~ | ~sort~ |
| ~splice~ | ~values~ |
| ~unshift~ |  |

^^^

_Группа итерирующих методов массивов - пример реализации функциональной парадигмы в ООП_
^^Точнее, mix двух парадигм программирования^^
^^Mix - потому что мы передаем этим методам в аргументах не только функцию, но и ссылку на объект^^

![ico-20 warn] Обязательный первый аргумент, передаваемый методу в момент вызова - функция

![ico-20 warn] Функция-аргумент метода будет вызвана на каждой итерации ( для каждого элемента массива )

У этой функции три формальных параметра: первый - обязательный, два других - опциональные

![ico-20 warn] Обязательный формальный параметр функции - текущее значение элемента массива

~~~js
function func ( arrayElement ) {
    console.log ( arrayElement )
}

[ 7, "D", false ]
    .forEach ( func )
~~~

___________

Кроме обязательного первого аргумента - ссылки на функцию  
каждый метод имеет необязательный ( опциональный ) второй аргумент - ссылку на контекст вызова

( т.е. внутри метода ~this~ будет указывать на этот объект )

______________________________

### ![ico-25 icon] Принцип работы

![ico-25 cap] ** 1**

~~~js
var arr = [ "google", "service", "user" ]

function test ( elem ) {
    console.log ( elem )
}

Array.prototype.sampleMethod = function ( callback ) {
    for ( var item of this )
        callback ( item )
}

arr.sampleMethod ( test )
~~~

Собственно, эти методы не изменяют исходный массив, поэтому алгоритм их работы скорее можно представить так:

~~~~js
var arr = [ "google", "service", "user", 0, false ]

function test ( elem ) {
    return `${ typeof elem === "string" ? elem : "default" }`
}

Array.prototype.sampleMethod = function ( callback ) {
    var res = []
    for ( var item of this ) {
        res.push ( callback ( item ) )
    }
    return res
}

arr.sampleMethod ( test )
~~~~

Функция, передаваемая методу, может иметь больше формальных параметров,
но остальные два являются опциональными ( необязательными )

второй параметр - идекс текущего элемента массива

~~~~js
var arr = [ "google", "service", "user" ]

function test ( elem, index ) {
    return `${index}: ${elem}`
}

Array.prototype.sampleMethod = function ( callback ) {
    var res = []
    for ( var item of this )
        res.push (
            callback (
                item,
                this.indexOf ( item )
            )
        )
    return res
}

console.log ( arr.sampleMethod ( test ) )
~~~~

________________________

третий параметр - ссылка на итерируемый массив

~~~~js
var arr = [ "google", "service", "user", 0, false ]

function test ( elem, index, ref ) {
    var tmp = typeof elem === "string" ?
        ref.splice ( index, 1, true )[0] :
        null
    return ref [ index ]
}

Array.prototype.sampleMethod = function ( callback ) {
    var res = []
    for ( var item of this ) {
        res.push (
            callback (
                item,
                this.indexOf ( item ),
                this
            )
        )
    }
    return res
}

arr.sampleMethod ( test )
~~~~

Функция, передаваемая методу в качестве первого аргумента, может быть анонимной, объявленной непосредственно в вызове метода

~~~~js
var  numbers = [ 8, 4, 9, 7 ]

Array.prototype.sampleMethod = function ( callback ) {
    var res = []
    for ( var item of this ) {
        res.push (
            callback (
                item,
                this.indexOf ( item ),
                this
            )
        )
    }
    return res
}

numbers.sampleMethod (
    function ( item, index, arr ) {
        console.log ( index, arr.indexOf( item ) === index )
        console.log ( index, arr [ index ] === item )
    }
)
~~~~

![ico-20 icon] **Передача контекста**

~~~~js
var numbers = [ 8, 4, 9, 7 ]
var alter = [ "google", 5, "figure", 11 ]

Array.prototype.sampleMethod = function ( callback, context ) {
    var res = []
    for ( var item of this ) {
        res.push (
            callback.call (
                context,
                item,
                this.indexOf ( item ),
                this
            )
        )
    }
    return res
}

var sample = numbers.sampleMethod (
    function ( item, index, arr ) {
        console.log ( this [ index ] )
        console.log ( arr )
    },
    alter
)
~~~~

^^Функция **sample** получает в переменной **_arr_** ссылку на исходный массив **numbers**, а **_~this~_** внутри функции **sample** указывает на массив **alter**^^

____________________________

### ![ico-25 icon]  forEach()

![ico-20 warn] Этот метод не возвращает никакого значения
Он просто вызывает переданную ему функцию с каждым элементом массива
^^Функция-аргумент метода имеет три формальных параметра^^
^^Первый - обязательный, два других - опциональные^^
^^1) текущий элемент массива^^
^^2) идекс текущего элемента массива^^
^^3) сам итерируемый массив^^

____________

![ico-25 cap] ** 1**

^^Рассмотрим самый простой вариант использования метода **~forEach()~**^^

~~~jas
var  people = [ "Ivan", "Mary", "Elena", "Andrey" ]

people.forEach (
    ( currentValue, index, array ) =>
        console.log ( `${index}: ${currentValue}` )
)
~~~

^^Здесь мы итерируем массив  **people**  с помощью метода  **~forEach~**^^
^^Методу  **~forEach~**  в качестве аргумента  передается анонимная функция:^^

~~~js
( currentValue, index, array ) =>
        console.log ( `${index}: ${currentValue}` )
~~~

^^У этой анонимной функции может быть  три аргумента:^^
^^1) текущий элемент массива^^
^^2) идекс текущего элемента массива^^
^^3) сам итерируемый массив^^

^^Обязательным является только первый аргумент^^

^^Например, чтобы вывести в консоль все элементы массива  **people**, мы можем использовать метод  **~forEach~** следующим образом:^^

~~~js
people.forEach ( x => console.log ( x ) )
~~~

Результат работы предыдущего кода будет идентичен результату работы обычного оператора ~for ... of~:

~~~javascript
for ( var x of people ) console.log ( x )
~~~

__________________________________________

![ico-25 cap] ** 2**

^^Для чего могут понадобиться второй и третий аргументы анонимной функции:^^

^^предположим, нам нужно произвести вычисления с участием индекса элемента массива^^
^^при этом мы хотим добавить результаты вычислений в исходный массив ( изменить его )^^

~~~js
var  numbers = [ 8, 4, 9, 7 ], res = []

numbers.forEach ( ( numb, ind, res ) => res.push ( numb * ind ) )

console.log ( numbers ) // [ 8, 4, 9, 7, 0, 4, 18, 21 ]
~~~

^^или мы хотим удвоить все значения элементов масива:^^

~~~javascript
var  numbers = [ 8, 4, 9, 7 ]

numbers.forEach ( ( numb, ind, res ) => res [ ind ] = numb * 2 )

console.log ( numbers ) // [ 16, 8, 18, 14 ]
~~~

^^т.е. исходный массив  **numbers**  был изменен^^
^^Теперь получим результаты вычислений в новый массив  **res**^^

~~~js
var  numbers = [ 8, 4, 9, 7 ], res = []

numbers.forEach ( ( numb, ind ) => res.push ( numb * ind ) )

console.log ( res )
console.log ( numbers )
~~~

^^Теперь  результаты вычислений будут помещены в массив  **res**,  а исходный  массив  **numbers**  останется неизмененным^^

_________________________________________________

^^^[Контекст вызова]

Метод  **~forEach~**  может принимать дополнительный аргумент - ссылку на контект вызова
![ico-20 warn] Однако при этом функция, передаваемая методу в качестве аргумента, не должна быть стрелочной

~~~js
let intervals = [ [ 1, 8 ], [ 2, 3 ], [ 4, 7 ], [ 5, 6 ] ]

intervals.forEach (
    function ( interval ) { console.log ( this ) },
    intervals
)
~~~

^^В результате выполнения этого кода в консоли будет массив **~intervals~**^^
^^Фактически передача методу второго аргумента равносильна биндингу контекста:^^

~~~javascript
intervals.forEach (
    function ( interval ) { console.log ( this ) }
        .bind( intervals )
)
~~~

^^Поэтому при использовании стрелочной функции:^^

~~~js
let intervals = [ [ 1, 8 ], [ 2, 3 ], [ 4, 7 ], [ 5, 6 ] ]

intervals.forEach (
    interval => console.log ( this ),
    intervals
)
~~~

^^контекст которой изменить невозможно, в консоли мы увидим объект **~window~**^^

^^^

_____________________

^^^[Пример 3]

^^Предположим, мы хотим передавать ссылку на массив **~res~**, куда следует помещать результаты вычислений:^^

~~~js
var res = []

numbers.forEach (
    function ( numb, ind ) {
        this.push ( numb * ind )
    },
    res
)
~~~

^^Чтобы обеспечить гибкость, т.е. возможность динамически изменять контекст вызова, а не устанавливать его единожды и навеки, завернем метод **~forEach~** в функцию  **~createNewArray~**^^

^^У функции **~createNewArray~** будет два формальных параметра:^^
^^   - исходный массив     ( **_~sourseArray~_** )^^
^^   - массив результатов ( **_~resultArray~_** )^^

^^Функция **~createNewArray~** будет передавать методу **~forEach~** не только функцию, которая будет вызвана на каждой итерации цикла, но и ссылку на контекст вызова этой функции ( ~this~ )^^

~~~js
var  numbers = [ 8, 4, 9, 7 ]
var res = []

function createNewArray ( sourseArray, resultArray ) {
    sourseArray.forEach (
        function ( numb, ind ) {
            this.push ( numb * ind )
        },
        resultArray
    )
}

createNewArray ( numbers, res )
console.log ( res )
console.log ( numbers )
~~~

^^В момент вызова значение формального параметра **~resultArray~** будет ссылкой на массив **~res~**^^
^^Таким образом, в результате вызова:^^

~~~js
createNewArray ( numbers, res )
~~~

^^внутри функции, передаваемой методу **~forEach~** в качестве первого аргумента, ~this~  будет указывать на массив  **~res~**^^

^^Теперь функция  **~createNewArray~**  может быть применена к различным массивам:^^

~~~javascript
var bug = [ 10, 1, 3, 8 ]
var fug = []

createNewArray ( bug, fug )
~~~

^^^

____________________

^^^[Тест]

^^Разберитесь самостоятельно, что делает следующий код:^^

~~~js
Array.from ( document.styleSheets )
    .forEach (
        sheet => sheet.href ? null :
            Array.from ( sheet.cssRules ).forEach (
                rule => console.log ( rule )
            )
    )
~~~

^^^

______________________

### ![ico-25 icon] map()

Этот метод вызвращает новый массив, полученный из элементов исходного массива  после применения к каждому из них  функции, переданной методу в качестве аргумента

Функция, передаваемая в качестве аргумента метода, должна возвращать новое значение ( обязательно должен присутствовать оператор  ~return~ )

Значение, возвращаемое функцией на каждой итерации, будет помещаться в результирующий массив

![ico-25 cap]

~~~js
var first = [ 8, 4, 9, 7 ]

var res = first.map ( currentValue => currentValue * 2 )

console.log ( res )
~~~

^^В этом примере в массив  **res**  попадут все удвоенные значения элементов исходного массива  **first**^^

Так же, как и в методе **~forEach()~**,  в  методе  **~map()~**  передаваемая методу в качестве аргумента  функция может принимать три аргумента

~~~javascript
function ( currentValue, index, arr ) {
    console.log ( arr )
    return  currentValue * index
}
~~~

Второй  и третий  аргументы необязательны, и имеют то же содержание, что и в методе **~forEach()~**

![ico-20 green-ok] Аргумент  **arr**  будет содержать ссылку на исходный массив, к которому применяется метод
![ico-20 green-ok] Аргумент  **index**  - это счетчик итераций, или индекс текущего элемента итерируемого массива

__________________________

### ![ico-25 icon] filter()

Метод **~filter()~** итерирует массив, проверяя выполнение заданного условия для каждого элемента массива
Метод возвращает новый массив
В результирующий массив попадут только те элементы, которые удовлетворяют условию фильтрации

~~~~js
var sourceArray = [
    {  name: "Николай Василенко",  country:  "Украина" },
    {  name: "Дюк Шейн",  country:  "США" },
    {  name: "Демид Швейк",  country:  "Франция" },
    {  name: "Семен Картко",  country:  "Украина" },
    {  name: "Маргарет Джонсон",  country:  "США" },
    {  name: "Филипп Данько",  country:  "Украина" },
    {  name: "Роберт Трамп",  country:  "США" },
]

var usa = sourceArray.filter ( x => x.country === "США" )

console.log ( usa )
~~~~

**Результат в консоли:**

![](https://lh4.googleusercontent.com/dPJ7fo_MpTFLila8yzWxmVCTxW6QRyd44lWhg_fGoAGeg1JTCj4Ni-zfy63rKdodIK017yyAqgSrDeao_QZW4vhCY44EjO7ltOGjoGU0BaR3QlRXv6VmByUKw_HyE4SilpWEaAouNcOPwrs)

_________________________________

### ![ico-25 icon] find()

Метод ищет в массиве и возвращает первый найденный элемент, удовлетворяющий заданному условию

Если такого элемента в массиве нет, возвращает ~undefined~

~~~js
var cards = [
    { num: "457892425", cash: 1100 },
    { num: "457812840", cash: 3000 },
    { num: "457855780", cash: 1200 },
    { num: "457811714", cash: 5000 }
]

cards.find ( card => card.cash > 4000 )
~~~

^^Этот код вернет объект^^

~~~js
▼ { num: "457811714", cash: 5000 }
    cash: 5000
    num: "457811714"
  ► __proto__: Object
~~~

_________________________

### ![ico-25 icon] findIndex()

Подобно методу ~find()~, ищет в массиве первый элемент, удовлетворяющий заданному условию
Однако возвращает не сам элемент, а его индекс

Если такого элемента в массиве не обнаружено, возвращает **-1**

~~~javascript
var cards = [
    { num: "457892425", cash: 1100 },
    { num: "457812840", cash: 3000 },
    { num: "457855780", cash: 1200 },
    { num: "457811714", cash: 5000 }
]

cards.findIndex ( card => card.cash > 1500 )  // 1
~~~

_______________________

### ![ico-25 icon] every()

Осуществляет проверку массива на предмет вхождения элементов, не удовлетворяющих заданному условию

Возвращает логическое значение:
  • если все элементы массива благополучно прошли проверку - ~true~
  • если хотя бы один элемент не прошел проверку - ~false~

Функция, передаваемая методу в качестве первого аргумента, проверяет выполнение заданного условия для каждого элемента массива, и возвращает логическое значение

Массив итерируется до тех пор, пока функция не вернет значение ~false~
В этом случае метод вернет ~false~

Если функция вернет ~true~ для всех элементов массива, метод вернет ~true~

~~~~js
var people = [
    {  name: "Николай Василенко",  country:  "Украина" },
    {  name: "Дюк Шейн",  country:  "США" },
    {  name: "Демид Швейк",  country:  "Франция" },
    {  name: "Семен Картко",  country:  "Украина" },
    {  name: "Маргарет Джонсон",  country:  "США" },
    {  name: "Филипп Данько",  country:  "Украина" },
    {  name: "Роберт Трамп",  country:  "США" },
]

var res = people.every ( x => x.country === "Украина" )

console.log ( res )
~~~~

^^В этом примере массив  **people**  проверяется на наличие в нем жителей не Украины^^
^^Переменная  **res**  будет иметь значение ~false~, поскольку в массиве есть элементы, не удовлетворяющие заданному условию^^

______________________________________________

### ![ico-25 icon] some()

Осуществляет поиск в массиве по заданному условию

Возвращает логическое значение ( найдено / не найдено )

Функция, передаваемая методу в качестве первого аргумента, проверяет выполнение заданного условия для каждого элемента массива, и возвращает логическое значение

Массив итерируется до тех пор, пока функция не вернет значение ~true~
В этом случае метод вернет  ~true~

Если функция вернет ~false~ для всех элементов массива, метод вернет ~false~

~~~~js
var people = [
    {  name: "Николай Василенко",  country:  "Украина" },
    {  name: "Дюк Шейн",  country:  "США" },
    {  name: "Демид Швейк",  country:  "Франция" },
    {  name: "Семен Картко",  country:  "Украина" },
    {  name: "Маргарет Джонсон",  country:  "США" },
    {  name: "Филипп Данько",  country:  "Украина" },
    {  name: "Роберт Трамп",  country:  "США" },
]

var res = people.some ( x => x.country === "Пакистан" )

console.log ( res )
~~~~

В этом примере массив  **people**  проверяется на наличие в нем жителей Пакистана

Переменная  **res**  будет иметь значение `false`, поскольку таких "персонажей" в массиве нет

____________________________

### ![ico-25 icon] reduce()

Сводит массив к новому результату

Этот метод получает два аргумента:
    обязательный первый аргумент - функция, которая будет вызвана для каждого элемента массива
    опциональный второй аргумент - стартовое значение переменной-аккумулятора

Функция, которая передается методу в качестве первого ( обязательного ) аргумента, имеет два формальных параметра:

• первый: имя переменной-аккумулятора, а которой будет накапливаться результат работы метода
• второй: текущий элемент массива

Для примера создадим массив банковских карт:

~~~js
var cards = [
    { num: "457892425", cash: 1100 },
    { num: "457812840", cash: 3000 },
    { num: "457855780", cash: 1200 },
    { num: "457811714", cash: 5000 }
]
~~~

______________________________________________________

![ico-25 cap] ** 1**

Посчитаем сумму средств на всех картах:

~~~js
cards.reduce ( ( result, card ) => result + card.cash, 0 )
// 10300
~~~

___________________________________________________

![ico-25 cap] ** 2**

Создадим новую карту, на которую аккумулируем остатки на счетах все карт:

~~~javascript
cards.reduce (
    function ( result, card ) {
        return {
            num: result.num,
            cash: result.cash + card.cash
        }
    },
    {
        num: "457855155",
        cash: 0
    }
)
~~~

**Результат:**

~~~console
▼ { num: "457855155", cash: 10300 }
    cash: 10300
    num: "457855155"
  ► __proto__: Object
~~~

_________________________________________________

![ico-25 cap] ** 3**

Для чистоты результата дополнительно обнулим остатки на счетах других карт:

~~~js
cards.reduce (
    function ( result, card ) {
        var cash = card.cash
        card.cash = 0
        return {
            num: result.num,
            cash: result.cash + cash
        }
    },
    {
        num: "457855155",
        cash: 0
    }
)
~~~

**Теперь исходный массив карт будет:**

~~~console
▼ (4) [{…}, {…}, {…}, {…}]
  ► 0: {num: "457892425", cash: 0}
  ► 1: {num: "457812840", cash: 0}
  ► 2: {num: "457855780", cash: 0}
  ► 3: {num: "457811714", cash: 0}
    length: 4
  ► __proto__: Array(0)
~~~

__________________________________________

![ico-25 cap] ** 4**

Удалим дублирующиеся элементы массива:

~~~~js
var arr = [
    "google",
    "mozilla",
    "ie",
    "mozilla",
    "mozilla",
    "google",
    "mozilla",
    "ie",
    "ie",
    "google"
]

arr.reduce (
    function ( result, item ) {
        result.indexOf ( item ) < 0 ?
            result.push ( item ) : null
        return result
    },
    []
)
~~~~

**Результат:**

~~~~console
▼ (3) ["google", "mozilla", "ie"]
    0: "google"
    1: "mozilla"
    2: "ie"
    length: 3
  ► __proto__: Array(0)
~~~~

_________________________________________________

![ico-25 cap] ** 5**

Задача посложнее:

Есть несколько отрезков на числовой оси, таких, что начало и конец отрезков не совпадают

~~~js
let segments = [ [ 1, 8 ], [ 2, 3 ], [ 4, 7 ], [ 5, 6 ] ]
~~~

Для каждого отрезка нужно посчитать, сколько отрезков лежит внутри него

**Решение**

Нужно напилить код функции, которая будет:

![ico-20 green-ok] получать в качестве аргумента исходный массив отрезков
![ico-20 green-ok] перебирать полученный массив
![ico-20 green-ok] для каждого отрезка в этом массиве считать число вложенных в него отрезков
![ico-20 green-ok] возвращать результат в виде массива чисел

Каркас функции:

~~~javascript
function countInnerIntervals ( intervals ) {
    let results = []
    intervals.forEach (
        ...
    )
    return results
}
~~~

Внутри функции объявляется пустой массив **~results~**, куда мы будем помещать результаты подсчетов

Когда итерирование исходного массива будет завершено, функция вернет массив результатов **~results~**

Теперь методу **~forEach~** нужно передать функцию, которая будет "работать" с очередным отрезком

Это будет первый формальный параметр функции ( назовем его **~segment~** )

Но нам нужно будет внутри функции опять итерировать исходный массив, чтобы искать в нем отрезки, которые попадают в текущий отрезок **~segment~**

Для этого нам необходим третий аргумент - ссылка на исходный массив

Поэтому у функции будет три параметра: **~segment~**, **~index~**, **~array~**

Параметр **~array~** будет содержать ссылку на исходный массив

~~~js
intervals.forEach (
    function ( segment, index, array ) {
        ...
    },
    results
)
~~~

Обратите внимание, что методу **~forEach~** мы передаем обыную ( не стрелочную ) функцию, поскольку мы биндим ей контекст вызова - **~results~**

Это позволит нам внутри функции пушить результаты в массив **~results~**, используя ключевое слово ~this~

~~~js
intervals.forEach (
    function ( segment, index, array ) {
        this.push (
            ...
        )
    },
    results
)
~~~

Если мы используем стрелочную функцию, то ее контекст вызова изменить будет невозможно, поэтому нам придется обращаться к массиву **~results~** непосредственно:

~~~js
intervals.forEach (
    ( segment, index, array ) =>
        results.push (
            ...
        )
)
~~~

Теперь вопрос - что пушить в массив **~results~**

Очевидно, что на каждой итерации это должно быть число, а не массив

Но мы итерируем исходный массив, ссылку на который получаем в параметре **~array~**

Итак, в параметре **~segment~** у нас ссылка на отрезок, для которого мы подсчитываем число входящих в него отрезков

В параметре **~array~** у нас ссылка на исходный массив отрезков

На каждой итерации нам нужно сравнить концы отрезка **~segment~** с концами каждого из отрезков массива **~array~**, чтобы понять, находится ли последний внутри отрезка **~segment~**

Для этого можно использовать метод **~filter~**:

~~~js
array.filter (
    item => item [0] > segment[0] && item [1] < segment[1]
)
~~~

Результатом будет массив отрезков, попавших в заданный отрезок **~segment~**

Нам осталось только получить длину массива:

~~~javascript
array.filter (
    item => item [0] > segment[0] && item [1] < segment[1]
).length
~~~

Это и будет число отрезков, находящихся внутри отрезка **~segment~**

Итак, полный код функции, передаваемой методу **~forEach~**:

~~~js
intervals.forEach (
    ( segment, index, array ) => results.push (
        array.filter (
            item => item [0] > segment[0] && item [1] < segment[1]
        ).length
    )
)
~~~

Теперь полный код функции **~countInnerIntervals~** готов:

~~~~js
function countInnerIntervals ( intervals ) {
    let results = []
    intervals.forEach (
        ( segment, index, array ) =>
            results.push (
                array.filter (
                    item => item [0] > segment[0] && item [1] < segment[1]
                ).length
            )
    )
    return results
}
~~~~

А теперь та же функция, но с использованием метода **~reduce~**:

~~~~js
function countInnerIntervals ( intervals ) {
    let results = []
    intervals.forEach (
        ( segment, index, array ) => results.push (
            array.reduce (
                ( result, item ) =>
                    result += item [0] > segment[0] && item [1] < segment[1] ? 1 : 0,
                    0
            )
        )
    )
    return results
}
~~~~

А теперь заменим метод **~forEach~** на метод **~map~**

~~~~js
function countInnerIntervals ( intervals ) {
    return intervals.map (
        ( segment, index, array ) =>
            array.reduce (
                ( result, item ) =>
                    result += item [0] > segment[0] && item [1] < segment[1] ? 1 : 0,
                0
            )
    )
}
~~~~

или с использованием стрелочной функции:

~~~~js
const countInnerIntervals = intervals => intervals.map (
    ( segment, index, array ) =>
        array.reduce (
            ( result, item ) =>
                result += item [0] > segment[0] && item [1] < segment[1] ? 1 : 0,
            0
        )
)
~~~~

Осталось только вызвать функцию:

~~~js
console.log ( countInnerIntervals ( segments ) )
~~~

__________________________

### ![ico-25 icon] sort()

В полном смысле слова этот метод нельзя назвать методом итерирования массива, поскольку число итераций больше чем число элементов массива

Однако итерации имеют место быть
И перебор элементов массива налицо

Метод сортирует массив согласно заданному условию сортировки
Условие сортировки проверяет передаваемая методу функция
_Функция получает два аргумента для попарного сравнения_

Функция возвращает одно из трех значений:
•  0 - совпадение элементов
•  1 - первый аргумент больше второго
• -1 - второй аргумент больше первого

На основании возвращенного функцией значения метод меняет порядок следования элементов в массиве

~~~~js
var sourceArray = [
    {  title: "fond",  value:  100 },
    {  title: "salary",  value:  400 },
    {  title: "bonus",  value:  70 },
    {  title: "debt",  value:  700 },
    {  title: "credit",  value:  200 },
    {  title: "payments",  value:  150 },
    {  title: "income",  value:  320 },
]
var resArray = sourceArray.sort (
    function ( x, y ) {
        return x.value - y.value
    }
)
~~~~

~~~~Результат
▼ (7) [{…}, {…}, {…}, {…}, {…}, {…}, {…}]
  ► 0: {title: "bonus", value: 70}
  ► 1: {title: "fond", value: 100}
  ► 2: {title: "payments", value: 150}
  ► 3: {title: "credit", value: 200}
  ► 4: {title: "income", value: 320}
  ► 5: {title: "salary", value: 400}
  ► 6: {title: "debt", value: 700}
    length: 7
  ► __proto__: Array(0)
~~~~

Для понимания механизма сортировки выведем в консоль значения сравниваемых элементов массива на каждой итерации:

~~~~javascript
var resArray = sourceArray
    .sort (
        function ( x, y ) {
            console.log ( `${x.title} - ${y.title} = ${x.value - y.value}` )
            return  x.value - y.value
        }
    )
~~~~

~~~~Результат
fond - bonus = 30
payments - fond = 50
credit - payments = 50
income - credit = 120
salary - income = 80
debt - salary = 300
~~~~

или так:

~~~~js
var tmp =[]
var resArray = sourceArray
    .sort (
        function ( x, y ) {
            tmp.push ( {
                id: x.title + " > " + y.title,
                res: x.value > y.value
            } )
            return  x.value - y.value
        }
    )
~~~~

~~~~tmp
▼ (13) [...]
  ► 0: "salary - fond = 300"
  ► 1: "bonus - salary = -330"
  ► 2: "bonus - salary = -330"
  ► 3: "bonus - fond = -30"
  ► 4: "debt - fond = 600"
  ► 5: "debt - salary = 300"
  ► 6: "credit - salary = -200"
  ► 7: "credit - fond = 100"
  ► 8: "payments - credit = -50"
  ► 9: "payments - fond = 50"
  ► 10: "income - credit = 120"
  ► 11: "income - debt = -380"
  ► 12: "income - salary = -80"
    length: 13
  ► __proto__: Array(0)
~~~~

Итак, в отличие от других итерирующих методов, функция, передаваемая методу в качестве единственного аргумента, принимает строго два параметра

![ico-20 warn] Этому методу нельзя передать ссылку на контекст вызова
![ico-20 warn] Число итераций будет заведомо больше числа элементов массива

![ico-20 require] Самостоятельно попробуйте нарисовать блок-схему алгоритма сортировки массива методом  **~sort()~**

__________________________

### ![ico-25 icon] flatMap()

![ico-20 warn] экспериментальная технология

Есть строка **cookie**:

~~~js
var cookie = "name=user; token=Jd7-js15/84; inerest=javascript"
~~~

Сплитим строку **cookie** и применим метод **~map~** к полученному массиву

~~~js
console.log (
    cookie.split ( "; " )
        .map ( item => item.split ( "=" ) )
)
~~~

**Результат в консоли:**

~~~console
▼ (3) [Array(2), Array(2), Array(2)]
  ► 0: (2) ["name", "user"]
  ► 1: (2) ["token", "Jd7-js15/84"]
  ► 2: (2) ["inerest", "javascript"]
    length: 3
  ► __proto__: Array(0)
~~~

Мы получили массив, элементы которого являются массивами

Теперь применим метод **~flatMap~** к массиву **cookie**

~~~js
console.log (
    cookie.split ( "; " )
        .flatMap ( item => item.split ( "=" ) )
)
~~~

**Результат в консоли:**

~~~console
► (6) ["name", "user", "token", "Jd7-js15/84", "inerest", "javascript"]
~~~

Мы получили "плоский" массив

Итак, используя одну и ту же функцию:

~~~js
function ( item ) {
    return item.split ( "=" )
}
~~~

мы получили в первом случае массив массивов, а во втором - "плоский" массив

____________________________________________________

### ![ico-25 icon] keys()

**Генератор**
**Возвращает объект _итератора_**

^^^[Пример]

~~~js
var cookie = "name=user; token=Jd7-js15/84; inerest=javascript"
    .split ( "; " )
        .map ( item => item.split ( "=" ) )

var iterator = cookie.keys()

var done = false

 do {
    var { value: val, done: stop } = iterator.next();
    stop || console.log ( cookie[ val ][0], cookie[ val ][1] )
} while ( !stop )
~~~

В консоли будет:

~~~console
name user
token Jd7-js15/84
inerest javascript
~~~

^^^

______________________

### ![ico-25 icon] values()

**Генератор**
**Возвращает объект _итератора_**

^^^[Пример]

~~~js
var iterator = "name=user; token=Jd7-js15/84; inerest=javascript"
    .split ( "; " )
        .map ( item => item.split ( "=" ) ).values()

do {
    var { value: val, done: stop } = iterator.next();
    stop || console.log ( val )
} while ( !stop )
~~~

В консоли будет:

~~~console
► (2) ["name", "user"]
► (2) ["token", "Jd7-js15/84"]
► (2) ["inerest", "javascript"]
~~~

^^^

_____________________

## ![ico-25 icon] Примеры и тесты

![ico-25 cap] ** 1**

Перейдите по [![ico-20 link] **_ссылке_**](https://developer.mozilla.org/en-US/docs/Web/API/Window/location?name=garevna,date=10.07.2018)

В консоли новой вкладки выполните код:

~~~js
location.search
    .slice(1).split(',')
        .map ( x => Object.assign ( {},
                        { [ x.split( '=' )[0] ] : x.split( '=' )[1] }
                    )
        )
~~~

____________________________________________________

![ico-25 cap] ** 2**

Перейдите по [![ico-20 link] **_ссылке_**](https://developer.mozilla.org/en-US/docs/Web/API/Window/location?name=garevna,date=10.07.2018)

Теперь в консоли новой вкладки объявите функцию:

~~~js
function getSearchObject () {
        var obj = {}
        location.search.slice(1).split( ',' )
                .map ( x => x.split( '=' ) )
                .map ( function ( item ) {
                        this[ item [0] ] = item [1]
        }, obj )
        return obj
}
~~~

Вызовите функцию  **getSearchObject()**

____________________________________________

| [![ico-25 cap] ** 3**](https://garevna.github.io/js-samples/?name=garevna,date=10.07.2018#11) |

_____________________________________________

![ico-25 cap] ** 4**

В консоли [**_страницы_**](https://medium.com/@js_tut/the-complete-guide-to-es10-features-f09a8c7be1bd) выполните код:

~~~~js
let changeClass = ( classname, styleString ) => ( Array.from ( document.styleSheets )
    .filter ( sheet => !sheet.href )
        .map (
            sheet => Array.from ( sheet.cssRules )
                    .filter ( rule => rule.selectorText === `.{classname}` )
        )
           .filter ( item => item.length > 0 )
               .map ( item => item[0].cssText.split ("}")
                           .join ( `${styleString}}` )
               )
).length > 0 ? console.log ( "found" ) :
    document.head.appendChild (
        document.createElement ( "style" )
    ).textContent = `.${classname} {${styleString}}`

changeClass ( "graf", "background-color: red!important;" )
~~~~

[![ico-70 youtube]](https://youtu.be/vL6n7hGvwSs)

_______________________

[![ico-30 hw] **Тесты**](https://garevna.github.io/js-quiz/#arrayIterationMethods)
