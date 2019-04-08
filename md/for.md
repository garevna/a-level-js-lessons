[footer]: https://github.com/garevna/js-course/raw/master/images/a-level-ico.png?raw=true
[me40]: https://raw.githubusercontent.com/garevna/a-level-js-lessons/master/ico/myPhoto-40.png "Ⓒ Irina Fylyppova ( garevna ) 2019"
[ico20]: https://raw.githubusercontent.com/garevna/a-level-js-lessons/master/ico/a-level-20.png
[ico25]: https://raw.githubusercontent.com/garevna/a-level-js-lessons/master/ico/a-level-25.png
[hw-20]: https://raw.githubusercontent.com/garevna/a-level-js-lessons/master/ico/briefcase-20.png
[hw-30]: https://raw.githubusercontent.com/garevna/a-level-js-lessons/master/ico/briefcase-30.png
[cap-20]: https://raw.githubusercontent.com/garevna/a-level-js-lessons/master/ico/coffee-20.png
[cap-30]: https://raw.githubusercontent.com/garevna/a-level-js-lessons/master/ico/coffee-30.png
[warn-25]: https://raw.githubusercontent.com/garevna/a-level-js-lessons/master/ico/warning-25.png
[link-20]: https://raw.githubusercontent.com/garevna/a-level-js-lessons/master/ico/link-20.png
[wink-20]: https://raw.githubusercontent.com/garevna/a-level-js-lessons/master/ico/wink-20.png

| <img width="900"/> | ![me40] <br/><sup>[Занятие&nbsp;1](../lessons/lesson-01.md)</sup> |
|-|-|

# Оператор `for`

## ![ico25] Цикл

Цикл - это повторение одних и тех же действий несколько раз

Каждое повторение цикла называется **итерацией цикла**

```javascript
var res = 0

for ( var i = 0; i < 10; i++ ) {
       res += i * 2
}
```

Переменная **i**  называется **переменной цикла** ( *счетчик* )

Имя переменной можно выбрать любое ( a, x, t... )

Расшифровка выражения в круглых скобках:

```javascript
( var i = 0; i < 10; i++ )
```

`var i = 0`    - инициализируем переменную цикла, т.е. объявляем ее и присваиваем ей начальное значение 0

`i++`          - способ изменения переменной цикла на каждой итерации;

<sup>в данном случае после каждой итерации значение переменной цикла будет увеличиваться на единицу</sup>

`i < 10`       - устанавливаем ограничение на число итераций цикла

<sup>( значение переменной цикла будет увеличиваться до тех пор, пока оно меньше 10 )</sup>


* В данном примере к значению переменной `res` 10 раз будет добавлено значение вычисляемого выражения  `i * 2`</sup>
* На первой итерации цикла значением переменной цикла **i** будет 0, поэтому значение переменной `res` не изменится</sup>
* После первой итерации значение переменной цикла **i** будет увеличено на единицу, и станет равно 1</sup>
* На второй итерации цикла значение выражения  `i * 2` уже будет равно 2, это значение будет добавлено к значению переменной `res`, которое станет равно 2</sup>
* После итерации значение переменной цикла **i** опять увеличится на 1 и станет равно 2</sup>
* На третьей итерации выражение  ```i * 2``` примет значение 4</sup>
* Это значение будет добавлено к значению переменной ```res```, которое станет равно `2 + 4 = 6`</sup>

И так далее...

### ![cap-30] Массив

```javascript
var res = 0
var arr = [ 2, 1, 5, 3 ]
var i
for ( i = 0;    i < arr.length;   i++ ) {
       res += arr [ i ]
}
```
<sup>У массивов, так же, как у текстовых строк, есть свойство `length`</sup>

<sup>Это свойство содержит число элементов массива ( или число символов в строке )</sup>

В качестве ограничения на число итераций цикла мы используем длину массива `arr.length`:

```javascript
i < arr.length
```

т.е. пока переменная цикла меньше длины массива, цикл будет повторяться

В результате выполнения цикла в переменной `res` будет сумма элементов массива `arr`

![warn-25] Можно изменять значение переменной цикла на каждой итерации на число, отличное от единицы

Следующий код выведет в консоль все нечетные числа от 1 до 20:

```javascript
for ( var i = 1;  i < 20;  i += 2 ) {
    console.log ( i )
}
```

_____________________________________________________________________

## ![ico25] Директива continue

Прерывает выполнение текущей итерации цикла

Например, если нужно вывести в консоль только четные числа до 10, то можно сделать так:

```javascript
for ( var i = 1;  i < 10;  i++ ) {
    if ( i % 2 === 0 ) console.log ( i )
}
```

А можно и так:

```javascript
for ( var i = 1;  i < 10;  i++ ) {
    if ( i % 2 !== 0 )  continue
    console.log ( i )
}
```

<sup>Поскольку в теле условного оператора  `if`  всего одна операция, фигурные скобки мы опустили</sup>

<sup>`%` - это операция взятия остатка от деления ( `4 % 2` будет 0, `5 % 2` будет 1 )</sup>

<sup>`x !== y`  значение или тип данных переменной **x** не совпадает со значением или типом данных переменной **y**</sup>

_________________________________________________________________________________________________

## ![ico25] Директива **break**

Прерывает выполнение цикла

Например, если нужно вывести в консоль  числа до 10, то можно сделать так:

```javascript
for ( var i = 1;  ;  i++ ) {
    if ( i > 10 ) break
    console.log ( i )
}
```

Здесь условие на переменную цикла пропущено, что привело бы к бесконечному циклу, если бы мы не поставили прерывание цикла `break` внутри его тела

________________________________________________________________________________________________________

[![link-20] MDN](https://developer.mozilla.org/ru/docs/Web/JavaScript/Guide/%D0%A6%D0%B8%D0%BA%D0%BB%D1%8B_%D0%B8_%D0%B8%D1%82%D0%B5%D1%80%D0%B0%D1%86%D0%B8%D0%B8)

### [![hw-30] Упражнения](https://docs.google.com/forms/d/e/1FAIpQLSdsKuS6kG1r5O3H62G_m32NK8a88jmFmJ5e4N2uAiDLAb31xQ/viewform)

_________________________________________________________________________

![footer]
