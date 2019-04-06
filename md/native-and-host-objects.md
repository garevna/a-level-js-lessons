# <img src="https://avatars2.githubusercontent.com/u/19735284?s=40&v=4" width="30" title="Ⓒ Irina Fylyppova ( garevna ) 2019"/> Нативные и хост-объекты JS

Нативные объекты определяются спецификацией языка

Нативные объекты представлены **встроенными объектами**
```javascript
// объекты
     Math
     JSON
// конструкторы
     Array
     Boolean
     Date
     Error
     Function
     Map
     Number
     Object
     Promise
     Proxy
     RegExp
     String
     ...
```
и объектами, которые создаются в процессе работы кода
```javascript
var obj = {
    name: "Google",
    show: false
}
```
<a name="host"></a>

| [:arrow_heading_up:](#top) | <img width="800"/> | [:arrow_heading_down:](#literal) |
|-|-|-|

**host-объекты** - это объекты среды, в которой функционирует код

К   host-объектам относятся объекты **BOM** и **DOM**
```javascript
// объекты
     window
     document
     history
     location
     console
     ...
// конструкторы
     Event
     HTMLElement
     XMLHttpRequest
     ...
```
:warning: `Поскольку конструкторы - это функции, для получения дерева их свойств нужно использовать метод console.dir ( а не console.log )`
```javascript
console.dir ( Promise )
console.dir ( XMLHttpRequest )
```

Создать нативный объект JS можно двумя способами:

* С помощью литерала объекта
* С помощью конструктора
