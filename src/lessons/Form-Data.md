# ![ico-30 study] FormData

Конструктор ~FormData()~ создает объект класса **_FormData_**

~~~~FormData
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
~~~~

~~~js
var formData = new FormData()
formData instanceof FormData   // true
~~~

![ico-20 pin] Объекты класса **FormData** предоставляют интефейс для манипулирования данными форм и могут быть отправлены на сервер с помощью ~XMLHttpRequest~ или ~Fetch API~

## ![ico-25 icon] Методы

| append | delete | get | set |

### ![ico-20 icon] append()

Принимает два аргумента - имя ключа и его значение

Если такого ключа еще нет, добавляет пару ключ/значение

Если такой ключ уже существует, добавляет ему новое значение

~~~js
var formData = new FormData()
formData.append ( "username", "garevna" )
formData.append ( "token", "HgTY78-jdfhj91*/jskdfj" )
~~~

### ![ico-20 icon] has()

~~~js
formData.has ( "token" )     // true
~~~

### ![ico-20 icon] get()

~~~js
formData.get ( "username" )  // "garevna"
formData.get ( "token" )     // "HgTY78-jdfhj91*/jskdfj"
~~~

### ![ico-20 icon] getAll()

Возвращает массив всех значений, связанных с указанным в аргументе ключом

~~~js
formData.append ( "pictures", "http://icecream.me/uploads/b0d4d73f21508dd67e0c57a590f582f0.png" )
formData.getAll ( "pictures" )
formData.append ( "pictures", "https://github.com/garevna/js-course/raw/master/images/js_cup-ico.png" )
formData.getAll ( "pictures" )
~~~

### ![ico-20 icon] set()

Аргументы: ключ, значение

Если указанный аргументом ключ уже существует, устанавливает ему новое значение, в противном случае добавляет новый ключ и значение

~~~js
formData.set ( "token", "gF&op*i91/54gkjHU" )
formData.get ( "token" )  // "gF&op*i91/54gkjHU"
~~~

### ![ico-20 icon] delete()

~~~js
formData.delete ( "token" )
formData.get ("token")    // null
~~~

### ![ico-20 icon] keys()

Возвращает объект-итератор ( будем изучать позже )

![ico-25 cap] ** 1**

~~~js
var iterator = formData.keys()
iterator.next()
iterator.next()
...
~~~

### ![ico-20 icon] entries()

Возвращает объект-итератор ( будем изучать позже )


![ico-25 cap] ** 2**

~~~js
var iterator = formData.entries()
iterator.next()
iterator.next()
...
~~~

_____________________________________________

## ![ico-25 icon] Отправка данных на сервер

### ![ico-20 icon] fetch


![ico-25 cap] ** 3**

~~~js
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
~~~

_______________________________________

### ![ico-20 icon] XMLHttpRequest

![ico-25 cap] ** 4**

~~~js
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
~~~

Посмотрим, что ответил сервер

!![src/images/lessons/data-URL-2.png, src/images/lessons/data-URL.png]

Как мы видим, файл изображения был передан на сервер как строка закодированных двичных данных
~data:[<media type>][;base64],<data>~

**_base64_** указывает, что содержимое является двоичными данными, закодированными с использованием [схемы **Base64**](https://www.base64encode.org/)

_______________________________________________________

## ![ico-25 icon] Загрузка изображения с клиента

![ico-25 cap] ** 5**

![ico-20 warn]

Для выполнения упражнения перейдем на страницу [![ico-20 toilet]](http://ptsv2.com)

^^не забудьте заменить _garevna_ на свой идентификатор^^

~~~~js
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
~~~~

**прочитаем записанное**

~~~js
const request = new XMLHttpRequest()
request.open( "GET", "http://ptsv2.com/t/garevna/d/1110001/json" )
request.onreadystatechange = function ( event ) {
    if ( this.readyState < 4 ) return
    let result = JSON.parse ( this.response )
    let img = document.querySelector ( "img" )
    img.src = `data:image/png;base64,${result.Files[0].Content}`   
}
request.send()
~~~

После выполнения этого кода вы увидите, что на странице изображение

<img src="http://ptsv2.com/static/ToiletLogo.jpg" width="80"/>

будет заменено на

<img src="src/icons/squared-menu.png"/>

____________________________________________________________

![ico-25 cap] ** 6**

Создадим форму с атрибутом **name**, имеющим значение **_upload_file_**,

и элемент **img**, значение атрибута **name** которого будет **_picture_**

~~~html
<form enctype="multipart/form-data"
      method="post"
      name="upload_file"
>
    <input type="email"
           autocomplete="on"
           name="user_email"
           placeholder="email"
    >
    <br>
    <input type="file" name="file">

    <input type="submit" value="Upload">
</form>

<img name = "picture"/>
~~~

Получим данные формы после заполнения и отправим на сервер

~~~js
var form = document.forms.namedItem ( "upload_file" )
form.addEventListener( 'submit', function ( event ) {

    event.preventDefault()
    var data = new FormData(form)
    data.append ( "comment", "Hello everybody!" )

    var request = new XMLHttpRequest()
    request.open ( "POST", "https://httpbin.org/post" )
    request.onload = function( event ) {
       console.log (
          JSON.parse ( this.responseText ).files.file
       )
       document.images.namedItem ( "img" ) .src =
          JSON.parse ( this.responseText ).files.file
    }

    request.send( data )

}, false )
~~~

Посмотрим результат в панели _**Network**_ браузера

!![src/images/lessons/network-1.png, src/images/lessons/network-3.png, src/images/lessons/network-2.png]
