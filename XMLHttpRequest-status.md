# AJAX

## :mortar_board: [`XMLHttpRequest`](XMLHttpRequest)

***

* [`Последовательность действий`](XMLHttpRequest-steps)
* [`Экземпляр XMLHttpRequest`](XMLHttpRequest-content)
* [`Метод open()`](XMLHttpRequest-open)
* [`Метод send()`](XMLHttpRequest-send)
* [`Свойство readyState`](XMLHttpRequest-readyState)

***

### :mortar_board: `status`

###### :warning: Только для чтения

Содержит код завершения операции

Если запрошенные данные благополучно загружены, то значением будет  **`200`**

В противном случае значением будет код ошибки ( например, **`404`** )

***

### :mortar_board: `statusText`

###### :warning: Только для чтения

Текст статуса ответа сервера, соответствующий коду

если `status === 200`,  то  `statusText` будет `"OK"`

если `status === 404`,  то  `statusText` будет `"Not Found"`

***

| [:briefcase: Упражнения](https://docs.google.com/forms/d/e/1FAIpQLSdA3JwhlOTXdZxCO3y1MdLe-pe-cynNVGeboy7IV0aWHliGHA/viewform) | [:link: `Протокол TCP`](https://xakep.ru/2002/04/11/14943/) | [:link: **`RFC793`**](https://www.lissyara.su/doc/rfc/rfc793/) |
|-|-|-|