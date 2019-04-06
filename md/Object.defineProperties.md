# <img src="https://avatars2.githubusercontent.com/u/19735284?s=40&v=4" width="30" title="Ⓒ Irina Fylyppova ( garevna ) 2019"/> Статические методы конструктора  Object

* <a href="Object.assign">`Object.assign()`</a>
* <a href="Object.create">`Object.create()`</a>
* <a href="Object.defineProperty">`Object.defineProperty()`</a>
***
## :mortar_board: Object.defineProperties()
Можно добавить объекту сразу несколько свойств с дескрипторами

Создадим в разметке новый элемент   svg
```html
<body>
    <svg width="400" height="400"
         style="border: 1px dotted;"/>
    </svg>
</body>
```
и добавим сразу два свойства объекту **sample** с помощью метода **_Object.defineProperties()_**:
```javascript
Object.defineProperties ( sample, {
    canvas: {
        value: document.querySelector ( "svg" ),
        writable: false,
        configurable: false,
        enumerable: false
    },
    owner: {
        get: () => this.owner,
        set: newOwner => this.owner = newOwner
    }
})
```
<img src="https://lh3.googleusercontent.com/e2VuWmeLvjOpFj4NoiZN93QXyrZUgr8S8cSxUDvPvaq7FWQEngz0jNtM63z70TOjow4YGiLMQ_a2_77Q6id0Lk93kpqm4MQJKWBzzj1jT-x8jkAKmisADDgnsMuo7F3zc_6yxf-z5jKG0mY" width="700"/>

***
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
