# <img src="https://avatars2.githubusercontent.com/u/19735284?s=40&v=4" width="30" title="Ⓒ Irina Fylyppova ( garevna ) 2019"/> Функции

    ✅ Объявление функции
    ✅ Параметры и аргументы функции
    ✅ Вызов функции

## :mortar_board: function declaration

Объявление функции начинается с ключевого слова  **_`function`_**, после которого ( через пробел ) следует имя функции ( правила те же, что для имен переменных )

:warning: После имени функции обязательно следуют круглые скобки

    В круглых скобках могут быть ( а могут и не быть ) формальные параметры функции
    **Формальные параметры функции** - это имена переменных,
        которые будут использованы внутри функции
    На момент объявления функции они не имеют значений
    Значения формальных параметров будут установлены
    в момент вызова функции

:warning: Тело функции заключается в фигурные скобки

    Внутри фигурных скобок размещается код функции

```javascript
function grow ( param1, param2, ... ) {
      ...код...
}
```
>> ```здесь param1, param2, и т.д. - это формальные параметры функции```

***

## :mortar_board: Аргументы функции

При вызове функции ей будут переданы аргументы - входные данные

    ✅ Аргументы функции - это конкретные значения параметров,
        которые указываются в момент вызова функции
    Если функции будет передано аргументов больше,
    чем указано параметров при объявлении функции,
    то лишние аргументы будут отброшены
    Если функции будет передано аргументов меньше,
    чем указано параметров при объявлении функции,
    то недостающие аргументы получат значение undefined,
    что может привести к ошибке в процессе выполнения кода

#### :coffee: :one:

###### Объявление функции:

```javascript
function say ( x, y, z ) {
    console.log ( x + y + z )
}
```

###### Вызов функции с передачей ей аргументов:

```javascript
var name = "Иван"

say ( "Привет, ",  name,  "!" )
```
###### Результат в консоли
```
Привет,  Иван!
```

```javascript
var  a = 2,
     b = 8,
     q = say ( a, b, "$" )
```
###### Результат в консоли
```
10$
```

***

## :mortar_board: return

Оператор **_`return`_** завершает выполнение функции

Функция может возвращать значения с помощью оператора  **_`return`_**

#### :coffee: :two:

###### Объявление функции:

```javascript
function multiply ( x, y ) {
    return x * y * 10
}
```        
Вызов функции с передачей ей аргументов:

```javascript
var z = multiply ( 5, 2 )
//  переменной  z  будет присвоено значение  
//  5 * 2 * 10 = 100

var  a = 2,    b = 8,    w = multiply ( a, b )
//  переменной  w  будет присвоено значение
//  2 * 8 * 10 = 160
```

***

| [:briefcase: Тесты](https://garevna.github.io/js-quiz/#function) | [:link: w3schools](https://www.w3schools.com/js/js_function_definition.asp) | [:link: MDN](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/function) |
|-|-|-|