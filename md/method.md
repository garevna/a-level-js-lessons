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
  <td width="800"><h2>Методы</h2></td>
  <td>

  ![me] <br/><sup>[**Занятие&nbsp;2**](../lessons/lesson-02.md)</sup></td>
</tr></table>


___________________________________________________________________

## ![ico25] Методы

**Метод** - это свойство-функция

В следующем примере объект  **obj**  имеет два свойства:  **name**  и  **showMessage**

```javascript
var obj = {
        name: "Иван",
        showMessage: function ( message ) {
                console.log ( message ? message : "Привет!" )
        }
}
```

```javascript
typeof obj.name         // "string"
typeof obj.showMessage  // "function"
```

Обращение к любому свойству:   **`имя объекта`** + **`.`** + **_`имя свойства`_**

С методами отличие только в том, что для вызова метода после его имени нужны круглые скобки, и если у метода есть формальные параметры - то в круглых скобках нужно перечислить аргументы ( входные данные )

```javascript
obj.showMessage ( "Я иду в магазин" )
```

<sup>В результате такого вызова в консоль будет выведено  "Я иду в магазин"</sup>

Таким образом, вызов метода отличается от вызова обычной функции только тем, что перед именем метода должно быть имя "хозяина", отделенное точкой от
имени метода

У всех функций ( и всех переменных ) в *JS* есть "хозяин"

поэтому все функции в *JS* - методы

а все переменные - свойства

у обычных функций ( и переменных ) хозяин - глобальный объект ( `window` )

все, что не находится в "частной собственности", принадлежит ему

Если при обращении к свойству или вызове метода "хозяин" не указан, значит этот хозяин - глобальный объект

```javascript
var x = 235
window.x       //  вернет 235
```

___________________________________________________________________

### ![ico25] Метод charCodeAt()

Метод `charCodeAt()` работает только со строками

Т.е. любая строка является "хозяином" метода `charCodeAt()`

Этот метод возвращает числовой код символа в заданной позиции в строке

Номер позиции символа в строке передается методу в качестве параметра

#### ![cap-25] 1

```javascript
var userName = "Василий Алибабаевич",
userName.charCodeAt ( 4 )              // 1083
```

<sup>**1083** - это десятичный код символа *"л"* - четвертого символа от начала строки<br>( нумерация символов начинается с нуля )</sup>

___________________________________________________________________

[![link-20] w3schools](https://www.w3schools.com/jsref/jsref_charCodeAt.asp)
[![link-20] Коды символов](https://www.ascii.cl/htmlcodes.htm)

___________________________________________________________________

### ![ico25] Метод push()

Метод  `push ()`  работает только с массивами

Т.е. любой массив является "хозяином" метода `push()`

Этот метод добавляет новый элемент в конец массива

Новый элемент передается методу в качестве параметра

#### ![cap-25]  2

```javascript
var users = [ "Jon", "Helen", "Mary" ]
users.push ( "Henry" )
```

в конец массива **users** будет добавлен элемент  *"Henry"*

В результате массив **users** будет:  `[ "Jon", "Helen", "Mary", "Henry" ]`

![warn-30] Метод `push ()` возвращает новую длину массива

Т.е. после выполнения операции:

```javascript
z = users.push ( "Henry" )
```

значение переменной **z** будет равно 4

___________________________________________________________________

## [![hw-30] Упражнения](https://docs.google.com/forms/d/e/1FAIpQLSfhSiifjcwm7tLhcQftjAXByl-O93y3o31i91wAMr-uvi-MzQ/viewform)

___________________________________________________________________

[![link-20] w3schools](https://www.w3schools.com/jsref/jsref_push.asp)

___________________________________________________________________

![footer]
