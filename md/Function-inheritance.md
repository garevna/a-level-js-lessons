## :mortar_board: [Биндинг и каррирование](call-apply-bind)

* [`Конструктор Function`](Function-constructor)

***

### :mortar_board: Наследование

Итак, любая функция в JS является _экземпляром_ класса **Function**

Отсюда следует:
* любая функция является объектом
* все функции наследуют свойства и методы объекта **_prototype_** конструктора **Function**

```javascript
console.dir ( Function )
```

###### Результат в консоли:

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
      ► get arguments: ƒ211жю.. ()
      ► set arguments: ƒ ()
      ► get caller: ƒ ()
      ► set caller: ƒ ()
      ► __proto__: Object
  ► __proto__: ƒ ()
```

:warning: Свойство **_\_\_proto\_\__** любой функции является ссылкой на свойство **_prototype_** конструктора **Function**

```javascript
function func () {
    console.dir ( this )
}

console.dir ( func )
```

###### Результат в консоли:

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

:paperclip: Поскольку конструктор **Function** также является функцией, его свойство **_\_\_proto\_\__** тоже является ссылкой на собственное свойство **_prototype_**

***

Функция в JS всегда является методом ( т.е. свойством какого-либо объекта )

***

:coffee: :one:

Покажем, что функции, объявленные в глобальной области видимости, по умолчанию являются свойствами глобального объекта `window`

```javascript
function sample () {
    console.info ( "I'm sample" )
}

function figure () {
    console.info ( "I'm figure" )
}

var funcs = [ "sample", "figure" ]

for ( var func of funcs ) {
    window [ func ]()
}
```
Все функции, имена которых перечислены в массиве **_funcs_**, будут вызваны и в консоль будет выведено

```console
I'm sample
I'm figure
```

:paperclip: Функция в JS всегда вызывается в контексте какого-либо объекта

***

* [`Контекст вызова`](Function-context)
* [`Изменение контекста`](Function-context-changing)
    * [`call()`](Function-call)
    * [`apply()`](Function-apply)
    * [`bind`](Function-bind)
* [`Currying`](Function-currying)