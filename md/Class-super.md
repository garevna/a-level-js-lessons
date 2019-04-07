[footer]: https://github.com/garevna/js-course/raw/master/images/a-level-ico.png?raw=true
[ico20]: https://raw.githubusercontent.com/garevna/a-level-js-lessons/master/ico/a-level-20.png
[ico25]: https://raw.githubusercontent.com/garevna/a-level-js-lessons/master/ico/a-level-25.png
[hw-30]: https://raw.githubusercontent.com/garevna/a-level-js-lessons/master/ico/briefcase-30.png
[cap-30]: https://raw.githubusercontent.com/garevna/a-level-js-lessons/master/ico/coffee-30.png
[warn-25]: https://raw.githubusercontent.com/garevna/a-level-js-lessons/master/ico/warning-25.png
[link-25]: https://raw.githubusercontent.com/garevna/a-level-js-lessons/master/ico/link-25.png
[err-20]: https://raw.githubusercontent.com/garevna/a-level-js-lessons/master/ico/no_entry-20.png
[err-25]: https://raw.githubusercontent.com/garevna/a-level-js-lessons/master/ico/no_entry-25.png
[err-30]: https://raw.githubusercontent.com/garevna/a-level-js-lessons/master/ico/no_entry-30.png

| [:rewind:](Class#es6--ecmascript-2015-) |
|-|

###### Наследование

### super

Методы родительского класса доступны в дочернем классе посредством ключевого слова **`super`**

Расширим метод **drawLine**  родительского класса, <br/>
добавив аргумент **_lineWidth_**  ( толщину линии )

Для этого определим "расширенный" метод  **drawLine** <br/>
внутри дочернего класса,<br/>
который будет вызывать  метод  **drawLine**  <br/>
родительского класса<br/>
с помощью ключевого слова super:
```javascript
super.drawLine ( points, lineColor )
```
Теперь код будет таким:
```javascript
const Canvas = class {
    constructor () {
        this.canvas = document.createElement ( 'canvas' )
        document.body.appendChild ( this.canvas )
        this.canvas.style.border = "1px solid #000000"
        this.area = this.canvas.getContext ( "2d" )
    }
    drawLine ( points ) {
        this.area.beginPath()
        this.area.moveTo( points[0].x, points[0].y )
        this.area.lineTo( points[1].x, points[1].y )
        this.area.stroke()
    }
}

class ExtendedCanvas extends Canvas {
    drawLine ( points, lineColor, lineWidth ) {
        this.area.lineWidth = lineWidth || 3
        this.area.strokeStyle = lineColor
        super.drawLine ( points )
    }
}
```
Создадим экземпляр дочернего класса:
```javascript
let newCanvas = new ExtendedCanvas ()
```
и вызовем его метод  **drawLine**
```javascript
newCanvas.drawLine (  [ { x: 20, y: 20 }, { x: 300, y: 400 } ], "#ffaa00", 10 )
```
Теперь линия будет отрисовываться заданной толщины

***

### super ()

В предыдущих примерах мы не использовали конструктор наследующего класса

    ☝ Когда нужно добавить свойства
     экземпляру наследующего класса,
     без конструктора это сделать невозможно

✋ Первое, что нужно выполнить в конструкторе наследующего класса -
      вызвать метод  **super ()**
```javascript
const Canvas = class {
    constructor () {
        this.canvas = document.createElement ( 'canvas' )
        document.body.appendChild ( this.canvas )
        this.area = this.canvas.getContext ( "2d" )
    }
    drawLine ( points ) {
        this.area.beginPath()
        this.area.moveTo( points[0].x, points[0].y )
        this.area.lineTo( points[1].x, points[1].y )
        this.area.stroke()
    }
}

class ExtendedCanvas extends Canvas {
    constructor () {
        super ()
        this.history = []
    }
}
```
В противном случае будет сгенерировано исключение:
```
⛔️ Uncaught ReferenceError:
Must call super constructor in derived class before accessing 'this' or returning from derived constructor
```

### super в литералах объектов

Ключевое слово  `super`  можно использовать без объявления классов<br/>
Он является просто ссылкой на прототип объекта<br/>
Поэтому можно использовать его для доступа к свойствам и методам объекта-прототипа

В примерах далее мы будем использовать объекты, объявленные в литеральной форме<br/>
В качестве прототипа объекта  **person**  будет выступать объект  **human**<br/>
Назначать объект  **human**  прототипом объекта  **person** мы будем с помощью метода
```javascript
Object.setPrototypeOf ( person, human )
```
После такого назначения внутри объекта  **person**  <br/>
свойства и методы объекта  **human** будут доступны <br/>
с помощью ключевого слова  **`super`**

В следующем примере вызовем методы  **_place ()_**  и  **_say ()_**  <br/>
прототипа **human**  <br/>
в методах   **_getPlace ()_**  и  **_talk ()_**  <br/>
объекта  **person**  <br/>
с помощью ключевого слова **`super`** :

###### :coffee: :one:
```javascript
let human = {
    place () {
        var x = document.createElement ( "p" )
        document.body.appendChild ( x )
        x.id = "demo"
        return x
    },
    say ( text ) {
        this.place.innerHTML = text
    }
}

let person = {
    getPlace () { this.place = super.place () },
    talk ( text ) {
        super.say ( text )
    }
}

Object.setPrototypeOf ( person, human )
person.getPlace ()
person.talk ( "привет!" )
```
###### :coffee: :two:

✍ В этом примере метод  **_place()_**  прототипа  ( объекта  **human** ) <br/>
проверяет наличие элемента с  `id === "demo"`,  <br/>
и если такой элемент найден, <br/>
возвращает ссылку на него, <br/>
в противном случае создает такой элемент, <br/>
добавляет его на страницу и возвращает ссылку на него

✍ Объект  person  изначально не имеет свойства  **_place_**, <br/>
но имеет собственный метод  **_getPlace ()_**,  <br/>
который создает такое свойство,  <br/>
вызывая с помощью ключевого слова  **`super`**  <br/>
метод   **_place()_**  прототипа  ( объекта  **human** ), <br/>
и присваивая возвращенное этим методом <br/>
значение собственному свойству  **_place_**

✍ Метод  **_talk( `text` )_**  объекта  **person**  <br/>
вызывает метод  **_getPlace()_**<br/>
до вызова метода **_say ()_**  <br/>
прототипа  ( объекта  **human** )

```javascript
let human = {
    place: () =>
        document.getElementById ( "demo" ) ?
        document.getElementById ( "demo" ) :
        document.body.appendChild (
            document.createElement ( "p" )
        ).id = "demo",

    say ( text ) {
        this.place.innerHTML = text
    }
}

let person = {
    getPlace () { this.place = super.place() },
    talk ( text ) {
        this.getPlace ()
        super.say ( text )
    }
}

Object.setPrototypeOf ( person, human )

person.talk ( "привет!" )
setTimeout ( () => person.talk ( "Hello, baby!" ), 2000 )
```

☝ Обратите внимание, <br/>
что при объявлении метода   **_place()_**  объекта  **human**  <br/>
мы использовали стрелочную функцию, <br/>
а при объявлении метода  say  ее использовать нельзя, <br/>
поскольку внутри методов, <br/>
объявленных с помощью стрелочных функций,  <br/>
контектом вызова будет глобальный объект  window

###### :coffee: :three:

В этом примере свойство  **_place_**  прототипа ( объекта  **human** )  <br/>
уже не является методом<br/>
Его значение ( ссылка на элемент ) <br/>
будет установлено при инициализации объекта  **human**

В этом примере демонстрируется взаимозаменяемость <br/>
ключевых слов  **`super`**  и  **`this`**  <br/>
при  ссылках на свойства прототипа

👉 Метод   **_talk()_**  объекта  **person**  <br/>
вызывает  метод  **_say ()_**  прототипа <br/>
без ключевого слова  **`super`**<br/>
( с ключевым словом  **`this`** )

👉 Когда метод  **_say()_**  в объекте  **person**  не будет найден, <br/>
поиск будет продолжен в прототипе, <br/>
где и будет благополучно найден

👉 Внутри метода   **_say()_**, вызванного из метода **_talk()_**, <br/>
контекстом вызова будет объект  **person**<br/>
( т.е.  **`this`**  будет  указывать на объект  person )<br/>
но тем не менее ссылка   **`this`._place_**  <br/>
будет благополучно разрешена по цепочке прототипов
```javascript
let human = {
    place: ( () => {
        if ( document.getElementById ( "demo" ) )
            return document.getElementById ( "demo" )
        var x = document.body.appendChild (
            document.createElement ( "p" )
        )
        x.id = "demo"
        return x
    })(),
    say ( text ) {
        this.place.innerHTML = text
    }
}

let person = {
    talk ( text ) {
        this.say ( text )
    }
}

Object.setPrototypeOf ( person, human )
person.talk ( "привет!" )
setTimeout ( () => person.talk ( "Hello, baby!" ), 2000 )
```
👉 Если же имена свойств  объекта и его прототипа совпадают, <br/>
и нужно вытянуть именно свойство прототипа, <br/>
а не собственное свойство объекта, <br/>
то для унаследованных свойств можно использовать  `__proto__`<br/>
```javascript
let person = {
        say ( text ) { console.log ( text ) },
        talk ( text ) {
                this.__proto__.say ( text )
        }
}
```
👉 Очевидно, в таком случае код:
```javascript
super.say ( text )
```
короче, чем
```javascript
this.__proto__.say ( text )
```
а результат идентичный 😉

***

###### :coffee: :four:
👉 В этом примере мы используем геттеры и сеттеры свойств объектов

Для вычисляемых свойств это наиболее корректный способ доступа к их значениям

```javascript
let human = {
    id: "",
    get place () {
        if ( this.id ) return document.getElementById ( this.id )
    },
    set place ( newId ) {
        this.id = newId
        if ( document.getElementById ( this.id ) ) return
        var x = document.createElement ( "p" )
        document.body.appendChild ( x )
        x.id = this.id
    },
    get message () {
        return this.place.innerHTML
    },
    set message ( val ) {
        this.place.innerHTML = val
    }
}

let person = {
    talk ( text ) {
        super.message = text
    },
    get place () {
        return super.place
    },
    set place ( newId ) {
        super.place = newId
    }
}

Object.setPrototypeOf ( person, human )
person.place = "demo"
person.talk ( "привет!" )
setTimeout ( () => person.talk ( "Hello, baby!" ), 2000 )
```
***

| [:rewind:](Class#es6--ecmascript-2015-) |
|-|

_________________________________________________________________________

![](https://github.com/garevna/js-course/raw/master/images/a-level-ico.png?raw=true)
