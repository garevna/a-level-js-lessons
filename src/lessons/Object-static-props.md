# ![ico-30 study] Статические методы конструктора Object

__________________________________

## ![ico-25 icon] Object.assign()

Метод копирует значения всех собственных перечислимых свойств
из одного или более исходных объектов  **~sources~**  в целевой объект **~target~**

Возвращает целевой объект **~target~**

~~~js
Object.assign ( target, ...sources )
~~~

![ico-20 warn] Копируются только **_собственные перечислимые_** свойства
![ico-20 warn] ~Object.assign~ осуществляет неглубокое копирование
^^Если свойства исходного объекта являются массивами или объектами, то в целевой объект будут помещены ссылки на соответствующие свойства исходного объекта^^

![ico-25 cap] ** 1**

~~~js
var newObject = Object.assign (
    { },
    { name: "Егор", age: 25 },
    {  write: true, read: true  }
)
~~~

В результате вывода в консоль объекта **newObject** получим

~~~console
{
  name: "Егор",
  age: 25,
  write: true,
  read: true
}
~~~

![ico-25 cap] ** 2**

Создадим объект **source**, свойство **_position_** которого будет массивом, а свойство **_attrs_** - объектом:

~~~js
var source = {
    name: "sample",
    attrs: {
        type: "figure",
        color: "green",
        size: 200
    },
    position: [ 250, 250 ]
}
~~~

Создадим копию  **target**  объекта **source** с помощью метода ~Object.assign~:

~~~js
var target = Object.assign ( {}, source )
~~~

Покажем, что:

![ico-20 warn] свойство  **target._attrs_**  содержит ссылку на объект  **source._attrs_**,
![ico-20 warn] а свойство  **target._position_**  содержит ссылку на массив  **source._position_**

Для этого изменим значение элемента массива **target._position_**:

~~~js
target.position [0] = 100
~~~

и значение свойства **target._attrs_._color_**:

~~~js
target.attrs.color = "#fa0"
~~~

поскольку  **target._position_** - это всего лишь ссылка на массив **source._position_**,
а  **target._attrs_** - ссылка на объект **source._attrs_**,
соответствующее значение массива **source._position_**
и значение свойства **_attrs_._color_** объекта **source** изменились:

