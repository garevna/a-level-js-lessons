[footer]: https://github.com/garevna/js-course/raw/master/images/a-level-ico.png?raw=true
[me30]: https://raw.githubusercontent.com/garevna/a-level-js-lessons/master/ico/myPhoto-30.png "Ⓒ Irina Fylyppova ( garevna ) 2019"
[ico20]: https://raw.githubusercontent.com/garevna/a-level-js-lessons/master/ico/a-level-20.png
[ico25]: https://raw.githubusercontent.com/garevna/a-level-js-lessons/master/ico/a-level-25.png
[hw-30]: https://raw.githubusercontent.com/garevna/a-level-js-lessons/master/ico/briefcase-30.png
[cap-30]: https://raw.githubusercontent.com/garevna/a-level-js-lessons/master/ico/coffee-30.png
[warn-25]: https://raw.githubusercontent.com/garevna/a-level-js-lessons/master/ico/warning-25.png
[link-25]: https://raw.githubusercontent.com/garevna/a-level-js-lessons/master/ico/link-25.png
[err-20]: https://raw.githubusercontent.com/garevna/a-level-js-lessons/master/ico/no_entry-20.png
[err-25]: https://raw.githubusercontent.com/garevna/a-level-js-lessons/master/ico/no_entry-25.png
[err-30]: https://raw.githubusercontent.com/garevna/a-level-js-lessons/master/ico/no_entry-30.png

## ![me30] Методы массивов

* [`pop()`](Array-methods-pop.md)
* [`push()`](Array-methods-push.md)
* [`splice()`](Array-methods-splice.md)

___________________________________________________________________________________________

### ![ico25] shift ()

Этот метод удаляет первый элемент из массива

Возвращаемое значение - удаленный элемент

Например, в результате выполнения следующего кода:

![cap-30]

```javascript
var arrayOfNames = [ "Мария", "Дмитрий", "Николай", "Сергей" ]
console.log ( arrayOfNames.shift () )
```

в консоли будет:  _Мария_

а массив **arrayOfNames** будет содержать значения:

```
[ "Дмитрий", "Николай", "Сергей" ]
```

______________________________________________________________________________

* [`unshift()`](Array-methods-unshift.md)
* [`slice()`](Array-methods-slice.md)
* [`concat()`](Array-methods-concat.md)
* [`join()`](Array-methods-join.md)
* [`includes()`](Array-methods-includes.md)

______________________________________________________________________________________________

### [![hw-30] Тесты](https://garevna.github.io/js-quiz/#arrayMethods)

_________________________________________________________________________

![footer]