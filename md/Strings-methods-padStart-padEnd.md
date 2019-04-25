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
[<sup>toUpperCase()</sup>](Strings-methods-toUpperCase.md)<br/>
[<sup>split()</sup>](Strings-methods-split.md)<br/>
[<sup>trim()</sup>](Strings-methods-trim.md)<br/>
[<sup>charAt()</sup>](Strings-methods-charAt.md)<br/>
[<sup>charCodeAt()</sup>](Strings-methods-charCodeAt.md)<br/>
[<sup>repeat()</sup>](Strings-methods-repeat.md)<br/>
[<sup>replace()</sup>](Strings-methods-replace.md)

### ![ico25] padStart & padEnd

###### ES8 ( 2017 )

Методы `padStart ()` и `padEnd ()` дополняют строку другой строкой до тех пор, пока результирующая строка не достигнет указанной длины

Дополняющая строка будет повторяться необходимое число раз

Первый аргумент - результирующая длина строки

Второй аргумент - строка-заполнитель

Если второй аргумент опущен, то заполнение происходит символом пробела

`padStart` дополняет строку слева

`padEnd`  дополняет строку справа


#### ![cap-25] 1

```javascript
"Google".padStart(5)               //  "Google"
"Google".padStart(10)              //  "    Google"
"Google".padStart(10).padEnd(15)   //  "    Google     "
"Google".padStart( 10, "789" )
        .padEnd( 15, "45" )        //  "7897Google45454"
```

#### ![cap-25] 2

```javascript
var cities = [ "Неаполь", "Вашингтон", "Женева" ]

for ( var city of cities ) {
    console.log (
        `Город: ${ city.padEnd (16) } ( ${ cities.indexOf ( city ) } )`
    )
}
```

###### Результат в консоли:

```
Город: Неаполь          ( 0 )
Город: Вашингтон        ( 1 )
Город: Женева           ( 2 )
```

___________________________________________________________________

![footer]
