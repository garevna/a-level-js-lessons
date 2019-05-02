[footer]: https://github.com/garevna/js-course/raw/master/images/a-level-ico.png?raw=true
[me]: https://raw.githubusercontent.com/garevna/a-level-js-lessons/master/ico/myPhoto-40.png "Ⓒ Irina Fylyppova ( garevna ) 2019"

[ico20]: https://raw.githubusercontent.com/garevna/a-level-js-lessons/master/ico/a-level-20.png
[ico25]: https://raw.githubusercontent.com/garevna/a-level-js-lessons/master/ico/a-level-25.png
[hw-30]: https://raw.githubusercontent.com/garevna/a-level-js-lessons/master/ico/briefcase-30.png
[cap-20]: https://raw.githubusercontent.com/garevna/a-level-js-lessons/master/ico/coffee-20.png
[cap-25]: https://raw.githubusercontent.com/garevna/a-level-js-lessons/master/ico/coffee-25.png
[cap-30]: https://raw.githubusercontent.com/garevna/a-level-js-lessons/master/ico/coffee-30.png
[error]: https://raw.githubusercontent.com/garevna/a-level-js-lessons/master/ico/no_entry-20.png
[warn]: https://raw.githubusercontent.com/garevna/a-level-js-lessons/master/ico/warning-25.png
[link]: https://raw.githubusercontent.com/garevna/a-level-js-lessons/master/ico/link-20.png
[space-800]: https://raw.githubusercontent.com/garevna/a-level-js-lessons/master/ico/space-800.png

[lesson]: ../lessons/lesson-01.md

| ![ico25] <br/><sup>[**Lesson&nbsp;1**][lesson]</sup> | <h2> Оператор `typeof`</h2>![space-800]<sup>[• string](#var) [• number](#number) [• boolean](#boolean) [• object](#object) [• undefined](#undefined) [• function](#function)</sup> | ![me] <br/><sup>[**Занятие&nbsp;1**][lesson]</sup> |
|:-:|:-:|:-:|

_________________________________________________________________________

Оператор  `typeof`  возвращает строку

Возможные значения, возвращаемые оператором `typeof`:

* `string`
* `number`
* `boolean`
* `object`
* `undefined`
* `function`
* `symbol`

![cap-25]  Наберите в консоли:

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

<a name="string"></a>
## ![ico20] string

Строки состоят из символов и заворачиваются в двойные ( *"мама"* ) или одинарные ( *'мама'* ) кавычки

Также можно завернуть строку в обратные кавычки **` ` `**

```javascript
var sample = `This is a sample`
```

Если внутри строки встречаются двойные кавычки, то сама строка должна быть завернута в одинарные, и наоброт

![cap-25]

```javascript
var first = 'Капитаном корабля "Наутилус" был Немо'
var second = "Капитаном корабля 'Наутилус' был Немо"
var third = `Капитаном корабля "Наутилус" был Немо`
```

_____________________________________________________________

<a name="number"></a>
## ![ico20] number

Число может быть:

* целым ( 5 )
* с плавающей точкой ( 5.80 )
* [**`Infinity`**](NaN-null-Infinity.md#infinity) ( бесконечность )
* [**`NaN`**](NaN-null-Infinity.md#NaN) ( Not a Number - не число )

![warn] Значение [**`Infinity`**](NaN-null-Infinity.md#infinity)  может получиться при делении на ноль:

```javascript
var x = 1, y = 0
var z = x / y
```

<sup>Значением переменной  z  будет  *Infinity*</sup>

![warn] Значение [**`NaN`**](NaN-null-Infinity.md#NaN) может получиться при попытке выполнения арифметических операций с операндами, которые не являются числами, например:   ` 5 * "total" `, а так же при попытке разделить ноль на ноль: ` 0/0 `

![warn] Значение  [**`NaN`**](NaN-null-Infinity.md#NaN)  не равно никакому другому значению, включая само значение [**`NaN`**](NaN-null-Infinity.md#NaN)

![warn] Никакие арифметические операции в JS никогда не будут завершены с ошибкой, поскольку в случае ошибки операция вернет [**`NaN`**](NaN-null-Infinity.md#NaN)

________________________________________________________

<a name="boolean"></a>
## ![ico20] boolean

Логический тип

Данные логического типа могут принимать только одно из двух значений:

* `true` ( истина )
* `false` ( ложь )

_____________________________________________________________

<a name="object"></a>
## ![ico20] object

К данным типа `object` относятся:

* [**`объекты`**](data-structures.md#object)
* [**`массивы`**](data-structures.md#array)
* [**`null`**](NaN-null-Infinity.md#null)

________________________________________________________

<a name="undefined"></a>
## ![ico20] undefined

Специальный тип данных, означающий, что значение переменной не определено

![cap-25]

```javascript
var  sample
console.log ( sample )
```

В консоль будет выведено `undefined`, поскольку мы не присвоили переменной  **sample** никакого значения

________________________________________________________

<a name="function"></a>
## ![ico20] function

С помощью ключевого слова `function` создаются объекты, содержащие фрагмент кода

Объекты типа `function` являются контейнерами для скриптов

Если вывести в консоль такой объект

#### ![cap-25] 1

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

#### ![cap-25] 2

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

<sup>Мы будем подробнее изучать объекты типа `function` далее</sup>

_____________________________________________________________

#### [![hw-30] Упражнения](https://docs.google.com/forms/d/e/1FAIpQLSdegQYfzld6s0CYJekJ2uvu84fUU2-BXiu7g9X2wzcutF1CWQ/viewform)

_____________________________________________________________

![footer]
