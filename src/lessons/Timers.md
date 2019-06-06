# ![ico-30 study] Таймеры

## ![ico-25 icon] setTimeout

Метод ~setTimeout~ объекта ~window~ принимает два аргумента:

![ico-20 green-ok] функцию обратного вызова ( callback )
![ico-20 green-ok] длительность интервала задержки ( в милисекундах )

Функция, переденная в качестве первого аргумента, будет вызвана через указанный вторым аргументом интервал

~~~javascript
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
~~~

Сначала в консоль будут выведены сообщения 'START' и 'END',

а затем, примерно через секунду - сообщение 'Прошла 1 секунда'

Однако это не означает, что если передать нулевое значение методу ~setTimeout~, то вызов коллбэк-функции произойдет немедленно

~~~javascript
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
~~~

~~~console
START
2
END
( основной поток завершил работу, стек вызовов пуст )
1
3
~~~
