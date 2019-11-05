# ![ico-30 study] FormData

Объекты класса **FormData** предоставляют интефейс для манипулирования данными форм и могут быть отправлены на сервер с помощью ~XMLHttpRequest~ или ~Fetch API~

_______________________________________

## ![ico-25 icon] Конструктор

Конструктор FormData() создает объект класса **_FormData_**

~~~js
var formData = new FormData()
formData instanceof FormData   // true
~~~

~~~~console
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

Обратие внимание, что у экземпляра FormData есть ряд унаследованных методов:
~append~, ~delete~, ~entries~, ~forEach~, ~get~, ~getAll~, ~has~, ~keys~, ~set~ и ~values~

Эти методы обеспечивают интерфейс для доступа к данным
_____________________________________

## ![ico-25 icon] Работа с формами

Собрать данные из формы в экземпляр класса _FormData_ очень легко - достаточно при создании экземпляра передать конструктору ~FormData()~ в качестве аргумента ссылку на элемент формы

![ico-20 warn] Следует помнить, что конструктор будет собирать в объект класса ~FormData~ из указанной формы только значения свойства ~value~ тех элементов, у которых указан атрибут **~name~**

![ico-25 cap] ** 1**

~~~~html
<head>
  <script src="https://cdn.rawgit.com/chrisveness/crypto/4e93a4d/sha256.js"></script>
</head>
<body>
  <section id="registration">
      <form id="registrationForm">
        <input name="user-name" placeholder="Enter your name">
        <input type="password" id="pass-1" placeholder="Set your password" style="color: red;">
        <input type="password" id="pass-2" placeholder="Repeat your password" disabled="">
        <input type="hidden" value="" name="pass-hash">
        <input type="hidden" value="" name="user-photo">
        <img src="https://avatarko.ru/img/kartinka/1/multfilm_gomer.png" id="user-photo-preview" width="80">
        <input type="file" name="file" id="file" class="inputfile" />
        <label for="file">Select avatar</label>
      </form>
      <button id="register-button">Register</button>
  </section>
  <section id="userInfo">
    <h4></h4>
    <img src=null width="80">
  </section>
</body>
~~~~

~~~~js
let currentUser = null
document.getElementById ( "userInfo" ).style.display = "none"

document.querySelector( "input[type='file']" )
    .onchange = function ( event ) {
        let photo = event.target.files[0]
        if ( photo.type.indexOf ( "image" ) !== 0 ) return
        let picture = URL.createObjectURL ( photo )
        document.getElementById ( "user-photo-preview" ).src = picture
        document.getElementsByName ( "user-photo" )[0].value = picture
    }

document.getElementById ( "pass-1" ).oninput = function ( event ) {
    let pass = event.target.value
    event.target.valid = pass.length > 6 && !!pass.match ( /\d/ ) && !!pass.match ( /\D/ )
    event.target.style.color = event.target.valid ? "green" : "red"
    document.getElementById ( "pass-2" ).disabled = !event.target.valid
}

document.getElementById ( "pass-2" ).oninput = function ( event ) {
    event.target.valid = event.target.value === document.getElementById ( "pass-1" ).value
    event.target.style.color = event.target.valid ? "green" : "red"
}

document.getElementById ( "pass-2" ).onchange = function ( event ) {
    event.target.valid ?
        document.getElementsByName ( "pass-hash" )[0]
            .value = Sha256.hash ( event.target.value ) : null
}

document.getElementById ( "register-button" ).onclick = function ( event ) {
    let formData = new FormData(
        document.getElementById ( "registrationForm" )
    )
    let result = {}
    formData.forEach (
      ( val, key ) => Object.assign ( result, { [key]: val } )
    )
    fetch( url, {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify ( result )
    }).then ( response => response.json() )
        .then ( response => {
            currentUser = response
            document.body.querySelector ( "#userInfo > h4" )
                .innerText = currentUser[ "user-name" ]
            document.body.querySelector ( "#userInfo > img" )
                .src = currentUser[ "user-photo" ]
            document.cookie = `userId=${currentUser.id}`
            document.cookie = `userPass=${currentUser["pass-hash"]}`
            document.getElementById ( "registration" ).style.display = "none"
            document.getElementById ( "userInfo" ).style.display = "block"
        })
}
~~~~

________________________________________________


