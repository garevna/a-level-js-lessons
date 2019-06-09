# ![ico-30 study] let | const

**ES6 ( 2015 )**

________________________

## ![ico-25 icon] let

### ![ico-25 icon] Функциональная и блочная области видимости

Ограничить область видимости переменных, объявленных с помощью директивы **_var_**, можно только "заворачиванием" их в функцию

![ico-25 pin] Блочная область видимости - это ограничение области видимости в пределах фигурных скобок

~~~javascript
var x = 5

{
    let x = 15
    console.log ( x ) // 15
}

console.log ( x )  // 5
~~~

Благодаря этому сборщик мусора освобождает память от ненужных переменных при выходе из блочной области видимости

![ico-25 pin] Следствием блочной области видимости переменных, объявленных с помощью директивы **_let_**, является замыкание значения переменной цикла на каждой итерации блока _for_:

![ico-25 cap] ** 1**

~~~js
for ( let i of [ 1, 2, 3, 4, 5 ] ) {
    setTimeout ( () => console.log ( i ), 1000 * i )
}
~~~

![ico-25 cap] ** 2**

Обратите внимание, что отсутствие явных фигурных скобок не меняет принцип поведения переменных, объявленных с помощью директивы **_let_**

**var**

~~~js
var res = []

for ( var item of [ "alpha", "sigma", "omega" ] )
    res.push ( () => console.log ( item ) )

res[0]()  // omega
res[1]()  // omega
res[2]()  // omega
~~~

**let**

~~~js
var res = []

for ( let item of [ "alpha", "sigma", "omega" ] )
    res.push ( () => console.log ( item ) )

res[0]()  // alpha
res[1]()  // sigma
res[2]()  // omega
~~~
_______________________

### ![ico-25 icon] Hoisting и "временная мёртвая зона"

**Hoisting** заключается в том, что переменные "поднимаются" от места их объявления в коде до топа их области видимости

**Hoisting** имеет такое же отношение к переменным, объявленным с помощью директивы **_let_**, как и к объявленным с помощью **_var_**

![ico-20 warn] Однако переменные, объявленные с помощью **_let_**, будут недоступны до тех пор, пока выполнение кода не дойдёт до места фактического объявления переменной

Так появляется **_временная мёртвая зона_**

![ico-25 cap] ** 3**

Поэтому в результате выполнения кода:

~~~js
{
  console.log ( x )
  // [ временная мёртвая зона ]
  let x = 10
}
~~~

будет сгенерировано исключение:

![ico-25 err] ~ ReferenceError: Cannot access 'x' before initialization~

_________________________


![ico-25 pin] Невозможно повторно объявить переменную с таким же идентификатором в той же области видимости:

~~~javascript
function sample () {
    let figure = {
        name: "Radius",
        size: 50
    }
    console.log ( figure )
    let figure = 10
    console.log ( figure )
}
sample ()
~~~

Будет сгенерировано исключение:

![ico-20 err] ~Uncaught SyntaxError: Identifier 'figure' has already been declared~

в цикле сработает, потому что явно присутствует блок {...}

~~~javascript
let sample = { a: 'img', b: 'div', c: 'p' }
for ( let prop in sample ) {
    let elem = document.body.appendChild (
        document.createElement ( sample [ prop ] )
    )
    console.log ( elem )
}
~~~

![ico-25 pin] ~let~ не создает свойств в глобальном объекте

~~~javascript
var x = 25
let z = 15
window.x    //  25
window.z    //  undefined
~~~

______________________

## ![ico-25 icon] const

![ico-20 pin] Блочная область видимости ( как у ~let~ )
![ico-20 pin] Невозможно дублирование объявления ( как у ~let~ )
![ico-20 pin] В общем, все, как у ~let~, только:
![ico-20 warn] Изменить значение нельзя

~~~javascript
const XXX = 11
XXX = 55
~~~

Будет сгенерировано исключение:

![ico-20 err] ~Uncaught TypeError: Assignment to constant variable.~

![ico-20 warn] Обязательно при объявлении инициализировать значение

~~~javascript
const XXX
~~~

Будет сгенерировано исключение:

![ico-20 err] ~Uncaught SyntaxError: Missing initializer in const declaration~

Если константа является объектом, то значения ее свойств могут быть изменены:

~~~javascript
const USER = {
    login: "admin",
    role: "admin",
    status: "active",
    rights: [ "read", "write", "delete" ]
}

USER.login = "student"
USER.role = "user"
USER.rights = [ "read" ]
~~~

Аналогично с массивами:

~~~javascript
const RIGHTS = [ "read", "write", "delete" ]
RIGHTS [ 1 ] = null
RIGHTS [ 2 ] = null
~~~

_______________________________

[![ico-30 hw] **Упражнения**](https://docs.google.com/forms/d/e/1FAIpQLScPBbEkpMk9CNH935pToTh_BmyE1vqk2rnzu3Mhw9F-D-7V_w/viewform)
