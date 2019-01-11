## :mortar_board: setTimeout

Метод `setTimeout` объекта `window` принимает два аргумента:

* функцию обратного вызова ( callback )
* длительность интервала задержки ( в милисекундах )

Функция, переденная в качестве первого аргумента, будет вызвана через указанный вторым аргументом интервал

```javascript
( function() {

    console.log ( 'START' )

    setTimeout (
        function () {
            console.log( 'Прошла 1 секунда' )
        },
        1000
    )

    console.log ( 'END' )

})()
```

Сначала в консоль будут выведены сообщения 'START' и 'END',

а затем, примерно через секунду - сообщение 'Прошла 1 секунда'

Однако это не означает, что если передать нулевое значение методу `setTimeout`, то вызов коллбэк-функции произойдет немедленно

```javascript
(function() {

    console.log ( 'START')

    setTimeout (
        function () {
            console.log( '1' )
    })

    console.log ( '2' )

    setTimeout (
        function () {
            console.log( '3' )
    }, 0 )

    console.log ( 'END' )

})()
```

```console
START
2
END
undefined
1
3
```

Почему так происходит?

[**Event Loop**](event-loop)