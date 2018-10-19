# :mortar_board: Promise

| :coffee: [Примеры](#samples) |
|-|

Промис - это объект-администратор асинхронного процесса

Создается с помощью конструктора **`Promise`**

Он ничего не знает о процессе, который администрирует, но знает порядок вызова исполнителей

Ему нужно просто указать исполнителей

Исполнители - это функции

Предположим, вам выслали бандероль

"Новая почта" - функция, которая выполняет доставку бандероли

Она может доставить нам бандероль, а может потерять ( испортить ) отправление

Мы ждем доставку бандероли

Но при этом жизнь не останавливается, и мы не сидим день и ночь на ступеньках отделения "Новой почты"

Мы создаем объект, имеющий состояние - промис 🤖

Состояние объекта-промиса при создании - ожидание :hourglass_flowing_sand:

Этот объект и будет сидеть вместо нас на ступеньках "Новой почты"

Его состояние :hourglass_flowing_sand: может в любой момент измениться на ✅ или ⛔

Сообщаем ему, какой процесс отслеживать - передаем ему функцию-исполнителя процесса 📮

В этой функции описан процесс, что и откуда должна доставить "Новая почта"

У этой функции есть два формальных параметра ( предположим, в бланке заказа нужно указать номера телефонов, по которым звонить в случае чего )

Эти формальные параметры - часть протокола действий функции-исполнителя при завершении процесса доставки:

    📦 куда звонить, если бандероль благополучно доставлена
    💥 куда звонить, если бандероль потерялась или испорчена

```javascript
var 🤖 = new Promise (
 
    function ( 📦, 💥 ) {
        ...
        if ( 👍 ) 📦()
        else 💥()
    }
)
```
Итак, формальные параметры есть, но их значения пока не определены

Формально процедура описана

Осталось "заключить договор" и заполнить все бланки

В этом месте и подключается наш объект-промис 🤖

Мы должны проинформировать его, 
    📦 куда звонить, если бандероль благополучно доставлена
    ( наш сосед дядя Вася 👨‍⚕️ зайдет получить ее )
    💥 куда звонить, если бандероль потерялась или испорчена
    ( наш адвокат 👨🏻‍🎓 займется этой проблемой )

Как сообщить 🤖, что делать?

а у него есть метод **`then`**, с которым мы и передадим "номера телефонов":
```javascript
🤖.then ( 👨‍⚕️ ).then ( 👨🏻‍🎓 )
```
Когда наша посылка будет доставлена, состояние нашего объекта-промиса изменится на ✅ и сработает первый **`.then`** ( будет вызван 👨‍⚕️ )

Если же станет известно, что посылка была испорчена или утеряна, то состояние нашего объекта-промиса станет ⛔ и сработает второй **`.then`** ( будет вызван 👨🏻‍🎓 )

Таким образом, созданный нами 🤖 - это объект, в который мы "завернули" процесс доставки-получения бандероли, расписав исполнителей, чтобы больше не заморачиваться
```javascript
var 🤖 = new Promice ( 📮 ( 📦, 💥 ) )
🤖.then ( 👨‍⚕️ ).then ( 👨🏻‍🎓 )
```
где  📦  и  💥 - формальные параметры, значения которых передаются промису 🤖 через  **`.then`**

в случае, если состояние 🤖 станет  ✅, 📦 получит фактическое значение 👨‍⚕️,

в случае, если состояние 🤖 станет  ⛔, 💥 получит фактическое значение 👨🏻‍🎓

***
<a name="samples"></a>
### :coffee: Примеры

Итак, объект 🤖 создается с помощью конструктора **`Promise`**

Параметр, который передается конструктору - это функция, выполняющая некую асинхронную операцию

Эта функция, в свою очередь, получает на входе два параметра, оба - коллбэки, т.е. функции

:coffee: :one:
```javascript
var promise = new Promise ( 
    function ( resolve, reject ) { 
        ...
        if ( ... ) resolve 
        else reject 
    } 
)
```
:coffee: :two:

Используем Battery API  для получения инфо о зарядке аккумулятора

( метод  **_getBattery()_**  объекта  **navigator** возвращает промис ):
```javascript
navigator.getBattery().then ( result => {
    for ( var x in result ) 
        console.log ( `${x}: ${result[x]}` )
})
```

:coffee: :three:

```javascript
var promises = []
promises.push ( new Promise (
  function ( resolve, reject ) {
    setTimeout ( function () { resolve ( "Hello" ) }, 2000 )
  }
))
promises.push ( new Promise (
  function ( resolve, reject ) {
    setTimeout ( function () { resolve ( "Bye" ) }, 5000 )
  }
))
promises.push ( new Promise (
  function ( resolve, reject ) {
    setTimeout ( function () { resolve ( "How are you?" ) }, 4000 )
  }
))

Promise.all ( promises ).then ( response => document.body.innerHTML += response + "<br/>" )
```
| [:coffee: :four:](https://plnkr.co/edit/WpZrRvD1ScHbCN3eUfC8?p=preview) | [:coffee: :five:](https://plnkr.co/edit/BpFFu73mwsXDmZSdVOTn?p=preview) | [:coffee: :six:](https://repl.it/@garevna/promise-sample-1) |
|-|-|-|
