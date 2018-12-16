# :mortar_board: Статические методы конструктора  Object
###### :radio_button: <a href="Object.assign">Object.assign()</a>
###### :radio_button: <a href="Object.create">Object.create()</a>
***
## :mortar_board: Object.defineProperty()
Этот метод позволяет создать объекту свойство с дескриптором

* Первый аргумент метода - ссылка на объект, которому добавляется свойство
* Второй аргумент - имя свойства ( строка )
* Третий аргумент - объект дескриптора свойства

:coffee: Добавим свойство **_type_** объекту **sample** и сделаем это свойство неперечислимым
```javascript
var sample = {
    name: "figure",
    size: 100,
    color: "red"
}
Object.defineProperty ( sample, 'type', {
    value: "svg",
    enumerable: false
})

Object.keys ( sample )
```
###### Результат:
```console
► (3) ["name", "size", "color"]
```
### :mortar_board: геттер и сеттер свойства
Добавим еще одно свойство объекту  **sample**<br/>
Свойство   **_operation_**   будет  с геттером и сеттером<br/>
:warning: Когда определяются атрибуты _`get()`_  и  _`set()`_ в дескрипторе свойства, <br/>
нельзя использовать атрибуты  _`writable`_ и _`value`_
```javascript
Object.defineProperty ( sample, "operation", {
    get: () => this.operation ? 
               this.operation.substr ( 0, 1 ) : "?",
    set: newVal => this.operation = newVal + "***"
})
```
###### Результат:
```console
▼ {name: "figure", size: 100, color: "red", type: "svg"}
    color: "red"
    name: "figure"
    size: 100
    operation: (...)
    type: "svg"
  ► get operation: () => {…}
  ► set operation: newVal => this.operation = newVal + "***"
  ► __proto__: Object
```
***
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