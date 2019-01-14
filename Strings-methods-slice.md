# :mortar_board: Методы работы со строками

:file_folder: `Операции со строками`

* [`+`](Strings-methods-concat)

:file_folder: `Методы строк`

* [`indexOf()`](Strings-methods-indexOf)

***

### slice()

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

        var str = "Меня зовут Мария"
        var name = str.slice ( 11, str.length )
        console.log ( name )

где `str.length` - длина строки, которая на единицу больше индекса последнего символа в строке ( потому что нумерация символов начинается с нуля )

Таким образом, если мы хотим извлечь фрагмент строки с какой-то позиции и до самого конца, то этот вариант будет наиболее подходящим

Если методу передать в качестве параметров отрицательные числа, то отсчет будет вестись от конца строки

|`-16`|`-15`|`-14`|`-13`|`-12`|`-11`|`-10`|`-9`|`-8`|`-7`|`-6`|`-5`|`-4`|`-3`|`-2`|`-1`|
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
***

* [`substring()`](Strings-methods-substring)
* [`substr()`](Strings-methods-substr)
* [`toLowerCase()`](Strings-methods-toLowerCase)
* [`toUpperCase()`](Strings-methods-toUpperCase)
* [`split()`](Strings-methods-split)
* [`trim()`](Strings-methods-trim)
* [`charAt()`](Strings-methods-charAt)
* [`charCodeAt()`](Strings-methods-charCodeAt)
* [`repeat()`](Strings-methods-repeat)
* [`replace()`](Strings-methods-replace)
* [`padStart & padEnd`](Strings-methods-padStart-padEnd)

:file_folder:` Дополнительно`

* [`String.fromCharCode()`](String-fromCharCode)
* [`Переменные в литералах`](Strings-vars-and-literals)

***

#### [:briefcase: Тесты](https://garevna.github.io/js-quiz/#stringMethods)

***

| [:link:` MDN`](https://developer.mozilla.org/ru/docs/Web/JavaScript/Reference/Global_Objects/String "Открывайте в новой вкладке") | [:link:` String Methods`](https://www.w3schools.com/js/js_string_methods.asp "Открывайте в новой вкладке") | [:link:` String Reference`](https://www.w3schools.com/jsref/jsref_obj_string.asp "Открывайте в новой вкладке") |
|-|-|-|