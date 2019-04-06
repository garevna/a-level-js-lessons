# AJAX

###### :mortar_board: [`XMLHttpRequest`](XMLHttpRequest)

* [`Последовательность действий`](XMLHttpRequest-steps)
* [`Экземпляр XMLHttpRequest`](XMLHttpRequest-content)
* [`Метод open()`](XMLHttpRequest-open)
* [`Метод send()`](XMLHttpRequest-send)
* [`Свойство readyState`](XMLHttpRequest-readyState)
* [`Свойство status`](XMLHttpRequest-status)
* [`Свойство responseText`](XMLHttpRequest-responseText)
* [`Обработка событий`](XMLHttpRequest-events)
***

### :mortar_board: setRequestHeader()

Метод устанавливает заголовок запроса

* первый аргумент - имя заголовка
* второй аргумент - значение

:warning: вызывается после **`open ()`**, но перед **`send ()`**

#### :memo: [**Заголовки запроса**](https://flaviocopes.com/http-request-headers/)

***

<a name="content-type"></a>

###### Content-Type

Этот заголовок определяет тип пересылаемого контента

**`"Content-Type"  :  "тип  /  подтип  [ ; параметр ]"`**

`Тип используется для объявления общего типа данных, а подтип определяет специальный формат для данных этого типа`

Типы:

* `application`
* `audio`
* `image`
* `message`
* `multipart`
* `text`
* `video`

**`multipart`**  `- содержимое состоит из нескольких частей, включающих данные различных типов`

:warning: `Для незарегестрированного типа содежимого имя должно начинаться с "X-"`

:pushpin: `Примеры возможных значений `**`Content-Type:`**

* `application/msword`
* `application/pdf`
* `application/json`
* `image/gif`
* `image/jpeg`
* `image/png`
* `text/html`
* `text/plain`
* `video/mpeg`
* `text/html; charset=utf-8`
* `multipart/form-data`
* `multipart/mixed; boundary="____________________"`

`( в последнем примере строка "____________________" указывается как разделитель для различных фрагментов контента`

`В начале каждого фрагмента может быть задана своя строка с полем "Content-Type" )`

`boundary ( граница ) — это последовательность байтов, которая не должна встречаться внутри пересылаемого контента`

***

| [:coffee:](setRequestHeader-samples) Примеры |
|-|

***

* [`Метод getAllResponseHeaders()`](XMLHttpRequest-response#getAllResponseHeaders)
* [`Свойство responseType`](XMLHttpRequest-response#responseType)
* [`Свойство withCredentials`](XMLHttpRequest-withCredentials)

***

| [:briefcase: Упражнения](https://docs.google.com/forms/d/e/1FAIpQLSdA3JwhlOTXdZxCO3y1MdLe-pe-cynNVGeboy7IV0aWHliGHA/viewform) | [:link: `Протокол TCP`](https://xakep.ru/2002/04/11/14943/) | [:link: **`RFC793`**](https://www.lissyara.su/doc/rfc/rfc793/) |
|-|-|-|