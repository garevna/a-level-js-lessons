# :mortar_board: Статические методы конструктора  Object
###### :radio_button: <a href="Object.assign">Object.assign()</a>
***

### :mortar_board: instanceof

С помощью оператора  **`instanceof`**  строится логическое выражение, которое принимает значение **_`true`_**, если объект является экземпляром класса:
```javascript
[объект]  instanceof  [класс]
```

## :mortar_board: Object.create()
###### Этот метод использовался для доступа к прототипу объекта до того, как в спецификации ES6 ( 2015 ) появилось свойство **`__proto__`**

Создает экземпляр объекта на основе прототипа

Методу нужно передать в качестве первого аргумента ссылку на прототип, который будет использован при создании экземпляра

Вторым ( опциональным ) аргументом может быть объект-дескриптор свойств создаваемого экземпляра

###### :coffee: :one:
```javascript
var figure = {
    className: "Figure"
}
var circle = Object.create ( figure )
```
Если передать `null`  в качестве аргумента, будет создан объект без прототипа:
```javascript
var emptyObject = Object.create ( null )
```
***
###### :coffee: :two:
Метод `Object.create()` позволяет задавать дескрипторы свойств объекта 

( как это делает метод `Object.defineProperty()`, который добавляет свойство в объект )
```javascript
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
```
Выведем в консоль переменную **circle**: 
```console
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
```
```javascript
circle instanceof Figure  // true
```
***
###### :coffee: :three:
Создадим экземпляр объекта **proto**:
```javascript
var proto = {
    figure: "circle",
    size: 100,
    clip: false,
    changeFigure: function ( newFigure ) {
        this.figure = newFigure
    }
}
```
А теперь вызовем метод  **`Object.create()`** для создания экземпляра **obj**:
```javascript
var obj = Object.create ( proto )
```
В консоли посмотрим на результат:
```console
▼ {}
   ▼ __proto__:
      ► changeFigure: ƒ ( newFigure )
        clip: false
        figure: "circle"
        size: 100
      ► __proto__: Object
```
<img src="https://lh3.googleusercontent.com/_pAPyoxhK4ekiTu4Q1Hu3NODkNZLICO0NF4GH-kZVHsXIlHFOMZ5QMjf7Fnc4fwJO_WY6VZgEI7POEkbr4yJrjycDkWNKAryWa06o6qjiY_laHD_gUV5gDGg4lcMUJqb3Q4jzQ7BxXIKmdQ" width="300"/>

Все свойства и методы объекта **proto**, взятого в качестве прототипа, стали  унаследованными  свойствами и методами 
экземпляра **obj**

Теперь создадим простой конструктор:
```javascript
var Creator = function ( id, val ) {
    this.id = id
    this.val = val
}
```
и вызовем его как обычную функцию, передав контекст нашего экземпляра   obj:
```javascript
Creator.call ( obj,  "sample",  75 )
```
Посмотрим результат в консоли:

<img src="https://lh5.googleusercontent.com/tZ41G5MsrY2Y2XdD9QWEhHKGBdML2mKPKuYs18HjbLu1vScqaZlSy4udqTRyVvabwuv5q4Iyi9RQec_LAejFuYEreIgbhKpUsrU31J3h3Qxyl4DKbZyK7lEzuVUMPXcuZs3T6GpYa6xNc-I" width="300"/>

***
###### :coffee: :four:
Создадим конструктор **_Human_** и воспользуемся методом `Object.create()` для создания нового экземпляра  **worker**:
```javascript
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
```
Выведем в консоль экземпляр **worker**:
```console
▼ {}
  ▼ __proto__:
        hobby: "рыбалка"
        name: "Иван"
      ▼ __proto__:
            age: 20
            speciality: "монтажник"
          ► __proto__: Object
```
А теперь проверим, что **worker** является экземпляром **_Human_**
```javascript
worker instanceof Human   // true
worker instanceof Object  // true
```
***
###### :coffee: :five:
Объявим конструктор класса **_SuperClass_**
```javascript
function SuperClass () {
    this.__proto__.type = "SuperClass"
    this.__proto__.name = "Родительский класс"
}
```
Теперь используем метод `Object.create()` для создания подкласса **_SubClass_** класса **_SuperClass_**

