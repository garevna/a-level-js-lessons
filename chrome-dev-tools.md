# 🎓 Chrome DevTools

Переходим на вкладку  `Sources` в панели разработчика

    Слева находится панель  🔍 navigator
    Справа - панель 🔧 debugger

В панели `navigator` можно выбрать источник кода

для этого используем кнопку `>>`

    ✅ Pages
    ✅ Snippets

Во вкладке `Pages` панели  `navigator`  мы выбираем файл проекта, содержимое которого будет отображаться в центре

![](https://raw.githubusercontent.com/garevna/js-course/master/images/lessons/01.png)
```javascript
Сейчас мы находимся на странице

    https://garevna.github.io/js-samples/#02

и выбран файл index02.js
```
выберем `Snippets`

![](https://raw.githubusercontent.com/garevna/js-course/master/images/lessons/02.png)

## 📖 debugger

    ✅ Watch
    ✅ Call Stack
    ✅ Scope
    ✅ Breakpoints

Для отслеживания значений переменных  используем раздел  `Watch`  в панели  `debugger`

Нужно добавить имена переменных, значения которых мы хотим отслеживать

Точки останова   `Breakpoints`    в панели   `debugger`   позволяют приостановить выполнение кода 
и посмотреть значения отслеживаемых переменных

Для возобновления выполнения кода используем кнопку   ▐▶️  *Resume script execution* 
 ( `F8`, `Ctrl+\`)

Можно внести изменения в код, отображаемый в центре ( между панелями `navigator` и `debugger` )

После внесения изменений нужно сохраненить их  ( **Ctrl + S** )

Теперь будет работать новая версия кода

Если изменения не были созранены, в панели  `navigator`  измененный файл будет отмечен символом `*`



## Event Listener Breakpoints

## [🎦 видосик](https://youtu.be/PQYG2aJf6uI)

[🔗 google](https://developers.google.com/web/tools/chrome-devtools/)