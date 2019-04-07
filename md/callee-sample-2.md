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

#### :coffee: 2

Объявим функцию  **`getArguments`**:
```javascript
function getArguments ( param ) {
    return param ? param : arguments.callee
}
```
которая, если ей был передан аргумент, возвращает значение этого аргумента, в противном случае возвращает ссылку на саму себя

Теперь вызовем эту функцию с параметром и без:

```javascript
var x = getArguments ()
var y = getArguments ( "Привет!" )
```
результат вызова функции без аргументов мы поместили в переменную  **`x`**,

а результат вызова с аргументом "Привет!" мы поместили в переменную  **`y`**

Теперь выведем в консоль переменные **`x`** и **`y`**

в переменной **`x`** находится точная копия функции **`getArguments`**

а в переменной **`y`** - строка "Привет!"

Вызовем функцию **`x`**:
```javascript
x ( "До свидания!" )
```
и получим строку "До свидания!"

[:arrow_backward:](function-object#callee) **arguments.callee**

_________________________________________________________________________

![](https://github.com/garevna/js-course/raw/master/images/a-level-ico.png?raw=true)
