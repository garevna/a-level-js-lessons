:coffee: 1

host-объект  **`console`**  имеет свойства   `log`,  `dir`,  `info`,  `warn`,  `error`...
>> `для получения всех перечислимых свойств host-объекта  console воспользуйтесь оператором  for...in`
```javascript
for ( var x in console ) 
       console.log ( x )
```
Мы можем обращаться к этим свойствам как к элементам ассоциативного массива:
```javascript
console [ "log" ]
console [ "dir" ]
console [ "info" ]
console [ "warn" ]
console [ "error" ]
```
Перечисленные свойства имеют тип данных  "**`function`**"

Это означает, что они являются методами объекта  `console`

`Для вызова метода нужно использовать круглые скобки, в которых могут быть ( а могут и не быть ) аргументы`

Перечисленные методы вызываются с аргументом
```javascript
console [ "log" ] ( "Привет!" )
```
>> `в консоль будет выведено "Привет!"`

Создадим объект  **presence** следующей структуры:
```javascript
var presence = {
        "Артюх Илья" : true,
        "Боднарь Михаил" : true,
        "Гончар Виктор" : true,
        "Дмитренко Пётр" : true,
        "Дорошенко Дмитрий" : true,
        "Калашников Григорий" : true,
        "Кержакова Марина" : true,
        "Москаленко Андрей" : true,
        "Ничипоренко Иван" : true,
        "Опрышкин Дмитрий" : true,
        "Подобреева Юлия" : true,
        "Саратова Ольга" : false,
        "Алескерова Евгения" : false
}
```
Теперь выведем в консоль имена всех свойств объекта **presence** таким образом:

* если свойство имеет значение  *`true`*, то мы выведем имя свойства  в консоль с помощью метода **`console.info`**

* а если свойство имеет значение  *`false`*, то мы выведем имя свойства  в консоль  с помощью метода **`console.error`**

Для определения имени метода объекта  `console`  используем тернарный оператор:
```javascript
presence [ student ] ? "info" : "error"
```
который вернет значение **"info"**, если  `presence [ student ]` будет **`true`**, или значение **"error"**, если  `presence [ student ]` будет **`false`**
```javascript
for ( var student in presence ) {
   console [ 
       presence [ student ] ? "info" : "error" 
   ] ( student )
}
```
Теперь создадим журнал группы:
```javascript
var fea7 = [
   {
      name: "Артюх Илья",
      present: []
   },
   {
      name: "Боднарь Михаил",
      present: []
   },
   {
      name: "Гончар Виктор",
      present: []
   },
   {
      name: "Дмитренко Пётр",
      present: []
   },
   {
      name: "Дорошенко Дмитрий",
      present: []
   },
   {
      name: "Калашников Григорий",
      present: []
   },
   {
      name: "Кержакова Марина",
      present: []
   },
   {
      name: "Москаленко Андрей",
      present: []
   },
   {
      name: "Ничипоренко Иван",
      present: []
   },
   {
      name: "Опрышкин Дмитрий",
      present: []
   },
   {
      name: "Подобреева Юлия",
      present: []
   },
   {
      name: "Саратова Ольга",
      present: []
   },
   {
      name: "Алескерова Евгения",
      present: []
   }
]
```
и запустим цикл:
```javascript
var lessonDate = new Date().toLocaleString().split(', ')[0]
for ( var student of fea7 )
   student.present.push ( {
      data: lessonDate,
      name: presence [ student.name ]
   } )
```

Выведите результат в консоль