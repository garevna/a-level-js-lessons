[footer]: https://github.com/garevna/js-course/raw/master/images/a-level-ico.png?raw=true
[me]: https://raw.githubusercontent.com/garevna/a-level-js-lessons/master/ico/myPhoto-40.png "Ⓒ Irina Fylyppova ( garevna ) 2019"

[ico20]: https://raw.githubusercontent.com/garevna/a-level-js-lessons/master/ico/a-level-20.png
[ico25]: https://raw.githubusercontent.com/garevna/a-level-js-lessons/master/ico/a-level-25.png
[hw-30]: https://raw.githubusercontent.com/garevna/a-level-js-lessons/master/ico/briefcase-30.png
[cap-20]: https://raw.githubusercontent.com/garevna/a-level-js-lessons/master/ico/coffee-20.png
[cap-25]: https://raw.githubusercontent.com/garevna/a-level-js-lessons/master/ico/coffee-25.png
[cap-30]: https://raw.githubusercontent.com/garevna/a-level-js-lessons/master/ico/coffee-30.png
[error]: https://raw.githubusercontent.com/garevna/a-level-js-lessons/master/ico/no_entry-20.png
[warn]: https://raw.githubusercontent.com/garevna/a-level-js-lessons/master/ico/warning-25.png
[link]: https://raw.githubusercontent.com/garevna/a-level-js-lessons/master/ico/link-20.png
[space-800]: https://raw.githubusercontent.com/garevna/a-level-js-lessons/master/ico/space-800.png

[lesson]: ../lessons/lesson-01.md

| ![ico25] <br/><sup>[**Lesson&nbsp;1**][lesson]</sup> | <h2>Инкремент (++)</h2>![space-800] | ![me] <br/><sup>[**Занятие&nbsp;1**][lesson]</sup> |
|:-:|:-:|:-:|

_________________________________________________________________________

Инкремент - это увеличение значения числовой переменной на единицу

Пост-префиксная форма:   `y++`

Префиксная форма:        `++y`

Пост-префиксная форма означает, что переменная будет увеличена после операции, в которой она принимает участие

![cap-25]

```javascript
var x = 0, y = 2
var z = y + x++
```

После операции:

```javascript
var z = y + x++
```
значение переменной **z** будет ```2 + 0 = 2```,

а значение переменной **x** станет равным ```1```

А вот после такой операции:

```javascript
var x = 0, y = 2
var z = y + ++x
```
сначала значение переменной **x** станет ```0 + 1 = 1```,
а затем будет вычислено значение переменной **z**:  ```2 + 1 = 3```

________________________________________________________

## ![ico25] Декремент (--)

Все то же самое, только значение не увеличивается на 1, а уменьшается ![wink-20]

### [![hw-30] Упражнения](https://docs.google.com/forms/d/e/1FAIpQLSdsKuS6kG1r5O3H62G_m32NK8a88jmFmJ5e4N2uAiDLAb31xQ/viewform)

______________________________________________________________

[![link] MDN](https://developer.mozilla.org/ru/docs/Web/JavaScript/Reference/Operators/Arithmetic_Operators)

_________________________________________________________

![footer]
