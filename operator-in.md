## :mortar_board: Оператор in

Первым операндом оператора **`in`** является имя свойства ( строка )

Второй операнд - объект, проверяемый на наличие такого свойства

Оператор **`in`** возвращает логическое значение

* `true` если такое свойство есть у объекта
* `false` если такого свойства нет

Наличие указанного первым операндом свойства проверяется по всей цепочке прототипов

```javascript
let sample = {
    type: "figure",
    class: "circle",
    color: "red"
}
console.log ( "type" in sample )     // true

console.log ( "valueOf" in sample )  // true
```

В данном примере метод **_`valueOf`_** является унаследованным, однако оператор **`in`** возвращает `true`

***

###### Массивы

```javascript
var arr = [ 1, 2, 3 ]
"valueOf" in arr  // true

"valueOf" in  [ 1, 2, 3 ] // true

0 in  [ 1, 2, 3 ] // true
5 in  [ 1, 2, 3 ] // false
```

***

###### Строки, числа и логические значения

Их нужно "завернуть" в объект так:

```javascript
var sample = String ( "Welcome to the hell" )
"length" in sample   // true

var number = new Number ( 5 )
"valueOf" in number  // true

var bool = new Boolean ( "5" )
"valueOf" in bool  // true
```

или так:

```javascript
var sample = Object ( "Welcome to the hell" )
"length" in sample   // true

var number = Object ( 5 )
"valueOf" in number  // true

var bool = Object ( false )
"valueOf" in bool  // true
```

Если не "завернуть" строку, число или логическое значение в объект, то при попытке использовать оператор **`in`** будет сгенерировано исключение **`TypeError`**

```javascript
var sample = "Welcome to the hell"
"length" in sample   // TypeError

var number = 5
"valueOf" in number  // TypeError

var bool = true
"valueOf" in bool   // TypeError
```