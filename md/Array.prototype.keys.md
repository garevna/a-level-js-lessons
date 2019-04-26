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

| ![ico25] <br/><sup>[**Lesson&nbsp;9**](../lessons/lesson-09.md)</sup> | <h2>Итерирующие методы массивов</h2>![space-800]<sup><sup>[entries()](Array.prototype.entries.md) • [every()](Array.prototype.every.md) • [filter()](Array.prototype.filter.md) • [find()](Array.prototype.find.md) • [findIndex()](Array.prototype.findIndex.md) • [flatMap()](Array.prototype.flatMap.md) • [forEach()](Array.prototype.forEach.md) • keys() • [map()](Array.prototype.map.md) • [reduce()](Array.prototype.reduce.md) • [reduceRight()](Array.prototype.reduceRight.md) • [some()](Array.prototype.some.md) • [sort()](Array.prototype.sort.md) • [values()](Array.prototype.values.md)</sup></sup> | ![me] <br/><sup>[**Занятие&nbsp;9**](../lessons/lesson-09.md)</sup> |

___________________________________________________________________

## ![ico25] keys()

###### [Генератор](generators-and-iterators)

Возвращает объект итератора

![cap-30]

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

____________________________________________________________________________

#### [![hw-30] Тесты](https://garevna.github.io/js-quiz/#arrayIterationMethods)
_________________________________________________________________________

![footer]
