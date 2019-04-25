[footer]: https://github.com/garevna/js-course/raw/master/images/a-level-ico.png?raw=true
[me]: https://raw.githubusercontent.com/garevna/a-level-js-lessons/master/ico/myPhoto-40.png "Ⓒ Irina Fylyppova ( garevna ) 2019"
[ico20]: https://raw.githubusercontent.com/garevna/a-level-js-lessons/master/ico/a-level-20.png
[ico25]: https://raw.githubusercontent.com/garevna/a-level-js-lessons/master/ico/a-level-25.png
[hw-30]: https://raw.githubusercontent.com/garevna/a-level-js-lessons/master/ico/briefcase-30.png
[cap-30]: https://raw.githubusercontent.com/garevna/a-level-js-lessons/master/ico/coffee-30.png
[warn-25]: https://raw.githubusercontent.com/garevna/a-level-js-lessons/master/ico/warning-25.png
[link-25]: https://raw.githubusercontent.com/garevna/a-level-js-lessons/master/ico/link-25.png
[err-20]: https://raw.githubusercontent.com/garevna/a-level-js-lessons/master/ico/no_entry-20.png
[err-25]: https://raw.githubusercontent.com/garevna/a-level-js-lessons/master/ico/no_entry-25.png
[err-30]: https://raw.githubusercontent.com/garevna/a-level-js-lessons/master/ico/no_entry-30.png

<table><tr><td width="50">

![ico25] <br/><sup>[**Lesson&nbsp;2**](../lessons/lesson-02.md)</sup>
  </td>
  <td width="800"><h2>Методы массивов</h2></td>
  <td>

  ![me] <br/><sup>[**Занятие&nbsp;2**](../lessons/lesson-02.md)</sup></td>
</tr></table>

* [`pop()`](Array-methods-pop.md)
* [`push()`](Array-methods-push.md)
* [`splice()`](Array-methods-splice.md)
* [`shift()`](Array-methods-shift.md)
* [`unshift()`](Array-methods-unshift.md)

_______________________________________________________________________________________

### ![ico25] slice ()

Метод создает новый массив, содержащий фрагмент исходного массива

При этом исходный массив не изменяется

Возвращаемое значение - новый массив, являющийся фрагментом исходного массива

_Аргументы_:

* Первый ( число ) - индекс элемента исходного массива, с которого начинается фрагмент
* Второй  ( число ) - индекс элемента исходного массива, до которого продолжается фрагмент

#### ![cap-30] 1

```javascript
var drinks = [ "кофе", "чай", "сок", "вода", "молоко" ]
var newDrinks = drinks.slice ( 1, 2 )

//  Значение newDrinks:  [ "чай" ]
```

#### ![cap-30] 2

```javascript
var drinks = [ "кофе", "чай", "сок", "вода", "молоко" ]
var newDrinks = drinks.slice ( 1, 4 )

//  Значение newDrinks:  [ "чай", "сок", "вода" ]
```

#### ![cap-30] 3

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

### [![hw-30] Тесты](https://garevna.github.io/js-quiz/#arrayMethods)

_________________________________________________________________________

![footer]
