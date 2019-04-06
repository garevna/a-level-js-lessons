# <img src="https://avatars2.githubusercontent.com/u/19735284?s=40&v=4" width="30" title="Ⓒ Irina Fylyppova ( garevna ) 2019"/> [Биндинг и каррирование](call-apply-bind)

* [`Конструктор Function`](Function-constructor)
* [`Наследование`](Function-inheritance)
* [`Контекст вызова`](Function-context)
* [`Изменение контекста`](Function-context-changing)
    * [`apply()`](Function-apply)
    * [`bind`](Function-bind)

***
### :mortar_board: call()

Первым обязательным аргументом метода является ссылка на объект, в контексте которого будет вызвана функция

```javascript
window.name = "window"

function func () {
    console.log ( this.name )
}

var figure = {
    name: "figure"
}

var sample = {
    name: "sample"
}

func ()               // window
func.call ( figure )  // figure
func.call ( sample )  // sample
```

Далее может следовать перечень аргументов:

```javascript
function func () {
    console.log ( this.name, arguments )
}

var figure = { name: "figure" }
var sample = { name: "sample" }

func.call ( figure, 9, false, "Hello" )
func.call ( sample, 5, 1, "Bye" )
```

###### Результат в консоли:

```
figure ► Arguments(3) [ 9, false, "Hello", callee: ƒ, Symbol(Symbol.iterator): ƒ ]
sample ► Arguments(3) [ 5, 1, "Bye", callee: ƒ, Symbol(Symbol.iterator): ƒ ]
```

***

* [`Currying`](Function-currying)
