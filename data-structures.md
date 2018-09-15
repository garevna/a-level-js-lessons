<a name="1"></a>
# :mortar_board: Структуры данных

| [:arrow_double_down:](#bottom) | <img width="800"/> | [:arrow_heading_down:](#2) |
|-|-|-|

## 📖 Массивы 

`( 📌 тип данных: "object" )`

<pre>
    ✋ Массив - это упорядоченный набор переменных
    ✋ Каждая переменная называется <b>элементом массива</b>
    ✋ Элементы массива имеют порядковый номер 
       ( <b>индекс</b> элемента массива )
    ⚠️ Индексация элементов массива начинается с нуля, 
        т.е. первый элемент массива будет иметь индекс 0
    ✋ Массивы JavaScript заворачиваются в квадратные скобки
    ✋ Элементы массива разделяются запятыми
    ✋ Получить элемент массива можно по его <b>индексу</b>
</pre>

Запись массива в JS очень проста: элементы массива перечисляются через запятую в квадратных скобках:

     [ 15, 50, 78 ]

Каждый элемент массива может иметь собственный тип данных, отличный от типов других элементов массива

:coffee: 1
```javascript
var  numbers = [ 1, 5, 78 ]
```
```javascript
    // Значение    numbers [ 0 ]     будет     1
    // Значение    numbers [ 1 ]     будет     5
    // Значение    numbers [ 2 ]     будет     78
```
:coffee: 2
```javascript
var  students = [ "Николай", "Сергей", "Иван" ]

// Значение    students [ 0 ]     будет     "Николай"
// Значение    students [ 1 ]     будет     "Сергей"
// Значение    students [ 2 ]     будет     "Иван"
```

:coffee: 3

```javascript
var  person = [ "Николай", true, 25 ]
// Значение    person [ 0 ]     будет     "Николай"
// Значение    person [ 1 ]     будет     true
// Значение    person [ 2 ]     будет     25
```

:coffee: 4

Следующий код объявляет массив с именем **students**, содержащий три элемента ( имена студентов ):
```javascript
var students = [ "Иван", "Татьяна", "Дмитрий" ]

// students [ 0 ] :  "Иван"
// students [ 1 ] :  "Татьяна"
// students [ 2 ] :  "Дмитрий"
```
В результате выполнения кода:
```javascript
var hello = "Привет, " + students [ 1 ]
```
в переменной  **hello**  будет значение "*Привет, Татьяна*"

<a name="2"></a>

## 📖 Объекты 

`( 📌 тип данных: "object" )`

| [:arrow_heading_up:](#1) | <img width="800"/> | [:arrow_heading_down:](#3) |
|-|-|-|

<pre>
    ✋ Объекты объявляются с помощью 
       фигурных скобок: { ... }
    ✋ У объектов есть свойства, 
       перечисляемые внутри фигурных скобок через запятую
    ✋ Свойства объекта записываются как пары: 
       имя свойства и значение свойства, 
       разделенные двоеточием
</pre>

```javascript
var human = {
     name: "Дмитрий",
     age: 35,
     work: true
}
```
<pre>
    ✋ При обращении к свойству объекта 
       сначала пишется имя объекта, 
       затем разделитель - <b>точка</b>, 
       а затем уже имя свойства объекта:
</pre>

```javascript
human.name
human.age
human.work
```

<a name="3"></a>
:coffee: 2

| [:arrow_heading_up:](#2) | <img width="800"/> | [:arrow_heading_down:](#4) |
|-|-|-|

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

<a name="4"></a>
:coffee: 3

| [:arrow_heading_up:](#3) | <img width="800"/> | [:arrow_heading_down:](#bottom) |
|-|-|-|

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
<pre>
    Объект  <b>students</b>  имеет три свойства:
    <b>group</b>,  <b>course</b>  и  <b>persons</b>
    Свойство  <b>persons</b>  является массивом
    К нему можно обратиться так:
</pre>

```javascript
students.persons
```
<pre>
    Получить второй элемент массива 
    <b>students.persons</b> можно так:
</pre>

```javascript
students.persons [ 1 ]
```
<pre>
    Каждый элемент массива <b>students.persons</b> 
    является объектом
</pre>

```javascript      
students.persons [ 1 ].name              // "Андриенко Михаил"
students.persons [ 1 ].homeworks         // [ 5, 4, 7, 6, 8, 7, 7, 6, 8 ]
students.persons [ 1 ].homeworks [ 0 ]   // 5
```

| [:arrow_heading_up:](#4) | <a name="bottom"><img width="800"/></a> | [:arrow_double_up:](#1) |
|-|-|-|

[:briefcase: Упражнения](https://docs.google.com/forms/d/e/1FAIpQLSexcuOpJS2d0KNNU1qTUlD5Exnf0FGI9Wb9d2I5YvViwuSKDA/viewform)

***
[🔗 MDN](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures)