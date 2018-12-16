# :mortar_board: Изменение контекста

Любая функция в JS является _экземпляром_, созданным с помощью конструктора **Function**

Отсюда следует:
* любая функция является объектом ( экземпляром )
* функция наследует свойства и методы объекта **_prototype_** конструктора **Function**

```javascript
console.dir ( Function )
```
```console
▼ ƒ Function()
    arguments: (...)
    caller: (...)
    length: 1
    name: "Function"
  ▼ prototype: ƒ ()
      ► apply: ƒ apply()
        arguments: (...)
      ► bind: ƒ bind()
      ► call: ƒ call()
        caller: (...)
      ► constructor: ƒ Function()
        length: 0
        name: ""
      ► toString: ƒ toString()
      ► Symbol(Symbol.hasInstance): ƒ [Symbol.hasInstance]()
      ► get arguments: ƒ ()
      ► set arguments: ƒ ()
      ► get caller: ƒ ()
      ► set caller: ƒ ()
      ► __proto__: Object
  ► __proto__: ƒ ()
```
Свойство **_\_\_proto\_\__** любой функции является ссылкой на свойство **_prototype_** конструктора **Function**
```javascript
function func () {
    console.dir ( this )
}

console.dir ( func )
```

```console
▼ ƒ func()
    arguments: null
    caller: null
    length: 0
    name: "func"
  ► prototype: {constructor: ƒ}
  ▼ __proto__: ƒ ()
      ► apply: ƒ apply()
        arguments: (...)
      ► bind: ƒ bind()
      ► call: ƒ call()
        caller: (...)
      ► constructor: ƒ Function()
        length: 0
        name: ""
      ► toString: ƒ toString()
      ► Symbol(Symbol.hasInstance): ƒ [Symbol.hasInstance]()
      ► get arguments: ƒ ()
      ► set arguments: ƒ ()
      ► get caller: ƒ ()
      ► set caller: ƒ ()
      ► __proto__: Object
```

Поскольку конструктор **Function** также является функцией, его свойство **_\_\_proto\_\__** тоже является ссылкой на собственное свойство **_prototype_**

***
:coffee: :one:

Функция в JS всегда является методом ( т.е. свойством какого-либо объекта )

Покажем, что функции, объявленные в глобальной области видимости, по умолчанию являются свойствами глобального объекта `window`

```javascript
function sample () {
    console.info ( "sample" )
}

function figure () {
    console.info ( "figure" )
}

var funcs = [ "sample", "figure" ]

for ( var func of funcs ) {
    window [ func ]()
}
```
***

## Контекст вызова
Как мы уже знаем, каждая функция в момент вызова получает ссылку на контекст вызова - **_`this`_**

Функция в JS всегда вызывается в контексте какого-либо объекта

Если контекст не указан явно при вызове, то по умолчанию подразумевается глобальный объект ( `window` )

В контексте исполнения функции ссылка на конст



```javascript
window.name = "window"

function func () {
    console.log ( this.name )
}

var figure = {
    name: "figure"
}

var sample = {
    name: "sample"
}

func ()
func.call ( figure )
func.call ( sample )
```