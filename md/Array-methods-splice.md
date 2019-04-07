[ico20]: https://raw.githubusercontent.com/garevna/a-level-js-lessons/master/ico/a-level-20.png
[ico25]: https://raw.githubusercontent.com/garevna/a-level-js-lessons/master/ico/a-level-25.png
[hw-30]: https://raw.githubusercontent.com/garevna/a-level-js-lessons/master/ico/briefcase-30.png
[cap-30]: https://raw.githubusercontent.com/garevna/a-level-js-lessons/master/ico/coffee-30.png
[warn-25]: https://raw.githubusercontent.com/garevna/a-level-js-lessons/master/ico/warning-25.png
[link-25]: https://raw.githubusercontent.com/garevna/a-level-js-lessons/master/ico/link-25.png
[err-20]: https://raw.githubusercontent.com/garevna/a-level-js-lessons/master/ico/no_entry-20.png
[err-25]: https://raw.githubusercontent.com/garevna/a-level-js-lessons/master/ico/no_entry-25.png
[err-30]: https://raw.githubusercontent.com/garevna/a-level-js-lessons/master/ico/no_entry-30.png

## <img src="https://avatars2.githubusercontent.com/u/19735284?s=40&v=4" width="30" title="Ⓒ Irina Fylyppova ( garevna ) 2019"/> Методы массивов

* [`pop()`](Array-methods-pop.md)
* [`push()`](Array-methods-push.md)

_________________________________________________________________________

### ![ico25] splice ()

Первый аргумент ( число ) определяет положение ( индекс ), куда будут вставлены новые элементы

Второй аргумент ( число ) определяет, сколько элементов ( начиная с позиции вставки ) должно быть удалено из массива

Третий ( четвертый, пятый ... ) аргументы - это элементы, которые нужно вставить в массив

Метод возвращает удаленные элементы массива ( массив )

#### ![cap-30] 1

С помощью метода splice () можно заменить элементы в массиве:

```javascript
var myArray = [ 1, 2, 3, 4, 5 ]
console.log ( myArray.splice ( 2, 1, "*" ) )
```

В результате массив **myArray** будет:

```
[ 1, 2, "*", 4, 5 ]
```

а в консоль будет выведено:
```
[ 3 ]
```   

( массив элементов, которые были заменены на  "*" )

_____________________________________

#### ![cap-30] 2

```javascript
var myArray = [ 1, 2, 3, 4, 5 ]
console.log ( myArray.splice ( 2, 2, "*", "#", "$", "%" ) )
```

В результате массив **myArray** будет:
```
[ 1, 2, "*", "#", "$", "%", 5 ]
```

а в консоль будет выведено:
```
[ 3, 4 ]
```
( элементы, которые были заменены элементами  "*", "#", "$", "%" )

______________________________________

#### ![cap-30] 3

```javascript
var myArray = [ 1, 2, 3, 4, 5 ]
console.log ( myArray.splice ( 2, 2, [ 7, 8, 9 ] ) )
```

В результате массив **myArray** будет состоять из четырех элементов:
```
[ 1, 2, Array(3), 5 ]
```

а в консоль будет выведено:
```
[ 3, 4 ]
```
( элементы, которые были заменены массивом  [ 7, 8, 9 ] )

__________________________________________________

#### ![cap-30] 4

```javascript
var myArray = [ 1, 2, 3, 4, 5 ]
console.log ( myArray.splice ( 2, 0, "Новый элемент" ) )
```

В результате массив **myArray** будет состоять из четырех элементов:
```
[ 1, 2, "Новый элемент", 3, 4, 5 ]
```
а в консоль будет выведен пустой массив:

```
[]
```
( ни одного элемента не было удалено из массива, поскольку второй аргумент метода равен нулю )

_________________________________________________________________________


* [`shift()`](Array-methods-shift.md)
* [`unshift()`](Array-methods-unshift.md)
* [`slice()`](Array-methods-slice.md)
* [`concat()`](Array-methods-concat.md)
* [`join()`](Array-methods-join.md)
* [`includes()`](Array-methods-includes.md)

______________________________________________________________________________________________

### [![hw-30] Тесты](https://garevna.github.io/js-quiz/#arrayMethods)

_________________________________________________________________________

![](https://github.com/garevna/js-course/raw/master/images/a-level-ico.png?raw=true)
