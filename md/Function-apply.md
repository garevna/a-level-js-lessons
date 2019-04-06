# <img src="https://avatars2.githubusercontent.com/u/19735284?s=40&v=4" width="30" title="Ⓒ Irina Fylyppova ( garevna ) 2019"/> [Биндинг и каррирование](call-apply-bind)

* [`Конструктор Function`](Function-constructor)
* [`Наследование`](Function-inheritance)
* [`Контекст вызова`](Function-context)
* [`Изменение контекста`](Function-context-changing)
    * [`call()`](Function-call)
    * [`bind`](Function-bind)

***
### :mortar_board: apply()

Метод **_apply()_** отличается от метода **_call()_** только способом передачи аргументов - теперь их нужно передавать массивом:

```javascript
function func () {
    console.log ( this.name, arguments )
}

var figure = { name: "figure" }
var sample = { name: "sample" }

func.apply ( figure, [ 9, false, "Hello" ] )
func.apply ( sample, [ 5, 1, "Bye" ] )
```

###### Результат в консоли:

```console
figure ► Arguments(3) [ 9, false, "Hello", callee: ƒ, Symbol(Symbol.iterator): ƒ ]
sample ► Arguments(3) [ 5, 1, "Bye", callee: ƒ, Symbol(Symbol.iterator): ƒ ]
```

***

Передача массива аргументов вместо перечня их значений обеспечивает определенную гибкость, поскольку массивы передаются по ссылке, и содержимое массива может динамически обновляться от вызова к вызову

:coffee: :two:

```javascript
var args = [0]
var test = ( function () {
    var counter = 0
    return function () {
        args.push ( this.name )
        args[0] = ++counter
    }
})()

function func () {
    this.test()
    var args = Array.from ( arguments )
    console.warn ( `Who was called before ${this.name} (${args.splice(0, 1)}):` )
    for ( var x of args )
        console.info ( x )
}

var figure = { name: "figure", test: test }
var sample = { name: "sample", test: test }
var google = { name: "google", test: test }

func.apply ( figure, args )
func.apply ( sample, args )
func.apply ( google, args )
```

###### Результат в консоли:

```console
⚠️ ► Who was called before figure (0):
⚠️ ► Who was called before sample (1):
figure
⚠️ ► Who was called before google (2):
figure
sample
```

> Вызовы функции **_func_** логируются в массиве **args**

> При каждом вызове функция **_func_** получает в аргументах полный отчет о том, сколько раз она была вызвана до этого, и с каким контекстом

>> Поменяйте местами вызовы функций, или добавьте повторный вызов любой из функций, и посмотрите результат

***

* [`Currying`](Function-currying)

***
