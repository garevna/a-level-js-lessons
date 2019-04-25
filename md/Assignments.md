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
[err-20]: https://raw.githubusercontent.com/garevna/a-level-js-lessons/master/ico/no_entry-20.png
[err-25]: https://raw.githubusercontent.com/garevna/a-level-js-lessons/master/ico/no_entry-25.png
[err-30]: https://raw.githubusercontent.com/garevna/a-level-js-lessons/master/ico/no_entry-30.png
[reload]: https://raw.githubusercontent.com/garevna/a-level-js-lessons/master/ico/reload.png
[file-20]: https://raw.githubusercontent.com/garevna/a-level-js-lessons/master/ico/pencil-20.png

<table><tr><td width="50">

![ico25] <br/><sup>[**Lesson&nbsp;1**](../lessons/lesson-01.md)</sup>
  </td>
  <td width="800"><h2>Операторы присваивания</h2></td>
  <td>

  ![me40] <br/><sup>[**Занятие&nbsp;1**](../lessons/lesson-01.md)</sup></td>
</tr></table>


В результате операции присваивания устанавливается тип данных переменной

Это и есть **динамическая типизация**

_________________________________________________________

## ![ico20] Оператор `=`

С помощью **`=`** переменным присваиваются значения

<sup>![warn-25] не путайте оператор присваивания с оператором сравнения</sup>

#### ![cap-20] 1

```javascript
var start = "Hello"
var end = "bye"

end = start
```

Теперь в переменной  **`end`**  будет  значение  "Hello"

_________________________________________________________________

#### ![cap-20] 2

```javascript
var  x = 5
var  y = x + 4
```

Значением переменной **`y`** будет 9

_________________________________________________________________

## ![ico20] Оператор `+=`

Добавляет значение к переменной

#### ![cap-20] 3

```javascript
var x = 0
x += 5
console.log (x)   // 5
```

#### ![cap-20] 4

```javascript
var y = 10
x += y
console.log (x)   // 15
```

_________________________________________________________

## ![ico20] Оператор `-=`

Вычитает значение из переменной

#### ![cap-20] 5

```javascript
var x = 20
x -= 5
console.log (x)   // 15

var y = 10
x -= y
console.log (x)   // 5
```

_________________________________________________________

## ![ico20] Оператор `*=`

Умножает переменную на значение

#### ![cap-20] 6

```javascript
var x = 5
x *= 5
console.log (x)   // 25

var y = 10
x *= y
console.log (x)   // 250
```

_________________________________________________________

## ![ico20] Оператор `/=`

Делит переменную на значение

#### ![cap-20] 7

```javascript
var x = 30
x /= 5
console.log (x)   // 6

var y = 3
x /= y
console.log (x)   // 2
```

_________________________________________________________________

## ![ico20] Оператор `%=`

Присваивает переменной остаток от деления

#### ![cap-20] 8

```javascript
var x = 17
x %= 5
console.log (x)         // 2

var x = 16,  y = 3
x %= y
console.log (x)         // 1

var x = 20,  y = 3
console.log ( x %= y )  // 2

var x = 25,  y = 6
console.log ( x %= y )  // 2
```

_________________________________________________________________

### [![hw-30] Упражнения](https://docs.google.com/forms/d/e/1FAIpQLSd0-twHJZfk-bKNkk-mg7ELLH49d3GYjcahThqGJC7A7sAJZw/viewform)

_________________________________________________________________________

![footer]