[![ico-25 cap] **Live demo**](https://garevna.github.io/js-samples/#29)

________________________________________________

Обратите внимание, что в этом примере мы делаем скрытые поля формы, которые не отображаются пользователю, однако их содержимое будет включено в объект ~formData~

При этом в форме есть поля, не имеющие атрибута ~name~
Они отображаются пользователю, однако их содержимое не будет включено в объект ~formData~

____________________________________________

## ![ico-25 icon] Методы

![ico-20 icon] append()

Принимает два аргумента - имя ключа и его значение

Если такого ключа еще нет, добавляет пару ключ/значение

Если такой ключ уже существует, добавляет ему новое значение

~~~js
var formData = new FormData()
formData.append ( "username", "garevna" )
formData.append ( "token", "HgTY78-jdfhj91*/jskdfj" )
~~~

![ico-20 icon] has()

~~~js
formData.has ( "token" )     // true
~~~

![ico-20 icon] get()

~~~js
formData.get ( "username" )  // "garevna"
formData.get ( "token" )     // "HgTY78-jdfhj91*/jskdfj"
~~~

![ico-20 icon] getAll()

Возвращает массив всех значений, связанных с указанным в аргументе ключом

~~~js
formData.append ( "pictures", "http://icecream.me/uploads/b0d4d73f21508dd67e0c57a590f582f0.png" )
formData.getAll ( "pictures" )
formData.append ( "pictures", "https://github.com/garevna/js-course/raw/master/images/js_cup-ico.png" )
formData.getAll ( "pictures" )
~~~

![ico-20 icon] set()

Аргументы: ключ, значение

Если указанный аргументом ключ уже существует, устанавливает ему новое значение, в противном случае добавляет новый ключ и значение

~~~js
formData.set ( "token", "gF&op*i91/54gkjHU" )
formData.get ( "token" )  // "gF&op*i91/54gkjHU"
~~~

![ico-20 icon] delete()

~~~js
formData.delete ( "token" )
formData.get ("token")    // null
~~~

![ico-20 icon] keys()

Возвращает объект-итератор ( будем изучать позже )

![ico-25 cap] ** 2**

~~~js
var iterator = formData.keys()
iterator.next()
iterator.next()
...
~~~

![ico-20 icon] entries()

Возвращает объект-итератор ( будем изучать позже )

![ico-25 cap] ** 3**

~~~js
var iterator = formData.entries()
iterator.next()
iterator.next()
...
~~~

_____________________________________________

## ![ico-25 icon] Отправка данных на сервер

### ![ico-20 icon] fetch

![ico-25 cap] ** 4**

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

____________________________________

### ![ico-20 icon] XMLHttpRequest

![ico-25 cap] ** 5**

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

**Посмотрим, что ответил сервер**

![](https://cdn.glitch.com/a4e0a9fd-ea7b-47cf-b52a-48fd6359c559%2FformData-1.png)


Как мы видим, файл изображения был передан на сервер как строка закодированных двичных данных

~~~console
data:[<media type>][;base64],<data>
~~~

**_base64_** указывает, что содержимое является двоичными данными, закодированными с использованием [схемы **Base64**](https://www.base64encode.org/)

______________________________________________________

![ico-25 cap] ** 6**

![ico-20 warn] Для выполнения упражнения перейдем на страницу ![ico-30 toilet] http://ptsv2.com

^^не забудьте заменить _garevna_ на свой идентификатор^^

**Загрузка изображения с клиента**

~~~js
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
~~~

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

![](http://ptsv2.com/static/ToiletLogo.jpg)

будет заменено на выбранное изображение

______________________________________________________________________________

## ![ico-25 icon] Endpoints для самостоятельной работы

••https://garevna-form-data.glitch.me/forms/&lt;id>••

### ![ico-20 icon] GET

◘◘![ico-20 cap] 1◘◘

~~~js
fetch ( "https://garevna-form-data.glitch.me/forms/all" )
    .then ( response => response.json() )
        .then ( response => console.log ( response ) )
~~~

~~~console
▼ {goblin: {…}, frodo: {…}, garevna: {…}, begemot: {…}, bomb: {…}, …}
  ► begemot: {name: "Cat", age: "15", avatar: {…}}
  ► bomb: {name: "Serafim", age: "27", avatar: {…}}
  ► frodo: {name: "Frodo", age: "18", avatar: {…}}
  ► garevna: {name: "Irina", age: "16", avatar: {…}}
  ► goblin: {name: "Grig", age: "21", avatar: {…}}
  ► safari: {name: "Grig", age: "25", avatar: {…}}
  ► __proto__: Object
~~~

◘◘![ico-20 cap] 2◘◘

~~~js
function getFormData ( url ) {
    fetch ( url ).then ( response => response.formData() )
        .then ( formData => formData.forEach ( 
            prop => console.log ( prop )
        ))
}

getFormData ( "https://garevna-form-data.glitch.me/forms/frodo" )
~~~

~~~console
Frodo
18
▼ File {name: "upload_d3a3179170b5ddaf0fee28e32799cc32.jpg", lastModified: 1572253559576, lastModifiedDate: Mon Oct 28 2019 11:05:59 GMT+0200 (Восточная Европа, стандартное время), webkitRelativePath: "", size: 15068, …}
    lastModified: 1572253615903
  ► lastModifiedDate: Mon Oct 28 2019 11:06:55 GMT+0200 (Восточная Европа, стандартное время) {}
    name: "upload_d3a3179170b5ddaf0fee28e32799cc32.jpg"
    size: 15068
    type: "image/jpeg"
    webkitRelativePath: ""
  ► __proto__: File
~~~

________________________________________________________

### ![ico-20 icon] POST | PUT | PATCH

••https://garevna-form-data.glitch.me/form/&lt;id>••

~~~html
<form id="form">
  <p>Name</p>
  <input id="userName" name="name" placeholder="Name">
  <p>Age</p>
  <input type="number"
         id="userAge" 
         name="age"
         placeholder="Age"
  >
  <p>Your Photo</p>
  <input type="file" 
         id="avatar" 
         name="avatar" 
  >
  <img id="userPhoto" src="https://forexi.ru/wp-content/uploads/2019/02/teacher1.png" width="70">
</form>

<button id="submit">Submit</button>
~~~

Ввод логина прийдется сделать отдельно ![ico-20 smile]

~~~js
let login = "bandit";

let formData = new FormData ( document.getElementById ( "form" ) );

fetch ( `https://garevna-form-data.glitch.me/form/${login}`, {
    method: "POST",
    body: formData
}).then ( response => console.log ( response.status ) );
~~~

^^Обратите внимание, что при отправке фетчем POST-запроса заголовок ~'Content-Type': "multipart/form-data"~ лучше не указывать^^
^^Браузер сам добавит нужный заголовок и разделитель ( ~boundary~ )^^
^^В противном случае на сервер приходит пустой объект^^

________________________________________________________

[:::Live Demo:::](https://garevna-form-data.glitch.me/)  
[![ico-50 git] Live Demo](https://garevna.github.io/js-samples/#47)