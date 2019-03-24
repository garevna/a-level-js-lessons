# :mortar_board: Итерирующие методы массивов

[`entries()`](Array.prototype.entries)<br/>
[`every()`](Array.prototype.every)<br/>
[`filter()`](Array.prototype.filter)<br/>
[`find()`](Array.prototype.find)<br/>
[`findIndex()`](Array.prototype.findIndex)<br/>
[`flatMap()`](Array.prototype.flatMap)<br/>
[`forEach()`](Array.prototype.forEach)<br/>
[`keys()`](Array.prototype.keys)<br/>
[`map()`](Array.prototype.map)<br/>

_____________________________________________________________________

## :mortar_board: reduce()

Сводит массив к новому результату

Функция, которая передается методу в качестве первого ( обязательного ) аргумента, имеет два формальных параметра:

* первый: имя переменной-аккумулятора, а которой будет накапливаться результат работы метода
* второй: текущий элемент массива

Этот метод получает два аргумента:
    обязательный первый аргумент - функция, которая будет вызвана для каждого элемента массива
    опциональный второй аргумент - стартовое значение переменной-аккумулятора

Для примера создадим массив банковских карт:

```javascript
var cards = [
    { num: "457892425", cash: 1100 },
    { num: "457812840", cash: 3000 },
    { num: "457855780", cash: 1200 },
    { num: "457811714", cash: 5000 }
]
```

_______________________________________________________________________

###### :coffee: :one:

Посчитаем сумму средств на всех картах:

```javascript
cards.reduce (
    function ( result, card ) {
        return result + card.cash
    },
    0
)
// 10300
```

_______________________________________________________________________

###### :coffee: :two:

Создадим новую карту, на которую аккумулируем остатки на счетах все карт:

```javascript
cards.reduce (
    function ( result, card ) {
        return {
            num: result.num,
            cash: result.cash + card.cash
        }
    },
    {
        num: "457855155",
        cash: 0
    }
)
```

###### Результат в консоли:

```console
▼ { num: "457855155", cash: 10300 }
    cash: 10300
    num: "457855155"
  ► __proto__: Object
```

_______________________________________________________________________

###### :coffee: :three:

Для чистоты результата дополнительно обнулим остатки на счетах других карт:

```javascript
cards.reduce (
    function ( result, card ) {
        var cash = card.cash
        card.cash = 0
        return {
            num: result.num,
            cash: result.cash + cash
        }
    },
    {
        num: "457855155",
        cash: 0
    }
)
```

###### Теперь исходный массив карт будет:

```console
▼ (4) [{…}, {…}, {…}, {…}]
  ► 0: {num: "457892425", cash: 0}
  ► 1: {num: "457812840", cash: 0}
  ► 2: {num: "457855780", cash: 0}
  ► 3: {num: "457811714", cash: 0}
    length: 4
  ► __proto__: Array(0)
```

_______________________________________________________________________

###### :coffee: :four:

Удалим дублирующиеся элементы массива:

```javascript
var arr = [
    "google",
    "mozilla",
    "ie",
    "mozilla",
    "mozilla",
    "google",
    "mozilla",
    "ie",
    "ie",
    "google"
]

arr.reduce (
    function ( result, item ) {
        result.indexOf ( item ) < 0 ? 
            result.push ( item ) : null
        return result
    },
    []
)
```

###### Результат в консоли:

```console
▼ (3) ["google", "mozilla", "ie"]
    0: "google"
    1: "mozilla"
    2: "ie"
    length: 3
  ► __proto__: Array(0)
```

_______________________________________________________________________

###### :coffee: :five:

Задача посложнее:

Есть несколько отрезков на числовой оси, таких, что начало и конец отрезков не совпадают

```javascript
let segments = [ [ 1, 8 ], [ 2, 3 ], [ 4, 7 ], [ 5, 6 ] ]
```

Для каждого отрезка нужно посчитать, сколько отрезков лежит внутри него 

**Решение**

Нужно напилить код функции, которая будет:

* получать в качестве аргумента исходный массив отрезков
* перебирать полученный массив
* для каждого отрезка в этом массиве считать число вложенных в него отрезков
* возвращать результат в виде массива чисел

