# ![ico-30 study] Document Object Model ( DOM )

_____________________

## ![ico-25 icon] Методы элементов DOM

### ![ico-20 icon] appendChild()

Добавляет элементу дочерний элемент

![ico-25 cap] ** 1**

~~~html
<body>
    <div id="demo">
        <section></section>
        <figure></figure>
    </div>
</body>
~~~

~~~javascript
var section = document
    .createElement ( "section" )
section.innerHTML = "Hello"
document.querySelector ( "#demo" )
    .appendChild ( section )
~~~

Результат:

~~~html
<body>
    <div id="demo">
        <section>Hello</section>
    </div>
</body>
~~~

_______________________

![ico-25 cap] ** 2**

~~~javascript
var style = document.createElement ( 'style' )
document.head.appendChild ( style )
style.textContent = `p { color: red; }`

style.sheet.cssRules[0]          // объект
style.sheet.cssRules[0].cssText  // "p { color: red; }"

style.appendChild (
    document.createTextNode (
        `div { color: blue; }`
    )
)
~~~

Результат:

~~~html
<head>
    <style>
        p { color: red; }
        div { color: blue; }
    </style>
</head>
~~~

_______________________________________

![ico-25 cap] ** 3**

~~~javascript
var script = document.createElement ( 'script' )
script.appendChild (
    document.createTextNode (
        `alert ( "Hello" )`
    )
)
document.body.appendChild ( script )
~~~

_________________________________________

### ![ico-20 icon] removeChild()

Удаление элемента

Метод возвращает ссылку на удаленный элемент

![ico-20 warn] ~Удалить элемент этим методом может только его непосредственный родитель~

____________________________

![ico-25 cap] ** 4**

~~~html
<body>
    <div id="demo">
        <section id="section"></section>
        <figure class="figure"></figure>
    </div>
</body>
~~~

~~~javascript
var section = document.querySelector ( "#section" )
var removed = section.parentNode.removeChild ( section )
console.dir ( removed )  // ► section#section

var figure = document.querySelector ( ".figure" )
figure.appendChild ( removed )
~~~

~~~html
<body>
    <div id="demo">
        <figure class="figure">
            <section id="section"></section>
        </figure>
    </div>
</body>
~~~

_______________________________

### ![ico-20 icon] insertBefore()

![ico-25 cap] ** 5**

~~~javascript
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
~~~

**Result**

~~~html
<body>
    <main>
        <p></p>
        <section></section>
        <figure></figure>
    </main>
</body>
~~~

_____________________________________________

### ![ico-20 icon] insertAdjacentHTML()

![ico-25 cap] ** 6**

Вставим в разметку элементы _~main~_, _~section~_ и _~figure~_ следующим образом:

~~~html
<body>
    <main>
        <section></section>
        <figure></figure>
    </main>
</body>
~~~

А теперь выполним следующий код в консоли:

~~~javascript
var section = document.body.querySelector( "section" )
section.insertAdjacentHTML ( "beforeBegin", `<p>beforeBegin</p>` )
section.insertAdjacentHTML ( "afterBegin", `<p>afterBegin</p>` )
section.insertAdjacentHTML ( "beforeEnd", `<p>beforeEnd</p>` )
section.insertAdjacentHTML ( "afterEnd", `<p>afterEnd</p>` )
~~~

Результат во вкладке Elements:

~~~html
<body>
    <main>
        <p>beforeBegin</p>
        <section>
            <p>afterBegin</p>
            <p>beforeEnd</p>
        </section>
        <p>afterEnd</p>
        <figure></figure>
    </main>
</body>
~~~

______________________________________________

### ![ico-20 icon] insertAdjacentElement()

![ico-25 cap] ** 7**

~~~html
<body>
    <main>
        <section id="demo"></section>
        <figure></figure>
    </main>
</body>
~~~

~~~javascript
document.getElementById ( "demo" )
    .insertAdjacentElement(
        "beforeend",
        document.createElement ( "p" )
    )
document.querySelector ( "figure" )
    .insertAdjacentElement(
        "afterend",
        document.createElement ( "h3" )
    )
document.querySelector ( "#demo" )
    .insertAdjacentElement(
        "beforebegin",
        document.createElement ( "img" )
    )
document.getElementsByTagName ( "figure" )[0]
    .insertAdjacentElement(
        "afterbegin",
        document.createElement ( "li" )
    )
~~~

Результат во вкладке Elements:

~~~html
<body>
    <main>
        <img>
        <section id="demo">
            <p></p>
        </section>
        <figure>
            <li></li>
        </figure>
        <h3></h3>
    </main>
</body>
~~~

________________________________________

