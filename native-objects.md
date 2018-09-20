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

| Хотя всегда есть [:coffee: способ](object-literal-closure) это обойти :wink: |
|-|

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

Итак, *`собственные свойства экземпляра - это свойства, инкапсюлированные в этом экземпляре`*

<code>( свойства  **`type`**,  **`size`**  и  **`color`**  являются **собственными** свойствами экземпляров  **`figure`**  и  **`figure2`** потому, что их значения локализованы внутри "капсюлы" под именем экземпляра )</code>
```javascript
figure.type       // "Окружность"
figure2.type      // "Треугольник"
```

<a name="enumerable"></a>
## 🎓 Перечислимые свойства объекта

| [:arrow_heading_up:](#own) | <img width="800"/> | [:arrow_heading_down:](#proto) |
|-|-|-|

**Перечислимые** свойства экземпляра - это свойства, которые итерируются оператором цикла  **`for...in`**
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

**Приватные свойства** можно создать с помощью **конструктора**

*Несобственные свойства* - это **унаследованные** свойства

Что касается создания неперечислимых свойств - мы еще вернемся к этой теме далее

<a name="proto"></a>
## 🎓 Унаследованные свойства экземпляра

| [:arrow_heading_up:](#enumerable) | <img width="800"/> | [:arrow_heading_down:](#Object) |
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

:heavy_exclamation_mark: Ого, а оно полностью совпадает с тем, что мы обнаружили ранее в свойстве **`__proto__`** экземпляра **figure**

Пойдем далее, и заглянем в экземпляр **figure2**

Там мы тоже обнаружим свойство **`__proto__`**

и его содержимое будет точно таким же, как у экземпляра **figure**

Создадим пустой объект
```javascript
var obj = {}
```
и развернем его в консоли

Ба! знакомые все лица!

Мы видим все то же свойство **`__proto__`**

У всех нативных объектов JS по умолчанию есть это свойство

Разверните в консоли объект **Array**
```javascript
console.dir ( Array )
```
и вы увидите цепочку протипов ( сколько вложенных свойств **`__proto__`** будет у объекта **Array** ? )

Последним "звеном" в цепочке прототипов всегда будет **`Object`**

"Жирная точка" в конце цепочки прототипов - **`null`**

:warning: Свойство **`__proto__`** - это ссылка на свойство **`prototype`** конструктора **`Object`**

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