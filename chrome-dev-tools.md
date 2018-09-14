[home]: https://github.com/garevna/js-course/wiki/chrome-dev-tools#-chrome-devtools
[debugger]: https://github.com/garevna/js-course/wiki/chrome-dev-tools#-debugger
[event]: https://github.com/garevna/js-course/wiki/chrome-dev-tools#-event-listener-breakpoints
[homework]: https://github.com/garevna/js-course/wiki/chrome-dev-tools#-%D0%97%D0%B0%D0%B4%D0%B0%D0%BD%D0%B8%D0%B5-1

<table>
  <tr>
    <td width="800">
       <a href = "https://github.com/garevna/js-course/wiki/chrome-dev-tools#-%D0%97%D0%B0%D0%B4%D0%B0%D0%BD%D0%B8%D0%B5-1">
          :briefcase: homework
       </a>
    </td>
    <td width="25%">
       <a href = "https://github.com/garevna/js-course/wiki/chrome-dev-tools#-debugger">
          :arrow_down_small: debugger
       </a><br>
       <a href = "https://github.com/garevna/js-course/wiki/chrome-dev-tools#-event-listener-breakpoints">
          :arrow_down_small: Event Listener Breakpoints
       </a>
    </td>
  </tr>
</table>

# 🎓 Chrome DevTools

Переходим на вкладку  `Sources` в панели разработчика

    Слева находится панель  🔍 navigator
    Справа - панель 🔧 debugger

В панели `navigator` можно выбрать источник кода

для этого используем кнопку `>>`

    ✅ Page
    ✅ Snippets

```
Сейчас мы находимся на странице

https://garevna.github.io/js-samples/#02
```
Во вкладке `Pages` панели  `navigator`  мы выбираем файл проекта, содержимое которого будет отображаться в центре

![](https://raw.githubusercontent.com/garevna/js-course/master/images/lessons/01.png)
```javascript
Сейчас выбран файл index02.js
```
Теперь выберем `Snippets`

Вы можете
```
📌  добавить новый сниппет
📌  вставить код
📌  сохранить сниппет ( Ctrl+S )
📌  запустить код сниппета ( правая кнопка мышки ⇾ контекстное меню ⇾ Run )
```
![](https://raw.githubusercontent.com/garevna/js-course/master/images/lessons/02.png)

<table>
  <tr>
    <td width="800">
       &nbsp;
    </td>
    <td width="10%">
       <a href = "https://github.com/garevna/js-course/wiki/chrome-dev-tools#-chrome-devtools">
          :arrow_heading_up:
       </a>
       <a href = "https://github.com/garevna/js-course/wiki/chrome-dev-tools#-event-listener-breakpoints">
          :arrow_heading_down:
       </a>
    </td>
  </tr>
</table>

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

После внесения изменений нужно сохранить их  ( **Ctrl + S** )

Теперь будет работать новая версия кода

Если изменения не были сохранены, в панели  `navigator`  измененный файл будет отмечен символом `*`
***
***
[:arrow_up_small:][home]
[:arrow_down_small:][event]
***
***
### 📖 Event Listener Breakpoints

В  Chrome DevTools  можно также приостанавливать выполнение кода, когда происходят события DOM

##### ☕️ Перейдем по ссылке:  :link: https://garevna.github.io/devtools-sample/
```
Посмотрите код примера

В нем на событие  click  элемента  button 
повешен обработчик, который скрывает / показывает элемент  div.circle, 
изменяя значение свойства  circle.style.visibility

Опять откроем панель разработчика, вкладку Sources

В закладке  Watch  укажем   circle.style.visibility, 
чтобы отслеживать изменение значения этого свойства

Развернем закладку  Event Listener Breakpoints

развернем пункт  Mouse

выберем событие  click

Теперь при клике левой кнопкой мышки 
выполнение кода будет приостановлено, 
и мы сможем пошагово проследить работу 
всех обработчиков события  click

Поскольку в браузере есть свои обработчики 
события  click, будем "пролистывать" их 
с помощью уже известной нам кнопки ▐▶️  
( Resume script execution ), 
пока не дойдем до нашего обработчика 
события  click  на кнопке

Здесь мы будем отслеживать работу кода пошагово 
с помощью кнопки  Step into next function call
```
## [:cinema: видосик](https://youtu.be/PQYG2aJf6uI)

[![🎦](http://img.youtube.com/vi/PQYG2aJf6uI/0.jpg)](http://www.youtube.com/watch?v=PQYG2aJf6uI)

[🔗 google](https://developers.google.com/web/tools/chrome-devtools/)

### 💼 Задания

:one: Самостоятельно установите наблюдение за свойством    button.innerHTML

:two: Подкорректируйте код в `Sources` так, чтобы при наведении указателя мышки на схему она плавно поворачивалась на 90 градусов 

## [:arrow_double_up:][home]