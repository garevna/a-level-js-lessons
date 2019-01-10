# :mortar_board: FormData

## :mortar_board: FormData()
Конструктор FormData() создает объект класса **_FormData_**

```console
▼ FormData {}
  ▼ __proto__: FormData
      ► append: ƒ append()
      ► delete: ƒ delete()
      ► entries: ƒ entries()
      ► forEach: ƒ forEach()
      ► get: ƒ ()
      ► getAll: ƒ getAll()
      ► has: ƒ has()
      ► keys: ƒ keys()
      ► set: ƒ ()
      ► values: ƒ values()
      ► constructor: ƒ FormData()
      ► Symbol(Symbol.iterator): ƒ entries()
        Symbol(Symbol.toStringTag): "FormData"
      ► __proto__: Object
```

```javascript
var formData = new FormData()
formData instanceof FormData   // true
```

:clipboard: Объекты класса **FormData** предоставляют интефейс для манипулирования данными форм и могут быть отправлены на сервер с помощью `XMLHttpRequest` или `Fetch API`

## Методы

| append | delete | get | set |
|-|-|-|-|

### append()

Принимает два аргумента - имя ключа и его значение

Если такого ключа еще нет, добавляет пару ключ/значение

Если такой ключ уже существует, добавляет ему новое значение

```javascript
var formData = new FormData()
formData.append ( "username", "garevna" )
formData.append ( "token", "HgTY78-jdfhj91*/jskdfj" )
```
### has()
```javascript
formData.has ( "token" )     // true
```
### get()
```javascript
formData.get ( "username" )  // "garevna"
formData.get ( "token" )     // "HgTY78-jdfhj91*/jskdfj"
```
### getAll()
Возвращает массив всех значений, связанных с указанным в аргументе ключом
```javascript
formData.append ( "pictures", "http://icecream.me/uploads/b0d4d73f21508dd67e0c57a590f582f0.png" )
formData.getAll ( "pictures" )
formData.append ( "pictures", "https://github.com/garevna/js-course/raw/master/images/js_cup-ico.png" )
formData.getAll ( "pictures" )
```
### set()
Аргументы: ключ, значение

Если указанный аргументом ключ уже существует, устанавливает ему новое значение, в противном случае добавляет новый ключ и значение 
```javascript
formData.set ( "token", "gF&op*i91/54gkjHU" )
formData.get ( "token" )  // "gF&op*i91/54gkjHU"
```
### delete()
```javascript
formData.delete ( "token" )
formData.get ("token")    // null
```
### keys()

Возвращает объект-итератор ( будем изучать позже )

### entries()

Возвращает объект-итератор ( будем изучать позже )

:coffee: :one:
```javascript
var iterator = formData.keys()
iterator.next()
iterator.next()
...
```
:coffee: :two:
```javascript
var iterator = formData.keys()
iterator.next()
iterator.next()
...
```
***

## Отправка данных на сервер

:coffee: :three: 

###### fetch

```javascript
var fileSelector = document.body.appendChild (
   document.createElement ( 'input' )
)
fileSelector.type = "file"

let formData = new FormData()

fileSelector.onchange = function ( event ) {
    formData.append ( "avatar", this.files[0] )
    
    fetch ( 'https://httpbin.org/post', {
        method: 'POST',
        headers: {
            'Content-Type': "multipart/form-data"
        },
        body: formData
    })
    .then (
        response => response.json()
            .then (
                response => console.log ( response )
            )
    )
}
```

###### XMLHttpRequest

```javascript
var fileSelector = document.body.appendChild (
   document.createElement ( 'input' )
)
fileSelector.type = "file"

let formData = new FormData()

fileSelector.onchange = function ( event ) {
    formData.append ( "avatar", this.files[0] )

    var request = new XMLHttpRequest()
    request.open( "POST", "https://httpbin.org/post" )
    request.onreadystatechange = function ( event ) {
        if ( this.readyState < 4 ) return
        console.log ( this.status, this.response )
    }
    request.send( formData )
}
```

###### Посмотрим, что ответил сервер

| Network | | | |
|-|-|-|-|
| `Headers` | `Preview` | **`Response`** | `Timing` |
<table>
<tr>
<td colspan="4">
<pre>
{
  "args": {}, 
  "data": "", 
  "files": {
    "avatar": "data:image/png;base64,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"
  }, 
  "form": {}, 
  "headers": {
    "Accept": "*/*", 
    "Accept-Encoding": "gzip, deflate, br", 
    "Accept-Language": "en-US,en;q=0.9,ru;q=0.8", 
    "Connection": "close", 
    "Content-Length": "15361", 
    "Content-Type": "multipart/form-data; boundary=----WebKitFormBoundary29N7czcIDsP20FLk", 
    "Host": "httpbin.org", 
    "Origin": "null", 
    "Save-Data": "on", 
    "User-Agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/71.0.3578.98 Safari/537.36"
  }, 
  "json": null, 
  "origin": "185.38.217.69", 
  "url": "https://httpbin.org/post"
}
</pre>
</td>
</tr>
</table>

Как мы видим, файл изображения был передан на сервер как строка закодированных двичных данных
```
data:[<media type>][;base64],<data>
```

**_base64_** указывает, что содержимое является двоичными данными, закодированными с использованием [схемы **Base64**](https://www.base64encode.org/) для кодирования двоичного текста

***

:coffee: :four:

:warning: Для выполнения упражнения перейдем на страницу http://ptsv2.com

`не забудьте заменить _garevna_ на свой идентификатор`

###### Загрузка изображения с клиента

```javascript
const fileSelector = document.body.appendChild (
   document.createElement ( 'input' )
)
fileSelector.type = "file"

const formData = new FormData()

fileSelector.onchange = function ( event ) {
    formData.append ( "avatar", this.files[0] )

    const request = new XMLHttpRequest()
    request.open( "POST", "http://ptsv2.com/t/garevna/post" )
    request.send( formData )
}
```

###### прочитаем записанное

```javascript
const request = new XMLHttpRequest()
request.open( "GET", "http://ptsv2.com/t/garevna/d/1110001/json" )
request.onreadystatechange = function ( event ) {
    if ( this.readyState < 4 ) return
    let result = JSON.parse ( this.response )
    let img = document.querySelector ( "img" )
    img.src = `data:image/png;base64,${result.Files[0].Content}`   
}
request.send()
```

После выполнения этого кода вы увидите, как на странице изображение

<img src="http://ptsv2.com/static/ToiletLogo.jpg" width="80"/>

было заменено на

<img src="https://github.com/garevna/js-course/blob/master/pictures/squared-menu.png?raw=true"/>