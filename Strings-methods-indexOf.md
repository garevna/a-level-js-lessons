# :mortar_board: Методы работы со строками

:file_folder: `Операции со строками`

* [`+`](Strings-methods-concat)

:file_folder: `Методы строк`

### indexOf()

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

:warning: Если указанная подстрока не будет найдена в текущей строке, то метод `indexOf()` вернет значение -1

***

* [`slice()`](#3)
* [`substring()`](#4)
* [`substr()`](#5)
* [`toLowerCase()`](#6)
* [`toUpperCase()`](#7)
* [`split()`](#8)
* [`trim()`](#9)
* [`charAt()`](#10)
* [`charCodeAt()`](#11)
* [`repeat()`](#12)
* [`replace()`](#13)
* [`padStart & padEnd`](#16)

:file_folder:` Дополнительно`

* [`String.fromCharCode()`](#14)
* [`Переменные в литералах`](#15)