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

# <img src="https://avatars2.githubusercontent.com/u/19735284?s=40&v=4" width="30" title="Ⓒ Irina Fylyppova ( garevna ) 2019"/>
[Итерирующие методы массивов](../lesson-09.md)

* [`entries()`](Array.prototype.entries.md)
* [`every()`](Array.prototype.every.md)
* [`filter()`](Array.prototype.filter.md)
* [`find()`](Array.prototype.find.md)
* [`findIndex()`](Array.prototype.findIndex.md)
* [`flatMap()`](Array.prototype.flatMap.md)
* [`forEach()`](Array.prototype.forEach.md)
* [`keys()`](Array.prototype.keys.md)
* [`map()`](Array.prototype.map.md)
* [`reduce()`](Array.prototype.reduce.md)
* [`reduceRight()`](Array.prototype.reduceRight.md)
* [`some()`](Array.prototype.some.md)

_______________________________________________________________________

## ![ico25] sort()

В полном смысле слова этот метод нельзя назвать методом итерирования массива, поскольку число итераций больше чем число элементов массива

Однако итерации имеют место быть

И перебор элементов массива налицо

Метод сортирует массив согласно заданному условию сортировки

Условие сортировки проверяет передаваемая методу функция

Функция получает два аргумента для попарного сравнения

Функция возвращает одно из трех значений:

* 0 - совпадение элементов
* 1 - первый аргумент больше второго
* -1 - второй аргумент больше первого

На основании возвращенного функцией значения метод меняет порядок следования элементов в массиве

![cap-30]

```javascript
var sourceArray = [
    {  title: "fond",  value:  100 },
    {  title: "salary",  value:  400 },
    {  title: "bonus",  value:  70 },
    {  title: "debt",  value:  700 },
    {  title: "credit",  value:  200 },
    {  title: "payments",  value:  150 },
    {  title: "income",  value:  320 },
]
var resArray = sourceArray.sort (
    function ( x, y ) {
        return x.value - y.value
    }
)
```

###### Результат в консоли:

```console
▼ (7) [{…}, {…}, {…}, {…}, {…}, {…}, {…}]
  ► 0: {title: "bonus", value: 70}
  ► 1: {title: "fond", value: 100}
  ► 2: {title: "payments", value: 150}
  ► 3: {title: "credit", value: 200}
  ► 4: {title: "income", value: 320}
  ► 5: {title: "salary", value: 400}
  ► 6: {title: "debt", value: 700}
    length: 7
  ► __proto__: Array(0)
```

Для понимания механизма сортировки выведем в консоль значения сравниваемых элементов массива на каждой итерации:

```javascript
var resArray = sourceArray
    .sort (
        function ( x, y ) {
            console.log ( `${x.title} - ${y.title} = ${x.value - y.value}` )
            return  x.value - y.value
        }
    )
```

###### Результат в консоли:

```console
fond - bonus = 30
payments - fond = 50
credit - payments = 50
income - credit = 120
salary - income = 80
debt - salary = 300
```

или так:

```javascript
var tmp =[]
var resArray = sourceArray
    .sort (
        function ( x, y ) {
            tmp.push ( {
                id: x.title + " > " + y.title,
                res: x.value > y.value
            } )
            return  x.value - y.value
        }
    )
```

###### tmp:

```console
▼ (13) [...]
  ► 0: "salary - fond = 300"
  ► 1: "bonus - salary = -330"
  ► 2: "bonus - salary = -330"
  ► 3: "bonus - fond = -30"
  ► 4: "debt - fond = 600"
  ► 5: "debt - salary = 300"
  ► 6: "credit - salary = -200"
  ► 7: "credit - fond = 100"
  ► 8: "payments - credit = -50"
  ► 9: "payments - fond = 50"
  ► 10: "income - credit = 120"
  ► 11: "income - debt = -380"
  ► 12: "income - salary = -80"
    length: 13
  ► __proto__: Array(0)
```

Итак, в отличие от других итерирующих методов, функция, передаваемая методу в качестве единственного аргумента, принимает строго два параметра

![warn-25] Этому методу нельзя передать ссылку на контекст вызова

![warn-25] Число итераций будет заведомо больше числа элементов массива

![hw-30] Самостоятельно попробуйте нарисовать блок-схему алгоритма сортировки массива методом  **`sort()`**

_______________________________________________________________________

* [`values()`](Array.prototype.values.md)

_________________________________________________________________________

![footer]
