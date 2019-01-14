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

* [`String.fromCharCode()`](String-fromCharCode)

***

## Переменные в литералах

:heavy_exclamation_mark: Литерал строки заворачивается в символы обратных кавычек ( **`** )

Литерал может содержать многострочный текст,

т.е. в литерал можно вставлять символ перевода строки

:coffee: :one:

```javascript
var str = "\nПривет,\nменя зовут Дима\n"

var lit = `
    Привет,
    меня зовут Дима

`

console.log ( str )
console.log ( lit )
console.log ( str.charCodeAt (0) )
console.log ( lit.charCodeAt (0) )
```

###### Результат в консоли:

<img src="https://lh4.googleusercontent.com/hZWmdkrIYfsdLxbDNphnWHBdMWwdK-eP6PIHXU7bNNBMmCC0mRxtpjZKgU71ozT-1WVF-KgtOOTSy0gGQgQDU-_c4m0qhz3mZyK96p7OqjJwHYHKaP9ghEB17YXramEN9GXEw6OSjXCGUx0" width="220"/>

###### 10 - это код символа перевода строки

Обратите внимание, что в обычной строке ( **str** ) нам пришлось вставлять перевод строки с помощью `\n`

В литерале ( **lit** ) мы просто набираем многострочный текст, что улучшает читабельность кода

Но это не все достоинства литерала

***

Конструкция **_`${ имя_переменной }`_** позволяет вставлять значения переменных непосредственно в литерал строки

:coffee: :two:

```javascript
var cities = [ "Неаполь", "Вашингтон", "Женева" ]

for ( var i = 0; i < cities.length; i++ ) {
    console.log (
        `${ i + 1 }: ${ cities [ i ] }`
    )
}
```

###### Результат в консоли:

```
1: Неаполь
2: Вашингтон
3: Женева
```

***

Можно использовать выражения, значения которых будут вычислены и вставлены в литерал:

:coffee: :three:

```javascript
var cities = [
    "Киев",
    "Львов",
    "Харьков",
    "Одесса",
    "Днепропетровск"
]

var str = ""

for ( var x = 0; x < cities.length; x++ ) {
    str += `${cities[x].charCodeAt(0)}: ${cities[x]}\n`
}

console.log ( str )
```

###### Результат в консоли:

<img width="450" src="https://lh6.googleusercontent.com/DhqLf_YtZbWoqFT2BRMswxpt1ccotkTUkYbVB4r4IUpctgrEuOTJuhycbk4-MaonVYwNzUZvg2hX0h65a75whcI3wem8JzW5Jpmym0Fl1PlNnapQWbabWRZMXeGvKFc0h5RFFld5c28Ku7M"/>

***

#### [:briefcase: Тесты](https://garevna.github.io/js-quiz/#stringMethods)

***

| [:link:` MDN`](https://developer.mozilla.org/ru/docs/Web/JavaScript/Reference/Global_Objects/String "Открывайте в новой вкладке") | [:link:` String Methods`](https://www.w3schools.com/js/js_string_methods.asp "Открывайте в новой вкладке") | [:link:` String Reference`](https://www.w3schools.com/jsref/jsref_obj_string.asp "Открывайте в новой вкладке") |
|-|-|-|