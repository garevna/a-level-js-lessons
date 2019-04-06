[ico25]: https://raw.githubusercontent.com/garevna/a-level-js-lessons/master/ico/a-level-25.png

## <img src="https://avatars2.githubusercontent.com/u/19735284?s=40&v=4" width="30" title="Ⓒ Irina Fylyppova ( garevna ) 2019"/> Методы массивов

* [`pop()`](Array-methods-pop.md)

____________________________________________________________________________

### :memo: push ()

Этот метод добавляет новый элемент в конец массива

Аргументом, который получает метод при вызове, является добавляемый элемент

Метод возвращает новую длину массива

:coffee: ❶

```javascript
var myArray = [ "Гвоздь", "Велосипед", "Процессор", "Диск" ]
var _length = myArray.push (  "Программа" )
```

После выполнения этого кода в массиве **myArray** будут элементы:

```
[ "Гвоздь", "Велосипед", "Процессор", "Диск", "Программа" ]
```

а значение переменной   **`_length`**   будет     5

____________________________________________________________________________

* [`splice()`](Array-methods-splice.md)
* [`shift()`](Array-methods-shift.md)
* [`unshift()`](Array-methods-unshift.md)
* [`slice()`](Array-methods-slice.md)
* [`concat()`](Array-methods-concat.md)
* [`join()`](Array-methods-join.md)
* [`includes()`](Array-methods-includes.md)

______________________________________________________________________________________________

### [:briefcase: Тесты](https://garevna.github.io/js-quiz/#arrayMethods)
