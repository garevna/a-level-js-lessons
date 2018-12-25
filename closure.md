## :mortar_board: Замыкание

Замыкание - это прием, с помощью которого можно "скрыть" переменные в контексте родительской функции, возвращающей функцию

***
[:link: w3schools](https://www.w3schools.com/js/js_function_closures.asp) 

#### :mortar_board: IIFE

Immediately Invoked Function Expression

[:link: MDN](https://developer.mozilla.org/uk/docs/Glossary/IIFE)

В следующем примере мы видим функциональное выражение **IIFE**, т.е. вызов объявляемой анонимной функции "на месте"
( в месте ее объявления )

Эта анонимная функция получает агрумент "Hello", объявляет локальную ( приватную ) переменную **_message_**, в которой сохраняет полученное значение аргумента, и возвращает анонимную функцию 

При этом ее контекст демонтируется ( удаляется из стека ), 

но!

переменная  **_message_**  не удаляется из памяти, поскольку возвращаемая анонимная функция использует в своем контексте ссылку на нее

после вычисления значения функционального выражения в переменной **_func_** будет ссылка на анонимную функцию,
в контексте которой будет "замкнута" переменная **_message_**

Теперь ссылка на переменную **_message_** существует только в контексте возвращаемой функции

:coffee:
```javascript
var func = ( function ( arg ) {
        var message = arg
        return function ( name ) {
                console.log ( `${ message }, ${ name }` )
        }
}) ( "Hello" )

func ( "Дима" )
func ( "Николай" )
```
***
#### :warning: Function

Функции, созданные конструктором **Function**, :heavy_exclamation_mark: не создают замыкания

:coffee:
```javascript
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
```
***
### [:briefcase: Тесты](https://garevna.github.io/js-quiz/#closures)