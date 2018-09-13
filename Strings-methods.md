[plus]: https://github.com/garevna/js-course/wiki/Strings-methods#-%D0%9A%D0%BE%D0%BD%D0%BA%D0%B0%D1%82%D0%B5%D0%BD%D0%B0%D1%86%D0%B8%D1%8F-%D1%81%D1%82%D1%80%D0%BE%D0%BA
[indexOf]: https://github.com/garevna/js-course/wiki/Strings-methods#-indexof
[slice]: https://github.com/garevna/js-course/wiki/Strings-methods#-slice-
[substring]: https://github.com/garevna/js-course/wiki/Strings-methods#-substring-
[substr]: https://github.com/garevna/js-course/wiki/Strings-methods#-substr-
[toLowerCase]: https://github.com/garevna/js-course/wiki/Strings-methods#-tolowercase-
[toUpperCase]: https://github.com/garevna/js-course/wiki/Strings-methods#-touppercase-
[split]: https://github.com/garevna/js-course/wiki/Strings-methods#-split-
[trim]: https://github.com/garevna/js-course/wiki/Strings-methods#-trim-
[charAt]: https://github.com/garevna/js-course/wiki/Strings-methods#-charat-
[charCodeAt]: https://github.com/garevna/js-course/wiki/Strings-methods#-charcodeat-
[repeat]: https://github.com/garevna/js-course/wiki/Strings-methods#-repeat-
[replace]: https://github.com/garevna/js-course/wiki/Strings-methods#-replace-

## 📖 Методы работы со строками

[:arrow_right_hook: Конкатенация строк][plus]
[:arrow_right_hook: indexOf()][indexOf]
[:arrow_right_hook: slice ()][slice]
[:arrow_right_hook: substring ()][substring]
[:arrow_right_hook: substr ()][substr]
[:arrow_right_hook: toLowerCase ()][toLowerCase]
[:arrow_right_hook: toUpperCase ()][toUpperCase]
[:arrow_right_hook: split ()][split]
[:arrow_right_hook: trim ()][trim]
[:arrow_right_hook: charAt ()][charAt]
[:arrow_right_hook: charCodeAt ()][charCodeAt]
[:arrow_right_hook: repeat ()][repeat]
[:arrow_right_hook: replace ()][replace]
***

