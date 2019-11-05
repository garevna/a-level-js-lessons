# ![ico-30 study] Стрелочные функции

**ES6**

## ![ico-25 icon] Синтаксис

![ico-20 error] **_function_**

В сигнатуре стрелочной функции нет слова **_function_**

~~~js
( параметры ) => { тело функции }
~~~

◘◘![ico-25 cap] ** 1**◘◘

~~~js
var res = ( x, y ) => x * y
res ( 2, 5 )
~~~

______________________

![ico-20 green-ok] Если тело функции состоит из одной операции, фигурные скобки можно опустить

~~~js
( name = "user" ) => console.info ( "Hi, " + name )
~~~

![ico-20 green-ok] Если у функции всего один формальный параметр, круглые скобки можно опустить

~~~js
name => console.info ( "Hi, " + name )
~~~

![ico-20 green-ok] При отсутствии формальных параметров круглые скобки обязательны

~~~js
() => console.info ( "Hi, user"  )
~~~

![ico-20 green-ok] Если тело функции состоит из одного выражения, значение которого возвращает функция, оператор **~return~** не используется

__________________________

◘◘![ico-25 cap] ** 2**◘◘

~~~js
// обычная функция
var res = function ( x, y ) { return x * y }

// стрелочная функция
var res = ( x, y ) => x * y
~~~

![ico-20 green-ok] Операторы ветвления кода ( кроме тернарного оператора ) и операторы цикла нужно заключать в фигурные скобки

◘◘![ico-25 cap] оператор _for_◘◘

~~~js
() => {
    for ( var i = 0; i < 5; i++ )
        console.log ( i )
}
~~~

◘◘![ico-25 cap] оператор _switch_◘◘

~~~js
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
~~~

◘◘![ico-25 cap] тернарный оператор◘◘

~~~js
var answerArrow = question =>  
    question === "who" ? "Irina" :
        question === "what" ? "develop" :
            question === "where" ? "Kharkiv" :
                "I don't undestand your question"
~~~

С помощью стрелочных функций можно в краткой форме объявлять функции высшего порядка

◘◘![ico-25 cap] ** 6**◘◘

~~~js
( func => console.log ( func() ) )( () => prompt( "Enter message:" )  )
~~~

◘◘![ico-25 cap] ** 7**◘◘

~~~js
( func => Object.assign({
    name: func ( "Your name" ),
    hobby: func ( "Your hobby" )
}) )( message => prompt( message )  )
~~~

________________________________________

## ![ico-25 icon] Главные особенности стрелочных функций

### ![ico-20 error] prototype

У стрелочных функций нет объекта  **~prototype~**

![ico-20 warn] Поэтому стрелочные функции не могут быть конструктором

◘◘![ico-25 cap] ** 8**◘◘

~~~js
var arrowFunc = () => {}
console.dir ( arrowFunc )

const usualFunc = function () {}
console.dir ( usualFunc )
~~~

**Стрелочная функция**

~~~console
▼ arrowFunc ()
    arguments: (...)
    caller: (...)
    length: 0
    name: "func"
  ► __proto__: ƒ ()
~~~

**Обычная функция**

~~~console
▼ ƒ usualFunc ()
    arguments: null
    caller: null
    length: 0
    name: "usualFunc"
  ► prototype: {constructor: ƒ}
  ► __proto__: ƒ ()
~~~

![ico-20 warn] При попытке вызвать стрелочную функцию с ключевым словом **~new~**

~~~js
var obj = new arrowFunc()
~~~

будет сгенерировано исключение:

••![ico-20 error] TypeError: arrowFunc is not a constructor••


______________________________________________________

### ![ico-25 err] arguments

У стрелочных функций нет объекта  **~arguments~**

При попытке обратиться к объекту **~arguments~** из стрелочной функции будет сгенерировано исключение ( ~ReferenceError~ )

