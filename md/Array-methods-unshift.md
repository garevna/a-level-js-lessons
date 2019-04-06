## <img src="https://avatars2.githubusercontent.com/u/19735284?s=40&v=4" width="30" title="Ⓒ Irina Fylyppova ( garevna ) 2019"/> Методы массивов

* [`pop()`](Array-methods-pop)
* [`push()`](Array-methods-push)
* [`splice()`](Array-methods-splice)
* [`shift()`](Array-methods-shift)

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

* [`slice()`](Array-methods-slice)
* [`concat()`](Array-methods-concat)
* [`join()`](Array-methods-join)
* [`includes()`](Array-methods-includes)

______________________________________________________________________________________________

### [:briefcase: Тесты](https://garevna.github.io/js-quiz/#arrayMethods)
