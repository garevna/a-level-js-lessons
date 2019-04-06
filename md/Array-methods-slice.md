## <img src="https://avatars2.githubusercontent.com/u/19735284?s=40&v=4" width="30" title="Ⓒ Irina Fylyppova ( garevna ) 2019"/> Методы массивов

* [`pop()`](Array-methods-pop.md)
* [`push()`](Array-methods-push.md)
* [`splice()`](Array-methods-splice.md)
* [`shift()`](Array-methods-shift.md)
* [`unshift()`](Array-methods-unshift.md)

_______________________________________________________________________________________

### :memo: slice ()

Метод создает новый массив, содержащий фрагмент исходного массива

При этом исходный массив не изменяется

Возвращаемое значение - новый массив, являющийся фрагментом исходного массива

_Аргументы_:

* Первый ( число ) - индекс элемента исходного массива, с которого начинается фрагмент
* Второй  ( число ) - индекс элемента исходного массива, до которого продолжается фрагмент

:coffee: ❶

```javascript
var drinks = [ "кофе", "чай", "сок", "вода", "молоко" ]
var newDrinks = drinks.slice ( 1, 2 )

//  Значение newDrinks:  [ "чай" ]
```

:coffee: ❷

```javascript
var drinks = [ "кофе", "чай", "сок", "вода", "молоко" ]
var newDrinks = drinks.slice ( 1, 4 )

//  Значение newDrinks:  [ "чай", "сок", "вода" ]
```

:coffee: ❸

```javascript
var drinks = [ "кофе", "чай", "сок", "вода", "молоко" ]
var newDrinks = drinks.slice ( 2 )
```

Значение **newDrinks**:
```
[ "сок", "вода", "молоко" ]
```
( если опустить второй аргумент, то фрагмент будет взят до конца исходного массива )

______________________________________________________________________________________

* [`concat()`](Array-methods-concat.md)
* [`join()`](Array-methods-join.md)
* [`includes()`](Array-methods-includes.md)

______________________________________________________________________________________________

### [:briefcase: Тесты](https://garevna.github.io/js-quiz/#arrayMethods)
