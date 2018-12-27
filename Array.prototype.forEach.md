# :mortar_board: Итерирующие методы массивов

[`entries()`](Array.prototype.entries)<br/>
[`every()`](Array.prototype.every)<br/>
[`filter()`](Array.prototype.filter)<br/>
[`find()`](Array.prototype.find)<br/>
[`findIndex()`](Array.prototype.findIndex)<br/>
[`flatMap()`](Array.prototype.flatMap)<br/>
***
## :mortar_board: forEach()
:warning: Этот метод не возвращает никакого значения<br/>
Он просто выполняет указанные действия с каждым элементом массива

:coffee: Рассмотрим самый простой вариант использования метода **`forEach()`**
```javascript
var  people = [ "Ivan", "Mary", "Elena", "Andrey" ]

people.forEach (
    function ( currentValue, index, array ) {
        console.log ( index  )
        console.log ( currentValue )
    }
)
```
Здесь мы итерируем массив  **people**  с помощью метода  **`forEach`**<br/>
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

Метод  **`forEach`**  может принимать дополнительный аргумент - ссылку на контект вызова ( **res** ):
```javascript
numbers.forEach (
    function ( numb, ind ) {
        this.push ( numb * ind )
    },
    res
)
```
Предположим, мы хотим передавать ссылку на массив, куда следует помещать результаты вычислений

Для этого объявим функцию  **_createNewArray_**, которая будет вызывать метод **`forEach`**

Фомальные параметры функции  **_createNewArray_**:
   - исходный массив     ( **sourseArray** )
   - массив результатов ( **resultArray** )

При вызове метода  **`forEach`**  функция  **_createNewArray_**  будет передавать методу  **`forEach`**  не только анонимную функцию, которая будет вызвана на каждой итерации цикла, но и еще один дополнительный аргумент - ссылку на контекст вызова метода ( `this` )
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
В этом примере методу  **`forEach`**  передается, кроме анонимной функции, дополнительный аргумент  **resultArray**

Внутри метода  `this`  будет указывать на то, что окажется в аргументе  **resultArray**

в момент вызова  фактическое значение  **resultArray**   будет  ссылкой  на   массив  **res**

Таким образом, в результате вызова:
```javascript
createNewArray ( numbers, res )
```
внутри метода **`forEach`**   `this`  будет указывать на массив  **res**

Теперь функция  **_createNewArray_**  может быть применена к различным массивам, т.е. при вызове мы передаем ей в качестве аргументов  ссылки на массивы  **numbers**  и  **res**

Мы можем применить ее к другим массивам:
```javascript
var  numArray = [ 10, 1, 3, 8 ]
var resultArray = []

createNewArray ( numArray, resultArray )
```
***
[`keys()`](Array.prototype.keys)<br/>
[`map()`](Array.prototype.map)<br/>
[`reduce()`](Array.prototype.reduce)<br/>
[`reduceRight()`](Array.prototype.reduceRight)<br/>
[`some()`](Array.prototype.some)<br/>
[`sort()`](Array.prototype.sort)<br/>
[`values()`](Array.prototype.values)<br/>
