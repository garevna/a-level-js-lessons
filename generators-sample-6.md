| [:rewind:](generators-and-iterators) |
|-|

:coffee: :six:

Создадим слайдер с помощью итератора

Для начала определим массив картинок **pictures**

```javascript
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
```

Добавим массиву **pictures** метод **_createSlide_**

```javascript
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
```

Этот метод создает и возвращает html-элемент с заданными стилевыми атрибутами и обработчиком события `click`

Обратите внимание, что обработчик события `click` вызывает метод `next()` итератора

Определим этот итератор

Для этого нужно объявить и вызвать функцию-генератор

Мы объединим два этих действия в одно с помощью **IIFE**

```javascript
pictures.iterator = (
    function* () {
        ...
    }
).call ( pictures )
```

Обратите внимание, что мы вызываем анонимную функцию-генератор в контексте объекта **pictures**

Теперь `this` внутри генератора будет показывать в правильном направлении :ok_hand:
 
Внутри анонимной функции-генератора:

:clipboard: объявим вспомогательную функцию **_moveSlide_**, 

которая будет сдвигать слайд в нужном направлении 

в зависимости от значения второго аргумента **active**

Этот аргумент принимает логическое значение 

Если `true`, то слайд сдвигается в видимую часть страницы, т.е. становится активным

В противном случае слайд "уходит" из видимой зоны

Первым аргументом передается ссылка на сдвигаемый слайд

```javascript
function moveSlide ( slide, active ) {
    slide.style.left = `${ active ? 10 : -100 }%`
    slide.style.right = `${ active ? 10 : 100 }%`
    slide.style.opacity = active ? 1 : 0
}
```

:clipboard: Создадим приватный метод **_getNextPictureNum_**, который будет возвращать индекс следующего элемента массива **pictures**

Обратите внимание, что этой функции мы заранее "закрепляем" контекст вызова с помощью метода `bind()`, поскольку в противном случае это будет глобальный контекст 

```javascript
let getNextPictureNum = function () {
    return this.currentPicture < this.length - 1 ?
        this.currentPicture + 1 : 0
}.bind ( this )
```

:clipboard: Теперь создадим массив их двух слайдов

```javascript
const slides = [
    this.createSlide (),
    this.createSlide ()
]
```

Для этого, как видите, мы воспользовались публичным методом **_createSlide_** массива **pictures**

:clipboard: Объявим еще пару переменных

* приватное свойство **_currentSlide_** будет индексом активного слайда
* публичное свойство **_currentPicture_** будет содержать индекс текущего элемента массива **pictures**

```javascript
let currentSlide = 0
this.currentPicture = 0
```

:clipboard: Осталось совсем немного - написать сам протокол итерирования

В процессе итерирования слайды `slides[0]` и `slides[1]` будут постоянно меняться местами

т.е. активным текущим слайдом по очереди будет то `slides[0]`, то `slides[1]`

вычислять индекс неактивного слайда для смены слайдов мы будем так:

```javascript
Math.abs ( currentSlide - 1 )
```

Итак, протокол итерирования:

```javascript
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
```

###### Полный код генератора

```javascript
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
```

###### Запуск 

```javascript
pictures.iterator.next()
```

***

| [:rewind:](generators-and-iterators) |
|-|