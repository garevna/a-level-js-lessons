# :mortar_board: Биндинг и каррирование

* [`Конструктор Function`](Function-constructor)
* [`Наследование`](Function-inheritance)
* [`Контекст вызова`](Function-context)
* [`Изменение контекста`](Function-context-changing)
    * [`call()`](Function-call)
    * [`apply()`](Function-apply)
    * [`bind`](Function-bind)
* [`Currying`](Function-currying)

***

## :mortar_board: Изменение контекста

Заглянув в свойство **_prototype_** конструктора **Function** или в свойство **_\_\_proto\_\__** экземпляра функции, можно обнаружить три метода, которые наследуют все функции от своего создателя:

* **_apply()_**
* **_call()_**
* **_bind()_**

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

***

Передача массива аргументов вместо перечня их значений обеспечивает определенную гибкость, поскольку массивы передаются по ссылке, и содержимое массива может динамически обновляться от вызова к вызову

:coffee: :two:

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

> Вызовы функции **_func_** логируются в массиве **args**

> При каждом вызове функция **_func_** получает в аргументах полный отчет о том, сколько раз она была вызвана до этого, и с каким контекстом

>> Поменяйте местами вызовы функций, или добавьте повторный вызов любой из функций, и посмотрите результат

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

***

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

***

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

***

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

***

:coffee: :six:

```javascript
function sample ( first, second, third ) {
    function test ( arg ) {
        return Array.from ( arguments )
    }
    return [
        test.bind ( null, first ),
        test.bind ( null, first, second ),
        test.bind ( null, first, second, third )
    ]
}

var test = sample ( "Google", "Mozilla", "Safari" )

console.log ( test[0]( "IE" ) )
console.log ( test[1]( "IE" ) )
console.log ( test[2]( "IE" ) )
```

###### Результат в консоли:

```console
► (2) ["Google", "IE"]
► (3) ["Google", "Mozilla", "IE"]
► (4) ["Google", "Mozilla", "Safari", "IE"]
```

***

:coffee: :seven:

```javascript
function sample ( first, second, third ) {
    function test ( arg ) {
        return Array.from ( arguments )
    }
    var one = test.bind ( null, first )
    var two = one.bind ( null, second )
    var three = two.bind ( null, third )
    return [ one, two, three ]
}

var test = sample ( "Google", "Mozilla", "Safari" )

console.log ( test[0]( "IE" ) )
console.log ( test[1]( "IE" ) )
console.log ( test[2]( "IE" ) )
```

###### Результат в консоли:

```console
► (2) ["Google", "IE"]
► (3) ["Google", "Mozilla", "IE"]
► (4) ["Google", "Mozilla", "Safari", "IE"]
```