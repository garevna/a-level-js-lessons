# :mortar_board: Event Loop

JS однопоточный язык

Это означает, что весь код выполняется в одном потоке

Однако практически все движки - многопоточные 

Неблокирующее поведение JS обеспечивается движком с помощью механизма `Event Loop`

Это событийно-ориентированная модель

Она держится на колбэках - функциях обратного вызова

Все асинхронные операции завершаются вызовом соответствующего колбэка

Для этого вызов колбэка должен вернуться в основной поток JS

Асинхронные операции не выполняются в основном потоке JS

Асинхронные операции попадают в Event Loop движка

Что там происходит?

У движка есть API, обеспечивающие 

* работу таймеров ( `setTimeout`, `setInterval` )
* выполнение операций AJAX
* отслеживание событий

Все это происходит в параллельном потоке движка

Когда истекает временной интервал таймера, или завершается операция AJAX, или происходит событие, вызов соответствующего колбэка помещается в очередь задач 

В стек вызовов ( Call Stack ) основного потока он может попасть только отсюда,

и только тогда, когда стек вызовов будет пуст,

т.е. все текущие вызовы основного потока завершатся

| [<img src="https://github.com/garevna/js-course/blob/master/pictures/logo_small_2x-vfl4_cFqn%5B1%5D.png?raw=true" width="80"/>](https://youtu.be/w8hIMAszebU) |
|-|

Итак, движок имеет очередь задач ( Task Queue )

Если событий не происходит, эта очередь пуста

В момент, когда происходит событие, его обработчик помещается в конец очереди событий

| [<img src="https://github.com/garevna/js-course/blob/master/pictures/logo_small_2x-vfl4_cFqn%5B1%5D.png?raw=true" width="80"/>](https://www.youtube.com/embed/P77ukSzbgS8) |
|-|

***

:coffee:

```javascript
function message ( text ) {
    document.body.innerText += `${text}\n\n`
}

document.body.innerText += 'start 0\n\n'

setTimeout ( () => message ( 'timeout 0' ) , 0 )

fetch ( "https://api.github.com/users" )
        .then (
            response => response.json ()
                .then (
                    users => message ( `1: ${users[0].login}` ) 
                )
        )

setTimeout ( () => document.body.innerText += 'timeout 1', 0 )

fetch ( "https://api.github.com/users?since=250" )
        .then (
            response => response.json ()
                .then (
                    users => message ( `2: ${users[0].login}` )
                )
        )

setTimeout ( () => document.body.innerText += 'timeout 2\n\n', 0 )

fetch ( "https://api.github.com/users?since=300" )
        .then (
            response => response.json ()
                .then (
                    users => message ( `3: ${users[0].login}` )
                )
        )

setTimeout ( () => message ( 'timeout 3' ), 0 )
```

| [<img src="https://github.com/garevna/js-course/blob/master/pictures/logo_small_2x-vfl4_cFqn%5B1%5D.png?raw=true" width="80"/>](https://youtu.be/hS7QvR2Ro8o) |
|-|