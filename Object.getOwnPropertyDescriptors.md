# :mortar_board: Статические методы конструктора  Object
###### :radio_button: <a href="Object.assign">Object.assign()</a>
###### :radio_button: <a href="">Object.create()</a>
###### :radio_button: <a href="Object.defineProperty">Object.defineProperty()</a>
###### :radio_button: <a href="Object.defineProperties">Object.defineProperties()</a>
###### :radio_button: <a href="Object.entries"></a>Object.entries()
###### :radio_button: <a href="">Object.freeze()</a>
###### :radio_button: <a href="Object.getOwnPropertyDescriptor">Object.getOwnPropertyDescriptor()</a>
###### :radio_button: <a href="Object.getOwnPropertyDescriptors">Object.getOwnPropertyDescriptors()</a>
***
## :mortar_board: Object.getOwnPropertyDescriptors()
###### ES8 ( 2017 )
Получает объект<br/>
Возвращает объект, у которого:<br/>
*    имена свойств - это имена свойств исходного объекта<br/>
*    значения свойств - это дескрипторы свойств исходного объекта<br/>
```javascript
var obj = {
        name: "first",
        type: "circle",
        color: "red",
        radius: 100,
        center: [ 120, 120 ]
}

Object.getOwnPropertyDescriptors( obj )
```
###### Результат:
```console
▼ {name: {…}, type: {…}, color: {…}, radius: {…}, center: {…}}
  ► center: {value: Array(2), writable: true, enumerable: true, configurable: true}
  ► color: {value: "red", writable: true, enumerable: true, configurable: true}
  ► name: {value: "first", writable: true, enumerable: true, configurable: true}
  ► radius: {value: 100, writable: true, enumerable: true, configurable: true}
  ► type: {value: "circle", writable: true, enumerable: true, configurable: true}
  ► __proto__: Object
```
***
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