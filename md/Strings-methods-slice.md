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

[<sup>indexOf()</sup>](Strings-methods-indexOf.md)

___________________________________________________________________

### ![ico25] slice()

Этот метод извлекает часть строки и возвращает извлеченную часть

Исходная строка не меняется

Метод принимает 2 числовых параметра:

1) индекс символа в строке, с которого начинать извлечение подстроки

2) индекс символа в строке, до которого продолжать извлечение

> `( "до которого" означает, что этот символ не будет включен в извлекаемую подстроку )`

Например, в результате выполнения следующего кода:

```javascript
var name = "Меня зовут Мария".slice ( 11, 16 )
console.log ( name )
```

в консоли будет:     *Мария*

| 0 | 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10 | 11 | 12 | 13 | 14 | 15 |
|:-:|:-:|:-:|:-:|:-:|:-:|:-:|:-:|:-:|:-:|:-:|:-:|:-:|:-:|:-:|:-:|
| М | е | н | я |   | з | о | в | у | т |   | М | а | р | и | я |

Аналогичный результат мы получим в результате выполнения кода:

```javascript
var str = "Меня зовут Мария"
var name = str.slice ( 11, str.length )
console.log ( name )
```

где `str.length` - длина строки, которая на единицу больше индекса последнего символа в строке ( потому что нумерация символов начинается с нуля )

Таким образом, если мы хотим извлечь фрагмент строки с какой-то позиции и до самого конца, то этот вариант будет наиболее подходящим

Если методу передать в качестве параметров отрицательные числа, то отсчет будет вестись от конца строки

|<sup>-16</sup>|<sup>-15</sup>|<sup>-14</sup>|<sup>-13</sup>|<sup>-12</sup>|<sup>-11</sup>|<sup>-10</sup>|<sup>-9</sup>|<sup>-8</sup>|<sup>-7</sup>|<sup>-6</sup>|<sup>-5</sup>|<sup>-4</sup>|<sup>-3</sup>|<sup>-2</sup>|<sup>-1</sup>|
|:-:|:-:|:-:|:-:|:-:|:-:|:-:|:-:|:-:|:-:|:-:|:-:|:-:|:-:|:-:|:-:|
| `М` | `е` | `н` | `я` | ` ` | `з` | `о` | `в` | `у` | `т` | ` ` | `М` | `а` | `р` | `и` | `я` |
|`0`|`1`|`2`|`3`|`4`|`5`|`6`|`7`|`8`|`9`|`10`|`11`|`12`|`13`|`14`|`15`|

```javascript
str.slice ( -11, -6 )                  // вернет  "зовут"
str.slice ( -str.length, str.length )  // вернет  "Меня зовут Мария"
str.slice ( -11, str.length )          // вернет  "зовут Мария"
str.slice ( -13, str.length )          // вернет  "я зовут Мария"
str.slice ( -15, -1 )                  // вернет  "еня зовут Мари"
str.slice ( -16, -1 )                  // вернет  "Меня зовут Мари"
str.slice ( -16,  0 )                  // вернет  "" ( пустую строку )
```

Можно опустить второй аргумент:

```javascript
str.slice ( -str.length )   // вернет  "Меня зовут Мария" ( всю строку )
str.slice ( 5 )             // вернет  "зовут Мария" ( до конца строки )
```

___________________________________________________________________

[<sup>substring()</sup>](Strings-methods-substring.md)<br/>
[<sup>substr()</sup>](Strings-methods-substr.md)<br/>
[<sup>toLowerCase()</sup>](Strings-methods-toLowerCase.md)<br/>
[<sup>toUpperCase()</sup>](Strings-methods-toUpperCase.md)<br/>
[<sup>split()</sup>](Strings-methods-split.md)<br/>
[<sup>trim()</sup>](Strings-methods-trim.md)<br/>
[<sup>charAt()</sup>](Strings-methods-charAt.md)<br/>
[<sup>charCodeAt()</sup>](Strings-methods-charCodeAt.md)<br/>
[<sup>repeat()</sup>](Strings-methods-repeat.md)<br/>
[<sup>replace()</sup>](Strings-methods-replace.md)<br/>
[<sup>padStart & padEnd</sup>](Strings-methods-padStart-padEnd.md)

___________________________________________________________________

![footer]
