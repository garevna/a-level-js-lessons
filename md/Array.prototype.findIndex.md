# <img src="https://avatars2.githubusercontent.com/u/19735284?s=40&v=4" width="30" title="Ⓒ Irina Fylyppova ( garevna ) 2019"/> Итерирующие методы массивов

* [`entries()`](Array.prototype.entries)
* [`every()`](Array.prototype.every)
* [`filter()`](Array.prototype.filter)

________________________________________________________________________

## :mortar_board: findIndex()
Подобно методу `find()`, ищет в массиве первый элемент, удовлетворяющий заданному условию

Однако возвращает не сам элемент, а его индекс

Если такого элемента в массиве не обнаружено, возвращает **-1**

```javascript
var cards = [
    { num: "457892425", cash: 1100 },
    { num: "457812840", cash: 3000 },
    { num: "457855780", cash: 1200 },
    { num: "457811714", cash: 5000 }
]

cards.findIndex (
    function ( card ) {
        return card.cash > 1500
    }
)
// Вернет 1
```

___________________________________________________________________

* [`flatMap()`](md/Array.prototype.flatMap.md)
* [`forEach()`](md/Array.prototype.forEach.md)
* [`keys()`](md/Array.prototype.keys.md)
* [`map()`](md/Array.prototype.map.md)
* [`reduce()`](md/Array.prototype.reduce.md)
* [`reduceRight()`](md/Array.prototype.reduceRight.md)
* [`some()`](md/Array.prototype.some.md)
* [`sort()`](md/Array.prototype.sort.md)
* [`values()`](md/Array.prototype.values.md)

_________________________________________________________________________

![](https://github.com/garevna/js-course/raw/master/images/a-level-ico.png?raw=true)
