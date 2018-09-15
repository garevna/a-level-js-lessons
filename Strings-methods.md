<a name="top"></a>
# :mortar_board: Методы работы со строками

| [:arrow_double_down:](#bottom) | <img width="800"/> | [:arrow_heading_down:](#1) |
|-|-|-|

||||
|:-|:-|:-|
|:file_folder: Операции|[:arrow_right:](#1)` Сложение строк`||
|:file_folder: Методы строк||[:arrow_right:](#16)` padStart & padEnd`|
|[:arrow_right:](#2)` indexOf()`|[:arrow_right:](#3)` slice ()`|[:arrow_right:](#4)` substring ()`|
|[:arrow_right:](#5)` substr ()`|[:arrow_right:](#6)` toLowerCase ()`|[:arrow_right:](#7)` toUpperCase ()`|
|[:arrow_right:](#8)` split ()`|[:arrow_right:](#9)` trim ()`|[:arrow_right:](#10)` charAt ()`|
|[:arrow_right:](#11)` charCodeAt ()`|[:arrow_right:](#12)` repeat ()`|[:arrow_right:](#13)` replace ()`
||||
|:file_folder:` Дополнительно`|[:arrow_right:](#14)` Методы объекта String`|[:arrow_right:](#15)` Переменные в литералах`|
***
<a name="1"></a>
### :ledger: Сложение строк

| [:arrow_heading_up:](#top) | <img width="800"/> | [:arrow_heading_down:](#2) |
|-|-|-|

Две символьные строки можно просто сложить

Например, в результате выполнения следующего кода:
```javascript
var  str_1 = "Привет, ",   str_2 = "студент"
console.log ( str_1 + str_2 )
```
в консоли будет:     *Привет, студент*

<a name="2"></a>
### :ledger: indexOf()

| [:arrow_heading_up:](#1) | <img width="800"/> | [:arrow_heading_down:](#3) |
|-|-|-|

Этот метод позволяет найти подстроку в строке:
```javascript
"my new book".indexOf ( "new" )
```
Он вернет индекс элемента, с которого начинается подстрока в строке

Например, после выполнения кода:
```javascript
console.log ( "my new book".indexOf ( "new" ) )
```
в консоли будет 3 ( нумерация символов в строке начинается с 0 )

После выполнения кода:
```javascript
var mainString = "Дела идут неплохо"
var pos = mainString.indexOf ( "идут" )
console.log ( pos )
```
в консоли будет 5

⚠️ Если указанная подстрока не будет найдена в текущей строке, то метод `indexOf()` вернет значение -1

<a name="3"></a>
### :ledger: slice ()

| [:arrow_heading_up:](#2) | <img width="800"/> | [:arrow_heading_down:](#4) |
|-|-|-|

Этот метод извлекает часть строки и возвращает извлеченную часть

Исходная строка не меняется

Метод принимает 2 числовых параметра: 

1) индекс символа в строке, с которого начинать извлечение подстроки

2) индекс символа в строке, до которого продолжать извлечение

> `( "до которого" означает, что этот символ не будет включен в извлекаемую подстроку )`

Например, в результате выполнения следующего кода:
```javascript
var name = "Меня зовут Мария".slice ( 11, 16 )
console.log ( name )
```
в консоли будет:     *Мария*

| 0 | 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10 | 11 | 12 | 13 | 14 | 15 |
|:-:|:-:|:-:|:-:|:-:|:-:|:-:|:-:|:-:|:-:|:-:|:-:|:-:|:-:|:-:|:-:|
| М | е | н | я |   | з | о | в | у | т |   | М | а | р | и | я |

Аналогичный результат мы получим в результате выполнения кода:

        var str = "Меня зовут Мария"
        var name = str.slice ( 11, str.length )
        console.log ( name )

где `str.length` - длина строки, которая на единицу больше индекса последнего символа в строке ( потому что нумерация символов начинается с нуля )

Таким образом, если мы хотим извлечь фрагмент строки с какой-то позиции и до самого конца, то этот вариант будет наиболее подходящим

Если методу передать в качестве параметров отрицательные числа, то отсчет будет вестись от конца строки

| -16 | -15 | -14 | -13 | -12 | -11 | -10 | -9 | -8 | -7 | -6 | -5 | -4 | -3 | -2 | -1 |
|:-:|:-:|:-:|:-:|:-:|:-:|:-:|:-:|:-:|:-:|:-:|:-:|:-:|:-:|:-:|:-:|
| М | е | н | я |   | з | о | в | у | т |   | М | а | р | и | я |
| 0 | 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10 | 11 | 12 | 13 | 14 | 15 |

```javascript
str.slice ( -11, -6 )                    // вернет  "зовут"
str.slice ( -str.length, str.length )    // вернет  "Меня зовут Мария"
str.slice ( -11, str.length )            // вернет  "зовут Мария"
str.slice ( -13, str.length )            // вернет  "я зовут Мария"
str.slice ( -15, -1 )                    // вернет  "еня зовут Мари"
str.slice ( -16, -1 )                    // вернет  "Меня зовут Мари"
str.slice ( -16,  0 )                    // вернет  "" ( пустую строку )
```
Можно опустить второй аргумент:
```javascript
str.slice ( -str.length )                // вернет  "Меня зовут Мария" ( всю строку )
str.slice ( 5 )                          // вернет  "зовут Мария" ( до конца строки )
```

<a name="4"></a>
### :ledger: substring ()

| [:arrow_heading_up:](#3) | <img width="800"/> | [:arrow_heading_down:](#5) |
|-|-|-|

Извлекает подстроку из строки

Исходная строка не меняется

Этот метод похож на slice (), но не допускает отрицательных значений аргументов
```javascript
"Хорошего дня".substring ( 9, 15 )       // "дня"
```
Если не указывать второй параметр, извлекать будет до конца строки:
```javascript
"Хорошего дня".substring ( 9 )          // "дня"
```

<a name="5"></a>
### :ledger: substr ()

| [:arrow_heading_up:](#4) | <img width="800"/> | [:arrow_heading_down:](#6) |
|-|-|-|

Извлекает подстроку из строки

Этот метод похож на slice (), но второй аргумент указывает длину извлекаемой подстроки

Исходная строка не меняется
```javascript
var str = "Веселый денек был сегодня"
console.log ( str.substr ( 8, 5 ) )
```
> `в консоли будет:  денек`
```javascript
var str = "Веселый денек был сегодня"
console.log ( str.substr ( 0, 7 ) )
```
> `в консоли будет: Веселый`

<a name="6"></a>
### :ledger: toLowerCase ()

| [:arrow_heading_up:](#5) | <img width="800"/> | [:arrow_heading_down:](#7) |
|-|-|-|

Преобразует символы строки к нижнему регистру
```javascript
var str = "ВЕСЕЛЫЙ ДЕНЕК БЫЛ СЕГОДНЯ"
console.log ( str.toLowerCase () )
```
> `в консоли будет:  веселый денек был сегодня`

<a name="7"></a>
### :ledger: toUpperCase ()

| [:arrow_heading_up:](#6) | <img width="800"/> | [:arrow_heading_down:](#8) |
|-|-|-|

Преобразует символы строки к верхнему регистру
```javascript
var str = "веселый денек был сегодня"
console.log ( str.toUpperCase () )
```
> `в консоли будет:   ВЕСЕЛЫЙ ДЕНЕК БЫЛ СЕГОДНЯ`

<a name="8"></a>
### :ledger: split ()

| [:arrow_heading_up:](#7) | <img width="800"/> | [:arrow_heading_down:](#9) |
|-|-|-|

Разбивает строку на массив подстрок и возвращает массив

Исходная строка не изменяется

Аргументом является символ-разделитель, по которому будет происходить "расчленение" строки

Если в качестве разделителя использовать пустую строку, то строка будет разбита на символы
```javascript
var str = "веселый денек был сегодня"
console.log ( str.split ( 'е' ) )
```
> `в консоли будет: [ "в", "с", "лый д", "н", "к был с", "годня" ]`
```javascript
var str = "one | two | three | four | five | six"
console.log ( str.split ( ' | ' ) )
```
> `в консоли будет: [ "one", "two", "three", "four", "five", "six" ]`

<a name="9"></a>
### :ledger: trim ()

| [:arrow_heading_up:](#8) | <img width="800"/> | [:arrow_heading_down:](#10) |
|-|-|-|

Удаляет пробелы в начале и в конце строки
```javascript
var str = "   54   "
console.log ( str.trim () )
```
> `в консоли будет:  54`

<a name="10"></a>
### :ledger: charAt ()

| [:arrow_heading_up:](#9) | <img width="800"/> | [:arrow_heading_down:](#11) |
|-|-|-|

Возвращает символ, находящийся в заданной аргументом позиции строки
```javascript
var str = "ХОРОШО"
console.log ( str.charAt ( 4 ) )
```
> `в консоли будет:  Ш`

<a name="11"></a>
### :ledger: charCodeAt ()

| [:arrow_heading_up:](#10) | <img width="800"/> | [:arrow_heading_down:](#12) |
|-|-|-|

Возвращает код символа, находящегося в заданной аргументом позиции строки
```javascript
var str = "ХОРОШО"
console.log ( str.charCodeAt ( 4 ) )
```
> `в консоли будет:  1064`
```javascript
var str = "1234567"
console.log ( str.charCodeAt ( 4 ) )
```
> `в консоли будет:  53`

<a name="12"></a>
### :ledger: repeat ()

| [:arrow_heading_up:](#11) | <img width="800"/> | [:arrow_heading_down:](#13) |
|-|-|-|

Возвращает новую сроку, содержащую заданное аргументом число копий исходной строки
```javascript
var str = "ХОРОШО! "
console.log ( str.repeat ( 4 ) )
```
> `в консоли будет:  ХОРОШО! ХОРОШО! ХОРОШО! ХОРОШО!`

<a name="13"></a>
### :ledger: replace ()

| [:arrow_heading_up:](#12) | <img width="800"/> | [:arrow_heading_down:](#14) |
|-|-|-|

Возвращает новую строку, в которой заданная подстрока заменена на новое значение

Аргументы: заменяемая подстрока, подстрока-заменитель
```javascript
var str = "Ты провалился! "
console.log ( str.replace ( "провалился", "победил" ) )
```
> `в консоли будет:  Ты победил!`

<a name="14"></a>
# :mortar_board: Методы объекта `String`

| [:arrow_heading_up:](#13) | <img width="800"/> | [:arrow_heading_down:](#15) |
|-|-|-|

У встроенного нативного объекта `String` есть несколько статических методов, которые позволяют манипулировать содержимым строк

Вызывать эти методы можно только как методы объекта `String`  ( *String.имя_метода* )

## :ledger: String.fromCharCode ()

Это метод возвращает строку из символов, коды которых перечислены в аргументах функции ( в круглых скобках )

Например, код           
```javascript
String.fromCharCode ( 123, 105, 125 )
```
> `вернет строку            "{i}"`

<a name="15"></a>
# :mortar_board: Переменные в литералах

| [:arrow_heading_up:](#14) | <img width="800"/> | [:arrow_heading_down:](#16) |
|-|-|-|

Конструкция `${ имя_переменной }` позволяет вставлять значения переменных непосредственно в литерал строки:
```javascript
var cities = [ "Неаполь", "Вашингтон", "Женева" ]

for ( var i = 0; i < cities.length; i++ ) {
        console.log ( `Город: ${ cities [ i ] } порядковый номер: ${ i }` )
}
```
:heavy_exclamation_mark: Литерал строки заворачивается в символы обратных кавычек ( **`** )

<a name="16"></a>
# :mortar_board: padStart & padEnd

| [:arrow_heading_up:](#15) | <img width="800"/> | [:arrow_heading_down:](#bottom) |
|-|-|-|

> **ES8** ( *2017* )

Методы `padStart ()` и `padEnd ()` дополняют строку другой строкой до тех пор, пока результирующая строка не достигнет указанной длины

Дополняющая строка будет повторяться необходимое число раз

Первый аргумент - результирующая длина строки

Второй аргумент - строка-заполнитель

Если второй аргумент опущен, то заполнение происходит символом пробела

`padStart` дополняет строку слева

`padEnd`  дополняет строку справа

### :coffee: 1

```javascript
"Google".padStart(5)               //  "Google"
"Google".padStart(10)              //  "    Google"
"Google".padStart(10).padEnd(15)   //  "    Google     "
"Google".padStart( 10, "789" )
        .padEnd( 15, "45" )        //  "7897Google45454"
```

### :coffee: 2
```javascript
var cities = [ "Неаполь", "Вашингтон", "Женева" ]

for ( var city of cities ) {
        console.log ( `Город: ${ city.padEnd (16) } ( ${ cities.indexOf ( city ) } )` )
}
/*  Output:

Город: Неаполь          ( 0 )
Город: Вашингтон        ( 1 )
Город: Женева           ( 2 )

*/
```
| [:arrow_heading_up:](#16) | <a name="bottom"><img width="800"/></a> | [:arrow_double_up:](#top) |
|-|-|-|

[:briefcase: Упражнения](https://docs.google.com/forms/d/e/1FAIpQLScw7PF5eUGBDPDO8ppoqQ3XVJxbM52_hofcZuaWmKHaRjP9Eg/viewform)
***
[🔗 MDN](https://developer.mozilla.org/ru/docs/Web/JavaScript/Reference/Global_Objects/String "Открывайте в новой вкладке")
[🔗 String Methods](https://www.w3schools.com/js/js_string_methods.asp "Открывайте в новой вкладке")
[🔗 String Reference](https://www.w3schools.com/jsref/jsref_obj_string.asp "Открывайте в новой вкладке")