![](https://camo.githubusercontent.com/66c769dbc806133b41ce4d018e6423d06e2ca362/68747470733a2f2f6c68362e676f6f676c6575736572636f6e74656e742e636f6d2f53326945454375335a5f395552446a635f5072792d3866464466716258585a4734437733786b68624a524d366667576735635652476c5851396b4a444c5879654f48366237737333664d6c31326a73336b496150643330766367435f2d6949634432666b7141507a4a57364e62744243333550574a5f595f7a4c534c6e2d36746d746a722d57533478667453707845)

_______________________

## ![ico-25 icon] Object.create()

^^Этот метод использовался для доступа к прототипу объекта до того, как в спецификации ES6 ( 2015 ) появилось свойство **~__proto__~**^^

Создает экземпляр объекта на основе прототипа

• Методу нужно передать в качестве первого аргумента ссылку на прототип, который будет использован при создании экземпляра
• Вторым ( опциональным ) аргументом может быть объект-дескриптор свойств создаваемого экземпляра

![ico-25 cap] ** 1**

~~~js
var figure = {
    className: "Figure"
}
var circle = Object.create ( figure )
~~~

Если передать ~null~  в качестве аргумента, будет создан объект без прототипа:

~~~javascript
var emptyObject = Object.create ( null )
~~~

________________________

![ico-25 cap] ** 2**

Метод ~Object.create()~ позволяет задавать дескрипторы свойств объекта
^^( как это делает метод ~Object.defineProperty()~, который добавляет свойство в объект )^^

~~~~js
function Figure ( figType ) {
    this.type = figType
    console.log ( "Instance of Figure created" )
}
Figure.prototype.className = "Figure"

var circle = Object.create ( new Figure ( "circle" ), {
    x: {
        value: undefined,
        writable: true,
        configurable: false,
        enumerable: false
    },
    y: {
        value: undefined,
        writable: true,
        configurable: false,
        enumerable: false
    },
    radius: {
        value: undefined,
        writable: true,
        configurable: false,
        enumerable: false
    }
})
~~~~

^^^[circle]

~~~console
▼ Figure {x: undefined, y: undefined, radius: undefined}
    radius: undefined
    x: undefined
    y: undefined
  ▼ __proto__: Figure
        type: "circle"
      ▼ __proto__:
            className: "Figure"
          ► constructor: ƒ Figure( figType )
          ► __proto__: Object
~~~

^^^

~~~js
circle instanceof Figure  // true
~~~

_________________

![ico-25 cap] ** 3**

^^Создадим экземпляр объекта **proto**:^^

~~~js
var proto = {
    figure: "circle",
    size: 100,
    clip: false,
    changeFigure: function ( newFigure ) {
        this.figure = newFigure
    }
}
~~~

^^А теперь вызовем метод  **~Object.create()~** для создания экземпляра **obj**:^^

~~~javascript
var obj = Object.create ( proto )
~~~

^^^[результат]

~~~console
▼ {}
   ▼ __proto__:
      ► changeFigure: ƒ ( newFigure )
        clip: false
        figure: "circle"
        size: 100
      ► __proto__: Object
~~~

![](https://lh3.googleusercontent.com/_pAPyoxhK4ekiTu4Q1Hu3NODkNZLICO0NF4GH-kZVHsXIlHFOMZ5QMjf7Fnc4fwJO_WY6VZgEI7POEkbr4yJrjycDkWNKAryWa06o6qjiY_laHD_gUV5gDGg4lcMUJqb3Q4jzQ7BxXIKmdQ)

^^Все свойства и методы объекта **proto**, взятого в качестве прототипа, стали  унаследованными  свойствами и методами экземпляра **obj**^^

^^^

^^Теперь создадим простой конструктор:^^

~~~js
var Creator = function ( id, val ) {
    this.id = id
    this.val = val
}
~~~

^^и вызовем его как обычную функцию, передав контекст нашего экземпляра **obj**:^^

~~~javascript
Creator.call ( obj,  "sample",  75 )
~~~

^^^[результат]

![](https://lh5.googleusercontent.com/tZ41G5MsrY2Y2XdD9QWEhHKGBdML2mKPKuYs18HjbLu1vScqaZlSy4udqTRyVvabwuv5q4Iyi9RQec_LAejFuYEreIgbhKpUsrU31J3h3Qxyl4DKbZyK7lEzuVUMPXcuZs3T6GpYa6xNc-I)

^^^
__________________

![ico-25 cap] ** 4**

^^Создадим конструктор **_Human_** и воспользуемся методом ~Object.create()~ для создания нового экземпляра  **worker**:^^

~~~js
function Human ( name = "Тимофей", hobby = "футбол" ) {
    this.name = name,
    this.hobby = hobby
}

Human.prototype = {
    speciality: "монтажник",
    age: 20
}

var worker = Object.create (
    new Human ( "Иван", "рыбалка" )
)
~~~

^^^[worker]

~~~console
▼ {}
  ▼ __proto__:
        hobby: "рыбалка"
        name: "Иван"
      ▼ __proto__:
            age: 20
            speciality: "монтажник"
          ► __proto__: Object
~~~

^^^

^^А теперь проверим, что **worker** является экземпляром **_Human_**^^

~~~javascript
worker instanceof Human   // true
worker instanceof Object  // true
~~~

__________________

![ico-25 cap] ** 5**

^^Объявим конструктор класса **_SuperClass_**^^

~~~js
function SuperClass () {
    this.__proto__.type = "SuperClass"
    this.__proto__.name = "Родительский класс"
}
~~~

^^Теперь используем метод ~Object.create()~ для создания подкласса **_SubClass_** класса **_SuperClass_**^^
^^Для этого объявим конструктор подкласса **_SubClass_**:^^

~~~javascript
function SubClass () {
     SuperClass.call ( this )
     this.name = "Дочерний класс"
     this.type = "SubClass"
}
~~~

^^Конструктор **_SuperClass_** вызывается в конструкторе **_SubClass_** как обычная функция, однако в контексте экземпляра^^

~~~javascript
var sample = new SubClass()
~~~

^^^[Результат]

![](https://lh4.googleusercontent.com/vcps-4BeqX1JkOoOAOPJr82l6T9KExwOvfmuguK2nlkGesPz8LUYIX9qyLPI3ZDyHsAtxystJKAvUVY-EeIBQWVxmg77oiEUNUnqMuST214tak36uuCH9DTw6szNi9h8K2Y_LvtZlcLOQDU)

^^^

^^Обратите внимание, что **_SuperClass_** передал унаследованные свойства экземпляру, но при этом сам не появился в цепочке наследования:^^

~~~javascript
sample instanceof SubClass    // true
sample instanceof SuperClass  // false
sample instanceof Object      // true
~~~

^^В данном примере **_SuperClass_** выполняет функцию **_декоратора_**^^

__________________

![ico-25 cap] ** 6**

^^Объявляем конструктор класса **_Dishes_**:^^

~~~javascript
function Dishes ( type ) {
    this.type = "Посуда"
    console.log ( "Конструктор Dishes создал экземпляр посуды: \n", this )
}
~~~

^^Создаем свойства и методы прототипа:^^

~~~js
Dishes.prototype.wash = function () {
    this.clean = true
    console.info ( 'Посуда вымыта' )
}
Dishes.prototype.use = function () {
    this.clean = false
    console.info ( 'Посуда использована, она грязная' )
}
~~~

^^Теперь создадим конструктор класса **_Cup_**:^^

~~~js
function Cup ( color ) {
    this.type = "чашка"
    this.color = color || "синяя"
}
~~~

^^Нужно сделать так, класс  **_Cup_**  был подклассом  класса   **_Dishes_**^^
^^Используем прототип класса  **_Dishes_**:^^

~~~js
Cup.prototype = Object.create ( Dishes.prototype )
~~~

^^Для того, чтобы класс **_Cup_**  унаследовал собственные перечислимые свойства родительского класса **_Dishes_**, вызовем конструктор класса **_Dishes_** с передачей ему контекста  **_Cup_.~prototype~**:^^

~~~js
Dishes.call ( Cup.prototype )
~~~

^^Создадим экземпляр класса **_Cup_**:^^

~~~js
var redCup = new Cup ( "красная" )
~~~

^^^[redCup]

~~~console
▼ Cup {type: "чашка", color: "красная", clean: true}
    clean: true
    color: "красная"
    type: "чашка"
  ▼ __proto__: Dishes
        type: "Посуда"
      ▼ __proto__:
          ► use: ƒ ()
          ► wash: ƒ ()
          ► constructor: ƒ Dishes( type )
          ► __proto__: Object
~~~

^^^

^^Итак, мы построили цепочку прототипов^^
^^Для проверки, что наш экземпляр  **redCup**  принадлежит  одновременно классам  **_Cup_**  и  **_Dishes_**, воспользуемся оператором  **~instanceof~**:^^

~~~js
redCup instanceof Cup        // true
redCup instanceof Dishes     // true
greenCup instanceof Object   // true
~~~

^^Теперь проверим, как работает наша "машинка"^^
^^Мы уже создали экземпляр **redCup**^^
^^Давайте используем чашку, а потом помоем ее^^

~~~js
redCup.use ()  // Посуда использована, она грязная

redCup.wash () // Посуда вымыта
~~~

__________________

![ico-25 cap] ** 7**

~&#95;&#95;proto&#95;&#95;~  vs  ~Object.create()~

^^Аналогичный результат можно получить значительно проще, используя свойство **~&#95;&#95;proto&#95;&#95;~**^^
^^Сейчас мы усложним задачу, удлинив цепочку прототипов еще одним классом - **_Kitchenware_**^^
^^Создадим конструктор класса  **_Kitchenware_**:^^

~~~js
var Kitchenware = function () {
    this.className = "Кухонная утварь"
    this.__proto__.constructor = Kitchenware
}
~~~

^^Теперь создадим конструктор класса  **_Dishes_**, ^^
^^и используем конструктор **_Kitchenware_** ^^
^^для создания прототипа экземпляров класса  **_Dishes_**:^^

~~~js
var Dishes = function () {
    this.__proto__ = new Kitchenware ()
    this.__proto__.constructor = Dishes
    this.className = "Посуда"
}
~~~

^^Теперь создадим конструктор класса  **_Cup_**, ^^
^^и используем конструктор **_Dishes_** ^^
^^для создания прототипа экземпляров класса  **_Cup_**:^^

~~~js
var Cup = function ( $color ) {
    this.__proto__ = new Dishes ()
    this.__proto__.constructor = Cup
    this.className = "Чашка"
    this.color = $color || "белая"
}
~~~

^^Теперь создадим экземпляр  **yellowCup**  класса  **_Cup_**  и выведем его в консоль:^^

~~~js
var yellowCup = new Cup (  "желтая" )
console.log ( '*** cup: ', yellowCup )
~~~

^^А также выведем в консоль цепочку прототипов, используя метод  ~Object.getPrototypeOf()~:^^

~~~js
console.log (
    'yellowCup prototype: ',
    Object.getPrototypeOf ( yellowCup )
)
console.log (
    'yellowCup prototype of prototype: ',
    Object.getPrototypeOf (
        Object.getPrototypeOf ( yellowCup )
    )
)
~~~

![](https://lh4.googleusercontent.com/2yS6OUuP93Plj6Fakv-9ZIO_vcEgDYZr3w_qCvL_BESD2DMtRE5wT1QPFA-REI0GtSxOUqT0ToyEl2BVADmn_ha1Srvr4sJCEdIsRWy3qKSqaplxmfnsoVIqazjGQL4dMWQCInGa1OiT9UU)

^^Обратите внимание, что ссылка на конструктор задана в явном виде:^^

~~~javascript
this.__proto__.constructor = Dishes
~~~

^^Это необходимо потому, что после выполнения присваивания^^

~~~js
this.__proto__ = new Kitchenware ()  
~~~

^^имя конструктора прототипа будет  **_Kitchenware_**, а не  **_Dishes_**^^
^^Из-за этого мы получили бы в консоли вот такую картинку:^^

![](https://lh5.googleusercontent.com/4dTD4u22uMaShQ2MIj5HqFFlhAQq4JioKL1H9ZdcShLOqIHdVQE76Hjdzzesdj5opetDFiu93XNefBJgNw7G79j6gwEepV_elF621RIHoBl9_YxTVdrbHSo5bbLlWLO6xNWdQVnfOCu_Hsk)

^^Аналогично мы явно указываем ссылку на функцию-конструктор чашки:^^

~~~js
this.__proto__.constructor = Cup
~~~

^^Однако воспользуемся теперь оператором **~instanceof~**^^

~~~js
yellowCup instanceof Kitchenware  // true
yellowCup instanceof Dishes       // false
yellowCup instanceof Cup          // false
yellowCup instanceof Object       // true
~~~

^^Как мы видим, хотя в консоли цепочка прототипов выглядит вполне прилично, на самом деле произошла передача свойств вместо наследования ^^

### ![ico-20 hw] Тесты на Object.create

[![ico-30 hw] **Тесты**](https://garevna.github.io/js-quiz/#Object.create)

_______________________

## ![ico-25 icon] Object.defineProperty()

Этот метод позволяет создать объекту свойство с дескриптором

![ico-20 green-ok] Первый аргумент метода - ссылка на объект, которому добавляется свойство
![ico-20 green-ok] Второй аргумент - имя свойства ( строка )
![ico-20 green-ok] Третий аргумент - объект дескриптора свойства

![ico-25 cap] ** 1**

Добавим свойство **_type_** объекту **sample** и сделаем это свойство неперечислимым

~~~javascript
var sample = {
    name: "figure",
    size: 100,
    color: "red"
}
Object.defineProperty ( sample, 'type', {
    value: "svg",
    enumerable: false
})

Object.keys ( sample )
~~~

**Результат:**

~~~console
► (3) ["name", "size", "color"]
~~~

____________________

### ![ico-20 icon] геттер и сеттер свойства

**Вычисляемые свойства**

![ico-25 cap] ** 2**

Добавим еще одно свойство объекту  **sample**

Свойство   **_operation_**   будет  с геттером и сеттером

![ico-20 warn] Когда определяются атрибуты _~get()~_  и  _~set()~_ в дескрипторе свойства, нельзя использовать атрибуты  _~writable~_ и _~value~_

~~~javascript
Object.defineProperty ( sample, "operation", {
    get: () => this.operation ?
               this.operation.substr ( 0, 1 ) : "?",
    set: newVal => this.operation = newVal + "***"
})
~~~

^^^[Результат]

~~~console
▼ {name: "figure", size: 100, color: "red", type: "svg"}
    color: "red"
    name: "figure"
    size: 100
    operation: (...)
    type: "svg"
  ► get operation: () => {…}
  ► set operation: newVal => this.operation = newVal + "***"
  ► __proto__: Object
~~~
^^^
_____________

![ico-25 cap] ** 3**

~~~javascript
var course = 28

var thing = {
    name: "Утюг",
    mark: "Tefal",
    priceUSD: 20
}

Object.defineProperty ( thing, "priceUAH", {
    get: function () {
        return this.priceUSD * course
    },
    set: function ( newPriceUAH ) {
        this.priceUSD = newPriceUAH / course
    }
})

console.log ( thing.priceUAH ) // 560
~~~

Теперь выполним присваивание значения вычисляемому свойству ( вызывая под капотом сеттер этого свойства ):

~~~javascript
thing.priceUAH = 450

console.log ( thing.priceUDS ) // 8.928571428571429
~~~

Выведем в консоль дескриптор вычисляемого свойства **~priceUAH~**

~~~javascript
console.log (
    Object.getOwnPropertyDescriptor ( thing, "priceUAH" )
)
~~~

^^^[Результат]

~~~console
▼ {get: ƒ, set: ƒ, enumerable: true, configurable: true}
    configurable: true
    enumerable: true
  ► get: ƒ priceUAH()
  ► set: ƒ priceUAH( newPriceUAH )
  ► __proto__: Object
~~~
^^^
____________________________

## ![ico-25 icon] Object.defineProperties()

Можно добавить объекту сразу несколько свойств с дескрипторами

Создадим в разметке новый элемент **svg**

~~~html
<body>
    <svg width="400" height="400"
         style="border: 1px dotted;"/>
    </svg>
</body>
~~~

и добавим сразу два свойства объекту **sample** с помощью метода **_Object.defineProperties()_**:

~~~javascript
Object.defineProperties ( sample, {
    canvas: {
        value: document.querySelector ( "svg" ),
        writable: false,
        configurable: false,
        enumerable: false
    },
    owner: {
        get: () => this.owner,
        set: newOwner => this.owner = newOwner
    }
})
~~~

![](https://lh3.googleusercontent.com/e2VuWmeLvjOpFj4NoiZN93QXyrZUgr8S8cSxUDvPvaq7FWQEngz0jNtM63z70TOjow4YGiLMQ_a2_77Q6id0Lk93kpqm4MQJKWBzzj1jT-x8jkAKmisADDgnsMuo7F3zc_6yxf-z5jKG0mY)

____________________________

## ![ico-25 icon] Object.entries()

**ES8 ( 2017 )**

Возвращает массив собственных перечислимых свойств экземпляра
в виде массива из двух элементов: имени свойства и его значения

~~~js
var obj = {
    name: "first",
    type: "circle",
    color: "red",
    radius: 100,
    center: [ 120, 120 ]
}

console.log ( Object.entries( obj ) )
~~~

^^^[Результат]

~~~console
▼ (5) [Array(2), Array(2), Array(2), Array(2), Array(2)]
  ► 0: (2) ["name", "first"]
  ► 1: (2) ["type", "circle"]
  ► 2: (2) ["color", "red"]
  ► 3: (2) ["radius", 100]
  ► 4: (2) ["center", Array(2)]
    length: 5
  ► __proto__: Array(0)
~~~

^^^

![ico-25 cap] ** 1**

Нарисуем окружность

~~~js
var obj = {
    width: "30%",
    height: "30%",
    border: "solid 1px red",
    borderRadius: "50%",
    position: "fixed",
    top: "10%",
    left: "10%"
}
var elem = document.body.appendChild (
    document.createElement ( "div" )
)
Object.entries( obj )
   .forEach ( prop => elem.style [ prop [0] ] = prop [1] )
~~~

____________________

![ico-25 cap] ** 2**

Выведем все свойства объекта **obj** в консоль

~~~js
console.info ( 'obj = {\n' )
for ( var x of Object.entries( obj ) ) {
    console.info ( `     ${x[0]}:${x[1]}\n` )
}
console.info ( '}' )
~~~

^^^[Результат]

~~~console
obj = {
      width:30%
      height:30%
      border:solid 1px red
      borderRadius:50%
      position:fixed
      top:10%
      left:10%
}
~~~
^^^
____________________________

## ![ico-25 icon] Object.freeze()

Числа, строки и булевы значения в JS **_неиммутабельны_**, т.е. их значения не меняются при операциях с ними, но каждый раз возвращается новое значение

![ico-25 cap] ** 1**

~~~js
var string = "Welcome to JS!"

string.split ( " " ) // [ "Welcome", "to", "JS!" ]

console.log ( string ) // "Welcome to JS!"
~~~

Объекты и массивы JS по природе своей **_иммутабельны_** ( изменяемы )

![ico-25 cap] ** 2**

~~~js
var food = [ "milk", "apple", "soup" ]

food.push ( "meat" )

console.log ( food ) // [ "milk", "apple", "soup", "meat" ]
~~~

Мы легко добавляем новые свойства объекту:

![ico-25 cap] ** 3**

~~~js
var provider = { name: "Google" }

provider.addProp = function ( propName, propVal ) {
    this[ propName ] = propVal
}

provider.addProp ( "browser", "Chrome" )

console.log ( provider ) // { name: "Google", browser: "Chrome" }
~~~

____________________________________________________

**Метод ~Object.freeze~ делает объект неиммутабельным, т.е. предотвращает:**

^^^[добавление новых свойств к объекту]

![ico-25 cap] ** 4**

~~~js
var provider = { name: "Google" }

Object.freeze ( provider )

provider.addProp = function ( propName, propVal ) {
    this[ propName ] = propVal
}

console.log ( provider ) // { name: "Google" }
~~~

^^^

^^^[удаление свойств объекта]

![ico-25 cap] ** 5**

~~~js
var provider = { name: "Google", service: "API" }

Object.freeze ( provider )

delete provider.service  // false

console.log ( provider ) // { name: "Google", service: "API" }
~~~

^^^

^^^[изменение существующих свойств объекта]

![ico-25 cap] ** 6**

~~~js
var provider = { name: "Google", service: "API" }

Object.freeze ( provider )

provider.name = "Mozilla"

console.log ( provider.name ) // Google
~~~

^^^

^^^[изменение дескрипторов свойств объекта]

изменение значений **enumerable**, **configurable** и **writable**

![ico-25 cap] ** 7**

Изменим дескриптор свойства объекта до "заморозки":

~~~js
var provider = { name: "Google", service: "API" }

Object.defineProperty ( provider, "name", {
    enumerable: false,
    writable: false
} )

for ( var prop in provider )
    console.log ( `${prop}: ${provider [ prop ]}` )

// service: API
~~~

Как видите, свойство **name** стало неперечислимым

Проверим, изменяемо ли оно:

~~~js
provider.name = "Mozilla"

console.log ( provider.name ) // "Google"
~~~

Теперь опять изменим дескриптор свойства **name** и изменим его значение:

~~~js
Object.defineProperty ( provider, "name", {
    enumerable: true,
    writable: true
} )

provider.name = "Mozilla"
~~~

Выведем все перечислимые свойства объекта:

~~~js
for ( var prop in provider )
    console.log ( `${prop}: ${provider [ prop ]}` )

// name: Mozilla
// service: API
~~~

Т.е. мы опять сделали свойство **name** перечислимым

А теперь "заморозим" объект и попробуем переконфигурировать свойство **service**

~~~js
Object.freeze ( provider )

Object.defineProperty ( provider, "service", {
    enumerable: false,
    writable: false
} )
~~~

Будет сгенерировано исключение:

![ico-20 error] ~Uncaught TypeError: Cannot redefine property: service~

Однако изменить значение свойства **service** мы не сможем, хотя нам и не удалось изменить дескриптор этого свойства

Почему? Заглянем теперь в дескриптор:

~~~js
Object.getOwnPropertyDescriptor ( provider, "service" )

// { value: "API", writable: false, enumerable: true, configurable: false }
~~~

Т.е. в результате "заморозки" объекта дескрипторы его свойств были автоматически изменены: свойства стали неизменяемы и не конфигурируемы

Единственное, что "не зацепила" заморозка объекта - это атрибут **_enumerable_**

Если мы сами не установим его значение в ~false~ перед заморозкой, то свойства будут перечислимыми

^^^
____________________________

## ![ico-25 icon] Object.getOwnPropertyDescriptor()

Этот метод позволяет получить дескриптор собственного свойства объекта
Возвращает **объект дескриптора** свойства
![ico-20 green-ok] первым аргументом метода является объект ( ссылка )
![ico-20 green-ok] второй аргумент - имя свойства объекта ( строка )

### ![ico-20 icon] Дескрипторы свойств

Для каждого свойства объекта существует **дескриптор свойства**
Дескриптор свойства - это **_объект_**, который содержит атрибуты свойства:

![ico-20 green-ok] **value**
^^значение свойства^^
^^( по умолчанию **_undefined_** )^^

![ico-20 green-ok] **writable**
^^( _true_ | _false_ )^^
^^можно ли изменять значение свойства^^
^^( по умолчанию **_true_** )^^

![ico-20 green-ok] set
^^сеттер свойства^^
^^( функция, которая вызывается при записи значения свойства )^^
^^( по умолчанию имеет значение **_undefined_** )^^

![ico-20 green-ok] **get**
^^геттер свойства^^
^^( функция, которая вызывается при чтении значения свойства )^^
^^( по умолчанию имеет значение **_undefined_** )^^

![ico-20 green-ok] **enumerable** ( ~true~ | ~false~ )
^^является свойство перечислимым, или нет^^
^^т.е. будет ли оно итерироваться оператором **_for..in_**^^
^^и возвращаться при вызове метода **_Object.keys()_**^^
^^( по умолчанию имеет значение **_false_** )^^

![ico-20 green-ok] **configurable** ( ~true~ | ~false~ )
^^доступно ли свойство для модификации ( удаления, изменения атрибутов свойства )^^
^^можно ли конфигурировать свойство с помощью метода **_defineProperty_**^^
^^( по умолчанию **_false_** )^^

![ico-25 cap] ** 1**

~~~javascript
var newObject = {
    name: "Егор",
    age: 25,
    write: true,
    read: true,
    getName() {},
    setName() {}
}
Object.getOwnPropertyDescriptor ( newObject, "getName" )
~~~

^^^[Результат]

~~~console
▼ {value: ƒ, writable: true, enumerable: true, configurable: true}
    configurable: true
    enumerable: true
  ► value: ƒ getName()
    writable: true
  ► __proto__: Object
~~~

^^^

____________________________

## ![ico-25 icon] Object.getOwnPropertyDescriptors()

**ES8 ( 2017 )**

Получает ссылку на объект
Возвращает объект, у которого:
• имена свойств - это имена свойств исходного объекта
• значения свойств - это дескрипторы свойств исходного объекта

~~~js
var obj = {
        name: "first",
        type: "circle",
        color: "red",
        radius: 100,
        center: [ 120, 120 ]
}

Object.getOwnPropertyDescriptors( obj )
~~~

^^^[Результат]

~~~console
▼ {name: {…}, type: {…}, color: {…}, radius: {…}, center: {…}}
  ► center: {value: Array(2), writable: true, enumerable: true, configurable: true}
  ► color: {value: "red", writable: true, enumerable: true, configurable: true}
  ► name: {value: "first", writable: true, enumerable: true, configurable: true}
  ► radius: {value: 100, writable: true, enumerable: true, configurable: true}
  ► type: {value: "circle", writable: true, enumerable: true, configurable: true}
  ► __proto__: Object
~~~

^^^
____________________________

## ![ico-25 icon] Object.getOwnPropertyNames()

Возвращает имена собственных свойств ( методов ) объекта

~~~js
var funcObject = {
    getName() {},
    setName() {}
}
var newObject = Object.assign (
    {},
    { name: "Егор", age: 25 },
    {  write: true, read: true  },
    funcObject
)
Object.getOwnPropertyNames ( newObject )
~~~

**Результат:**

~~~console
(6) ["name", "age", "write", "read", "getName", "setName"]
~~~
____________________________

## ![ico-25 icon] Object.keys()

возвращает массив всех **_собственных перечислимых_** свойств экземпляра
аргумент - ссылка на экземпляр

![ico-25 cap] ** 1**

~~~js
var Human = function () {
    this.name = arguments [ 0 ] || "Тимофей"
    this.age = arguments [ 1 ] || 25
    this.speciality = arguments [ 2 ] || "слесарь"
}

Human.prototype.setSpeciality = function ( spec ) {
    this.speciality = spec
}

var man = new Human ( null )
~~~

Добавим в прототип **Human** новое свойство **_employed_**:

~~~js
Human.prototype.employed = false
console.log ( man.employed )  // false
~~~

выведем в консоль собственные перечислимые свойства экземпляра  **man**

~~~javascript
console.log ( Object.keys ( man ) )
~~~

**Результат:**

~~~console
(3) [ "name", "age", "speciality" ]
~~~

выведем перечислимые свойства прототипа:

~~~javascript
console.log ( Object.keys ( Human.prototype ) )
~~~

**Результат:**

~~~console
(2) [ "setSpeciality", "employed" ]
~~~

Выполним присваивание:

~~~js
man.employed = true
console.log ( Object.keys ( man ) )
~~~

**Результат:**

~~~console
(4) [ "name", "age", "speciality", "employed" ]
~~~

у экземпляра **man** появилось собственное свойство  **_employed_**, но у прототипа и экземпляра это совершенно различные свойства:

~~~js
console.log ( man.employed )           // true
console.log ( man.__proto__.employed ) // false
~~~
____________________________

## ![ico-25 icon] Object.setPrototypeOf()

Метод добавляет в цепочку прототипов объекта, указанного первым аргументом,
ссылку на другой объект, указанный вторым аргументом

![ico-25 cap] ** 1**

Создадим объект **proto** с двумя методами: **_valueOf()_** и **_getName()_**

~~~js
const proto = {
    valueOf() {
        return this [
            Object.keys ( this )
                .find ( key => !isNaN ( this[key] ) )
        ] || 0
    },
    getName() {
        return this.name ? this.name : "user"
    }
}
~~~

^^^[Методы объекта proto]

^^Метод **_valueOf()_** ищет среди собственных перечислимых свойств объекта любое свойство, которое при приведении к числу вернет не **~NaN~**, и возвращает числовое значение этого свойства^^
^^или, если такого свойства не обнаружено, возвращает 0^^

^^Метод **_getName()_** ищет среди свойств объекта свойство **_name_**, и если находит, то возвращает его значение, в противном случае возвращает "_user_"^^

^^^

Создадим объект **admin**:

~~~js
const admin = {
    name: "Stephan",
    age: 25
}
~~~

Легко убедиться, что в цепочке прототипов объекта **admin** есть только ссылка на объект **~prototype~** конструктора **_Object_**

^^^[admin]

~~~console
▼ { name: "Stephan", age: 25 }
    age: 25
    name: "Stephan"
  ▼ __proto__:
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
~~~

^^^

С помощью метода **~Object.setPrototypeOf~** передадим объекту **admin** в наследство объект **proto**:

~~~js
Object.setPrototypeOf ( admin, proto )
~~~

Выведем объект **admin** в консоль и убедимся, что в его цепочке прототипов появилось еще одно звено - ссылка на объект **proto**:

^^^[admin]

~~~console
▼ { name: "Stephan", age: 25 }
    age: 25
    name: "Stephan"
  ▼ __proto__:
      ► getName: getName() { return this[ Object.keys ( this ) .find ( key => {…}
      ► valueOf: valueOf() { let prop = Object.keys ( this ) .find ( key => {…}
      ► __proto__: Object
~~~

^^^

Вызовем унаследованные объектом **admin** методы объекта **proto**

~~~js
console.log ( admin.getName() ) // Stephan
console.log ( admin.valueOf() ) // 25
~~~

Теперь создадим объект **user**

~~~js
const user = {
    login: "Stephan",
    hobby: "fishing"
}
~~~

у которого нет свойства **_name_** и нет свойств, которые при приведении к числу не вернут **~NaN~**

передадим ему в наследство объект **proto**

~~~js
Object.setPrototypeOf ( user, proto )
~~~

и вызовем унаследованные методы:

~~~js
console.log ( user.getName() ) // user
console.log ( user.valueOf() ) // 0
~~~
____________________________

## ![ico-25 icon] Object.values()

**ES8 ( 2017 )**

Возвращает **массив** **_значений_** собственных перечислимых свойств экземпляра,
т.е. тех свойств, имена которых возвращает метод **~Object.keys()~**

~~~js
var obj = {
    name: "first",
    type: "circle",
    color: "red",
    radius: 100,
    center: [ 120, 120 ]
}

console.log ( Object.values( obj ) )
~~~

**Результат:**

~~~console
(5) ["first", "circle", "red", 100, Array(2)]
~~~
____________________________

^^![ico-25 icon] Object.getOwnPropertySymbols()^^
^^![ico-25 icon] Object.getPrototypeOf()^^
^^![ico-25 icon] Object.is()^^
^^![ico-25 icon] Object.isExtensible()^^
^^![ico-25 icon] Object.isFrozen()^^
^^![ico-25 icon] Object.isSealed()^^
^^![ico-25 icon] Object.seal()^^
____________________________

## ![ico-25 hw] Тесты по методам Object

[![ico-30 hw] **Тесты**](https://garevna.github.io/js-quiz/#Object)

__________________

[![ico-20 link] ^^MDN^^](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object)
