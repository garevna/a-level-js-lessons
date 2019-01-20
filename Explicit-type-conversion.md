## :mortar_board: Явное приведение типов

* Приведение к типу **`string`**
* Приведение к типу **`number`** 
* Приведение к типу **`boolean`**
* Приведение к типу **`object`**

Самый простой способ явного приведения данных произвольного типа к типу `string`, `number` или `boolean` - 
использование встроенных одноименных функций `String()`,  `Number()`,  `Boolean()`

:coffee: 1
```javascript
var x = "10"
Number ( x )    // вернет число 10
```
:coffee: 2
```javascript
Number ( "туман" )  // вернет специальное значение  NaN  
                    // ( Not  a  Number ),
                    // что означает, что строка "туман"
                    // не может быть преобразована к числу
```
:coffee: 3
```javascript
String ( 50 )     // вернет строку "50"
```
:coffee: 4
```javascript
Boolean ( "50" )  // вернет логическое значение  true
```

***

| [:arrow_heading_up:][1] | [:arrow_heading_down:][1-string]|
|-|-|


### :mortar_board: Явное приведение к типу ```number```

:warning: Во всех нижеперечисленных случаях результат будет **0**:

```javascript
Number ( null )
Number ( false )
Number ( "" )
Number ( " " )
Number ( [] )
Number ( "\n" )
Number ( "\t" )
```

> "пробельные" символы `""`, `"   "`, `"\n"`, `"\t"` всегда приводятся к 0

```javascript 
Number ( String.fromCharCode(9) )   // 0
Number ( String.fromCharCode(10) )  // 0
Number ( String.fromCharCode(11) )  // 0
Number ( String.fromCharCode(12) )  // 0
Number ( String.fromCharCode(13) )  // 0
```
> `String.fromCharCode( cod )` возвращает символ, код которого равен **cod**

:warning: `Number ( true )`  вернет 1

:warning: В случаях, когда преобразовать выражение к числу невозможно, результат будет  **`NaN`** ( `Not a Number` ):

:coffee:

```javascript
Number ( undefined )
Number ( " 12s " )
Number ( "4+8" )
Number( [ 5, 7, 4 ] )
Number ( NaN )
Number ( {} )
```

:warning:  Во всех остальных случаях результат будет  числом

:coffee:

```javascript
Number ( 57 )            // вернет 57
Number ( 4*"8" )         // вернет 32
Number ( [5] )           // вернет 5
Number ( [5]+[8] )       // вернет 58
Number( null - true )    // вернет -1
```
Для приведения к целому числу или к числу с плавающей запятой ( с десятичными знаками ) можно использовать встроенные функции `parseInt` и `parseFloat`

В отличие от конструктора `Number`, эти функции парсят строку, даже если в ней есть "левые" символы после числа - эти символы просто будут проигнорированы:

```javascript
Number ('3.14abc')      // NaN
parseFloat ('3.14abc')  // 3.14
parseInt ('3.14abc')    // 3

Number('3.14/5')        // NaN
parseFloat('3.14/5')    // 3.14
```
Однако если строка начинается с символов, которые не могут быть приведены к числу, эти функции вернут **`NaN`**

***

| [:arrow_heading_up:][1-number] | [:arrow_heading_down:][1-string]|
|-|-|


### :mortar_board: Явное приведение к типу `boolean`

:warning: Во всех нижеперечисленных случаях результат будет  `false`:

```javascript
Boolean ( "" ) 
Boolean ( 0 )     
Boolean ( -0 )  
Boolean ( NaN ) 
Boolean ( null )
Boolean ( undefined )
Boolean ( false ) 
```

:warning: Во всех остальных случаях результат будет  `true`

При приведении строки к булевому типу действует простое правило: 

если длина строки равна 0, то возвращается `false`, в противном случае - `true`

***

### :mortar_board: Явное приведение к типу `string`

```javascript
var str = String ( 5 + 8 + false )  //  "13"

var x = {}
String ( x )  //  "[object Object]"

var y = [ 5, true, "hello", 11 ]
String ( y )  //  "5,true,hello,11"
```

При приведении числа к типу `string` можно использовать метод `toString()`, который принимает один аргумент - десятичное число 2, 8 или 16 ( система исчисления )

Десятичная система исчисления подразумевается по умолчанию, поэтому аргумент при этом можно опустить

Для того, чтобы получить строчное значение числа в двоичной системе исчисления, нужно передать методу `toString()` аргумент 2, в восьмеричной - 8, в шестнадцатеричной - 16

```javascript
Number(2).toString(2)    // "10"
Number(58).toString(2)   // "111010"
Number(8).toString(8)    // "10"
Number(58).toString(8)   // "72"
Number(16).toString(16)  // "10"
Number(58).toString(16)  // "3a"
```

***

| [:arrow_heading_up:][1-string] | [:arrow_heading_down:][2]|
|-|-|

### :mortar_board: Явное приведение к типу `object`

```javascript
Object ( 5 + 8 + false )
```

```console
▼ Number {13}
  ► __proto__: Number
    [[PrimitiveValue]]: 13
```

```javascript
var x = 10
Object ( x )
```

```console
▼ Number {10}
  ► __proto__: Number
    [[PrimitiveValue]]: 10
```

```javascript
var y = [ 5, true, "hello", 11 ]
Object ( y )
```
Преобразования не будет, поскольку тип данных переменной **y** уже `object`

***

| [:arrow_heading_up:]() | [:arrow_heading_down:]()|
|-|-|