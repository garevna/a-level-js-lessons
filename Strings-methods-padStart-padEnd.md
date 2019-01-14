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

***

## :mortar_board: padStart & padEnd

###### ES8 ( 2017 )

Методы `padStart ()` и `padEnd ()` дополняют строку другой строкой до тех пор, пока результирующая строка не достигнет указанной длины

Дополняющая строка будет повторяться необходимое число раз

Первый аргумент - результирующая длина строки

Второй аргумент - строка-заполнитель

Если второй аргумент опущен, то заполнение происходит символом пробела

`padStart` дополняет строку слева

`padEnd`  дополняет строку справа

### :coffee: :one:

```javascript
"Google".padStart(5)               //  "Google"
"Google".padStart(10)              //  "    Google"
"Google".padStart(10).padEnd(15)   //  "    Google     "
"Google".padStart( 10, "789" )
        .padEnd( 15, "45" )        //  "7897Google45454"
```

### :coffee: :two:

```javascript
var cities = [ "Неаполь", "Вашингтон", "Женева" ]

for ( var city of cities ) {
    console.log (
        `Город: ${ city.padEnd (16) } ( ${ cities.indexOf ( city ) } )`
    )
}
```
###### Результат в консоли:
```
Город: Неаполь          ( 0 )
Город: Вашингтон        ( 1 )
Город: Женева           ( 2 )
```

***

:file_folder:` Дополнительно`

* [`String.fromCharCode()`](String-fromCharCode)
* [`Переменные в литералах`](Strings-vars-and-literals)

***

#### [:briefcase: Тесты](https://garevna.github.io/js-quiz/#stringMethods)

***

| [:link:` MDN`](https://developer.mozilla.org/ru/docs/Web/JavaScript/Reference/Global_Objects/String "Открывайте в новой вкладке") | [:link:` String Methods`](https://www.w3schools.com/js/js_string_methods.asp "Открывайте в новой вкладке") | [:link:` String Reference`](https://www.w3schools.com/jsref/jsref_obj_string.asp "Открывайте в новой вкладке") |
|-|-|-|