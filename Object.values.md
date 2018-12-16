# :mortar_board: Статические методы конструктора  Object
###### :radio_button: <a href="Object.assign">Object.assign()</a>
###### :radio_button: <a href="Object.create">Object.create()</a>
###### :radio_button: <a href="Object.defineProperty">Object.defineProperty()</a>
###### :radio_button: <a href="Object.defineProperties">Object.defineProperties()</a>
###### :radio_button: <a href="Object.entries">Object.entries()</a>
###### :radio_button: Object.freeze()
###### :radio_button: <a href="Object.getOwnPropertyDescriptor">Object.getOwnPropertyDescriptor()</a>
###### :radio_button: <a href="Object.getOwnPropertyDescriptors">Object.getOwnPropertyDescriptors()</a>
###### :radio_button: <a href="Object.getOwnPropertyNames">Object.getOwnPropertyNames()</a>
###### :radio_button: Object.getOwnPropertySymbols()
###### :radio_button: <a href="">Object.getPrototypeOf()</a>
###### :radio_button: Object.is()
###### :radio_button: Object.isExtensible()
###### :radio_button: Object.isFrozen()
###### :radio_button: Object.isSealed()
###### :radio_button: <a href="Object.keys">Object.keys()</a>
###### :radio_button: Object.preventExtensions()
###### :radio_button: Object.seal()
###### :radio_button: <a href="">Object.setPrototypeOf()</a>
***
## :mortar_board: Object.values()
###### ES8 ( 2017 )
Возвращает **массив** **_значений_** собственных перечислимых свойств экземпляра,<br/>
т.е. тех свойств, имена которых возвращает метод **`Object.keys()`**
```javascript
var obj = {
    name: "first",
    type: "circle",
    color: "red",
    radius: 100,
    center: [ 120, 120 ]
}

console.log ( Object.values( obj ) )
```
###### Результат:
```console
(5) ["first", "circle", "red", 100, Array(2)]
```
***
[:link: MDN](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object)