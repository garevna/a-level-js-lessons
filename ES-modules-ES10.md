## :mortar_board: Dynamic import 

###### ES10 ( 2019 )

Динамический импорт представлен новой функцией **`import()`**, возвращающей промис

#### :coffee: 1

Запустите в консоли следующий код:

```javascript
document.body.onclick = async () => {
    const module = await import(`https://garevna.github.io/js-samples/js/index12.js`)
}
```

:pushpin: Примечательно то, что в файле **_index12.js_** нет директивы **_`export`_**

Однако импорт сработал, и скрипт запустился

#### :coffee: 2

В этом примере скрипты импортируются динамически, последовательно, с задержкой в несколько секунд

```javascript
let scriptFile = 'https://garevna.github.io/js-samples/js/index'

import ( `${scriptFile}12.js` )
    .then( module => {
        setTimeout (
            () => import ( `${scriptFile}21.js` )
                .then (
                    setTimeout (
                        () => import ( `${scriptFile}22.js` ),
                        10000
                    ),
                    20000
                ),
            10000
        )
    })
```

Используем асинхронную функцию для упрощения кода:

```javascript
const scriptImports = async moduleFile => {
    const timeOut = timeInterval => new Promise (
        resolve => setTimeout ( () => resolve(), timeInterval )
    )
    await import ( `${moduleFile}12.js` )
    await timeOut ( 8000 )
    await import ( `${moduleFile}21.js` )
    await timeOut ( 12000 )
    await import ( `${moduleFile}22.js` )
}

scriptImports ( 'https://garevna.github.io/js-samples/js/index' )
```

***

#### :coffee: 3

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