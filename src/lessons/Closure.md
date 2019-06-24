# ![ico-30 study] Замыкание

[Замыкание](https://www.w3schools.com/js/js_function_closures.asp "W3Schools") - это прием, с помощью которого можно "скрыть" переменные в контексте родительской функции, возвращающей функцию

[Замыкание](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Closures) - это комбинация: функция + лексическая среда, в которой эта функция была объявлена

Если функция возвращает функцию, то Lexical Environment родительской функции попадает в цепочку областей видимости дочерней функции

Т.е. все аргументы, полученные родительской функцией при вызове, а так же все переменные и функции, объявленные в ней, будут доступны дочерней функции ( она их "видит" )

Однако больше нигде они доступны не будут, поскольку являются локальными

![ico-25 cap] ** 1**

~~~js
function parent ( arg ) {
  var frog = "I'm frog"
  return function () {
    console.log ( arg, frog )
  }
}

var child = parent ( "Hello! " )
~~~

Вызовем дочернюю функцию:

~~~js
child()  // Hello!  I'm frog
~~~

![ico-25 cap] ** 2**

~~~js
var parent = message => () => console.log ( message )

var hello = parent ( "Hello!" )
var welcome = parent ( "Welcome!" )

hello()    // Hello!
welcome()  // Welcome!
~~~

Альтернативой замыканию является другой механизм - карринг:

![ico-25 cap] ** 3**

~~~js
var parent = message => console.log ( message )

var hello = parent.bind ( null, "Hello!" )
var welcome = parent.bind ( null, "Welcome!" )

hello()    // Hello!
welcome()  // Welcome!
~~~

![ico-25 cap] ** 4**

~~~js
function parent ( omega ) {
    var alpha = 0
    return () => omega > alpha ?
           omega-- - alpha++ : null
}

var child = parent ( 20 )
~~~

Теперь каждый очередной вызов функции **child** будет возвращать новое число меньше предыдущего на 2
и так до тех пор, пока возвращаемое значение больше 0

~~~js
child() // 20
child() // 18
...
~~~

_______________________

## ![ico-25 icon] IIFE

**_Immediately Invoked Function Expression_**

В следующем примере мы видим функциональное выражение [**IIFE**](https://developer.mozilla.org/uk/docs/Glossary/IIFE "MDN"), т.е. вызов объявляемой анонимной функции "на месте"
( в месте ее объявления )

Эта анонимная функция получает агрумент "Hello", объявляет локальную ( приватную ) переменную **_message_**, в которой сохраняет полученное значение аргумента, и возвращает анонимную функцию

При этом ее контекст демонтируется ( удаляется из стека ),

![ico-20 yes] но!

переменная  **_message_**  не удаляется из памяти, поскольку возвращаемая анонимная функция использует в своем контексте ссылку на нее

после вычисления значения функционального выражения в переменной **_func_** будет ссылка на анонимную функцию,
в контексте которой будет "замкнута" переменная **_message_**

Теперь ссылка на переменную **_message_** существует только в контексте возвращаемой функции

![ico-25 cap] ** 5**

~~~javascript
var func = ( function ( arg ) {
    var message = arg
    return function ( name ) {
        console.log ( `${ message }, ${ name }` )
    }
}) ( "Hello" )

func ( "Дима" )
func ( "Николай" )
~~~

_____________________________

## ![ico-25 warn] Function

![ico-20 err] Функции, созданные конструктором **Function**, не создают замыкания

![ico-25 cap] ** 6**

~~~javascript
var __var__ = "Global Scope"

function functionConstructor() {
    var __var__ = "Function Scope"
    return new Function ( "console.warn ( __var__ )" )
}

function functionDeclaration() {
    var __var__ = "Closured Scope"
    return function () {
        console.info ( __var__ )
    }
}

functionConstructor()()   // Global Scope
functionDeclaration()()   // Closured Scope
~~~

_____________________________

[![ico-30 hw] **Тесты**](https://garevna.github.io/js-quiz/#closures)
