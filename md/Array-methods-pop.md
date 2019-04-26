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

### ![ico25] pop ()

Этот метод удаляет последний элемент массива и возвращает удаленный элемент

У метода нет параметров ( аргументов )

#### ![cap-30] 1

```javascript
var myArray = [ "Гвоздь", "Собака", "Процессор", "Диск", "Программа" ]
var elem = myArray.pop ()
```

После выполнения этого кода в массиве **myArray** останутся:
```
[ "Гвоздь", "Собака", "Процессор", "Диск" ]
```

а значение переменной   `elem`   будет     "Программа"

_______________________________________________________________________________________

[<sup>push()</sup>](Array-methods-push.md)<br>
[<sup>splice()</sup>](Array-methods-splice.md)<br>
[<sup>shift()</sup>](Array-methods-shift.md)<br>
[<sup>unshift()</sup>](Array-methods-unshift.md)<br>
[<sup>slice()</sup>](Array-methods-slice.md)<br>
[<sup>concat()</sup>](Array-methods-concat.md)<br>
[<sup>join()</sup>](Array-methods-join.md)<br>
[<sup>includes()</sup>](Array-methods-includes.md)

______________________________________________________________________________________________

### [![hw-30] Тесты](https://garevna.github.io/js-quiz/#arrayMethods)

_________________________________________________________________________

![footer]
