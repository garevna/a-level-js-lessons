# :mortar_board: webpack

| <img src="https://webpack.js.org/d19378a95ebe6b15d5ddea281138dcf4.svg" width="70"/> | Сборщик модулей |
|-|-|

Webpack создает граф зависимостей приложения

Каждый модуль приложения может иметь зависимости - модули, необходимые для его нормальной работы

***
[:link: webpack](https://webpack.js.org/api/module-methods/#es6-recommended-)
***

## <img src="https://gitforwindows.org/img/gwindows_logo.png" width="50"/> Установка

Пакет  **webpack**  устанавливается с помощью **`npm`**

###### Команда

    npm install -g webpack webpack-cli

###### установит  _webpack_ и  _webpack-cli_  глобально 

###### Сокращение для команды `install ( i )`

    npm i webpack webpack-cli --save-dev

###### установит  _webpack_ и  _webpack-cli_  в текущей папке

### :mortar_board: webpack-cli
:warning: раньше по умолчанию устанавливался как часть самого Webpack

Теперь вынесен в отдельный модуль, и его нужно устанавливать

Нужен, чтобы чтобы запускать сборку из командной строки или через менеджер пакетов

### :mortar_board: webpack.config.js
Из коробки webpack не потребует от вас использования файла конфигурации

Однако при этом предполагается, что точкой входа вашего проекта является `src/index.js`, а результат будет выведен в `dist/main.js`, минимизированный и оптимизированный для производства

Обычно проектам нужна расширенная функциональность

для этого нужно создать в корневой папке файл настроек:

    📝 webpack.config.js 

который будет по умолчанию использован webpack для конфигурирования сборки

### --config
Если вы хотите использовать различные файлы конфигурации в зависимости от ситуации, это можно настроить с помощью флага `--config`

<img src="https://gitforwindows.org/img/gwindows_logo.png" width="22"/> в командной строке:

    webpack --config prod.config.js

📝 в файле package.json:
```javascript
"scripts": {
    "build": "webpack --config prod.config.js"
}
```