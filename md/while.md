[footer]: https://github.com/garevna/js-course/raw/master/images/a-level-ico.png?raw=true
[me]: https://raw.githubusercontent.com/garevna/a-level-js-lessons/master/ico/myPhoto-40.png "Ⓒ Irina Fylyppova ( garevna ) 2019"
[ico20]: https://raw.githubusercontent.com/garevna/a-level-js-lessons/master/ico/a-level-20.png
[ico25]: https://raw.githubusercontent.com/garevna/a-level-js-lessons/master/ico/a-level-25.png
[hw-30]: https://raw.githubusercontent.com/garevna/a-level-js-lessons/master/ico/briefcase-30.png
[cap-30]: https://raw.githubusercontent.com/garevna/a-level-js-lessons/master/ico/coffee-30.png
[warn-25]: https://raw.githubusercontent.com/garevna/a-level-js-lessons/master/ico/warning-25.png
[link-25]: https://raw.githubusercontent.com/garevna/a-level-js-lessons/master/ico/link-25.png
[err-20]: https://raw.githubusercontent.com/garevna/a-level-js-lessons/master/ico/no_entry-20.png
[err-25]: https://raw.githubusercontent.com/garevna/a-level-js-lessons/master/ico/no_entry-25.png
[err-30]: https://raw.githubusercontent.com/garevna/a-level-js-lessons/master/ico/no_entry-30.png
[space-800]: https://raw.githubusercontent.com/garevna/a-level-js-lessons/master/ico/space-800.png

| ![ico25] <br/><sup>[**Lesson&nbsp;3**](../lessons/lesson-03.md)</sup> | <h2>Циклы `while` и `do ... while`</h2>![space-800] | ![me] <br/><sup>[**Занятие&nbsp;3**](../lessons/lesson-03.md)</sup> |
|-|-|-|

## ![ico25] while

```javascript
while ( условие ) {
        ...
}
```

Сначала вычисляется значение логического выражения в круглых скобках,, и если условие выполнено ( `true` ), то выполняется очередная итерация цикла

#### ![cap-30] 1

```javascript
var n = 5
while ( n < 5 ) {
    text += String.fromCharCode ( 48 + n++ )
}
```

> Цикл не будет выполняться, поскольку условие `n < 5` не выполнено

#### ![cap-30] 2

```javascript
var text = ""
var n = 0
while ( n < 5 ) {
    text += String.fromCharCode ( 48 + n++ )
}
```

> Цикл будет выполняться до тех пор, пока значение переменной `n` будет меньше 5

> На каждой итерации цикла значение переменной `n` будет увеличиваться на 1

_________________________________________________________________

## ![ico25] do ... while

```javascript
do {
    ...
}
while ( условие )
```

> Цикл будет выполнен как минимум 1 раз, поскольку проверка истинности условия происходит после очередной итерации цикла

#### ![cap-30] 3

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

_________________________________________________________________

#### [![hw-30] Тесты](https://garevna.github.io/js-quiz/#while)

_________________________________________________________________________

![footer]
