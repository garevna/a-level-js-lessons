[ico20]: https://raw.githubusercontent.com/garevna/a-level-js-lessons/master/ico/a-level-20.png
[ico25]: https://raw.githubusercontent.com/garevna/a-level-js-lessons/master/ico/a-level-25.png
[hw-30]: https://raw.githubusercontent.com/garevna/a-level-js-lessons/master/ico/briefcase-30.png
[cap-30]: https://raw.githubusercontent.com/garevna/a-level-js-lessons/master/ico/coffee-30.png
[warn-25]: https://raw.githubusercontent.com/garevna/a-level-js-lessons/master/ico/warning-25.png
[link-25]: https://raw.githubusercontent.com/garevna/a-level-js-lessons/master/ico/link-25.png
[err-20]: https://raw.githubusercontent.com/garevna/a-level-js-lessons/master/ico/no_entry-20.png
[err-25]: https://raw.githubusercontent.com/garevna/a-level-js-lessons/master/ico/no_entry-25.png
[err-30]: https://raw.githubusercontent.com/garevna/a-level-js-lessons/master/ico/no_entry-30.png

## <img src="https://avatars2.githubusercontent.com/u/19735284?s=40&v=4" width="30" title="Ⓒ Irina Fylyppova ( garevna ) 2019"/> BigInt

###### ES10 ( 2019 )

**`BigInt`** - новый тип данных ( числа произвольной точности )

Ранее максимально возможным числом было **`Number.MAX_SAFE_INTEGER`** ( 2**53, или `9007199254740992` )

Теперь это ограничение снято

***

### :mortar_board: Создание **`BigInt`**

Для создания числа типа **`BigInt`** нужно просто добавить **`n`**:

```javascript
let bigNumber = 78n
```

или использовать конструктор нового типа данных:

```javascript
let bigNumber = Number.MAX_SAFE_INTEGER + 5003  // 9007199254745994
bigNumber = BigInt ( bigNumber ) // 9007199254745994n
```

Теперь оператор **`typeof`** будет возвращать новый тип данных:

```javascript
typeof bigNumber // 'bigint'
```

***

### :mortar_board: Приведение типов

**`NaN`**, **`null`**, **`Infinity`** не могут быть конвертированы в **`bigint`**

###### Infinity

```javascript
BigInt ( Infinity )
```

будет сгенерировано исключение **RangeError**

```
⛔️ Uncaught RangeError: The number Infinity cannot be converted to a BigInt because it is not an integer
```

###### NaN

```javascript
BigInt ( NaN )
```

будет сгенерировано исключение **RangeError**

```
⛔️ Uncaught RangeError: The number NaN cannot be converted to a BigInt because it is not an integer
```

###### null

```javascript
BigInt ( null )
```

будет сгенерировано исключение **TypeError**

```
⛔️ Uncaught TypeError: Cannot convert null to a BigInt
```

***

###### Boolean --> BigInt

```javascript
BigInt ( false )  // 0n
BigInt ( true )   // 1n
```

###### [] --> BigInt

```javascript
BigInt ( [] )   // 0n
```

###### String --> BigInt

```javascript
BigInt ( "45" )        // 45n
BigInt ( "45" + 11 )   // 4511n
BigInt ( "45" - 11 )   // 34n

BigInt ( "45" - true ) // 44n
```

а вот такое приведение:

```javascript
BigInt ( "45 + 8" )
```

```
⛔️ Uncaught SyntaxError: Cannot convert 45 + 8 to a BigInt
```

***

### :mortar_board: Арифметические операции

Арифметические операции с участием данных типа **`bigint`** возможны только при условии, что оба операнда имеют тип данных **`bigint`**

При попытке выполнить арифметическую операцию с операндами различного типа

```javascript
bigNumber * 2
```

будет сгенерировано исключение

```
⛔️ Uncaught TypeError: Cannot mix BigInt and other types, use explicit conversions
```

При попытке применить функции библиотеки Math к данным типа **`bigint`**

```javascript
Math.sin ( bigNumber )
```

будет сгенерировано исключение

```
⛔️ Uncaught TypeError: Cannot convert a BigInt value to a number
```

Однако можно привести данное типа **`bigint`** к обычному типу **`number`**

```javascript
Number ( bigNumber ) // 9007199254745994
```

При приведении к строке оба типа ( **`bigint`** и **`number`** ) будут возвращать одинаковый результат:

```javascript
bigNumber = bigNumber * bigNumber // 81129638414696789717133459048036n
bigNumber.toString() // "81129638414696789717133459048036"

Number ( bigNumber ) // 8.112963841469679e+31
bigNumber.toString() // "81129638414696789717133459048036"
```

Данные типа **`bigint`** можно использовать в качестве индексов элементов массива:

```javascript
let bigArray = [
    BigInt ( Number.MAX_SAFE_INTEGER + 2 ),
    BigInt ( Number.MAX_SAFE_INTEGER + 3 ),
    BigInt ( Number.MAX_SAFE_INTEGER + 4 ),
    BigInt ( Number.MAX_SAFE_INTEGER + 5 )
]

bigArray [ BigInt ( 1 ) ]  // 9007199254740994n
```

***

### :mortar_board: Битовые операции

Битовые операции работают с данными типа **`bigint`** и возвращают результат типа **`bigint`**:

```javascript
bigArray [ 0 ] ^ bigArray [ 1 ]  // 2n

bigArray [ 0 ] | bigArray [ 1 ]  // 9007199254740994n

~ bigArray [ 1 ]  // -9007199254740995n
```

_________________________________________________________________________

![](https://github.com/garevna/js-course/raw/master/images/a-level-ico.png?raw=true)
