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

[lesson]: ../lessons/lesson-02.md

| ![ico25] <br/><sup>[**Lesson&nbsp;2**][lesson]</sup> | <h2>Явное приведение типов</h2>![space-800] | ![me] <br/><sup>[**Занятие&nbsp;2**][lesson]</sup> |
|-|-|-|

_________________________________________________________________________

| [`string`](#string) | [`number`](#number) | [`boolean`](#boolean) | [`object`](#object) |
|-|-|-|-|

_____________________________________________________________

Самый простой способ явного приведения данных произвольного типа к типу `string`, `number` или `boolean` -
использование встроенных одноименных функций `String()`,  `Number()`,  `Boolean()`

#### ![cap-20] 1

```javascript
var x = "10"
Number ( x )    // 10
```

вернет число 10

#### ![cap-20] 2

```javascript
Number ( "туман" )
```

вернет специальное значение  **`NaN`** ( _Not  a  Number_ ),

что означает, что строка "туман" не может быть преобразована к числу

#### ![cap-25] 3

```javascript
String ( 50 )   // "50"
```

вернет строку "50"

#### ![cap-25] 4

```javascript
Boolean ( "50" )  // true
```

вернет логическое значение  `true`

_____________________________________________________________

<a name="number"></a>
#### ![ico25] Явное приведение к типу `number`

| [`string`](#string) | [`boolean`](#boolean) | [`object`](#object) |
|-|-|-|

![warn-25] Во всех нижеперечисленных случаях результат будет **0**:

```javascript
Number ( null )    // 0
Number ( false )   // 0
Number ( "" )      // 0
Number ( " " )     // 0
Number ( [] )      // 0
Number ( "\n" )    // 0
Number ( "\t" )    // 0
```

<sup>"пробельные" символы `""`, `"   "`, `"\n"`, `"\t"` всегда приводятся к 0</sup>

```javascript
Number ( String.fromCharCode(9) )   // 0
Number ( String.fromCharCode(10) )  // 0
Number ( String.fromCharCode(11) )  // 0
Number ( String.fromCharCode(12) )  // 0
Number ( String.fromCharCode(13) )  // 0
```

<sup>`String.fromCharCode( cod )` возвращает символ, код которого равен **cod**</sup>

![warn] `Number ( true )`  вернет 1

![warn] В случаях, когда преобразовать выражение к числу невозможно, результат будет  **`NaN`** ( `Not a Number` ):

#### ![cap-25] 5

```javascript
Number ( undefined )
Number ( " 12s " )
Number ( "4+8" )
Number( [ 5, 7, 4 ] )
Number ( NaN )
Number ( {} )
```

![warn-25]  Во всех остальных случаях результат будет  числом

#### ![cap-25] 6

```javascript
Number ( 57 )            // вернет 57
Number ( 4*"8" )         // вернет 32
Number ( [5] )           // вернет 5
Number ( [5]+[8] )       // вернет 58
Number( null - true )    // вернет -1
```

Для приведения к целому числу или к числу с плавающей запятой ( с десятичными знаками ) можно использовать встроенные функции `parseInt` и `parseFloat`

В отличие от конструктора `Number`, эти функции парсят строку, даже если в ней есть "левые" символы после числа - эти символы просто будут проигнорированы:

#### ![cap-25] 7

```javascript
Number ('3.14abc')      // NaN
parseFloat ('3.14abc')  // 3.14
parseInt ('3.14abc')    // 3

Number('3.14/5')        // NaN
parseFloat('3.14/5')    // 3.14
```

Однако если строка начинается с символов, которые не могут быть приведены к числу, эти функции вернут **`NaN`**

________________________________________________________

<a name="boolean"></a>
#### ![ico25] Явное приведение к типу `boolean`

| [`string`](#string) | [`number`](#number) | [`object`](#object) |
|-|-|-|

![warn] Во всех нижеперечисленных случаях результат будет  `false`:

#### ![cap-25] 8

```javascript
Boolean ( "" )
Boolean ( 0 )     
Boolean ( -0 )  
Boolean ( NaN )
Boolean ( null )
Boolean ( undefined )
Boolean ( false )
```

![warn] Во всех остальных случаях результат будет  `true`

При приведении строки к булевому типу действует простое правило:

если длина строки равна 0, то возвращается `false`, в противном случае - `true`

_________________________________________________________

<a name="string"></a>
#### ![ico25] Явное приведение к типу `string`

| [`number`](#number) | [`boolean`](#boolean) | [`object`](#object) |
|-|-|-|

#### ![cap-25] 9

```javascript
var str = String ( 5 + 8 + false )  //  "13"

var x = {}
String ( x )  //  "[object Object]"

var y = [ 5, true, "hello", 11 ]
String ( y )  //  "5,true,hello,11"
```

<sup>При приведении числа к типу `string` можно использовать метод `toString()`, который принимает один аргумент - десятичное число 2, 8 или 16 ( система исчисления )</sup>

<sup>Десятичная система исчисления подразумевается по умолчанию, поэтому аргумент при этом можно опустить</sup>

<sup>Для того, чтобы получить строчное значение числа в двоичной системе исчисления, нужно передать методу `toString()` аргумент 2, в восьмеричной - 8, в шестнадцатеричной - 16</sup>

#### ![cap-25] 10

```javascript
Number(2).toString(2)    // "10"
Number(58).toString(2)   // "111010"
Number(8).toString(8)    // "10"
Number(58).toString(8)   // "72"
Number(16).toString(16)  // "10"
Number(58).toString(16)  // "3a"
```

_____________________________________________________________

<a name="object"></a>
#### ![ico25] Явное приведение к типу `object`

| [`string`](#string) | [`number`](#number) | [`boolean`](#boolean) |
|-|-|-|

#### ![cap-25] 11

```javascript
Object ( 5 + 8 + false )
```

```console
▼ Number {13}
  ► __proto__: Number
    [[PrimitiveValue]]: 13
```

#### ![cap-25] 12

```javascript
var x = 10
Object ( x )
```

```console
▼ Number {10}
  ► __proto__: Number
    [[PrimitiveValue]]: 10
```

#### ![cap-25] 13

```javascript
var y = [ 5, true, "hello", 11 ]
Object ( y )
```

<sup>Преобразования не будет, поскольку тип данных переменной **y** уже `object`</sup>

________________________________________________________

| [`string`](#string) | [`number`](#number) | [`boolean`](#boolean) | [`object`](#object) |
|-|-|-|-|

________________________________________________________

### [![hw-30] Упражнения](https://docs.google.com/forms/d/e/1FAIpQLSdFHuyyukF2rmA04BN1AmS5MCNXWgQmR5t7mmxyTpzdBZVGGw/viewform)

_____________________________________________________________

| [![link] w3schools](https://www.w3schools.com/jsref/jsref_infinity.asp) | [![link] Equality in JavaScript](https://dorey.github.io/JavaScript-Equality-Table/unified/) |
|-|-|

_________________________________________________________________________

![footer]
