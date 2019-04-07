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
[bash-20]: https://raw.githubusercontent.com/garevna/a-level-js-lessons/master/ico/bash-20.png
[bash-25]: https://raw.githubusercontent.com/garevna/a-level-js-lessons/master/ico/bash-25.png
[bash-30]: https://raw.githubusercontent.com/garevna/a-level-js-lessons/master/ico/bash-30.png
[bash-40]: https://raw.githubusercontent.com/garevna/a-level-js-lessons/master/ico/bash-40.png


# <img src="https://avatars2.githubusercontent.com/u/19735284?s=40&v=4" width="30" title="Ⓒ Irina Fylyppova ( garevna ) 2019"/> webpack

| <a href="https://webpack.js.org/api/module-methods/#es6-recommended-" target = "_blank"><img src="https://webpack.js.org/d19378a95ebe6b15d5ddea281138dcf4.svg" width="70"/></a> | Сборщик модулей |
|-|-|

Webpack создает граф зависимостей приложения

Каждый модуль приложения может иметь зависимости - модули, необходимые для его нормальной работы

###### [Модули](md/ES6-modules.md) ( ES6 ) - это файлы с расширением js, содержащие код


_________________________________________________________

## ![bash-30] Установка

Пакет  **`webpack`**  устанавливается с помощью **`npm`**

Консольная команда:

```
npm install -g webpack webpack-cli
```

установит  _`webpack`_ и  _`webpack-cli`_  глобально

Сокращение для команды `install`: `i`

Консольная команда:

```
npm i webpack webpack-cli --save-dev
```

установит  _`webpack`_ и  _`webpack-cli`_  в текущей папке

_________________________________________________________

### ![ico25] webpack-cli

![warn-25] раньше по умолчанию устанавливался как часть самого Webpack

Теперь вынесен в отдельный модуль, и его нужно устанавливать

Нужен, чтобы чтобы запускать сборку из командной строки или через менеджер пакетов

_________________________________________________________

### ![ico25] webpack.config.js

Из коробки webpack не потребует от вас использования файла конфигурации

Однако при этом предполагается, что точкой входа вашего проекта является `src/index.js`,
а результат будет выведен в ![file-20] `dist/main.js`, минимизированный и оптимизированный для производства

Обычно проектам нужна расширенная функциональность

для этого нужно создать в корневой папке файл настроек ![file-20] **`webpack.config.js`**,
который будет по умолчанию использован webpack для конфигурирования сборки

_________________________________________________________

### ![ico25] --config

Если вы хотите использовать различные файлы конфигурации в зависимости от ситуации, это можно настроить с помощью опции `--config`

![bash-25] в командной строке:

```
webpack --config prod.config.js
```

![file-30] в файле `package.json`:

```javascript
"scripts": {
    "build": "webpack --config prod.config.js"
}
```

________________________________________________________________________________________

![footer]
