# :mortar_board: Итерирующие методы массивов

* [`entries()`](md/Array.prototype.entries.md)
* [`every()`](md/Array.prototype.every.md)
* [`filter()`](md/Array.prototype.filter.md)
* [`find()`](md/Array.prototype.find.md)
* [`findIndex()`](md/Array.prototype.findIndex.md)

___________________________________________________________________

# :mortar_board: flatMap()
###### :warning: экспериментальная технология
Получим массив **cookie** с помощью следующего кода:
```javascript
document.cookie = "name=user"
document.cookie = "token=Jd7-js15/84"
document.cookie = "inerest=javascript"

var cookie = document.cookie.split ( "; " )
```
###### массив cookie

```console
▼ (3) ["name=user", "token=Jd7-js15/84", "inerest=javascript"]
  ► 0: "name=user"
  ► 1: "token=Jd7-js15/84"
  ► 2: "inerest=javascript"
    length: 3
  ► __proto__: Array(0)
```

Теперь применим метод **`map`** к массиву **cookie**

###### :coffee: map()

```javascript
console.log (
    cookie.map (
        function ( item ) {
            return item.split ( "=" )
        }
    )
)
```

###### Результат в консоли:

```console
▼ (3) [Array(2), Array(2), Array(2)]
  ► 0: (2) ["name", "user"]
  ► 1: (2) ["token", "Jd7-js15/84"]
  ► 2: (2) ["inerest", "javascript"]
    length: 3
  ► __proto__: Array(0)
```

Мы получили массив, элементы которого являются массивами

Теперь применим метод **`flatMap`** к массиву **cookie**

###### :coffee: flatMap()

```javascript
console.log (
    cookie.flatMap (
        function ( item ) {
            return item.split ( "=" )
        }
    )
)
```

###### Результат в консоли:

```console
▼ (6) ["name", "user", "token", "Jd7-js15/84", "inerest", "javascript"]
    0: "name"
    1: "user"
    2: "token"
    3: "Jd7-js15/84"
    4: "inerest"
    5: "javascript"
    length: 6
  ► __proto__: Array(0)
```
Мы получили "плоский" массив

Итак, используя одну и ту же функцию:

```javascript
function ( item ) {
    return item.split ( "=" )
}
```

мы получили в первом случае массив массивов, а во втором - "плоский" массив

___________________________________________________________________

* [`forEach()`](md/Array.prototype.forEach.md)
* [`keys()`](md/Array.prototype.keys.md)
* [`map()`](md/Array.prototype.map.md)
* [`reduce()`](md/Array.prototype.reduce.md)
* [`reduceRight()`](md/Array.prototype.reduceRight.md)
* [`some()`](md/Array.prototype.some.md)
* [`sort()`](md/Array.prototype.sort.md)
* [`values()`](md/Array.prototype.values.md)
