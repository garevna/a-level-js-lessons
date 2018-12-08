# :mortar_board: Статические методы конструктора  Object
###### :radio_button: <a href="Object.assign">Object.assign()</a>
###### :radio_button: <a href="">Object.create()</a>
###### :radio_button: <a href="Object.defineProperty">Object.defineProperty()</a>
###### :radio_button: <a href="Object.defineProperties">Object.defineProperties()</a>
###### :radio_button: <a href="Object.entries"></a>Object.entries()
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
***
## :mortar_board: Object.keys()
> ###### возвращает массив всех **_собственных перечислимых_** свойств экземпляра
> ###### аргумент - ссылка на экземпляр
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
:coffee: <code>Добавим в прототип **Human** новое свойство **_employed_**:</code>
```javascript
Human.prototype.employed = false
console.log ( man.employed )  // false
```    
:coffee: <code>выведем в консоль собственные перечислимые свойства экземпляра  **man**</code>
```javascript
console.log ( Object.keys ( man ) )
```
###### Результат:
```console
(3) [ "name", "age", "speciality" ]
```
:coffee: <code>выведем перечислимые свойства прототипа:</code>
```javascript
console.log ( Object.keys ( Human.prototype ) )
```
###### Результат:
```console
(2) [ "setSpeciality", "employed" ]
```
:coffee: <code>Выполним присваивание:</code>
```javascript
man.employed = true
console.log ( Object.keys ( man ) )
```
###### Результат:
```console
(4) [ "name", "age", "speciality", "employed" ]
```
> <code>у экземпляра **man** появилось собственное свойство  **_employed_**, но у прототипа и экземпляра это совершенно различные свойства:</code>
```javascript
console.log ( man.employed )           // true
console.log ( man.__proto__.employed ) // false
```
***
###### :radio_button: <a href="">Object.preventExtensions()</a>
###### :radio_button: <a href="">Object.seal()</a>
###### :radio_button: <a href="">Object.setPrototypeOf()</a>
###### :radio_button: <a href="Object.values">Object.values()</a>

[:link: MDN](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object)