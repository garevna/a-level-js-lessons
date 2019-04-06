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
* [`replace()`](Strings-methods-replace)
* [`padStart & padEnd`](Strings-methods-padStart-padEnd)

:file_folder:` Дополнительно`

***

## :mortar_board: String.fromCharCode()

У конструктора **`String`** есть несколько статических методов, которые позволяют манипулировать содержимым строк

Вызывать эти методы можно только как методы объекта `String`  ( *`String`.имя_метода* )

`String.fromCharCode()` возвращает строку из символов, коды которых перечислены в аргументах функции ( в круглых скобках )

:coffee: :one:

```javascript
String.fromCharCode ( 123, 105, 125 )
```

###### Результат
```
"{i}"
```

:coffee: :two:

```javascript
String.fromCharCode ( 48, 49, 50, 51, 52, 53 )
```

###### Результат
```
"012345"
```

:coffee: :three:

```javascript
var str = ""
for ( var x = 97; x < 105; x++ )
    str += String.fromCharCode ( x )

console.log ( str )
```

###### Результат
```
abcdefgh
```

***

* [`Переменные в литералах`](Strings-vars-and-literals)

***

#### [:briefcase: Тесты](https://garevna.github.io/js-quiz/#stringMethods)

***

| [:link:` MDN`](https://developer.mozilla.org/ru/docs/Web/JavaScript/Reference/Global_Objects/String "Открывайте в новой вкладке") | [:link:` String Methods`](https://www.w3schools.com/js/js_string_methods.asp "Открывайте в новой вкладке") | [:link:` String Reference`](https://www.w3schools.com/jsref/jsref_obj_string.asp "Открывайте в новой вкладке") |
|-|-|-|