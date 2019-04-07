[footer]: https://github.com/garevna/js-course/raw/master/images/a-level-ico.png?raw=true
[ico20]: https://raw.githubusercontent.com/garevna/a-level-js-lessons/master/ico/a-level-20.png
[ico25]: https://raw.githubusercontent.com/garevna/a-level-js-lessons/master/ico/a-level-25.png
[hw-30]: https://raw.githubusercontent.com/garevna/a-level-js-lessons/master/ico/briefcase-30.png
[cap-30]: https://raw.githubusercontent.com/garevna/a-level-js-lessons/master/ico/coffee-30.png
[warn-25]: https://raw.githubusercontent.com/garevna/a-level-js-lessons/master/ico/warning-25.png
[link-25]: https://raw.githubusercontent.com/garevna/a-level-js-lessons/master/ico/link-25.png
[err-20]: https://raw.githubusercontent.com/garevna/a-level-js-lessons/master/ico/no_entry-20.png
[err-25]: https://raw.githubusercontent.com/garevna/a-level-js-lessons/master/ico/no_entry-25.png
[err-30]: https://raw.githubusercontent.com/garevna/a-level-js-lessons/master/ico/no_entry-30.png

# <img src="https://avatars2.githubusercontent.com/u/19735284?s=40&v=4" width="30" title="Ⓒ Irina Fylyppova ( garevna ) 2019"/> Итерирующие методы массивов

* [`entries()`](md/Array.prototype.entries.md)
* [`every()`](md/Array.prototype.every.md)
* [`filter()`](md/Array.prototype.filter.md)
* [`find()`](md/Array.prototype.find.md)
* [`findIndex()`](md/Array.prototype.findIndex.md)
* [`flatMap()`](md/Array.prototype.flatMap.md)
* [`forEach()`](md/Array.prototype.forEach.md)
* [`keys()`](md/Array.prototype.keys.md)

__________________________________________________________________________

## :mortar_board: `map()`

Этот метод вызвращает новый массив, полученный из элементов исходного массива  после применения к каждому из них  функции,
переданной методу в качестве аргумента

Функция, передаваемая в качестве аргумента метода, должна возвращать новое значение
( обязательно должен присутствовать оператор  `return` )

Значение, возвращаемое функцией на каждой итерации, будет помещаться в результирующий массив

```javascript
var first = [ 8, 4, 9, 7 ]

var res = first.map (
    function ( currentValue ) {
        return  currentValue * 2
    }
)

console.log ( res )
```

В этом примере в массив  **res**  попадут все удвоенные значения элементов исходного массива  **first**

Так же, как и в методе **`forEach()`**,  в  методе  **`map()`**  передаваемая методу в качестве аргумента  функция может принимать три аргумента

```javascript
function ( currentValue, index, arr ) {
    return  currentValue * index
    console.log ( arr )
}
```

Второй  и третий  аргументы необязательны, и имеют то же содержание, что и в методе **`forEach()`**

* Аргумент  **arr**  будет содержать ссылку на исходный массив, к которому применяется метод
* Аргумент  **index**  - это счетчик итераций, или индекс текущего элемента итерируемого массива


___________________________________________________________________

* [`reduce()`](md/Array.prototype.reduce.md)
* [`reduceRight()`](md/Array.prototype.reduceRight.md)
* [`some()`](md/Array.prototype.some.md)
* [`sort()`](md/Array.prototype.sort.md)
* [`values()`](md/Array.prototype.values.md)

_________________________________________________________________________

![](https://github.com/garevna/js-course/raw/master/images/a-level-ico.png?raw=true)
