# <img src="https://avatars2.githubusercontent.com/u/19735284?s=40&v=4" width="30" title="Ⓒ Irina Fylyppova ( garevna ) 2019"/> AJAX

###### :mortar_board: [`XMLHttpRequest`](XMLHttpRequest)

* [`Последовательность действий`](XMLHttpRequest-steps)

***

<a name="XMLHttpRequest"></a>

### Конструктор XMLHttpRequest ()

###### Создает экземпляр объекта для обмена данными с сервером:

```javascript
var request = new XMLHttpRequest ()
```

Прототипом является **`XMLHttpRequestEventTarget`**, который наследует от **`EventTarget`**

Экземпляры `XMLHttpRequest` имеют ряд унаследованных событий, свойств и методов

<a name='table'></a>

| `Методы` | `События` | `Свойства` |
|-|-|-|
| [**`open()`**](XMLHttpRequest-open) | [**`readystatechange`**](XMLHttpRequest-readyState) | [**`onreadystatechange`**](XMLHttpRequest-readyState) |
| [**`send()`**](XMLHttpRequest-send) | | [**`readyState`**](XMLHttpRequest-readyState) |
|  | | [**`status`**](XMLHttpRequest-status) |
|  | | [`statusText`](XMLHttpRequest-status) |
|  | `loadstart` | [`onloadstart`](XMLHttpRequest-events#on) |
|  | `progress` | [`onprogress`](XMLHttpRequest-events#on) |
|  | `loadend` | [`loadend`](XMLHttpRequest-events#on) |
|  | `load` | [`onload`](XMLHttpRequest-events#onload) |
|  | `error`  | [`onerror`](XMLHttpRequest-events#onerror) |
|  | `timeout` | [`ontimeout`](XMLHttpRequest-events#ontimeout)|
| `abort()` | `abort` | `onabort` |
|  |  | [`withCredentials`](XMLHttpRequest-withCredentials) |
| [**`setRequestHeader()`**](XMLHttpRequest-setRequestHeader) |  | [**`responseType`**](XMLHttpRequest-response#responseType) |
| [`getAllResponseHeaders()`](XMLHttpRequest-response#getAllResponseHeaders) | | [**`responseText`**](XMLHttpRequest-response#responseText) |
| `getResponseHeader()` | | `responseURL` |

Ответ сервера имеет заголовок ответа ( **`header`** ) и тело ответа ( **`response`** )

***

* [`Метод open()`](XMLHttpRequest-open)
* [`Метод send()`](XMLHttpRequest-send)
* [`Свойство readyState`](XMLHttpRequest-readyState)
* [`Свойство status`](XMLHttpRequest-status)
* [`Свойство responseText`](XMLHttpRequest-responseText)
* [`Обработка событий`](XMLHttpRequest-events)
* [`Метод setRequestHeader`](XMLHttpRequest-setRequestHeader)
* [`Метод getAllResponseHeaders()`](XMLHttpRequest-response#getAllResponseHeaders)
* [`Свойство responseType`](XMLHttpRequest-response#responseType)
* [`Свойство withCredentials`](XMLHttpRequest-withCredentials)

***

| [:briefcase: Упражнения](https://docs.google.com/forms/d/e/1FAIpQLSdA3JwhlOTXdZxCO3y1MdLe-pe-cynNVGeboy7IV0aWHliGHA/viewform) | [:link: `Протокол TCP`](https://xakep.ru/2002/04/11/14943/) | [:link: **`RFC793`**](https://www.lissyara.su/doc/rfc/rfc793/) |
|-|-|-|

_________________________________________________________________________

![](https://github.com/garevna/js-course/raw/master/images/a-level-ico.png?raw=true)