Каркас функции:

```javascript
function countInnerIntervals ( intervals ) {
    let results = []
    intervals.forEach (
        ...
    )
    return results
}
```

Внутри функции объявляется пустой массив **`results`**, куда мы будем помещать результаты подсчетов

Когда итерирование исходного массива будет завершено, функция вернет массив результатов **`results`** 

Теперь методу **`forEach`** нужно передать функцию, которая будет "работать" с очередным отрезком

Это будет первый формальный параметр функции ( назовем его **`segment`** )

Но нам нужно будет внутри функции опять итерировать исходный массив, чтобы искать в нем отрезки, которые попадают в текущий отрезок **`segment`**

Для этого нам необходим третий аргумент - ссылка на исходный массив

Поэтому у функции будет три параметра: **`segment`**, **`index`**, **`array`**

Параметр **`array`** будет содержать ссылку на исходный массив

```javascript
intervals.forEach (
    function ( segment, index, array ) {
        ...
    },
    results
)
```

Обратите внимание, что методу **`forEach`** мы передаем обыную ( не стрелочную ) функцию, поскольку мы биндим ей контекст вызова - **`results`**

Это позволит нам внутри функции пушить результаты в массив **`results`**, используя ключевое слово `this`

```javascript
intervals.forEach (
    function ( segment, index, array ) {
        this.push (
            ...
        )
    },
    results
)
```

Если мы используем стрелочную функцию, то ее контекст вызова изменить будет невозможно, поэтому нам придется обращаться к массиву **`results`** непосредственно:

```javascript
intervals.forEach (
    ( segment, index, array ) =>
        results.push (
            ...
        )
)
```

Теперь вопрос - что пушить в массив **`results`**

Очевидно, что на каждой итерации это должно быть число, а не массив

Но мы итерируем исходный массив, ссылку на который получаем в параметре **`array`**

Итак, в параметре **`segment`** у нас ссылка на отрезок, для которого мы подсчитываем число входящих в него отрезков

В параметре **`array`** у нас ссылка на исходный массив отрезков

На каждой итерации нам нужно сравнить концы отрезка **`segment`** с концами каждого из отрезков массива **`array`**, чтобы понять, находится ли последний внутри отрезка **`segment`**

Для этого можно использовать метод **`filter`**:

```javascript
array.filter (
    item => item [0] > segment[0] && item [1] < segment[1] 
)
```

Результатом будет массив отрезков, попавших в заданный отрезок **`segment`**

Нам осталось только получить длину массива:

```javascript
array.filter (
    item => item [0] > segment[0] && item [1] < segment[1] 
).length
```

Это и будет число отрезков, находящихся внутри отрезка **`segment`**

Итак, полный код функции, передаваемой методу **`forEach`**:

```javascript
intervals.forEach (
    ( segment, index, array ) => results.push (
        array.filter (
            item => item [0] > segment[0] && item [1] < segment[1] 
        ).length
    )
)
```

Теперь полный код функции **`countInnerIntervals`** готов:

###### countInnerIntervals

```javascript
function countInnerIntervals ( intervals ) {
    let results = []
    intervals.forEach (
        ( segment, index, array ) =>
            results.push (
                array.filter (
                    item => item [0] > segment[0] && item [1] < segment[1] 
                ).length
            )
    )
    return results
}

console.log ( countInnerIntervals ( segments ) )
```

А теперь та же функция, но с использованием метода **`reduce`**:

```javascript
let segments = [ [ 1, 8 ], [ 2, 3 ], [ 4, 7 ], [ 5, 6 ] ]

function countInnerIntervals ( intervals ) {
    let results = []
    intervals.forEach (
        ( segment, index, array ) =>
            results.push (
                array.reduce (
                    ( result, item ) =>
                        result += item [0] > segment[0] && item [1] < segment[1] ? 1 : 0,
                        0
                )
            )
    )
    return results
}

console.log ( countInnerIntervals ( segments ) )
```

_______________________________________________________________________

[`reduceRight()`](Array.prototype.reduceRight)<br/>
[`some()`](Array.prototype.some)<br/>
[`sort()`](Array.prototype.sort)<br/>
[`values()`](Array.prototype.values)<br/>
