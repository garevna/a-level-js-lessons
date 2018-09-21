<a name="top"></a>
# 🎓 Модель наследования в JS

| [:arrow_double_down:](#bottom) | <img width="800"/> | [:arrow_heading_down:](#host) |
|-|-|-|

||
|-|
| [:arrow_forward:](#literal) `Литерал объекта` |
| &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;[:arrow_forward:](#own) `Собственные свойства` |
| &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;[:arrow_forward:](#enumerable) `Перечислимые свойства` |
| &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;[:arrow_forward:](#proto) `Унаследованные свойства` |
| [:arrow_forward:](#constructor) `Конструктор` |

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

| [:arrow_heading_up:](#top) | <img width="800"/> | [:arrow_heading_down:](#literal) |
|-|-|-|

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

Создать нативный объект JS можно двумя способами:

* С помощью литерала объекта
* С помощью конструктора

<a name="literal"></a>
## 🎓 Литерал объекта

| [:arrow_heading_up:](#host) | <img width="800"/> | [:arrow_heading_down:](#own) |
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

<a name="proto"></a>
### 🎓 Унаследованные свойства экземпляра

| [:arrow_heading_up:](#enumerable) | <img width="800"/> | [:arrow_heading_down:](#constructor) |
|-|-|-|

Если "развернуть" экземпляр **figure** в консоли, то помимо собственных перечислимых свойств *`color`*, *`size`* и *`type`* мы увидим свойство **`__proto__`**, которое не было выведено в консоль, когда мы итерировали объект оператором `for...in`
```javascript
▼{ type: "Окружность", size: 100, color: "red" }
    color:"red"
    size:100
    type:"Окружность"
  ► __proto__:Object
```
Вывод - это свойство **неперечислимое**

Разберемся, является ли это свойство собственным

Значением этого свойства является ссылка на встроенный нативный объект ( конструктор ) **`Object`**

Если развернуть свойство **`__proto__`**, то в консоли мы увидим следующую картину:
```javascript
▼ __proto__:
   ► constructor: ƒ Object()
   ► hasOwnProperty: ƒ hasOwnProperty()
   ► isPrototypeOf: ƒ isPrototypeOf()
   ► propertyIsEnumerable: ƒ propertyIsEnumerable()
   ► toLocaleString: ƒ toLocaleString()
   ► toString: ƒ toString()
   ► valueOf: ƒ valueOf()
   ► _defineGetter__: ƒ __defineGetter__()
   ► __defineSetter__: ƒ __defineSetter__()
   ► __lookupGetter__: ƒ __lookupGetter__()
   ► __lookupSetter__: ƒ __lookupSetter__()
   ► get __proto__: ƒ __proto__()
   ► set __proto__: ƒ __proto__()
```
Первое, что обращает внимание - наш экземпляр создан конструктором **`Object`**:
```
constructor: ƒ Object()
```
Давайте развернем **`Object`** в консоли 
```
( для этого используем метод  console.dir,
поскольку  Object() - это конструктор,
т.е. функция,
и метод console.log () вернет нам

     ƒ Object() { [native code] }
```
Обратите внимание на свойство **`prototype`** конструктора **`Object`**

Это объект

Развернем этот объект, и посмотрим на его содержимое:
```javascript
▼ prototype:
   ▶ constructor: ƒ Object()
   ▶ hasOwnProperty: ƒ hasOwnProperty()
   ▶ isPrototypeOf: ƒ isPrototypeOf()
   ▶ propertyIsEnumerable: ƒ propertyIsEnumerable()
   ▶ toLocaleString: ƒ toLocaleString()
   ▶ toString: ƒ toString()
   ▶ valueOf: ƒ valueOf()
   ▶ _defineGetter__: ƒ __defineGetter__()
   ▶ __defineSetter__: ƒ __defineSetter__()
   ▶ __lookupGetter__: ƒ __lookupGetter__()
   ▶ __lookupSetter__: ƒ __lookupSetter__()
   ▶ get __proto__: ƒ __proto__()
   ▶ set __proto__: ƒ __proto__()
```

:heavy_exclamation_mark: Ого, а оно полностью совпадает с тем, что мы обнаружили ранее в свойстве **`__proto__`** экземпляра **figure**

Пойдем далее, и заглянем в экземпляр **figure2**

Там мы тоже обнаружим свойство **`__proto__`**

и его содержимое будет точно таким же, как у экземпляра **figure**

Создадим пустой объект
```javascript
var obj = {}
```
и развернем его в консоли

Ба! знакомые все лица! :wink:

Мы видим все то же свойство **`__proto__`**

У всех нативных объектов JS по умолчанию есть это свойство

:warning: Свойство **`__proto__`** создаваемых *литералом* объектов JS - это ссылка на свойство **`prototype`** конструктора **`Object`**

А что там со *встроенными* нативными объектами?

Разверните в консоли объект **Array**
```javascript
console.dir ( Array )
```
и вы увидите цепочку протипов

Последним "звеном" в цепочке прототипов всегда будет **`Object`**
```javascript
console.dir ( Array.__proto__.__proto__ )  // Object
```
"Жирная точка" в конце цепочки прототипов - **`null`**

Аналогичная картина будет с любым встроенным конструктором

:memo: У встроенных объектов, которые не являются конструкторами ( типа *Math* ) цепочка протипов будет короче - свойство **`__proto__`** будет ссылкой на **`Object`**

#### :briefcase: **Задание**
выведите в консоль все нативные встроенные объекты и отследите в цепочке прототипов ссылку на **`Object`**

<a name="constructor"></a>
## 🎓 Конструктор

| [:arrow_heading_up:](#proto) | <img width="800"/> | [:arrow_heading_down:](#public-private) |
|-|-|-|

Настало время разобраться с тем, что же такое конструктор

:white_square_button: Это функция ( *`отсюда следует, что там можно что-то спрятать`* )

:white_square_button: Чтобы она работала как **конструктор**, при вызове  перед ее именем нужно указать ключевое слово **`new`**, и в этом случае:
* ей не нужен оператор ~~return~~, но при этом она вернет **экземпляр** объекта
* внутри нее **`this`** будет указывать не на ~~глобальный объект~~, а на возвращаемый **экземпляр**
* все объявленные внутри нее переменные и функции будут *инкапсюлированы* в созданном **экземпляре** ( *`т.е. будут собственными свойствами и методами экземпляра`* )
* у нее будет свойство **`prototype`** ( *`которое бывает только у функций`* )
* то, что мы поместим в свойство **`prototype`**, *унаследуют* все экземпляры

:white_square_button: Имена конструкторов принято начинать с заглавной литеры ( *`потому что по-сути имя конструктора - это имя класса`* )

:coffee: 1
```javascript
function Sample ( params ) {}

var obj = new Sample()
```
Выведем в консоль экземпляр **obj**:
```javascript
▼ Sample {}
    ▼ __proto__:
        ▶ constructor: ƒ Sample( params )
        ▶ __proto__: Object
```
* мы создали пустой объект класса **Sample** `( точнее, мы создали экземпляр объекта )`
* у него нет собственных свойств `( потому что в конструкторе ничего не объявлено )`
* у него есть *цепочка прототипов* - это вложенные одно в другое свойства  **`__proto__`**
* первое "звено" в цепочке прототипов - это ссылка на свойство **`prototype`** функции-конструктора **Sample**
* свойство **`prototype`**  функции-конструктора **Sample**  является объектом
* это значит, что у него тоже есть свойство **`__proto__`**
* это вложенное свойство **`__proto__`** - следующее "звено" в цепочке прототипов
* оно является ссылкой на **Object**

```javascript
Sample.prototype
```
```
▼ {constructor: ƒ}
    ▶ constructor: ƒ Sample( params )
    ▶ __proto__: Object
```

Мы можем добавить свойства в **`prototype`** конструктора **Sample**
```javascript
Sample.prototype.setNewProperty = function ( propName, propValue ) {
    this [ propName ] = propValue
}
```
Если теперь вывести в консоль экземпляр **obj**, то в его свойстве **`__proto__`** мы обнаружим новое перечислимое свойство **setNewProperty** ( *унаследованный метод* )

Вызовем этот метод:
```javascript
obj.setNewProperty ( "name", "Petro" )
```
и обнаружим, что у экземпляра **obj** появилось новое *собственное перечислимое* свойство **name**

:warning: При обращении к свойству сначала оно ищется среди собственных свойств экземпляра, и если не будет найдено, то поиск будет продолжен среди свойств прототипа, и так далее, пока не закончится цепочка прототипов

:white_square_button: Конструктор позволяет создавать экземпляры объектов, имеющих не только публичные, но и приватные свойства и методы

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

[:briefcase: Упражнения]()
***
[:link: MDN](https://developer.mozilla.org/ru/docs/Web/JavaScript/Reference/Global_Objects)