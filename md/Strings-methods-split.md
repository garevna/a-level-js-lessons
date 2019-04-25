[footer]: https://github.com/garevna/js-course/raw/master/images/a-level-ico.png?raw=true
[me]: https://raw.githubusercontent.com/garevna/a-level-js-lessons/master/ico/myPhoto-40.png "Ⓒ Irina Fylyppova ( garevna ) 2019"

[ico20]: https://raw.githubusercontent.com/garevna/a-level-js-lessons/master/ico/a-level-20.png
[ico25]: https://raw.githubusercontent.com/garevna/a-level-js-lessons/master/ico/a-level-25.png

[cap-20]: https://raw.githubusercontent.com/garevna/a-level-js-lessons/master/ico/coffee-20.png
[cap-25]: https://raw.githubusercontent.com/garevna/a-level-js-lessons/master/ico/coffee-25.png

[warn-25]: https://raw.githubusercontent.com/garevna/a-level-js-lessons/master/ico/warning-25.png

[link-20]: https://raw.githubusercontent.com/garevna/a-level-js-lessons/master/ico/link-20.png



<table><tr><td width="50">

![ico25] <br/><sup>[**Lesson&nbsp;2**](../lessons/lesson-02.md)</sup>
  </td>
  <td width="800"><h2>Методы строк</h2></td>
  <td>

  ![me] <br/><sup>[**Занятие&nbsp;2**](../lessons/lesson-02.md)</sup></td>
</tr></table>


[<sup>indexOf()</sup>](Strings-methods-indexOf.md)<br/>
[<sup>slice()</sup>](Strings-methods-slice.md)<br/>
[<sup>substring()</sup>](Strings-methods-substring.md)<br/>
[<sup>substr()</sup>](Strings-methods-substr.md)<br/>
[<sup>toLowerCase()</sup>](Strings-methods-toLowerCase.md)<br/>
[<sup>toUpperCase()</sup>](Strings-methods-toUpperCase.md)


___________________________________________________________________

### ![ico25] split()

Разбивает строку на массив подстрок и возвращает массив

Исходная строка не изменяется

Аргументом является символ-разделитель, по которому будет происходить "расчленение" строки

Если в качестве разделителя использовать пустую строку, то строка будет разбита на символы

#### ![cap-25] 1

```javascript
var str = "веселый денек был сегодня"
console.log ( str.split ( 'е' ) )
```

в консоли будет:
```
[ "в", "с", "лый д", "н", "к был с", "годня" ]
```

#### ![cap-25] 2

```javascript
var str = "one | two | three | four | five | six"
console.log ( str.split ( ' | ' ) )
```

в консоли будет:
```
[ "one", "two", "three", "four", "five", "six" ]
```

___________________________________________________________________

[<sup>trim()</sup>](Strings-methods-trim.md)<br/>
[<sup>charAt()</sup>](Strings-methods-charAt.md)<br/>
[<sup>charCodeAt()</sup>](Strings-methods-charCodeAt.md)<br/>
[<sup>repeat()</sup>](Strings-methods-repeat.md)<br/>
[<sup>replace()</sup>](Strings-methods-replace.md)<br/>
[<sup>padStart & padEnd</sup>](Strings-methods-padStart-padEnd.md)

___________________________________________________________________

![footer]
