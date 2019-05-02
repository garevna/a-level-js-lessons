[footer]: https://github.com/garevna/js-course/raw/master/images/a-level-ico.png?raw=true
[me]: https://raw.githubusercontent.com/garevna/a-level-js-lessons/master/ico/myPhoto-40.png "Ⓒ Irina Fylyppova ( garevna ) 2019"
[ico20]: https://raw.githubusercontent.com/garevna/a-level-js-lessons/master/ico/a-level-20.png
[ico25]: https://raw.githubusercontent.com/garevna/a-level-js-lessons/master/ico/a-level-25.png
[hw-30]: https://raw.githubusercontent.com/garevna/a-level-js-lessons/master/ico/briefcase-30.png
[cap-30]: https://raw.githubusercontent.com/garevna/a-level-js-lessons/master/ico/coffee-30.png
[warn-25]: https://raw.githubusercontent.com/garevna/a-level-js-lessons/master/ico/warning-25.png
[link-25]: https://raw.githubusercontent.com/garevna/a-level-js-lessons/master/ico/link-25.png
[err-20]: https://raw.githubusercontent.com/garevna/a-level-js-lessons/master/ico/no_entry-20.png
[err-25]: https://raw.githubusercontent.com/garevna/a-level-js-lessons/master/ico/no_entry-25.png
[err-30]: https://raw.githubusercontent.com/garevna/a-level-js-lessons/master/ico/no_entry-30.png
[space-800]: https://raw.githubusercontent.com/garevna/a-level-js-lessons/master/ico/space-800.png

[lesson]: ../lessons/lesson-03.md

| ![ico25] <br/><sup>[**Lesson&nbsp;3**][lesson]</sup> | <h2>Параметры функции по умолчанию</h2>![space-800] | ![me] <br/><sup>[**Занятие&nbsp;3**][lesson]</sup> |
|-|-|-|


###### ES6

![ico20] В ES6 появилась возможность указывать в сигнатуре функции значения параметров по умолчанию:

#### ![cap-30] 1

```javascript
var display = function ( name = "user", text = "welcome" ) {
        return  text + ', ' + name
}
```

При вызове функции без аргументов:


```javascript
display ()
```

возвращаемое значение будет `"welcome, user"`

При вызове функции с одним аргументом

```javascript
display ( "Иван" )
```

возвращаемое значение будет `"welcome, Иван"`

При вызове функции с двумя аргументами

```javascript
display ( "Иван", "Добро пожаловать" )
```

возвращаемое значение будет `"Добро пожаловать, Иван"`

При вызове функции:

```javascript
display ( undefined, "Добро пожаловать" )
```

возвращаемое значение будет `"Добро пожаловать, user"`

<sup>т.е. если аргумент не был передан при вызове функции, или передано значение `undefined` ( что, по сути, одно и то же ), то будет использовано значение по умолчанию</sup>

_________________________________________________________________________

![ico20] Можно не только присваивать значения по умолчанию, но и вычислять их динамически:

#### ![cap-30] 2

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

![footer]
