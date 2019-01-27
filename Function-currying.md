## :mortar_board: [Биндинг и каррирование](call-apply-bind)

* [`Конструктор Function`](Function-constructor)
* [`Наследование`](Function-inheritance)
* [`Контекст вызова`](Function-context)
* [`Изменение контекста`](Function-context-changing)
    * [`call()`](Function-call)
    * [`apply()`](Function-apply)
    * [`bind`](Function-bind)

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
