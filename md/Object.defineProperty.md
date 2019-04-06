# <img src="https://avatars2.githubusercontent.com/u/19735284?s=40&v=4" width="30" title="Ⓒ Irina Fylyppova ( garevna ) 2019"/> Статические методы конструктора  Object

* <a href="Object.assign">`Object.assign()`</a>
* <a href="Object.create">`Object.create()`</a>

***

## :mortar_board: Object.defineProperty()

Этот метод позволяет создать объекту свойство с дескриптором

* Первый аргумент метода - ссылка на объект, которому добавляется свойство
* Второй аргумент - имя свойства ( строка )
* Третий аргумент - объект дескриптора свойства

:coffee: :one:

Добавим свойство **_type_** объекту **sample** и сделаем это свойство неперечислимым

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

***

### :mortar_board: геттер и сеттер свойства

###### [Вычисляемые свойства](get-and-set)

:coffee: :two:

Добавим еще одно свойство объекту  **sample**

Свойство   **_operation_**   будет  с геттером и сеттером

:warning: Когда определяются атрибуты _`get()`_  и  _`set()`_ в дескрипторе свойства, нельзя использовать атрибуты  _`writable`_ и _`value`_

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

:coffee: :three:

```javascript
var course = 28

var thing = {
    name: "Утюг",
    mark: "Tefal",
    priceUSD: 20
}

Object.defineProperty ( thing, "priceUAH", {
    get: function () {
        return this.priceUSD * course
    },
    set: function ( newPriceUAH ) {
        this.priceUSD = newPriceUAH / course
    }
})

console.log ( thing.priceUAH )
```

###### Результат:

```console
560
```

Теперь выполним присваивание значения вычисляемому свойству ( вызывая под капотом сеттер этого свойства ):

```javascript
thing.priceUAH = 450

console.log ( thing.priceUDS )
```

###### Результат:

```console
8.928571428571429
```

Выведем в консоль дескриптор вычисляемого свойства **`priceUAH`**

```javascript
console.log (
    Object.getOwnPropertyDescriptor ( thing, "priceUAH" )
)
```

###### Результат:

```console
▼ {get: ƒ, set: ƒ, enumerable: true, configurable: true}
    configurable: true
    enumerable: true
  ► get: ƒ priceUAH()
  ► set: ƒ priceUAH( newPriceUAH )
  ► __proto__: Object
```

***

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
* <a href="Object.keys">`Object.keys()`</a>
* `Object.preventExtensions()`
* `Object.seal()`
* <a href="">`Object.setPrototypeOf()`</a>
* <a href="Object.values">`Object.values()`</a>

***
[:link: MDN](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object)
