<a name="top"></a>
# :mortar_board: Статические методы конструктора  Object

|  | |
|-|-|
| `Object.assign()` |  [**`Object.defineProperty()`**](#mortar_board-objectdefineproperty) |
| `Object.create()` | `Object.defineProperties()` |
| `Object.freeze()` | [**`Object.getOwnPropertyDescriptor()`**](#mortar_board-objectgetownpropertydescriptor) |
| `Object.is()` | [**`Object.getOwnPropertyNames()`**](Object.getOwnPropertyNames) |
| `Object.isExtensible()` | `Object.getOwnPropertySymbols()` |
| `Object.isFrozen()` | `Object.getPrototypeOf()` |
| `Object.isSealed()` | [**`Object.keys()`**](#objectkeys) |
| `Object.seal()` | `Object.preventExtensions()` |
| `Object.setPrototypeOf()` | [**`Object.getOwnPropertyDescriptors()`**](#mortar_board-objectgetownpropertydescriptors) |
| [**`Object.values()`**](#mortar_board-objectvalues) | [**`Object.entries()`**](#mortar_board-objectentries) | |

***
[:link: MDN](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object)

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