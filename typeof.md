<a name="top"></a>
# :mortar_board: Оператор `typeof`

| [:arrow_double_down:](#bottom) | <img width="800"/> | [:arrow_heading_down:](#2) |
|-|-|-|

Возможные значения, возвращаемые оператором `typeof`:

* [`string`](#string)
* [`number`](#number)
* [`boolean`](#boolean)
* [`object`](#object)
* [`undefined`](#undefined)
* [`function`](#function)
* `symbol`

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

<a name="string"></a>
## 📖 string

| [`number`](#number) | [`boolean`](#boolean) | [`object`](#object) | [`undefined`](#undefined) | [`function`](#function) |
|-|-|-|-|-|

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

***

<a name="number"></a>
## 📖 number

| [`string`](#string) | [`boolean`](#boolean) | [`object`](#object) | [`undefined`](#undefined) | [`function`](#function) |
|-|-|-|-|-|

Число может быть:

```javascript
     ✅ целым ( 5 )
     ✅ с плавающей точкой ( 5.80 )
     ✅ Infinity ( бесконечность ) 
     ✅ NaN ( Not a Number - не число )
```

✋ Значение [`Infinity`](NaN-null-Infinity#-%D0%97%D0%BD%D0%B0%D1%87%D0%B5%D0%BD%D0%B8%D0%B5-infinity "Переход на другую страницу")  может получиться при делении на ноль:
```javascript
var x = 1, y = 0
var z = x / y
```
Значением переменной  z  будет  *Infinity*

✋ Значение [`NaN`](NaN-null-Infinity#-%D0%97%D0%BD%D0%B0%D1%87%D0%B5%D0%BD%D0%B8%D0%B5-nan "Переход на другую страницу") может получиться при попытке выполнения арифметических операций с операндами, которые не являются числами, например:   ` 5 * "total" `, а так же при попытке разделить ноль на ноль: ` 0/0 `

    ⚠️ Значение  NaN  не равно 
        никакому другому значению, 
        включая само значение NaN
    ⚠️ Никакие арифметические операции в JS 
        никогда не будут завершены с ошибкой, 
        поскольку в случае ошибки 
        операция вернет NaN


<a name="boolean"></a>
## 📖 boolean

| [`string`](#string) | [`number`](#number) | [`object`](#object) | [`undefined`](#undefined) | [`function`](#function) |
|-|-|-|-|-|

Логический тип

Данные логического типа могут принимать только одно из двух значений: 

    ✅ true ( истина ) 
    ✅ false ( ложь )

***

<a name="object"></a>
## 📖 object

| [`string`](#string) | [`number`](#number) | [`boolean`](#boolean) | [`undefined`](#undefined) | [`function`](#function) |
|-|-|-|-|-|

К данным типа object относятся:

* [**`объекты`**](data-structures#-%D0%9E%D0%B1%D1%8A%D0%B5%D0%BA%D1%82%D1%8B "Переход на другую страницу")
* [**`массивы`**](data-structures#-%D0%9C%D0%B0%D1%81%D1%81%D0%B8%D0%B2%D1%8B "Переход на другую страницу")
* [**`null`**](NaN-null-Infinity#-%D0%97%D0%BD%D0%B0%D1%87%D0%B5%D0%BD%D0%B8%D0%B5-null "Переход на другую страницу")

***

<a name="undefined"></a>
## 📖 undefined

| [`string`](#string) | [`number`](#number) | [`boolean`](#boolean) | [`object`](#object) | [`function`](#function) |
|-|-|-|-|-|

Специальный тип данных, означающий, что значение переменной не определено

:coffee:
```javascript
var  sample
console.log ( sample )
```

В консоль будет выведено `undefined`, поскольку мы не присвоили переменной  **sample** никакого значения

***

<a name="function"></a>
## 📖 function

| [`string`](#string) | [`number`](#number) | [`boolean`](#boolean) | [`object`](#object) | [`undefined`](#undefined) |
|-|-|-|-|-|

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
>`Мы будем подробнее изучать объекты типа function далее`

***

| [`string`](#string) | [`number`](#number) | [`boolean`](#boolean) | [`object`](#object) | [`undefined`](#undefined) | [`function`](#function) |
|-|-|-|-|-|-|

***

### [:briefcase: Упражнения](https://docs.google.com/forms/d/e/1FAIpQLSdegQYfzld6s0CYJekJ2uvu84fUU2-BXiu7g9X2wzcutF1CWQ/viewform)