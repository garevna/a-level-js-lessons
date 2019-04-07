[ico25]: https://raw.githubusercontent.com/garevna/a-level-js-lessons/master/ico/a-level-25.png
[hw-30]: https://raw.githubusercontent.com/garevna/a-level-js-lessons/master/ico/briefcase-30.png
[cap-30]: https://raw.githubusercontent.com/garevna/a-level-js-lessons/master/ico/coffee-30.png
[warn-25]: https://raw.githubusercontent.com/garevna/a-level-js-lessons/master/ico/warning-25.png

<a name="top"></a>
# <img src="https://avatars2.githubusercontent.com/u/19735284?s=40&v=4" width="30" title="Ⓒ Irina Fylyppova ( garevna ) 2019"/> Параметры функции по умолчанию

###### ES6

:raised_hand: В ES6 появилась возможность указывать в сигнатуре функции значения параметров по умолчанию:

:coffee:
```javascript
var display = function ( name = "user", text = "welcome" ) {
        return  text + ', ' + name
}
```
###### При вызове функции без аргументов:

```javascript
display ()
```
###### возвращаемое значение будет `"welcome, user"`

###### При вызове функции с одним аргументом

```javascript
display ( "Иван" )
```
###### возвращаемое значение будет `"welcome, Иван"`

###### При вызове функции с двумя аргументами

```javascript
display ( "Иван", "Добро пожаловать" )
```
###### возвращаемое значение будет `"Добро пожаловать, Иван"`

###### При вызове функции:

```javascript
display ( undefined, "Добро пожаловать" )
```
###### возвращаемое значение будет `"Добро пожаловать, user"`

т.е. если аргумент не был передан при вызове функции, или передано значение `undefined`
( что, по сути, одно и то же ), то будет использовано значение по умолчанию

:raised_hand: Можно не только присваивать значения по умолчанию, но и вычислять их динамически:

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

_________________________________________________________________________

![](https://github.com/garevna/js-course/raw/master/images/a-level-ico.png?raw=true)