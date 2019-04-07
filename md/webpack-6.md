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

## ![hw-30] Упражнение 6

###### ✅ file-loader
###### ✅ url-loader

***
### :open_file_folder: images

Создадим папку  :open_file_folder: images в корневой папке нашего проекта<br/>
и поместим туда несколько файлов изображений:

![](https://lh5.googleusercontent.com/dqODscqbar15EGD-mAhay0YwoS0VzKDKpmUKb3_oYfzyLD-I2JbMNGM_6gBhpWsrr5H9_hLWhIDpwsN_w1UMvE38-ccafSB_FiUrrZ_17b-BiM7cItjm2Ku1WFEix9oWFIXUQ8aiI7mmTDM)

### :open_file_folder: js

Добавим  в файл   :pencil: **`script.js`** <br/>
код, который будет добавлять на страницу два элемента  `span`<br/>
с классами  **_git-bush_**   и  **_git_**

Далее внесем соответствующие изменения в файл<br/>
:pencil: **`main.css`**  ( :open_file_folder `css` )

( добавим соответствующие классы )

### :pencil: script.js
```javascript
import promise from './promise.js'
import css from '../css/main.css'

promise.then ( response =>
    document.querySelector ( '.sampleClass' )
        .innerText += response )

document.body.appendChild (
    document.createElement ( 'span' )
).className = 'git-bush'

document.body.appendChild (
    document.createElement ( 'span' )
).className = 'git'
```

### :pencil: main.css

```css
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
}
.sampleClass {
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

### :wrench: file-loader

Установим загрузчик **file-loader**

    npm install --save-dev file-loader

и внесем необходимые изменения в файл конфигурации

###### :pencil: webpack.config.js
```javascript
const path = require ( 'path' )

module.exports = {
    entry: { main: './js/script.js' },
    output: {
        path: path.resolve ( __dirname, 'build' ),
        filename: 'index.js'
    },
    module: {
        rules: [
            {
                test: /\.(png|svg|jp?g|gif)$/,
                use: [
                    {
                        loader: 'file-loader',
                        options: {
                            name: 'images/[name].[ext]'
                        }
                    }
                  ]
            },
            {
                test: /\.css$/,
                exclude: /node_modules/,
                use: [
                    'style-loader',
                    'css-loader'
                ]
            },

        ]
    }
}
```

### 🔨 Сборка

Обратите внимание, что после сборки приложения<br/>
все файлы изображений, ссылки на которые были в файле :pencil: **_`main.css`_**,<br/>
оказались в папке :open_file_folder: **`images`**,<br/>
которая была создана в папке :open_file_folder: **`build`**

![](https://lh6.googleusercontent.com/FLcLBZEePLxKPVswXVtkXHofTK2I1wShlFTaWFenTxPXaZRzf1yPSyX8S8mF_sonwERGkos305ZJssSk6Yz04nwPhwK8BVz2jg87eOicg479pjgNiVesfU2x4UH8mOaWJshcN-pZLewfgLI)

***

## :mortar_board: url-loader

webpack резолвит любые выражения `url()`, которые встретит в css-файлах, а также ссылки на изображения из скрипта

webpack может встраивать ресурсы с помощью загрузчика **`url-loader`**

**`url-loader`** преобразует изображение в код `base64 URI`

и встраивает в код JavaScript

Это позволяет сократить количество запросов к серверу, однако приводит к увеличению размеров результирующего файла сборки

**`url-loader`** имеет опциею `limit`, которая позволяет управлять процессом встраивания файлов изображений в зависимости от их размеров

Свойство `limit` **`url-loader`** - это максимально допустимый для встраивания размер файла (в байтах)

Таким образом, небольшие по размеру файлы изображений можно встроить в файл сборки, а для больших создавать копии

:warning: При использовании опции `limit` необходимо установить как **`url-loader`**, так и **`file-loader`**

В случае использования опции `limit` **`url-loader`** передает возможные дополнительные параметры для **`file-loader`**

###### :coffee: встраивание файлов `.jpg` и `.png` размером менее 25 КБ

```javascript
{
    test: /\.(jpg|png)$/,
    use: {
        loader: "url-loader",
        options: {
            limit: 25000,
        },
    },
},
```

:warning: При передаче параметров загрузчику его не добавляют в свойство `use` в виде строки

потому что теперь это будет объект с двумя свойствами: имя загрузчика и параметры

Если файл изображения большой, вместо **`url-loader`** будет использоваться **`file-loader`**, который просто создаст копию файла

Итак, установим **`url-loader`** в папке проекта и внесем изменения в файл конфигурации webpack:

###### :coffee: webpack.config.js

```javascript
const path = require ( 'path' )

module.exports = {
    entry: { main: './js/script.js' },
    output: {
        path: path.resolve ( __dirname, 'build' ),
        filename: 'index.js'
    },
    module: {
        rules: [
            {
                test: /\.(png|svg|jp?g|gif)$/,
                use: {
                    loader: "url-loader",
                    options: {
                        limit: 25000,
                        name: 'images/[name].[ext]'
                    },
                }
            },
            {
                test: /\.css$/,
                exclude: /node_modules/,
                use: [
                    'style-loader',
                    'css-loader'
                ]
            }
        ]
    }
}
```

Прежде, чем запускать сборку, очистим папку build/images, чтобы убедиться, что теперь в нее попадут только большие файлы, а маленькие будут встроены в файл сборки

После сборки посмотрим в консоли, как подключены маленькие файлы изображений:

![](https://lh6.googleusercontent.com/H1x8wj8f_gxr6uvn__fH1R2XII_xG7VXN7XzEaqeSAsTUxTpaUkcN2OeA4CuXJfBrl7GC0Z1JDBAfSJNfzVA5FMGXbqGKRvDOslSsBXMxE7tTXIOyd3zh0wFCOhFzLzUgV6hmNwQbqnE5Gc)

Файлы были конвертированы в строку base64 и встроены в сборку


***
###### [:link: file-loader](https://www.npmjs.com/package/file-loader)
###### [:link: url-loader](http://docs.w3cub.com/webpack/loaders/url-loader/)
###### [:link: loaders](https://webpack.js.org/loaders/)

_________________________________________________________________________

![](https://github.com/garevna/js-course/raw/master/images/a-level-ico.png?raw=true)
