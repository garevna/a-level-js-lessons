# <img src="https://avatars2.githubusercontent.com/u/19735284?s=40&v=4" width="30" title="Ⓒ Irina Fylyppova ( garevna ) 2019"/> Приведение типов

[Явное приведение типов](Explicit-type-conversion)

***

### :mortar_board: Неявное приведение типов

:warning: Неявное приведение типов происходит в процессе вычисления выражений

<a name="string"></a>
#### :mortar_board: Неявное приведение к типу `string`

| [`number`](#number) | [`boolean`](#boolean)|
|-|-|

:warning: При сложении числа и строки JavaScript обрабатывает число как строку

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

:warning: При сложении массива и любого другого операнда результат будет строкового типа ( `string` )

:coffee:

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

:warning: Однако, если в массиве не более одного элемента, и перед массивом стоит знак арифметической операции,
он будет приведен к числу:

:coffee:

```javascript
null + +[ 4 ]          // 4
+[5] + null            // 5
```

***

<a name="number"></a>
#### :mortar_board: Неявное приведение к типу `number`

| [`string`](#string) |  [`boolean`](#boolean) |
|-|-|

:warning: Неявное приведение к типу  `number` происходит в арифметических выражениях:

```javascript
var  x = "8" / 2
```
( значением переменной x будет 4 )

:warning: При участии в арифметических операциях пустая строка ( `""` ) и пустой массив ( `[]` ) преобразуется в **0**:

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

:warning: Если в арифметическом выражении участвуют специальные значения `undefined` или `null`, то они преобразуются к числу так:

```javascript
Number ( undefined )   // NaN
Number ( null )        // 0
```

:warning: Если в арифметическом выражении участвуют логические значения `true` или `false`, то они преобразуются к числу так:

```javascript
var a = false
var b = true
var z = a + b    //  0 + 1 --> 1
```

:warning: Кроме арифметических операций, преобразование к типу `number` происходит при участии переменной в операциях сравнения ( за исключением операций   `===`   и   `!==`,  когда сравниваются не только значения, но и типы данных )

:coffee:

```javascript
a = false, b = undefined
a > b       // 0 > NaN  --> false
a < b       // 0 < NaN  --> false
a == b      // 0 == NaN --> false
```

:coffee:

```javascript
a = true,  b = null
a > b       // 1 > null   --> true ( 1 > 0 )
a < b       // 1 < null   --> false
a == b      // 1 == null  --> false
```

***

<a name="boolean"></a>
#### :mortar_board: Неявное приведение к типу `boolean`

| [`string`](#string) |  [`number`](#number) |
|-|-|

:warning: Преобразование типов к логическому типу ( `boolean` ) происходит в условных операторах ( `if`, тернарный оператор )

:coffee:

```javascript
if ( "5" ) console.log ( "Yes" )
```

Будет вычисляться логическое значение выражения  в круглых скобках оператора `if`, т.е. "под капотом" будет выполнена операция
```javascript
Boolean ( "5" )
```

:warning: При выполнении логических операций  `||`  и  `&&` происходит неявное приведение типов операндов
к логическому значению, но при этом результатом логической операции будет изначальное значение одного из операндов, даже если оно не являются булевым

#### :pushpin: `&&`

Операция `&&`  перебирает операнды слева направо, приводя их к логическому значению, до тех пор, пока не встретится первый `false`

в этом случае возвращается исходное значение последнего операнда

:coffee:

```javascript
true && false && null   //  false
true && "5" && null     //  null
true && [] && null      //  null
```

:coffee:

```javascript
true && ![] && null     //  false
```

> вычисляется значение второго операнда `![]`, оно будет `false`, операция останавливается и возвращается последний операнд, на котором остановились )

```javascript
true && true && true && true     //    true
```

> дошли до конца, но не встретили `false`, возвращается последний операнд

#### :pushpin: `||`

Операция `||`  перебирает операнды слева направо, приводя их к логическому значению, до тех пор, пока не встретится первый `true`

в этом случае возвращается исходное значение последнего операнда, на котором остановились

:coffee:

```javascript
null || false || 5 || ""          //   5
null || "" || 0 || 4 || 10        //   4
```

:coffee:

```javascript
null || false || undefined || ""  //  ""
```

> последовательно вычисляются логические значения

> первого операнда ( `null` ) - это `false`,

> второго операнда - `false`,

> третьего операнда ( `undefined` ) - это `false`,

> четвертого операнда ( `""` ) - это `false`

> больше операндов нет, операция завершается и возвращает последний операнд, на котором остановилась ( `""` )

***

### :pushpin: `!!`

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

***

| [`string`](#string) | [`number`](#number) | [`boolean`](#boolean) |
|-|-|-|

***

#### [:briefcase: Упражнения](https://docs.google.com/forms/d/e/1FAIpQLSdFHuyyukF2rmA04BN1AmS5MCNXWgQmR5t7mmxyTpzdBZVGGw/viewform)

***
| [:link: w3schools](https://www.w3schools.com/jsref/jsref_infinity.asp) | [:link: Equality in JavaScript](https://dorey.github.io/JavaScript-Equality-Table/unified/) |
|-|-|
