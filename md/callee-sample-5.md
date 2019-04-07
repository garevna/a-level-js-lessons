[ico20]: https://raw.githubusercontent.com/garevna/a-level-js-lessons/master/ico/a-level-20.png
[ico25]: https://raw.githubusercontent.com/garevna/a-level-js-lessons/master/ico/a-level-25.png
[hw-30]: https://raw.githubusercontent.com/garevna/a-level-js-lessons/master/ico/briefcase-30.png
[cap-30]: https://raw.githubusercontent.com/garevna/a-level-js-lessons/master/ico/coffee-30.png
[warn-25]: https://raw.githubusercontent.com/garevna/a-level-js-lessons/master/ico/warning-25.png
[link-25]: https://raw.githubusercontent.com/garevna/a-level-js-lessons/master/ico/link-25.png
[err-20]: https://raw.githubusercontent.com/garevna/a-level-js-lessons/master/ico/no_entry-20.png
[err-25]: https://raw.githubusercontent.com/garevna/a-level-js-lessons/master/ico/no_entry-25.png
[err-30]: https://raw.githubusercontent.com/garevna/a-level-js-lessons/master/ico/no_entry-30.png

[:arrow_backward:](function-object#callee) **arguments.callee**

#### :coffee: 5

В этом примере создаются анонимные функции, которые обрабатывают событие **`click`**  кнопок

Каждая функция "накапливает" данные о времени клика на кнопке в массиве **`arguments.callee.res`**

```javascript
var buttons = []
for ( var n = 0; n < 5; n++ ) {
    buttons [ n ] = document.body.appendChild (
          document.createElement( 'button' )
    )
    buttons [ n ].innerText = n
    buttons [ n ].onclick = function ( event ) {
       if ( !arguments.callee.res )
             arguments.callee.res = []
       arguments.callee.res.push ( event.timeStamp )
             console.log ( arguments.callee.res )
    }
}
```

Модифицируем этот код:

```javascript
var buttons = []
for ( var n = 0; n < 5; n++ ) {
    buttons [ n ] = document.body.appendChild (
             document.createElement( 'button' )
    )
    buttons [ n ].innerText = n
    buttons [ n ].onclick = function ( event ) {
        if ( !arguments.callee.clicksTime )
            arguments.callee.clicksTime = []
        arguments.callee.clicksTime.push ( event.timeStamp )
        console.log ( arguments.callee.clicksTime )
        arguments.callee.res = arguments.callee.clicksTime.length > 1 ?
            arguments.callee.clicksTime [ arguments.callee.clicksTime.length - 1 ] -
            arguments.callee.clicksTime [ arguments.callee.clicksTime.length - 2 ] : 0

        console.info ( `Интервал между последними кликами: ${arguments.callee.res}` )
    }
}
```

Что теперь делает каждый обработчик клика на кнопке ?

[:arrow_backward:](function-object#callee) **arguments.callee**

_________________________________________________________________________

![](https://github.com/garevna/js-course/raw/master/images/a-level-ico.png?raw=true)
