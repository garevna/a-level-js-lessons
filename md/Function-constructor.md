# <img src="https://avatars2.githubusercontent.com/u/19735284?s=40&v=4" width="30" title="Ⓒ Irina Fylyppova ( garevna ) 2019"/> [Биндинг и каррирование](call-apply-bind)

### :mortar_board: Конструктор Function

Функции можно создавать путем явного вызова конструктора **Function** с ключевым словом **_`new`_**:

```javascript
var func = new Function (
    "x",
    "y",
    `
    console.log ( x, y )
    console.log ( this )
    return arguments
    `
)

func( 5, 8, 11, false )
```

В результате в консоль будут выведены 5, 8

затем - глобальный объект `window`

затем - объект `arguments` функции, содержащий 5, 8, 11, false

:warning: Однако следует помнить, что созданные таким образом функции будут анонимными ( "_anonymous_" )

```javascript
console.dir ( func )
```

###### Результат в консоли:

```
▼ ƒ anonymous(x,y,z )
    arguments: null
    caller: null
    length: 3
    name: "anonymous"
  ► prototype: {constructor: ƒ}
  ► __proto__: ƒ ()
```

***

* [`Наследование`](Function-inheritance)
* [`Контекст вызова`](Function-context)
* [`Изменение контекста`](Function-context-changing)
    * [`call()`](Function-call)
    * [`apply()`](Function-apply)
    * [`bind`](Function-bind)
* [`Currying`](Function-currying)