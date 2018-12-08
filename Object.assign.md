# :mortar_board: Статические методы конструктора  Object
***
## :mortar_board: Object.assign()
Метод копирует значения всех собственных перечислимых свойств 

из одного или более исходных объектов  `sources`  в целевой объект `target`

Возвращает целевой объект `target`
```javascript
Object.assign ( target, ...sources )
```
:warning: Копируются только **собственные перечислимые** свойства

> `Object.assign` осуществляет неглубокое копирование

> Если свойства исходного объекта являются массивами или объектами, то в целевой объект будут помещены ссылки на соответствующие свойства исходного объекта
```javascript
```
***
###### :radio_button: <a href="">Object.create()</a>
###### :radio_button: <a href="Object.defineProperty">Object.defineProperty()</a>
###### :radio_button: <a href="Object.defineProperties">Object.defineProperties()</a>
###### :radio_button: <a href="Object.entries">Object.entries()</a>
###### :radio_button: <a href="">Object.freeze()</a>
###### :radio_button: <a href="Object.getOwnPropertyDescriptor">Object.getOwnPropertyDescriptor()</a>
###### :radio_button: <a href="Object.getOwnPropertyDescriptors">Object.getOwnPropertyDescriptors()</a>
###### :radio_button: <a href="Object.getOwnPropertyNames">Object.getOwnPropertyNames()</a>
###### :radio_button: <a href="">Object.getOwnPropertySymbols()</a>
###### :radio_button: <a href="">Object.getPrototypeOf()</a>
###### :radio_button: <a href="">Object.is()</a>
###### :radio_button: <a href="">Object.isExtensible()</a>
###### :radio_button: <a href="">Object.isFrozen()</a>
###### :radio_button: <a href="">Object.isSealed()</a>
###### :radio_button: <a href="Object.keys">Object.keys()</a>
###### :radio_button: <a href="">Object.preventExtensions()</a>
###### :radio_button: <a href="">Object.seal()</a>
###### :radio_button: <a href="">Object.setPrototypeOf()</a>
###### :radio_button: <a href="Object.values">Object.values()</a>

***
[:link: MDN](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object)