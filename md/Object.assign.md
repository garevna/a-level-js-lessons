# :mortar_board: Статические методы конструктора  Object
***
## :mortar_board: Object.assign()
Метод копирует значения всех собственных перечислимых свойств 

из одного или более исходных объектов  **`sources`**  в целевой объект **`target`**

Возвращает целевой объект **`target`**
```javascript
Object.assign ( target, ...sources )
```
:warning: Копируются только **_собственные перечислимые_** свойства

:warning: `Object.assign` осуществляет неглубокое копирование

Если свойства исходного объекта являются массивами или объектами, то в целевой объект будут помещены ссылки на соответствующие свойства исходного объекта

:coffee: :one:
```javascript
var newObject = Object.assign ( 
    { }, 
    { name: "Егор", age: 25 }, 
    {  write: true, read: true  } 
)
```
В результате вывода в консоль объекта **newObject** получим
```console
   { 
       name: "Егор",
       age: 25,
       write: true,
       read: true
   }
```
:coffee: :two:
Создадим объект **source**, свойство **_position_** которого будет массивом, а свойство **_attrs_** - объектом:
```javascript
var source = {
    name: "sample",
    attrs: {
        type: "figure",
        color: "green",
        size: 200
    },
    position: [ 250, 250 ]
}
```
Создадим копию  **target**  объекта **source** с помощью метода  `Object.assign`:
```javascript
var target = Object.assign ( {}, source )
```
Покажем, что: 

☝ свойство  **target._attrs_**  содержит ссылку на объект  **source._attrs_**,

☝ а свойство  **target._position_**  содержит ссылку на массив  **source._position_**

Для этого изменим значение элемента массива **target._position_**:
```javascript
target.position [0] = 100
```
и значение свойства **target._attrs_._color_**:
```javascript
target.attrs.color = "#fa0"
```
поскольку  **target._position_** - это всего лишь ссылка на массив **source._position_**,

а  **target._attrs_** - ссылка на объект **source._attrs_**,

соответствующее значение массива **source._position_** 

и значение свойства **_attrs_._color_** объекта **source** изменились:

<img src="https://lh6.googleusercontent.com/S2iEECu3Z_9URDjc_Pry-8fFDfqbXXZG4Cw3xkhbJRM6fgWg5cVRGlXQ9kJDLXyeOH6b7ss3fMl12js3kIaPd30vcgC_-iIcD2fkqAPzJW6NbtBC35PWJ_Y_zLSLn-6tmtjr-WS4xftSpxE" width="500"/>

***
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
* <a href="Object.keys">`Object.keys()`</a>
* `Object.preventExtensions()`
* `Object.seal()`
* <a href="">`Object.setPrototypeOf()`</a>
* <a href="Object.values">`Object.values()`</a>

***
[:link: MDN](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object)