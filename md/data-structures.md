[footer]: https://github.com/garevna/js-course/raw/master/images/a-level-ico.png?raw=true
[me]: https://raw.githubusercontent.com/garevna/a-level-js-lessons/master/ico/myPhoto-40.png "Ⓒ Irina Fylyppova ( garevna ) 2019"

[ico20]: https://raw.githubusercontent.com/garevna/a-level-js-lessons/master/ico/a-level-20.png
[ico25]: https://raw.githubusercontent.com/garevna/a-level-js-lessons/master/ico/a-level-25.png
[hw-30]: https://raw.githubusercontent.com/garevna/a-level-js-lessons/master/ico/briefcase-30.png
[cap-20]: https://raw.githubusercontent.com/garevna/a-level-js-lessons/master/ico/coffee-20.png
[cap-25]: https://raw.githubusercontent.com/garevna/a-level-js-lessons/master/ico/coffee-25.png
[cap-30]: https://raw.githubusercontent.com/garevna/a-level-js-lessons/master/ico/coffee-30.png
[error]: https://raw.githubusercontent.com/garevna/a-level-js-lessons/master/ico/no_entry-20.png
[warn]: https://raw.githubusercontent.com/garevna/a-level-js-lessons/master/ico/warning-25.png
[link]: https://raw.githubusercontent.com/garevna/a-level-js-lessons/master/ico/link-20.png
[space-800]: https://raw.githubusercontent.com/garevna/a-level-js-lessons/master/ico/space-800.png

[lesson]: ../lessons/lesson-01.md

| ![ico25] <br/><sup>[**Lesson&nbsp;1**][lesson]</sup> | <h2>Структуры данных</h2>![space-800]<sup>[• Массивы](#arrays) [• Объекты](#objects)</sup> | ![me] <br/><sup>[**Занятие&nbsp;1**][lesson]</sup> |
|:-:|:-:|:-:|

_________________________________________________________________________

<a name="arrays"></a>
## ![ico25] Массивы

| <sup>[• Объекты](#objects)</sup> |
|-|

###### тип данных: `object`

* Массив - это упорядоченный набор переменных
* Каждая переменная называется **элементом массива**
* Элементы массива имеют порядковый номер ( **_индекс_** элемента массива )

    ![warn] Индексация элементов массива начинается с нуля, т.е. первый элемент массива будет иметь индекс `0`

* Массивы JavaScript заворачиваются в квадратные скобки
* Элементы массива разделяются запятыми
* Получить элемент массива можно по его **_индексу_**

_____________________________________________________________

Запись массива в JS очень проста: элементы массива перечисляются через запятую в квадратных скобках:

```
[ 15, 50, 78 ]
```

Каждый элемент массива может иметь собственный тип данных, отличный от типов других элементов массива

#### ![cap-20] 1

```javascript
var  numbers = [ 1, 5, 78 ]
```

| <sup>Значение `numbers[0]` будет 1<br/>Значение `numbers[1]` будет 5<br/>Значение `numbers[2]` будет 78</sup> |
|:-|

</td></tr></table>

________________________________________________________

#### ![cap-20] 2

```javascript
var  students = [ "Николай", "Сергей", "Иван" ]
```

| <sup>Значение `students[0]` будет "Николай"<br/>Значение `students[1]` будет "Сергей"<br/>Значение `students[2]` будет "Иван"</sup> |
|:-|

________________________________________________________

#### ![cap-20] 3

```javascript
var  person = [ "Николай", true, 25 ]
```

| <sup>Значение `person[0]` будет "Николай"<br/>Значение `person[1]` будет true<br/>Значение `person[2]` будет 25</sup> |
|:-|

________________________________________________________

#### ![cap-20] 4

Следующий код объявляет массив с именем **students**, содержащий три элемента ( имена студентов ):

```javascript
var students = [ "Иван", "Татьяна", "Дмитрий" ]
```

| <sup>students[0] :  "Иван"<br/>students[1] :  "Татьяна"<br/>students[2] :  "Дмитрий"</sup> |
|:-|

В результате выполнения кода:

```javascript
var hello = "Привет, " + students[1]
```
в переменной  **hello**  будет значение "*Привет, Татьяна*"

_____________________________________________________________

<a name="objects"></a>
## ![ico25] Объекты

| <sup>[• Массивы](#arrays)</sup> |
|-|

###### тип данных: `object`

* Объекты объявляются с помощью фигурных скобок: `{ ... }`
* У объектов есть свойства, перечисляемые внутри фигурных скобок через запятую
* Свойства объекта записываются как пары: имя свойства и значение свойства, разделенные двоеточием


#### ![cap-20] 1

```javascript
var human = {
    name: "Дмитрий",
    age: 35,
    work: true
}
```

_____________________________________________________________

При обращении к свойству объекта сначала пишется имя объекта,

затем разделитель - **точка**,

а затем уже имя свойства объекта:


#### ![cap-20] 2

```javascript
human.name
human.age
human.work
```

________________________________________________________

#### ![cap-20] 3

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

Значение  `students.course`  будет "Основы программирования"

Значение `students.names` будет массив

```javascript
[
    "Иванов Семен",
    "Андриенко Михаил",
    "Костенко Павел",
    "Молчанов Алексей",
    "Примаченко Егор"
]
```

Значение `students.names[2]` будет "Костенко Павел"

________________________________________________________

#### ![cap-20] 4

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

Объект  `students`  имеет три свойства: `group`,  `course`  и  `persons`

Свойство  `persons`  является массивом

К нему можно обратиться так:

```javascript
students.persons
```

Получить второй элемент массива `students.persons` можно так:

```javascript
students.persons[1]
```

Каждый элемент массива `students.persons` является объектом

```javascript      
students.persons[1].name           // "Андриенко Михаил"
students.persons[1].homeworks      // [ 5, 4, 7, 6, 8, 7, 7, 6, 8 ]
students.persons[1].homeworks[0]   // 5
```

| <sup>[• Массивы](#arrays) [• Объекты](#objects)</sup> |
|-|
_____________________________________________________________

### [![hw-30] Упражнения](https://docs.google.com/forms/d/e/1FAIpQLSexcuOpJS2d0KNNU1qTUlD5Exnf0FGI9Wb9d2I5YvViwuSKDA/viewform)

________________________________________________________

[![link] MDN](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures)

_________________________________________________________________________

![footer]
