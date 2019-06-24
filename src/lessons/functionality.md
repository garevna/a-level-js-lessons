# ![ico-30 study] Элементы функционального программирования в JS

**_Функция высшего порядка_** — это функция, принимающая в качестве аргументов другие функции или возвращающая другую функцию в качестве результата

Поскольку функции в JS являются объектами, действовать с ними можно абсолютно так же, как с любым объектом:

![ico-20 green-ok] собирать в структуры ( массивы, объекты )
![ico-20 green-ok] передавать в качестве аргумента
![ico-20 green-ok] возвращать в качестве результата ( что, собственно, и делает конструктор **~Function~** )

Одним словом, все, что мы можем делать с объектами, можно делать с функциями, поскольку функции - это всего лишь объекты класса **~Function~**

## ![ico-25 icon] Функция-аргумент

![ico-25 cap] ** 1**

~~~js
function frog () {
    console.log ( "frog" )
}
function elefant () {
    console.log ( "elefant" )
}

function animal ( func ) {
    func ()
}
~~~

В этом примере функция **animal** получает в качестве аргумента ссылку на функцию, которую и вызывает

Мы можем передавать функции **animal** различные функции

Вызовем функцию **animal**:

~~~js
animal ( frog )
animal ( elefant )
~~~

и в консоли мы увидим:

~~~console
frog
elefant
~~~

Однако если аргумент функции **animal** окажется не функцией, то при попытке его вызова ( с круглыми скобками ) будет сгенерировано исключение ( **~TypeError~** )

![](https://lh3.googleusercontent.com/3GB6A4pHq6LgFdRGD31bjB5sEUMgWCTYJHf9JmNjOX-r-6PMN54s6-vRTL5d73Nw7lKkAntT_2d0Ea4kcEpenX-gTm8nuNXGXvgJ0DKxw82A36E8hZbr-Zmggh9N7ZJbK4G5TkfTDDY5DHw)

Во избежание этого немного изменим код функции **animal**, добавив проверку типа аргумента:

~~~js
function animal ( func ) {
    typeof func === 'function' ? func () : null
}
~~~

Создадим элемент ~div~  и  добавим его в  ~document.body~

Установим свойство  _~id~_  этого элемента  равным "_sample_"

Изменим код функций **frog()** и **elefant()**:

~~~js
function frog () {
    return "frog"
}
function elefant () {
    return "elefant"
}
~~~

Теперь объявим функцию  **newFunc()**, которая будет создавать новый элемент ~p~, вставлять его в контейнер с идентификатором  _elemId_ и устанавливать его содержимое ( _~innerHTML~_ ) с помощью функции, переданной аргументом:

~~~js
function newFunc ( func, elemId ) {
    var elem = document.getElementById ( elemId )
    if ( !elem || !elem.nodeType || elem.nodeType !== 1 ) return
    function makeElem () {
        var x = document.createElement ( "p" )
        elem.appendChild ( x )
        x.innerHTML = func ()
        console.log ( x )
    }
    if ( typeof func === 'function' )
        makeElem ( func, elem )
}
~~~

Вызовем  функцию **newFunc**, передав ей функцию **frog** в качестве первого аргумента, а вторым аргументом передадим ей  ~id~ созданного нами элемента ( "_sample_" ):

~~~js
newFunc ( frog, "sample" )
~~~

В результате на странице появится новый элемент с текстом, который возвращает функция **frog()**

Теперь вызовем  функцию **newFunc()**, передав ей функцию **elefant()**:

~~~js
newFunc ( elefant, "sample" )
~~~

В результате на странице появится новый элемент с текстом, который возвращает функция  **elefant()**

________________________________

## ![ico-25 icon] Функция-возвращаемое значение

![ico-25 cap] ** 2**

Теперь объявим функцию  **createFunction()**,  которая будет возвращать функцию:

~~~js
function createFunction ( param ) {
    return function () {
        console.log ( 'function ', param )
    }
}
~~~

и создадим с ее помощью две новые функции: **firstFunc()**  и  **secondFunc()**:

~~~js
var firstFunc = createFunction ( "First" )
var secondFunc = createFunction ( "Second" )
~~~

Вызовем каждую из этих функций:

~~~js
firstFunc ()
secondFunc ()
~~~

В консоли мы увидим:

~~~console
function  First
function  Second
~~~
