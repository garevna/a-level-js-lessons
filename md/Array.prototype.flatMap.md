[footer]: https://github.com/garevna/js-course/raw/master/images/a-level-ico.png?raw=true
[me30]: https://raw.githubusercontent.com/garevna/a-level-js-lessons/master/ico/myPhoto-30.png "Ⓒ Irina Fylyppova ( garevna ) 2019"
[ico20]: https://raw.githubusercontent.com/garevna/a-level-js-lessons/master/ico/a-level-20.png
[ico25]: https://raw.githubusercontent.com/garevna/a-level-js-lessons/master/ico/a-level-25.png
[hw-30]: https://raw.githubusercontent.com/garevna/a-level-js-lessons/master/ico/briefcase-30.png
[cap-30]: https://raw.githubusercontent.com/garevna/a-level-js-lessons/master/ico/coffee-30.png
[warn-25]: https://raw.githubusercontent.com/garevna/a-level-js-lessons/master/ico/warning-25.png
[link-25]: https://raw.githubusercontent.com/garevna/a-level-js-lessons/master/ico/link-25.png
[err-20]: https://raw.githubusercontent.com/garevna/a-level-js-lessons/master/ico/no_entry-20.png
[err-25]: https://raw.githubusercontent.com/garevna/a-level-js-lessons/master/ico/no_entry-25.png
[err-30]: https://raw.githubusercontent.com/garevna/a-level-js-lessons/master/ico/no_entry-30.png

<table><tr><td width="50">

![ico25] <br/><sup>[**Lesson&nbsp;9**](../lessons/lesson-09.md)</sup>
  </td>
  <td width="800"><h2>Итерирующие методы массивов</h2></td>
  <td>

  ![me40] <br/><sup>[**Занятие&nbsp;9**](../lessons/lesson-09.md)</sup></td>
</tr></table>

* [`entries()`](Array.prototype.entries.md)
* [`every()`](Array.prototype.every.md)
* [`filter()`](Array.prototype.filter.md)
* [`find()`](Array.prototype.find.md)
* [`findIndex()`](Array.prototype.findIndex.md)

___________________________________________________________________

# ![ico25] flatMap()

###### ![warn-25] экспериментальная технология

Получим массив **`cookie`** с помощью следующего кода:

```javascript
document.cookie = "name=user"
document.cookie = "token=Jd7-js15/84"
document.cookie = "inerest=javascript"

var cookie = document.cookie.split ( "; " )
```

###### массив `cookie`

```console
▼ (3) ["name=user", "token=Jd7-js15/84", "inerest=javascript"]
  ► 0: "name=user"
  ► 1: "token=Jd7-js15/84"
  ► 2: "inerest=javascript"
    length: 3
  ► __proto__: Array(0)
```

Теперь применим метод **`map`** к массиву **`cookie`**

#### ![cap-30] map()

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

#### ![cap-30] flatMap()

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

* [`forEach()`](Array.prototype.forEach.md)
* [`keys()`](Array.prototype.keys.md)
* [`map()`](Array.prototype.map.md)
* [`reduce()`](Array.prototype.reduce.md)
* [`reduceRight()`](Array.prototype.reduceRight.md)
* [`some()`](Array.prototype.some.md)
* [`sort()`](Array.prototype.sort.md)
* [`values()`](Array.prototype.values.md)

_________________________________________________________________________

![footer]
