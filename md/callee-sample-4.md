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

#### :coffee: 4

Создадим функцию, которая "накапливает" результаты собственных вычислений

Пусть это будет функция, вычисляющая факториал числа

```javascript
var factorial = function ( num ) {
        var res = 1, n = 1
        while ( n <= num )  res *= n++
}
```

"модифицируем" ее следующим образом:

```javascript
var factorial = function ( num ) {
     if ( !arguments.callee.res )  arguments.callee.res = []
     var res = 1, n = 1
     while ( n <= num )  res *= n++
     arguments.callee.res.push ( res )
     return res
}
```
Вызовем ее с различными значениями аргумента и выведем в консоль значение свойства **`res`**:
```javascript
factorial ( 5 )
factorial ( 5 )

console.log ( factorial.res )
```
Получим массив *[ 120, 3628800 ]*

[:arrow_backward:](function-object#callee) **arguments.callee**

_________________________________________________________________________

![](https://github.com/garevna/js-course/raw/master/images/a-level-ico.png?raw=true)
