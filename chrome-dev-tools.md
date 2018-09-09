# 🎓 Панель веб-разработчика

## 📖 Консоль браузера

Далее мы будем выполнять много упражнений непосредственно в консоли браузера

Консоль находится на вкладке `Console` в панели веб-разработчика

Как открыть панель веб-разработки:
```javascript
Ctrl + Shift + I  /* Chrome, Firefox, Opera */

F12               /* IE */
```
#### ⚠️ `В Safari 5.1.7 все несколько сложнее`

```
Сначала откроем настройки и установим флажок 
Показывать меню "Разработка" 
```
>![]( https://garevna.github.io/js-samples/pictures/safari-menu.png "Safari 5.1.7")

> ![]( https://garevna.github.io/js-samples/pictures/safari-menu-1.png "Safari 5.1.7")
```javascript
После этого можно будет окрыть панель разработки с помощью  Alt + Ctrl + C
```
## Вывод в консоль

Теперь можно выводить данные в консоль

✍️ 
```javascript 
console.info ( "Hello" )
console.log ( "Bye", "baby", 25 )
console.warn ( "Are you ready?" )
console.error ( "It's wrong expression!" )
```

# 🎓 Chrome DevTools

Переходим на вкладку  Sources в панели разработчика

Слева находится панель  `navigator`

В панели  `navigator`  мы выбираем файл проекта, содержимое которого будет отображаться в центре

![](https://raw.githubusercontent.com/garevna/js-course/master/images/lessons/01.png)

Сейчас мы находимся на странице

https://garevna.github.io/js-samples/#02

и выбран файл **index02.js**

Справа - панель `debugger`

## 📖 debugger

    ✅ Watch
    ✅ Call Stack
    ✅ Scope
    ✅ Breakpoints
    ✅ 

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

[🔗 google](https://developers.google.com/web/tools/chrome-devtools/)


## [🎦 видосик](https://youtu.be/PQYG2aJf6uI)