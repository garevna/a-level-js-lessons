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
[file-20]: https://raw.githubusercontent.com/garevna/a-level-js-lessons/master/ico/pencil-20.png
[file-25]: https://raw.githubusercontent.com/garevna/a-level-js-lessons/master/ico/pencil-25.png
[file-30]: https://raw.githubusercontent.com/garevna/a-level-js-lessons/master/ico/pencil-30.png
[file-40]: https://raw.githubusercontent.com/garevna/a-level-js-lessons/master/ico/pencil-40.png
[dir-20]: https://raw.githubusercontent.com/garevna/a-level-js-lessons/master/ico/folder-20.png
[dir-25]: https://raw.githubusercontent.com/garevna/a-level-js-lessons/master/ico/folder-25.png
[dir-30]: https://raw.githubusercontent.com/garevna/a-level-js-lessons/master/ico/folder-30.png
[dir-40]: https://raw.githubusercontent.com/garevna/a-level-js-lessons/master/ico/folder-40.png
[bash-20]: https://raw.githubusercontent.com/garevna/a-level-js-lessons/master/ico/bash-20.png
[bash-25]: https://raw.githubusercontent.com/garevna/a-level-js-lessons/master/ico/bash-25.png
[bash-30]: https://raw.githubusercontent.com/garevna/a-level-js-lessons/master/ico/bash-30.png
[bash-40]: https://raw.githubusercontent.com/garevna/a-level-js-lessons/master/ico/bash-40.png

# <img src="https://avatars2.githubusercontent.com/u/19735284?s=40&v=4" width="30" title="Ⓒ Irina Fylyppova ( garevna ) 2019"/> [webpack](md/webpack.md)

## ![hw-30] Упражнение 8

###### Подключение шрифтов
***
### Google Fonts

Для начала импортируем некоторые шрифты [_**Google**_](fonts.google.com), используя внешний URL

Для этого в наш файл :pencil: **`main.css`** мы добавим строчку
```css
@import url("https://fonts.googleapis.com/css?family=Hanalei+Fill|Roboto");
```
Теперь можно использовать эти шрифты <br/>
( '_Hanalei Fill_', _Roboto_ )<br/>
в своих стилях<br/>
Установим шрифт  '_Hanalei Fill_'   для элемента  `body`<br/>
и шрифт  _Roboto_  для  `.sampleClass`
***
###### [Дополнительно](google-fonts-webpack-plugin) ( для самостоятельного изучения ):
***
###### :pencil: main.css
```css
@import url("https://fonts.googleapis.com/css?family=Hanalei+Fill|Roboto:100,300,400");

body {
    position: fixed;
    top: 0;
    left:0;
    bottom:0;
    right:0;
    background-image: url(../images/columns.gif);
    background-repeat: no-repeat;
    background-size: cover;
    background-position: top center;
    font-family: monospace, Arial;
    font-size: 16px;
    color: #abc;
    font-family: 'Hanalei Fill', cursive;
}
.sampleClass {
    font-family: Roboto;
    font-size: 25px;
    font-weight: bold;
}
.git-bush, .git {
    display: inline-block;
    width: 50px;
    height: 50px;
    background-repeat: no-repeat;
    background-size: contain;
    background-position: center center;
}

.git-bush {
    background-image: url(../images/git-bush.png);
}
.git {
    background-image: url(../images/git.png);
}
```
###### 👁‍🗨 Если вебпак находится в режиме отслеживания, перезагрузите станицу и вы увидите результат
***
### [Font Awesome](fontawesome.com)
Самый простой способ подключения иконок Font Awesome - импорт в :pencil: **`main.css`**:
```css
@import url("https://use.fontawesome.com/releases/v5.2.0/css/all.css");
```
После этого можно вставить :pencil: **`index.html`**, например, такую строчку:
```html
<i class="fas fa-ambulance"></i>
```
Обновите страницу и вы увидите добавленную иконку

_________________________________________________________________________

![](https://github.com/garevna/js-course/raw/master/images/a-level-ico.png?raw=true)
