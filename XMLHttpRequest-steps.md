# AJAX

## :mortar_board: [`XMLHttpRequest`](XMLHttpRequest)

***

### Последовательность действий:

##### 1. Создаем объект для обмена данными с сервером ( экземпляр [`XMLHttpRequest`](#XMLHttpRequest) )
```javascript
var request = new XMLHttpRequest
```
##### 2. Используя метод [`open()`](#open) экземпляра, открываем соединение с сервером
```javascript
request.open ( method, url )
```
##### 3. Устанавливаем обработчиков событий экземпляра

```javascript
request.onreadystatechange = function ( event ) { ... }
```

или более современный вариант:

```javascript
request.onload = function ( event ) { ... }
request.onerror = function ( event ) { ... }
...
```

##### 4. Если надо, устанавливаем заголовки запроса с помощью метода [`setRequestHeader()`](XMLHttpRequest#setRequestHeader) экземпляра
```javascript
request.setRequestHeader( headerName, headerValue )
```
##### 5. Используя метод [`send()`](XMLHttpRequest#send) экземпляра, отправляем запрос серверу
```javascript
request.send ( request.body )
```

Итого:

```javascript
var request = new XMLHttpRequest

request.open ( method, url )

request.onload = function ( event ) { ... }
request.onerror = function ( event ) { ... }
...

request.setRequestHeader( headerName, headerValue )

request.send ( request.body )
```

***

| [:briefcase: Упражнения](https://docs.google.com/forms/d/e/1FAIpQLSdA3JwhlOTXdZxCO3y1MdLe-pe-cynNVGeboy7IV0aWHliGHA/viewform) | [:link: `Протокол TCP`](https://xakep.ru/2002/04/11/14943/) | [:link: **`RFC793`**](https://www.lissyara.su/doc/rfc/rfc793/) |
|-|-|-|

