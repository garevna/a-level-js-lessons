[footer]: https://github.com/garevna/js-course/raw/master/images/a-level-ico.png?raw=true
[me]: https://raw.githubusercontent.com/garevna/a-level-js-lessons/master/ico/myPhoto-40.png "Ⓒ Irina Fylyppova ( garevna ) 2019"
[ico20]: https://raw.githubusercontent.com/garevna/a-level-js-lessons/master/ico/a-level-20.png
[ico25]: https://raw.githubusercontent.com/garevna/a-level-js-lessons/master/ico/a-level-25.png
[hw-30]: https://raw.githubusercontent.com/garevna/a-level-js-lessons/master/ico/briefcase-30.png
[cap-30]: https://raw.githubusercontent.com/garevna/a-level-js-lessons/master/ico/coffee-30.png
[warn-25]: https://raw.githubusercontent.com/garevna/a-level-js-lessons/master/ico/warning-25.png
[link-20]: https://raw.githubusercontent.com/garevna/a-level-js-lessons/master/ico/link-20.png
[err-20]: https://raw.githubusercontent.com/garevna/a-level-js-lessons/master/ico/no_entry-20.png
[err-25]: https://raw.githubusercontent.com/garevna/a-level-js-lessons/master/ico/no_entry-25.png
[err-30]: https://raw.githubusercontent.com/garevna/a-level-js-lessons/master/ico/no_entry-30.png

<table><tr><td width="50">

![ico25] <br/><sup>[**Lesson&nbsp;2**](../lessons/lesson-02.md)</sup>
  </td>
  <td width="800"><h2>Методы работы со строками</h2></td>
  <td>

  ![me] <br/><sup>[**Занятие&nbsp;2**](../lessons/lesson-02.md)</sup></td>
</tr></table>


## ![ico25] String.fromCharCode()

У конструктора **`String`** есть несколько статических методов, которые позволяют манипулировать содержимым строк

Вызывать эти методы можно только как методы объекта `String`  ( *`String`.имя_метода* )

`String.fromCharCode()` возвращает строку из символов, коды которых перечислены в аргументах функции ( в круглых скобках )

#### ![cap-30] 1

```javascript
String.fromCharCode ( 123, 105, 125 )
```

###### Результат
```
"{i}"
```

#### ![cap-30] 2

```javascript
String.fromCharCode ( 48, 49, 50, 51, 52, 53 )
```

###### Результат
```
"012345"
```

#### ![cap-30] 3

```javascript
var str = ""
for ( var x = 97; x < 105; x++ )
    str += String.fromCharCode ( x )

console.log ( str )
```

###### Результат
```
abcdefgh
```

___________________________________________________________________

[![link-20] MDN](https://developer.mozilla.org/ru/docs/Web/JavaScript/Reference/Global_Objects/String "Открывайте в новой вкладке")

___________________________________________________________________
![footer]
