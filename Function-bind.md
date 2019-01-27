## :mortar_board: [Биндинг и каррирование](call-apply-bind)

* [`Конструктор Function`](Function-constructor)
* [`Наследование`](Function-inheritance)
* [`Контекст вызова`](Function-context)
* [`Изменение контекста`](Function-context-changing)
    * [`call()`](Function-call)
    * [`apply()`](Function-apply)

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

* [`Currying`](Function-currying)