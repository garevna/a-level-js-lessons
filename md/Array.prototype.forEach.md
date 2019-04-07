[ico20]: https://raw.githubusercontent.com/garevna/a-level-js-lessons/master/ico/a-level-20.png
[ico25]: https://raw.githubusercontent.com/garevna/a-level-js-lessons/master/ico/a-level-25.png
[hw-30]: https://raw.githubusercontent.com/garevna/a-level-js-lessons/master/ico/briefcase-30.png
[cap-30]: https://raw.githubusercontent.com/garevna/a-level-js-lessons/master/ico/coffee-30.png
[warn-25]: https://raw.githubusercontent.com/garevna/a-level-js-lessons/master/ico/warning-25.png
[link-25]: https://raw.githubusercontent.com/garevna/a-level-js-lessons/master/ico/link-25.png
[err-20]: https://raw.githubusercontent.com/garevna/a-level-js-lessons/master/ico/no_entry-20.png
[err-25]: https://raw.githubusercontent.com/garevna/a-level-js-lessons/master/ico/no_entry-25.png
[err-30]: https://raw.githubusercontent.com/garevna/a-level-js-lessons/master/ico/no_entry-30.png

# <img src="https://avatars2.githubusercontent.com/u/19735284?s=40&v=4" width="30" title="Ⓒ Irina Fylyppova ( garevna ) 2019"/> Итерирующие методы массивов

* [`entries()`](md/Array.prototype.entries.md)
* [`every()`](md/Array.prototype.every.md)
* [`filter()`](md/Array.prototype.filter.md)
* [`find()`](md/Array.prototype.find.md)
* [`findIndex()`](md/Array.prototype.findIndex.md)
* [`flatMap()`](md/Array.prototype.flatMap.md)

________________________________________________________

## :mortar_board: forEach()

:warning: Этот метод не возвращает никакого значения

Он просто выполняет указанные действия с каждым элементом массива

### :coffee: 1

Рассмотрим самый простой вариант использования метода **`forEach()`**

```javascript
var  people = [ "Ivan", "Mary", "Elena", "Andrey" ]

people.forEach (
    function ( currentValue, index, array ) {
        console.log ( index  )
        console.log ( currentValue )
    }
)
```

Здесь мы итерируем массив  **people**  с помощью метода  **`forEach`**

Методу  **`forEach`**  в качестве аргумента  передается анонимная функция:

```javascript
function ( currentValue, index, array ) {
    console.log ( index  )
    console.log ( currentValue )
}
```

У этой анонимной функции может быть  три аргумента:
1)  текущий элемент массива
2) идекс текущего элемента массива
3) сам итерируемый массив

Обязательным является только первый аргумент

Например, чтобы вывести в консоль все элементы массива  **people**, мы можем использовать метод  **`forEach`** следующим образом:

```javascript
people.forEach (
    function ( x ) {
        console.log ( x )
    }
)
```

Результат работы предыдущего кода будет идентичен результату работы обычного оператора `for ... of`:

```javascript
for ( var x of people ) {
    console.log ( x )
}
```

________________________________________________________________________

Для чего могут понадобиться второй и третий аргументы анонимной функции:

предположим, нам нужно произвести вычисления с участием индекса элемента массива
при этом мы хотим добавить результаты вычислений в исходный массив ( изменить его )

```javascript
var  numbers = [ 8, 4, 9, 7 ]
var res = []

numbers.forEach (
    function ( numb, ind, res ) {
        res.push ( numb * ind )
    }
)

console.log ( numbers )
```

В консоли будет:

```console
[ 8, 4, 9, 7, 0, 4, 18, 21 ]
```

или мы хотим удвоить все значения элементов масива:

```javascript
var  numbers = [ 8, 4, 9, 7 ]

numbers.forEach (
    function ( numb, ind, res ) {
        res [ ind ] = numb * 2
    }
)

console.log ( numbers )
```

В консоли будет:

```console
[ 16, 8, 18, 14 ]
```
т.е. исходный массив  **numbers**  был изменен

Теперь получим результаты вычислений в новый массив  **res**

```javascript
var  numbers = [ 8, 4, 9, 7 ]
var res = []

numbers.forEach (
    function ( numb, ind ) {
        res.push ( numb * ind )
    }
)

console.log ( res )
console.log ( numbers )
```

Теперь  результаты вычислений будут помещены в массив  **res**,  а исходный  массив  **numbers**  останется неизмененным

__________________________________________________________________

## Контекст вызова

Метод  **`forEach`**  может принимать дополнительный аргумент - ссылку на контект вызова

```javascript
let intervals = [ [ 1, 8 ], [ 2, 3 ], [ 4, 7 ], [ 5, 6 ] ]

intervals.forEach (
    function ( interval ) { console.log ( this ) },
    intervals
)
```

В результате выполнения этого кода в консоли будет массив **`intervals`**

Фактически передача методу второго аргумента равносильна биндингу контекста:

```javascript
intervals.forEach (
    function ( interval ) {
        console.log ( this )
    }.bind( intervals )
)
```

Поэтому при использовании стрелочной функции:

```javascript
let intervals = [ [ 1, 8 ], [ 2, 3 ], [ 4, 7 ], [ 5, 6 ] ]

intervals.forEach (
    interval => console.log ( this ),
    intervals
)
```

контекст которой изменить невозможно,

в консоли мы увидим объект **`window`**

________________________________________________________

### :coffee: 2

Предположим, мы хотим передавать ссылку на массив **`res`**, куда следует помещать результаты вычислений:

```javascript
var res = []

numbers.forEach (
    function ( numb, ind ) {
        this.push ( numb * ind )
    },
    res
)
```

Чтобы обеспечить гибкость, т.е. возможность динамически изменять контекст вызова, а не устанавливать его единожды и навеки, завернем метод **`forEach`** в функцию  **`createNewArray`**

У функции **`createNewArray`** будет два формальных параметра:
   - исходный массив     ( **_`sourseArray`_** )
   - массив результатов ( **_`resultArray`_** )

Функция **`createNewArray`** будет передавать методу **`forEach`** не только функцию, которая будет вызвана на каждой итерации цикла, но и ссылку на контекст вызова этой функции ( `this` )

```javascript
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
```

В момент вызова значение формального параметра **`resultArray`** будет ссылкой на массив **`res`**

Таким образом, в результате вызова:

```javascript
createNewArray ( numbers, res )
```

внутри функции, передаваемой методу **`forEach`** в качестве первого аргумента, `this`  будет указывать на массив  **`res`**

Теперь функция  **`createNewArray`**  может быть применена к различным массивам:

```javascript
var bug = [ 10, 1, 3, 8 ]
var fug = []

createNewArray ( bug, fug )
```

________________________________________________________

### :coffee: 3

Разберитесь самостоятельно, что делает следующий код:

```javascript
Array.from ( document.styleSheets )
    .forEach (
        sheet => sheet.href ? null :
            Array.from ( sheet.cssRules ).forEach (
                rule => console.log ( rule )
            )
    )
```

___________________________________________________________________

* [`keys()`](md/Array.prototype.keys.md)
* [`map()`](md/Array.prototype.map.md)
* [`reduce()`](md/Array.prototype.reduce.md)
* [`reduceRight()`](md/Array.prototype.reduceRight.md)
* [`some()`](md/Array.prototype.some.md)
* [`sort()`](md/Array.prototype.sort.md)
* [`values()`](md/Array.prototype.values.md)

_________________________________________________________________________

![](https://github.com/garevna/js-course/raw/master/images/a-level-ico.png?raw=true)
