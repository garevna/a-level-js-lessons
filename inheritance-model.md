<a name="top"></a>
# :mortar_board: Модель наследования JS

Модель наследования **_JS_** основана на понятии **прототипа**

**Прототип** - это **объект**

> Предшественником JS в плане прототипной модели наследования является язык [<img src="http://www.selflanguage.org/img/self-logo.png" width="50"/>](http://www.selflanguage.org/)

Стремление сделать синтаксис Javascript похожим на **Java** привело к появлению в языке таких "рудиментов", как ключевое слово **`new`**, лишенное практического смысла в языках с прототипной моделью наследования и создающее иллюзию наличия классов

Класс - это абстракция, объект - это воплощение

<table><tr><td>
  <table><tr><td><img src="https://github.com/garevna/js-course/blob/master/images/lessons/smoke-monkey.gif?raw=true" width="200"/></td><td><h3>
        :bangbang: Уважаемые дамы и господа<br/> 
        Курение вредит вашему здоровью,<br/>
        а курение конкретно в этом подъезде может вообще резко подорвать его
  </h3></td></tr></table>
</td></tr></table>

| :coffee: Класс и объект |
|:-|
| <br/>Чашка - это абстракция, но чашка, из которой ты в данный момент пьешь чай - это объект, т.е. конкретное воплощение абстракции "чашка"<br/><br/>Для создания конкретного экземпляра класса "чашка" в классической модели используется ключевое слово **`new`**<p><br/></p> |

| :coffee: Наследование в классической модели |
|:-|
| <br/>Абстракция "чашка" вложена в другую абстракцию - "емкость", поскольку емкостью также является кастрюля, и цистерна, и колба<br/><br/>Таким образом, класс "чашка" наследует от класса "емкость"<p><br/></p> |

Так вот:
 
:heavy_exclamation_mark: **в JS наследование происходит от объекта, а не класса**, 

**т.е. от конкретного воплощения, а не от абстракции**

Другими словами, **JS** - очень конкретный язык :wink: 

_____________________________________________________________

## :mortar_board: prototype

Для создания объекта в JS нам достаточно сделать следующее:

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

Это свойство является ссылкой на объект **`prototype`**, который реально существует

внутри встроенного нативного объекта **`Object`**

На мой взгляд, это вполне соотносится с реальностью:

<table><tr><td>можно ли получить наследство от класса "дедушка" ? </td><td>
<img src="https://github.com/garevna/js-course/blob/master/images/lessons/cat-no.gif?raw=true" width="100"/>
</td><td>
Даже кошке понятно, что только конкретный дедушка может оставить вам наследство
</td></tr></table>

Таким образом, **`sample`** наследовал от **`Object`**

Чтобы посмотреть, что же унаследовал **`sample`** от **`Object`**, давайте развернем его свойство **_`__proto__`_** в консоли:

<a name="proto"></a>

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

Сам "дедушка" **`Object`** не является наследством

Логично, что наследство "дедушки" где-то хранится...

Оно хранится в свойстве **`prototype`** "дедушки" ( объекта **`Object`** )

Проверим:

<a name="prototype"></a>
###### Object.prototype

```console
▼ {constructor: ƒ, __defineGetter__: ƒ, __defineSetter__: ƒ, hasOwnProperty: ƒ, __lookupGetter__: ƒ, …}
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

:interrobang: зачем нам вообще нужно ключевое слово **`new`** ?

Итак, сделаем выводы:

* "наследство" хранится в свойстве **`prototype`** "дедушки"
* "наследник" получает свойство **`__proto__`**
* свойство **`__proto__`** является ссылкой на объект "наследство" ( **`prototype`** )

_________________________________________________________________

## :mortar_board: constructor

Теперь обратим внимание на первое, что мы видим в объекте [**`prototype`**](#prototype) и в свойстве [**`__proto__`**](#proto) экземпляра

Это свойство **`constructor`**

Значение у него `ƒ Object()`

Буковка `ƒ` говорит нам, что это функция

`Object()` говорит нам, что эта функция - **`Object`**

Итак, мы выяснили, что встроенный нативный объект **`Object`**:

* является функцией
* выступает в роли **`constructor`**

Таким образом, в объекте "наследства" ( **`prototype`** ) есть ссылка на "дедушку", от которого наследство получено

Кроме того, "дедушка" является функцией

И у "дедушки" вполне конкретная роль - он **`constructor`**

Теперь вопрос: а что сделало его "конструктором" ?

___________________________________________________________________

#### :coffee: 2

Проделаем следующий "финт":

```javascript
console.dir ( function Sigma () {} )
```

и обратим внимание на наличие свойства **`prototype`**,

в котором есть свойство **`constructor`**

```console
▼ ƒ Sigma()
    arguments: null
    caller: null
    length: 0
    name: "Sigma"
  ▼ prototype:
    ► constructor: ƒ Sigma()
    ► __proto__: Object
  ► __proto__: ƒ ()
```

Куда показывает свойство **`constructor`** ? - на функцию **_`Sigma`_**

То есть она по дефолту уже конструктор

У нее есть все, чтобы выступать в роли "дедушки"

Давайте именовать такие объекты "**конструкторы**", а не "_дедушки_" - это ближе к семантике языка

И опять обращаю ваше внимание на тот факт, что у нас все совершенно конкретно, нет никаких абстракций, никаких классов - только объекты ( функции тоже объекты )

Совершенно конкретная функция **_`Sigma`_** уже готова предоставить своим наследникам свой совершенно конкретный объект **`prototype`** в качестве наследства

Осталось только вызвать ее с ключевым словом **`new`**:

```javascript
var obj = new Sigma
```

и мы получим наследника...

А можно ли без **`new`** передать наследство ?

```javascript
function Sigma () {}
Sigma.prototype.say = function () {
    console.log ( "I'm the instance of Sigma: ", this instanceof Sigma )
}
var obj = {}
obj.__proto__ = Sigma.prototype
```

И у нас все в шоколаде!

Одна строчка:

```javascript
obj.__proto__ = Sigma.prototype
```

сделала объект **`obj`** наследником **`Sigma`**

Причем оператор **_`instanceof`_** совершенно благопристойно возвращает нам `true`, как будто **`obj`** является экземпляром класса **`Sigma`**:

```javascript
obj.say()
```

###### Результат в консоли:

```
I'm the instance of Sigma:  true
```

Но ведь не существует никакого класса **`Sigma`** - совершенно справедливо заметите вы

И правильно сделаете

**`Sigma`** - просто функция, а не класс

Мы ей дали имя, начинающееся с литеры в верхнем регистре, чтобы придать ей "статус класса" - чистая липа

На самом деле все, что произошло - это помещение ссылки на объект **`prototype`** функции **`Sigma`** в свойство **_`__proto__`_** объекта **`obj`**

Зачем же имитировать классовую модель, пряча "под капот" истинную природу наследования в JS ?

Это сбивает с толку, приводит к непониманию истинной природы происходящего

В этом примере мы столкнулись с еще одним важным явлением - **_`this`_**

Ранее мы уже сталкивались с ключевым словом **_`this`_** в контексте исполнения функций

Давайте заглянем еще разок

_________________________________________________________________________

## :mortar_board: this

Итак, мы уже поняли, что любая функция в JS является конструктором по своей сути, поскольку имеет контейнер для "наследства" - свойство **`prototype`**

Но что еще мы знаем о функциях JS ?

Мы знаем, что в момент вызова у них появляется ссылка на контекст вызова - **`this`**

Вы заметили, что в примере выше внутри функции **_`say`_** использовано это ключевое слово ?

Сама функция **_`say`_** находится внутри объекта **`prototype`** функции **`Sigma`**

Давайте изменим функцию **_`say`_**, не трогая все остальное:

```javascript
Sigma.prototype.say = function () {
    console.log ( "My name is ", this.name )
}
```

и добавим объекту **`obj`** свойство **_`name`_**:

```javascript
obj.name = "Google"
```

Теперь вызовем метод **_`say`_**, который унаследовал объект **`obj`**:

```javascript
obj.say()
```

###### Результат в консоли:

```
My name is  Google
```

Тыц, _`this.name`_ оказался "Google" !

т.е. `this` является ссылкой на **`obj`** !

Это как?

Да все правильно и закономерно:

* во-первых, метод **_`say`_** доступен объекту **`obj`**, потому что унаследован
* а во-вторых, при вызове

```javascript
obj.say()
```

мы конкретно указали контекст вызова

Другими словами, когда один из наследников вызывает унаследованный метод, то контекстом вызова этого метода будет данный конкретный наследник

Кто вызвал - на того и покажет **`this`** внутри метода

Ведь **`this`** - это же ссылка на **контекст вызова**

То есть каждый наследник может попользоваться, и в момент, когда он пользуется, этот метод принадлежит ему

ферштейн? :wink:

__________________________________________________________________________

## :mortar_board: Цепочка прототипов

Обратите внимание, что в предыдущем примере мы создали объект **`obj`** с двумя вложенными свойствами **_`__proto__`_**

```console
▼ Sigma {name: "Google"}
    name: "Google"
  ▼ __proto__:
    ► say: ƒ ()
    ► constructor: ƒ Sigma()
    ► __proto__: Object
```

первое свойство **_`__proto__`_** является ссылкой на **_объект_**, который содержит:

* свойство **_`say`_**
    * функция, которая выводит в консоль значение _`this.name`_ 
* свойство **_`constructor`_**
    > ссылка на функцию **`Sigma`**
* еще одно свойство **_`__proto__`_**
    > ссылка на **`Object`**

Итак, наша цепочка прототипов состоит уже из двух звеньев

Этих звеньев может быть значительно больше

Что это означает?

Что при обращении к какому-либо свойству ( методу ) экземпляра **`obj`** поиск будет происходить сверху вниз по цепочке прототипов

Значит, если свойство с таким именем есть на нескольких уровнях, то будет использовано значение, которое находится выше остальных в цепочке прототипов

_________________________________________________________________________________

<a name="Object"></a>
## :mortar_board: Конструктор `Object`

| [:arrow_heading_up:](#top) | <img width="800"/> | [:arrow_heading_down:](#static) |
|-|-|-|

**`Object`** - это "Адам" всех объектов в JS

Корень, от которого все произрастает

Ссылка на его свойство **_`prototype`_** будет последним звеном в любой цепочке прототипов,

перед "жирной точкой" в конце - **`null`**

Однако у вас полная свобода творить

Вы можете создать объект без прототипа, например, так:

```javascript
var obj = Object.create( null )
```

( сразу поставили "жирую точку" )

или так:

```javascript
var obj = {}
obj.__proto__ = null
```

_________________________________________________________________________________________


### :mortar_board: [Статические свойства `Object`](Object-static-props)
###### собственные свойства конструктора `Object`

Свойства и методы объекта  **Object**, которые не находятся в свойстве  **`prototype`**, не наследуются экземплярами, и могут быть вызваны только как свойства и методы объекта  **Object**:

```
▼ Object()
    arguments: (...)
  ► assign: ƒ assign()
    caller: (...)
  ► create: ƒ create()
  ► defineProperties: ƒ defineProperties()
  ► defineProperty: ƒ defineProperty()
  ► entries: ƒ entries()
  ► freeze: ƒ freeze()
  ► fromEntries: ƒ fromEntries()
  ► getOwnPropertyDescriptor: ƒ getOwnPropertyDescriptor()
  ► getOwnPropertyDescriptors: ƒ getOwnPropertyDescriptors()
  ► getOwnPropertyNames: ƒ getOwnPropertyNames()
  ► getOwnPropertySymbols: ƒ getOwnPropertySymbols()
  ► getPrototypeOf: ƒ getPrototypeOf()
  ► is: ƒ is()
  ► isExtensible: ƒ isExtensible()
  ► isFrozen: ƒ isFrozen()
  ► isSealed: ƒ isSealed()
  ► keys: ƒ keys()
    length: 1
    name: "Object"
  ► preventExtensions: ƒ preventExtensions()
  ► prototype: {constructor: ƒ, __defineGetter__: ƒ, __defineSetter__: ƒ, hasOwnProperty: ƒ, __lookupGetter__: ƒ, …}
  ► seal: ƒ seal()
  ► setPrototypeOf: ƒ setPrototypeOf()
  ► values: ƒ values()
  ► __proto__: ƒ ()
```

Поскольку они не передаются экземплярам, их называют **_статическими_**

#### :coffee: 3

Воспользуемся методом **`Object.create`** для создания нового экземпляра объекта:

```javascript
var sample = Object.create ( { type: "figure" } )
sample.name = "circle"
```

и выведем его в консоль:

```console
▼ { name: "circle" }
    name: "circle"
  ▼ __proto__: 
        type: "figure"
      ► __proto__: Object
```

Как видите, мы опять обошлись без ключевого слова **`new`**, 

и благополучно создали экземпляр **`sample`**, 

у которого первым звеном в цепочке прототипов является ссылка на безымянный объект `{ type: "figure" }`, 

а далее следует ссылка на свойство **`prototype`** конструктора **`Object`**

_________________________________________

#### :coffee: 4

Воспользуемся методом **`Object.setPrototypeOf()`**:

```javascript
var sample = {
    name: "circle"
}
var sample = Object.setPrototypeOf (
    sample,
    { type: "figure" }
)
```

Результат будет абсолютно такой же, как в предыдущем примере, и мы опять обошлись без ключевого слова **`new`**

"Похимичим" далее:

```javascript
var test = Object.create ( sample )
test.draw = function () {
    console.log ( this.name )
}
```

Новый экземпляр `test` наследует от объекта `sample` все, включая его цепочку прототипов:

```console
▼ { draw: ƒ }
    draw: ƒ ()
  ▼ __proto__: 
        name: "circle"
      ► __proto__: 
            type: "figure"
          ► __proto__: Object
```

Правда, при этом у нас нет имитации классов ( в цепочке прототипов отсутствует свойство **`constructor`** ) и оператор **`instanceof`** становится бесполезен

Зато все по-честному :wink:

_______________________________________________________________________

### :mortar_board: `Object`._`__proto__`_

Выведем в консоль свойство **_`__proto__`_** конструктора **`Object`**

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

_______________________________________________________________________________________________

[:briefcase: Упражнения](https://docs.google.com/forms/d/e/1FAIpQLSf-i0cr7AEXzSJrggqS1AgZz-OBW5ES-l_ntO1R4Q7XZqZaEw/viewform)

_______________________________________________________________________________________________

[:link: MDN](https://developer.mozilla.org/ru/docs/Web/JavaScript/Reference/Global_Objects)
[:link: MDN](https://developer.mozilla.org/ru/docs/Web/JavaScript/Introduction_to_Object-Oriented_JavaScript)