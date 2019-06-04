# ![ico-30 study] Генераторы и итераторы

**ES6**

| ^^Обычная функция не может быть приостановлена в середине кода и при следующем вызове продолжить с того места, где она остановилась^^<br>^^Единственный способ выйти из обычной функции до того, как ее код исполнится до конца - это оператор _return_ или _throw_^^<br>^^Если еще раз вызвать функцию, она начнет выполняться с начала^^<hr>^^![ico-20 warn] Для того, чтобы обеспечить возможность приостановить выполнение кода и при следующем вызове продолжить с того места, где произошла остановка, в JS есть специальная функция-**генератор**^^ |

## ![ico-25 icon] Symbol.iterator

Для того, чтобы некая коллекция данных ( объект ) была итерабельной, у нее должно быть определено свойство **~[ Symbol.iterator ]~**

**~[ Symbol.iterator ]~** должен быть ссылкой на функцию-**_генератор_** ( т.е. быть методом )

Чтобы быть **_генератором_**, этот метод должен удовлетворять следующим условиям:

| ![ico-20 yes] Метод **~[ Symbol.iterator ]~** должен возвращать _объект_<br>![ico-20 yes] Этот объект должен иметь метод **_~next()~_**<br>![ico-20 yes] Метод **_~next()~_** должен возвращать объект со свойствами **_~value~_** и **_~done~_** |

![ico-25 cap] **Пример 1**

^^Используя свойство **~Symbol.iterator~**, создадим итерабельный объект **browsers**^^
^^Для этого нам нужно, чтобы **~Symbol.iterator~** возвращал объект, у которого есть метод **~_next()_~**^^

~~~js
const browsers = {
    [ Symbol.iterator ]() {
        let step = 0
        return {
            next() {
                step++;
                return step === 1 ? { value: 'Google', done: false } :
                       step === 2 ? { value: 'Mozilla', done: false } :
                       step === 3 ? { value: 'Safari', done: false } :
                       { value: '', done: true }
            }
   		}
    }
}
~~~

^^Проверим, что объект **browsers** является итерабельным:^^

~~~js
for ( const name of browsers ) {
    console.log( name )
}
~~~

^^Теперь объект **browsers** можно деструктурировать и применять к нему оператор ~spread~:^^

~~~js
console.log ( ...browsers )
~~~

^^Что мы, собственно говоря, сделали:^^

^^создали генератор **~[Symbol.iterator]~**, который определяет протокол итерирования объекта **browsers**, т.е. последовательность перебора значений^^

______________________________________

## ![ico-25 icon] Генератор

^^Предыдущий пример раскрывает механизм генератора^^
^^Однако нет необходимости создавать генераторы подобным образом^^
^^Гораздо проще использовать встроенную функцию-генератор ![ico-20 smile]^^

Функция-генератор объявляется с помощью ключевого слова ~function*~

![ico-20 warn] ~ *~ - обязательный атрибут функции-генератора

Сама по себе функция-генератор ничего не итерирует,
но задает последовательность перебора значений ( _протокол итерирования_ )
и возвращает объект-**_итератор_**

~~~javascript
let iterator = generator ( ... )
~~~

Поскольку основная задача генератора - задать точки, в которых код будет приостановлен с возвратом промежуточного результата, очевидно, что нужна некая альтернатива оператору **~return~**, поскольку использование **~return~** приведет к завершению выполнения кода

Такой альтернативой является оператор  **~yield~**

Этот оператор является инструкцией приостановки выполнения кода с возвратом промежуточного результата, следующего за оператором **~yield~**

^^Вспомним, как работает асинхронная функция:^^
^^• она, как Карлсон, который живет на крыше, "_улетел, но обещал вернуться_" - нужно "ловить" момент ее "возвращения" методом  **_then_**^^
^^• внутри код приостанавливается и ждет завершения очередной асинхронной операции, пока не дойдет до конца или оператора **_return_**^^

Короче,

| • асинхронная функция - это генератор с **внутренним управлением**<br>• внутреннее управление осуществляется с помощью **_await_**<br>• "я жду здесь, потом продолжу" - говорит асинхронная функция _сама себе_<hr>• Генератор имеет подобный механизм, но с **внешним управлением**<br>• он передает управление "наружу" с помощью **_yield_**<br>• "я жду здесь, потом, когда скажете - продолжу с этого места" - говорит генератор _тому, кто снаружи управляет его работой_ |


~~~js
function* generator ( ... ) {
    ...
    yield ...
    ...
    yield ...
    ...
}
~~~

Перепишем предыдущий пример с использованием функции-генератора:

____________________

