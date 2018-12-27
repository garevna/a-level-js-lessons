# :mortar_board: Итерирующие методы массивов

[`entries()`](Array.prototype.entries)<br/>
[`every()`](Array.prototype.every)<br/>
[`filter()`](Array.prototype.filter)<br/>
[`find()`](Array.prototype.find)<br/>
[`findIndex()`](Array.prototype.findIndex)<br/>
[`flatMap()`](Array.prototype.flatMap)<br/>
[`forEach()`](Array.prototype.forEach)<br/>
[`keys()`](Array.prototype.keys)<br/>
[`map()`](Array.prototype.map)<br/>
***
## :mortar_board: reduce()

Сводит массив в единственному значению

Функция, которая передается методу в качестве первого ( обязательного ) аргумента, имеет два формальных параметра:
    - первый: имя переменной-аккумулятора, а которой будет результат работы метода
    - второй: текущий элемент массива

Этот метод получает два аргумента:
    обязательный первый аргумент - функция, которая будет вызвана для каждого элемента массива
    опциональный второй аргумент - стартовое значение аккумулятора


Для примера создадим массив банковских карт:
```javascript
var cards = [
    { num: "457892425", cash: 1100 },
    { num: "457812840", cash: 3000 },
    { num: "457855780", cash: 1200 },
    { num: "457811714", cash: 5000 }
]
```
###### :coffee: :one:
Посчитаем сумму средств на всех картах:
```javascript
cards.reduce (
    function ( result, card ) {
        return result + card.cash
    },
    0
)
// 10300
```
###### :coffee: :two:
Создадим новую карту, на которую аккумулируем остатки на счетах все карт:
```javascript
cards.reduce (
    function ( result, card ) {
        return {
            num: result.num,
            cash: result.cash + card.cash
        }
    },
    {
        num: "457855155",
        cash: 0
    }
)
```
###### Результат в консоли:
```console
▼ { num: "457855155", cash: 10300 }
    cash: 10300
    num: "457855155"
  ► __proto__: Object
```
###### :coffee: :three:
Для чистоты результата дополнительно обнулим остатки на счетах других карт:
```javascript
cards.reduce (
    function ( result, card ) {
        var cash = card.cash
        card.cash = 0
        return {
            num: result.num,
            cash: result.cash + cash
        }
    },
    {
        num: "457855155",
        cash: 0
    }
)
```
###### Теперь исходный массив карт будет:
```console
▼ (4) [{…}, {…}, {…}, {…}]
  ► 0: {num: "457892425", cash: 0}
  ► 1: {num: "457812840", cash: 0}
  ► 2: {num: "457855780", cash: 0}
  ► 3: {num: "457811714", cash: 0}
    length: 4
  ► __proto__: Array(0)
```
###### :coffee: :four:
Удалим дублирующиеся элементы массива:
```javascript
var arr = [
    "google",
    "mozilla",
    "ie",
    "mozilla",
    "mozilla",
    "google",
    "mozilla",
    "ie",
    "ie",
    "google"
]

arr.reduce (
    function ( result, item ) {
        result.indexOf ( item ) < 0 ? 
            result.push ( item ) : null
        return result
    },
    []
)
```
###### Результат в консоли:
```console
▼ (3) ["google", "mozilla", "ie"]
    0: "google"
    1: "mozilla"
    2: "ie"
    length: 3
  ► __proto__: Array(0)
```
***
[`reduceRight()`](Array.prototype.reduceRight)<br/>
[`some()`](Array.prototype.some)<br/>
[`sort()`](Array.prototype.sort)<br/>
[`values()`](Array.prototype.values)<br/>
