# 🎓 Переменные. Типы данных

<tr>
    <td width="800">
       <a href = "#-%D0%9F%D1%80%D0%B0%D0%B2%D0%B8%D0%BB%D0%B0-%D0%BF%D0%BE%D1%81%D1%82%D1%80%D0%BE%D0%B5%D0%BD%D0%B8%D1%8F-%D0%B8%D0%BC%D0%B5%D0%BD-%D0%BF%D0%B5%D1%80%D0%B5%D0%BC%D0%B5%D0%BD%D0%BD%D1%8B%D1%85">
          :arrow_down:
       </a>Правила построения имен переменных<br/>
       <a href = "#-%D0%A2%D0%B8%D0%BF%D1%8B-%D0%B4%D0%B0%D0%BD%D0%BD%D1%8B%D1%85--typeof-">
          :arrow_down:
       </a>typeof<br/>
       <a href = "#-%D0%9C%D0%B0%D1%81%D1%81%D0%B8%D0%B2%D1%8B">
          :arrow_down:
       </a>Массивы<br/>
       <a href = "#-%D0%9E%D0%B1%D1%8A%D0%B5%D0%BA%D1%82%D1%8B">
          :arrow_down:
       </a>Объекты<br/>
       <a href = "#-%D0%A1%D0%BF%D0%B5%D1%86%D0%B8%D1%84%D0%B8%D0%BA%D0%B0%D1%86%D0%B8%D1%8F-ecmascript">
          :arrow_down:
       </a>Спецификация ECMAScript<br/>
    </td>
  </tr>
</table>

## 📖 var

Переменные - это контейнеры для хранения данных

Для объявления переменной используется ключевое слово   ```var```

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
Можно объявить сразу несколько переменных в одной строке, 
разделяя их запятой:
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
       &nbsp;
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
>записывается без кавычек, состоит из цифр, для отделения десятичных разрядов используется точка:
```javascript
     53.25
```
### 📖 логическая переменная 
     ( 📌 тип данных: "boolean" )
>принимает только два возможных значения:  ```true```  или  ```false``` ( без кавычек, "true" - это уже строка )

### 📖 undefined 

     ( 📌 тип данных: "undefined" )

>Переменные часто объявляются без присваивания им начального значения

>Если переменная объявлена без значения, ее значение будет ```undefined``` ( без кавычек, "undefined" - это уже строка )

## 📖 Массивы 
    ( 📌 тип данных: "object" )

<table>
  <tr>
    <td width="8%">
       <a href = "#-%D0%A2%D0%B8%D0%BF%D1%8B-%D0%B4%D0%B0%D0%BD%D0%BD%D1%8B%D1%85--typeof-">
          :arrow_heading_up:
       </a>
    </td>
    <td width="800">
       &nbsp;
    </td>
    <td width="8%">
       <a href = "#-1">
          :arrow_heading_down:
       </a>
    </td>
  </tr>
</table>

>✋ Массив - это упорядоченный набор переменных

>✋ Каждая переменная называется элементом массива

>✋ Элементы массива имеют порядковый номер внутри массива - *индекс* элемента массива

>⚠️ Индексация элементов массива начинается с нуля, т.е. первый элемент массива будет иметь индекс 0

>✋ Массивы JavaScript объявляются с помощью квадратных скобок

>✋ Элементы массива разделяются запятыми

#### ☕ 1

<table>
  <tr>
    <td width="8%">
       <a href = "#-%D0%A2%D0%B8%D0%BF%D1%8B-%D0%B4%D0%B0%D0%BD%D0%BD%D1%8B%D1%85--typeof-">
          :arrow_heading_up:
       </a>
    </td>
    <td width="800">
       &nbsp;
    </td>
    <td width="8%">
       <a href = "#-%D0%9E%D0%B1%D1%8A%D0%B5%D0%BA%D1%82%D1%8B">
          :arrow_heading_down:
       </a>
    </td>
  </tr>
</table>

Следующий код объявляет массив с именем students, содержащий три элемента ( имена студентов ):
```javascript
var students = [ "Иван", "Татьяна", "Дмитрий" ]
```
Элементы массива:
```javascript
    students [ 0 ] :  "Иван"
    students [ 1 ] :  "Татьяна"
    students [ 2 ] :  "Дмитрий"
```     
В результате выполнения кода:
```javascript
var hello = "Привет, " + students [ 1 ]
```
в переменной  **hello**  будет значение *"Привет, Татьяна"*


## 📖 Объекты 
     ( 📌 тип данных: "object" )

<table>
  <tr>
    <td width="8%">
       <a href = "#-1">
          :arrow_heading_up:
       </a>
    </td>
    <td width="800">
       &nbsp;
    </td>
    <td width="8%">
       <a href = "#-2">
          :arrow_heading_down:
       </a>
    </td>
  </tr>
</table>

>✋ Объекты объявляются с помощью фигурных скобок: { ... }

>✋ У объектов есть свойства, перечисляемые внутри фигурных скобок через запятую