![ico-25 cap] **Пример 2**

~~~js
const browsers = {
    [ Symbol.iterator ]: function* () {
        yield 'Google'
        yield 'Mozilla'
        yield 'Safari'
    }
}
~~~

Код явно стал короче и читабельнее ![ico-20 smile]

_________________

![ico-25 cap] **Пример 3**

~~~js
const browsers = (function* () {
    yield "Chrome"
    yield "Mozilla"
    yield "Safari"
    yield "IE"
})()

for ( let x of [ 1, 2, 3, 4 ] )
    setTimeout (
      () => console.log ( browsers.next().value ),
      1000 * x
    )
~~~

Получается прикольная штука:
весь код внутри генератора выполняется асинхронно
^^( ведь заранее неизвестно, когда выполнение кода генератора возобновится начиная с места предыдущей остановки )^^
___________________________

## ![ico-25 icon] Итератор

**Итератор** - это _объект_,
у которого есть обязательный метод **~next()~**,
и этот метод возвращает _объект_
со свойствами **~_value_~** и **~_done_~**

Итератор переходит от одного **~yield~** к следующему с помощью метода **~next()~**

Все строго по протоколу ![ico-20 require]

**~next()~** переставляет лапы итератору, заставляя его двигаться по намеченному маршруту ![ico-20 smile]

______________________________________________________________

## ![ico-25 icon] next()

У объекта-**_итератора_** обязательно есть метод **~next()~**

С помощью этого метода итератор переходит от текущего элемента структуры данных к следующему

![ico-20 warn] Этот метод возвращает объект с двумя свойствами:    **_~value~_**  и  **_~done~_**

• Свойство  **_~value~_**  содержит то, что указано в протоколе генератора после ключевого слова слова **~yield~**
• Свойство  **_~done~_**  принимает значение  ~true~, когда процесс итерирования структуры данных завершен

_____________________________________________________________

![ico-25 cap] **Пример 4**

~~~js
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
~~~

Используя **IIFE**, можно сократь код:

~~~javascript
const colorIterator = ( function* () {
    while ( true ) {
        yield `rgb(
            ${Math.round ( Math.random() * 255 )},
            ${Math.round ( Math.random() * 255 )},
            ${Math.round ( Math.random() * 255 )}
        )`
    }
})()
~~~

Также можно отдельно вынести в функцию код создания элемента с параметрами ширины и высоты:

~~~javascript
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
~~~

После чего можно в цикле создавать элементы:

~~~javascript
for ( var x = 0; x < 75; x++ ) {
    document.body.appendChild (
        createColoredElement ( 400-x*5, 400-x*5 )
    )
}
~~~

________________________________________________________________

![ico-25 cap] **Пример 5**

Для бесконечной подзагрузки данных с сервера при прокрутке страницы можно также использовать итератор:

~~~javascript
const iterator = (
    function* ( arg ) {
        while ( true ) {
            yield fetch ( `https://api.github.com/users?since=${arg}` )
                .then (
                    response => response.json()
                        .then (
                            response => response.forEach (
                                user => {
                                    let img = document.body.appendChild (
                                        document.createElement ( "img" )
                                    )
                                    img.src = user.avatar_url
                                    img.height = 100
                                }
                            )

                        )
                )
            arg += 30
        }
    }
)(0)


document.body.onmousewheel = function ( event ) {
    iterator.next()
}
~~~

________________________________________

![ico-25 cap] **Пример 6**

^^Пусть есть некий объект **user**^^

~~~~js
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
~~~~

^^С помощью генератора определим протокол итерирования этого объекта:^^

~~~javascript
user.generator = function* () {
    yield this.showLogin ()
    yield this.showEmail ()
    yield this.showAvatar ()
}
~~~

^^Теперь создадим объект итератора:^^

~~~javascript
user.iterator = user.generator ()
~~~

^^и запустим цикл итерирования:^^

~~~javascript
while ( !user.iterator.next().done ) {}
~~~

^^На самом деле такое решение является чрезмерно громоздким^^

^^Все значительно упростится с использованием глобального символа **~Symbol.iterator~**^^

^^Если у объекта есть свойство  **~Symbol.iterator~**, то этот объект является итерабельным^^
^^( то есть можно перебирать его свойства оператором for...of )^^

**~Symbol.iterator~**  является ссылкой на функцию-генератор

^^Используем **~Symbol.iterator~** в контексте предыдущего примера^^

~~~javascript
user [ Symbol.iterator ] = function* () {
    yield this.showLogin ()
    yield this.showEmail ()
    yield this.showAvatar ()
}
~~~