![](https://lh6.googleusercontent.com/yv3tm03wlxRLj8N8La3rjpv-ptedTRsM-jZY25YaNpDycba4XNeSic-lpaCva6g7ftFz1Vu8MmkIk4zLLXfgsFNu10Tin-S88UrOstrwdIcPvvLyq8avaEjO29Fi2q5q3nKkrETuWY4qxks)

![ico-20 pin] Если стрелочная функция объявлена внутри обычной функции, 
то переменные контекста родительской функции будут доступны для стрелочной функции 
( **~цепочка областей видимости~** ), 
поэтому внутри нее будет доступен объект ~arguments~ родительской функции

◘◘![ico-25 cap] ** 9**◘◘

~~~js
function testArguments () {
    var arrowFunc = () =>  console.log ( arguments )
    arrowFunc ()
}
testArguments ( 5, false )
~~~

В результате работы кода в консоль будет выведен объект ~arguments~ функции **_testArguments_**

______________________________________________________

### ![ico-20 icon] Контекст вызова

У стрелочных функций контекст вызова всегда будет контекстом, в котором функция была объявлена

Изменить контекст вызова стрелочной функции невозможно

Можно сказать, что у стрелочных функций "врожденный" контекст вызова

◘◘![ico-25 cap] Литерал объекта◘◘

~~~js
var obj = {
    test: () => console.log ( this )
}
obj.test()   // window
~~~

![](https://lh6.googleusercontent.com/0j-nkUJPXjUVC_5aK8mGmzBkte36BmlPirRt6kZa6dPzQ8_t2WCyJayriwXOnyaeWPq-_H2nZfo0ROrBGwhxBglw1NOfVbJhA3KmcDjJre9-gqgEKv2HnS-nnVPXymENMzTtuBjGtOAs9DY)

**Конструктор**

В случае, если экземпляр объекта создан с помощью конструктора, использование стрелочных функций в публичных методах объекта гарантирует, что  **~this~**  будет всегда ссылаться на экземпляр

![](https://lh3.googleusercontent.com/AIEepyu6Tttc-YY2tbpcD8HcR3QPO05an4SVGUGkxULIaKcqC3Y-GwDNQA5JOndMcTjI5xZMhBU5BPAqU3n9hSzhmWyzVli8uhZ51vdJ1mlk4ezwW5vSS734kIJ5ajRsnRi1yK8iOmTKwMY)

_____________________________________________________

#### ![ico-20 icon] Обработчики событий

◘◘стрелочная функция◘◘

~~~js
document.querySelector ( "button" )
    .onclick =
        event =>  console.log ( event.type, this )
~~~

**_~this~_** будет указывать на глобальный объект ~window~

◘◘обычная функция◘◘

~~~js
document.querySelector ( "button" )
    .onmouseover = function ( event ) {
        console.log ( event.type, this )
    }
~~~

**_~this~_** будет указывать на элемент **~button~**

____________________________________________________

#### ![ico-20 icon] Потеря контекста

В примере ниже экземпляр ** x** создан с помощью конструктора **~Constr~**

Публичный метод **_arrowFunc()_** объявлен с помощью  стрелочной функции

Публичный метод **_usialFunc()_** объявлен с помощью обычной функции

◘◘![ico-25 cap] **12**◘◘
_________________________________

![](https://lh5.googleusercontent.com/D5I3AmkE19yQDtUHpQa-5TqLg4jbkKoy944LN9nkkXi9HZIlf8vHAOTvOc0UMPq0k5reH2HZa8MejFZUEsZkR2OKswMyMCbWaeSJhqxIvjVImhmtPqOK88PCI47Or3pyNQcsWBbzsAKThjE)

При передаче метода **_arrowFunc()_** переменной ** z**:

~~~js
var z = x.arrowFunc
~~~

контекст сохраняется,

а при передаче метода **_usialFunc()_** переменной ** w**:

~~~js
var w = x.usialFunc
~~~

контекст меняется, и **_~this~_**  уже указывает на глобальный объект ~window~

Таким образом, у стрелочной функции контекст, в котором она была создана, привязан к функции и не может быть утерян

У обычной функции контекст вызова может отличаться от контекста, в котором она была создана

_____________________________________________________

#### ![ico-20 icon] Изменение контекста

Еще один пример наглядно показывает, что изменить контекст вызова стрелочной функции, определенный при ее создании, нельзя

Объявим две функции в глобальной области видимости:

◘◘![ico-25 cap] **13**◘◘

~~~js
var arrowFunc = () => console.log ( this )
var usialFunc = function () {
    console.log ( this )
}
~~~

Теперь создадим объект **obj** с единственным свойством **_name_**:

~~~js
obj = { name: "sample" }
~~~

и добавим ему методы **_testArrow_** и **_testUsial_**:

~~~js
obj.testArrow = arrowFunc
obj.testUsial = usialFunc
~~~

Теперь вызовем оба метода

~~~js
obj.testArrow ()
obj.testUsial ()
~~~


![](https://lh4.googleusercontent.com/s_LhZmRdrIUMcrTCIddZgK4tnwCnrZzFScc03UColTivONhXL-B3LJUOi7nH9Nv1qvGep4_ffzmw459irEMvxLY5Azzd_MTr-EBzT_8F_vQQL5dHg5U4F9sX663yqxSzdwI1rOWWpQoyszc)

Как видим, несмотря на то, что вызов осуществляется в контексте объекта **obj**, **_testArrow_** "работает" в контексте, в котором была создана функция **_arrowFunc_**, т.е. в глобальном контексте

Что касается метода **_testUsial_**, то он работает в контексте вызова, т.е. в контексте объекта **obj**

____________________________________________________________________

[![ico-30 hw] **Тесты**](https://garevna.github.io/js-quiz/#arrowFunctions)
