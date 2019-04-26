[footer]: https://github.com/garevna/js-course/raw/master/images/a-level-ico.png?raw=true
[me]: https://raw.githubusercontent.com/garevna/a-level-js-lessons/master/ico/myPhoto-40.png "Ⓒ Irina Fylyppova ( garevna ) 2019"
[ico20]: https://raw.githubusercontent.com/garevna/a-level-js-lessons/master/ico/a-level-20.png
[ico25]: https://raw.githubusercontent.com/garevna/a-level-js-lessons/master/ico/a-level-25.png
[hw-30]: https://raw.githubusercontent.com/garevna/a-level-js-lessons/master/ico/briefcase-30.png
[cap-30]: https://raw.githubusercontent.com/garevna/a-level-js-lessons/master/ico/coffee-30.png
[warn-25]: https://raw.githubusercontent.com/garevna/a-level-js-lessons/master/ico/warning-25.png
[link-25]: https://raw.githubusercontent.com/garevna/a-level-js-lessons/master/ico/link-25.png
[err-20]: https://raw.githubusercontent.com/garevna/a-level-js-lessons/master/ico/no_entry-20.png
[err-25]: https://raw.githubusercontent.com/garevna/a-level-js-lessons/master/ico/no_entry-25.png
[err-30]: https://raw.githubusercontent.com/garevna/a-level-js-lessons/master/ico/no_entry-30.png
[space-800]: https://raw.githubusercontent.com/garevna/a-level-js-lessons/master/ico/space-800.png

| ![ico25] <br/><sup>[**Lesson&nbsp;9**](../lessons/lesson-09.md)</sup> | <h2>Итерирующие методы массивов</h2>![space-800]<sup><sup>[entries()](Array.prototype.entries.md) • [every()](Array.prototype.every.md) • [filter()](Array.prototype.filter.md) • find() • [findIndex()](Array.prototype.findIndex.md) • [flatMap()](Array.prototype.flatMap.md) • [forEach()](Array.prototype.forEach.md) • [keys()](Array.prototype.keys.md) • [map()](Array.prototype.map.md) • [reduce()](Array.prototype.reduce.md) • [reduceRight()](Array.prototype.reduceRight.md) • [some()](Array.prototype.some.md) • [sort()](Array.prototype.sort.md) • [values()](Array.prototype.values.md)</sup></sup> | ![me] <br/><sup>[**Занятие&nbsp;9**](../lessons/lesson-09.md)</sup> |
|-|-|-|

__________________________________________________________________

## ![ico25] find()

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

____________________________________________________________________________

#### [![cap-30] Примеры](Array.prototype-samples.md)
#### [![hw-30] Тесты](https://garevna.github.io/js-quiz/#arrayIterationMethods)
_________________________________________________________________________

![footer]
