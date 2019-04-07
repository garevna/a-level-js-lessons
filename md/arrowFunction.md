[footer]: https://github.com/garevna/js-course/raw/master/images/a-level-ico.png?raw=true
[ico20]: https://raw.githubusercontent.com/garevna/a-level-js-lessons/master/ico/a-level-20.png
[ico25]: https://raw.githubusercontent.com/garevna/a-level-js-lessons/master/ico/a-level-25.png
[hw-30]: https://raw.githubusercontent.com/garevna/a-level-js-lessons/master/ico/briefcase-30.png
[cap-30]: https://raw.githubusercontent.com/garevna/a-level-js-lessons/master/ico/coffee-30.png
[warn-25]: https://raw.githubusercontent.com/garevna/a-level-js-lessons/master/ico/warning-25.png
[link-25]: https://raw.githubusercontent.com/garevna/a-level-js-lessons/master/ico/link-25.png
[err-20]: https://raw.githubusercontent.com/garevna/a-level-js-lessons/master/ico/no_entry-20.png
[err-25]: https://raw.githubusercontent.com/garevna/a-level-js-lessons/master/ico/no_entry-25.png
[err-30]: https://raw.githubusercontent.com/garevna/a-level-js-lessons/master/ico/no_entry-30.png

# <img src="https://avatars2.githubusercontent.com/u/19735284?s=40&v=4" width="30" title="Ⓒ Irina Fylyppova ( garevna ) 2019"/> Стрелочные функции

###### ES6

## :mortar_board: Синтаксис

###### :no_entry: **_function_**

В сигнатуре стрелочной функции нет слова **_function_**

```
( параметры ) => { тело функции }
```

:coffee:

```javascript
var res = ( x, y ) => x * y
res ( 2, 5 )
```

:white_square_button: Если тело функции состоит из одной операции, фигурные скобки можно опустить

```javascript
( name = "user" ) => console.info ( "Hi, " + name )
```

:white_square_button: Если у функции всего один формальный параметр, круглые скобки можно опустить

```javascript
name => console.info ( "Hi, " + name )
```

:white_square_button: При отсутствии формальных параметров круглые скобки обязательны

```javascript
() => console.info ( "Hi, user"  )
```

:white_square_button: Если тело функции состоит из одного выражения, значение которого возвращает функция, оператор **`return`** не используется

###### :coffee: обычная функция

```javascript
var res = function ( x, y ) { return x * y }
```

###### :coffee: стрелочная функция

```javascript
var res = ( x, y ) => x * y
```

:white_square_button: Операторы ветвления кода ( кроме тернарного оператора ) и операторы цикла нужно заключать в фигурные скобки

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

____________________________________________________________________

## :mortar_board: Три главные особенности стрелочных функций

### :no_entry: prototype

У стрелочных функций нет объекта  **`prototype`**

:warning: Поэтому стрелочные функции не могут быть конструктором

```javascript
var arrowFunc = () => {}
console.dir ( arrowFunc )

const usualFunc = function () {}
console.dir ( usualFunc )
```

###### Стрелочная функция

```console
▼ arrowFunc ()
    arguments: (...)
    caller: (...)
    length: 0
    name: "func"
  ► __proto__: ƒ ()
```

###### Обычная функция

```console
▼ ƒ usualFunc ()
    arguments: null
    caller: null
    length: 0
    name: "usualFunc"
  ► prototype: {constructor: ƒ}
  ► __proto__: ƒ ()
```

:warning: При попытке вызвать стрелочную функцию с ключевым словом **`new`**

```javascript
var obj = new arrowFunc()
```

будет сгенерировано исключение:

```
🛑 TypeError: arrowFunc is not a constructor
```

______________________________________________________

### :no_entry: arguments

У стрелочных функций нет объекта  **`arguments`**

При попытке обратиться к объекту **`arguments`** из стрелочной функции будет сгенерировано исключение ( `ReferenceError` )

