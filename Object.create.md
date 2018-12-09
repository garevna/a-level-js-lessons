# :mortar_board: Статические методы конструктора  Object
###### :radio_button: <a href="Object.assign">Object.assign()</a>
###### :radio_button: <a href="Object.create">Object.create()</a>

***
###### Этот метод использовался для доступа к прототипу объекта до того, как в спецификации ES6 ( 2015 ) появилось свойство **`__proto__`**

Создает экземпляр объекта на основе прототипа

Методу нужно передать в качестве первого аргумента ссылку на прототип, который будет использован при создании экземпляра

Вторым ( опциональным ) аргументом может быть объект-дескриптор свойств создаваемого экземпляра

:coffee: :one:
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
Метод Object.create () позволяет задавать дескрипторы свойств объекта 

( как это делает метод Object.defineProperty, который добавляет свойство в объект )

:coffee: :two:
```javascript
var circle = Object.create ( figure, {
    x: {
        value: undefined, 
        writable: true, 
        configurable: true, 
        enumerable: true
    },
    y: {
        value: undefined, 
        writable: true, 
        configurable: true, 
        enumerable: true
    },
    radius: {
        value: undefined, 
        writable: true, 
        configurable: true, 
        enumerable: true
    }
})
```
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

###### :coffee: :four:
```javascript
var ppl = {
    name: "Тимофей",
    hobby: "футбол"
}
```
Создадим прототипные свойства экземпляра  **ppl**:
```javascript
ppl.__proto__.age = 20
ppl.__proto__.job = "монтажник"
ppl.__proto__.showProps = function () {
    console.log (
        "Собственные свойства: ",
        Object.keys ( this )
    )
    console.log (
        "__proto__: ",
        Object.keys ( this.__proto__ )
    )
}
```
А теперь воспользуемся методом `Object.create()` для создания нового экземпляра  **new_ppl**:
```javascript
var new_ppl = Object.create ( ppl.__proto__ )
```
###### Результат в консоли:
<img src="https://lh6.googleusercontent.com/pYgNnh7cn2_UabMI7WzrqaRw3zmG5nuQaD07Z9_c0ogcnqZ0hHKcCvGS62dV2opTcfDKIxsbyJiuU519FhcjvuJoGTqejaR6C_Zz7hETT4X_4TJ_FgKDYcoLr4JrF9nCRyEDoSpS-qJysy8" width="400"/>

У экземпляра  **new_ppl**  нет собственных свойств

Но прототип экземпляра  **ppl**  скопирован полностью

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
```
Когда мы вызываем конструктор **_SuperClass_** в контексте **_SubClass_**
```javascript
SuperClass.call ( this )
```
мы передаем ему контекст объекта **_SubClass_**

###### Результат в консоли:
<img src="https://lh4.googleusercontent.com/vcps-4BeqX1JkOoOAOPJr82l6T9KExwOvfmuguK2nlkGesPz8LUYIX9qyLPI3ZDyHsAtxystJKAvUVY-EeIBQWVxmg77oiEUNUnqMuST214tak36uuCH9DTw6szNi9h8K2Y_LvtZlcLOQDU" width="400"/>

###### :coffee: :six:
Объявляем конструктор класса:
```javascript
function Dishes ( type ) {
    this.clean = true
    console.log ( "Конструктор Dishes создал экземпляр посуды: \n", this )
}
```
Создаем свойства и методы прототипа:
```javascript
Dishes.prototype.type = "Кухонная утварь"

Dishes.prototype.wash = function () {
    this.clean = true
    console.info ( 'Посуда вымыта' )
}
Dishes.prototype.use = function () {
    this.clean = false
    console.info ( 'Посуда использована, она грязная' )
}
```
<img src="https://lh5.googleusercontent.com/9emXpphmWYWZqJS7ZQb86-2GZSlQWdBLmsF5dG89rKEGBEnAiw1nOMc23_Xkw1hcOvroeW42hGJjHuMrLvseMdbGGJ9mQCXk4njOXuxr5rVqTOcDIg7kYxkxasy4IU4ZjO2AWl_Ic36_o68" width="400"/>

Теперь создадим конструктор класса **Cup**:
```javascript
function Cup ( color ) {
    this.type = "чашка"
    this.color = color || "синяя"
}
```
Нужно сделать так, класс  **Cup**  был подклассом  класса   **Dishes**

Используем прототип класса  **Dishes**:
```javascript
Cup.prototype = Object.create ( Dishes.prototype )
```
<img src="https://lh6.googleusercontent.com/LoDNDwWv6NcHOkzhRvqrertyPAvaUik7KpS4rwNj750jXYNqp1q31KqbqzssHgPWTuGZ58OwjmkasVaIu8cfYKHdqTsxs3HiTv4CpZkShQRekiooP_bk0yNfzU-CSvE8dViYsaP4ZRTCTH8" width="500"/>

Для того, чтобы класс **Cup**  унаследовал собственные перечислимые свойства родительского класса **Dishes**, вызовем конструктор класса **Dishes** с передачей ему контекста  **Cup._prototype_**:
```javascript
Dishes.call ( Cup.prototype )
```
<img src="https://lh3.googleusercontent.com/GUOR-CN9oxPelhTqYSVOm4Ua-bd4dhkExcV9Zodbx1AewdZD-kVUj4xRZhkboUQRwhMZukh2CcgNBGr7zBW1xbgYRpNt74ZvZvgwIeIQ-oVHewFvhind_dAmhDi_zaRsBp0V1cBIUdVS2ig" width="320"/>

Теперь наш конструктор класса   **Cup**  унаследовал свойства и методы  класса  **Dishes**  по созданной нами цепочке прототипов:

Прототип  **Cup**  →  **Dishes**  →  Прототип  **Dishes**  →  Прототип **Object**

Создадим экземпляр класса  Cup:
```javascript
var redCup = new Cup ( "красная" )
```
<img src="https://lh6.googleusercontent.com/AiRyG_GGd8w5aekMVsfDG_sgkeTL5fXOlXr23A63Gzg9LXQrnmeuuT047146pu7BXREiAbuxgV1pxQ9jFTchTLFHEy7UUiqzypvur_zBk8hpZn6p2YytI2K5w3BjPVGB-e6yjv8LM2ONjF8" width="320"/>

Итак, мы построили цепочку прототипов

Для проверки, что наш экземпляр  **redCup**  принадлежит  одновременно классам  **_Cup_**  и  **_Dishes_**, нужно познакомиться с оператором  **`instanceof`**

### :mortar_board: instanceof

С помощью оператора  **`instanceof`**  строится логическое выражение, которое принимает значение **_`true`_**, если объект является экземпляром класса:
```javascript
[объект]  instanceof  [класс]
```
Следующие логические выражения будут иметь значение true:
```javascript
redCup instanceof Cup
redCup instanceof Dishes
greenCup instanceof Object
```
поскольку  **redCup** является одновременно экземпляром класса  **_Cup_** и  класса  **_Dishes_**

    Проверьте самостоятельно в консоли

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