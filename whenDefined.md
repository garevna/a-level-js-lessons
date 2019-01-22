## :mortar_board: customElements.whenDefined

###### Возвращает промис

###### Промис будет разрешен тогда, когда элемент, имя которого передано аргументом, будет определен с помощью метода `customElements.define`

***

Используя метод `whenDefined`, можно избежать коллизий, связанных с тем, что элементы будут вставлены после того, как определение компонента состоялось

( хотя значительно проще это сделать с помощью [_хуков жизненного цикла_](web-components-hooks) компонента )

Если в коде конструктора класса устанавливаются параметры компонента, которые должны быть переданы через атрибуты тега, то эти параметры не получат значений, потому что элементов еще нет и атрибуты, соответственно, отсутствуют

Рассмотрим простенький пример

### :coffee: 1

Пусть наш веб-компонент будет таким:

###### :pencil: defineCustomElement

```javascript
function defineCustomElement () {

    class SampleElement extends HTMLElement {
        constructor () {
            super ()
            this.style.color = this.getAttribute ( "color" )
        }
    }

    customElements.define (
        'sample-element',
        SampleElement
    )
}
```

Код вставки кастомных элементов, для примера, будет таким:

###### :pencil: insertCustomElements

```javascript
finction insertCustomElements () {
    for ( let clr of [ "red", "green", "blue" ] ) {
        let elem = document.body.appendChild (
            document.createElement ( 'sample-element' )
        )
        elem.innerHTML = "<h3>test</h3>"
        elem.setAttribute ( "color", clr )
    }
}
```

Итак, у нас две функции

* **`defineCustomElement`**
* **`insertCustomElements`**

Предположим, мы вызовем их в таком порядке:

```javascript
insertCustomElements ()
defineCustomElement ()
```

и на странице будут окрашенные в разные цвета элементы

Если же мы вызовем эти функции в другом порядке:

```javascript
defineCustomElement ()
insertCustomElements ()
```

то текст всех элементов будут дефолтным ( черным )

Чтобы избежать таких коллизий, воспользуемся методом **`customElements.whenDefined`**:

###### :pencil: insertCustomElements

```javascript
function insertCustomElements () {
    for ( let clr of [ "red", "green", "blue" ] ) {
        let elem = document.body.appendChild (
            document.createElement ( 'sample-element' )
        )
        elem.innerHTML = "<h3>test</h3>"
        elem.setAttribute ( "color", clr )

        customElements.whenDefined ( "sample-element" )
            .then ( () => elem.setStyle () )
    }
}
```

Теперь элементы будут окрашиваться как надо независимо от порядка вызова функций **`defineCustomElement()`** и 
**`insertCustomElements()`**

:warning: Особенно важно это при асинхронной вставке кастомных элементов на страницу

***

### :coffee: 2

Далее в примерах мы будем использовать веб-компонент **`CircleElement`**

###### :pencil: CircleElement

```javascript
class CircleElement extends HTMLElement {
    constructor() {
        super()
        this.shadow = this.attachShadow ( { mode: 'open' } )
        this.shadow.appendChild (
            document.createElement ( "div" )
        )
        this.shadowStyle = document.createElement ( "style" )
        this.shadow.appendChild ( this.shadowStyle )
        this.shadowStyle.textContent = ''
        this.setStyle ()
    }
    
    setStyle () {
        this.shadowStyle.textContent = `
             div {
                 width: ${ this.getAttribute ( "size" ) }px;
                 height: ${ this.getAttribute ( "size" ) }px;
                 border: inset 1px;
                 border-radius: 50%;
                 box-shadow: 3px 3px 5px #00000090;
                 background-color: ${ this.getAttribute ( "color" ) };
            }
            div:hover {
                box-shadow: inset 3px 3px 5px #00000090;
            }
        `
    }
}

customElements.define ( "circle-element", CircleElement )
```

Обратите внимание, что у веб-компонента **`CircleElement`** определен метод **_`setStyle()`_**

Этот метод использует атрибуты **_`size`_** и **_`color`_**  кастомного элемента `<circle-element>`,

