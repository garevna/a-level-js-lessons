[footer]: https://github.com/garevna/js-course/raw/master/images/a-level-ico.png?raw=true
[me40]: https://raw.githubusercontent.com/garevna/a-level-js-lessons/master/ico/myPhoto-40.png "Ⓒ Irina Fylyppova ( garevna ) 2019"
[ico20]: https://raw.githubusercontent.com/garevna/a-level-js-lessons/master/ico/a-level-20.png
[ico25]: https://raw.githubusercontent.com/garevna/a-level-js-lessons/master/ico/a-level-25.png
[hw-20]: https://raw.githubusercontent.com/garevna/a-level-js-lessons/master/ico/briefcase-20.png
[hw-30]: https://raw.githubusercontent.com/garevna/a-level-js-lessons/master/ico/briefcase-30.png
[cap-20]: https://raw.githubusercontent.com/garevna/a-level-js-lessons/master/ico/coffee-20.png
[cap-30]: https://raw.githubusercontent.com/garevna/a-level-js-lessons/master/ico/coffee-30.png
[warn-25]: https://raw.githubusercontent.com/garevna/a-level-js-lessons/master/ico/warning-25.png
[link-20]: https://raw.githubusercontent.com/garevna/a-level-js-lessons/master/ico/link-20.png
[err-20]: https://raw.githubusercontent.com/garevna/a-level-js-lessons/master/ico/no_entry-20.png
[err-25]: https://raw.githubusercontent.com/garevna/a-level-js-lessons/master/ico/no_entry-25.png
[err-30]: https://raw.githubusercontent.com/garevna/a-level-js-lessons/master/ico/no_entry-30.png
[reload]: https://raw.githubusercontent.com/garevna/a-level-js-lessons/master/ico/reload.png
[file-20]: https://raw.githubusercontent.com/garevna/a-level-js-lessons/master/ico/pencil-20.png

| <img width="900"/> | ![me40] <br/><sup>[Занятие&nbsp;1](../lessons/lesson-01.md)</sup> |
|-|-|

# Логические выражения

## ![ico25] Логические значения

Логических значений всего два:  **`true`** (истина)  и  **`false`**  (ложь)

_________________________________________________________________________

## ![ico25] Операторы сравнения

Сравнивают две переменных ( или два выражения ) и возвращают логическое значение

| Оператор | Описание |
|:-:|:-|
| **`==`** | <sup>нестрогое равенство  ( равенство значений )</sup> |
| **`===`** | <sup>строгое равенство ( равенство значений и типов данных )</sup> |
| **`!=`** | <sup>нестрогое неравенство ( значения не равны )</sup> |
| **`!==`** | <sup>строгое неравенство ( сравниваются не только  значения, но и типы данных )</sup> |
| **`>`** | <sup>больше</sup> |
| **`<`** | <sup>меньше</sup> |
| **`>=`** | <sup>больше или равно</sup> |
| **`<=`** | <sup>меньше или равно</sup> |

#### ![cap-30] 1

```javascript
var x = 5
```
| Выражение | Результат |
|:-:|:-:|
| `x == 8` | `false` |
| `x == 5` | `true` |
| `x == "5"` | `true` |
| `x === 5` | `true` |
| `x === "5"` | `false` |
| `x != 8` | `true` |
| `x !== 5` | `false` |
| `x !== "5"` | `true` |
| `x !== 8` | `true` |
| `x > 8` | `false` |
| `x < 8` | `true` |
| `x >= 8` | `false` |
| `x <= 8` | `true` |
| `x <= 5` | `true` |
| `x >= 5` | `true` |

_________________________________________________________________________

## ![ico25] Логические операции

### &&

###### логическое "И"

```javascript
true  && true    //    true
true  && false   //    false
false && true    //    false
false && false   //    false
```

#### ![cap-30] 2

```javascript
5 > 8 && 4 < 5   // false  
// explanation:
5 > 8            // false,
4 < 5            // true,
false && true    // false
```

_________________________________________________________________________

#### ![cap-30] 3

```javascript
8 > 5 && 4 < 5   // true
// explanation:
8 > 5            // true,
4 < 5            // true,
true && true     // true
```

