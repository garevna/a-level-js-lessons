# 🎓 Итерирование

Итерирование - это последовательный перебор элементов какого-то множества ( например, массива )
```
Для массивов и строк это не представляет проблемы, 
поскольку элементы массива упорядочены и пронумерованы,
и последовательность их перебора очевидна 
( на каждой итерации цикла будет взят следующий по порядку 
элемент массива, то есть порядковый номер итерации 
будет совпадать с порядковым номером элемента массива )

Символы в строке также расположены последовательно

Однако не все структуры данных упорядочены так, 
как массивы и строки

Не всегда у элементов множества 
есть порядковые номера
```
## 📖 Итерируемые структуры данных

Для того, чтобы множество элементов можно было итерировать, у этой структуры данных должен быть 

1) определен протокол итерирования, задающий правило выбора очередного элемента из множества

2) встроенный итератор, реализующий это правило

`Итератор будет на каждой итерации возвращать следующий элемент итерируемого множества в соответствии с установленным для этого множества протоколом итерирования`

## 📖 `for...of`

Оператор цикла  `for ... of`  итерирует указанную **итерабельную** структуру данных, выполняя заданную в теле оператора последовательность действий над каждым элементом итерируемого множества

Обычные объекты JS не являются итерабельными, поэтому цикл `for ... of` не может быть использован с объектом

Например, код
```javascript
var iteratedObject = {
        name: "Begemot",
        animal: true,
        age: 3
}

for ( var x of iteratedObject ) {
        console.log ( x )
}
```
завершится ошибкой   

⛔️  Uncaught TypeError: iteratedObject is not iterable

    Однако существуют итерабельные объекты
    Примером итерабельного ( массиво-подобного ) объекта является объект  arguments


### :coffee: Пример с массивом
```javascript
var iteratedArray = [ 10, 20, 30 ]

for ( var x of iteratedArray ) {
        x /= 10
        console.log ( x )
}
```
>> На каждой итерации в консоль выводится значение очередного элемента массива *iteratedArray*, деленное на 10


### :coffee: Пример со строкой
```javascript
var iteratedString = "ABCDEF"

for ( var x of iteratedString ) {
        console.log ( x )
}
```
>> На каждой итерации в консоль выводится очередносимвол строки *iteratedString*


### :coffee: Пример с объектом arguments
```javascript
function showArguments () {
        for ( var arg of arguments ) {
                console.log ( arg )
        }
}
showArguments ( "begemot", false, 3 )
```
>> На каждой итерации в консоль выводится очередной элемент итерабельного объекта `arguments`

Цикл for ... of может быть прерван

Например, в результате выполнения кода
```javascript
var cities = [ "Киев", "Львов", "Харьков", "Одесса", "Монреаль", "Копенгаген", "Вена", "Лондон" ]

for ( var x of cities ) {
        if ( x === "Копенгаген" ) continue
        console.log (x)
}
```
в консоль бедут выведены элементы
```
        Киев
        Львов
        Харьков
        Одесса
        Монреаль
        Вена
        Лондон
```
а в результате выполнения кода 
```javascript
for ( var x of cities ) {
        if ( x === "Копенгаген" ) break
        console.log ( x )
}
```
в консоль будет выведено
```
        Киев
        Львов
        Харьков
        Одесса
        Монреаль
```
Таким образом, с помощью оператора `continue` мы прерываем текущую итерацию цикла, 

а с помощью оператора `break` прерываем выполнение цикла

## 📖 `for...in`

А вот этот оператор как раз делает то, чего не делает оператор `for...of`

Он итерирует объекты ( *точнее, перечислимые свойства объектов* )

Давайте вернемся к примеру, который завершался ошибкой, но теперь вместо оператора `for...of`  будем использовать оператор `for...in`

:coffee:
```javascript
var iteratedObject = {
        name: "Begemot",
        animal: true,
        age: 3
}

for ( var x in iteratedObject ) {
        console.log ( x )
}
```
В консоль будут выведены имена свойств объекта *name*, *animal* и *age*

Если немного подправить код внутри цикла:
```javascript
for ( var x in iteratedObject ) {
        console.log ( iteratedObject [ x ] )
}
```
то мы получим в консоли значения свойств объекта *iteratedObject*:
```
   Begemot, true, 3
```

Давайте выведем в консоль и имя свойства, и значение:
```javascript
for ( var x in iteratedObject ) {
        console.log ( x, " : ",  iteratedObject [ x ] )
}
```
Теперь в косоли будет:
```
name  :  Begemot
animal  :  true
age  :  3
```
### 📖 `for...in` с массивами

Индексы массива - это просто перечислимые свойства, имена которых являются целыми числами, а в остальном они идентичны свойствам объекта 

Однако использование оператора цикла `for...in`  на массивах не рекомендуется, поскольку нет гарантии, что оператор вернет индексы в нужном порядке

