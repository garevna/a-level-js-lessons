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

# <img src="https://avatars2.githubusercontent.com/u/19735284?s=40&v=4" width="30" title="Ⓒ Irina Fylyppova ( garevna ) 2019"/> Chrome DevTools

<table>
  <tr>
    <td width="8%">
       <a href = "#-debugger">
          :arrow_down_small:
       </a> <code>debugger</code><br>
       <a href = "#-event-listener-breakpoints">
          :arrow_down_small:
       </a> <code>Event Listener Breakpoints</code><br>
       <a href = "#-tasks">
          :briefcase:
       </a> <code>Задания</code>
    </td>
  </tr>
</table>

Переходим на вкладку  `Sources` в панели разработчика

    Слева находится панель  🔍 navigator
    Справа - панель 🔧 debugger

В панели `navigator` можно выбрать источник кода

для этого используем кнопку `>>`

    ✅ Page
    ✅ Snippets

<div>
    <code>
      Сейчас мы находимся на странице
      <b><em>https://garevna.github.io/js-samples/#02</em></b>
    </code><br/>
    <code>
      Во вкладке <b><em>Pages</em></b> панели  <b><em>navigator</em></b>  
      мы выбираем файл проекта, содержимое которого будет отображаться в центре
    </code><br/>
    <code>
      Сейчас выбран файл <b><em>index02.js</em></b>
    </code>
</div>

#### :coffee: 1

![](https://raw.githubusercontent.com/garevna/js-course/master/images/lessons/01.png)

<table>
  <tr>
    <td width="8%">
       <a href = "#-chrome-devtools">
          :arrow_heading_up:
       </a>
    </td>
    <td width="800">
       &nbsp;
    </td>
    <td width="8%">
       <a href = "#coffee-2">
          :arrow_heading_down:
       </a>
    </td>
  </tr>
</table>

Теперь выберем `Snippets`

Вы можете
```
📌  добавить новый сниппет
📌  вставить код
📌  сохранить сниппет ( Ctrl+S )
📌  запустить код сниппета ( правая кнопка мышки ⇾ контекстное меню ⇾ Run )
```
#### :coffee: 2

![](https://raw.githubusercontent.com/garevna/js-course/master/images/lessons/02.png)

<table>
  <tr>
    <td width="8%">
       <a href = "#coffee-1">
          :arrow_heading_up:
       </a>
    </td>
    <td width="800">
       &nbsp;
    </td>
    <td width="8%">
       <a href = "#-event-listener-breakpoints">
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

Для отслеживания значений переменных используем секцию  **`Watch`**  в панели  **`debugger`**

Нужно добавить имена переменных, значения которых мы хотим отслеживать

Точки останова **`Breakpoints`** в панели `debugger` позволяют приостановить выполнение кода и посмотреть значения отслеживаемых переменных

Для возобновления выполнения кода используем кнопку   ▐▶️  *Resume script execution*
    ( `F8`, `Ctrl+\`)

🔄 После установки `breakpoints` перезагрузите страницу

📝 Можно внести изменения в код, отображаемый в центре ( между панелями `navigator` и `debugger` )

После внесения изменений нужно сохранить их  ( *Ctrl + S* )

Теперь будет работать новая версия кода

Если изменения не были сохранены, в панели  **`navigator`**  измененный файл будет отмечен символом `*`

👀 Mожно отслеживать изменение значений переменных еще и  в секции  **`Scope`**  дебаггера:
* Local - локальные переменные исполняемой функции,
* Block - переменные контекста вызова исполняемой функции

👀 Следите, какая функция сейчас выполняется, в секции **`Call Stack`**

<table>
  <tr>
    <td width="8%">
       <a href = "#coffee-2">
          :arrow_heading_up:
       </a>
    </td>
    <td width="800">
       &nbsp;
    </td>
    <td width="8%">
       <a href = "#-tasks">
          :arrow_heading_down:
       </a>
    </td>
  </tr>
</table>

### 📖 Event Listener Breakpoints

В  Chrome DevTools  можно также приостанавливать выполнение кода, когда происходят события DOM

##### :coffee: Перейдем по [:link: ссылке](garevna.github.io):   
```
Посмотрите код примера

В нем на событие  click  элемента  button
повешен обработчик, который скрывает / показывает
элемент  div.circle,
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

[🔗 google](https://developers.google.com/web/tools/chrome-devtools/)

### :briefcase: Tasks

:one: Самостоятельно установите наблюдение за свойством    button.innerHTML

:two: Подкорректируйте код в `Sources` так, чтобы при наведении указателя мышки на схему она плавно поворачивалась на 90 градусов

<table>
  <tr>
    <td width="8%">
       <a href = "#-event-listener-breakpoints">
          :arrow_heading_up:
       </a>
    </td>
    <td width="800">
       &nbsp;
    </td>
    <td width="8%">
       <a href = "#-chrome-devtools">
          :arrow_double_up:
       </a>
    </td>
  </tr>
</table>

_________________________________________________________________________

![](https://github.com/garevna/js-course/raw/master/images/a-level-ico.png?raw=true)
