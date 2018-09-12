# 💼 Самостоятельная работа

[:two:](https://github.com/garevna/js-course/wiki/self-work-02#-2)
[:three:](https://github.com/garevna/js-course/wiki/self-work-02#-3)
[:four:](https://github.com/garevna/js-course/wiki/self-work-02#-4)
[:five:](https://github.com/garevna/js-course/wiki/self-work-02#-5)
***
## Задание :one:

Создать массив **group**, элементы которого будут объектами, содержащими данные каждого студента группы

Какие данные - на ваше усмотрение ( например, имя, фамилия, возраст, наличие ноутбука и т.д. )
```javascript
var group = [
        {
                name: "...",
                lastName: "...",
                age: ...,
                notebook: false,
                ...
]
```
Создать функцию, которая итерирует массив **group**, выводя в консоль данные каждого студента одной строкой 

( предварительно преобразовав объект в строку, не забудьте сивол-разделитель )
```javascript
function getStudentsList ( arrayOfStudents ) {
        ...
}
```
>`Можно вернуть новый массив ( массив строк, а не объектов )  и вывести его в консоль`

## Задание :two:

Работа с предыдущим массивом **group**

Объявить функцию, которая добавляет нового студента в массив **group**

Формальные параметры - данные студента
```javascript
function addNewStudent ( name, lastName, age, notebook ... ) {
    ...
}
```
Вызвать функцию **addNewStudent**, передав ей фактические данные нового студента

После этого вызвать предыдущую функцию ( **getStudentsList** ), чтобы убедиться, что студент добавлен в группу

## Задание :three:

Объявить функцию, которая получает в качестве аргумента строку и удаляет из нее символы, 

код которых  больше **1103** или меньше **1040**

Функция должна вернуть новую строку

Применить эту функцию к строке  
`"Вчbvnера 789 был home work наiuyстоtящий + празrorднgfdик"`

## Задание :four:

Написать функцию сортировки массива

>> Не использовать метод `sort ()`

>> Использовать оператор цикла  `while`

>> Использовать методы работы с массивами и строками

## Задание :five:

Есть два массива, в первом - имена, во втором - фамилии

Нужно создать массив, элементы которого будут содержать имя и фамилию одной строкой
```javascript
names [ i ] ="Сергей", 
lastNames [ i ] = "Коломенцев"
```
Результат:
```javascript
newArray [ i ] = "Сергей Коломенцев"
```
***
[:one:](https://github.com/garevna/js-course/wiki/self-work-02#-1)
[:two:](https://github.com/garevna/js-course/wiki/self-work-02#-2)
[:three:](https://github.com/garevna/js-course/wiki/self-work-02#-3)
***
[:link: Регистрация ссылок на выполненные работы](https://docs.google.com/forms/d/e/1FAIpQLScoUhG6mHKhnPYZKBbjocQ496LjCZkkPYLV8Mudu4DIK6UjFQ/viewform)