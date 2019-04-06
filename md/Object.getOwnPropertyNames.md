# :mortar_board: Статические методы конструктора  Object
* <a href="Object.assign">`Object.assign()`</a>
* <a href="Object.create">`Object.create()`</a>
* <a href="Object.defineProperty">`Object.defineProperty()`</a>
* <a href="Object.defineProperties">`Object.defineProperties()`</a>
* <a href="Object.entries">`Object.entries()`</a>
* `Object.freeze()`
* <a href="Object.getOwnPropertyDescriptor">`Object.getOwnPropertyDescriptor()`</a>
* <a href="Object.getOwnPropertyDescriptors">`Object.getOwnPropertyDescriptors()`</a>
***
## :mortar_board: Object.getOwnPropertyNames()
Возвращает имена собственных свойств объекта

Свойства объекта могут быть функциями ( методы )
```javascript
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
```
###### Результат:
```console
(6) ["name", "age", "write", "read", "getName", "setName"]
```
***
* `Object.getOwnPropertySymbols()`
* `Object.getPrototypeOf()`
* `Object.is()`
* `Object.isExtensible()`
* `Object.isFrozen()`
* `Object.isSealed()`
* <a href="Object.keys">`Object.keys()`</a>
* `Object.preventExtensions()`
* `Object.seal()`
* `Object.setPrototypeOf()`
* <a href="Object.values">`Object.values()`</a>
***
[:link: MDN](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object)
