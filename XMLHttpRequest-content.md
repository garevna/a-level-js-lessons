# AJAX

## :mortar_board: [`XMLHttpRequest`](XMLHttpRequest)

***

[`Последовательность действий`](XMLHttpRequest-steps)

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
| [**`open()`**](#open) | **`readystatechange`** | [**`onreadystatechange`**](#onreadystatechange) |
| [**`send()`**](#send) | | [**`readyState`**](#readystate) |
|  | | [**`status`**](#status) |
|  | | [`statusText`](#statustext) |
|  | `loadstart` | [`onloadstart`](#on) |
|  | `progress` | [`onprogress`](#on) |
|  | `loadend` | [`loadend`](#on) |
|  | `load` | [`onload`](#onload) |
|  | `error`  | [`onerror`](#onerror) |
|  | `timeout` | [`ontimeout`](#ontimeout)|
| `abort()` | `abort` | `onabort` |
| [**`setRequestHeader()`**](#setRequestHeader) |  | [**`responseType`**](#responseType) |
| [`getAllResponseHeaders()`](#getAllResponseHeaders) | | [**`responseText`**](#responseText) |
| `getResponseHeader()` | | `responseURL` |

Ответ сервера имеет заголовок ответа ( **`header`** ) и тело ответа ( **`response`** )

***



***

| [:briefcase: Упражнения](https://docs.google.com/forms/d/e/1FAIpQLSdA3JwhlOTXdZxCO3y1MdLe-pe-cynNVGeboy7IV0aWHliGHA/viewform) | [:link: `Протокол TCP`](https://xakep.ru/2002/04/11/14943/) | [:link: **`RFC793`**](https://www.lissyara.su/doc/rfc/rfc793/) |
|-|-|-|