## :mortar_board: [Биндинг и каррирование](call-apply-bind)

* [`Конструктор Function`](Function-constructor)
* [`Наследование`](Function-inheritance)

***

### :mortar_board: Контекст вызова

Как мы уже знаем, каждая функция в момент вызова получает ссылку на контекст вызова - **_`this`_**

Если контекст не указан явно при вызове, то по умолчанию подразумевается глобальный объект ( `window` )

Явное указание контекста вызова происходит при обращении к методам какого-либо объекта:

```javascript
var obj = {
    name: "google",
    say: function () {
        console.log ( this.name )
    }
}
obj.say()   // google
```

Здесь перед именем метода **_say()_** явным образом указан контекст вызова **obj**,<br/>
поэтому _**`this`**_ внутри метода **_say()_** является ссылкой на **obj**

```javascript
window.name = "window"
function say () {
    console.log ( this.name )
}
var obj = {
    name: "google",
    say: say
}
say()       // window
obj.say()   // google
```

***

* `Изменение контекста`
    * [`call()`](Function-call)
    * [`apply()`](Function-apply)
    * [`bind`](Function-bind)
* [`Currying`](Function-currying)
