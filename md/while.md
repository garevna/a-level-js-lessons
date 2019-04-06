# <img src="https://avatars2.githubusercontent.com/u/19735284?s=40&v=4" width="30" title="Ⓒ Irina Fylyppova ( garevna ) 2019"/> Циклы `while` и `do ... while`

## :mortar_board: `while`
```javascript
while ( условие ) {
        ...
}
```
Сначала вычисляется значение логического выражения в круглых скобках,, и если условие выполнено ( `true` ), то выполняется очередная итерация цикла

:coffee: :one:

```javascript
var n = 5
while ( n < 5 ) {
    text += String.fromCharCode ( 48 + n++ )
}
```
> Цикл не будет выполняться, поскольку условие `n < 5` не выполнено

:coffee: :two:

```javascript
var text = ""
var n = 0
while ( n < 5 ) {
    text += String.fromCharCode ( 48 + n++ )
}
```
> Цикл будет выполняться до тех пор, пока значение переменной `n` будет меньше 5

> На каждой итерации цикла значение переменной `n` будет увеличиваться на 1

***

## :mortar_board: `do ... while`

```javascript
do {
    ...
}
while ( условие )
```
> Цикл будет выполнен как минимум 1 раз, поскольку проверка истинности условия происходит после очередной итерации цикла

:coffee: :three:

```javascript
var str = ""

var i = 0

do {
    str += String.fromCharCode ( i + 48 )
    i += 1
}
while ( str.length < 10 )

console.log ( str )
```
> В этом примере на каждой итерации к объекту `str` типа "_string_" добавляется новый символ, код которого вычисляется как `i + 48`

> Затем переменная `i` увеличивается на 1

> Цикл продолжается до тех пор, пока длина строки `str` меньше 10

***

### [:briefcase: Тесты](https://garevna.github.io/js-quiz/#while)
