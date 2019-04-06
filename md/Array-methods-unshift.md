## <img src="https://avatars2.githubusercontent.com/u/19735284?s=40&v=4" width="30" title="Ⓒ Irina Fylyppova ( garevna ) 2019"/> Методы массивов

* [`pop()`](Array-methods-pop.md)
* [`push()`](Array-methods-push.md)
* [`splice()`](Array-methods-splice.md)
* [`shift()`](Array-methods-shift.md)

_________________________________________________________________________________

### :memo: unshift ()

Метод добавляет новый элемент в начало массива

Возвращаемое значение - новая длина массива ( число )

:coffee: ❶

```javascript
var drinks = [ "кофе", "чай", "сок", "вода", "молоко" ]
var len = drinks.unshift ( "пиво" )
```

В результате массив **drinks** будет содержать элементы:

```
[ "пиво", "кофе", "чай", "сок", "вода", "молоко" ]
```

а переменная `len` примет значение 6

___________________________________________________________________________________

* [`slice()`](Array-methods-slice.md)
* [`concat()`](Array-methods-concat.md)
* [`join()`](Array-methods-join.md)
* [`includes()`](Array-methods-includes.md)

______________________________________________________________________________________________

### [:briefcase: Тесты](https://garevna.github.io/js-quiz/#arrayMethods)

<a href="https://garevna.github.io/js-quiz/#arrayMethods" target="_blank">Тесты</a>
