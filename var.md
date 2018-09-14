[home]: #-%D0%9F%D0%B5%D1%80%D0%B5%D0%BC%D0%B5%D0%BD%D0%BD%D1%8B%D0%B5-%D0%A2%D0%B8%D0%BF%D1%8B-%D0%B4%D0%B0%D0%BD%D0%BD%D1%8B%D1%85
[var]: #-var
[names]: #-%D0%9F%D1%80%D0%B0%D0%B2%D0%B8%D0%BB%D0%B0-%D0%BF%D0%BE%D1%81%D1%82%D1%80%D0%BE%D0%B5%D0%BD%D0%B8%D1%8F-%D0%B8%D0%BC%D0%B5%D0%BD-%D0%BF%D0%B5%D1%80%D0%B5%D0%BC%D0%B5%D0%BD%D0%BD%D1%8B%D1%85
[typeof]: #-%D0%A2%D0%B8%D0%BF%D1%8B-%D0%B4%D0%B0%D0%BD%D0%BD%D1%8B%D1%85--arrow_right_hook-typeof-
[dynamic-type]: #-%D0%94%D0%B8%D0%BD%D0%B0%D0%BC%D0%B8%D1%87%D0%B5%D1%81%D0%BA%D0%B0%D1%8F-%D1%82%D0%B8%D0%BF%D0%B8%D0%B7%D0%B0%D1%86%D0%B8%D1%8F
[ecmascript]: #-%D0%A1%D0%BF%D0%B5%D1%86%D0%B8%D1%84%D0%B8%D0%BA%D0%B0%D1%86%D0%B8%D1%8F-ecmascript

# 🎓 Переменные. Типы данных

<table>
<tr>
    <td width="800">
       <a href = "#-%D0%9F%D1%80%D0%B0%D0%B2%D0%B8%D0%BB%D0%B0-%D0%BF%D0%BE%D1%81%D1%82%D1%80%D0%BE%D0%B5%D0%BD%D0%B8%D1%8F-%D0%B8%D0%BC%D0%B5%D0%BD-%D0%BF%D0%B5%D1%80%D0%B5%D0%BC%D0%B5%D0%BD%D0%BD%D1%8B%D1%85">:arrow_down:</a>
       <code>Правила построения имен переменных</code><br/>
       <a href = "#-%D0%A2%D0%B8%D0%BF%D1%8B-%D0%B4%D0%B0%D0%BD%D0%BD%D1%8B%D1%85--typeof-">:arrow_down:</a>
       <code>Краткий обзор типов данных</code><br/>
       <a href = "#-%D0%A1%D0%BF%D0%B5%D1%86%D0%B8%D1%84%D0%B8%D0%BA%D0%B0%D1%86%D0%B8%D1%8F-ecmascript">:arrow_down:</a> 
       <code>Типы данных в спецификации <b>ECMAScript</b></code><br/>
    </td>
  </tr>
  <tr>
    <td>
       <a href="https://docs.google.com/forms/d/e/1FAIpQLSd0-twHJZfk-bKNkk-mg7ELLH49d3GYjcahThqGJC7A7sAJZw/viewform"                  target="_blank">:briefcase:</a> Упражнения<br/>
    </td>
  </tr>
</table>

## 📖 var

<table>
  <tr>
    <td width="5%">
    </td>
    <td width="800">
       &nbsp;
    </td>
  </tr>
  <tr>
    <td width="5%">
       <a href="#-%D0%9F%D1%80%D0%B0%D0%B2%D0%B8%D0%BB%D0%B0-%D0%BF%D0%BE%D1%81%D1%82%D1%80%D0%BE%D0%B5%D0%BD%D0%B8%D1%8F-%D0%B8%D0%BC%D0%B5%D0%BD-%D0%BF%D0%B5%D1%80%D0%B5%D0%BC%D0%B5%D0%BD%D0%BD%D1%8B%D1%85">:arrow_heading_down:</a>
    </td>
  </tr>
</table>

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

## 📖 Правила построения имен переменных
<table>
  <tr>
    <td width="5%">
        <a href="#-var">:arrow_heading_up:</a>
    </td>
    <td width="800">
       &nbsp;
    </td>
  </tr>
  <tr>
    <td width="5%">
       <a href="https://github.com/garevna/js-course/wiki/var#-%D0%A2%D0%B8%D0%BF%D1%8B-%D0%B4%D0%B0%D0%BD%D0%BD%D1%8B%D1%85--arrow_right_hook-typeof-">:arrow_heading_down:</a>
    </td>
  </tr>
</table>
✋ Имена переменных могут содержать буквы, цифры, символы подчеркивания и знаки доллара

✋ Имена переменных могут начинаться с буквы, сиволов `$` и `_`

✋ Имена переменных чувствительны к регистру ( `y` и `Y` - разные переменные )

⚠️ [Зарезервированные слова](https://www.w3schools.com/js/js_reserved.asp) не могут использоваться как имена переменных

## 📖 Типы данных ( typeof )

<table>
  <tr>
    <td width="8%">
       <a href = "#-var">
          :arrow_heading_up:
       </a>
    </td>
    <td width="800">
       <a href = "https://github.com/garevna/js-course/wiki/typeof" title="Переход на другую страницу">:arrow_right_hook:</a>typeof
    </td>
    <td width="8%">
       <a href = "#-%D0%9C%D0%B0%D1%81%D1%81%D0%B8%D0%B2%D1%8B">
          :arrow_heading_down:
       </a>
    </td>
  </tr>
</table>

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

## 📖 Динамическая типизация

<table>
  <tr>
    <td width="8%">
       <a href = "#-3">
          :arrow_heading_up:
       </a>
    </td>
    <td width="800">
       &nbsp;
    </td>
    <td width="8%">
       <a href = "#-%D0%A1%D0%BF%D0%B5%D1%86%D0%B8%D1%84%D0%B8%D0%BA%D0%B0%D1%86%D0%B8%D1%8F-ecmascript">
          :arrow_heading_down:
       </a>
    </td>
  </tr>
</table>
     
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

## 📖 Спецификация ECMAScript

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

<table>
  <tr>
    <td width="8%">
       <a href = "#-%D0%94%D0%B8%D0%BD%D0%B0%D0%BC%D0%B8%D1%87%D0%B5%D1%81%D0%BA%D0%B0%D1%8F-%D1%82%D0%B8%D0%BF%D0%B8%D0%B7%D0%B0%D1%86%D0%B8%D1%8F">
          :arrow_heading_up:
       </a>
    </td>
    <td width="800">
       <a href="https://docs.google.com/forms/d/e/1FAIpQLSd0-twHJZfk-bKNkk-mg7ELLH49d3GYjcahThqGJC7A7sAJZw/viewform"                  target="_blank">:briefcase:</a> Упражнения<br/>
    </td>
    <td width="8%">
       <a href = "#-%D0%9F%D0%B5%D1%80%D0%B5%D0%BC%D0%B5%D0%BD%D0%BD%D1%8B%D0%B5-%D0%A2%D0%B8%D0%BF%D1%8B-%D0%B4%D0%B0%D0%BD%D0%BD%D1%8B%D1%85">
          :arrow_double_up:
       </a>
    </td>
  </tr>
</table>