^^Теперь объект **user** можно итерировать обычным ~for...of~^^

~~~javascript
for ( var x of user ) {}
~~~

^^или воспользоваться оператором ~spread~:^^

~~~javascript
console.log ( ...user )
~~~

___________________________________________________________________

![ico-25 cap] **Пример 7**

~~~javascript
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
~~~

___________________________________________________

## ![ico-25 icon] Связные списки

![ico-25 cap] **Пример 8**

^^Пусть у нас есть массив объектов^^

~~~javascript
const objects = [
    { val: "first",  nextItem: "second" },
    { val: "forth",  nextItem: "fifth" },
    { val: "sixth",  nextItem: null },
    { val: "third",  nextItem: "forth" },
    { val: "fifth",  nextItem: "sixth" },
    { val: "second", nextItem: "third" }
]
~~~

^^Каждый элемент массива содержит свойство **~nextItem~** - ссылку на другой элемент этого же массива^^

^^Создадим протокол итерирования такого массива^^

^^Пусть элементы массива перебираются не в том порядке, в котором они расположены в массиве, а по новому протоколу, т.е. следующим будет выбираться элемент, указанный в свойстве **~nextItem~** текущего элемента^^

~~~javascript
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
~~~

^^Генератор принимает в качестве аргумента ссылку на итерируемый массив^^

^^Создадим итератор для массива **objects**^^

~~~javascript
var iterator = someGenerator ( objects )
~~~

^^Теперь можно использовать метод ~next()~ итератора **_iterator_**^^

______________________________________

^^![ico-20 pin] Изменим протокол итерирования массива^^

~~~javascript
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
~~~

^^Теперь оператор ~for...of~ будет итерировать массив **objects** в нужном порядке^^

~~~javascript
for ( let obj of objects )
    console.log ( obj )
~~~

^^Кроме того, при деструктуризации массива **objects** значения будут возвращены в указанном протоколом порядке^^

~~~javascript
let [ a, b, c, d ] = objects
~~~

___________________________________________________

## ![ico-25 icon] Асинхронный генератор

![ico-25 cap] **Пример 9**

Создадим генератор, который выдает по одному символу в секунду из массива, переданного ему в качестве аргумента

~~~javascript
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
~~~

Поскольку протокол итерирования, заложенный в генераторе, возвращает промис на каждой итерации, для работы с ним объявим асинхронную функцию **showMessage**

**showMessage** создаст итератор с помощью генератора **messageGenerator**, передав ему строку, которая будет выводиться на страницу по одному символу в секунду

**showMessage** будет ждать ( `await` ), когда асинхронный итератор вернет очередное значение, и после этого выведет его на страницу

~~~javascript
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
~~~

Вызовем асинхронную функцию **showMessage**:

~~~javascript
showMessage ( "Привет, студент!" )
~~~

_______________________________________________________

![ico-25 cap] **Пример 10**

**Асинхронный генератор**

~~~javascript
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
~~~

______________________________________________________

### ![ico-25 cap] Примеры асинхронного генератора

