[footer]: https://github.com/garevna/js-course/raw/master/images/a-level-ico.png?raw=true
[me]: https://raw.githubusercontent.com/garevna/a-level-js-lessons/master/ico/myPhoto-40.png "Ⓒ Irina Fylyppova ( garevna ) 2019"

[ico20]: https://raw.githubusercontent.com/garevna/a-level-js-lessons/master/ico/a-level-20.png
[ico25]: https://raw.githubusercontent.com/garevna/a-level-js-lessons/master/ico/a-level-25.png

[cap-20]: https://raw.githubusercontent.com/garevna/a-level-js-lessons/master/ico/coffee-20.png
[cap-25]: https://raw.githubusercontent.com/garevna/a-level-js-lessons/master/ico/coffee-25.png

[warn-25]: https://raw.githubusercontent.com/garevna/a-level-js-lessons/master/ico/warning-25.png

[link-20]: https://raw.githubusercontent.com/garevna/a-level-js-lessons/master/ico/link-20.png

[dir-25]: https://raw.githubusercontent.com/garevna/a-level-js-lessons/master/ico/folder-25.png

[yes-30]: https://raw.githubusercontent.com/garevna/a-level-js-lessons/master/ico/yes-30.png

[hw-30]: https://raw.githubusercontent.com/garevna/a-level-js-lessons/master/ico/briefcase-30.png



<table><tr><td width="50">

![ico25] <br/><sup>[**Lesson&nbsp;2**](../lessons/lesson-02.md)</sup>
  </td>
  <td width="800"><h2>Функции</h2></td>
  <td>

  ![me] <br/><sup>[**Занятие&nbsp;2**](../lessons/lesson-02.md)</sup></td>
</tr></table>


___________________________________________________________________

### ![ico25] function declaration

Объявление функции начинается с ключевого слова  **_`function`_**, после которого ( через пробел ) следует имя функции ( правила те же, что для имен переменных )

![warn-25] После имени функции обязательно следуют круглые скобки

В круглых скобках могут быть ( а могут и не быть ) формальные параметры функции

**Формальные параметры функции** - это имена переменных, которые будут использованы внутри функции

На момент объявления функции они не имеют значений

Значения формальных параметров будут установлены в момент вызова функции

![warn-25] Тело функции заключается в фигурные скобки

Внутри фигурных скобок размещается код функции

```javascript
function grow ( param1, param2, ... ) {
      ...код...
}
```

<sup>здесь param1, param2, и т.д. - это формальные параметры функции</sup>

___________________________________________________________________

### ![ico25] Аргументы функции

При вызове функции ей будут переданы аргументы - входные данные

Аргументы функции - это конкретные значения параметров, которые указываются в момент вызова функции

Если функции будет передано аргументов больше, чем указано параметров при объявлении функции, то лишние аргументы будут отброшены

Если функции будет передано аргументов меньше, чем указано параметров при объявлении функции, то недостающие аргументы получат значение undefined, что может привести к ошибке в процессе выполнения кода

#### ![cap-25] 1

###### Объявление функции:

```javascript
function say ( x, y, z ) {
    console.log ( x + y + z )
}
```

###### Вызов функции с передачей ей аргументов:

```javascript
var name = "Иван"

say ( "Привет, ",  name,  "!" )
```

###### Результат в консоли

```
Привет,  Иван!
```

```javascript
var  a = 2,
     b = 8,
     q = say ( a, b, "$" )
```

###### Результат в консоли

```
10$
```

___________________________________________________________________

### ![ico25] return

Оператор **_`return`_** завершает выполнение функции

Функция может возвращать значения с помощью оператора  **_`return`_**

#### ![cap-25] 2

###### Объявление функции:

```javascript
function multiply ( x, y ) {
    return x * y * 10
}
```

Вызов функции с передачей ей аргументов:

```javascript
var z = multiply ( 5, 2 )
//  переменной  z  будет присвоено значение  
//  5 * 2 * 10 = 100

var  a = 2,    b = 8,    w = multiply ( a, b )
//  переменной  w  будет присвоено значение
//  2 * 8 * 10 = 160
```

_____________________________________________________________________

| [![hw-30] Тесты](https://garevna.github.io/js-quiz/#function) | [![link-20] w3schools](https://www.w3schools.com/js/js_function_definition.asp) | [![link-20] MDN](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/function) |
|-|-|-|

___________________________________________________________________

![footer]
