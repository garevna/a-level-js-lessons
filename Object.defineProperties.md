# :mortar_board: Статические методы конструктора  Object
###### :radio_button: <a href="Object.assign">Object.assign()</a>
###### :radio_button: <a href="Object.create">Object.create()</a>
###### :radio_button: <a href="Object.defineProperty">Object.defineProperty()</a>
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
###### :radio_button: <a href="Object.entries">Object.entries()</a>
###### :radio_button: Object.freeze()
###### :radio_button: <a href="Object.getOwnPropertyDescriptor">Object.getOwnPropertyDescriptor()</a>
###### :radio_button: <a href="Object.getOwnPropertyDescriptors">Object.getOwnPropertyDescriptors()</a>
###### :radio_button: <a href="Object.getOwnPropertyNames">Object.getOwnPropertyNames()</a>
###### :radio_button: Object.getOwnPropertySymbols()
###### :radio_button: <a href="">Object.getPrototypeOf()</a>
###### :radio_button: Object.is()
###### :radio_button: Object.isExtensible()
###### :radio_button: Object.isFrozen()
###### :radio_button: Object.isSealed()
###### :radio_button: <a href="Object.keys">Object.keys()</a>
###### :radio_button: Object.preventExtensions()
###### :radio_button: Object.seal()
###### :radio_button: <a href="">Object.setPrototypeOf()</a>
###### :radio_button: <a href="Object.values">Object.values()</a>

***
[:link: MDN](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object)