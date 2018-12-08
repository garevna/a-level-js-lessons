###### <a href="Object.assign">Object.assign()</a>
###### <a href="">Object.create()</a>
###### <a href="Object.defineProperty">Object.defineProperty()</a>
###### <a href="Object.defineProperties">Object.defineProperties()</a>
###### <a href="Object.entries"></a>Object.entries()
###### <a href="">Object.freeze()</a>
###### <a href="Object.getOwnPropertyDescriptor">Object.getOwnPropertyDescriptor()</a>
###### <a href="Object.getOwnPropertyDescriptors">Object.getOwnPropertyDescriptors()</a>
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
###### <a href="Object.getOwnPropertyNames">Object.getOwnPropertyNames()</a>
###### <a href="">Object.getOwnPropertySymbols()</a>
###### <a href="">Object.getPrototypeOf()</a>
###### <a href="">Object.is()</a>
###### <a href="">Object.isExtensible()</a>
###### <a href="">Object.isFrozen()</a>
###### <a href="">Object.isSealed()</a>
###### <a href="Object.keys">Object.keys()</a>
###### <a href="">Object.preventExtensions()</a>
###### <a href="">Object.seal()</a>
###### <a href="">Object.setPrototypeOf()</a>
###### <a href="Object.values">Object.values()</a>