## :mortar_board: Dynamic import ( ES10 )

:coffee:

Запустите в консоли следующий код:

```javascript
document.body.onclick = async () => {
    const module = await import(`https://garevna.github.io/js-samples/js/index12.js`)
}
```

:pushpin: Примечательно то, что в файле **_index12.js_** нет директивы **_`export`_**

Однако импорт сработал, и скрипт запустился 

***

:warning: С 2019 года все основные браузеры поддерживают ES-модули

Предположим, в разметке мы подключили скрипт **`index.js`**

###### index.html

```html
<!DOCTYPE html>
<html>
<head>
    <meta charset="utf-8">
    <title>ES Modules</title>
</head>

<body>
    <script src = "js/index.js"></script>
</body>

</html>
```

Код файла **`index.js`** создает элемент `<script>` с атрибутом **`type = "module"`** и вставляет его на страницу

```javascript
let mod = document.body.appendChild (
  document.createElement ( "script" )
)
mod.type = "module"
```

В элемент `<script>` помещается код, который импортирует функцию **_`showMessage`_** из файла *`js/testESModules.js`*

и вызывает ее с текстом "Hi, students! Welcome to new age of ES Modules!"

```javascript
mod.textContent = `
    import {showMessage} from './js/testESModules.js';
    showMessage ( "Hi, students! Welcome to new age of ES Modules!" )
`
```

Полный код:

###### js/index.js

```javascript
let mod = document.body.appendChild (
  document.createElement ( "script" )
)
mod.type = "module"
mod.textContent = `
    import {showMessage} from './js/testESModules.js';
    showMessage ( "Hi, students! Welcome to new age of ES Modules!" )
`
```

Именованый экспорт в файле *`js/testESModules.js`*

###### js/testESModules.js

```javascript
export function showMessage ( message ) {
    var demo = document.createElement ( 'div' )
    demo.style = `
        position: fixed;
        top: 15%; left: 15%;
        bottom: 15%; right: 15%;
        box-shadow: 10px 10px 16px #00000090;
        border: solid 0.5px #bbb;
        padding: 30px;
        z-index: 300;
        background-color: #000;
    `
    document.body.appendChild ( demo )
    demo.innerHTML = `
        <h2 style='color: #789'>Module was successfully imported</h2>
        <p style='color: #fa0'>Now you can see how it works :)</p>
        <hr>
        <p style='color: #dde'>${message}</p>
    `
    setTimeout ( () => {
        document.body.removeChild ( demo )
    }, 10000 )
}
```

:warning: При импорте модулей следует указывать или полный путь 

```javascript
import {showMessage} from 'https://example.com/js/testESModules.js';
```

или относительный путь, начинающийся с `/`, `./` или `../`

```javascript
import {showMessage} from './js/testESModules.js';
```

В противном случае импорт завершится неудачей


[:coffee: Live demo](https://garevna.github.io/js-samples/#25)