>✋ Свойства объекта записываются как пары: имя свойства и значение свойства, разделенные двоеточием
```javascript
var human = {
     name: "Дмитрий",
     age: 35,
     work: true
}
```
>✋ При обращении к свойству объекта сначала пишется имя объекта, затем разделитель - *точка*, а затем уже имя свойства объекта:
```javascript
human.name
human.age
human.work
```

#### ☕ 2

<table>
  <tr>
    <td width="8%">
       <a href = "#-%D0%9E%D0%B1%D1%8A%D0%B5%D0%BA%D1%82%D1%8B">
          :arrow_heading_up:
       </a>
    </td>
    <td width="800">
       &nbsp;
    </td>
    <td width="8%">
       <a href = "#-3">
          :arrow_heading_down:
       </a>
    </td>
  </tr>
</table>

```javascript
var students = {
     group: "ОП",
     course: 'Основы программирования',
     names: [ 
          "Иванов Семен", 
          "Андриенко Михаил", 
          "Костенко Павел",
          "Молчанов Алексей",
          "Примаченко Егор"
     ]
}
```
    Значение  students.course  будет "Основы программирования"
    Значение students.names будет массив
        [ 
            "Иванов Семен", 
            "Андриенко Михаил", 
            "Костенко Павел",
            "Молчанов Алексей",
            "Примаченко Егор"
        ]

    Значение students.names [ 2 ] будет "Костенко Павел"

#### ☕ 3

<table>
  <tr>
    <td width="8%">
       <a href = "#-2">
          :arrow_heading_up:
       </a>
    </td>
    <td width="800">
       &nbsp;
    </td>
    <td width="8%">
       <a href = "#-%D0%94%D0%B8%D0%BD%D0%B0%D0%BC%D0%B8%D1%87%D0%B5%D1%81%D0%BA%D0%B0%D1%8F-%D1%82%D0%B8%D0%BF%D0%B8%D0%B7%D0%B0%D1%86%D0%B8%D1%8F">
          :arrow_heading_down:
       </a>
    </td>
  </tr>
</table>

```javascript
var students = {
     group: "ОП",
     course: 'Основы программирования',
     persons: [ 
           { 
               name: "Иванов Семен", 
               homeworks: [ 10, 7, 8, 5, 9, 6, 4, 8, 7 ]
           },
           { 
               name: "Андриенко Михаил", 
               homeworks: [ 5, 4, 7, 6, 8, 7, 7, 6, 8 ]
           },
           { 
               name: "Костенко Павел",
               homeworks: [ 9, 8, 9, 10, 7, 7, 8, 6, 8 ]
           },
           { 
               name: "Молчанов Алексей",
               homeworks: [ 4, 5, 4, 6, 7, 5, 6, 7, 8 ]
           },
           { 
               name: "Примаченко Егор",
               homeworks: [ 3, 5, 4, 6, 5, 7, 6, 6, 7 ]
           }
     ]
}
```
>Объект  students  имеет три свойства:  ```group```,  ```course```  и  ```persons```

>Свойство  persons   является массивом

>К нему можно обратиться так:  
```javascript
students.persons
```
>Получить второй элемент массива ```students.persons``` можно так:
```javascript
students.persons [ 1 ]
```

>Каждый элемент массива ```students.persons``` является объектом
```javascript      
students.persons [ 1 ].name              // "Андриенко Михаил"
students.persons [ 1 ].homeworks         // [ 5, 4, 7, 6, 8, 7, 7, 6, 8 ]
students.persons [ 1 ].homeworks [ 0 ]   // 5
```
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

## 📖 Динамическая типизация
     
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

>Последняя спецификация языка **ECMAScript** определяет семь типов данных:

>>#### шесть примитивных типов:

        ✅ Boolean
        ✅ Null
        ✅ Undefined
        ✅ Number
        ✅ String
        ✅ Symbol (new in ECMAScript 6)

>>#### и тип 

        ✅ Object

## [💼 Упражнения](https://docs.google.com/forms/d/e/1FAIpQLSd0-twHJZfk-bKNkk-mg7ELLH49d3GYjcahThqGJC7A7sAJZw/viewform)

<table>
  <tr>
    <td width="8%">
       <a href = "#-%D0%94%D0%B8%D0%BD%D0%B0%D0%BC%D0%B8%D1%87%D0%B5%D1%81%D0%BA%D0%B0%D1%8F-%D1%82%D0%B8%D0%BF%D0%B8%D0%B7%D0%B0%D1%86%D0%B8%D1%8F">
          :arrow_heading_up:
       </a>
    </td>
    <td width="800">
       &nbsp;
    </td>
    <td width="8%">
       <a href = "#-%D0%9F%D0%B5%D1%80%D0%B5%D0%BC%D0%B5%D0%BD%D0%BD%D1%8B%D0%B5-%D0%A2%D0%B8%D0%BF%D1%8B-%D0%B4%D0%B0%D0%BD%D0%BD%D1%8B%D1%85">
          :arrow_double_up:
       </a>
    </td>
  </tr>
</table>