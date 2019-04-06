# :mortar_board: Итерирующие методы массивов

* [`entries()`](md/Array.prototype.entries.md)
* [`every()`](md/Array.prototype.every.md)
* [`filter()`](md/Array.prototype.filter.md)
* [`find()`](md/Array.prototype.find.md)
* [`findIndex()`](md/Array.prototype.findIndex.md)
* [`flatMap()`](md/Array.prototype.flatMap.md)
* [`forEach()`](md/Array.prototype.forEach.md)

___________________________________________________________________

## :mortar_board: keys()

###### [Генератор](generators-and-iterators)

Возвращает объект итератора

:coffee:

```javascript
document.cookie = "name=user"
document.cookie = "token=Jd7-js15/84"
document.cookie = "inerest=javascript"

var cookie = document.cookie.split ( "; " )
    .map (
        function ( item ) {
            return item.split ( "=" )
        }
    )

var iterator = cookie.keys()

var done = false

while ( !done ) {
    var next = iterator.next()
    done = next.done
    done ? null :
        console.log ( cookie[ next.value ] )
}
```

___________________________________________________________________

* [`map()`](md/Array.prototype.map.md)
* [`reduce()`](md/Array.prototype.reduce.md)
* [`reduceRight()`](md/Array.prototype.reduceRight.md)
* [`some()`](md/Array.prototype.some.md)
* [`sort()`](md/Array.prototype.sort.md)
* [`values()`](md/Array.prototype.values.md)
