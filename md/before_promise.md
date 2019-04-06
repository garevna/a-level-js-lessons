JS - однопоточный асинхронный язык

Все асинхронные операции выполняются за пределами основного потока JS

Основной поток - это последовательность операций, которые выполняются последовательно одна за другой

Но бывают операции, которые должны быть выполнены при наступлении какого-то события

Предположим, мы послали запрос серверу - нам нужны какие-то данные

Если мы остановим основной поток и будем ждать ответа сервера, то это будет синхронная ( блокирующая ) операция

Мы не знаем, когда прийдет ответ сервера, и не знаем, каким он будет

Теперь предположим, что у нас есть кнопка, при клике на которой мы должны выполнить ряд операций

Предыдущая блокирующая операция ( запрос к серверу ) "заморозит" весь код на странице, и юзер может кликать на кнопке до посинения, пока мы ждем ответа сервера

Но это еще не все

Если мы вставим кнопку на страницу, и будем ждать, пока юзер не кликнет на кнопке, картина станет совсем мрачной...

Мы полностью заблокируем работу приложения

Если на странице будут другие кнопки, их нельзя будет нажать до клика на первой кнопке

***

Итак, асинхронщина JS ( вообще-то читай [**`Event Loop`**](event-loop) )

На чем стоит?

на коллбэках...

то есть функциях "обратного вызова"

Обратный вызов подразумевает, что эти самые коллбэки куда-то "выкидываются" из нашего потока, но в нужный момент их позовут назад и позволят им спеть свою песенку...

Такие себе обертки, в которые "заворачивается" асинхронный код

Асинхронный - это такой, который не будет выполняться в основном потоке

Он будет выпоняться тогда, когда callback позовут назад

Как вы вызываете врача, когда заболели

Врач не сидит у вас дома днями и ночами

А пожарных вы вызываете, когда у вас пожар

А полицию - когда произошло преступление

Все перечисленное выше - коллбэки

В обычной жизни вы легко реализуете этот механизм обратного вызова

Аналогично нужно действовать и в коде

Вы создаете коллбэки и устанавливаете, когда какой из них позвать

Коллбэки "вырываются" из основного потока

Например, назначая коллбэк обработчиком события клика на кнопке, вы определяете, когда его нужно будет вызвать

Теперь посмотрим на ситуацию, когда вы отправили запрос на сервер и ждете ответа

Запросов может быть отправлено довольно много...

В таком случае мы используем функцию, которой передаем url нужного нам ресурса, а также коллбэки, которые нужно будет вызвать, когда прийдет ответ сервера

```javascript
function getData ( url, callback, errorHandler ) {
    var request = new XMLHttpRequest
    request.open ( "GET", url )
    request.onload = function ( event ) {
        callback ( this.responseText )
    }
    request.onerror = function ( event ) {
        errorHandler ( this.status, this.statusText )
    }
    request.send()
}

function showResponse ( response ) {
    console.log ( response )
}
function showError ( status, text ) {
    console.error ( status, text )
}

getData (
    "https://api.github.com/users/0",
    showResponse,
    showError
)
```

Все хорошо, но теперь предположим, что нам нужны данные о подписчиках юзера гитхаба

ссылка на эти данные есть в полученных от сервера данных

нам просто нужно повторно вызвать getData ()

```javascript
function getData ( url, callback, errorHandler ) {
    var request = new XMLHttpRequest
    request.open ( "GET", url )
    request.onload = function ( event ) {
        callback ( this.responseText )
    }
    request.onerror = function ( event ) {
        errorHandler ( this.status, this.statusText )
    }
    request.send()
}

function showResponse1 ( response ) {
    var url = JSON.parse ( response ).followers_url
    getData ( url, showResponse2, showError )
}

function showResponse2 ( response ) {
    var url = JSON.parse ( response ).followers_url
    console.log ( response )
}

function showError ( status, text ) {
    console.error ( status, text )
}

getData (
    "https://api.github.com/users/0",
    showResponse1,
    showError
)
```

Вроде как все ОК

Данные о подписчиках мы получили

теперь нам нужно получить данные о репозиториях первого подписчика нашего юзера гитхаба

```javascript
function getData ( url, callback, errorHandler ) {
    var request = new XMLHttpRequest
    request.open ( "GET", url )
    request.onload = function ( event ) {
        callback ( this.responseText )
    }
    request.onerror = function ( event ) {
        errorHandler ( this.status, this.statusText )
    }
    request.send()
}

function showResponse1 ( response ) {
    var url = JSON.parse ( response ).followers_url
    getData ( url, showResponse2, showError )
}

function showResponse2 ( response ) {
    var url = JSON.parse ( response )[0].repos_url
    getData ( url, showResponse3, showError )
}

function showResponse3 ( response ) {
    console.log ( response )
}

function showError ( status, text ) {
    console.error ( status, text )
}

getData (
    "https://api.github.com/users/0",
    showResponse1,
    showError
)
```

Наш код выглядит все менее оптимистично...

```javascript
function getData ( url, callback, errorHandler ) {
    var request = new XMLHttpRequest
    request.open ( "GET", url )
    request.onload = function ( event ) {
        callback ( this.responseText )
    }
    request.onerror = function ( event ) {
        errorHandler ( this.status, this.statusText )
    }
    request.send()
}

function showResponse1 ( response ) {
    var url = JSON.parse ( response ).followers_url
    getData ( url, showResponse2, showError )
}

function showResponse2 ( response ) {
    var repos = JSON.parse ( response )[0].repos_url
    getData ( repos, showResponse3, showError )
}

var contributors = []

function showResponse3 ( response ) {   
    for ( var x of JSON.parse ( response ) )
        getData ( x.contributors_url, showResponse4, showError )
}

function showResponse4 ( response ) {
    contributors.push (
        JSON.parse ( response )
            .map (
                x => x.login
            )
    )
    console.log ( contributors )
}

function showResponse5 ( response ) {
    console.log ( response )
}

function showError ( status, text ) {
    console.error ( status, text )
}

getData (
    "https://api.github.com/users/0",
    showResponse1,
    showError
)
```
