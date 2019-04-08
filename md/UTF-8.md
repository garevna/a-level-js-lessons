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

<table><tr><td width="50">

![ico25] <br/><sup>[**Lesson&nbsp;1**](../lessons/lesson-01.md)</sup>
  </td>
  <td width="800"><h2>UTF-8</h2></td>
  <td>

  ![me40] <br/><sup>[**Занятие&nbsp;1**](../lessons/lesson-01.md)</sup></td>
</tr></table>


Все символы имеют числовой код

Соответствие между символом и его кодом устанавливается в кодировочной таблице

Самый широкий охват символов различных алфавитов представлен в кодировке UTF-8

( **UTF** - *Unicode Transformation Format* )

При сравнении двух строк последовательно сравниваются числовые коды символов этих строк

<sup>Например, десятичный код символа "@" равен 64, а десятичный код символа "w" равен 119<sup>

<sup>Логическое выражение ``"@" > "w"`` будет иметь значение `false`</sup>

Сравнение строк происходит посимвольно до первого несовпадения

Логическое выражение

```javascript
"@gmail.com" < "www.google.com"
```

будет иметь значение **true**, потому что при сравнении первых символов двух строк будет обнаружено, что код символа "@" меньше кода символа "w"

далее сравнение проводиться не будет

Логическое выражение

```javascript
"@gmail.com" < "@mail.ru"
```

будет иметь значение **true**, потому что коды первых символов этих строк совпадают, а десятичный код символа "g" ( 103 ) меньше десятичного кода символа "m" ( 109 )

Узнать код символа в определенной позиции в строке можно с помощью метода `charCodeAt ( [ позиция символа в строке ] )`

```javascript
"789".charCodeAt ( 0 )  // результат будет 55 - это код символа "7"
"789".charCodeAt ( 1 )  // результат будет 56 - это код символа "8"
"789".charCodeAt ( 2 )  // результат будет 57 - это код символа "9"
```

________________________________________________________

### [![hw-30] Упражнения](https://docs.google.com/forms/d/e/1FAIpQLSdsKuS6kG1r5O3H62G_m32NK8a88jmFmJ5e4N2uAiDLAb31xQ/viewform)

_____________________________________________________________

[![link-20] шестнадцатеричные коды символов](https://www.fileformat.info/info/charset/UTF-8/list.htm "шестнадцатеричные коды символов")

[![link-20] w3schools](https://www.w3schools.com/html/html_symbols.asp)

[![link-20] UTF-8](http://i.voenmeh.ru/kafi5/Kam.loc/inform/UTF-8.htm)

_____________________________________________________________

![footer]
