# :mortar_board: Биндинг и карринг

## :mortar_board: Конструктор Function
Функции можно создавать путем явного вызова конструктора **Function** с ключевым словом **_`new`_**:
```javascript
var func = new Function ( 
    "x",
    "y",
    `
    console.log ( x, y )
    console.log ( this )
    return arguments
    `
)

func( 5, 8, 11, false )
```
В результате в консоль будут выведены 5, 8

затем - глобальный объект `window`

затем - объект `arguments` функции, содержащий 5, 8, 11, false

:warning: Однако следует помнить, что созданные таким образом функции будут анонимными ( "_anonymous_" )
```javascript
console.dir ( func )
```
```console 
▼ ƒ anonymous(x,y,z )
    arguments: null
    caller: null
    length: 3
    name: "anonymous"
  ► prototype: {constructor: ƒ}
  ► __proto__: ƒ ()
```

### :mortar_board: Наследование
Итак, любая функция в JS является _экземпляром_ класса **Function**

Отсюда следует:
* любая функция является объектом
* все функции наследуют свойства и методы объекта **_prototype_** конструктора **Function**

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
      ► get arguments: ƒ211жю.. ()
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

Поскольку конструктор **Function** также является функцией, его свойство **_\_\_proto\_\__** тоже является ссылкой на собственное свойство **_prototype_**

***

Функция в JS всегда является методом ( т.е. свойством какого-либо объекта )

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
***

Функция в JS всегда вызывается в контексте какого-либо объекта

## :mortar_board: Контекст вызова
Как мы уже знаем, каждая функция в момент вызова получает ссылку на контекст вызова - **_`this`_**

Если контекст не указан явно при вызове, то по умолчанию подразумевается глобальный объект ( `window` )

Явное указание контекста вызова происходит при обращении к методам какого-либо объекта:

```javascript
var obj = {
    name: "google",
    say: function () {
        console.log ( this.name )
    }
}
obj.say()   // google
```
Здесь перед именем метода **_say()_** явным образом указан контекст вызова **obj**,<br/>
поэтому _**`this`**_ внутри метода **_say()_** является ссылкой на **obj**

```javascript
window.name = "window"
function say () {
    console.log ( this.name )
}
var obj = {
    name: "google",
    say: say
}
say()       // window
obj.say()   // google
```

## :mortar_board: Изменение контекста
Заглянув в свойство **_prototype_** конструктора **Function** или в свойство **_\_\_proto\_\__** экземпляра функции, можно обнаружить три метода, которые наследуют все функции от своего создателя:
* apply()
* call()
* bind()

Эти методы обеспечивают возможность гибко манипулировать контекстом вызова функции

Методы **_apply()_** и **_call()_** позволяют одноразово вызвать функцию в заданном контексте

Они отличаются только способом передачи аргументов

Метод **_bind()_** создает новый экземпляр функции с жестко установленным контекстом вызова, который невозможно изменить или "потерять"

Кроме этого, **_bind()_** позволяет так же жестко привязать аргументы к новому экземпляру: фактически, указанные аргументы станут постоянными для нового экземпляра функции

***
### call()

Первым обязательным аргументом метода является ссылка на объект, в контексте которого будет вызвана функция
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
func.call ( figure )  // figure
func.call ( sample )  // sample
```
Далее могут следовать аргументы:

```javascript
function func () {
    console.log ( this.name, arguments )
}

var figure = { name: "figure" }
var sample = { name: "sample" }

func.call ( figure, 9, false, "Hello" )
func.call ( sample, 5, 1, "Bye" )
```
###### Результат в консоли:
```console
figure ► Arguments(3) [ 9, false, "Hello", callee: ƒ, Symbol(Symbol.iterator): ƒ ]
sample ► Arguments(3) [ 5, 1, "Bye", callee: ƒ, Symbol(Symbol.iterator): ƒ ]
```
