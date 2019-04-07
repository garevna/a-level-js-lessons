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

[:arrow_backward:](function-object#callee) **arguments.callee**

#### :coffee: 3

Объявим функцию, которая "сама себя лечит", т.е. сама добавляет себе свойства и методы:

```javascript
function setProperty ( prop, val ) {
    arguments.callee [ prop ] = val
}
```
Теперь заставим ее создать себе парочку свойств:
```javascript
setProperty ( "isActive", false )
setProperty ( "value", 50 )
```
Ну, и для пущей убедительности заставим ее создать себе метод:
```javascript
setProperty ( "method", function () {
    console.log ( "А еще я умею вышивать крестиком" )
} )
```
здесь мы передаем ей в качестве второго аргумента функцию

Теперь проверим, что эти свойства и метод появились у функции  **`setProperty`**

Выведем в консоль свойства **`isActive`** и **`value`**   функции  **`setProperty`**  и вызовем ее метод  **`method`**

[:arrow_backward:](function-object#callee) **arguments.callee**

_________________________________________________________________________

![](https://github.com/garevna/js-course/raw/master/images/a-level-ico.png?raw=true)
