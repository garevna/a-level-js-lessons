# :mortar_board: Стрелочные функции
###### ES6
✋ Стрелочные функции всегда анонимные


## :mortar_board: Синтаксис
###### ⛔ **_function_**

В сигнатуре стрелочной функции нет слова **_function_**
```
( параметры ) => { тело функции }
```
:coffee:
```javascript
var res = ( x, y ) => x * y
res ( 2, 5 )
```

:hand: Если тело функции состоит из одной операции, фигурные скобки можно опустить
```javascript
( name = "user" ) => console.info ( "Hi, " + name )
```
:hand: Если у функции всего один формальный параметр, круглые скобки можно опустить
```javascript
name => console.info ( "Hi, " + name )
```         
:hand: При отсутствии формальных параметров круглые скобки обязательны
```javascript
() => console.info ( "Hi, user"  )
```         
:hand: Если тело функции состоит из одного выражения, значение которого возвращает функция, оператор **`return`** не нужен
###### :coffee: обычная функция
```javascript
var res = function ( x, y ) { return x * y }
```
###### :coffee: стрелочная функция
```javascript
var res = ( x, y ) => x * y
```
:hand: Операторы ветвления кода ( кроме тернарного оператора ) и операторы цикла нужно заключать в фигурные скобки 
###### :coffee: оператор `for`
```javascript
() => {
    for ( var i = 0; i < 5; i++ )
        console.log ( i )
}
```
###### :coffee: оператор `switch`
```javascript
var answerArrow = question => { 
    switch ( question ) {
        case "who":
            return "student"
        case "what":
            return "develop" 
        case "where":
            return "Kharkiv" 
        default:
            return "I don't undestand your question"
    }
}
```
###### :coffee: тернарный оператор
```javascript
var answerArrow = question =>  
    question === "who" ? "Irina" :
        question === "what" ? "develop" :
            question === "where" ? "Kharkiv" :
                "I don't undestand your question"
```
***
## ⛔ arguments
У стрелочных функций нет объекта  **`arguments`**

При попытке обратиться к объекту **`arguments`** из стрелочной функции будет сгенерировано исключение ( `ReferenceError` )

![](https://lh6.googleusercontent.com/yv3tm03wlxRLj8N8La3rjpv-ptedTRsM-jZY25YaNpDycba4XNeSic-lpaCva6g7ftFz1Vu8MmkIk4zLLXfgsFNu10Tin-S88UrOstrwdIcPvvLyq8avaEjO29Fi2q5q3nKkrETuWY4qxks)
      
:point_up: Если стрелочная функция объявлена внутри обычной функции, то переменные контекста родительской функции будут доступны для стрелочной функции ( см. [цепочка областей видимости](function-object#scope) ), поэтому внутри нее будет доступен объект `arguments` родительской функции

:coffee:
```javascript
function testArguments () {
    var arrowFunc = () =>  console.log ( arguments )
    arrowFunc ()
}
testArguments ( 5, false )
```
В результате работы кода в консоль будет выведен объект `arguments` функции **_testArguments_**
***
## :mortar_board: Контекст вызова
У стрелочных функций контекст вызова всегда будет контекстом, 
в котором функция была создана

то есть можно сказать, что у стрелочных функций есть контекст создания,
а у обычных - контекст вызова
в этом ключевое отличие стрелочных функций от обычных