:coffee:
```javascript
iteratedArray = [ 7, 8, 9 ]

for ( var x in iteratedArray ) {
        console.log ( x, " : ",  iteratedArray [ x ] )
}
```
в консоли:
```
   0  :  7
   1  :  8
   2  :  9
```
### 📖 `for ... in` со строками
```javascript
iteratedString = "Котенок"
for ( var x in iteratedString ) {
        console.log ( x, " : ",  iteratedString [ x ] )
}
```
в консоли:
```
    0  :  К
    1  :  о
    2  :  т
    3  :  е
    4  :  н
    5  :  о
    6  :  к
```
⚠️ При переборе свойств объекта с помощью оператора `for ... in` имена свойств не обязательно будут перечислены 
именно в том порядке, в котором заданы
```
По соглашению, если имя свойства – строка, то такие свойства всегда перебираются в том же порядке, в каком присваивались
Если имя свойства – число, то браузеры сортируют такие свойства в целях внутренней оптимизации
```
### :coffee: 1
```javascript
var article = {
        title: "Canvas",
        text: "Until now we haven't looked at the actual pixels of our canvas. With the ImageData object you can directly read and write a data array to manipulate pixel data. We will also look into how image smoothing (anti-aliasing) can be controlled and how to save images from your canvas.",
        likes: 0
}

for ( var prop in obj ) {
        console.log ( obj [ prop ] )
}
```
```
    В консоль будет выведено сначала значение свойства *title*, 
    затем - значение свойства *text*, 
    затем - значение свойства *likes*
```
### :coffee: 2
```javascript
var obj = {
        11: "Canvas",
        2: "Until now we haven't looked at the actual pixels of our canvas. With the ImageData object you can directly read and write a data array to manipulate pixel data. We will also look into how image smoothing (anti-aliasing) can be controlled and how to save images from your canvas",
        1: false
}

for ( var prop in obj ) {
        console.log ( obj [ prop ] )
}
```
В консоль будет выведено:
```
false

Until now we haven't looked at the actual pixels of our canvas. With the ImageData object you can directly read and write a data array to manipulate pixel data. We will also look into how image smoothing (anti-aliasing) can be controlled and how to save images from your canvas

Canvas
```

### :coffee: `for...in`   и   `continue`

Посмотрим, как действует оператор `continue` с циклом `for...in`
```javascript
var obj = {
        "11": "Canvas",
        "01": "Until now we haven't looked at the actual pixels of our canvas. With the ImageData object you can directly read and write a data array to manipulate pixel data. We will also look into how image smoothing (anti-aliasing) can be controlled and how to save images from your canvas.",
        "05": false
}

for ( var prop in obj ) {
        if ( prop == 1 ) continue
        console.log ( prop )
}
```
В консоль будет выведено
```
    11
    05
```
`continue` прерывают только текущую итерацию цикла

### :coffee: `for...in`   и   `break`

При использовании же оператора break
```javascript
for ( var prop in obj ) {
        if ( prop == 1 ) break
        console.log ( prop )
}
```
в консоли будет только `11`

т.е. `break` прерывает выполнение цикла, как только доходит до `prop == 1` ( а это "01" )

## 📖 `for...of` vs `for...in`

Давайте дальше поиграем с массивом
```javascript
var cities = [ "Киев", "Львов", "Харьков", "Одесса", "Монреаль", "Копенгаген", "Вена", "Лондон" ]
```
Это массив, он итерабелен, и мы можем перебирать его элементы с помощью оператора `for...of`  так же успешно, как и с помощью оператора  `for...in`

Так в чем же разница?

    Вспомним, что у любого массива есть свойство length...
    А раз есть свойство, значит, это вроде как ... объект?
    Давайте проделаем такой трюк: добавим массиву cities свойство whereYouLive
    Добавить свойство проще простого - используем обычный оператор присваивания:
```javascript
cities.whereYouLive = "Париж"
```
Выведем массив cities в консоль
```javascript
console.log ( cities )
```
и увидим:
```
[ "Киев", "Львов", "Харьков", "Одесса", "Монреаль", "Копенгаген", "Вена", "Лондон", whereYouLive: "Париж" ]
```
Теперь посмотрим, как будут вести себя операторы `for...of`    и    `for...in`

Начнем с оператора `for...of`
```javascript
for ( var x of cities ) {
        console.log ( x )
}
```
в консоли:

    Киев
    Львов
    Харьков
    Одесса
    Монреаль
    Копенгаген
    Вена
    Лондон

Теперь используем оператор `for ... in`
```javascript
for ( var x in cities ) {
        console.log ( x )
}
```
в консоли:

    0
    1
    2
    3
    4
    5
    6
    7
    whereYouLive

Свойство  *cities.length*  по-прежнему выдает нам  8

Т.е. по индексу элемента мы можем получить только один из элементов 

"Киев", "Львов", "Харьков", "Одесса", "Монреаль", "Копенгаген", "Вена", "Лондон"...

А как же теперь добраться до *whereYouLive* ?

Нам нужно указать не индекс элемента, а имя, под которым мы "внесли" этот элемент в массив *cities*:
```javascript
cities [ 'whereYouLive' ]
```
вернет нам "Париж"

## [💼 Упражнения](https://docs.google.com/forms/d/e/1FAIpQLSdAAJ51lXth58N8DZQfMEdJlY5N5np_rYnFOQMYHNmHpV9EMA/viewform)