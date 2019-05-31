[footer]: https://github.com/garevna/js-course/raw/master/images/a-level-ico.png?raw=true
[me]: https://raw.githubusercontent.com/garevna/a-level-js-lessons/master/ico/myPhoto-40.png "Ⓒ Irina Fylyppova ( garevna ) 2019"

[ico20]: https://raw.githubusercontent.com/garevna/a-level-js-lessons/master/ico/a-level-20.png
[ico25]: https://raw.githubusercontent.com/garevna/a-level-js-lessons/master/ico/a-level-25.png

[cap-20]: https://raw.githubusercontent.com/garevna/a-level-js-lessons/master/ico/coffee-20.png
[cap-25]: https://raw.githubusercontent.com/garevna/a-level-js-lessons/master/ico/coffee-25.png

[warn-25]: https://raw.githubusercontent.com/garevna/a-level-js-lessons/master/ico/warning-25.png

[link-20]: https://raw.githubusercontent.com/garevna/a-level-js-lessons/master/ico/link-20.png

[dir-25]: https://raw.githubusercontent.com/garevna/a-level-js-lessons/master/ico/folder-25.png

[yes-30]: https://raw.githubusercontent.com/garevna/a-level-js-lessons/master/ico/yes-30.png



<table><tr><td width="50">

![ico25] <br/><sup>[**Lesson&nbsp;2**](../lessons/lesson-02.md)</sup>
  </td>
  <td width="800"><h2>Методы работы со строками</h2></td>
  <td>

  ![me] <br/><sup>[**Занятие&nbsp;2**](../lessons/lesson-02.md)</sup></td>
</tr></table>


___________________________________________________________________

### ![ico25] Переменные в литералах

![yes-30] Литерал строки заворачивается в символы обратных кавычек ( **`** )

Литерал может содержать многострочный текст,

т.е. в литерал можно вставлять символ перевода строки

#### ![cap-25] 1

```javascript
var str = "\nПривет,\nменя зовут Дима\n"

var lit = `
    Привет,
    меня зовут Дима

`

console.log ( str )
console.log ( lit )
console.log ( str.charCodeAt (0) )
console.log ( lit.charCodeAt (0) )
```

###### Результат в консоли:

<img src="https://lh4.googleusercontent.com/hZWmdkrIYfsdLxbDNphnWHBdMWwdK-eP6PIHXU7bNNBMmCC0mRxtpjZKgU71ozT-1WVF-KgtOOTSy0gGQgQDU-_c4m0qhz3mZyK96p7OqjJwHYHKaP9ghEB17YXramEN9GXEw6OSjXCGUx0" width="220"/>

###### 10 - это код символа перевода строки

Обратите внимание, что в обычной строке ( **str** ) нам пришлось вставлять перевод строки с помощью `\n`

В литерале ( **lit** ) мы просто набираем многострочный текст, что улучшает читабельность кода

Но это не все достоинства литерала

_____________________________________

Конструкция **_`${ имя_переменной }`_** позволяет вставлять значения переменных непосредственно в литерал строки

#### ![cap-25] 2

```javascript
var cities = [ "Неаполь", "Вашингтон", "Женева" ]

for ( var i = 0; i < cities.length; i++ ) {
    console.log (
        `${ i + 1 }: ${ cities [ i ] }`
    )
}
```

###### Результат в консоли:

```
1: Неаполь
2: Вашингтон
3: Женева
```

_____________________________________

Можно использовать выражения, значения которых будут вычислены и вставлены в литерал:

#### ![cap-25] 3

```javascript
var cities = [
    "Киев",
    "Львов",
    "Харьков",
    "Одесса",
    "Днепропетровск"
]

var str = ""

for ( var x = 0; x < cities.length; x++ ) {
    str += `${cities[x].charCodeAt(0)}: ${cities[x]}\n`
}

console.log ( str )
```

###### Результат в консоли:

<img width="450" src="https://lh6.googleusercontent.com/DhqLf_YtZbWoqFT2BRMswxpt1ccotkTUkYbVB4r4IUpctgrEuOTJuhycbk4-MaonVYwNzUZvg2hX0h65a75whcI3wem8JzW5Jpmym0Fl1PlNnapQWbabWRZMXeGvKFc0h5RFFld5c28Ku7M"/>

_____________________________________

#### ![cap-25] 4

Можно сгенерировать случайное значение цвета в шестнадцатеричном формате

Используем встроенную библиотеку математических функций **`Math`**

Для получения случайного числа от нуля до единицы используем функцию **`Math.random()`**

Значение цвета в каждом канале может быть от 0 до 255

Чтобы получить число в это диапазоне, умножим случайное число на 255

Значение цветового канала должно быть целым числом, поэтому округлим результат с помощью функции **`Math.round()`**

```javascript

var red = Math.round ( Math.random() * 255 ).toString(16)
var green = Math.round ( Math.random() * 255 ).toString(16)
var blue = Math.round ( Math.random() * 255 ).toString(16)

var color = `#${red}${green}${blue}`
```

Теперь в переменной **`color`** будет строка, содержащая значение цвета в шестнадцатеричном формате

_____________________________________

#### ![cap-25] 5

Можно сгенерировать случайное значение цвета с использованием функции **`rgb()`**

```javascript

var red = Math.round ( Math.random() * 255 )
var green = Math.round ( Math.random() * 255 )
var blue = Math.round ( Math.random() * 255 )

var color = `rgb(${red},${green},${blue})`
```

Теперь в переменной **`color`** будет строка, содержащая значение цвета в модели **`rgb`** с десятичными значениями цвета в каналах

______________________________________________________________

![footer]
