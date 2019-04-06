# <img src="https://avatars2.githubusercontent.com/u/19735284?s=40&v=4" width="30" title="Ⓒ Irina Fylyppova ( garevna ) 2019"/> Статические методы конструктора  Object

* <a href="Object.assign">`Object.assign()`</a>
* <a href="Object.create">`Object.create()`</a>
* <a href="Object.defineProperty">`Object.defineProperty()`</a>
* <a href="Object.defineProperties">`Object.defineProperties()`</a>
* <a href="Object.entries">`Object.entries()`</a>
* `Object.freeze()`
***
## :mortar_board: Object.getOwnPropertyDescriptor()
Этот метод позволяет получить дескриптор собственного свойства объекта

Возвращает объект дескриптора свойства

Первым аргументом метода является объект

второй аргумент - имя свойства объекта

### :mortar_board: Атрибуты свойств
Для каждого свойства объекта существует **дескриптор свойства**

Дескриптор свойства - это объект, который содержит атрибуты свойства:

#### ✋ value
> <code>значение свойства</code><br/>
> <code>( по умолчанию **_undefined_** )</code>
#### ✋ writable
> <code>( _true_ | _false_ )</code>
> <code>можно ли изменять значение свойства</code>
> <code>( по умолчанию **_true_** )</code>
#### ✋ set
> <code>сеттер свойства</code><br/>
> <code>( функция, которая вызывается при записи значения свойства )</code><br/>
> <code>( по умолчанию имеет значение **_undefined_** )</code>
#### ✋ **get**
> <code>геттер свойства </code><br/>
> <code>( функция, которая вызывается при чтении значения свойства )</code><br/>
> <code>( по умолчанию имеет значение **_undefined_** )</code>
#### ✋ **enumerable** ( `true` | `false` )
> <code>является свойство перечислимым, или нет </code><br/>
> <code>т.е. будет ли оно итерироваться оператором **_for..in_**</code><br/>
> <code>и возвращаться при вызове метода **_Object.keys()_**</code><br/>
> <code>( по умолчанию имеет значение **_false_** )</code>
#### ✋ **configurable** ( `true` | `false` )
> <code>доступно ли свойство для модификации ( удаления, изменения атрибутов свойства )</code><br/>
> <code>можно ли конфигурировать свойство с помощью метода **_defineProperty_** </code><br/>
> <code>( по умолчанию **_false_** )</code><br/>

:coffee:
```javascript
var newObject = {
    name: "Егор",
    age: 25,
    write: true,
    read: true,
    getName() {},
    setName() {}
}
Object.getOwnPropertyDescriptor ( newObject, "getName" )
```
###### Результат:
```console
▼ {value: ƒ, writable: true, enumerable: true, configurable: true}
    configurable: true
    enumerable: true
  ► value: ƒ getName()
    writable: true
  ► __proto__: Object
```
***
* <a href="Object.getOwnPropertyDescriptors">`Object.getOwnPropertyDescriptors()`</a>
* <a href="Object.getOwnPropertyNames">`Object.getOwnPropertyNames()`</a>
* `Object.getOwnPropertySymbols()`
* <a href="">`Object.getPrototypeOf()`</a>
* `Object.is()`
* `Object.isExtensible()`
* `Object.isFrozen()`
* `Object.isSealed()`
* <a href="Object.keys">`Object.keys()`</a>
* `Object.preventExtensions()`
* `Object.seal()`
* <a href="">`Object.setPrototypeOf()`</a>
* <a href="Object.values">`Object.values()`</a>

***
[:link: MDN](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object)
