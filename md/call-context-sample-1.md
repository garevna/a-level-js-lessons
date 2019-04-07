[ico20]: https://raw.githubusercontent.com/garevna/a-level-js-lessons/master/ico/a-level-20.png
[ico25]: https://raw.githubusercontent.com/garevna/a-level-js-lessons/master/ico/a-level-25.png
[hw-30]: https://raw.githubusercontent.com/garevna/a-level-js-lessons/master/ico/briefcase-30.png
[cap-30]: https://raw.githubusercontent.com/garevna/a-level-js-lessons/master/ico/coffee-30.png
[warn-25]: https://raw.githubusercontent.com/garevna/a-level-js-lessons/master/ico/warning-25.png
[link-25]: https://raw.githubusercontent.com/garevna/a-level-js-lessons/master/ico/link-25.png
[err-20]: https://raw.githubusercontent.com/garevna/a-level-js-lessons/master/ico/no_entry-20.png
[err-25]: https://raw.githubusercontent.com/garevna/a-level-js-lessons/master/ico/no_entry-25.png
[err-30]: https://raw.githubusercontent.com/garevna/a-level-js-lessons/master/ico/no_entry-30.png

[:arrow_backward:](function-object#call-context) **Контекст вызова**

#### :coffee: 1

Объявим три функции:

```javascript
function first () {
        console.log ( "Работает функция first" )
}
function second () {
        console.log ( "Работает функция second" )
}
function third () {
        console.log ( "Работает функция third" )
}
```
Все три функции объявлены в глобальном контексте, то есть они являются методами глобального объекта **`window`**

Как мы уже знаем, можно обращаться к свойствам объекта как к элементам ассициативного массива

Тогда конструкция:
```javascript
window [ "first" ]
```
вернет нам функцию  **`first`**, которая является свойством ( методом ) глобального объекта **`window`**

Для вызова этой функции не хватает только круглых скобок:

```javascript
window [ "first" ] ()
```
Используя этот факт, мы можем вызывать функцию, имя которой нам передано в переменной типа "*string*":
```javascript
for ( var func of [ "first", "second", "third" ] )
    window [ func ] ()
```

[:arrow_backward:](function-object#call-context) **Контекст вызова**

_________________________________________________________________________

![](https://github.com/garevna/js-course/raw/master/images/a-level-ico.png?raw=true)
