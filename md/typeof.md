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
[err-20]: https://raw.githubusercontent.com/garevna/a-level-js-lessons/master/ico/no_entry-20.png
[err-25]: https://raw.githubusercontent.com/garevna/a-level-js-lessons/master/ico/no_entry-25.png
[err-30]: https://raw.githubusercontent.com/garevna/a-level-js-lessons/master/ico/no_entry-30.png
[debagger]: https://raw.githubusercontent.com/garevna/a-level-js-lessons/master/ico/debagger-20.png "Resume script execution F8 Ctrl+\"
[reload]: https://raw.githubusercontent.com/garevna/a-level-js-lessons/master/ico/reload.png
[file-20]: https://raw.githubusercontent.com/garevna/a-level-js-lessons/master/ico/pencil-20.png


| <img width="900"/> | ![me40] <br/><sup>[Занятие&nbsp;1](../lessons/lesson-01.md)</sup> |
|-|-|

# Оператор `typeof`

Оператор  `typeof`  возвращает строку

Возможные значения, возвращаемые оператором `typeof`:

* `string`
* `number`
* `boolean`
* `object`
* `undefined`
* `function`
* `symbol`

![cap-20]  Наберите в консоли:

```javascript
var x = 10
typeof x      // "number"
```

А теперь выполните код в консоли:

```javascript
x = "google"
typeof x     // "string"
```

Теперь выполните в консоли следующий код:

```javascript
var x = false
typeof typeof x  // "boolean"
```

_____________________________________________________________

## ![ico25] string

Строки состоят из символов и заворачиваются в двойные ( *"мама"* ) или одинарные ( *'мама'* ) кавычки

Также можно завернуть строку в обратные кавычки **` ` `**

```javascript
var sample = `This is a sample`
```

Если внутри строки встречаются двойные кавычки, то сама строка должна быть завернута в одинарные, и наоброт

![cap-20]

```javascript
var first = 'Капитаном корабля "Наутилус" был Немо'
var second = "Капитаном корабля 'Наутилус' был Немо"
var third = `Капитаном корабля "Наутилус" был Немо`
```

_____________________________________________________________

## ![ico25] number

Число может быть:

* целым ( 5 )
* с плавающей точкой ( 5.80 )
* [**`Infinity`**](NaN-null-Infinity#infinity) ( бесконечность )
* [**`NaN`**](NaN-null-Infinity#NaN) ( Not a Number - не число )

![warn-25] Значение [**`Infinity`**](NaN-null-Infinity#infinity)  может получиться при делении на ноль:

```javascript
var x = 1, y = 0
var z = x / y
```

<sup>Значением переменной  z  будет  *Infinity*</sup>

![warn-25] Значение [**`NaN`**](NaN-null-Infinity#NaN) может получиться при попытке выполнения арифметических операций с операндами, которые не являются числами, например:   ` 5 * "total" `, а так же при попытке разделить ноль на ноль: ` 0/0 `

![warn-25] Значение  [**`NaN`**](NaN-null-Infinity#NaN)  не равно никакому другому значению, включая само значение [**`NaN`**](NaN-null-Infinity#NaN)

![warn-25] Никакие арифметические операции в JS никогда не будут завершены с ошибкой, поскольку в случае ошибки операция вернет [**`NaN`**](NaN-null-Infinity#NaN)

________________________________________________________

## ![ico25] boolean

Логический тип

Данные логического типа могут принимать только одно из двух значений:

* `true` ( истина )
* `false` ( ложь )

_____________________________________________________________

## ![ico25] object

К данным типа `object` относятся:

* [**`объекты`**](data-structures.md#object)
* [**`массивы`**](data-structures.md#array)
* [**`null`**](NaN-null-Infinity.md#null)

________________________________________________________

## ![ico25] undefined

Специальный тип данных, означающий, что значение переменной не определено

![cap-20]

```javascript
var  sample
console.log ( sample )
```

В консоль будет выведено `undefined`, поскольку мы не присвоили переменной  **sample** никакого значения

________________________________________________________

## ![ico25] function

С помощью ключевого слова `function` создаются объекты, содержащие фрагмент кода

Объекты типа `function` являются контейнерами для скриптов

Если вывести в консоль такой объект

#### ![cap-20] 1

```javascript
function sample ( arg ) {
     console.log ( arg )
}
console.log ( sample )
```

то мы увидим следующее:

```console
ƒ sample ( arg ) {
    console.log ( arg )
}
```

Такие объекты имеют тип данных `function`

#### ![cap-20] 2

```javascript
function sample ( arg ) {
     console.log ( arg )
}
console.log ( typeof sample ) // function
```

Особенность этого типа данных заключается в том, что в любой момент можно инициировать выполнение кода, находящегося в объекте, по его имени ( для этого необходимо после имени функции использовать круглые скобки )

#### ![cap-20] 3

```javascript
function sample () {
     console.log ( "Привет, студент!" )
}
sample ()   // "Привет, студент!"
```

<sup>Мы будем подробнее изучать объекты типа function далее</sup>

_____________________________________________________________

### [![hw-30] Упражнения](https://docs.google.com/forms/d/e/1FAIpQLSdegQYfzld6s0CYJekJ2uvu84fUU2-BXiu7g9X2wzcutF1CWQ/viewform)

_____________________________________________________________

![footer]
