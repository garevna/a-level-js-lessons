[footer]: https://github.com/garevna/js-course/raw/master/images/a-level-ico.png?raw=true
[me40]: https://raw.githubusercontent.com/garevna/a-level-js-lessons/master/ico/myPhoto-40.png "Ⓒ Irina Fylyppova ( garevna ) 2019"
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

![ico25] <br/><sup>[**Lesson&nbsp;1**](../lessons/lesson-01.md)</sup>
  </td>
  <td width="800"><h2>Условные операторы</h2></td>
  <td>

  ![me40] <br/><sup>[**Занятие&nbsp;1**](../lessons/lesson-01.md)</sup></td>
</tr></table>


## ![ico20] if

Обычная последовательность выполнения кода соответствует порядку следования команд:

```javascript
var x = 5            // будет выполнена первой
var y = 11           // будет выполнена второй
var z = x * y + 5    // будет выполнена третьей
```

Условный оператор обеспечивает возможность ветвления скрипта в зависимости от выполнения определенного условия

Синтаксис:

```javascript
if ( логическое выражение ) {  
       ...код 1  
}  else {
       ...код 2
}
```

В этой записи появляется две ветки кода: код 1 и код 2

Какая ветка кода будет выполнена, зависит от значения логического выражения в круглых скобках оператора `if`

Если значением логического выражения будет `true`, то выполняться будет код 1

В противном случае (если значением логического выражения будет `false` ) выполняться будет код 2

##### Примечание:

Если в теле условного оператора  `if` всего одна операция, фигурные скобки можно опустить:

```javascript
if ( i % 2 === 0 ) console.log ( i )

if ( i % 2 !== 0 )  continue
```

<sup>**%** - операция взятия остатка от деления</sup>

_________________________________________________________________

![cap-30]

```javascript
if ( typeof x === "number" ) {
       var z = x * 5
       var y = x / 10 - 3
}
else {
       var z = 0
       var y = 0
}
```

Здесь код разветвляется: первая "ветка" кода будет выполнена тогда, когда переменная **x** будет числом

В этом случае переменной **z** будет присвоено значение `x * 5`, а переменной **y** значение выражения `x / 10 - 3`

<sup>В противном случае ( когда **x** не является числом ) переменные **z** и **y** получат значение **0**</sup>

_________________________________________________________________

## ![ico20] Тернарный оператор

#### Синтаксис

| логическое выражение ? выражение 1 : выражение 2 |
|-|

Состоит из трех частей:

* логическое выражение
* выражение 1
* выражение 2

После `логического выражения` обязательно следует символ **?**, после чего следуют `выражение 1` и `выражение 2`, разделенные двоеточием

Вычисляется значение логического выражения

Если оно будет равно `true`, тернарный оператор вычисляет и возвращает значение `выражение 1`

Если оно будет равно `false`, тернарный оператор вычисляет и возвращает значение `выражение 2`

_____________________________________________________________

#### ![cap-30] 1

```javascript
var meet = sourse === '🌴' ? '🍌' : '🍄'
```

Здесь логическое выражение

```javascript
sourse === '🌴'    
```

Если это выражение примет значение `true`, то переменной  **`meet`**  будет присвоено значение  '🍌'

Если это выражение примет значение `false`, то переменной  **`meet`**  будет присвоено значение  '🍄'

______________________________________________________________

#### ![cap-30] 2

```javascript
var result = expresion ? "Все правильно" : "Ошибка"
```

Если expresion === ```true```, значением переменной  **result**  будет строка *"Все правильно"*

Если expresion === ```false```, значением переменной  **result**  будет строка *"Ошибка"*

_________________________________________________________

#### ![cap-30] 3

```javascript
var sourse = '🐙'
var meet = sourse === '🐥' ? console.log ( '🥚' ) : console.log ( '💧' )
```
В консоль будет выведено  💧

_____________________________________________________________

| [![link-25] MDN](https://developer.mozilla.org/ru/docs/Web/JavaScript/Guide/Expressions_and_Operators) | [![link-25] w3schools](https://www.w3schools.com/js/js_if_else.asp) |
|-|-|


### [![hw-30] Упражнения](https://docs.google.com/forms/d/e/1FAIpQLSds2Q8WyrfeDSN7dZd6F3v0HspdMQG9BPrV0d3SG3mOGh2rFw/viewform)

_________________________________________________________________________

![footer]
