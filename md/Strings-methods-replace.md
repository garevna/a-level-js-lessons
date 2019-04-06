# :mortar_board: Методы работы со строками

:file_folder: `Операции со строками`

* [`+`](Strings-methods-concat)

:file_folder: `Методы строк`

* [`indexOf()`](Strings-methods-indexOf)
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

***

### replace()

Возвращает новую строку, в которой заданная подстрока заменена на новое значение

Аргументы: заменяемая подстрока, подстрока-заменитель

:coffee:

```javascript
var str = "Ты провалился! "
console.log ( str.replace ( "провалился", "победил" ) )
```

в консоли будет:
```
Ты победил!
```

***

* [`padStart & padEnd`](Strings-methods-padStart-padEnd)

:file_folder:` Дополнительно`

* [`String.fromCharCode()`](String-fromCharCode)
* [`Переменные в литералах`](Strings-vars-and-literals)

***

#### [:briefcase: Тесты](https://garevna.github.io/js-quiz/#stringMethods)

***

| [:link:` MDN`](https://developer.mozilla.org/ru/docs/Web/JavaScript/Reference/Global_Objects/String "Открывайте в новой вкладке") | [:link:` String Methods`](https://www.w3schools.com/js/js_string_methods.asp "Открывайте в новой вкладке") | [:link:` String Reference`](https://www.w3schools.com/jsref/jsref_obj_string.asp "Открывайте в новой вкладке") |
|-|-|-|