[footer]: https://github.com/garevna/js-course/raw/master/images/a-level-ico.png?raw=true
[ico20]: https://raw.githubusercontent.com/garevna/a-level-js-lessons/master/ico/a-level-20.png
[ico25]: https://raw.githubusercontent.com/garevna/a-level-js-lessons/master/ico/a-level-25.png
[hw-30]: https://raw.githubusercontent.com/garevna/a-level-js-lessons/master/ico/briefcase-30.png
[cap-30]: https://raw.githubusercontent.com/garevna/a-level-js-lessons/master/ico/coffee-30.png
[warn-25]: https://raw.githubusercontent.com/garevna/a-level-js-lessons/master/ico/warning-25.png
[link-25]: https://raw.githubusercontent.com/garevna/a-level-js-lessons/master/ico/link-25.png
[err-20]: https://raw.githubusercontent.com/garevna/a-level-js-lessons/master/ico/no_entry-20.png
[err-25]: https://raw.githubusercontent.com/garevna/a-level-js-lessons/master/ico/no_entry-25.png
[err-30]: https://raw.githubusercontent.com/garevna/a-level-js-lessons/master/ico/no_entry-30.png

# <img src="https://avatars2.githubusercontent.com/u/19735284?s=40&v=4" width="30" title="Ⓒ Irina Fylyppova ( garevna ) 2019"/> Конструктор

Настало время разобраться с тем, что же такое конструктор

:white_square_button: Это функция ( *`отсюда следует, что там можно что-то спрятать`* )

:white_square_button: Чтобы она работала как **конструктор**, при вызове  перед ее именем нужно указать ключевое слово **`new`**, и в этом случае:
* ей не нужен оператор ~~return~~, но при этом она вернет **экземпляр** объекта
* внутри нее **`this`** будет указывать не на ~~глобальный объект~~, а на возвращаемый **экземпляр**
* все объявленные внутри нее переменные и функции будут *инкапсюлированы* в созданном **экземпляре** ( *`т.е. будут собственными свойствами и методами экземпляра`* )
* у нее будет свойство **`prototype`** ( *`которое бывает только у функций`* )
* то, что мы поместим в свойство **`prototype`**, *унаследуют* все экземпляры

:white_square_button: Имена конструкторов принято начинать с заглавной литеры ( *`потому что по-сути имя конструктора - это имя класса`* )

:coffee: 1
```javascript
function Sample ( params ) {}

var obj = new Sample()
```
Выведем в консоль экземпляр **obj**:
```javascript
▼ Sample {}
    ▼ __proto__:
        ► constructor: ƒ Sample( params )
        ► __proto__: Object
```
* мы создали пустой объект класса **Sample** `( точнее, мы создали экземпляр объекта )`
* у него нет собственных свойств `( потому что в конструкторе ничего не объявлено )`
* у него есть *цепочка прототипов* - это вложенные одно в другое свойства  **`__proto__`**
* первое "звено" в цепочке прототипов - это ссылка на свойство **`prototype`** функции-конструктора **Sample**
* свойство **`prototype`**  функции-конструктора **Sample**  является объектом
* это значит, что у него тоже есть свойство **`__proto__`**
* это вложенное свойство **`__proto__`** - следующее "звено" в цепочке прототипов
* оно является ссылкой на **Object**

```javascript
Sample.prototype
```
```
▼ {constructor: ƒ}
    ► constructor: ƒ Sample( params )
    ► __proto__: Object
```

Мы можем добавить свойства в **`prototype`** конструктора **Sample**
```javascript
Sample.prototype.setNewProperty = function ( propName, propValue ) {
    this [ propName ] = propValue
}
```
Если теперь вывести в консоль экземпляр **obj**, то в его свойстве **`__proto__`** мы обнаружим новое перечислимое свойство **setNewProperty** ( *унаследованный метод* )

Вызовем этот метод:
```javascript
obj.setNewProperty ( "name", "Petro" )
```
и обнаружим, что у экземпляра **obj** появилось новое *собственное перечислимое* свойство **name**

:warning: При обращении к свойству сначала оно ищется среди собственных свойств экземпляра, и если не будет найдено, то поиск будет продолжен среди свойств прототипа, и так далее, пока не закончится цепочка прототипов

:white_square_button: Конструктор позволяет создавать экземпляры объектов, имеющих не только публичные, но и приватные свойства и методы

## :mortar_board: Function

###### Конструктор
```javascript
var func = new Function (
    `
        var x = "Hello"
        var y = "baby"
        console.log ( x + ", " + y )
    `
)
console.log ( func )
func()
```
###### Result:
```console
ƒ anonymous(
) {

        var x = "Hello"
        var y = "baby"
        console.log ( x + ", " + y )

}
Hello, baby
```

_________________________________________________________________________

![](https://github.com/garevna/js-course/raw/master/images/a-level-ico.png?raw=true)