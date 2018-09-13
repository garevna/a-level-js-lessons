[1]: https://github.com/garevna/js-course/wiki/data-types-conversion#-%D0%AF%D0%B2%D0%BD%D0%BE%D0%B5-%D0%BF%D1%80%D0%B8%D0%B2%D0%B5%D0%B4%D0%B5%D0%BD%D0%B8%D0%B5-%D1%82%D0%B8%D0%BF%D0%BE%D0%B2

[2]: https://github.com/garevna/js-course/wiki/data-types-conversion#-%D0%9D%D0%B5%D1%8F%D0%B2%D0%BD%D0%BE%D0%B5-%D0%BF%D1%80%D0%B8%D0%B2%D0%B5%D0%B4%D0%B5%D0%BD%D0%B8%D0%B5-%D1%82%D0%B8%D0%BF%D0%BE%D0%B2

[1-number]: https://github.com/garevna/js-course/wiki/data-types-conversion#-%D0%AF%D0%B2%D0%BD%D0%BE%D0%B5-%D0%BF%D1%80%D0%B8%D0%B2%D0%B5%D0%B4%D0%B5%D0%BD%D0%B8%D0%B5-%D0%BA-%D1%82%D0%B8%D0%BF%D1%83-number

[1-string]: https://github.com/garevna/js-course/wiki/data-types-conversion#-%D0%AF%D0%B2%D0%BD%D0%BE%D0%B5-%D0%BF%D1%80%D0%B8%D0%B2%D0%B5%D0%B4%D0%B5%D0%BD%D0%B8%D0%B5-%D0%BA-%D1%82%D0%B8%D0%BF%D1%83-string

[1-boolean]: https://github.com/garevna/js-course/wiki/data-types-conversion#-%D0%AF%D0%B2%D0%BD%D0%BE%D0%B5-%D0%BF%D1%80%D0%B8%D0%B2%D0%B5%D0%B4%D0%B5%D0%BD%D0%B8%D0%B5-%D0%BA-%D1%82%D0%B8%D0%BF%D1%83-boolean

[1-object]: https://github.com/garevna/js-course/wiki/data-types-conversion#-%D0%AF%D0%B2%D0%BD%D0%BE%D0%B5-%D0%BF%D1%80%D0%B8%D0%B2%D0%B5%D0%B4%D0%B5%D0%BD%D0%B8%D0%B5-%D0%BA-%D1%82%D0%B8%D0%BF%D1%83-object

[2-number]: https://github.com/garevna/js-course/wiki/data-types-conversion#-%D0%9D%D0%B5%D1%8F%D0%B2%D0%BD%D0%BE%D0%B5-%D0%BF%D1%80%D0%B8%D0%B2%D0%B5%D0%B4%D0%B5%D0%BD%D0%B8%D0%B5-%D0%BA-%D1%82%D0%B8%D0%BF%D1%83-number

[2-string]: https://github.com/garevna/js-course/wiki/data-types-conversion#-%D0%9D%D0%B5%D1%8F%D0%B2%D0%BD%D0%BE%D0%B5-%D0%BF%D1%80%D0%B8%D0%B2%D0%B5%D0%B4%D0%B5%D0%BD%D0%B8%D0%B5-%D0%BA-%D1%82%D0%B8%D0%BF%D1%83-string

[2-boolean]: https://github.com/garevna/js-course/wiki/data-types-conversion#-%D0%9D%D0%B5%D1%8F%D0%B2%D0%BD%D0%BE%D0%B5-%D0%BF%D1%80%D0%B8%D0%B2%D0%B5%D0%B4%D0%B5%D0%BD%D0%B8%D0%B5-%D0%BA-%D1%82%D0%B8%D0%BF%D1%83-boolean

# 🎓 Приведение типов

| Приведение типов | `number` | `string` | `boolean` | `object` |
|:-:|:-:|:-:|:-:|:-:|
| **Явное** [:arrow_heading_down:][1]| [:arrow_heading_down:][1-number] | [:arrow_heading_down:][1-string] | [:arrow_heading_down:][1-boolean] |  [:arrow_heading_down:][1-object]
| **Неявное** [:arrow_heading_down:][2] | [:arrow_heading_down:][2-number] |  [:arrow_heading_down:][2-string] | [:arrow_heading_down:][2-boolean] |

## [💼 Упражнения](https://docs.google.com/forms/d/e/1FAIpQLSdFHuyyukF2rmA04BN1AmS5MCNXWgQmR5t7mmxyTpzdBZVGGw/viewform)

