[debagger]: https://raw.githubusercontent.com/garevna/a-level-js-lessons/master/ico/debagger-20.png "Resume script execution F8 Ctrl+\"
[reload]: https://raw.githubusercontent.com/garevna/a-level-js-lessons/master/ico/reload.png
[file-20]: https://raw.githubusercontent.com/garevna/a-level-js-lessons/master/ico/pencil-20.png
[youtube]: https://raw.githubusercontent.com/garevna/a-level-js-lessons/master/ico/youtube-25.png

[footer]: https://github.com/garevna/js-course/raw/master/images/a-level-ico.png?raw=true
[me]: https://raw.githubusercontent.com/garevna/a-level-js-lessons/master/ico/myPhoto-40.png "Ⓒ Irina Fylyppova ( garevna ) 2019"

[ico20]: https://raw.githubusercontent.com/garevna/a-level-js-lessons/master/ico/a-level-20.png
[ico25]: https://raw.githubusercontent.com/garevna/a-level-js-lessons/master/ico/a-level-25.png
[hw-20]: https://raw.githubusercontent.com/garevna/a-level-js-lessons/master/ico/briefcase-20.png
[cap-20]: https://raw.githubusercontent.com/garevna/a-level-js-lessons/master/ico/coffee-20.png
[cap-25]: https://raw.githubusercontent.com/garevna/a-level-js-lessons/master/ico/coffee-25.png
[cap-30]: https://raw.githubusercontent.com/garevna/a-level-js-lessons/master/ico/coffee-30.png
[error]: https://raw.githubusercontent.com/garevna/a-level-js-lessons/master/ico/no_entry-20.png
[warn]: https://raw.githubusercontent.com/garevna/a-level-js-lessons/master/ico/warning-25.png
[link]: https://raw.githubusercontent.com/garevna/a-level-js-lessons/master/ico/link-20.png
[space-800]: https://raw.githubusercontent.com/garevna/a-level-js-lessons/master/ico/space-800.png

[lesson]: ../lessons/lesson-01.md

| ![ico25] <br/><sup>[**Lesson&nbsp;1**][lesson]</sup> | <h2>Chrome DevTools</h2>![space-800] | ![me] <br/><sup>[**Занятие&nbsp;1**][lesson]</sup> |
|:-:|:-:|:-:|

_________________________________________________________________________

#### ![cap-30] 1

Открываем [страницу](garevna.github.io)

Переходим на вкладку **Sources** панели разработчика

| <sub>navigator</sub> | ![space-800] | <sub>debugger</sub> |
|-|-|-|

![](https://raw.githubusercontent.com/garevna/js-course/master/images/lessons/01.png)

Для просмотра кода загруженной страницы в панели навигации ( слева ) используем кнопку **`>>`** и открываем **_Page_**

Слева появится структура проекта, где можно выбрать файл для просмотра

выбираем файл проекта, содержимое которого будет отображаться в центре ( index02.js )

_________________________________________________________

#### ![cap-30] 2

В отладчике можно не только работать с кодом открытой страницы

Можно создать свой фрагмент кода, который хотите отладить

С помощью той же кнопки **`>>`** выберем **_Snippets_**

Можно:

* добавить новый сниппет ( слева )
* вставить код ( в центре )
* сохранить сниппет ( Ctrl+S )
* запустить код сниппета ( правая кнопка мышки ⇾ контекстное меню ⇾ Run )

![](https://raw.githubusercontent.com/garevna/js-course/master/images/lessons/02.png)

________________________________________________________________________

## ![ico25] debugger

| Watch | Call Stack | Scope | Breakpoints |
|-|-|-|-|

Для отслеживания значений переменных используем секцию  **`Watch`**  в панели  **`debugger`**

Нужно добавить имена переменных, значения которых мы хотим отслеживать

Точки останова **`Breakpoints`** в панели `debugger` позволяют приостановить выполнение кода и посмотреть значения отслеживаемых переменных

Для возобновления выполнения кода используем кнопку ![debagger]

После установки `breakpoints` перезагрузите страницу ![reload]

![file-20] Можно внести изменения в код, отображаемый в центре ( между панелями `navigator` и `debugger` )

После внесения изменений нужно сохранить их  ( *`Ctrl + S`* )

Теперь будет работать новая версия кода

Если изменения не были сохранены, в панели  **navigator**  измененный файл будет отмечен символом `*`

![ico20] Mожно отслеживать изменение значений переменных еще и  в секции  **`Scope`**  дебаггера:
* Local - локальные переменные исполняемой функции,
* Block - переменные контекста вызова исполняемой функции

![ico20] Следите, какая функция сейчас выполняется, в секции **`Call Stack`**

_____________________________________________________________________________

### ![ico25] Event Listener Breakpoints

В  Chrome DevTools  можно также приостанавливать выполнение кода, когда происходят события DOM

#### ![cap-20] Перейдем по [![link] ссылке](garevna.github.io)  

Посмотрите код примера

<table><tr><td>

<sup>На событие `click` элемента **`button`** повешен обработчик, который скрывает / показывает элемент `div.circle`,
изменяя значение свойства `circle.style.visibility`</sup>

<sup>Опять откроем панель разработчика, вкладку `Sources`</sup>

<sup>В закладке  **Watch**  укажем   `circle.style.visibility`, чтобы отслеживать изменение значения этого свойства</sup>

<sup>Развернем закладку **Event Listener Breakpoints**</sup>

<sup>развернем пункт **Mouse**</sup>

<sup>выберем событие  **`click`**</sup>

<sup>Теперь при клике левой кнопкой мышки выполнение кода будет приостановлено, и мы сможем пошагово проследить работу всех обработчиков события **`click`**</sup>

<sup>Поскольку в браузере есть свои обработчики события **`click`**, будем "пролистывать" их с помощью уже известной нам кнопки ![debagger], пока не дойдем до нашего обработчика события  click  на кнопке</sup>

<sup>Здесь мы будем отслеживать работу кода пошагово с помощью кнопки  **Step into next function call**</sup>

</td></tr>
<tr><td><br/>


<sup>![hw-20] Самостоятельно установите наблюдение за свойством **`button.innerHTML`**</sup><br/>
<sup>![hw-20] Подкорректируйте код в **Sources** так, чтобы при наведении указателя мышки на схему она плавно поворачивалась на 90 градусов</sup>

</td></tr></table>

## [![youtube]](https://youtu.be/PQYG2aJf6uI)

[![link] google](https://developers.google.com/web/tools/chrome-devtools/)