Для этого объявим конструктор подкласса **_SubClass_**:
```javascript
function SubClass () {
     SuperClass.call ( this )
     this.name = "Дочерний класс"
     this.type = "SubClass"
}

// Конструктор SuperClass вызывается 
// в конструкторе SubClass 
// как обычная функция,
// однако в контексте экземпляра 
// ( sample )
```
```javascript
var sample = new SubClass()
```
###### Результат в консоли:
<img src="https://lh4.googleusercontent.com/vcps-4BeqX1JkOoOAOPJr82l6T9KExwOvfmuguK2nlkGesPz8LUYIX9qyLPI3ZDyHsAtxystJKAvUVY-EeIBQWVxmg77oiEUNUnqMuST214tak36uuCH9DTw6szNi9h8K2Y_LvtZlcLOQDU" width="400"/>

Обратите внимание, что **_SuperClass_** передал унаследованные свойства экземпляру, но при этом сам не появился в цепочке наследования:
```javascript
sample instanceof SubClass    // true
sample instanceof SuperClass  // false
sample instanceof Object      // true
```
В данном примере **_SuperClass_** выполняет функцию декоратора

***
###### :coffee: :six:
Объявляем конструктор класса **_Dishes_**:
```javascript
function Dishes ( type ) {
    this.type = "Посуда"
    console.log ( "Конструктор Dishes создал экземпляр посуды: \n", this )
}
```
Создаем свойства и методы прототипа:
```javascript
Dishes.prototype.wash = function () {
    this.clean = true
    console.info ( 'Посуда вымыта' )
}
Dishes.prototype.use = function () {
    this.clean = false
    console.info ( 'Посуда использована, она грязная' )
}
```
Теперь создадим конструктор класса **_Cup_**:
```javascript
function Cup ( color ) {
    this.type = "чашка"
    this.color = color || "синяя"
}
```
Нужно сделать так, класс  **_Cup_**  был подклассом  класса   **_Dishes_**

Используем прототип класса  **_Dishes_**:
```javascript
Cup.prototype = Object.create ( Dishes.prototype )
```
Для того, чтобы класс **_Cup_**  унаследовал<br/>
собственные перечислимые свойства родительского класса **_Dishes_**,<br/>
вызовем конструктор класса **_Dishes_**<br/>
с передачей ему контекста  **_Cup_.`prototype`**:
```javascript
Dishes.call ( Cup.prototype )
```
Создадим экземпляр класса **_Cup_**:
```javascript
var redCup = new Cup ( "красная" )
```
###### redCup
```console
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
```
Итак, мы построили цепочку прототипов

Для проверки, что наш экземпляр  **redCup**  принадлежит  одновременно классам  **_Cup_**  и  **_Dishes_**, воспользуемся оператором  **`instanceof`**:
```javascript
redCup instanceof Cup        // true
redCup instanceof Dishes     // true
greenCup instanceof Object   // true
```
Теперь проверим, как работает наша "машинка"

Мы уже создали экземпляр **redCup**

Давайте используем чашку, а потом помоем ее
```javascript
redCup.use ()
```
выдаст в консоль сообщение: **_Посуда использована, она грязная_**
```javascript
redCup.wash ()
```
выдаст в консоль сообщение:  **_Посуда вымыта_**

***

###### :coffee: :seven: `__proto__`  vs  `Object.create()`
Аналогичный результат можно получить значительно проще, используя свойство **`__proto__`**

Сейчас мы усложним задачу, удлинив цепочку прототипов еще одним классом - **_Kitchenware_**

Создадим конструктор класса  **_Kitchenware_**:
```javascript
var Kitchenware = function () {
    this.className = "Кухонная утварь"
    this.__proto__.constructor = Kitchenware
}
```
Теперь создадим конструктор класса  **_Dishes_**, 

