<a name="top"></a>
# :mortar_board: Модель наследования JS

| [:arrow_double_down:](#bottom) | <img width="800"/> | [:arrow_heading_down:](#Object) |
|-|-|-|

Модель наследования **_JS_** основана на понятии **прототипа**

**Прототип** - это **объект**

> Предшественником JS в плане прототипной модели наследования является язык [<img src="http://www.selflanguage.org/img/self-logo.png" width="50"/>](http://www.selflanguage.org/)

Стремление сделать синтаксис Javascript похожим на **Java** привело к появлению в языке таких "рудиментов", как ключевое слово **`new`**, лишенное практического смысла в языках с прототипной моделью наследования и создающее иллюзию наличия классов

Класс - это абстракция, объект - это воплощение

<table><tr><td>
  <table><tr><td><h3>
        :bangbang: Уважаемые дамы и господа<br/> 
        Курение вредит вашему здоровью,<br/>
        а курение конкретно в этом подъезде может вообще резко подорвать его
  </h3></td></tr></table>
</td></tr></table>

> :wink: В английском языке для абстракций есть артикль _`a`_, а для конкретных воплощений ( объектов ) _`the`_

Чашка - это абстракция, но чашка, из которой ты в данный момент пьешь чай - это объект, т.е. конкретное воплощение абстракции "чашка"

Абстракция "чашка" вложена в другую абстракцию - "емкость", поскольку емкостью также является кастрюля, и цистерна, и колба

Таким образом, класс "чашка" наследует от класса "емкость"

Так вот:
 
#### :heavy_exclamation_mark: в JS наследование происходит от объекта, а не класса, 

т.е. от конкретного воплощения, а не от абстракции 

Между тем для создания объекта в JS нам достаточно сделать следующее:

#### :coffee: 1

```javascript
var sample = {
    name: "master"
}
```

При этом у нашего объекта "магическим образом" появляется свойство **_`__proto__`_**:

```console
▼ { name: "master" }
    name: "master"
  ► __proto__: Object
```

Это свойство является ссылкой на встроенный нативный объект **`Object`**

:warning: На _объект_, а не _класс_

Таким образом, наследование уже свершилось

**`sample`** наследовал от **`Object`**

Чтобы посмотреть, что же он унаследовал, давайте развернем свойство **_`__proto__`_** в консоли:

```console
▼ { name: "master" }
    name: "master"
  ► __proto__:
      ► constructor: ƒ Object()
      ► hasOwnProperty: ƒ hasOwnProperty()
      ► isPrototypeOf: ƒ isPrototypeOf()
      ► propertyIsEnumerable: ƒ propertyIsEnumerable()
      ► toLocaleString: ƒ toLocaleString()
      ► toString: ƒ toString()
      ► valueOf: ƒ valueOf()
      ► __defineGetter__: ƒ __defineGetter__()
      ► __defineSetter__: ƒ __defineSetter__()
      ► __lookupGetter__: ƒ __lookupGetter__()
      ► __lookupSetter__: ƒ __lookupSetter__()
      ► get __proto__: ƒ __proto__()
      ► set __proto__: ƒ __proto__()
```

Например, "наследство" включает метод **_`hasOwnProperty`_**

Давайте попробуем его использовать:

```javascript
sample.hasOwnProperty( "name" )   // true
```

О-па, мы получили `true`, т.е. метод работает!

Значит, наследство благополучно получено :smile_cat:

И никаких классов!

:interrobang: зачем нам вообще нужно ключевое слово **`new`**

________________________________________________________________________

#### :coffee: 2

Что мы знаем о функциях JS ?

1. в момент вызова у них появляется ссылка на контекст вызова - **`this`**
2. у них есть свойство **`prototype`**

Как же сделать функцию конструктором?

Очевидно, нужно создать объект, на который будет ссылаться **`this`**


Отсюда логически следует, что любая функция JS может быть конструктором и без ключевого слова **`new`**

```javascript
function SampleClass () {
    this.name = "master"
}

var sample = new SampleClass ()
```

в результате у экземпляра `sample` появляется цепочка прототипов: 

```console
▼ SampleClass { name: "master" }
    name: "master"
  ▼ __proto__:
      constructor: ƒ SampleClass()
    ► __proto__: Object
```

первое свойство **_`__proto__`_** является ссылкой на **_объект_**, который содержит:

* свойство **_`constructor`_**
    > ссылка на функцию **`SampleClass`**
* еще одно свойство **_`__proto__`_**
    > ссылка на **`Object`**

Итак, наша цепочка прототипов состоит уже из двух звеньев

и опять никаких классов...

Так зачем нам ключевое слово **`new`** ?

Только для имитации классовой модели наследования, которой нет...

А что у нас в действительности есть ?

_________________________________________________________________________________

<a name="constructor"></a>
## :mortar_board: Что такое конструктор

Любая функция может быть вызвана с ключевым словом **`new`**

Вопрос в том, что происходт 

_________________________________________________________________________________

<a name="Object"></a>
## :mortar_board: Конструктор `Object`

| [:arrow_heading_up:](#top) | <img width="800"/> | [:arrow_heading_down:](#static) |
|-|-|-|

Прототипом всех нативных объектов является **`Object`**

У конструктора **`Object`**  есть свойство  **_`prototype`_**

Это "генокод" всех создаваемых объектов JS

Он передается им при "рождении"

Все свойства и методы, перечисленные в свойстве **_`prototype`_** конструктора **`Object`**, будут доступны в каждом экземпляре создаваемого нативного объекта JS

______________________________________________________________________

#### :coffee: 3

```javascript
var master = { name: "master" }
var child = { name: "child" }
var obj = {}
obj.__proto__ = child
obj.__proto__.__proto__ = master
```

Экземпляр **obj** в консоли:

```console
▼ {}
    ▼ __proto__: 
        name: "child"
      ▼ __proto__: 
          name: "master"
        ► __proto__: Object
```

Добавим метод **_setName_** объекту **`__proto__`**

```javascript
obj.__proto__.setName = function ( val ) {
    this.name = val
}
```

и посмотрим на объект **__child__** ( `который мы не трогали` ) в консоли:

```console
▼ { name: "child", setName: ƒ }
    name: "child"
  ▸ setName: ƒ ( val )
  ▸ __proto__: Object
```

Это свидетельствует о том, что свойство **`__proto__`** экземпляра является **ссылкой** на **объект прототипа**

В обоих примерах легко отслеживается цепочка прототипов

Последним "звеном" в этой цепочке будет [**`Object`**](#Object) - "Адам" всех нативных объектов JS

Заканчивается цепочка прототипов **`null`**

Если возникнет необходимость создать объект без прототипа, можно проделать следующее:

```javascript
var obj = Object.create( null )
```

или так:

```javascript
var obj = {}
obj.__proto__ = null
```


Thus, свойство **`__proto__`** есть у любого объекта, и это свойство - _ссылка_ на объект

>> :question: Где будет находиться свойство `crocodile` после выполнения кода:

```javascript
var obj = {}
obj.__proto__.crocodile = "crocodile"
```



```javascript
var obj = {}

obj.valueOf ()
obj.toString ()
```

<a name="static"></a>
### :mortar_board: Статические свойства  Object

| [:arrow_heading_up:](#Object) | <img width="800"/> | [:arrow_heading_down:](#Object_proto) |
|-|-|-|

`( собственные свойства объекта  Object )`

А вот свойства и методы объекта  **Object**, которые не находятся в свойстве  **`prototype`**, не наследуются экземплярами, и могут быть вызваны только как свойства и методы объекта  **Object**:

Поскольку они не передаются экземплярам, их называют **_статическими_**

#### :coffee: 3

```javascript
var obj = {
     name: "test",
     type: "sample"
}
obj.__proto__.crocodile = "crocodile"

Object.getOwnPropertyNames ( obj )
Object.keys ( obj )
...
```
Метод **`Object.getOwnPropertyNames`** возвращает массив всех *собственных* свойств объекта, переданного в качестве аргумента метода

```console
(2) ["name", "type"]
```

Метод **`Object.keys`** возвращает массив всех *собственных перечислимых* свойств объекта, переданного в качестве аргумента метода

```console
(2) ["name", "type"]
```

Выведите в консоль 

```javascript
Object.keys ( obj )
Object.getOwnPropertyNames ( obj )
```

Ни первый, ни второй метод не выведут свойство  **_crocodile_**, потому что это свойство не собственное ( оно находится в прототипе, т.е. является унаследованным )

А вот если итерировать **obj** с помощью цикла **`for ... in`**, мы получим свойство **_crocodile_**

Это означает, что свойство, добавленное нами в прототип объекта, не является собственным, но является перечислимым

<a name="Object_proto"></a>
### Object.`__proto__`

| [:arrow_heading_up:](#static) | <img width="800"/> | [:arrow_heading_down:](#bottom) |
|-|-|-|

Выведем в консоль свойство **`__proto__`** конструктора **Object**
```console
▼ __proto__: ƒ ()
    ► apply: ƒ ()
      arguments: (...)
    ► bind: ƒ ()
    ► call: ƒ ()
      caller: (...)
    ► constructor: ƒ ()
      length: 0
      name: ""
    ► toString: ƒ ()
    ► Symbol(Symbol.hasInstance): ƒ ()
    ► get arguments: ƒ ()
    ► set arguments: ƒ ()
    ► get caller: ƒ ()
    ► set caller: ƒ ()
    ► __proto__: Object
```

а теперь выведем в консоль свойство **`prototype`** конструктора **Function**

```console
▼ prototype: ƒ ()
    ► apply: ƒ ()
      arguments: (...)
    ► bind: ƒ ()
    ► call: ƒ ()
      caller: (...)
    ► constructor: ƒ ()
      length: 0
      name: ""
    ► toString: ƒ ()
    ► Symbol(Symbol.hasInstance): ƒ ()
    ► get arguments: ƒ ()
    ► set arguments: ƒ ()
    ► get caller: ƒ ()
    ► set caller: ƒ ()
    ► __proto__: Object
```

Очевидно, что **Object** наследует от **Function**, что логично, поскольку **Object** - это конструктор, т.е. функция

```javascript
console.dir ( Object.__proto__.constructor.name )
// Function
```

При этом объект **Function.prototype** наследует от **Object** 

( свойство **`Function.prototype.__proto__`** является ссылкой на **`Object.prototype`** )

| | ссылка на |
|-|-| 
| `Object.__proto__` | `Function.prototype` |
| `Function.prototype.__proto__` | `Object.prototype` |

______________________________________________________________________________________________

| [:arrow_heading_up:](#Object_proto) | <a name="bottom"><img width="800"/></a> | [:arrow_double_up:](#top) |
|-|-|-|

_______________________________________________________________________________________________

[:briefcase: Упражнения](https://docs.google.com/forms/d/e/1FAIpQLSf-i0cr7AEXzSJrggqS1AgZz-OBW5ES-l_ntO1R4Q7XZqZaEw/viewform)

_______________________________________________________________________________________________

[:link: MDN](https://developer.mozilla.org/ru/docs/Web/JavaScript/Reference/Global_Objects)
[:link: MDN](https://developer.mozilla.org/ru/docs/Web/JavaScript/Introduction_to_Object-Oriented_JavaScript)