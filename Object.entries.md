<a name="top"></a>
# :mortar_board: Статические методы конструктора  Object
<ul>
    <li>Object.assign()</li>
    <li>Object.create()</li>
    <li><a href="">Object.defineProperty()</a></li>
    <li><a href="">Object.Object.defineProperties()</a></li>
    <li><a href="">Object.freeze()</a></li>
    <li><a href="">Object.getOwnPropertyDescriptor()</a></li>
    <li><a href="Object.getOwnPropertyDescriptors">Object.getOwnPropertyDescriptors()</a></li>
</ul>

| | |
|-|-|
| Object.assign() |  [**`Object.defineProperty()`**](#mortar_board-objectdefineproperty) |
| Object.create() | Object.defineProperties() |
| Object.freeze() | [**`Object.getOwnPropertyDescriptor()`**](#mortar_board-objectgetownpropertydescriptor) |
| Object.is() | [**`Object.getOwnPropertyNames()`**](#objectgetownpropertynames-) |
| Object.isExtensible() | Object.getOwnPropertySymbols() |
| Object.isFrozen() | Object.getPrototypeOf() |
| Object.isSealed() | [**`Object.keys()`**](#objectkeys) |
| Object.seal() | Object.preventExtensions() |
| Object.setPrototypeOf() | [**`Object.getOwnPropertyDescriptors()`**](#mortar_board-objectgetownpropertydescriptors) |
| [**`Object.values()`**](#mortar_board-objectvalues) | [**`Object.entries()`**](#mortar_board-objectentries) | |

***
[:link: MDN](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object)

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
