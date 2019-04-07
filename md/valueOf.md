# <img src="https://avatars2.githubusercontent.com/u/19735284?s=40&v=4" width="30" title="Ⓒ Irina Fylyppova ( garevna ) 2019"/> valueOf

Метод  **_`valueOf()`_**  наследуется всеми объектами от **`Object`**

Этот метод вызывается автоматически, когда необходимо вернуть примитивное значение объекта

Например, если объект сравнивается с числом
```javascript
var obj = {
   num: 5,
   val: 10,
   x: 11,
   valueOf: function () {
      return this.num + this.val - this.x
   }
}
```
Если теперь мы выполним сравнение:
```javascript
obj == 4
```
то получим  *`true`*

При выполнении сравнения будет вычисляться примитивное значение объекта, т.е. вызываться метод **`valueOf`**

Если примитивное значение объекта вычислить невозможно, то будет возвращен сам объект

**`valueOf ()`** - **__унаследованный__** метод любого объекта

Но это не означает, что мы не можем его переопределить

:coffee: :one:

```javascript
var human = {
   name: "Ivan",
   age: 25,
   valueOf: function () {
      return this.name + ": " + this.age
   }
}

console.info ( human + "!" ) // Ivan: 25!
```
***

:coffee: :two:

Конечно, так делать не стоит, но все-таки интересно :wink:

в результате выполнения следующего кода:
```javascript
Object.prototype.valueOf = function () {
    return "Это объект, блин, а не игрушка!"
}
```
все нативные объекты JS будут "ругаться" соответствующим образом при попытке получить их примитивное значение
```javascript
console.info ( Number + "" )
```
```console
Это объект, блин, а не игрушка!
```
***

:coffee: :three:

```javascript
const test = {
   num: 0,
   valueOf: function () {
      return this.num += 1
   }
}
```
:grey_question: Что вернет выражение:
```javascript
test == 1 && test == 2 && test == 3
```
***
### [:briefcase: Тесты](https://garevna.github.io/js-quiz/#valueOf)