и используем конструктор **_Kitchenware_** 

для создания прототипа экземпляров класса  **_Dishes_**:
```javascript
var Dishes = function () {
    this.__proto__ = new Kitchenware ()
    this.__proto__.constructor = Dishes
    this.className = "Посуда"
}
```
Теперь создадим конструктор класса  **_Cup_**, 

и используем конструктор **_Dishes_** 

для создания прототипа экземпляров класса  **_Cup_**:
```javascript
var Cup = function ( $color ) {
    this.__proto__ = new Dishes ()
    this.__proto__.constructor = Cup
    this.className = "Чашка"
    this.color = $color || "белая"
}
```
Теперь создадим экземпляр  **yellowCup**  класса  **_Cup_**  и выведем его в консоль:
```javascript
var yellowCup = new Cup (  "желтая" )
console.log ( '*** cup: ', yellowCup )
```
А также выведем в консоль цепочку прототипов, используя метод  `Object.getPrototypeOf()`:
```javascript
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
```
<img src="https://lh4.googleusercontent.com/2yS6OUuP93Plj6Fakv-9ZIO_vcEgDYZr3w_qCvL_BESD2DMtRE5wT1QPFA-REI0GtSxOUqT0ToyEl2BVADmn_ha1Srvr4sJCEdIsRWy3qKSqaplxmfnsoVIqazjGQL4dMWQCInGa1OiT9UU" width="580"/>

Обратите внимание, что ссылка на конструктор задана в явном виде:
```javascript
this.__proto__.constructor = Dishes
```
Это необходимо потому, что после выполнения присваивания  
```javascript
this.__proto__ = new Kitchenware ()  
```
имя конструктора прототипа будет  **_Kitchenware_**, а не  **_Dishes_**

Из-за этого мы получили бы в консоли вот такую картинку:

<img src="https://lh5.googleusercontent.com/4dTD4u22uMaShQ2MIj5HqFFlhAQq4JioKL1H9ZdcShLOqIHdVQE76Hjdzzesdj5opetDFiu93XNefBJgNw7G79j6gwEepV_elF621RIHoBl9_YxTVdrbHSo5bbLlWLO6xNWdQVnfOCu_Hsk" width="500"/>

Аналогично мы явно указываем ссылку на функцию-конструктор чашки:
```javascript
this.__proto__.constructor = Cup
```
Однако воспользуемся теперь оператором **`instanceof`**
```javascript
yellowCup instanceof Kitchenware  // true
yellowCup instanceof Dishes       // false
yellowCup instanceof Cup          // false
yellowCup instanceof Object       // true
```
Как мы видим, хотя в консоли цепочка прототипов выглядит вполне прилично,<br/>
на самом деле произошла передача свойств вместо наследования 
***
###### :radio_button: <a href="Object.defineProperty">Object.defineProperty()</a>
###### :radio_button: <a href="Object.defineProperties">Object.defineProperties()</a>
###### :radio_button: <a href="Object.entries">Object.entries()</a>
###### :radio_button: Object.freeze()
###### :radio_button: <a href="Object.getOwnPropertyDescriptor">Object.getOwnPropertyDescriptor()</a>
###### :radio_button: <a href="Object.getOwnPropertyDescriptors">Object.getOwnPropertyDescriptors()</a>
###### :radio_button: <a href="Object.getOwnPropertyNames">Object.getOwnPropertyNames()</a>
###### :radio_button: Object.getOwnPropertySymbols()
###### :radio_button: Object.getPrototypeOf()
###### :radio_button: Object.is()
###### :radio_button: Object.isExtensible()
###### :radio_button: Object.isFrozen()
###### :radio_button: Object.isSealed()
###### :radio_button: <a href="Object.keys">Object.keys()</a>
###### :radio_button: Object.preventExtensions()
###### :radio_button: Object.seal()
###### :radio_button: Object.setPrototypeOf()
###### :radio_button: <a href="Object.values">Object.values()</a>

***
[:link: MDN](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object)