# :mortar_board: Биндинг и каррирование

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
### :mortar_board: call()

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

func ()               // window
func.call ( figure )  // figure
func.call ( sample )  // sample
```
Далее может следовать перечень аргументов:

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
***
### :mortar_board: apply()

Метод **_apply()_** отличается от метода **_call()_** только способом передачи аргументов - теперь их нужно передавать массивом:

```javascript
function func () {
    console.log ( this.name, arguments )
}

var figure = { name: "figure" }
var sample = { name: "sample" }

func.apply ( figure, [ 9, false, "Hello" ] )
func.apply ( sample, [ 5, 1, "Bye" ] )
```
###### Результат в консоли:
```console
figure ► Arguments(3) [ 9, false, "Hello", callee: ƒ, Symbol(Symbol.iterator): ƒ ]
sample ► Arguments(3) [ 5, 1, "Bye", callee: ƒ, Symbol(Symbol.iterator): ƒ ]
```
:coffee: :two:

Передача массива аргументов вместо перечня их значений обеспечивает определенную гибкость, поскольку массивы передаются по ссылке, и содержимое массива может динамически обновляться от вызова к вызову:
```javascript
var args = [0]
var test = ( function () {
    var counter = 0
    return function () {
        args.push ( this.name )
        args[0] = ++counter
    }
})()

function func () {
    this.test()
    var args = Array.from ( arguments )
    console.warn ( `Who was called before ${this.name} (${args.splice(0, 1)}):` ) 
    for ( var x of args )
        console.info ( x )
}

var figure = { name: "figure", test: test }
var sample = { name: "sample", test: test }
var google = { name: "google", test: test }

func.apply ( figure, args )
func.apply ( sample, args )
func.apply ( google, args )
```
###### Результат в консоли:
```console
⚠️ ► Who was called before figure (0):
⚠️ ► Who was called before sample (1):
figure
⚠️ ► Who was called before google (2):
figure
sample
```
Вызовы функции **_func_** логируются в массиве **args**

При каждом вызове функция **_func_** получает в аргументах полный отчет о том, сколько раз она была вызвана до этого, и с каким контекстом

Поменяйте местами вызовы функций, или добавьте повторный вызов любой из функций, и посмотрите результат

***

## :mortar_board: bind()

По сути, метод **`bind()`** является декоратором, поскольку он создает обертку для исходной функции

Функция-wrapper, в которую "заворачивается" исходная функция, вызывает ее в нужном контексте:

```javascript
function bindContext ( func, context, args ) {
    func.call ( context, args )
}

function sample ( message ) {
    console.log ( `${this.name}: ${message}` )
}

var user = { name: "Фигаро" }

bindContext ( sample, user, "Hello" )
```
Чтобы функция-wrapper возвращала новый экземпляр, немного изменим код,

а так же обеспечим возможность привязки не только контекста вызова,

но и аргументов ( этот прием программирования называется **_Currying_**, или каррирование ):
```javascript
function bindContext ( func, context, props ) {
    return function ( args ) {
        props ? func.call ( context, props, args ) :
                func.call ( context, args )
    }
}

function sample ( message ) {
    console.log ( `${this.name}: ${message}` )
}

var user = { name: "Фигаро" }

var userSayHello = bindContext ( sample, user, "Hello" )

var userSay = bindContext ( sample, user )

userSayHello()     // Фигаро: Hello
userSay ( "Bye" )  // Фигаро: Bye
```
Вот и весь механизм работы метода **`bind()`**

:coffee: :three:
```javascript
var test = ( function () {
    var counter = 0
    return function () {
        return ++counter
    }
})()

function func () {
    console.warn ( `Функция func вызвана ${this.test()} раз в контексте объекта ${this.name}` ) 
}

var figure = { name: "figure", test: test }
var sample = { name: "sample", test: test }
var google = { name: "google", test: test }

var figureFunc = func.bind ( figure )
var sampleFunc = func.bind ( sample )
var googleFunc = func.bind ( google )

figureFunc ()
sampleFunc ()
googleFunc ()
```

###### Результат в консоли:

```console
⚠️ ► Функция func вызвана 1 раз в контексте объекта figure
⚠️ ► Функция func вызвана 2 раз в контексте объекта sample
⚠️ ► Функция func вызвана 3 раз в контексте объекта google
```
Теперь контекст вызова экземпляров **_figureFunc()_**, **_sampleFunc()_** и **_googleFunc()_** изменить невозможно, и при вызове этих функций не нужно явно указывать, в каком контексте они вызываются

:coffee: :four:

Добавим еще один объект **bloom** с методами **_figure()_**, **_sample()_** и **_google()_**:

```javascript
var bloom = { name: "bloom" }
bloom.figure = figureFunc
bloom.sample = sampleFunc
bloom.google = googleFunc

bloom.figure()
bloom.sample()
bloom.google()
```

###### Результат в консоли:

```console
⚠️ ► Функция func вызвана 4 раз в контексте объекта figure
⚠️ ► Функция func вызвана 5 раз в контексте объекта sample
⚠️ ► Функция func вызвана 6 раз в контексте объекта google
```

Несмотря на явное указание контекста при вызове методов:

```javascript
bloom.figure()
bloom.sample()
bloom.google()
```
они отрабатывают в том контексте, который мы им "прибиндили" до этого

"Прибиндить" можно не только контекст вызова, но также и аргументы 

***

### :mortar_board: Currying

Каррирование заключается в следующем:

если при вызове функции 1 передать ей не все параметры, 

то она вернет функцию 2, параметры которой будут 

недостающими параметрами функции 1, 

а выходные данные - результатом функции 1

```javascript
function currying ( first, second ) {
    return arguments.length === 0 ? null :
        arguments.length === 1 ? 
            function ( second ) {
                return arguments.length === 1 ? 
                    [ first, second ] : null
            } : [ first, second ]
}

var curried = currying ( "Google" )

console.log ( curried )
```

###### Результат в консоли:

```console
ƒ ( second ) {
    return arguments.length === 1 ? 
        [ first, second ] : null
}
```

Вызовем функцию `curried`

```javascript
curried ()               // null
curried ( "Mozilla" )   // ► (2) ["Google", "Mozilla"]
```


Воспользуемся приемом **_Currying_** для создания функций с заданным контекстом и фиксированным значением первого аргумента

:coffee: :five:

```javascript
var test = function ( args ) {
    return Array.from ( args ).toString()
}

function func () {
    console.log (
    `Функция func вызвана в контексте объекта ${this.name} 
     c аргументами ${this.test( arguments )}` ) 
}

var figure = { name: "figure", test: test }

var circleFunc = func.bind ( figure, "circle" )
var rectFunc = func.bind ( figure, "rect" )
var lineFunc = func.bind ( figure, "line" )

circleFunc ( 100, 120, 80 )
rectFunc ( 50, 50, 150, 150 )
lineFunc ( 20, 30, 200, 200 )
```
###### Результат в консоли:
```console
Функция func вызвана в контексте объекта figure 
     c аргументами circle,100,120,80
Функция func вызвана в контексте объекта figure 
     c аргументами rect,50,50,150,150
Функция func вызвана в контексте объекта figure 
     c аргументами line,20,30,200,200
```