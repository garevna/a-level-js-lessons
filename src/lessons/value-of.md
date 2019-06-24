# ![ico-30 study] valueOf

Метод  **_~valueOf()~_**  наследуется всеми объектами от **~Object~**

Этот метод вызывается автоматически, когда необходимо вернуть примитивное значение объекта

Например, если объект сравнивается с числом

~~~javascript
var obj = {
   num: 5,
   val: 10,
   x: 11,
   valueOf: function () {
      return this.num + this.val - this.x
   }
}
~~~

Если теперь мы выполним сравнение:

~~~javascript
obj == 4
~~~

то получим  *~true~*

При выполнении сравнения будет вычисляться примитивное значение объекта, т.е. вызываться метод **~valueOf()~**

Если примитивное значение объекта вычислить невозможно, то будет возвращен сам объект

**~valueOf ()~** - **_унаследованный_** метод любого объекта

Но это не означает, что мы не можем его переопределить

![ico-25 cap] ** 1 **

~~~javascript
var human = {
   name: "Ivan",
   age: 25,
   valueOf: function () {
      return this.name + ": " + this.age
   }
}

console.info ( human + "!" ) // Ivan: 25!
~~~

___________________

![ico-25 cap] ** 2 **

Конечно, так делать не стоит, но все-таки интересно ![ico-20 smile]

в результате выполнения следующего кода:

~~~javascript
Object.prototype.valueOf = function () {
    return "Это объект, блин, а не игрушка!"
}
~~~

все нативные объекты JS будут "ругаться" соответствующим образом при попытке получить их примитивное значение

~~~javascript
console.info ( Number + "" )
~~~

~~~console
Это объект, блин, а не игрушка!
~~~

__________

![ico-25 cap] ** 3 **

~~~javascript
const test = {
   num: 0,
   valueOf: function () {
      return this.num += 1
   }
}
~~~

![ico-25 question] Что вернет выражение:

~~~javascript
test == 1 && test == 2 && test == 3
~~~

____________________

[![ico-30 hw] **Тесты**](https://garevna.github.io/js-quiz/#valueOf)
