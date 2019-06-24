# ![ico-30 icon] FileReader

**Конструктор**

Создает экземпляр объекта, который позволяет веб-приложению асинхронно читать содержимое файлов ( объекты класса **_File_** ) на компьютере пользователя или объекты класса **_Blob_**

~~~js
var reader = new FileReader ()
~~~

![ico-20 warn] Не может читать объекты класса **_~ReadableStream~_**


^^^[Методы]

• ~ ƒ ~ **readAsArrayBuffer()**
• ~ ƒ ~ **readAsBinaryString()**
• ~ ƒ ~ **readAsDataURL()**
• ~ ƒ ~ **readAsText()**
^^^


^^^[Свойства]

![ico-20 green-ok] **error**

^^объект **DOMError** со свойствами **_name_** и **_message_**^^

______________________________________

![ico-20 green-ok] **readyState**


• ^^**EMPTY**   : 0 ( _данные еще не загружены_ )^^
• ^^**LOADING** : 1 ( _данные загружаются_ )^^
• ^^**DONE**    : 2 ( _операция чтения завершена_ )^^

______________________________________

![ico-20 green-ok] **result**

^^данные^^
^^• значение свойства result определено только после завершения операции чтения^^
^^• формат данных зависит от способа, с помощью которого процесс был вызван^^

^^^

^^^[Обработка событий]


![ico-20 green-ok] onabort
![ico-20 green-ok] onerror
![ico-20 green-ok] onload
![ico-20 green-ok] onloadend
![ico-20 green-ok] onloadstart
![ico-20 green-ok] onprogress

^^^

![ico-25 hw] **sample 1**

Разберите работу кода в Chrome DevTools:

~~~~js
var selector = document.body.appendChild ( document.createElement ( 'input' ) )
selector.type = 'file'

selector.onchange = function handleFiles( event ) {
    fileReader.readAsDataURL ( event.target.files [0] )
    fileReader.onload = function ( event ) {
        picture.src = event.target.result
    }
}

var picture = document.body.appendChild (
    document.createElement ( 'img' )
)

var fileReader = new FileReader ()
~~~~

Сравните с уже знакомым методом  **URL.createObjectURL**:

~~~js
picture.src = URL.createObjectURL( selected )
~~~


![ico-25 hw] **sample 2**

Разберите работу кода в Chrome DevTools:

~~~~js
var selector = document.body.appendChild (
    document.createElement ( 'input' )
)
selector.type = 'file'

selector.onchange = function handleFiles( event ) {
    var selected = event.target.files [0]
    header.innerText =  selected.type
    switch ( selected.type.split('/')[0] ) {
        case 'image':
            fileReader.readAsDataURL ( selected )
            fileReader.onload = function ( event ) {
                picture.src = event.target.result
            }
            break
        case 'text' :
            fileReader.readAsText ( selected )
            fileReader.onload = function ( event ) {
                demo.innerText = event.target.result
            }
            break
        case 'application':
            fileReader.readAsText ( selected )
            fileReader.onload = function ( event ) {
                demo.innerText = event.target.result
            }
            break
        default:
            fileReader.readAsArrayBuffer ( selected )
            fileReader.onload = function ( event ) {
                console.log ( event.target.result )
            }
            break
    }
}

var picture = document.body.appendChild (
    document.createElement ( 'img' )
)
var header = document.body.appendChild (
    document.createElement ( 'h3' )
)
var demo = document.body.appendChild (
    document.createElement ( 'pre' )
)
var fileReader = new FileReader ()
~~~~


![ico-25 hw] **sample 3**

Разберите работу кода в Chrome DevTools:

~~~~js
var selector = document.body.appendChild (
    document.createElement ( 'input' )
)
selector.type = 'file'
selector.multiple = true
selector.id = 'selectImages'
selector.style.display = 'none'

var label = document.body.appendChild (
    document.createElement ( 'label' )
)
label.htmlFor = 'selectImages'
label.innerText = 'Select images'

selector.onchange = function ( event ) {
    for ( var file of event.target.files ) {
        if ( file.type.split('/')[0] !== 'image' ) return
        var picture = document.createElement ( "img" )
        document.body.appendChild( picture )
        var fileReader = new FileReader ()
        fileReader.onload = (
            image => function ( e ) {
                image.src = e.target.result
            }
        )( picture )
        fileReader.readAsDataURL ( file )
    }
}
~~~~
