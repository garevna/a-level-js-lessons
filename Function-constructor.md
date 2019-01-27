# :mortar_board: [Биндинг и каррирование](call-apply-bind)

## :mortar_board: Конструктор Function

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

* [`Наследование`]()
* [`Контекст вызова`]()
* [`Изменение контекста`]()
    * [**`call()`**]()
    * [**`apply()`**]()
    * [**`bind`**]()
* [`Currying`](Currying)

