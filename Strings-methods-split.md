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

***

### split()

Разбивает строку на массив подстрок и возвращает массив

Исходная строка не изменяется

Аргументом является символ-разделитель, по которому будет происходить "расчленение" строки

Если в качестве разделителя использовать пустую строку, то строка будет разбита на символы

:coffee: :one:

```javascript
var str = "веселый денек был сегодня"
console.log ( str.split ( 'е' ) )
```

в консоли будет:
```
[ "в", "с", "лый д", "н", "к был с", "годня" ]
```

:coffee: :two:

```javascript
var str = "one | two | three | four | five | six"
console.log ( str.split ( ' | ' ) )
```

в консоли будет:
```
[ "one", "two", "three", "four", "five", "six" ]
```

***

* [`trim()`](Strings-methods-trim)
* [`charAt()`](Strings-methods-charAt)
* [`charCodeAt()`](Strings-methods-charCodeAt)
* [`repeat()`](Strings-methods-repeat)
* [`replace()`](Strings-methods-replace)
* [`padStart & padEnd`](Strings-methods-padStart-padEnd)

:file_folder:` Дополнительно`

* [`String.fromCharCode()`](String-fromCharCode)
* [`Переменные в литералах`](Strings-vars-and-literals)

#### [:briefcase: Тесты](https://garevna.github.io/js-quiz/#stringMethods)

***

| [:link:` MDN`](https://developer.mozilla.org/ru/docs/Web/JavaScript/Reference/Global_Objects/String "Открывайте в новой вкладке") | [:link:` String Methods`](https://www.w3schools.com/js/js_string_methods.asp "Открывайте в новой вкладке") | [:link:` String Reference`](https://www.w3schools.com/jsref/jsref_obj_string.asp "Открывайте в новой вкладке") |
|-|-|-|