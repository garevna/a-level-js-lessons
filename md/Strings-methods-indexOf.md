# <img src="https://avatars2.githubusercontent.com/u/19735284?s=40&v=4" width="30" title="Ⓒ Irina Fylyppova ( garevna ) 2019"/> Методы работы со строками

:file_folder: `Операции со строками`

* [`+`](Strings-methods-concat)

:file_folder: `Методы строк`

***

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

* [`slice()`](Strings-methods-slice)
* [`substring()`](Strings-methods-substring)
* [`substr()`](Strings-methods-substr)
* [`toLowerCase()`](Strings-methods-toLowerCase)
* [`toUpperCase()`](Strings-methods-toUpperCase)
* [`split()`](Strings-methods-split)
* [`trim()`](Strings-methods-trim)
* [`charAt()`](Strings-methods-charAt)
* [`charCodeAt()`](Strings-methods-charCodeAt)
* [`repeat()`](Strings-methods-repeat)
* [`replace()`](Strings-methods-replace)
* [`padStart & padEnd`](Strings-methods-padStart-padEnd)

:file_folder:` Дополнительно`

* [`String.fromCharCode()`](String-fromCharCode)
* [`Переменные в литералах`](Strings-vars-and-literals)

***

#### [:briefcase: Тесты](https://garevna.github.io/js-quiz/#stringMethods)

***

| [:link:` MDN`](https://developer.mozilla.org/ru/docs/Web/JavaScript/Reference/Global_Objects/String "Открывайте в новой вкладке") | [:link:` String Methods`](https://www.w3schools.com/js/js_string_methods.asp "Открывайте в новой вкладке") | [:link:` String Reference`](https://www.w3schools.com/jsref/jsref_obj_string.asp "Открывайте в новой вкладке") |
|-|-|-|
