## :mortar_board: customElements.whenDefined

###### Возвращает промис

###### Промис будет разрешен тогда, когда элемент, имя которого передано аргументом, будет определен с помощью метода `customElements.define`

***

Используя метод `whenDefined`, можно избежать коллизий, связанных с тем, что элементы будут вставлены после того, как определение компонента состоялось

Если в коде конструктора класса устанавливаются параметры компонента, которые должны быть переданы через атрибуты тега, то эти параметры не получат значений, потому что элементов еще нет и атрибуты, соответственно, отсутствуют

***

Далее в примерах мы будем вставлять кастомные элементы `<circle-element>` на страницу

Для этого мы будем использовать веб-компонент **`CircleElement`**

###### :pencil: CircleElement

```javascript
class CircleElement extends HTMLElement {
    constructor() {
        super()
        this.shadow = this.attachShadow ( { mode: 'open' } )
        this.shadow.appendChild (
            document.createElement ( "div" )
        )
    }
    setStyle () {
        this.shadow.appendChild (
            ( () => {
                let style = document.createElement ( "style" )
                style.appendChild (
                    ( () => {
                        let css = document.createTextNode(
                          `
                              div {
                                  width: ${this.size}px;
                                  height: ${this.size}px;
                                  border: inset 1px;
                                  border-radius: 50%;
                                  box-shadow: 3px 3px 5px #00000090;
                                  background-color: ${this.backColor};
                              }
                              div:hover {
                                  box-shadow: inset 3px 3px 5px #00000090;
                              }
                          `
                        )
                        return css
                    })()
                )
                return style
            })()
        )
    }
}

customElements.define ( "circle-element", CircleElement )
```

Обратите внимание, что у веб-компонента **`CircleElement`** определен метод **_`setStyle()`_**

Мы не вызываем сразу этот метод при определении компонента

Почему?

Потому, что он использует атрибуты **_`size`_** и **_`backColor`_**  кастомного элемента `<circle-element>`

а когда будут вставлены элементы `<circle-element>` на страницу - мы не знаем

соответственно, значения их атрибутов **_`size`_** и **_`backColor`_** могут быть еще не определены

В случае, если элементы уже заранее вставлены в разметке:

```html
<body>
    <circle-element size="150" backColor="green"></circle-element>
    <circle-element size="100" backColor="orange"></circle-element>
    <circle-element size="50" backColor="blue"></circle-element>
</body>
```

и после этого определяется веб-компонент, проблем не возникнет - 

можно прямо в веб-компоненте **`CircleElement`** вызвать метод **_`setStyle()`_**

Но если элементы будут вставлены после того, как отработал вышеприведенный код веб-компонента, нам придется для каждого элемента вызывать метод **_`setStyle()`_**

Это тоже не сложно, если мы точно знаем, что определение веб-компонента уже произошло к моменту вставки элементов

:bangbang: НО!

Если мы не знаем, когда будут вставлены элементы, и что произойдет раньше - определение веб-компонента **`CircleElement`** или вставка кастомных элементов `<circle-element>` - возникнет проблема:

* мы не можем обратиться к методу **_`setStyle()`_**, не будучи уверены в том, что такой метод уже определен ( т.е. веб-компонент уже объявлен );
* мы не можем вызвать метод **_`setStyle()`_** при определении компонента, поскольку не знаем, вставлены ли кастомные элементы на страницу и определены ли их атрибуты 

***

### :coffee: 1

В этом примере определение компонента происходит раньше, чем соответствующие кастомные элементы будут вставлены на страницу

Когда вызывается метод `setStyle()`, свойства **`this.size`** и **`this.backColor`** не определены

```javascript
class CircleElement extends HTMLElement {
    constructor() {
        super()
        this.shadow = this.attachShadow ( { mode: 'open' } )
        this.shadow.appendChild (
            document.createElement ( "div" )
        )
        this.setStyle()
    }
    setStyle () {
        ...
    }
}

customElements.define ( "circle-element", CircleElement )
```

Поэтому после вставки элементов на страницу

```javascript
for ( var x of [ "blue", "red", "green", "yellow" ] ) {
    let elem = document.body.appendChild (
        document.createElement ( 'circle-element' )
    )
    elem.backColor = x
    elem.size = Math.round ( Math.random() * 200 )
}
```

они будут иметь вот такие значения атрибутов стиля:

```console
▼ #shadow-root ( open )
    <div></div>
    <style>
        div {
            width: undefinedpx;
            height: undefinedpx;
            border: inset 1px;
            border-radius: 50%;
            box-shadow: 3px 3px 5px #00000090;
            background-color: undefined;
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
    elem.backColor = x
    elem.size = Math.round ( Math.random() * 200 )
    customElements.whenDefined ( "circle-element" )
        .then (
            () => elem.setStyle ()
        )
}
```

***

### [:coffee: 2](https://garevna.github.io/js-samples/#22)

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

Обратите внимание, 

что вызов асинхронной функции-генератора происходит 

с передачей ей контекста **`elems`** 

( методом `call ()` )

Внутри асинхронной функции-генератора мы дополнительно объявим две вспомогательные функции:

* addElem
* promise

Опишем их подробнее

###### :pencil: addElem

Функция **`addElem`** 

* получает в аргументах значения **_`size`_** и **_`color`_**
* вставляет кастомный элемент на страницу и устанавливает ему атрибуты **_`size`_** и **_`backColor`_** ( используя полученные в аргументах значения )
* возвращает ссылку на вставленный элемент

```javascript
const addElem = ( size, color ) => {
    let elem = document.body.appendChild (
        document.createElement ( "circle-element" )
    )
    elem.size = size
    elem.backColor = color
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
            elem.size = size
            elem.backColor = color

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