но мы не знаем, когда будут вставлены элементы `<circle-element>` в DOM

Т.е. значения их атрибутов **_`size`_** и **_`color`_** могут быть еще не определены

***

В случае, если элементы уже заранее вставлены в разметке:

| [:coffee:](https://repl.it/@garevna/whenDefined-1) `Пример в песочнице` |
|-|

```html
<body>
    <circle-element size="150" color="green"></circle-element>
    <circle-element size="100" color="orange"></circle-element>
    <circle-element size="50" color="blue"></circle-element>
</body>
```

и после этого определяется веб-компонент, проблем не возникнет - 

можно прямо в конструкторе класса **`CircleElement`** вызвать метод **_`setStyle()`_**

**

Но если элементы будут вставлены после того, как отработал вышеприведенный код веб-компонента, нам придется для каждого элемента вызывать метод **_`setStyle()`_**

Это тоже не сложно, если мы точно знаем, что определение веб-компонента уже произошло к моменту вставки элементов

```javascript
let collection = document.getElementsByTagName ( "circle-element" )
for ( let elem of collection ) elem.setStyle()
```

***

:bangbang: НО!

Если мы не знаем, когда будут вставлены элементы, и что произойдет раньше - определение веб-компонента **`CircleElement`** или вставка кастомных элементов `<circle-element>` - возникнет проблема:

* мы не можем обратиться к методу **_`setStyle()`_**, не будучи уверены в том, что такой метод уже определен ( т.е. веб-компонент уже объявлен );
* мы не можем вызвать метод **_`setStyle()`_** в конструкторе компонента, поскольку не знаем, вставлены ли кастомные элементы на страницу и определены ли их атрибуты 

***

### :coffee: 2

В этом примере определение компонента происходит раньше, чем соответствующие кастомные элементы будут вставлены на страницу

Когда вызывается метод `setStyle()`, значения атрибутов **`size`** и **`color`** не определены

```javascript
class CircleElement extends HTMLElement {
    constructor() {
        super()
        this.shadow = this.attachShadow ( { mode: 'open' } )
        this.shadow.appendChild (
            document.createElement ( "div" )
        )
        this.createStyle ()
        this.setStyle ()
    }
    ...
}

customElements.define ( "circle-element", CircleElement )
```

Поэтому после вставки элементов на страницу

```javascript
for ( var x of [ "blue", "red", "green", "yellow" ] ) {
    let elem = document.body.appendChild (
        document.createElement ( 'circle-element' )
    )
    elem.setAttribute ( "color", x )
    elem.setAttribute ( "size", Math.round ( Math.random() * 200 ) )
}
```

они будут иметь вот такие значения атрибутов стиля:

```console
▼ #shadow-root ( open )
    <div></div>
    <style>
        div {
            width: nullpx;
            height: nullpx;
            border: inset 1px;
            border-radius: 50%;
            box-shadow: 3px 3px 5px #00000090;
            background-color: null;
        }
        div:hover {
            box-shadow: inset 3px 3px 5px #00000090;
        }
    </style>
```

Добавим "магическое заклинание" при вставке элементов:

```javascript
customElements.whenDefined ( "circle-element" )
    .then (
        () => elem.setStyle ()
    )
```

и теперь кастомные элементы примут нормальный вид:

```javascript
for ( var x of [ "blue", "red", "green", "yellow" ] ) {
    let elem = document.body.appendChild (
        document.createElement ( 'circle-element' )
    )
    elem.setAttribute ( "color", x )
    elem.setAttribute ( "size", Math.round ( Math.random() * 200 ) )

    customElements.whenDefined ( "circle-element" )
        .then (
            () => elem.setStyle ()
        )
}
```

***

### [:coffee:](https://garevna.github.io/js-samples/#22) Асинхронная вставка кастомных элементов

Разбремся с ситуацией, когда кастомные элементы вставляются на страницу асинхронно

Предположим, атрибуты кастомных элементов описаны в массиве:

```javascript
const elems = [
    {
        size: Math.round ( Math.random() * 200 ),
        backColor: "red"
    },
    {
        size: Math.round ( Math.random() * 200 ),
        backColor: "orange"
    },
    {
        size: Math.round ( Math.random() * 200 ),
        backColor: "yellow"
    },
    {
        size: Math.round ( Math.random() * 200 ),
        backColor: "green"
    },
    {
        size: Math.round ( Math.random() * 200 ),
        backColor: "blue"
    }
]
```

Вставка кастомных элементов на страницу будет осуществляться с помощью асинхронного итератора

```javascript
elems.iterator = (
    async function* () {
        ...
    }
).call ( elems )
```

Обратите внимание, что вызов асинхронной функции-генератора происходит 

с передачей ей контекста **`elems`** 

( методом `call ()` )

Внутри асинхронной функции-генератора мы дополнительно объявим две вспомогательные функции:

* addElem
* promise

Опишем их подробнее

###### :pencil: addElem

Функция **`addElem`** 

* получает в аргументах значения **_`size`_** и **_`color`_**
* вставляет кастомный элемент на страницу и устанавливает ему атрибуты **_`size`_** и **_`color`_** ( используя полученные в аргументах значения )
* возвращает ссылку на вставленный элемент

```javascript
const addElem = ( size, color ) => {
    let elem = document.body.appendChild (
        document.createElement ( "circle-element" )
    )
    elem.setAttribute ( "color", color )
    elem.setAttribute ( "size", size )
    return elem
}
```

###### :pencil: promise

Функция **`promise`** 

* получает значения **_`size`_** и **_`color`_**
* возвращает промис, который асинхронно вызывает функцию **`addElem`** с полученными аргументами

```javascript
const promise = ( size, color ) =>
    new Promise (
        resolve =>
            setTimeout (
                 () => resolve ( addElem ( size, color ) ),
                 Math.round ( Math.random () * 5000 )
            )
    )
```

Теперь можно описать код самого асинхронного генератора

( внутри функции-генератора `this` будет ссылкой на **`elems`** )

```javascript
let len = this.length
while ( len --> 0 ) {
    let elem = await promise ( this[len].size, this[len].backColor )
    customElements.whenDefined( 'circle-element' )
        .then ( () => elem.setStyle () )
    yield elem
}
```

Итак, этот код итерирует `this` ( т.е. **`elems`** )

* на каждой итерации происходит вызов функции **`promise`**
* перед вызовом **`promise`** стоит ключевое слово `await`, т.е. в этом месте итератор дождется, когда **`promise`** вернет результат, и поместит этот результат в переменную **_`elem`_**
* теперь, когда элемент создан и вставлен на страницу, можно вызывать метод `customElements.whenDefined`
* последнее - с помощью ключевого слова `yield` генератор говорит итератору вернуть **_`elem`_**

Теперь можно собрать эти кусочки воедино и записать полный код создания итератора:

```javascript
elems.iterator = (
    async function* () {
        const addElem = ( size, color ) => {
            let elem = document.body.appendChild (
                document.createElement ( "circle-element" )
            )
            elem.setAttribute ( "color", color )
            elem.setAttribute ( "size", size )

            return elem
        }
        const promise = ( size, color ) =>
            new Promise (
                resolve =>
                    setTimeout (
                        () => resolve ( addElem ( size, color ) ),
                        Math.round ( Math.random () * 5000 )
                    )
            )
        let len = this.length
        while ( len --> 0 ) {
            let elem = await promise ( this[len].size, this[len].backColor )
            customElements.whenDefined( 'circle-element' )
                .then (
                    () => elem.setStyle ()
                )
            yield elem
        }
    }
).call ( elems )
```

Осталось совсем немного - вызов асинхронного итератора должен быть также асинхронным:

```javascript
async function iterateElements () {
    for ( var item of elems )
        await elems.iterator.next()
}

iterateElements ()
```

Теперь совершенно не важно, когда именно будет определен веб-компонент

Метод `customElements.whenDefined()` гарантирует вызов метода **`setStyle()`** тогда, когда этот метод уже наверняка существует