_________________________________________________________________________

#### ![cap-30] 4

```javascript
var    x = 4,    y = 10,    z = 8

x > y && z < y   // false
// explanation:
x > y            // false,
z < y            // true,
false && true    // false
```

_________________________________________________________________________

#### ![cap-30] 5

```javascript
x < y && z < y   // true
// explanation:
x < y            // true,
z < y            // true,
true && true     // true
```

_________________________________________________________________________

### ||

###### логическое "_ИЛИ_"

```javascript
true  || true    //    true
true  || false   //    true
false || true    //    true
false || false   //    false
```

#### ![cap-30] 6

```javascript
5 > 8 || 4 < 5   // true
// explanation:
5 > 8            // false,
4 < 5            // true,
false || true    // true
```

_________________________________________________________________________

#### ![cap-30] 7

```javascript
5 > 8 || 4 > 5   // false
// explanation:
5 > 8            // false,
4 > 5            // false,
false || false   // false
```

_________________________________________________________________________

#### ![cap-30] 8

```javascript
var  x = 4,  y = 10,  z = 8

x > y || z < y   // true

// explanation:

x > y            // false,
z < y            // true,
false || true    // true
```

_________________________________________________________________________

#### ![cap-30] 9

```javascript
x > y || z > y   // false

// explanation:

x > y            // false,
z > y            // false,
false || false   // false
```

_________________________________________________________________________

### !

###### Логическое отрицание

```javascript
!true   // false
!false  // true
```

_________________________________________________________________________

#### ![cap-30] 10

```javascript
!(5 > 8)    // true

// explanation:

5 > 8      // false,
!false     // true
```

_________________________________________________________________________

#### ![cap-30] 11

```javascript
!(5 > 4)   // false

// explanation:

5 > 4      // true,
!true      // false
```

_________________________________________________________________________

![warn-25] для логических значений **x**, а так же значений **`null`**, **`NaN`**, **`undefined`**

```javascript
x || !x    // всегда  true
```

![warn-25] для логических значений **x**

```javascript
x && !x    // всегда  false
```

_________________________________________________________________________

#### ![cap-30] 12

```javascript
var x = undefined
var y = x || !x       // true
var z = x && !x       // undefined
```

_________________________________________________________________________

#### ![cap-30] 13

```javascript
var x = null
var y = x || !x       // true
var z = x && !x       // null
```

_________________________________________________________________________

#### ![cap-30] 14

```javascript
    var x = NaN
    var y = x || !x       // -->  true
    var z = x && !x       // -->  NaN
```

_________________________________________________________________________

#### ![cap-30] 15

```javascript
var x = 5
var y = x || !x       // 5
var z = x && !x       // false
```

_________________________________________________________________________

#### ![cap-30] 16

```javascript
var x = "h"
var y = x || !x       // "h"
var z = x && !x       // false
```

_________________________________________________________________________

#### ![cap-30] 17

```javascript
var x = ""        // ( пустая строка )
var y = x || !x   // true
var z = x && !x   // ""
```

_________________________________________________________________________

#### ![cap-30] 18

```javascript
var  x = 4,  y = 10

!( x > y )   // true

// explanation:

x > y        // false,
!( false )   // true
```

_________________________________________________________________________

## ![ico25] Логические выражения


Логические выражения - это конструкции из переменных и/или констант, связанных между собой операторами сравнения и/или логическими операторами

Логические выражения принимают значения **`true`** или **`false`**

###### ![cap-20] Примеры логических выражений

```javascript
x >= y
z == t
z === t
y != x  // значение y не равно значению x
y !== x // или значение y не равно значению x,
            // или тип данных y не совпадает с типом данных x

y != x
y !== x

x > 8 && y === 5
typeof x === "number" || x === null
!x === y
```

_________________________________________________________________________

### [![hw-30] Упражнения](https://docs.google.com/forms/d/e/1FAIpQLSexcuOpJS2d0KNNU1qTUlD5Exnf0FGI9Wb9d2I5YvViwuSKDA/viewform)

_________________________________________________________________________

[![link-20] w3schools](https://www.w3schools.com/js/js_comparisons.asp)

_________________________________________________________________________

![footer]
