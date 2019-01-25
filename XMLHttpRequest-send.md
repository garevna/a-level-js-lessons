# AJAX

## :mortar_board: [`XMLHttpRequest`](XMLHttpRequest)

***

* [`Последовательность действий`](XMLHttpRequest-steps)
* [`Экземпляр XMLHttpRequest`](XMLHttpRequest-content)
* [`Метод open()`](XMLHttpRequest-open)

***

### :mortar_board: `send()`

Метод `send()` отправляет **_тело запроса_** на сервер

**_тело запроса_** - это данные, которые отсылаются на сервер

:warning: При передаче данных на сервер важно корректно указать тип данных ( заголовок **_Content-Type_** )

При запросе на получение данных ( **`GET`** ) тело запроса отсутствует

:coffee:
```javascript
var request = new XMLHttpRequest ()
request.open ( 
    'GET', 
    'https://ajax.googleapis.com/ajax/libs/jquery/2.2.0/jquery.min.js'
)
request.send()
```

***



***

| [:briefcase: Упражнения](https://docs.google.com/forms/d/e/1FAIpQLSdA3JwhlOTXdZxCO3y1MdLe-pe-cynNVGeboy7IV0aWHliGHA/viewform) | [:link: `Протокол TCP`](https://xakep.ru/2002/04/11/14943/) | [:link: **`RFC793`**](https://www.lissyara.su/doc/rfc/rfc793/) |
|-|-|-|