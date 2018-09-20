<a name="top"></a>
# 🎓 Модель наследования в JS

| [:arrow_double_down:](#bottom) | <img width="800"/> | [:arrow_heading_down:](#) |
|-|-|-|

||
|-|
| :arrow_forward: `Конструктор` |
| :arrow_forward: `Прототип` |
| :arrow_forward: `Свойство __proto__ ( ES6 )` |
| :arrow_forward: `Собственные и унаследованные свойства объектов` |
| :arrow_forward: `Перечислимые и неперечислимые свойства объектов` |

## 🎓 Нативные и хост-объекты JS

Нативные объекты определяются спецификацией языка

Нативные объекты представлены **встроенными объектами**
```javascript
// объекты
     Math
     JSON
// конструкторы
     Array
     Boolean
     Date
     Error
     Function
     Map
     Number
     Object
     Promise
     Proxy
     RegExp
     String
     ...
```
и объектами, которые создаются в процессе работы кода
```javascript
var obj = {
    name: "Google",
    show: false
}
```
<a name="host"></a>
**host-объекты** - это объекты среды, в которой функционирует код

К   host-объектам относятся объекты **BOM** и **DOM**
```javascript
// объекты
     window
     document
     history
     location
     console
     ...
// конструкторы
     Event
     HTMLElement
     XMLHttpRequest
     ...
```
:warning: `Поскольку конструкторы - это функции, для получения дерева их свойств нужно использовать метод console.dir ( а не console.log )`
```javascript
console.dir ( Promise )
console.dir ( XMLHttpRequest )
```

<a name="literal"></a>
## 🎓 Литерал объекта

| [:arrow_heading_up:](#host) | <img width="800"/> | [:arrow_heading_down:](#own) |
|-|-|-|

Создать нативный объект JS можно двумя способами

В литеральной нотации объект описывается внутри блока фигурных скобок:

:coffee:
```javascript
var figure = {
        type: "Окружность",
        size: 100,
        color: "red"
}
```
Все эти свойства доступны извне:
```javascript
console.log ( figure.type )
console.log ( figure.size )
console.log ( figure.color )
```
или так:
```javascript
console.log ( figure [ "type" ] )
console.log ( figure [ "size" ] )
console.log ( figure [ "color" ] )
```
:warning: Свойства объектов, заданных литералом, являются **публичными**, поскольку они доступны извне

>> **Хотя всегда есть [:coffee: способ](object-literal-closure) это обойти :wink:**

<a name="own"></a>
## 🎓 Собственные свойства объекта

| [:arrow_heading_up:](#literal) | <img width="800"/> | [:arrow_heading_down:](#enumerable) |
|-|-|-|

Собственные свойства *инкапсулированы* в экземпляре

Например, экземпляр **`figure`** выступает в роли "капсюлы", в которой свойства **`type`**,  **`size`**  и  **`color`**  отделены от таких же свойств других экземпляров

Можно создать объект  **`figure2`**  с таким же набором свойств, но с другими значениями этих свойств:

:coffee:
```javascript
var figure2 = {
        type: "Треугольник",
        size: 150,
        color: "blue"
}
```
У экземпляров **figure** и **figure2** одинаковый набор свойств ( имена свойств совпадают )

Однако значения этих свойств в каждом экземпляре отличаются

Итак, собственные свойства экземпляра - это свойства, инкапсюлированные в этом экземпляре

( свойства  **`type`**,  **`size`**  и  **`color`**  являются **собственными** свойствами экземпляров  **`figure`**  и  **`figure2`** потому, что их значения локализованы внутри "капсюлы" объекта под именем экземпляра )
```javascript
figure.type       // "Окружность"
figure2.type      // "Треугольник"
```

<a name="enumerable"></a>
## 🎓 Перечислимые свойства объекта

| [:arrow_heading_up:](#own) | <img width="800"/> | [:arrow_heading_down:](#Object) |
|-|-|-|

**Перечислимые** свойства экземпляра - это свойства, которые итерируются оператором цикла  **`for...in`**
```javascript
for ( var x in figure )
     console.log ( x )
```
В консоль будут выведены

```javascript
for ( var x in figure )
     console.log ( x )
```

<a name="Object"></a>
## 🎓 Object

| [:arrow_heading_up:](#literal) | <img width="800"/> | [:arrow_heading_down:](#bottom) |
|-|-|-|

Прототипом всех создаваемых нативных объектов является встроенный объект  **Object** ( конструктор )

У конструктора  **Object**  есть свойство  **`prototype`**

Это "генокод" всех создаваемых объектов JS

Он передается им при "рождении"

Все свойства и методы, перечисленные в свойстве **`prototype`** объекта  **Object**, будут доступны в каждом экземпляре создаваемого нативного объекта JS


```javascript
var obj = {}

obj.valueOf ()
obj.toString ()
```
***
| [:arrow_heading_up:](#Object) | <a name="bottom"><img width="800"/></a> | [:arrow_double_up:](#top) |
|-|-|-|

[:briefcase: Упражнения]()
***
[:link: MDN](https://developer.mozilla.org/ru/docs/Web/JavaScript/Reference/Global_Objects)