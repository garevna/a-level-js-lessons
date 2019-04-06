# Тестирование производительности

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

[<img src="http://www.iconarchive.com/download/i58934/wwalczyszyn/android-style-honeycomb/YouTube.ico" height="70"/>](https://youtu.be/nDNEiu_xwf0)

* Интерпретатор JavaScript динамически выделяет необходимую память при объявлении переменных
* Вызовы некоторых функций также ведут к выделению памяти
* Некоторые методы выделяют память для новых значений или объектов

Благодаря дебаггеру мы можем убедиться, что у нашего кода расход памяти весьма незначительный:

* код:                    127 килобайт
* строки:                 100 килобайт
* массивы:                  2 килобайта
* типизированные массивы:   1 килобайт