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

######
<img src="https://lh4.googleusercontent.com/vcps-4BeqX1JkOoOAOPJr82l6T9KExwOvfmuguK2nlkGesPz8LUYIX9qyLPI3ZDyHsAtxystJKAvUVY-EeIBQWVxmg77oiEUNUnqMuST214tak36uuCH9DTw6szNi9h8K2Y_LvtZlcLOQDU" width="400"/>

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