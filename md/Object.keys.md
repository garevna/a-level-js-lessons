# <img src="https://avatars2.githubusercontent.com/u/19735284?s=40&v=4" width="30" title="Ⓒ Irina Fylyppova ( garevna ) 2019"/> Статические методы конструктора  Object

* <a href="Object.assign">`Object.assign()`</a>
* <a href="Object.create">`Object.create()`</a>
* <a href="Object.defineProperty">`Object.defineProperty()`</a>
* <a href="Object.defineProperties">`Object.defineProperties()`</a>
* <a href="Object.entries">`Object.entries()`</a>
* `Object.freeze()`
* <a href="Object.getOwnPropertyDescriptor">`Object.getOwnPropertyDescriptor()`</a>
* <a href="Object.getOwnPropertyDescriptors">`Object.getOwnPropertyDescriptors()`</a>
* <a href="Object.getOwnPropertyNames">`Object.getOwnPropertyNames()`</a>
* `Object.getOwnPropertySymbols()`
* <a href="">`Object.getPrototypeOf()`</a>
* `Object.is()`
* `Object.isExtensible()`
* `Object.isFrozen()`
* `Object.isSealed()`
***
## :mortar_board: Object.keys()
возвращает массив всех **_собственных перечислимых_** свойств экземпляра

> аргумент - ссылка на экземпляр
:coffee:
```javascript
var Human = function () {
    this.name = arguments [ 0 ] || "Тимофей"
    this.age = arguments [ 1 ] || 25
    this.speciality = arguments [ 2 ] || "слесарь"
}

Human.prototype.setSpeciality = function ( spec ) {
    this.speciality = spec
}

var man = new Human ( null )
```
:coffee: Добавим в прототип **Human** новое свойство **_employed_**:
```javascript
Human.prototype.employed = false
console.log ( man.employed )  // false
```    
:coffee: выведем в консоль собственные перечислимые свойства экземпляра  **man**
```javascript
console.log ( Object.keys ( man ) )
```
###### Результат:
```console
(3) [ "name", "age", "speciality" ]
```
:coffee: выведем перечислимые свойства прототипа:
```javascript
console.log ( Object.keys ( Human.prototype ) )
```
###### Результат:
```console
(2) [ "setSpeciality", "employed" ]
```
:coffee: Выполним присваивание:
```javascript
man.employed = true
console.log ( Object.keys ( man ) )
```
###### Результат:
```console
(4) [ "name", "age", "speciality", "employed" ]
```
у экземпляра **man** появилось собственное свойство  **_employed_**, но у прототипа и экземпляра это совершенно различные свойства:
```javascript
console.log ( man.employed )           // true
console.log ( man.__proto__.employed ) // false
```
***
* `Object.preventExtensions()`
* `Object.seal()`
* <a href="">`Object.setPrototypeOf()`</a>
* <a href="Object.values">`Object.values()`</a>

[:link: MDN](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object)
