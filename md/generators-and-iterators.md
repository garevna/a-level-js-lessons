# <img src="https://avatars2.githubusercontent.com/u/19735284?s=40&v=4" width="30" title="Ⓒ Irina Fylyppova ( garevna ) 2019"/> Генераторы и итераторы
###### ES6

### Генератор

Функция-генератор объявляется с помощью ключевого слова **`function*`**

:warning: **`*`** - обязательный атрибут функции-генератора

Функция-генератор  определяет порядок ( протокол ) итерирования структуры данных

Сама по себе функция-генератор ничего не итерирует

С помощью функции-генератора создается объект-**_итератор_**

```javascript
let iterator = generator ( ... )
```

Она ничего не возвращает, кроме, как уже было сказано, объекта-**итератора** с заложенным в нем протоколом перебора значений

:warning: Именно поэтому генератор вместо оператора  **`return`** использует оператор  **`yield`**

```javascript
function* generator ( ... ) {
    ...
    yield ...
}
```

Оператор  **`yield`** позволяет управлять работой итератора

Этим оператором функция-генератор говорит итератору, что в этом месте нужно остановиться и вернуть текущее значение

***

### next()

У объекта-**_итератора_** есть обязательный метод **`next()`**

С помощью этого метода итератор переходит от текущего элемента структуры данных к следующему

:warning: Этот метод возвращает объект с двумя свойствами:    **`value`**  и  **`done`**

* Свойство  **`value`**  содержит то, что указано в протоколе генератора после ключевого слова слова **`yield`**
* Свойство  **`done`**  принимает значение  `true`, когда процесс итерирования структуры данных завершен

***

##### :coffee: 1

```javascript
function* colorsGenerator () {
    while ( true ) {
        yield `rgb(
            ${Math.round ( Math.random() * 255 )},
            ${Math.round ( Math.random() * 255 )},
            ${Math.round ( Math.random() * 255 )}
        )`
    }
}

let colorIterator = colorsGenerator ()

for ( var x=0; x < 100; x++ ) {
    let point = document.body.appendChild (
        document.createElement ( 'div' )
    )
    point.style = `
        float: left;
        width: 10px;
        height: 10px;
        background-color: ${ colorIterator.next().value};
    `
}
```

Используя **IIFE**, можно сократь код:

```javascript
const colorIterator = ( function* () {
    while ( true ) {
        yield `rgb(
            ${Math.round ( Math.random() * 255 )},
            ${Math.round ( Math.random() * 255 )},
            ${Math.round ( Math.random() * 255 )}
        )`
    }
})()
```

Также можно отдельно вынести в функцию код создания элемента с параметрами ширины и высоты:

```javascript
function createColoredElement ( w, h ) {
    let point = document.createElement ( 'div' )
    point.style = `
        position: absolute;
        width: ${w}px;
        height: ${h}px;
        background-color: ${ colorIterator.next().value};
    `
    return point
}
```

После чего можно в цикле создавать элементы:

```javascript
for ( var x = 0; x < 75; x++ ) {
    document.body.appendChild (
        createColoredElement ( 400-x*5, 400-x*5 )
    )
}
```

***

##### :coffee: 2

Пусть есть некий объект **user**

```javascript
let user = {
    login: "Сергей",
    avatar: "https://www.shareicon.net/data/2015/12/14/207817_face_300x300.png",
    email: "serg789@gmail.com",
    place ( tagName ) {
        return document.body.appendChild (
            document.createElement ( tagName )
        )
    },
    showAvatar () {
        let ava = this.place ( "img" )
        ava.src = this.avatar
        ava.width = "70"
        return ava
    },
    showLogin () {
        let x = this.place ( "h3" )
            .innerHTML = this.login
        return x
    },
    showEmail () {
        let x = this.place ( "p" )
            .innerHTML = this.email
        return x
    }
}
```

С помощью генератора определим протокол итерирования этого объекта:

```javascript
user.generator = function* () {
    yield this.showLogin ()
    yield this.showEmail ()
    yield this.showAvatar ()
}
```

Теперь создадим объект итератора:

```javascript
user.iterator = user.generator ()
```

и запустим цикл итерирования:

```javascript
while ( !user.iterator.next().done ) {}
```

На самом деле такое решение является чрезмерно громоздким

Все значительно упростится с использованием глобального символа **`Symbol.iterator`**

***

### Symbol.iterator

Все очень просто:

Если у объекта есть свойство  **`Symbol.iterator`**, то этот объект является итерабельным

( то есть можно перебирать его свойства оператором for...of )

**`Symbol.iterator`**  является ссылкой на функцию-генератор

***

Используем **`Symbol.iterator`** в контексте предыдущего примера

```javascript
user [ Symbol.iterator ] = function* () {
    yield this.showLogin ()
    yield this.showEmail ()
    yield this.showAvatar ()
}
```

Теперь объект **user** можно итерировать обычным `for...of`

```javascript
for ( var x of user ) {}
```

или воспользоваться оператором `spread`:

```javascript
console.log ( ...user )
```

***

##### :coffee: 3

```javascript
const elements = [
    { tagName: "div", attrs: { id: "first", innerText: "first" } },
    { tagName: "article", attrs: { id: "second", innerText: "second" } },
    { tagName: "figure", attrs: { id: "third", innerText: "third" } },
    { tagName: "p", attrs: { id: "forth", innerText: "forth" } }
]

elements [ Symbol.iterator ] = function* () {
    let itemNum = 0
    while ( itemNum < this.length ) {
        yield ( () => {
            var elem = document.body.appendChild (
                document.createElement (
                    this [ itemNum ].tagName
                )
            )
            if ( this [ itemNum ].attrs )
                for ( var x in this [ itemNum ].attrs ) {
                    elem [ x ] = this [ itemNum ].attrs [ x ]
                }
            itemNum++
            return elem
        })()
    }
}

for ( let elem of elements ) {}
```

