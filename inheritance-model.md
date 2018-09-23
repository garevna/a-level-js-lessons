<a name="top"></a>
# 🎓 Модель наследования в JS

| [:arrow_double_down:](#bottom) | <img width="800"/> | [:arrow_heading_down:](#host) |
|-|-|-|

|[:arrow_forward:](#literal) `Литерал объекта`|[:arrow_forward:](#constructor) `Конструктор` |
|-|-|
| &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;[:arrow_forward:](#own) `Собственные свойства` |
| &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;[:arrow_forward:](#enumerable) `Перечислимые свойства` |

<a name="literal"></a>
## 🎓 Литерал объекта

| [:arrow_heading_up:](#top) | <img width="800"/> | [:arrow_heading_down:](#own) |
|-|-|-|

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

| Хотя всегда есть [:coffee: способ](object-literal-closure) это обойти :wink: |
|-|

<a name="own"></a>
### 🎓 Собственные свойства экземпляра

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

Итак, *`собственные свойства экземпляра - это свойства, инкапсюлированные в этом экземпляре`*

<code>( свойства  **`type`**,  **`size`**  и  **`color`**  являются **собственными** свойствами экземпляров  **`figure`**  и  **`figure2`** потому, что их значения локализованы внутри "капсюлы" под именем экземпляра )</code>
```javascript
figure.type       // "Окружность"
figure2.type      // "Треугольник"
```

<a name="enumerable"></a>
### 🎓 Перечислимые свойства экземпляра

| [:arrow_heading_up:](#own) | <img width="800"/> | [:arrow_heading_down:](#proto) |
|-|-|-|

**Перечислимые** свойства экземпляра - это свойства, которые итерируются оператором цикла  **`for...in`**

* :warning: По умолчанию свойства нативных объектов, создаваемых в процессе выполнения кода, являются перечислимыми 
* :warning: Свойства встроенных нативных объектов являются неперечислимыми

```javascript
for ( var x in figure )
     console.log ( x )
```
В консоль будут выведены
```javascript
type
size
color
```
:memo: Итак, с помощью литерала объекта можно создать **публичные собственные перечислимые** свойства экземпляра

Очевидно, у каждого из этих терминов есть антоним, т.е. должны существовать **приватные**, *несобственные* и **неперечислимые** свойства

* **Приватные свойства** можно создать с помощью **конструктора**
* *Несобственные свойства* - это **унаследованные** свойства
* Что касается создания **неперечислимых** свойств - мы еще вернемся к этой теме далее



<a name="public-private"></a>
## 🎓 Публичные и приватные свойства и методы экземпляров

| [:arrow_heading_up:](#constructor) | <img width="800"/> | [:arrow_heading_down:](#Object) |
|-|-|-|

:white_square_button: Все свойства, объявленные в конструкторе с ключевым словом  **`this`**, будут публичными  ( *name*, *age*, *changeName* )

:white_square_button: Все свойства, объявленные в конструкторе с ключевым словом  var или function, будут приватными  ( defaultName, showName )

`приватные свойства ( и методы ) экземпляра недоступны извне`

:coffee:
```javascript
var  Girl = function ( name, age ) {

    var defaultName = "Jane"

    this.name = name || defaultName
    this.age = age || 25

    function showName ( name ) {
        console.log ( `Меня зовут ${ name }` )
    }

    this.changeName = function ( newName ) {
        this.name = newName
        showName ( this.name )
    }
}
```
В публичных методах экземпляра  **`this`**  будет ссылкой на контект вызова `( экземпляр, в контексте которого вызван метод )`
```javascript
var lena = new Girl ( "Лена", 18 )
lena.changeName
```
:warning: в приватных методах экземпляра контекстом вызова будет *глобальный объект* **`window`**

( т.е. внутри метода  **showName**  **`this`**  будет ссылкой на объект **`window`** )

:coffee:
```javascript
var girls = []

girls [ 0 ] = new Girl ( "Лена", 18 )
girls [ 1 ] = new Girl ( "Марина", 20 )
```
<a name="Object"></a>
## 🎓 Object

| [:arrow_heading_up:](#public-private) | <img width="800"/> | [:arrow_heading_down:](#bottom) |
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

[:briefcase: Упражнения](https://docs.google.com/forms/d/e/1FAIpQLSf-i0cr7AEXzSJrggqS1AgZz-OBW5ES-l_ntO1R4Q7XZqZaEw/viewform)
***
[:link: MDN](https://developer.mozilla.org/ru/docs/Web/JavaScript/Reference/Global_Objects)