***
[🔗 Equality in JavaScript](https://dorey.github.io/JavaScript-Equality-Table/unified/)
***
## 📖 Явное приведение типов

    ✅ Приведение к типу "string"
    ✅ Приведение к типу "number" 
    ✅ Приведение к типу "boolean"
    ✅ Приведение к типу "object"

Самый простой способ явного приведения данных произвольного типа к типу `string`, `number` или `boolean` - 
использование встроенных одноименных функций `String()`,  `Number()`,  `Boolean()`

☕ 1
```javascript
var x = "10"
Number ( x )    // вернет число 10
```
☕ 2
```javascript
Number ( "туман" )  // вернет специальное значение  NaN  
                    // ( Not  a  Number ),
                    // что означает, что строка "туман"
                    // не может быть преобразована к числу
```
☕ 3
```javascript
String ( 50 )     // вернет строку "50"
```
☕ 4
```javascript
Boolean ( "50" )  // вернет логическое значение  true
```
| [:arrow_heading_up:][1] | [:arrow_heading_down:][1-string]|
|-|-|
### 📖 Явное приведение к типу ```number```

⚠️ Во всех нижеперечисленных случаях результат будет **0**:
```javascript
Number ( null )
Number ( false )
Number ( "" )
Number ( " " )
Number ( [] )
Number ( "\n" )
Number ( "\t" )
```
>>> "пробельные" символы `""`, `"   "`, `"\n"`, `"\t"` всегда приводятся к 0

```javascript 
Number ( String.fromCharCode(9) )   // 0
Number ( String.fromCharCode(10) )  // 0
Number ( String.fromCharCode(11) )  // 0
Number ( String.fromCharCode(12) )  // 0
Number ( String.fromCharCode(13) )  // 0
```
>>> `String.fromCharCode( cod )` возвращает символ, код которого равен **cod**

⚠️ `Number ( true )`  вернет 1

⚠️ В случаях, когда преобразовать выражение к числу невозможно, результат будет  `NaN`:
```javascript
   ☕ Number ( undefined )
   ☕ Number ( " 12s " )
   ☕ Number ( "4+8" )
   ☕ Number( [ 5, 7, 4 ] )
   ☕ Number ( NaN )
   ☕ Number ( {} )
```
⚠️ Во всех остальных случаях результат будет  числом
```javascript
   ☕ Number ( 57 )            // вернет 57
   ☕ Number ( 4*"8" )         // вернет 32
   ☕ Number ( [5] )           // вернет 5
   ☕ Number ( [5]+[8] )       // вернет 58
   ☕ Number( null - true )    // вернет -1
```

| [:arrow_heading_up:][1-number] | [:arrow_heading_down:][1-string]|
|-|-|

### 📖 Явное приведение к типу `boolean`

⚠️ Во всех нижеперечисленных случаях результат будет  false:
```javascript
Boolean ( "" ) 
Boolean ( 0 )     
Boolean ( -0 )  
Boolean ( NaN ) 
Boolean ( null )
Boolean ( undefined )
Boolean ( false ) 
```
⚠️ Во всех остальных случаях результат будет  `true`

При приведении строки к булевому типу действует простое правило: 

если длина строки равна 0, то возвращается `false`, в противном случае - `true`

### 📖 Явное приведение к типу `string`
```javascript
var str = String ( 5 + 8 + false )  //  "13"

var x = {}
String ( x )  //  "[object Object]"

var y = [ 5, true, "hello", 11 ]
String ( y )  //  "5,true,hello,11"
```
| [:arrow_heading_up:][1-string] | [:arrow_heading_down:][2]|
|-|-|

### 📖 Явное приведение к типу `object`

```javascript
Object ( 5 + 8 + false )  

//  Number {13}
//       __proto__: Number
//       [[PrimitiveValue]]: 13
```
```javascript
var x = 10
Object ( x )

//  Number {10}
//      __proto__: Number
//      [[PrimitiveValue]]: 10
```
```javascript
var y = [ 5, true, "hello", 11 ]
Object ( y )  
// Преобразования не будет,
// поскольку тип данных переменной y
// уже object
```
| [:arrow_heading_up:]() | [:arrow_heading_down:]()|
|-|-|

## 📖 Неявное приведение типов
| string [:arrow_heading_down:][2-string] | number [:arrow_heading_down:][2-number] | boolean [:arrow_heading_down:][2-boolean]|
|-|-|-|

⚠️ Неявное приведение типов происходит в процессе вычисления выражений

### 📖 Неявное приведение к типу `string`

⚠️ При сложении числа и строки JavaScript обрабатывает число как строку

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

⚠️ При сложении массива и любого другого операнда результат будет строкового типа ( ```"string"``` )

☕ 
```javascript
[ ] + 5            //  результат  "5"
[ ] + false        //  результат  "false"
[ 4 ] + NaN        //  результат  "4NaN"
[ 4, 8 ] + null    //  результат  "4,8null"
null + [ 4, 8 ]    //  результат  "null4,8"
```
Это происходит потому, что массив преобразуется в строку:
```javascript
String ( [ 4, 8 ] )
```
и результат будет   ```"4,8"```

⚠️ Однако, если в массиве не более одного элемента, и перед массивом стоит знак арифметической операции,
он будет приведен к числу:

☕
```javascript
null + +[ 4 ]          // результат  4
+[5] + null            // результат  5
```
| [:arrow_heading_up:][2-string] | [:arrow_heading_down:][2-boolean] |
|-|-|

### 📖 Неявное приведение к типу `number`

⚠️ Неявное приведение к типу  `number` происходит в арифметических выражениях:
```javascript
var  x = "8" / 2
```
( значением переменной x будет 4 )

⚠️ При участии в арифметических операциях пустая строка ( `""` ) и пустой массив ( `[]` ) преобразуется в **0**:
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
⚠️ Если в арифметическом выражении участвуют специальные значения `undefined` или `null`, то они преобразуются к числу так:
```javascript
undefined   // -->  NaN
null        // -->   0
```
⚠️ Если в арифметическом выражении участвуют логические значения `true` или `false`, то они преобразуются к числу так:
```javascript
var a = false
var b = true
var z = a + b    //  0 + 1 --> 1
```
⚠️ Кроме арифметических операций, преобразование к типу `number` происходит при участии переменной в операциях сравнения ( за исключением операций   `===`   и   `!==`,  когда сравниваются не только значения, но и типы данных )
```javascript
a = false, b = undefined
a > b       // 0 > NaN  --> false
a < b       // 0 < NaN  --> false
a == b      // 0 == NaN --> false
```
```javascript
a = true,  b = null
a > b       // 1 > null   --> true ( 1 > 0 )
a < b       // 1 < null   --> false
a == b      // 1 == null  --> false
```

[:arrow_heading_up:][2-number]

### 📖 Неявное приведение к типу `boolean`

⚠️ Преобразование типов к логическому типу ( `boolean` ) происходит в условных операторах ( `if`, тернарный оператор )

☕ 
```javascript
if ( "5" ) console.log ( "Yes" )
```
Будет вычисляться логическое значение выражения  в круглых скобках оператора `if`, т.е. "под капотом" будет выполнена операция 
```javascript
Boolean ( "5" )
```

⚠️  При выполнении логических операций  `||`  и  `&&` происходит неявное приведение типов операндов 
к логическому значению, но при этом результатом логической операции будет изначальное значение одного из операндов, даже если оно не являются булевым

#### 📌 `&&`

Операция `&&`  перебирает операнды слева направо, приводя их к логическому значению, до тех пор, пока не встретится первый `false`

в этом случае возвращается исходное значение последнего операнда

☕ 
```javascript
true && false && null      //  false
true && "5" && null        //  null
true && [] && null         //  null
```
```javascript
true && ![] && null        //  false
```
>>вычисляется значение второго операнда `![]`, оно будет `false`, операция останавливается и возвращается последний операнд, на котором остановились )
```javascript
true && true && true && true     //    true
```
>>дошли до конца, но не встретили `false`, возвращается последний операнд

