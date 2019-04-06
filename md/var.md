<a name="1"></a>
# <img src="https://avatars2.githubusercontent.com/u/19735284?s=40&v=4" width="30" title="Ⓒ Irina Fylyppova ( garevna ) 2019"/> Переменные. Типы данных

| [:arrow_double_down:](#bottom) | <img width="800"/> | [:arrow_heading_down:](#2) |
|-|-|-|

<table>
<tr>
    <td width="80%">
       <a href = "#3">:arrow_down:</a>
       <code>Правила построения имен переменных</code><br/>
       <a href = "#4">:arrow_down:</a>
       <code>Краткий обзор типов данных</code><br/>
       <a href = "#6">:arrow_down:</a>
       <code>Типы данных в спецификации <b>ECMAScript</b></code><br/>
    </td>
  </tr>
  <tr>
    <td>
       <a href="https://docs.google.com/forms/d/e/1FAIpQLSd0-twHJZfk-bKNkk-mg7ELLH49d3GYjcahThqGJC7A7sAJZw/viewform"                  target="_blank">:briefcase:</a> Упражнения<br/>
    </td>
  </tr>
</table>

<a name="2"></a>
## 📖 var

| [:arrow_heading_up:](#1) | <img width="800"/> | [:arrow_heading_down:](#3) |
|-|-|-|

Переменные - это контейнеры для хранения данных

Для объявления переменной используется ключевое слово   `var`

При объявлении переменной ей можно сразу присвоить начальное значение:

```javascript
     var x = 5
```
⚠️Если мы объявим переменные, но не присвоим им начальные значения:
```javascript
     var x, y, z
```
то их значением будет   `undefined`

⚠️ Если мы не объявим переменную, но попытаемся обратиться к ней:
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

<a name="3"></a>
## 📖 Правила построения имен переменных

| [:arrow_heading_up:](#2) | <img width="800"/> | [:arrow_heading_down:](#4) |
|-|-|-|

✋ Имена переменных могут содержать буквы, цифры, символы подчеркивания и знаки доллара

✋ Имена переменных могут начинаться с буквы, сиволов `$` и `_`

✋ Имена переменных чувствительны к регистру ( `y` и `Y` - разные переменные )

⚠️ [Зарезервированные слова](https://www.w3schools.com/js/js_reserved.asp) не могут использоваться как имена переменных

<a name="4"></a>
## 📖 Типы данных ( typeof )

| [:arrow_heading_up:](#3) | <img width="800"/> | [:arrow_heading_down:](#5) |
|-|-|-|

[:arrow_right_hook: Оператор typeof](https://github.com/garevna/js-course/wiki/typeof "Переход на другую страницу")

### 📖 строка
     ( 📌 тип данных: "string" )
     заключается в двойные ( "Доброе утро" ) или одинарные ( 'My name is ...' ) кавычки
     Внутри строки можно использовать кавычки, если они не совпадают с кавычками самой строки:
```
'Посмотри слово "Бегемот" в словаре'
"Посмотри слово 'Бегемот' в словаре"
```
### 📖 число
     ( 📌 тип данных: "number" )
<pre>
    записывается без кавычек,
    состоит из цифр,
    для отделения десятичных разрядов
    используется точка
</pre>

```javascript
     53.25
```
### 📖 логическая переменная
     ( 📌 тип данных: "boolean" )

<pre>
    принимает только два возможных значения:  <b>true</b>  или  <b>false</b>
    ( без кавычек, "<em>true</em>" - это уже строка )
</pre>

### 📖 undefined

     ( 📌 тип данных: "undefined" )

<pre>
    Переменные часто объявляются без присваивания им начального значения
    Если переменная объявлена без значения, ее значение будет <b>undefined</b>
    ( без кавычек, "<em>undefined</em>" - это уже строка )
</pre>

<a name="5"></a>
## 📖 Динамическая типизация

| [:arrow_heading_up:](#4) | <img width="800"/> | [:arrow_heading_down:](#6) |
|-|-|-|

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

<a name="6"></a>
## 📖 Спецификация ECMAScript

| [:arrow_heading_up:](#5) | <img width="800"/> | [:arrow_heading_down:](#bottom) |
|-|-|-|

Последняя спецификация языка **ECMAScript** определяет семь типов данных:

>>#### шесть примитивных типов:

        ✅ Boolean
        ✅ Null
        ✅ Undefined
        ✅ Number
        ✅ String
        ✅ Symbol (new in ECMAScript 6)

>>#### и тип

        ✅ Object

| [:arrow_heading_up:](#6) | <a name="bottom"><img width="800"/></a> | [:arrow_double_up:](#1) |
|-|-|-|

[:briefcase: Упражнения](https://docs.google.com/forms/d/e/1FAIpQLSd0-twHJZfk-bKNkk-mg7ELLH49d3GYjcahThqGJC7A7sAJZw/viewform)
