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

## ![hw-30] Упражнение 1

###### zero-config

Работаем в созданной ранее папке  _test_  `( вы можете назвать свою папку иначе )`

Создаем файлы и папки:

###### ![file-30] index.html

```html
<!DOCTYPE html>
<html lang="ru">
    <head>
        <meta charset="UTF-8">
        <title>webpack-sample</title>
    </head>
    <body>
        <div class = "sampleClass"></div>
        <script src = "./dist/main.js"></script>
    </body>
</html>
```

_____________________________________________________________

###### ![dir-30] src

Cоздайте папку  ![dir-20] **src**  и поместите туда файл  ![file-20] **_index.js_**

###### ![file-30] index.js

```javascript
var promise = new Promise ( function ( resolve, reject ) {
    document.write ( 'Wait, pease...<br>' )
    setTimeout ( () => resolve ( "OK, you are here ?" ), 2000 )
})

promise.then ( response => document.write ( response ) )
```

_________________________________________________________

#### ![ico25] webpack

![bash-25] а теперь выполните консольную команду

    webpack

webpack был вызван нами без каких-либо параметров и опций

В консоли видно предупреждение, что опция  **`mode`** отсутствует,<br/>
поэтому использовано значение по умолчанию - **_`production`_**

![](http://icecream.me/uploads/676b38d4712353e1e73a346dd7b55477.png)

Обратите внимание, что в папке проекта появилась новая папка  ![dir-20] **dist**,

а в этой папке - минифицированный файл  ![file-20] **_main.js_**

![](https://lh6.googleusercontent.com/0pagIMHm51JuHbTPqLkRnHIEBD3WxdGhsLjsbb7h0faFhCO7cSVQc2gPhsLvisAFmqwymX0xhX2N4qYMH61DP8L7Aq-VesPwpso5WkBWpmT9WyDw9MU1QG1O7Glri7wN-sGxODtftnmxsOs)

Как видите, мы обошлись без файла конфигурации,<br/>
поскольку  Webpack 4  позволяет это<br/>
при использовании дефолтных имен файлов и папок:

![warn-25] Исходный файл должен находиться в папке ![dir-20] **src** и называться ![file-20] **_index.js_**

![warn-25] Результат сборки будет помещен в папку ![dir-20] **dist** под именем  ![file-20] **_main.js_**

Теперь откройте файл  ![file-20] **_index.html_**  в браузере

_________________________________________________________________________

![](https://github.com/garevna/js-course/raw/master/images/a-level-ico.png?raw=true)
