[footer]: https://github.com/garevna/js-course/raw/master/images/a-level-ico.png?raw=true
[me40]: https://raw.githubusercontent.com/garevna/a-level-js-lessons/master/ico/myPhoto-40.png "Ⓒ Irina Fylyppova ( garevna ) 2019"

[ico20]: https://raw.githubusercontent.com/garevna/a-level-js-lessons/master/ico/a-level-20.png
[ico25]: https://raw.githubusercontent.com/garevna/a-level-js-lessons/master/ico/a-level-25.png
[ico50]: https://raw.githubusercontent.com/garevna/a-level-js-lessons/master/ico/a-level-50.png

[hw-20]: https://raw.githubusercontent.com/garevna/a-level-js-lessons/master/ico/briefcase-20.png
[hw-30]: https://raw.githubusercontent.com/garevna/a-level-js-lessons/master/ico/briefcase-30.png
[hw-40]: https://raw.githubusercontent.com/garevna/a-level-js-lessons/master/ico/briefcase-40.png

[cap-20]: https://raw.githubusercontent.com/garevna/a-level-js-lessons/master/ico/coffee-20.png
[cap-25]: https://raw.githubusercontent.com/garevna/a-level-js-lessons/master/ico/coffee-25.png
[cap-30]: https://raw.githubusercontent.com/garevna/a-level-js-lessons/master/ico/coffee-30.png
[cap-40]: https://raw.githubusercontent.com/garevna/a-level-js-lessons/master/ico/coffee-40.png

[warn-25]: https://raw.githubusercontent.com/garevna/a-level-js-lessons/master/ico/warning-25.png
[warn-30]: https://raw.githubusercontent.com/garevna/a-level-js-lessons/master/ico/warning-30.png
[warn-40]: https://raw.githubusercontent.com/garevna/a-level-js-lessons/master/ico/warning-40.png

[link-20]: https://raw.githubusercontent.com/garevna/a-level-js-lessons/master/ico/link-20.png
[link-25]: https://raw.githubusercontent.com/garevna/a-level-js-lessons/master/ico/link-25.png

[err-20]: https://raw.githubusercontent.com/garevna/a-level-js-lessons/master/ico/no_entry-20.png
[err-25]: https://raw.githubusercontent.com/garevna/a-level-js-lessons/master/ico/no_entry-25.png
[err-30]: https://raw.githubusercontent.com/garevna/a-level-js-lessons/master/ico/no_entry-30.png

[wink-20]: https://raw.githubusercontent.com/garevna/a-level-js-lessons/master/ico/wink-20.png
[wink-25]: https://raw.githubusercontent.com/garevna/a-level-js-lessons/master/ico/wink-25.png
[wink-30]: https://raw.githubusercontent.com/garevna/a-level-js-lessons/master/ico/wink-30.png


<table><tr><td width="50">

![ico25] <br/><sup>[**Lesson&nbsp;2**](../lessons/lesson-02.md)</sup>
  </td>
  <td width="800"><h2>Неявное приведение типов</h2></td>
  <td>

  ![me40] <br/><sup>[**Занятие&nbsp;2**](../lessons/lesson-02.md)</sup></td>
</tr></table>


Неявное приведение типов происходит в процессе вычисления выражений

## ![ico25] Неявное приведение к типу `string`

![warn-25] При сложении числа и строки JavaScript обрабатывает число как строку

Например, после выполнения кода:

```javascript
var res = 20 + "5"
```
значением переменной **res** будет строка *"205"*

JavaScript вычисляет выражения слева направо

В результате выполнения кода:

```javascript
var res = 20 + 10 + "5"
```
в переменной res будет значение "305",

а в результате выполнения кода:

```javascript
var res = "3" + 20 + 10
```
в переменной **res** будет значение *"32010"*

![warn-25] При сложении массива и любого другого операнда результат будет строкового типа ( `string` )

#### ![cap-20] 1

```javascript
[ ] + 5            //  "5"
[ ] + false        //  "false"
[ 4 ] + NaN        //  "4NaN"
[ 4, 8 ] + null    //  "4,8null"
null + [ 4, 8 ]    //  "null4,8"
```

Это происходит потому, что массив преобразуется в строку:

```javascript
String ( [ 4, 8 ] )
```
и результат будет   `4,8`

![warn-25] Однако, если в массиве не более одного элемента, и перед массивом стоит знак арифметической операции, он будет приведен к числу:

#### ![cap-20] 2

```javascript
null + +[ 4 ]          // 4
+[5] + null            // 5
```

_____________________________________________________________

## ![ico25] Неявное приведение к типу `number`

![warn-25] Неявное приведение к типу  `number` происходит в арифметических выражениях:

