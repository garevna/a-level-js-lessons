## 📖 Оператор `typeof`

Возможные значения, возвращаемые оператором `typeof`:

[:arrow_right_hook: "string"](#-string)<br>
[:arrow_right_hook: "number"](#-number)<br>
[:arrow_right_hook: "boolean"](#-boolean)<br>
[:arrow_right_hook: "object"](#-object)<br>
[:arrow_right_hook: "undefined"](#-undefined)<br>
[:arrow_right_hook: "function"](#-function)<br>

Оператор  `typeof`  возвращает строку

### :coffee:

✍️ Наберите в консоли:

```javascript
var x = 10
typeof x      // "number"
```
✍️ А теперь выполните код в консоли:

```javascript
x = "google"
typeof x     // "string"
```
✍️ Теперь выполните в консоли следующий код:

```javascript
var x = false
typeof typeof x  // "boolean"
```

## 📖 string

Строки состоят из символов и заворачиваются в двойные ( *"мама"* ) или одинарные ( *'мама'* ) кавычки

Также можно завернуть строку в обратные кавычки ``` ` ```
```javascript
var sample = `This is a sample`
```
Если внутри строки встречаются двойные кавычки, то сама строка должна быть завернута в одинарные, и наоброт

:coffee:
```javascript
var first = 'Капитаном корабля "Наутилус" был Немо'
var second = "Капитаном корабля 'Наутилус' был Немо"
var third = `Капитаном корабля "Наутилус" был Немо`
```

## 📖 number

<table>
  <tr>
    <td width="8%">
       <a href = "#-string">
          :arrow_heading_up:
       </a>
    </td>
    <td width="800">
       &nbsp;
    </td>
    <td width="8%">
       <a href = "#-boolean">
          :arrow_heading_down:
       </a>
    </td>
  </tr>
</table>

Число может быть:
```javascript
     ✅ целым ( 5 )
     ✅ с плавающей точкой ( 5.80 )
     ✅ Infinity ( бесконечность ) 
     ✅ NaN ( Not a Number - не число )
```
✋ Значение [Infinity :arrow_right_hook:](https://github.com/garevna/js-course/wiki/NaN-null-Infinity#-%D0%97%D0%BD%D0%B0%D1%87%D0%B5%D0%BD%D0%B8%D0%B5-infinity)  может получиться при делении на ноль:
```javascript
var x = 1, y = 0
var z = x / y
```
Значением переменной  z  будет  *Infinity*

✋ Значение [:arrow_right_hook: NaN](https://github.com/garevna/js-course/wiki/NaN-null-Infinity#-%D0%97%D0%BD%D0%B0%D1%87%D0%B5%D0%BD%D0%B8%D0%B5-nan) может получиться при попытке выполнения арифметических операций с операндами, которые не являются числами, например:   ` 5 * "total" `, а так же при попытке разделить ноль на ноль: ` 0/0 `

    ⚠️ Значение  NaN  не равно 
        никакому другому значению, 
        включая само значение NaN
    ⚠️ Никакие арифметические операции в JS 
        никогда не будут завершены с ошибкой, 
        поскольку в случае ошибки 
        операция вернет NaN

## 📖 boolean
<table>
  <tr>
    <td width="8%">
       <a href = "#-number">
          :arrow_heading_up:
       </a>
    </td>
    <td width="800">
       &nbsp;
    </td>
    <td width="8%">
       <a href = "#-object">
          :arrow_heading_down:
       </a>
    </td>
  </tr>
</table>
Логический тип

Данные логического типа могут принимать только одно из двух значений: 

    ✅ true ( истина ) 
    ✅ false ( ложь )

## 📖 object

К данным типа object относятся:

[:arrow_right_hook: объекты](https://github.com/garevna/js-course/wiki/data-structures#-%D0%9E%D0%B1%D1%8A%D0%B5%D0%BA%D1%82%D1%8B)

[:arrow_right_hook: массивы](https://github.com/garevna/js-course/wiki/data-structures#-%D0%9C%D0%B0%D1%81%D1%81%D0%B8%D0%B2%D1%8B)

[:arrow_right_hook: null](https://github.com/garevna/js-course/wiki/NaN-null-Infinity#-%D0%97%D0%BD%D0%B0%D1%87%D0%B5%D0%BD%D0%B8%D0%B5-null)


## 📖 undefined

<table>
  <tr>
    <td width="8%">
       <a href = "#-boolean">
          :arrow_heading_up:
       </a>
    </td>
    <td width="800">
       &nbsp;
    </td>
    <td width="8%">
       <a href = "#-function">
          :arrow_heading_down:
       </a>
    </td>
  </tr>
</table>

Специальный тип данных, означающий, что значение переменной не определено

:coffee:
```javascript
var  sample
console.log ( sample )
```
```javascript
    // В консоль будет выведено undefined, 
    // поскольку мы не присвоили переменной  sample  
    // никакого значения
```

## 📖 function

<table>
  <tr>
    <td width="8%">
       <a href = "#-object">
          :arrow_heading_up:
       </a>
    </td>
    <td width="800">
       &nbsp;
    </td>
    <td width="8%">
       <a href = "#-function">
          :arrow_heading_down:
       </a>
    </td>
  </tr>
</table>

С помощью ключевого слова `function` создаются объекты, содержащие фрагмент кода

Объекты типа `function` являются контейнерами для скриптов

Если вывести в консоль такой объект

:coffee: 1
```javascript
function sample ( arg ) {
     console.log ( arg )
}
console.log ( sample )
```
то мы увидим следующее:

<pre><em>ƒ sample ( arg ) {
     console.log ( arg )
}
</em></pre>

Такие объекты имеют тип данных `function`

:coffee: 2
```javascript
function sample ( arg ) {
     console.log ( arg )
}
console.log ( typeof sample ) // function
```
Особенность этого типа данных заключается в том, что в любой момент можно инициировать выполнение кода, находящегося в объекте, по его имени ( для этого необходимо после имени функции использовать круглые скобки )

:coffee: 3
```javascript
function sample () {
     console.log ( "Привет, студент!" )
}
sample ()   // "Привет, студент!"
```
>>Мы будем подробнее изучать объекты типа `function` далее
***

## [:briefcase: Упражнения](https://docs.google.com/forms/d/e/1FAIpQLSdegQYfzld6s0CYJekJ2uvu84fUU2-BXiu7g9X2wzcutF1CWQ/viewform)

***


