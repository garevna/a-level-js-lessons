[footer]: https://github.com/garevna/js-course/raw/master/images/a-level-ico.png?raw=true
[me30]: https://raw.githubusercontent.com/garevna/a-level-js-lessons/master/ico/myPhoto-30.png "Ⓒ Irina Fylyppova ( garevna ) 2019"
[ico20]: https://raw.githubusercontent.com/garevna/a-level-js-lessons/master/ico/a-level-20.png
[ico25]: https://raw.githubusercontent.com/garevna/a-level-js-lessons/master/ico/a-level-25.png
[hw-30]: https://raw.githubusercontent.com/garevna/a-level-js-lessons/master/ico/briefcase-30.png
[cap-30]: https://raw.githubusercontent.com/garevna/a-level-js-lessons/master/ico/coffee-30.png
[warn-25]: https://raw.githubusercontent.com/garevna/a-level-js-lessons/master/ico/warning-25.png
[link-25]: https://raw.githubusercontent.com/garevna/a-level-js-lessons/master/ico/link-25.png
[err-20]: https://raw.githubusercontent.com/garevna/a-level-js-lessons/master/ico/no_entry-20.png
[err-25]: https://raw.githubusercontent.com/garevna/a-level-js-lessons/master/ico/no_entry-25.png
[err-30]: https://raw.githubusercontent.com/garevna/a-level-js-lessons/master/ico/no_entry-30.png


# ![me30] [Итерирующие методы массивов](../lesson-09.md)

Выведя в консоль свойство **_`prototype`_** конструктора массивов, можно убедиться,
что эти структуры данных наследуют много методов,
и некоторые из них мы уже знаем

###### Array.prototype

```console
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
```

Часть методов, с которыми мы уже знакомы, выполняют какую-то операцию с массивом ( добавляют элемент в массив, удаляют или заменяют элементы в массиве, объединяют несколько массивов в один и т.д. )

Итерирующие методы перебирают элементы массива один за другим строго в порядке возрастания их индексов ( за исключением `reduceRight` )

В процессе перебора значений происходит вызов указанной нами функции, которая и получает очередной элемент массива в качестве аргумента

### Методы массивов

| Обычные | Итерирующие |
|-|-|
| `concat` | `entries` |
| `copyWithin` | `every` |
| `fill` | `filter` |
| `flat` :warning: | `find` |
| `includes` | `findIndex` |
| `indexOf` | `flatMap` :warning: |
| `join` | `forEach` |
| `lastIndexOf` | `keys` |
| `pop` | `map` |
| `push` | `reduce` |
| `reverse` | `reduceRight` |
| `shift` | `some` |
| `slice` | `sort` |
| `splice` | `values` |
| `unshift` |  |

Группа итерирующих методов массивов - пример реализации функциональной парадигмы в ООП<br/>
>> Точнее, mix двух парадигм программирования<br/>
>> Mix - потому что мы передаем этим методам в аргументах не только функцию, но и ссылку на объект

Обязательный первый аргумент, передаваемый методу в момент вызова - функция

```javascript
function func ( arrayElement ) {
    console.log ( arrayElement )
}

[ 7, "D", false ]
    .forEach ( func )
```

Обязательный формальный параметр функции ( **func** ) - текущее значение элемента массива ( **_arrayElement_** )

Функция ( назовем ее условно _callback_ ) будет вызвана на каждой итерации ( для каждого элемента массива )

###### :coffee: Принцип работы итерирующих методов

```javascript
var arr = [ "google", "service", "user" ]

function test ( elem ) {
    console.log ( elem )
}

Array.prototype.sampleMethod = function ( callback ) {
    for ( var item of this )
        callback ( item )
}

arr.sampleMethod ( test )
```

Собственно, эти методы не изменяют исходный массив, поэтому алгоритм их работы скорее можно представить так:

```javascript
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
```

Функция, передаваемая методу, может иметь больше формальных параметров,<br/>
но остальные два являются опциональными ( необязательными )

###### :coffee: :one: второй параметр - идекс текущего элемента массива

```javascript
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
```

###### :coffee: :two: третий параметр - ссылка на итерируемый массив

```javascript
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
```

###### :coffee: :three:

Функция, передаваемая методу в качестве первого аргумента, может быть анонимной, объявленной непосредственно в вызове метода
```javascript
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
```

## Передача контекста

Кроме обязательного первого аргумента - ссылки на функцию  

каждый метод имеет необязательный ( опциональный ) второй аргумент - ссылку на контекст вызова

( т.е. внутри метода  `this`  будет указывать на этот объект )

###### :coffee: :four:

```javascript
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
```

Итак, функция **sample** получает в переменной **_arr_** ссылку на исходный массив **numbers**, а **_`this`_** внутри функции **sample** указывает на массив **alter**

_________________________________________________________________________

![footer]
