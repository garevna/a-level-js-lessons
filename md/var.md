[footer]: https://github.com/garevna/js-course/raw/master/images/a-level-ico.png?raw=true
[me40]: https://raw.githubusercontent.com/garevna/a-level-js-lessons/master/ico/myPhoto-40.png "Ⓒ Irina Fylyppova ( garevna ) 2019"
[ico20]: https://raw.githubusercontent.com/garevna/a-level-js-lessons/master/ico/a-level-20.png
[ico25]: https://raw.githubusercontent.com/garevna/a-level-js-lessons/master/ico/a-level-25.png
[hw-20]: https://raw.githubusercontent.com/garevna/a-level-js-lessons/master/ico/briefcase-20.png
[hw-30]: https://raw.githubusercontent.com/garevna/a-level-js-lessons/master/ico/briefcase-30.png
[cap-20]: https://raw.githubusercontent.com/garevna/a-level-js-lessons/master/ico/coffee-20.png
[cap-30]: https://raw.githubusercontent.com/garevna/a-level-js-lessons/master/ico/coffee-30.png
[warn-25]: https://raw.githubusercontent.com/garevna/a-level-js-lessons/master/ico/warning-25.png
[link-20]: https://raw.githubusercontent.com/garevna/a-level-js-lessons/master/ico/link-20.png
[err-20]: https://raw.githubusercontent.com/garevna/a-level-js-lessons/master/ico/no_entry-20.png
[err-25]: https://raw.githubusercontent.com/garevna/a-level-js-lessons/master/ico/no_entry-25.png
[err-30]: https://raw.githubusercontent.com/garevna/a-level-js-lessons/master/ico/no_entry-30.png
[debagger]: https://raw.githubusercontent.com/garevna/a-level-js-lessons/master/ico/debagger-20.png "Resume script execution F8 Ctrl+\"
[reload]: https://raw.githubusercontent.com/garevna/a-level-js-lessons/master/ico/reload.png
[file-20]: https://raw.githubusercontent.com/garevna/a-level-js-lessons/master/ico/pencil-20.png


| <img width="900"/> | ![me40] <br/><sup>[Занятие&nbsp;1](../lessons/lesson-01.md)</sup> |
|-|-|

# Переменные. Типы данных

## ![ico25] var

Переменные - это контейнеры для хранения данных

Для объявления переменной используется ключевое слово `var`

При объявлении переменной ей можно сразу присвоить начальное значение:

```javascript
     var x = 5
```

![warn-20] Если мы объявим переменные, но не присвоим им начальные значения:

```javascript
     var x, y, z
```

то их значением будет   `undefined`


![warn-20] Если мы не объявим переменную, но попытаемся обратиться к ней:

```javascript
console.log ( sigma )
```

то в консоли появится сообщение об ошибке:

```
⛔️ Uncaught ReferenceError: sigma is not defined
```

Можно объявить сразу несколько переменных в одной строке, разделяя их запятой:

```javascript
var person = "Сергей",  hobby = 'football',  age = 30
```

или так:

```javascript
var person = "Сергей",  
    hobby = 'football',  
    age = 30
```

______________________________________________________________

## ![ico25] Правила построения имен переменных

![warn-20] Имена переменных могут содержать буквы, цифры, символы подчеркивания и знаки доллара

![warn-20] Имена переменных могут начинаться с буквы, сиволов `$` и `_`

![warn-20] Имена переменных чувствительны к регистру ( `y` и `Y` - разные переменные )

![warn-20] [Зарезервированные слова](https://www.w3schools.com/js/js_reserved.asp) не могут использоваться как имена переменных

______________________________________________________________

## ![ico25] Типы данных

[Оператор `typeof`](https://github.com/garevna/js-course/wiki/typeof "Переход на другую страницу")

______________________________________________________________

### ![ico20] строка

###### тип данных: "string"

заключается в двойные ( "Доброе утро" ) или одинарные ( 'My name is ...' ) кавычки

Внутри строки можно использовать кавычки, если они не совпадают с кавычками самой строки:

<table><tr><td><br/>

'Посмотри слово "Бегемот" в словаре'
"Посмотри слово 'Бегемот' в словаре"

</td></tr></table>

______________________________________________________________

### ![ico20] число

###### тип данных: "number"

записывается без кавычек

состоит из цифр

для отделения десятичных разрядов используется точка

```javascript
var x = 53.25
```

______________________________________________________________

### ![ico20] логическая переменная

###### тип данных: "boolean"

принимает только два возможных значения:  **`true`**  или  **`false`**

( без кавычек, "_true_" - это уже строка )


______________________________________________________________

### ![ico20] `undefined`

###### тип данных: "undefined"

Переменные часто объявляются без присваивания им начального значения

Если переменная объявлена без значения, ее значение будет **`undefined`**

( без кавычек, "_undefined_" - это уже строка )

______________________________________________________________

## ![ico25] Динамическая типизация

В  JavaScript используется динамическая типизация данных

Это означает, что тип данных переменной определяется при присваивании ей значения

```javascript
var x = 0
console.log (x)             // в консоли будет    0
console.log ( typeof x)     // в консоли будет    "number"

x = "lol"
console.log (x)            // в консоли будет   "lol"
console.log ( typeof x)    // в консоли будет    "string"
```

______________________________________________________________

## ![ico25] Спецификация ECMAScript

На сегодняшний день спека определяет семь типов данных:

* Boolean
* Null
* Undefined
* Number
* String
* Symbol ( ES6 )
* Object

______________________________________________________________

[![hw-30] Упражнения](https://docs.google.com/forms/d/e/1FAIpQLSd0-twHJZfk-bKNkk-mg7ELLH49d3GYjcahThqGJC7A7sAJZw/viewform)
