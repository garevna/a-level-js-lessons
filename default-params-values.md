<a name="top"></a>
# 🎓 Параметры функции по умолчанию
`( ES6 )`

| &nbsp; | <img width="800"/> | [:arrow_double_down:](#bottom) |
|-|-|-|

✋ В ES6 появилась возможность указывать в сигнатуре функции значения параметров по умолчанию:

```javascript
var display = function ( name = "user", text = "welcome" ) {
        return  text + ', ' + name
}
```
:coffee: При вызове функции без аргументов:
```javascript
display ()
```
возвращаемое значение будет `"welcome, user"`

:coffee: При вызове функции
```javascript
display ( "Иван" )
```
возвращаемое значение будет `"welcome, Иван"`

:coffee: При вызове функции
```javascript
display ( "Иван", "Добро пожаловать" )
```
возвращаемое значение будет `"Добро пожаловать, Иван"`

:coffee: При вызове функции:
```javascript
display ( undefined, "Добро пожаловать" )
```
возвращаемое значение будет `"Добро пожаловать, user"`

т.е. если аргумент не был передан при вызове функции, или передано значение `undefined`
( что, по сути, одно и то же ), то будет использовано значение по умолчанию

✋ Можно не только присваивать значения по умолчанию, но и вычислять их динамически:

:coffee:
```javascript
var calcs = function ( x = 1, y = x + 1, z = x + y ) {
        console.log ( x, y, z )
}

calcs ()              //  1 2 3
calcs ( 2 )           //  2 3 5
calcs ( 4, 8 )        //  4 8 12
calcs ( 3, 1, 7 )     //  3 1 7
```
| &nbsp; | <a name="bottom"><img width="800"/></a> | [:arrow_double_up:](#top) |
|-|-|-|