#### 📌 `||`

Операция `||`  перебирает операнды слева направо, приводя их к логическому значению, до тех пор, пока не встретится первый `true`

в этом случае возвращается исходное значение последнего операнда, на котором остановились

☕ 
```javascript
null || false || 5 || ""              //   5
null || "" || 0 || 4 || 10            //   4
```
```javascript
null || false || undefined || ""  //    ""
```
>>последовательно вычисляются логические значения 

>>первого операнда ( `null` ) - это `false`,

>>второго операнда - `false`,

>>третьего операнда ( `undefined` ) - это `false`,

>>четвертого операнда ( `""` ) - это `false`

>>больше операндов нет, операция завершается и возвращает последний операнд, на котором остановилась ( `""` )

### 📖 `!!`

можно привести переменную любого типа к `boolean` с помощью логической операции двойного отрицания:
```javascript
var x = null
var y = !!x        // false
```
```javascript
var x = undefined
var y = !!x       // false
```
```javascript
!![ ]      // вернет   true
!!+[ ]     // вернет  false
```
[:arrow_heading_up:][2-boolean]


## [💼 Упражнения](https://docs.google.com/forms/d/e/1FAIpQLSdFHuyyukF2rmA04BN1AmS5MCNXWgQmR5t7mmxyTpzdBZVGGw/viewform)
***
| Приведение типов | `number` | `string` | `boolean` | `object` |
|:-:|:-:|:-:|:-:|:-:|
| **Явное** [:arrow_heading_up:][1] | [:arrow_heading_up:][1-number] | [:arrow_heading_up:][1-string] | [:arrow_heading_up:][1-boolean] |  [:arrow_heading_up:][1-object]
| **Неявное** [:arrow_heading_up:][2] | [:arrow_heading_up:][2-number] | [:arrow_heading_up:][2-string] | [:arrow_heading_up:][2-boolean] |

***
[🔗 w3schools](https://www.w3schools.com/jsref/jsref_infinity.asp)