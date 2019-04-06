# <img src="https://avatars2.githubusercontent.com/u/19735284?s=40&v=4" width="30" title="Ⓒ Irina Fylyppova ( garevna ) 2019"/> Статические методы конструктора  Object

* <a href="Object.assign">`Object.assign()`</a>
* <a href="Object.create">`Object.create()`</a>
* <a href="Object.defineProperty">`Object.defineProperty()`</a>
* <a href="Object.defineProperties">`Object.defineProperties()`</a>
***
## :mortar_board: Object.entries()
###### ES8 ( 2017 )
Возвращает массив собственных перечислимых свойств экземпляра<br/>
в виде массива из двух элементов: имени свойства и его значения  
```javascript
var obj = {
    name: "first",
    type: "circle",
    color: "red",
    radius: 100,
    center: [ 120, 120 ]
}

console.log ( Object.entries( obj ) )
```
###### Результат:
```console
▼ (5) [Array(2), Array(2), Array(2), Array(2), Array(2)]
  ► 0: (2) ["name", "first"]
  ► 1: (2) ["type", "circle"]
  ► 2: (2) ["color", "red"]
  ► 3: (2) ["radius", 100]
  ► 4: (2) ["center", Array(2)]
    length: 5
  ► __proto__: Array(0)
```
###### :coffee: :one: Нарисуем окружность
```javascript
var obj = {
    width: "30%",
    height: "30%",
    border: "solid 1px red",
    borderRadius: "50%",
    position: "fixed",
    top: "10%",
    left: "10%"
}
var elem = document.body.appendChild (
    document.createElement ( "div" )
)
Object.entries( obj )
   .forEach ( prop => elem.style [ prop [0] ] = prop [1] )
```

###### :coffee: :two: Выведем все свойства объекта **obj** в консоль
```javascript
console.info ( 'obj = {\n' )
for ( var x of Object.entries( obj ) ) {
    console.info ( `     ${x[0]}:${x[1]}\n` )
}
console.info ( '}' )
```
###### Результат:
```console
obj = {
      width:30%
      height:30%
      border:solid 1px red
      borderRadius:50%
      position:fixed
      top:10%
      left:10%
}
```
***
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
