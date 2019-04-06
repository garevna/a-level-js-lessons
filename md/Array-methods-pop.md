[ico25]: https://raw.githubusercontent.com/garevna/a-level-js-lessons/master/ico/a-level-25.png

## <img src="https://avatars2.githubusercontent.com/u/19735284?s=40&v=4" width="30" title="Ⓒ Irina Fylyppova ( garevna ) 2019"/> Методы массивов

### :memo: pop ()

Этот метод удаляет последний элемент массива и возвращает удаленный элемент

У метода нет параметров ( аргументов )

:coffee: ❶

```javascript
var myArray = [ "Гвоздь", "Собака", "Процессор", "Диск", "Программа" ]
var elem = myArray.pop ()
```

После выполнения этого кода в массиве **myArray** останутся:
```
[ "Гвоздь", "Собака", "Процессор", "Диск" ]
```

а значение переменной   `elem`   будет     "Программа"

_______________________________________________________________________________________

* [`push()`](Array-methods-push.md)
* [`splice()`](Array-methods-splice.md)
* [`shift()`](Array-methods-shift.md)
* [`unshift()`](Array-methods-unshift.md)
* [`slice()`](Array-methods-slice.md)
* [`concat()`](Array-methods-concat.md)
* [`join()`](Array-methods-join.md)
* [`includes()`](Array-methods-includes.md)

______________________________________________________________________________________________

### [:briefcase: Тесты](https://garevna.github.io/js-quiz/#arrayMethods)
