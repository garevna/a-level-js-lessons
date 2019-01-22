# :mortar_board: Custom elements

## :mortar_board: lifecycle hooks

Кастомные элементы имеют хуки жизненного цикла

#### :pushpin: connectedCallback()

Срабатывает каждый раз при вставке кастомного элемента в DOM

#### :pushpin: disconnectedCallback()

Срабатывает при удалении кастомного элемента

:warning: не сработает при закрытии пользователем вкладки

#### :pushpin: attributeChangedCallback()

Срабатывает каждый раз при изменении значений отслеживаемых html-атрибутов элемента

```javascript
attributeChangedCallback( attrName, oldVal, newVal )
```

Чтобы указать, какие html-атрибуты нужно отслеживать, используется геттер статического свойства **`observedAttributes`**

имена отслеживаемых атрибутов передаются массивом:

```javascript
static get observedAttributes() {
    return [ 'size', 'color']
}
```

Браузер вызывает **`attributeChangedCallback()`** при изменении значения любого атрибута, включенного в массив отслеживаемых атрибутов **_`observedAttributes`_**

:coffee: :one:

```javascript
class CircleElement extends HTMLElement {
    constructor() {
        super()
        this.shadow = this.attachShadow ( { mode: 'open' } )
        this.shadow.appendChild (
            document.createElement ( "div" )
        )
    }
    connectedCallback() {
        this.createStyle ()
    }
    static get observedAttributes() {
        return [ 'size', 'color']
    }
    attributeChangedCallback( attrName, oldVal, newVal ) {
        this.setStyle ()
    }
    createStyle () {
        this.shadowStyles = document.createElement ( "style" )
        this.shadow.appendChild ( this.shadowStyles )
        this.shadowStyles.appendChild ( document.createTextNode ( `` ) )
    }
    setStyle () {
        this.shadowStyles.textContent = `
            div {
                width: ${this.getAttribute("size")}px;
                height: ${this.getAttribute("size")}px;
                border: inset 1px;
                border-radius: 50%;
                box-shadow: 3px 3px 5px #00000090;
                background-color: ${this.getAttribute("color")};
            }
            div:hover {
                box-shadow: inset 3px 3px 5px #00000090;
            }
        `
    }
}

customElements.define ( "circle-element", CircleElement )
```

Благодаря хукам **`connectedCallback`** и **`attributeChangedCallback`** теперь абсолютно все равно, когда будут вставлены кастомные элементы на страницу

```javascript
for ( var x of [ "blue", "red", "green", "yellow" ] ) {
    let elem = document.body.appendChild (
        document.createElement ( 'circle-element' )
    )
    elem.setAttribute ( "color", x )
    elem.setAttribute ( "size", Math.round ( Math.random() * 200 ) )
}
```

Но это не главное

Важный момент заключается в том, что при динамическом изменении значений атрибутов без хука **`attributeChangedCallback`** внешний вид кастомного элемента не изменится

Однако если такой хук есть в определении класса, то результатом выполнения кода

```javascript
document.getElementsByTagName ( "circle-element" )
    .setAttribute ( "color", "magenta" )
```

будет изменение внешнего вида ( цвета фона ) элемента

Аналогично кастомный элемент отреагирует на изменение значения атрибута во вкладке **_Elements_**

| [:coffee:](https://repl.it/@garevna/customElements-lifecycle-hooks) Пример в песочнице |
|-|
