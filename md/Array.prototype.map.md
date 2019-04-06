# :mortar_board: Итерирующие методы массивов

[`entries()`](Array.prototype.entries)<br/>
[`every()`](Array.prototype.every)<br/>
[`filter()`](Array.prototype.filter)<br/>
[`find()`](Array.prototype.find)<br/>
[`findIndex()`](Array.prototype.findIndex)<br/>
[`flatMap()`](Array.prototype.flatMap)<br/>
[`forEach()`](Array.prototype.forEach)<br/>
[`keys()`](Array.prototype.keys)<br/>
***
## :mortar_board: `map()`
Этот метод вызвращает новый массив, полученный из элементов исходного массива  после применения к каждому из них  функции, переданной методу в качестве аргумента

Функция, передаваемая в качестве аргумента метода, должна возвращать новое значение ( обязательно должен присутствовать оператор  `return` )

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

***
[`reduce()`](Array.prototype.reduce)<br/>
[`reduceRight()`](Array.prototype.reduceRight)<br/>
[`some()`](Array.prototype.some)<br/>
[`sort()`](Array.prototype.sort)<br/>
[`values()`](Array.prototype.values)<br/>