***

### Асинхронный генератор

##### :coffee: 4

Создадим генератор, который выдает по одному символу в секунду из массива, переданного ему в качестве аргумента

```javascript
async function* messageGenerator ( arr ) {
    while ( arr.length > 0 ) {
        let result = await new Promise (
            function ( resolve ) {
                setTimeout (
                    () => resolve ( arr.shift() ),
                    1000
                )
            }
        )
        yield result
    }
}
```

Поскольку протокол итерирования, заложенный в генераторе, возвращает промис на каждой итерации, для работы с ним объявим асинхронную функцию **showMessage**

**showMessage** создаст итератор с помощью генератора **messageGenerator**, передав ему строку, которая будет выводиться на страницу по одному символу в секунду

**showMessage** будет ждать ( `await` ), когда асинхронный итератор вернет очередное значение, и после этого выведет его на страницу

```javascript
async function showMessage ( message ) {
    const iterator = messageGenerator ( [...message] )
    let finish = false

    while ( !finish ) {
        let currentState = await iterator.next()
        document.body.innerText += !currentState.done ?
            currentState.value : ""
        finish = currentState.done
    }
}
```

Вызовем асинхронную функцию **showMessage**:

```javascript
showMessage ( "Привет, студент!" )
```

***

##### :coffee: 5

###### Асинхронный генератор

```javascript
let circle = document.createElement ( "div" )
circle.style = `
    border: solid 2px blue;
    width: 50px;
    height: 50px;
    position: absolute;
    border-radius: 50%;
    transition: all 0.2s;
    opacity: 1;
`

circle.bubblesGenerator = ( async function* () {
    let bubble = () => new Promise (
        function ( resolve ) {
            setTimeout ( () => resolve ( "next" ), 100 )
        }
    )
    while ( true ) {
        let radius = this.offsetWidth > 200 ?
                     50 : this.offsetWidth + 5
        await bubble ()
        this.style.width = `${radius}px`
        this.style.height = `${radius}px`
        this.style.opacity = radius === 50 ?
            1 : Math.max ( this.style.opacity - 0.02, 0 )
        yield radius
    }
}).call ( circle )


document.body.appendChild ( circle )

async function show () {
    let step = 200
    while ( step --> 0 )
        await circle.bubblesGenerator.next()
}

show()
```

***

###### Примеры асинхронного генератора

| [:coffee: **6**](https://garevna.github.io/js-samples/#22) | [:coffee: **7**](https://garevna.github.io/js-samples/#23) | [:coffee: **8**](https://garevna.github.io/js-samples/#24) | [:coffee: **9**](https://garevna.github.io/js-samples/#21) |
|-|-|-|-|

###### [:coffee: 9](generators-sample-9) Описание примера

***

### Связные списки

##### :coffee: 10

Пусть у нас есть массив объектов

```javascript
const objects = [
    { val: "first",  nextItem: "second" },
    { val: "forth",  nextItem: "fifth" },
    { val: "sixth",  nextItem: null },
    { val: "third",  nextItem: "forth" },
    { val: "fifth",  nextItem: "sixth" },
    { val: "second", nextItem: "third" }
]
```

Каждый элемент массива содержит свойство **`nextItem`** - ссылку на другой элемент этого же массива

Создадим протокол итерирования такого массива

Пусть элементы массива перебираются не в том порядке, в котором они расположены в массиве, а по новому протоколу, т.е. следующим будет выбираться элемент, указанный в свойстве **`nextItem`** текущего элемента

```javascript
function* someGenerator ( objs ) {
    let currentItem = objs [ 0 ]
    let nextItem = objs [ 0 ]
    while ( !!nextItem ) {
        currentItem = nextItem
        nextItem = !!currentItem.nextItem ?
            objs.find ( x => currentItem.nextItem === x.val )
            : null
        yield currentItem.val
    }
}
```

Генератор принимает в качестве аргумента ссылку на итерируемый массив

Создадим итератор для массива **objects**

```javascript
var iterator = someGenerator ( objects )
```

Теперь можно использовать метод `next()` итератора **_iterator_**

***

:pushpin: Изменим протокол итерирования массива

```javascript
objects[Symbol.iterator] = function* () {
    let currentItem = this [ 0 ]
    let nextItem = this [ 0 ]
    while ( !!nextItem ) {
        currentItem = nextItem
        nextItem = !!currentItem.nextItem ?
            this.find ( x => currentItem.nextItem === x.val )
            : null
        yield currentItem.val
    }
}
```

Теперь оператор `for...of` будет итерировать массив **objects** в нужном порядке

```javascript
for ( let obj of objects )
    console.log ( obj )
```

Кроме того, при деструктуризации массива **objects** значения будут возвращены в указанном протоколом порядке

```javascript
let [ a, b, c, d ] = objects
```



***

##### :coffee: 11

```javascript
let btn = document.body.appendChild (
    document.createElement ( "button" )
)
btn.innerText = "new"
btn.onclick = function ( event ) {
    let ava = getAvatar.next()
    if ( !ava.done ) document.body.appendChild ( ava.value )
}

function* avaGenerator () {
    let num = 9
    while ( ++num < 99 ) {
        let ava = document.createElement ( "img" )
        ava.src = `https://www.shareicon.net/data/2015/12/14/2078${num}_face_300x300.png`
        ava.width = "80"
        yield ava
    }
}

let getAvatar = avaGenerator ()
```

***

### [:briefcase: Тесты](https://garevna.github.io/js-quiz/#gen)