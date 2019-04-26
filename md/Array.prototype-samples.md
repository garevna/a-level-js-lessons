[footer]: https://github.com/garevna/js-course/raw/master/images/a-level-ico.png?raw=true
[me]: https://raw.githubusercontent.com/garevna/a-level-js-lessons/master/ico/myPhoto-40.png "Ⓒ Irina Fylyppova ( garevna ) 2019"
[ico20]: https://raw.githubusercontent.com/garevna/a-level-js-lessons/master/ico/a-level-20.png
[ico25]: https://raw.githubusercontent.com/garevna/a-level-js-lessons/master/ico/a-level-25.png
[hw-30]: https://raw.githubusercontent.com/garevna/a-level-js-lessons/master/ico/briefcase-30.png
[cap-30]: https://raw.githubusercontent.com/garevna/a-level-js-lessons/master/ico/coffee-30.png
[warn-25]: https://raw.githubusercontent.com/garevna/a-level-js-lessons/master/ico/warning-25.png
[link-20]: https://raw.githubusercontent.com/garevna/a-level-js-lessons/master/ico/link-20.png
[err-20]: https://raw.githubusercontent.com/garevna/a-level-js-lessons/master/ico/no_entry-20.png
[err-25]: https://raw.githubusercontent.com/garevna/a-level-js-lessons/master/ico/no_entry-25.png
[err-30]: https://raw.githubusercontent.com/garevna/a-level-js-lessons/master/ico/no_entry-30.png
[yt-30]: https://raw.githubusercontent.com/garevna/a-level-js-lessons/master/ico/youtube-30.png
[space-800]: https://raw.githubusercontent.com/garevna/a-level-js-lessons/master/ico/space-800.png


| ![ico25] <br/><sup>[**Lesson&nbsp;9**](../lessons/lesson-09.md)</sup> | <h2>Итерирующие методы массивов</h2>![space-800]<sup><sup>[entries()](Array.prototype.entries.md) • [every()](Array.prototype.every.md) • [filter()](Array.prototype.filter.md) • [find()](Array.prototype.find.md) • [findIndex()](Array.prototype.findIndex.md) • [flatMap()](Array.prototype.flatMap.md) • [forEach()](Array.prototype.forEach.md) • [keys()](Array.prototype.keys.md) • [map()](Array.prototype.map.md) • [reduce()](Array.prototype.reduce.md) • [reduceRight()](Array.prototype.reduceRight.md) • [some()](Array.prototype.some.md) • [sort()](Array.prototype.sort.md) • [values()](Array.prototype.values.md)</sup></sup> | ![me] <br/><sup>[**Занятие&nbsp;9**](../lessons/lesson-09.md)</sup> |


#### ![cap-30] 1

[![link-20] Перейдите по ссылке](https://developer.mozilla.org/en-US/docs/Web/API/Window/location?name=garevna,date=10.07.2018)

В консоли новой вкладки выполните код:

```javascript
location.search.slice(1).split(',')
        .map ( x => Object.assign ( {},
                        { [ x.split( '=' )[0] ] : x.split( '=' )[1] }
                    )
        )
```

_____________________________________________________________________________

#### ![cap-30] 2

[![link-20] Перейдите по ссылке](https://developer.mozilla.org/en-US/docs/Web/API/Window/location?name=garevna,date=10.07.2018)

Теперь в консоли новой вкладки объявите функцию:

```javascript
function getSearchObject () {
        var obj = {}
        location.search.slice(1).split( ',' )
                .map ( x => x.split( '=' ) )
                .map ( function ( item ) {
                        this[ item [0] ] = item [1]
        }, obj )
        return obj
}
```
Вызовите функцию  getSearchObject ()

________________________________________________________________________________

| [![cap-30] **3**](https://garevna.github.io/js-samples/?name=garevna,date=10.07.2018#11 "Пример в песочнице") |
|-|

_____________________________________________________________________________

#### ![cap-30] 4

В консоли [**_страницы_**](https://medium.com/@js_tut/the-complete-guide-to-es10-features-f09a8c7be1bd) выполните код:

```javascript
let changeClass = ( classname, styleString ) => ( Array.from ( document.styleSheets )
    .filter ( sheet => !sheet.href )
        .map (
            sheet => Array.from ( sheet.cssRules )
                    .filter ( rule => rule.selectorText === `.{classname}` )
        )
           .filter ( item => item.length > 0 )
               .map ( item => item[0].cssText.split ("}")
                           .join ( `${styleString}}` )
               )
).length > 0 ? console.log ( "found" ) :
    document.head.appendChild (
        document.createElement ( "style" )
    ).textContent = `.${classname} {${styleString}}`

changeClass ( "graf", "background-color: red!important;" )
```

[![yt-30]](https://youtu.be/vL6n7hGvwSs)

____________________________________________________________________________

#### [![hw-30] Тесты](https://garevna.github.io/js-quiz/#arrayIterationMethods)

___________________________________________________________________

![footer]
