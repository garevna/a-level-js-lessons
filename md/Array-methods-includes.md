## <img src="https://avatars2.githubusercontent.com/u/19735284?s=40&v=4" width="30" title="Ⓒ Irina Fylyppova ( garevna ) 2019"/> Методы массивов

* [`pop()`](Array-methods-pop.md)
* [`push()`](Array-methods-push.md)
* [`splice()`](Array-methods-splice.md)
* [`shift()`](Array-methods-shift.md)
* [`unshift()`](Array-methods-unshift.md)
* [`slice()`](Array-methods-slice.md)
* [`concat()`](Array-methods-concat.md)
* [`join()`](Array-methods-join.md)

______________________________________________________________________________

### :memo: includes()

###### ES8 (2017 )

Метод **`includes()`** возвращает `true`, когда значение, переданное аргументом, содержится в массиве, или `false` в противном случае

:coffee: ❶

```javascript
var users = [ "Ivan", "Georg", "Stephan" ]

users.includes ( "Stephan" )  // true
users.includes ( "Mary" )     // false
```

:coffee: ➋

Если элементами массива являются объекты, то метод не будет работать

:warning: поскольку массивы и объекты передаются по ссылке, а не по значению

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

:coffee: ➌

```javascript
var points = [
    [ 100, 20 ],
    [ 200, 150 ],
    [ 120, 50 ]
]

points.includes ( [ 100, 20 ] )   // false
```

______________________________________________________________________________________________

### [:briefcase: Тесты](https://garevna.github.io/js-quiz/#arrayMethods)