![](https://lh6.googleusercontent.com/yv3tm03wlxRLj8N8La3rjpv-ptedTRsM-jZY25YaNpDycba4XNeSic-lpaCva6g7ftFz1Vu8MmkIk4zLLXfgsFNu10Tin-S88UrOstrwdIcPvvLyq8avaEjO29Fi2q5q3nKkrETuWY4qxks)

:point_up: Если стрелочная функция объявлена внутри обычной функции, то переменные контекста родительской функции будут доступны для стрелочной функции ( [**`цепочка областей видимости`**](function-object#scope) ), поэтому внутри нее будет доступен объект `arguments` родительской функции

:coffee:
```javascript
function testArguments () {
    var arrowFunc = () =>  console.log ( arguments )
    arrowFunc ()
}
testArguments ( 5, false )
```
В результате работы кода в консоль будет выведен объект `arguments` функции **_testArguments_**

______________________________________________________

### :mortar_board: Контекст вызова

У стрелочных функций контекст вызова всегда будет контекстом, в котором функция была объявлена

Изменить контекст вызова стрелочной функции невозможно

Можно сказать, что у стрелочных функций "врожденный" контекст вызова

###### :coffee: Литерал объекта

```javascript
var obj = {
    test: () => console.log ( this )
}
obj.test()   // window
```

![](https://lh6.googleusercontent.com/0j-nkUJPXjUVC_5aK8mGmzBkte36BmlPirRt6kZa6dPzQ8_t2WCyJayriwXOnyaeWPq-_H2nZfo0ROrBGwhxBglw1NOfVbJhA3KmcDjJre9-gqgEKv2HnS-nnVPXymENMzTtuBjGtOAs9DY)

###### :coffee: Конструктор

В случае, если экземпляр объекта создан с помощью конструктора, использование стрелочных функций в публичных методах объекта гарантирует, что  **`this`**  будет всегда ссылаться на экземпляр

![](https://lh3.googleusercontent.com/AIEepyu6Tttc-YY2tbpcD8HcR3QPO05an4SVGUGkxULIaKcqC3Y-GwDNQA5JOndMcTjI5xZMhBU5BPAqU3n9hSzhmWyzVli8uhZ51vdJ1mlk4ezwW5vSS734kIJ5ajRsnRi1yK8iOmTKwMY)

__________________________________________________________________

#### :mortar_board: Обработчики событий

###### :coffee: стрелочная функция

```javascript
document.querySelector ( "button" )
    .onclick =
        event =>  console.log ( event.type, this )
```
**_`this`_** будет указывать на глобальный объект `window`

###### :coffee: обычная функция

```javascript
document.querySelector ( "button" )
    .onmouseover = function ( event ) {
        console.log ( event.type, this )
    }
```

**_`this`_** будет указывать на элемент **`button`**

____________________________________________________________________

#### :mortar_board: Потеря контекста

В примере ниже экземпляр **x** создан с помощью конструктора **`Constr`**

Публичный метод **_arrowFunc()_** объявлен с помощью  стрелочной функции

Публичный метод **_usialFunc()_** объявлен с помощью обычной функции

![](https://lh5.googleusercontent.com/D5I3AmkE19yQDtUHpQa-5TqLg4jbkKoy944LN9nkkXi9HZIlf8vHAOTvOc0UMPq0k5reH2HZa8MejFZUEsZkR2OKswMyMCbWaeSJhqxIvjVImhmtPqOK88PCI47Or3pyNQcsWBbzsAKThjE)

При передаче метода **_arrowFunc()_** переменной **z**:

```javascript
var z = x.arrowFunc
```
контекст сохраняется,

а при передаче метода **_usialFunc()_** переменной **w**:

```javascript
var w = x.usialFunc
```
контекст меняется, и **_`this`_**  уже указывает на глобальный объект `window`

Таким образом, у стрелочной функции контекст, в котором она была создана, привязан к функции и не может быть утерян

У обычной функции контекст вызова может отличаться от контекста, в котором она была создана

_____________________________________________________

#### :mortar_board: Изменение контекста

Еще один пример наглядно показывает, что изменить контекст вызова стрелочной функции, определенный при ее создании, нельзя

Объявим две функции в глобальной области видимости:

```javascript
var arrowFunc = () => console.log ( this )
var usialFunc = function () {
    console.log ( this )
}
```

Теперь создадим объект **obj** с единственным свойством **_name_**:

```javascript
obj = { name: "sample" }
```

и добавим ему методы **_testArrow_** и **_testUsial_**:

```javascript
obj.testArrow = arrowFunc
obj.testUsial = usialFunc
```

Теперь вызовем оба метода

```javascript
obj.testArrow ()
obj.testUsial ()
```

![](https://lh4.googleusercontent.com/s_LhZmRdrIUMcrTCIddZgK4tnwCnrZzFScc03UColTivONhXL-B3LJUOi7nH9Nv1qvGep4_ffzmw459irEMvxLY5Azzd_MTr-EBzT_8F_vQQL5dHg5U4F9sX663yqxSzdwI1rOWWpQoyszc)

Как видим, несмотря на то, что вызов осуществляется в контексте объекта **obj**, **_testArrow_** "работает" в контексте, в котором была создана функция **_arrowFunc_**, т.е. в глобальном контексте

Что касается метода **_testUsial_**, то он работает в контексте вызова, т.е. в контексте объекта **obj**

____________________________________________________________________

### [Тесты](https://garevna.github.io/js-quiz/#arrowFunctions)

_________________________________________________________________________

![](https://github.com/garevna/js-course/raw/master/images/a-level-ico.png?raw=true)
