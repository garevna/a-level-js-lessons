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

| ![ico25] <br/><sup>[**Lesson&nbsp;2**](../lessons/lesson-02.md)</sup> | <h2>Методы массивов</h2><sup><img width="800"> [pop()](Array-methods-pop.md) • [push()](Array-methods-push.md) • [splice()](Array-methods-splice.md) • [shift()](Array-methods-shift.md) • [unshift()](Array-methods-unshift.md) • [slice()](Array-methods-slice.md) • [concat()](Array-methods-concat.md) • [join()](Array-methods-join.md) • includes()</sup> | ![me] <br/><sup>[**Занятие&nbsp;2**](../lessons/lesson-02.md)</sup> |
|-|-|-|

______________________________________________________________________________

### ![ico25] includes()

###### ES8 (2017 )

Метод **`includes()`** возвращает `true`, когда значение, переданное аргументом, содержится в массиве, или `false` в противном случае

#### ![cap-30] 1

```javascript
var users = [ "Ivan", "Georg", "Stephan" ]

users.includes ( "Stephan" )  // true
users.includes ( "Mary" )     // false
```

#### ![cap-30] 2

Если элементами массива являются объекты, то метод не будет работать

![warn-25] поскольку массивы и объекты передаются по ссылке, а не по значению

```javascript
var users = [
    {
        name: "Ivan",
        email: "ivan78@gmail.com"
    },
    {
        name: "Georg",
        email: "georg.klep@gmail.com"
    },
    {
        name: "Stephan",
        email: "stephan.borg@gmail.com"
    }
]

users.includes ( {
    name: "Stephan",
    email: "stephan.borg@gmail.com"
})

//  false
```

#### ![cap-30] 3

```javascript
var points = [
    [ 100, 20 ],
    [ 200, 150 ],
    [ 120, 50 ]
]

points.includes ( [ 100, 20 ] )   // false
```

______________________________________________________________________________________________

### [![hw-30] Тесты](https://garevna.github.io/js-quiz/#arrayMethods)

_________________________________________________________________________

![footer]