[🔗 String Methods](https://www.w3schools.com/js/js_string_methods.asp "Открывайте в новой вкладке")
[🔗 String Reference](https://www.w3schools.com/jsref/jsref_obj_string.asp "Открывайте в новой вкладке")

### 📖 Сложение строк

Две символьные строки можно просто сложить

Например, в результате выполнения следующего кода:
```javascript
var  str_1 = "Привет, ",   str_2 = "студент"
console.log ( str_1 + str_2 )
```
в консоли будет:     *Привет, студент*

### 📖 indexOf()

Этот метод позволяет найти подстроку в строке:
```javascript
"my new book".indexOf ( "new" )
```
Он вернет индекс элемента, с которого начинается подстрока в строке

Например, после выполнения кода:
```javascript
console.log ( "my new book".indexOf ( "new" ) )
```
в консоли будет 3 ( нумерация символов в строке начинается с 0 )

После выполнения кода:
```javascript
var mainString = "Дела идут неплохо"
var pos = mainString.indexOf ( "идут" )
console.log ( pos )
```
в консоли будет 5

⚠️ Если указанная подстрока не будет найдена в текущей строке, то метод `indexOf()` вернет значение -1

### 📖 slice ()

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
```
0  1  2  3  4  5  6  7  8  9 10 11 12 13 14 15

М  е  н  я     з  о  в  у  т     М  а  р  и  я
```
Аналогичный результат мы получим в результате выполнения кода:

        var str = "Меня зовут Мария"
        var name = str.slice ( 11, str.length )
        console.log ( name )

где `str.length` - длина строки, которая на единицу больше индекса последнего символа в строке ( потому что нумерация символов начинается с нуля )

Таким образом, если мы хотим извлечь фрагмент строки с какой-то позиции и до самого конца, то этот вариант будет наиболее подходящим

Если методу передать в качестве параметров отрицательные числа, то отсчет будет вестись от конца строки
```
   0       1       2       3       4       5       6      7      8      9     10    11    12    13    14     15
  М        е       н       я               з       о      в      у       т           М     а     р     и      я
 -16      -15     -14     -13    -12     -11      -10    -9     -8      -7    -6    -5     -4   -3    -2     -1
```
```javascript
str.slice ( -11, -6 )                    // вернет  "зовут"
str.slice ( -str.length, str.length )    // вернет  "Меня зовут Мария"
str.slice ( -11, str.length )            // вернет  "зовут Мария"
str.slice ( -13, str.length )            // вернет  "я зовут Мария"
str.slice ( -15, -1 )                    // вернет  "еня зовут Мари"
str.slice ( -16, -1 )                    // вернет  "Меня зовут Мари"
str.slice ( -16,  0 )                    // вернет  "" ( пустую строку )
```
Можно опустить второй аргумент:
```javascript
str.slice ( -str.length )                // вернет  "Меня зовут Мария" ( всю строку )
str.slice ( 5 )                          // вернет  "зовут Мария" ( до конца строки )
```
### 📖 substring ()

Извлекает подстроку из строки

Исходная строка не меняется

Этот метод похож на slice (), но не допускает отрицательных значений аргументов
```javascript
"Хорошего дня".substring ( 9, 15 )       // "дня"
```
Если не указывать второй параметр, извлекать будет до конца строки:
```javascript
"Хорошего дня".substring ( 9 )          // "дня"
```
### 📖 substr ()

Извлекает подстроку из строки

Этот метод похож на slice (), но второй аргумент указывает длину извлекаемой подстроки

Исходная строка не меняется
```javascript
var str = "Веселый денек был сегодня"
console.log ( str.substr ( 8, 5 ) )
```
> `в консоли будет:  денек`
```javascript
var str = "Веселый денек был сегодня"
console.log ( str.substr ( 0, 7 ) )
```
> `в консоли будет: Веселый`

### 📖 toLowerCase ()

Преобразует символы строки к нижнему регистру
```javascript
var str = "ВЕСЕЛЫЙ ДЕНЕК БЫЛ СЕГОДНЯ"
console.log ( str.toLowerCase () )
```
> `в консоли будет:  веселый денек был сегодня`

### 📖 toUpperCase ()

Преобразует символы строки к верхнему регистру
```javascript
var str = "веселый денек был сегодня"
console.log ( str.toUpperCase () )
```
> `в консоли будет:   ВЕСЕЛЫЙ ДЕНЕК БЫЛ СЕГОДНЯ`

### 📖 split ()

Разбивает строку на массив подстрок и возвращает массив

Исходная строка не изменяется

Аргументом является символ-разделитель, по которому будет происходить "расчленение" строки

Если в качестве разделителя использовать пустую строку, то строка будет разбита на символы
```javascript
var str = "веселый денек был сегодня"
console.log ( str.split ( 'е' ) )
```
> `в консоли будет: [ "в", "с", "лый д", "н", "к был с", "годня" ]`
```javascript
var str = "one | two | three | four | five | six"
console.log ( str.split ( ' | ' ) )
```
> `в консоли будет: [ "one", "two", "three", "four", "five", "six" ]`

### 📖 trim ()

Удаляет пробелы в начале и в конце строки
```javascript
var str = "   54   "
console.log ( str.trim () )
```
> `в консоли будет:  54`

### 📖 charAt ()

Возвращает символ, находящийся в заданной аргументом позиции строки
```javascript
var str = "ХОРОШО"
console.log ( str.charAt ( 4 ) )
```
> `в консоли будет:  Ш`

### 📖 charCodeAt ()

Возвращает код символа, находящегося в заданной аргументом позиции строки
```javascript
var str = "ХОРОШО"
console.log ( str.charCodeAt ( 4 ) )
```
> `в консоли будет:  1064`
```javascript
var str = "1234567"
console.log ( str.charCodeAt ( 4 ) )
```
> `в консоли будет:  53`

### 📖 repeat ()

Возвращает новую сроку, содержащую заданное аргументом число копий исходной строки
```javascript
var str = "ХОРОШО! "
console.log ( str.repeat ( 4 ) )
```
> `в консоли будет:  ХОРОШО! ХОРОШО! ХОРОШО! ХОРОШО!`

### 📖 replace ()

Возвращает новую строку, в которой заданная подстрока заменена на новое значение

Аргументы: заменяемая подстрока, подстрока-заменитель
```javascript
var str = "Ты провалился! "
console.log ( str.replace ( "провалился", "победил" ) )
```
> `в консоли будет:  Ты победил!`

## 📖 Методы объекта `String`

У встроенного нативного объекта `String` есть несколько статических методов, которые позволяют манипулировать содержимым строк

Вызывать эти методы можно только как методы объекта `String`  ( *String.имя_метода* )

### 📖 String.fromCharCode ()

Это метод возвращает строку из символов, коды которых перечислены в аргументах функции ( в круглых скобках )

Например, код           
```javascript
String.fromCharCode ( 123, 105, 125 )
```
> `вернет строку            "{i}"`

***
[🔗 MDN](https://developer.mozilla.org/ru/docs/Web/JavaScript/Reference/Global_Objects/String "Открывайте в новой вкладке")

## [💼 Упражнения](https://docs.google.com/forms/d/e/1FAIpQLScw7PF5eUGBDPDO8ppoqQ3XVJxbM52_hofcZuaWmKHaRjP9Eg/viewform)