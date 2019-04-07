[ico20]: https://raw.githubusercontent.com/garevna/a-level-js-lessons/master/ico/a-level-20.png
[ico25]: https://raw.githubusercontent.com/garevna/a-level-js-lessons/master/ico/a-level-25.png
[hw-30]: https://raw.githubusercontent.com/garevna/a-level-js-lessons/master/ico/briefcase-30.png
[cap-30]: https://raw.githubusercontent.com/garevna/a-level-js-lessons/master/ico/coffee-30.png
[warn-25]: https://raw.githubusercontent.com/garevna/a-level-js-lessons/master/ico/warning-25.png
[link-25]: https://raw.githubusercontent.com/garevna/a-level-js-lessons/master/ico/link-25.png
[err-20]: https://raw.githubusercontent.com/garevna/a-level-js-lessons/master/ico/no_entry-20.png
[err-25]: https://raw.githubusercontent.com/garevna/a-level-js-lessons/master/ico/no_entry-25.png
[err-30]: https://raw.githubusercontent.com/garevna/a-level-js-lessons/master/ico/no_entry-30.png


[:rewind:](document)

```html
<body>
    Hello, students!
    <div class="container" title="Контейнер">
       <a class="paragraph" href="https://translate.google.com/" title="Перевод">Translator
       </a>
       <img src="http://www.abc.net.au/news/image/9154542-1x1-940x940.jpg" width="200" id="picture" class="galleryPicture">
    </div>
    <h1 class="header">Welcome!</h1>
    <p class="paragraph">You study JS</p>
</body>
```
Выведем в консоль все дочерние узлы document.body
```javascript
document.body.childNodes
```
Результат:
```console
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
```
:warning: `Обратите внимание, что все переводы строк ( и пустые строки ) рассматриваются как тестовые узлы документа`

Теперь выведем в консоль все дочерние узлы первого элемента с атрибутом **_title_**
```javascript
document.querySelector ( '[ title ]' ).childNodes
```
Результат:
```console
▼ NodeList(5) [text, a.paragraph, text, img#picture.galleryPicture, text]
    0: text
  ► 1: a.paragraph
  ► 2: text
  ► 3: img#picture.galleryPicture
  ► 4: text
    length: 5
  ► __proto__: NodeList
```

[:rewind:](document)

_________________________________________________________________________

![](https://github.com/garevna/js-course/raw/master/images/a-level-ico.png?raw=true)
