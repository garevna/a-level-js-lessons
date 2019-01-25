# AJAX

## :mortar_board: [`XMLHttpRequest`](XMLHttpRequest)

***

* [`Последовательность действий`](XMLHttpRequest-steps)
* [`Экземпляр XMLHttpRequest`](XMLHttpRequest-content)
* [`Метод open()`](XMLHttpRequest-open)
* [`Метод send()`](XMLHttpRequest-send)

***

### :mortar_board: `readyState`

###### :warning: Только для чтения

`Содержит инфо о стадии прохождения запроса`

| | Стадии запроса: |
|-|-|
| 0 | `запрос создан, но метод `**`open()`**` еще не был вызван` |
| 1 | `метод `**`open()`**` был вызван; можно формировать заголовки запроса` |
| 2 | `метод `**`send()`**` был вызван, и заголовки ответа сервера получены ( можно читать `**`status`**` )` |
| 3 | `идет процесс загрузки тела ответа сервера` |
| 4 | `процесс загрузки ответа завершен` |

***

| [:briefcase: Упражнения](https://docs.google.com/forms/d/e/1FAIpQLSdA3JwhlOTXdZxCO3y1MdLe-pe-cynNVGeboy7IV0aWHliGHA/viewform) | [:link: `Протокол TCP`](https://xakep.ru/2002/04/11/14943/) | [:link: **`RFC793`**](https://www.lissyara.su/doc/rfc/rfc793/) |
|-|-|-|
