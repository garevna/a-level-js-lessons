# :mortar_board: Итерирующие методы массивов

[`entries()`](Array.prototype.entries)<br/>
[`every()`](Array.prototype.every)<br/>
[`filter()`](Array.prototype.filter)<br/>
***
## :mortar_board: find()
Метод ищет в массиве и возвращает первый найденный элемент, удовлетворяющий заданному условию

Если такого элемента в массиве нет, возвращает `undefined`
```javascript
var cards = [
    { num: "457892425", cash: 1100 },
    { num: "457812840", cash: 3000 },
    { num: "457855780", cash: 1200 },
    { num: "457811714", cash: 5000 }
]

cards.find (
    function ( card ) {
        return card.cash > 4000
    }
)
```
###### Этот код вернет объект
```javascript
▼ { num: "457811714", cash: 5000 }
    cash: 5000
    num: "457811714"
  ► __proto__: Object
```
***
[`findIndex()`](Array.prototype.findIndex)<br/>
[`flatMap()`](Array.prototype.flatMap)<br/>
[`forEach()`](Array.prototype.forEach)<br/>
[`keys()`](Array.prototype.keys)<br/>
[`map()`](Array.prototype.map)<br/>
[`reduce()`](Array.prototype.reduce)<br/>
[`reduceRight()`](Array.prototype.reduceRight)<br/>
[`some()`](Array.prototype.some)<br/>
[`sort()`](Array.prototype.sort)<br/>
[`values()`](Array.prototype.values)<br/>