## ![ico-25 icon] Свойства элементов DOM

____________________________

### ![ico-20 icon] childNodes

Объект **~NodeList~**

![ico-25 cap] ** 8**

~~~html
<body>
    Hello, students!
    <div class="container" title="Контейнер">
       <a class="paragraph"
          href="https://translate.google.com/"
          title="Перевод">Translator
       </a>
       <img src="http://www.abc.net.au/news/image/9154542-1x1-940x940.jpg"
            width="200"
            id="picture"
            class="galleryPicture">
    </div>
    <h1 class="header">Welcome!</h1>
    <p class="paragraph">You study JS</p>
</body>
~~~

Выведем в консоль все дочерние узлы ~document.body~

~~~javascript
document.body.childNodes
~~~

Результат:

~~~console
▼ NodeList(7) [text, div.container, text, h1.header, text, p.paragraph, text]
    0: text
  ► 1: div.container
  ► 2: text
  ► 3: h1.header
  ► 4: text
  ► 5: p.paragraph
  ► 6: text
    length: 7
  ► __proto__: NodeList
~~~

![ico-20 warn] Обратите внимание, что все переводы строк ( и пустые строки ) рассматриваются как тестовые узлы документа

Теперь выведем в консоль все дочерние узлы первого элемента с атрибутом **_title_**

~~~javascript
document.querySelector ( '[ title ]' ).childNodes
~~~

Результат:

~~~console
▼ NodeList(5) [text, a.paragraph, text, img#picture.galleryPicture, text]
    0: text
  ► 1: a.paragraph
  ► 2: text
  ► 3: img#picture.galleryPicture
  ► 4: text
    length: 5
  ► __proto__: NodeList
~~~
___________________

[![ico-20 link] w3schools](https://www.w3schools.com/jsref/prop_node_childnodes.asp)

_________________________________

### ![ico-20 icon] children

Объект **~HTMLCollection~**

___________________________________

### ![ico-20 icon] parentNode

^^Ссылка на родительский элемент ( контейнер, в котором находится элемент )^^

![ico-25 cap] ** 9**

~~~html
<body>
    <div id="demo">
        <section id="section"></section>
        <figure></figure>
    </div>
</body>
~~~

~~~javascript
var section = document.querySelector ( "#section" )
console.dir ( section.parentNode )  // ► div#demo
~~~

_____________________________________________

### ![ico-20 icon] on + тип события

Все свойства элементов DOM, начинающиеся на **~on~**, являются потенциальными ссылками на обработчика соответствующего события

Изначально они имеют значение ~null~

![ico-25 cap] **10**

~~~javascript
var section = document.body.appendChild (
     document.createElement ( 'section' )
)
section.innerHTML = "<h3>Hello</h3>"

for ( var prop in section ) {
     if ( prop.indexOf ( 'on' ) !== 0 ) continue
     console.info ( `Event: ${prop.slice(2)}` )
}
~~~

_____________________________________

### ![ico-20 icon] Дополнительно

![ico-25 cap] **~setAttribute~** | **~getAttribute~**

~~~javascript
document.body.setAttribute ( 'title', 'Hello' )

console.info (
    document.body.getAttribute ( 'title' )
)
~~~

______________________

![ico-25 cap] **~getBoundingClientRect~**

~~~javascript
var div = document.body.appendChild (
    document.createElement ( "div" )
)
div.setAttribute ( 'style', `
    width: 200px;
    height: 200px;
    border: solid 1px blue;
` )

console.info (
    div.getBoundingClientRect ()
)
~~~

**Result:**

~~~console
▼ DOMRect {x: 8, y: 8, width: 202, height: 202, top: 8, …}
    bottom: 210
    height: 202
    left: 8
    right: 210
    top: 8
    width: 202
    x: 8
    y: 8
  ► __proto__: DOMRect
~~~
___________________________

![ico-25 cap] **~backgroundImage~**

~~~javascript
var btn = document.createElement ( 'button' )
btn.innerText = "OK"
btn.style = `
    background-image: url(https://cdn2.iconfinder.com/data/icons/user-23/512/User_Yuppie_2.png);
    background-size: contain;
    background-repeat: no-repeat;
    background-position: left center;
    padding: 5px 10px 5px 30px;
`
document.body.appendChild ( btn )
~~~

_________________________________________

[![ico-30 hw] **Упражнения**](https://docs.google.com/forms/d/e/1FAIpQLSfOAAnZrszP3EiO3zgYzfkqBpH68ggE9mFzsDyK40_WUjB89A/viewform)

_________________________________

[![ico-20 link] w3schools](https://www.w3schools.com/jsref/dom_obj_all.asp)
