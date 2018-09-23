## 🎓 Публичные и приватные свойства и методы экземпляров

:white_square_button: Все свойства, объявленные в конструкторе с ключевым словом  **`this`**, будут публичными  ( *name*, *age*, *changeName* )

:white_square_button: Все свойства, объявленные в конструкторе с ключевым словом  var или function, будут приватными  ( defaultName, showName )

`приватные свойства ( и методы ) экземпляра недоступны извне`

:coffee:
```javascript
var  Girl = function ( name, age ) {

    var defaultName = "Jane"

    this.name = name || defaultName
    this.age = age || 25

    function showName ( name ) {
        console.log ( `Меня зовут ${ name }` )
    }

    this.changeName = function ( newName ) {
        this.name = newName
        showName ( this.name )
    }
}
```
В публичных методах экземпляра  **`this`**  будет ссылкой на контект вызова `( экземпляр, в контексте которого вызван метод )`
```javascript
var lena = new Girl ( "Лена", 18 )
lena.changeName
```
:warning: в приватных методах экземпляра контекстом вызова будет *глобальный объект* **`window`**

( т.е. внутри метода  **showName**  **`this`**  будет ссылкой на объект **`window`** )

:coffee:
```javascript
var girls = []

girls [ 0 ] = new Girl ( "Лена", 18 )
girls [ 1 ] = new Girl ( "Марина", 20 )
```