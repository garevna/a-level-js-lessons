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

| ![ico25] <br/><sup>[**Lesson&nbsp;9**](../lessons/lesson-09.md)</sup> | <h2>Итерирующие методы массивов</h2>![space-800]<sup><sup>[entries()](Array.prototype.entries.md) • [every()](Array.prototype.every.md) • [filter()](Array.prototype.filter.md) • [find()](Array.prototype.find.md) • [findIndex()](Array.prototype.findIndex.md) • [flatMap()](Array.prototype.flatMap.md) • [forEach()](Array.prototype.forEach.md) • [keys()](Array.prototype.keys.md) • map() • [reduce()](Array.prototype.reduce.md) • [reduceRight()](Array.prototype.reduceRight.md) • [some()](Array.prototype.some.md) • [sort()](Array.prototype.sort.md) • [values()](Array.prototype.values.md)</sup></sup> | ![me] <br/><sup>[**Занятие&nbsp;9**](../lessons/lesson-09.md)</sup> |
|-|-|-|

__________________________________________________________________________

## ![ico25] `map()`

Этот метод вызвращает новый массив, полученный из элементов исходного массива  после применения к каждому из них  функции,
переданной методу в качестве аргумента

Функция, передаваемая в качестве аргумента метода, должна возвращать новое значение
( обязательно должен присутствовать оператор  `return` )

Значение, возвращаемое функцией на каждой итерации, будет помещаться в результирующий массив

![cap-30]

```javascript
var first = [ 8, 4, 9, 7 ]

var res = first.map (
    function ( currentValue ) {
        return  currentValue * 2
    }
)

console.log ( res )
```

В этом примере в массив  **`res`**  попадут все удвоенные значения элементов исходного массива  **`first`**

Так же, как и в методе **`forEach()`**,  в  методе  **`map()`**  передаваемая методу в качестве аргумента  функция может принимать три аргумента

```javascript
function ( currentValue, index, arr ) {
    return  currentValue * index
    console.log ( arr )
}
```

Второй  и третий  аргументы необязательны, и имеют то же содержание, что и в методе **`forEach()`**

* Аргумент  **`arr`**  будет содержать ссылку на исходный массив, к которому применяется метод
* Аргумент  **`index`**  - это счетчик итераций, или индекс текущего элемента итерируемого массива

____________________________________________________________________________

#### [![cap-30] Примеры](Array.prototype-samples.md)
#### [![hw-30] Тесты](https://garevna.github.io/js-quiz/#arrayIterationMethods)
_________________________________________________________________________

![footer]
