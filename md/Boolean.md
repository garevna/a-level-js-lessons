[ico20]: https://raw.githubusercontent.com/garevna/a-level-js-lessons/master/ico/a-level-20.png
[ico25]: https://raw.githubusercontent.com/garevna/a-level-js-lessons/master/ico/a-level-25.png
[hw-30]: https://raw.githubusercontent.com/garevna/a-level-js-lessons/master/ico/briefcase-30.png
[cap-30]: https://raw.githubusercontent.com/garevna/a-level-js-lessons/master/ico/coffee-30.png
[warn-25]: https://raw.githubusercontent.com/garevna/a-level-js-lessons/master/ico/warning-25.png
[link-25]: https://raw.githubusercontent.com/garevna/a-level-js-lessons/master/ico/link-25.png
[err-20]: https://raw.githubusercontent.com/garevna/a-level-js-lessons/master/ico/no_entry-20.png
[err-25]: https://raw.githubusercontent.com/garevna/a-level-js-lessons/master/ico/no_entry-25.png
[err-30]: https://raw.githubusercontent.com/garevna/a-level-js-lessons/master/ico/no_entry-30.png

# <img src="https://avatars2.githubusercontent.com/u/19735284?s=40&v=4" width="30" title="Ⓒ Irina Fylyppova ( garevna ) 2019"/> Логические выражения

* [`Логические значения`](#logic-value)
* [`Операторы сравнения`](#comparison-operators)
* [`Логические операции`](#logic-operations)
* [`Логические выражения`](#logic-expression)

***

<a name="logic-value"></a>

## 📖 Логические значения

Логических значений всего два:  **`true`** (истина)  и  **`false`**  (ложь)

***

<a name="comparison-operators"></a>

| [`Логические операции`](#logic-operations) | [`Логические выражения`](#logic-expression) |
|-|-|

## 📖 Операторы сравнения

Сравнивают две переменных ( или два выражения ) и возвращают логическое значение

| Оператор | Описание |
|:-:|:-|
| **`==`** | `нестрогое равенство  ( равенство значений )` |
| **`===`** | `строгое равенство ( равенство значений и типов данных )` |
| **`!=`** | `нестрогое неравенство ( значения не равны )` |
| **`!==`** | `строгое неравенство ( сравниваются не только  значения, но и типы данных )` |
| **`>`** | `больше` |
| **`<`** | `меньше` |
| **`>=`** | `больше или равно` |
| **`<=`** | `меньше или равно` |

:coffee:

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

***

<a name="logic-operations"></a>

| [`Логические значения`](#logic-value) | [`Операторы сравнения`](#comparison-operators) | [`Логические выражения`](#logic-expression) |
|-|-|-|

## 📖 Логические операции

<a name="and"></a>

| [`\|\|`](#or) | [`!`](#not) |
|-|-|

### :clipboard: &&

###### логическое "И"

```javascript
true  && true    //    true
true  && false   //    false
false && true    //    false
false && false   //    false
```

:coffee: 1

```javascript
5 > 8 && 4 < 5   // false  
// explanation:
5 > 8            // false,
4 < 5            // true,
false && true    // false
```

***

:coffee: 2

```javascript
8 > 5 && 4 < 5   // true
// explanation:
8 > 5            // true,
4 < 5            // true,
true && true     // true
```

***

:coffee: 3

```javascript
var    x = 4,    y = 10,    z = 8

x > y && z < y   // false
// explanation:
x > y            // false,
z < y            // true,
false && true    // false
```

***

:coffee: 4

```javascript
x < y && z < y   // true
// explanation:
x < y            // true,
z < y            // true,
true && true     // true
```

***

<a name="or"></a>

| [`&&`](#and) | [`!`](#not) |
|-|-|

### :clipboard: ||


логическое "*ИЛИ*"

```javascript
true  || true    //    true
true  || false   //    true
false || true    //    true
false || false   //    false
```

:coffee: 1

```javascript
5 > 8 || 4 < 5   // true
// explanation:
5 > 8            // false,
4 < 5            // true,
false || true    // true
```

***

:coffee: 2

```javascript
5 > 8 || 4 > 5   // false
// explanation:
5 > 8            // false,
4 > 5            // false,
false || false   // false
```

***

:coffee: 3

```javascript
var  x = 4,  y = 10,  z = 8

x > y || z < y   // true

// explanation:

x > y            // false,
z < y            // true,
false || true    // true
```

***

:coffee: 4

```javascript
x > y || z > y   // false

// explanation:

x > y            // false,
z > y            // false,
false || false   // false
```

***

<a name="not"></a>

| [`&&`](#and) | [`\|\|`](#or) |
|-|-|

### :clipboard: !

###### Логическое отрицание

```javascript
!true   // false
!false  // true
```

***

:coffee: 1

```javascript
!(5 > 8)    // true

// explanation:

5 > 8      // false,
!false     // true
```

***

:coffee: 2

```javascript
!(5 > 4)   // false

// explanation:

5 > 4      // true,
!true      // false
```

***

| [`&&`](#and) | [`\|\|`](#or) | [`!`](#not) |
|-|-|-|

***

:raised_hand: для логических значений **x**, а так же значений **`null`**, **`NaN`**, **`undefined`**

```javascript
x || !x    // всегда  true
```

:raised_hand: для логических значений **x**

```javascript
x && !x    // всегда  false
```

***

:coffee: 3

```javascript
var x = undefined
var y = x || !x       // true
var z = x && !x       // undefined
```

***

:coffee: 4

```javascript
var x = null
var y = x || !x       // true
var z = x && !x       // null
```

***

:coffee: 5

```javascript
    var x = NaN
    var y = x || !x       // -->  true
    var z = x && !x       // -->  NaN
```

| [`&&`](#and) | [`\|\|`](#or) | [`!`](#not) |
|-|-|-|

***

:coffee: 6

```javascript
var x = 5
var y = x || !x       // 5
var z = x && !x       // false
```

***

:coffee: 7

```javascript
var x = "h"
var y = x || !x       // "h"
var z = x && !x       // false
```

***

:coffee: 8

```javascript
var x = ""        // ( пустая строка )
var y = x || !x   // true
var z = x && !x   // ""
```

***

:coffee: 9

```javascript
var  x = 4,  y = 10

!( x > y )   // true

// explanation:

x > y        // false,
!( false )   // true
```

***

| [`&&`](#and) | [`\|\|`](#or) | [`!`](#not) |
|-|-|-|

***

<a name="logic-expression"></a>

| [`Логические значения`](#logic-value) | [`Операторы сравнения`](#comparison-operators) | [`Логические операции`](#logic-operations) |
|-|-|-|

## 📖 Логические выражения


Логические выражения - это конструкции из переменных и/или констант, связанных между собой операторами сравнения и/или логическими операторами

Логические выражения принимают значения **`true`** или **`false`**

###### :coffee: Примеры логических выражений

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
***

| [`Логические значения`](#logic-value) | [`Операторы сравнения`](#comparison-operators) | [`Логические операции`](#logic-operations) | [`Логические выражения`](#logic-expression) |
|-|-|-|-|

***

### [:briefcase: Упражнения](https://docs.google.com/forms/d/e/1FAIpQLSexcuOpJS2d0KNNU1qTUlD5Exnf0FGI9Wb9d2I5YvViwuSKDA/viewform)

***

[:link: w3schools](https://www.w3schools.com/js/js_comparisons.asp)

_________________________________________________________________________

![](https://github.com/garevna/js-course/raw/master/images/a-level-ico.png?raw=true)