```javascript
var  x = "8" / 2
```
( значением переменной x будет 4 )

![warn-25] При участии в арифметических операциях пустая строка ( `""` ) и пустой массив ( `[]` ) преобразуется в **0**:

```javascript
var x = ""
var y = x / 5
```
( выражение  `"" / 5`   будет приведено к   `0 / 5` )

```javascript
console.log ( +"" )         // 0
console.log ( +[] )         // 0
console.log ( +[]+"" )      // 0
```

![warn-25] Если в арифметическом выражении участвуют специальные значения `undefined` или `null`, то они преобразуются к числу так:

```javascript
Number ( undefined )   // NaN
Number ( null )        // 0
```

![warn-25] Если в арифметическом выражении участвуют логические значения `true` или `false`, то они преобразуются к числу так:

```javascript
var a = false
var b = true
var z = a + b    //  0 + 1 --> 1
```

![warn-25] Кроме арифметических операций, преобразование к типу `number` происходит при участии переменной в операциях сравнения ( за исключением операций   `===`   и   `!==`,  когда сравниваются не только значения, но и типы данных )

#### ![cap-20] 3

```javascript
a = false, b = undefined
a > b       // 0 > NaN  --> false
a < b       // 0 < NaN  --> false
a == b      // 0 == NaN --> false
```

#### ![cap-20] 4

```javascript
a = true,  b = null
a > b       // 1 > null   --> true ( 1 > 0 )
a < b       // 1 < null   --> false
a == b      // 1 == null  --> false
```

_____________________________________________________________

## ![ico25] Неявное приведение к типу `boolean`

![warn-25] Преобразование типов к логическому типу ( `boolean` ) происходит в условных операторах ( `if`, тернарный оператор )

#### ![cap-20] 5

```javascript
if ( "5" ) console.log ( "Yes" )
```

Будет вычисляться логическое значение выражения  в круглых скобках оператора `if`, т.е. "под капотом" будет выполнена операция

```javascript
Boolean ( "5" )
```

![warn-25] При выполнении логических операций  `||`  и  `&&` происходит неявное приведение типов операндов к логическому значению

![warn-25] но при этом результатом логической операции будет изначальное значение одного из операндов, даже если оно не являются булевым

_________________________________________________________________

### ![ico20] `&&`

Операция `&&`  перебирает операнды слева направо, приводя их к логическому значению, до тех пор, пока не встретится первый `false`

в этом случае возвращается исходное значение последнего операнда

#### ![cap-20] 6

```javascript
true && false && null   //  false
true && "5" && null     //  null
true && [] && null      //  null
```

#### ![cap-20] 7

```javascript
true && ![] && null     //  false
```

<sup>вычисляется значение второго операнда `![]`, оно будет `false`, операция останавливается и возвращается последний операнд, на котором остановились</sup>

```javascript
true && true && true && true     //    true
```

<sup>дошли до конца, но не встретили `false`, возвращается последний операнд</sup>

_____________________________________________________________

### `||`

Операция `||`  перебирает операнды слева направо, приводя их к логическому значению, до тех пор, пока не встретится первый `true`

в этом случае возвращается исходное значение последнего операнда, на котором остановились

#### ![cap-20] 8

```javascript
null || false || 5 || ""          //   5
null || "" || 0 || 4 || 10        //   4
```

#### ![cap-20] 9

```javascript
null || false || undefined || ""  //  ""
```

<sup>последовательно вычисляются логические значения</sup><br/>
<sup>первого операнда ( `null` ) - это `false`</sup><br/>
<sup>второго операнда - `false`</sup><br/>
<sup>третьего операнда ( `undefined` ) - это `false`</sup><br/>
<sup>четвертого операнда ( `""` ) - это `false`</sup><br/>
<sup>больше операндов нет, операция завершается и возвращает последний операнд, на котором остановилась ( `""` )</sup>

_________________________________________________________________________________________________________

### `!!`

можно привести переменную любого типа к `boolean` с помощью логической операции двойного отрицания:

```javascript
var x = null
var y = !!x        // false
```

```javascript
var x = undefined
var y = !!x        // false
```

```javascript
!![ ]      // вернет   true
!!+[ ]     // вернет  false
```

_____________________________________________________________

### [![hw-30] Упражнения](https://docs.google.com/forms/d/e/1FAIpQLSdFHuyyukF2rmA04BN1AmS5MCNXWgQmR5t7mmxyTpzdBZVGGw/viewform)

________________________________________________________
| [![link-20] w3schools](https://www.w3schools.com/jsref/jsref_infinity.asp) | [![link-20] Equality in JavaScript](https://dorey.github.io/JavaScript-Equality-Table/unified/) |
|-|-|

________________________________________________________

![footer]
