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

## ![hw-30] Упражнение 4

#### Настройки  webpack

Переименуем  папку ![dir-20] `src`

Пусть теперь она называется ![dir-20] **`js`**

Переименуем также файл  ![file-20] `index.js`

Пусть теперь он называется  ![file-20] **`script.js`**

Теперь изменим настройки запуска webpack в файле ![file-20] **`package.json`**:

###### ![file-30] package.json

```javascript
"scripts": {
    "dev": "webpack --mode development ./js/script.js --output ./build/index.js --watch",
    "build": "webpack --mode production ./js/script.js --output ./build/index.js --watch"
}
```

<img src="https://lh4.googleusercontent.com/t3HMzsLvURk-jymxhIhITlzHUVfrkuS1UagnldLwLccys2iZH8rBOFWdLf16gh1UqinQ8gjibPgIlqkp5PvYtAaC0hBwA32nscUHScKfZGFdgiWJHwMOyP7NU70qhWGZF87lOjmc7TfY4L8" width="800"/>


###### ![file-30] index.html

Не забудьте внести соответствующие изменения в файл ![file-20] **_`index.html`_**

Результирующий бандл будет теперь в папке  ![dir-20] **`build`**
и называться он будет  ![file-20] **`index.js`**

Изменим значение _`src`_ тега  `script` соответствующим образом:

<img src="https://lh4.googleusercontent.com/mzuMRK4yXEhLJ1AW0sBaSswsz35bNA9srOzeQQx0EjWI2xUK7zzeADS9SdFh7g2heeuuBAQLMQYNI4xvVuiVOak-GOMQ88SpmSYE4ERCcYvRtFxg8prqo1pOyl5vy-mDY__8weNvaQ-wXhw" width="500"/>

### ![ico25] Сборка

![bash-30] Теперь запускайте сборку приложения одной из команд:

    npm run dev       

или

    npm run build

( мы заменили ![dir-20] _prod_ на ![dir-20] **_`build`_** в  `package.json` )

и открывайте  `index.html`  в браузере

_________________________________________________________

### ![ico25] npm run dev

#### ![ico20] --watch

Сейчас   webpack   находится в режиме наблюдения за нашими исходными файлами, <br/>
потому что мы использовали опцию **`--watch`**

Давайте внесем изменения в файл ![file-20] **_script.js_**

###### ![file-30] script.js

```javascript
import promise from './promise.js'

promise.then ( response =>
  document.querySelector ( '.sampleClass' ).innerText += response )

document.body.appendChild (
    document.createElement ( 'img' )
).src = "https://sites.google.com/site/eternalfallout/alienhead-detailed.jpg"
```

Перезагрузите страницу в браузере, и вы увидите, что  webpack автоматически собрал заново наше приложение, и внесенные нами изменения уже отображаются на странице 😉

Теперь можно удалить папку ![dir-20] **_dist_**

_________________________________________________________________________

![](https://github.com/garevna/js-course/raw/master/images/a-level-ico.png?raw=true)
