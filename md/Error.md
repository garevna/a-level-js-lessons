[ico25]: https://raw.githubusercontent.com/garevna/a-level-js-lessons/master/ico/a-level-25.png
[hw-30]: https://raw.githubusercontent.com/garevna/a-level-js-lessons/master/ico/briefcase-30.png
[cap-30]: https://raw.githubusercontent.com/garevna/a-level-js-lessons/master/ico/coffee-30.png
[warn-25]: https://raw.githubusercontent.com/garevna/a-level-js-lessons/master/ico/warning-25.png

# <img src="https://avatars2.githubusercontent.com/u/19735284?s=40&v=4" width="30" title="Ⓒ Irina Fylyppova ( garevna ) 2019"/> Error ()

Конструктор **Error ()** создаёт объект **`Error`**

Конструктор принимает один необязательный параметр - текст сообщения об ошибке

`( остальные опциональные параметры не были стандартизированы, и не поддерживаются браузерами )`

:coffee:
```javascript
var err = new Error ( "Arguments are not valid" )
```

InternalError

## :mortar_board: try ... catch

Оператор   try ... catch   позволяет перехватить ошибку в процессе исполнения кода

Если при выполнении кода в блоке  **_try { ... }_**  возникнет ошибка, управление перейдет в блок  **_catch_** с передачей в качестве аргумента объекта ошибки

:coffee:

```javascript
try {
   ... ( code )
}
catch ( err ) {
   ... ( code )
}
```

#### :coffee: 1

```javascript
var obj = null
try {
    var x = obj.name
}
catch ( err ) {
    x = undefined
}
```

В этом примере при выполнении кода

```javascript
var x = obj.name
```

должно быть сгенерировано исключение, которое приведет к прерыванию работы программы

Благодаря тому, что исключение "перехватывается" в блоке **_try_**, управление переходит в блок **_catch_**, где переменной  **x** присваивается значение **`undefined`**, и работа программы продолжается

###### ES10 ( 2019 )

Теперь в блок **_catch_** не обязательно передавать аргумент:

```javascript
var obj = null
try {
    var x = obj.name
}
catch {
    x = undefined
}
```

***

## :mortar_board: throw

Оператор **_throw_** генерирует пользовательское исключение ( ошибку )

Выполнение текущей функции будет прервано, и управление будет передано в первый блок **_catch_** в стеке вызовов

Если блок **_catch_** отсутствует, выполнение программы завершится

:coffee: 2

В результате выполнения кода:
```javascript
try {
    throw new Error ( "Arguments not valid" )
} catch ( err ) {
    console.error ( `${err.name}: ${err.message}` )
}
```
в консоль будет выброшено исключение:
```console
⛔️ Error: Arguments not valid
```
:coffee: 3
```javascript
var num = {}
try {
   if ( typeof num !== "number" ) {
      var err = new Error ( "Arguments not valid" )
      err.name = "ValidationError"
      throw err
   }
} catch ( err ) {
   console.error ( `${err.name}: ${err.message}` )
}

console.dir ( err )
```
```console.error
⛔️ ValidationError: Arguments not valid
```
```console
Error: Arguments not valid
        at <anonymous>:4:17
    name: "ValidationError"
    message: "Arguments not valid"
    stack: "ValidationError: Arguments not valid↵    at <anonymous>:4:17"
    ▼ __proto__:
        ► constructor: ƒ Error()
          message: ""
          name: "Error"
        ► toString: ƒ toString()
        ► __proto__: Object
```
:coffee: 4

```javascript
try {
    throw ( { name: "Hi", message: "It's a joke" } )
} catch ( err ) {
    console.log ( err.name, err.message )
}
```
:coffee: 5

```javascript
try {
     throw ( {
          name: "Hi",
          message: "It's a joke",
          stack: `
              Привет,
              извините за вмешательство,
              очень хотелось поздороваться 😉
          `
     } )
} catch ( err ) { console.error ( err.stack ) }

```

### finally

Этот блок кода отработает назависимо от того, чем завершился `try...catch`

```javascript
try {
     throw ( {
          name: "Hi",
          message: "It's a joke",
          stack: `
              Привет,
              извините за вмешательство,
              очень хотелось поздороваться 😉
          `
     } )
} catch ( err ) {
     console.error ( err.stack )
}
finally {
     console.info ( `try...catch завершил работу` )
}

```

_________________________________________________________

### [:briefcase: Упражнения](https://docs.google.com/forms/d/e/1FAIpQLSeOjdukTUBYGDKDv6s_hg_YyI2oDGLXzD6za0vUKVMYcQzw2Q/viewform)

_________________________________________________________________________

![](https://github.com/garevna/js-course/raw/master/images/a-level-ico.png?raw=true)
