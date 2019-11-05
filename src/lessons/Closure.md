# ![ico-30 study] Замыкание

[Замыкание](https://www.w3schools.com/js/js_function_closures.asp "W3Schools") - это прием, с помощью которого можно "скрыть" переменные в контексте родительской функции, возвращающей функцию

[Замыкание](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Closures) - это комбинация: функция + лексическая среда, в которой эта функция была объявлена

Если функция возвращает функцию, то Lexical Environment родительской функции попадает в цепочку областей видимости дочерней функции

Т.е. все аргументы, полученные родительской функцией при вызове, а так же все переменные и функции, объявленные в ней, будут доступны дочерней функции ( она их "видит" )

^^Однако больше нигде они доступны не будут, поскольку являются локальными^^

◘◘![ico-25 cap] ** 1**◘◘

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

◘◘![ico-25 cap] ** 2**◘◘

~~~js
var parent = message => () => console.log ( message )

var hello = parent ( "Hello!" )
var welcome = parent ( "Welcome!" )

hello()    // Hello!
welcome()  // Welcome!
~~~

Альтернативой замыканию является другой механизм - карринг:

◘◘![ico-25 cap] ** 3**◘◘

~~~js
var parent = message => console.log ( message )

var hello = parent.bind ( null, "Hello!" )
var welcome = parent.bind ( null, "Welcome!" )

hello()    // Hello!
welcome()  // Welcome!
~~~

◘◘![ico-25 cap] ** 4**◘◘

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

◘◘![ico-25 cap] ** 5**◘◘

~~~js
function first ( firstArg ) {
    function second ( secondArg ) {
        return firstArg.toString().split("").join( secondArg )
    }
    return function () {
        return second ( "*" )
    }
}

first ( "Happy New Year!" )()
~~~

Результат будет: ••"H*a*p*p*y* *N*e*w* *Y*e*a*r*!"••

_______________________

## ![ico-25 icon] IIFE

**_Immediately Invoked Function Expression_**

Функциональное выражение [**IIFE**](https://developer.mozilla.org/uk/docs/Glossary/IIFE "MDN"), т.е. вызов объявляемой анонимной функции "на месте"
( в месте ее объявления )

В этом примере анонимная функция "завернута" в круглые скобки:

◘◘![ico-25 cap] ** 6**◘◘

~~~js
(
    function ( userName ) {
      return {
        name: userName,
        visit: new Date().toLocaleDateString(),
        id: new Date().getTime()
      }
    }
)
~~~

что превращает ее в выражение:

~~~console
ƒ ( userName ) {
      return {
        name: userName,
        visit: new Date().toLocaleDateString(),
        id: new Date().getTime()
      }
    }
~~~

Если после этого выражения поставить круглые скобки, то произойдет вызов функции "на месте", т.е. сразу после вычисления ее выражения в круглых скобках

~~~js
(
    function ( userName ) {
      return {
        name: userName,
        visit: new Date().toLocaleDateString(),
        id: new Date().getTime()
      }
    }
)()
~~~

Поскольку функция возвращает объект, то результат будет:

~~~console
▼ { name: undefined, visit: "04.07.2019", id: 1562225761228 }
    id: 1562225761228
    name: undefined
    visit: "04.07.2019"
  ► __proto__: Object
~~~

Вызов функции без аргумента привел к тому, что свойство name объекта получило значение undefined

Передадим функции аргумент, причем имя получим через модальное окно prompt:

~~~js
var user = (
    function ( userName ) {
      return {
        name: userName,
        visit: new Date().toLocaleDateString(),
        id: new Date().getTime()
      }
    }
)( prompt( "Enter your name:" ) )
~~~

В модальном окне введем имя **_Семен_**

В результате переменная user станет объектом:

~~~console
▼ { name: "Семен", visit: "04.07.2019", id: 1562226083644 }
    id: 1562226083644
    name: "Семен"
    visit: "04.07.2019"
  ► __proto__: Object
~~~

Анонимная функция была вызвана единственный раз, после чего она удаляется из памяти ( поскольку на нее нет ссылки )

______________________

В этом примере анонимная функция получает агрумент "Hello", объявляет локальную ( приватную ) переменную **_message_**, в которой сохраняет полученное значение аргумента, и возвращает анонимную функцию

При этом ее контекст демонтируется ( удаляется из стека ),

![ico-20 yes] но!

переменная  **_message_**  не удаляется из памяти, поскольку возвращаемая анонимная функция использует в своем контексте ссылку на нее

после вычисления значения функционального выражения в переменной **_func_** будет ссылка на анонимную функцию,
в контексте которой будет "замкнута" переменная **_message_**

Теперь ссылка на переменную **_message_** существует только в контексте возвращаемой функции

◘◘![ico-25 cap] ** 7**◘◘

~~~js
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

◘◘![ico-25 cap] ** 8**◘◘

~~~js
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

## ![ico-25 warn] Memory Leaks

![ico-20 warn] Замыкание может приводить к утечкам памяти

Следующий код приведет к остановке приложения по причине переполнения памяти

◘◘![ico-25 cap] ** 9**◘◘

~~~js
var globalFunc
 
function closure () {
    var data = new Array( 1000000 )
    var func = globalFunc
 
    function innerFunc() {
        if ( func ) return data
    }
 
    return function () {}
}
 
setInterval( () => globalFunc = closure (), 5 )
~~~

За счет чего возникают утечки памяти в этом фрагменте кода ?

Каждый раз, когда срабатывает таймер, вызывается ~closure~ и происходит переопределение значения ~globalFunc~
В каждом новом варианте ~globalFunc~ в замыкание попадают переменные ~data~, ~func~ и ~innerFunc~
При этом ссылка на предыдущее значение ~globalFunc~ попадает в локальную переменную ~func~,
которая попала в замыкание нового значения ~globalFunc~,
тем самым вместе с предыдущим значением ~globalFunc~ в замыкание попадают все переменные, 
которые были в замыкании ~globalFunc~, т.е. ~innerFunc~ в том числе
Переменная ~data~ будет занимать приличный кусок памяти
Ссылка на ~data~ попадает в замыкание ~innerFunc~
~innerFunc~ попадает в замыкание кадой новой версии ~globalFunc~

Получается глубокая вложенность переменных в замыкании, и ~data~ будет дублироваться до тех пор,
пока это не приведет к переполнению памяти ( очень быстро, поскольку итервал таймера - 5 милисекунд )

_____________________________

[![ico-30 hw] **Тесты**](https://garevna.github.io/js-quiz/#closures)