| [![ico-25 cap] **11**](https://garevna.github.io/js-samples/#22) | [![ico-25 cap] **12**](https://garevna.github.io/js-samples/#23) | [![ico-25 cap] **13**](https://garevna.github.io/js-samples/#24) | [![ico-25 cap] **14**](https://garevna.github.io/js-samples/#21) |


^^^[Описание примера 14]

^^Создадим слайдер с помощью итератора^^

^^Для начала определим массив картинок **pictures**^^

~~~javascript
const pictures = [
    "https://cdn.pixabay.com/photo/2017/03/29/15/18/tianjin-2185510__340.jpg",
    "https://cdn.pixabay.com/photo/2018/01/11/19/02/architecture-3076685__340.jpg",
    "https://cdn.pixabay.com/photo/2017/01/18/16/46/hong-kong-1990268__340.jpg",
    "https://cdn.pixabay.com/photo/2013/03/02/02/41/city-89197__340.jpg",
    "https://cdn.pixabay.com/photo/2017/12/10/17/40/prague-3010407__340.jpg",
    "https://cdn.pixabay.com/photo/2018/01/31/12/16/architecture-3121009__340.jpg",
    "https://cdn.pixabay.com/photo/2015/02/24/13/23/city-647400__340.jpg",
    "https://cdn.pixabay.com/photo/2018/11/29/21/19/hamburg-3846525__340.jpg"
]
~~~

^^Добавим массиву **pictures** метод **_createSlide_**^^

~~~javascript
pictures.createSlide = function () {
    const slide = document.body.appendChild (
        document.createElement ( "figure" )
    )
    slide.style = `
        position: fixed;
        top: 10%;
        bottom: 10%;
        left: 10%;
        right: 10%;
        transition: all 0.5s;
        background-size: contain;
        background-repeat: no-repeat;
        background-position: center center;
    `
    slide.onclick = function () {
        this.iterator.next ()
    }.bind ( this )

    return slide
}
~~~

^^Этот метод создает и возвращает html-элемент с заданными стилевыми атрибутами и обработчиком события ~click~^^

^^Обратите внимание, что обработчик события ~click~ вызывает метод **_~next()~_** итератора^^

^^Определим этот итератор^^

^^Для этого нужно объявить и вызвать функцию-генератор^^

^^Мы объединим два этих действия в одно с помощью **IIFE**^^

~~~javascript
pictures.iterator = (
    function* () {
        ...
    }
).call ( pictures )
~~~

^^Обратите внимание, что мы вызываем анонимную функцию-генератор в контексте объекта **pictures**^^

^^Теперь ~this~ внутри генератора будет показывать в правильном направлении ![ico-20 ok]^^

^^Внутри анонимной функции-генератора:^^

_________________________

^^![ico-20 pin] объявим вспомогательную функцию **_moveSlide_**, которая будет сдвигать слайд в нужном направлении в зависимости от значения второго аргумента **active**^^

^^Этот аргумент принимает логическое значение^^

^^Если ~true~, то слайд сдвигается в видимую часть страницы, т.е. становится активным^^

^^В противном случае слайд "уходит" из видимой зоны^^

^^Первым аргументом передается ссылка на сдвигаемый слайд^^

~~~javascript
function moveSlide ( slide, active ) {
    slide.style.left = `${ active ? 10 : -100 }%`
    slide.style.right = `${ active ? 10 : 100 }%`
    slide.style.opacity = active ? 1 : 0
}
~~~

__________________________

^^![ico-20 pin] Создадим приватный метод **_getNextPictureNum_**, который будет возвращать индекс следующего элемента массива **pictures**^^

^^Обратите внимание, что этой функции мы заранее "закрепляем" контекст вызова с помощью метода ~bind()~, поскольку в противном случае это будет глобальный контекст^^

~~~javascript
let getNextPictureNum = function () {
    return this.currentPicture < this.length - 1 ?
        this.currentPicture + 1 : 0
}.bind ( this )
~~~

____________________________

^^![ico-20 pin] Теперь создадим массив их двух слайдов^^

~~~javascript
const slides = [
    this.createSlide (),
    this.createSlide ()
]
~~~

^^Для этого, как видите, мы воспользовались публичным методом **_createSlide_** массива **pictures**^^

___________________________________

^^![ico-20 pin] Объявим еще пару переменных^^

^^• приватное свойство **_currentSlide_** будет индексом активного слайда^^
^^• публичное свойство **_currentPicture_** будет содержать индекс текущего элемента массива **pictures**^^

~~~javascript
let currentSlide = 0
this.currentPicture = 0
~~~

_________________________________

^^![ico-20 pin] Осталось совсем немного - написать сам протокол итерирования^^

^^В процессе итерирования слайды ~slides[0]~ и ~slides[1]~ будут постоянно меняться местами^^
^^т.е. активным текущим слайдом по очереди будет то ~slides[0]~, то ~slides[1]~^^
^^вычислять индекс неактивного слайда для смены слайдов мы будем так:^^

~~~javascript
Math.abs ( currentSlide - 1 )
~~~

Итак, протокол итерирования:

~~~javascript
while ( true ) {
    this.nextPicture = getNextPictureNum ()
    slides [ Math.abs ( currentSlide - 1 ) ].style.backgroundImage = `
        url(${ this [ this.nextPicture ] })
    `
    moveSlide ( slides [ currentSlide ], false )
    await waitFor ( 500 )
    moveSlide ( slides [ Math.abs ( currentSlide - 1 ) ], true )
    await waitFor ( 500 )
    this.currentPicture = this.nextPicture
    this.nextPicture = getNextPictureNum ()
    currentSlide = Math.abs ( currentSlide - 1 )

    yield slides [ currentSlide ]

}
~~~

^^^

**Полный код генератора**

~~~~javascript
pictures.iterator = (
    function* () {
        function moveSlide ( slide, active ) {
            slide.style.left = `${ active ? 10 : -100 }%`
            slide.style.right = `${ active ? 10 : 100 }%`
            slide.style.opacity = active ? 1 : 0
        }

        let getNextPictureNum = function () {
            return this.currentPicture < this.length - 1 ?
                this.currentPicture + 1 : 0
        }.bind ( this )

        const slides = [
            this.createSlide (),
            this.createSlide ()
        ]

        let currentSlide = 0
        this.currentPicture = 0

        while ( true ) {
            this.currentPicture = getNextPictureNum ()
            slides [ Math.abs ( currentSlide - 1 ) ]
                .style.backgroundImage = `
                    url(${ this [ this.currentPicture ] })
                `
            moveSlide ( slides [ currentSlide ], false )
            moveSlide ( slides [ Math.abs ( currentSlide - 1 ) ], true )
            currentSlide = Math.abs ( currentSlide - 1 )

            yield slides [ currentSlide ]

        }
    }
).call ( pictures )
~~~~

**Запуск**

~~~javascript
pictures.iterator.next()
~~~

_______________________________________________________

![ico-25 cap] **Пример 15**

~~~~javascript
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
~~~~

_______________________________________________________

## ![ico-25 icon] yield*

**yield*** позволяет переключаться с одного протокола итерирования на другой

Как мы знаем, протокол итерирования задается в функции-генераторе

Поэтому для переключения нужно после **yield* ** указать ссылку на генератор

![ico-25 cap] **Пример 16**

При клике на странице вызывается метод **~next()~** объекта **iterator**

Однако протокол итерирования, даложенный в объекте **iterator**, предусматривает переход по условию на другой протокол перебора значений, который задается функцией-генератором **generator**

~~~javascript
const generator = function* ( arg ) {
    while ( true ) { yield arg++ }
}

const iterator = (
    function* ( arg ) {
        while ( true ) {
            arg < 5 ? yield arg++ : yield* generator(50)
        }
    }
)(0)


document.body.onclick = function ( event ) {
    let iter = iterator.next()
    console.log ( iter.value )
}
~~~

___________________________________________________

![ico-25 cap] **Пример 17**

В этом примере есть две функции-генератора: **generator1** и **generator2**

~~~js
const generator1 = function* ( arg ) {
    while ( true ) {
        arg++ < 5 ?
            yield "generator1: " + arg :
            yield* generator2()
    }
}

function* generator2() {
    while ( true ) {
        Math.random() > 0.3 ?
            yield "generator2" :
            yield* generator1(0)
    }
}
~~~

В функции-генераторе **generator2** в зависимости от значения случайной величины происходит переход на протокол перебора значений, заложенный в функции-генераторе **generator1**

В свою очередь в функции-генераторе **generator1** в зависимости от значения аргумента **_arg_** происходит переход на протокол перебора значений, заложенный в функции-генераторе **generator2**

Стартуем мы с протокола перебора значений, заложенном в функции-генераторе **generator2**

~~~js
const iterator = generator2 (3)
~~~

Теперь при клике на странице мы будем случайным образом переключаться с одного протокола итерирования на другой:

~~~js
document.body.onclick = event =>
    console.log ( iterator.next().value )
~~~

________________________________

Если после оператора **yield* ** следует итерабельный объект, то произойдет автоматический переход на встроенный протокол итерирования этого объекта

Когда протокол будет исчерпан, управление вернется к текущему протоколу

т.е. вместо протокола с **yield**:

~~~js
const generator = function* () {
    for ( let x of [ 5, 4, 3, 2, 1 ] )
        yield x
}
~~~

мы можем использовать протокол с **yield* **:

~~~js
const generator = function* () {
    yield* [ 5, 4, 3, 2, 1 ] )
}
~~~

![ico-25 cap] **Пример 18**

~~~js
const generator = function* () {
    yield* [ 5, 4, 3, 2, 1 ]
    yield* "API"
    yield* arguments
}

const iterator = generator ( 10, 20, 30 )

document.body.onclick = function ( event ) {
    console.log ( iterator.next().value )
}
~~~

_________________________________________________

## ![ico-25 icon] return()

Этот метод позволяет остановить процесс итерирования до того, как протокол перебора значений будет исчерпан

![ico-25 cap] **Пример 19**

~~~javascript
const generator1 = function* () {
    while ( true ) {
        let x = Math.round ( Math.random() * 10 )
        x > 5 ? yield "generator1: " + x : yield* generator2()
    }
}

function* generator2() {
    while ( true ) {
        Math.random() > 0.3 ? yield "generator2" : yield* generator1()
    }
}
const iterator = generator2 (3)


document.body.onclick = function ( event ) {
    let iter = iterator.next()
    console.log ( iter.value )
    if ( iter.value === "generator1: 8" ) iterator.return()
}
~~~

_________________________________________________________

[![ico-30 hw] **Тесты**](https://garevna.github.io/js-quiz/#gen)
