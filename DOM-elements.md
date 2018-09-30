# :mortar_board: Элементы DOM 

### Свойства 

##### ✅ **`childNodes`**

`Объект` [**`NodeList`**](nodeTypes "Типы узлов дерева DOM")

| [:coffee: 1](childNodes-sample-1) |
|-|

[🔗 w3schools](https://www.w3schools.com/jsref/prop_node_childnodes.asp)
***
##### ✅ **`children`**

`Объект` **`HTMLCollection`**

##### ✅ **`parentNode`**

`Ссылка на родительский элемент ( контейнер, в котором находится элемент )`

:coffee: 2
```html
<body>
    <div id="demo">
        <section id="section"></section>
        <figure></figure>
    </div>
</body>
```
```javascript
var section = document.querySelector ( "#section" )
console.dir ( section.parentNode )  // ► div#demo
```

## Методы

##### ✅ appendChild()

Добавляет элементу дочерний элемент

:coffee: 3
```html
<body>
    <div id="demo">
        <section></section>
        <figure></figure>
    </div>
</body>
```
```javascript
var section = document.createElement ( "section" )
section.innerHTML = "Hello"
document.querySelector ( "#demo" ).appendChild ( section )
```
Результат:
```html
<body>
    <div id="demo">
        <section>Hello</section>
    </div>
</body>
```

:coffee: 4

```javascript
var style = document.createElement ( 'style' )
document.head.appendChild ( style )
style.innerText = `p { color: red; }`

style.sheet.cssRules[0]          // объект
style.sheet.cssRules[0].cssText  // "p { color: red; }"

style.appendChild (
    document.createTextNode (
        `div { color: blue; }`
    ) 
)
```
Результат:
```html
<head>
    <style>
        p { color: red; }
        div { color: blue; }
    </style>
</head>
```

##### ✅ removeChild()

Удаление элемента

:warning: `Удалить элемент может только его непосредственный родитель`

:coffee: 5
```html
<body>
    <div id="demo">
        <section id="section"></section>
        <figure class="figure"></figure>
    </div>
</body>
```
```javascript
var section = document.querySelector ( "#section" )
var removed = section.parentNode.removeChild ( section )
console.dir ( removed )  // ► section#section

var figure = document.querySelector ( ".figure" )
figure.appendChild ( removed )
```
```html
<body>
    <div id="demo">
        <figure class="figure">
            <section id="section"></section>
        </figure>
    </div>
</body>
```

##### ✅ insertBefore()

:coffee: 6
```javascript
function addElement ( tagName, container ) {
    var _container = 
        container && container.nodeType === 1 ? 
           container : document.body
    return _container.appendChild (
         document.createElement ( tagName )
    )
}

var main = addElement ( "main" )
var section = addElement ( "section", main )
var figure = addElement ( "figure", main )

main.insertBefore ( document.createElement ( "p" ), section )
```
##### ✅ insertAdjacentHTML()

:coffee: 7

Используя функцию addElement из предыдущего примера, вставим на страницу элементы _`main`_, _`section`_ и _`figure`_:

```html
<body>
    <main>
        <section></section>
        <figure></figure>
    </main>
</body>
```
А теперь выполним следующий код в консоли:
```javascript
section.insertAdjacentHTML ( `beforeBegin`, `<p>Hello</p>` )
section.insertAdjacentHTML ( `afterBegin`, `<p>Let's work</p>` )
section.insertAdjacentHTML ( `beforeEnd`, `<p>I've finished</p>` )
section.insertAdjacentHTML ( `afterEnd`, `<p>Bye</p>` )
```
Результат во вкладке Elements:
```html
<body>
    <main>
        <p>Hello</p>
        <section>
            <p>Let's work</p>
            <p>I've finished</p>
        </section>
        <p>Bye</p>
        <figure></figure>
    </main>
</body>
```