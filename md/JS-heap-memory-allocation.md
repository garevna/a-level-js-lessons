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
[yt-25]: https://raw.githubusercontent.com/garevna/a-level-js-lessons/master/ico/youtube-25.png
[space-800]: https://raw.githubusercontent.com/garevna/a-level-js-lessons/master/ico/space-800.png

| ![ico25] <br/><sup>[**Lesson&nbsp;9**](../lessons/lesson-09.md)</sup> | <h2>Тестирование производительности</h2>![space-800] | ![me] <br/><sup>[**Занятие&nbsp;9**](../lessons/lesson-09.md)</sup> |
|-|-|-|

_______________________________________________________________________

#### ![cap-30] 1

Рассмотрим пример кода, производительность которого мы хотим протестировать:

```javascript
const segments = [ [ 1, 8 ], [ 2, 3 ], [ 4, 7 ], [ 5, 6 ], [ 2, 8 ], [ 3, 7 ], [ 4, 6 ], [ 1, 5 ], [ 1, 6 ] ]

function countInnerIntervals ( intervals ) {
    let results = []
    intervals.forEach (
        ( segment, index, array ) =>
            results.push (
                array.reduce (
                    ( childs, section ) => array.filter (
                        item => item [0] > segment[0] && item [1] < segment[1]
                    ).length
                )
            )
    )
    return results
}
```

Нас интересует не только время выполнения функции **`countInnerIntervals`**, но и расход памяти

Для этого добавим кнопку на страницу:

```javascript
const button = document.body.appendChild (
    document.createElement ( "button" )
)

button.innerText = "Start"

button.onclick = function ( event ) {
    console.time ( "segments" )
    let children = countInnerIntervals ( segments )
    console.timeEnd ( "segments" )
    console.log ( children )
}
```

При клике на кнопке вызывается функция **`countInnerIntervals`**

Вызов **`countInnerIntervals`** "заворачивается в `console.time`/`console.timeEnd`, что позволит нам получить грубую оценку времени выполнения функции

###### Результат в консоли:

```console
segments: 0.536865234375ms
(9) [5, 0, 1, 0, 4, 2, 0, 1, 1]
segments: 0.462158203125ms
(9) [5, 0, 1, 0, 4, 2, 0, 1, 1]
segments: 0.386962890625ms
(9) [5, 0, 1, 0, 4, 2, 0, 1, 1]
segments: 0.55908203125ms
(9) [5, 0, 1, 0, 4, 2, 0, 1, 1]
segments: 0.345947265625ms
(9) [5, 0, 1, 0, 4, 2, 0, 1, 1]
segments: 0.459228515625ms
(9) [5, 0, 1, 0, 4, 2, 0, 1, 1]
```

Итак, производительность кода колеблется около пол-милисекунды

Воспользуемся дебаггером для оценки выделяемых ресурсов памяти

| [![yt-25]](https://youtu.be/nDNEiu_xwf0) |
|-|

* Интерпретатор JavaScript динамически выделяет необходимую память при объявлении переменных
* Вызовы некоторых функций также ведут к выделению памяти
* Некоторые методы выделяют память для новых значений или объектов

___________________________________

<sup>Благодаря дебаггеру мы можем убедиться, что у нашего кода расход памяти весьма незначительный:</sup>

> <sup>код:                    127 килобайт</sup>

> <sup>строки:                 100 килобайт</sup>

> <sup>массивы:                  2 килобайта</sup>

> <sup>типизированные массивы:   1 килобайт</sup>

_________________________________________________________________________

![footer]
