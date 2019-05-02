[footer]: https://github.com/garevna/js-course/raw/master/images/a-level-ico.png?raw=true
[me]: https://raw.githubusercontent.com/garevna/a-level-js-lessons/master/ico/myPhoto-40.png "Ⓒ Irina Fylyppova ( garevna ) 2019"

[ico20]: https://raw.githubusercontent.com/garevna/a-level-js-lessons/master/ico/a-level-20.png
[ico25]: https://raw.githubusercontent.com/garevna/a-level-js-lessons/master/ico/a-level-25.png
[hw-30]: https://raw.githubusercontent.com/garevna/a-level-js-lessons/master/ico/briefcase-30.png
[cap-20]: https://raw.githubusercontent.com/garevna/a-level-js-lessons/master/ico/coffee-20.png
[cap-25]: https://raw.githubusercontent.com/garevna/a-level-js-lessons/master/ico/coffee-25.png
[cap-30]: https://raw.githubusercontent.com/garevna/a-level-js-lessons/master/ico/coffee-30.png
[error]: https://raw.githubusercontent.com/garevna/a-level-js-lessons/master/ico/no_entry-20.png
[warn]: https://raw.githubusercontent.com/garevna/a-level-js-lessons/master/ico/warning-25.png
[link]: https://raw.githubusercontent.com/garevna/a-level-js-lessons/master/ico/link-20.png
[space-800]: https://raw.githubusercontent.com/garevna/a-level-js-lessons/master/ico/space-800.png

[lesson]: ../lessons/lesson-01.md

| ![ico25] <br/><sup>[**Lesson&nbsp;1**][lesson]</sup> | <h2>`NaN` | `null` | `Infinity`</h2>![space-800] | ![me] <br/><sup>[**Занятие&nbsp;1**][lesson]</sup> |
|:-:|:-:|:-:|

_________________________________________________________________________

## ![ico25] Значение `NaN`

###### Тип данных  `number`

Сокращение от **Not a Number** ( результат операции не является числом )

Можно получить в результате приведения типов, например:

```javascript
5 / "a"  --> NaN
"b" * 3  --> NaN
```

`NaN` является свойством глобального объекта ( `window` )

`NaN` также является свойством встроенного объекта  `Number`

![warn-25] `NaN` не равен ничему, даже самому себе

```javascript
NaN === NaN            // false
NaN == NaN             // false
NaN >= NaN             // false
NaN <= NaN             // false
```

Для определения, является ли значением выражения `NaN`,

можно использовать методы   `isNaN ()`  и  `Number.isNaN ()`

Их действие не идентично

```javascript
isNaN ( "привет" )               //  true
Number.isNaN ( "привет" )        //  false
Number.isNaN ( "привет" / 10 )   //  true
```

<sup>`isNaN ()`  возвращает `true`, если после приведения типа аргумента к числу результат будет  `NaN`</sup>

<sup>`Number.isNaN ()`  возвращает `true`, если аргумент имеет значение  `NaN`  ( приведения типа не происходит )</sup>

_____________________________________________________________

## ![ico25] Значение `null`

###### Тип данных  `object`

Специальное значение `null` означает "ничего"

![warn-25] `null` может равняться только `null` или ( при нестрогом сравнении ) `undefined`

```javascript      
null == null              // true
null === null             // true
null == undefined         // true
null === undefined        // false
null == 0                 // false
null == NaN               // false
null == false             // false
null == ""                // false
null == []                // false
```

_____________________________________________________________

## ![ico25] Значение `Infinity`

###### Тип данных  `number`

Значение, превышающее максимально возможное число с плавающей  запятой

Максимально возможное число с плавающей  запятой:

`1.7976931348623157E+10308`

Может быть отрицательным ( `-Infinity` )

`Infinity` может быть результатом деления на ноль отличного от нуля числа

```javascript
1 / 0            //  Infinity
```

Однако:

```javascript
0 / Infinity  // NaN

Infinity / Infinity  // NaN
Infinity - Infinity  // NaN

Infinity * Infinity  // Infinity
Infinity + Infinity  // Infinity
```

______________________________________________________________

[![link] w3schools](https://www.w3schools.com/jsref/jsref_infinity.asp)

________________________________________________________

![footer]
