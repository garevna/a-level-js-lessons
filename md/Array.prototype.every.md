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

<table><tr><td width="50">

![ico25] <br/><sup>[**Lesson&nbsp;9**](../lessons/lesson-09.md)</sup>
  </td>
  <td width="800"><h2>Итерирующие методы массивов</h2></td>
  <td>

  ![me] <br/><sup>[**Занятие&nbsp;9**](../lessons/lesson-09.md)</sup></td>
</tr></table>

* [`entries()`](Array.prototype.entries.md)

________________________________________________________________________

## ![ico25] every()

Осуществляет проверку массива на предмет вхождения элементов, не удовлетворяющих заданному условию

Возвращает логическое значение:
  - если все элементы массива благополучно прошли проверку -  `true`
  - если хотя бы один элемент не прошел проверку - `false`

Функция, передаваемая методу в качестве первого аргумента, проверяет выполнение заданного условия для каждого элемента массива,
и возвращает логическое значение

Массив итерируется до тех пор, пока функция не вернет значение `false`

В этом случае метод вернет  `false`

Если функция вернет `true` для всех элементов массива, метод вернет `true`

![cap-30]

```javascript
var people = [
    {  name: "Николай Василенко",  country:  "Украина" },
    {  name: "Дюк Шейн",  country:  "США" },
    {  name: "Демид Швейк",  country:  "Франция" },
    {  name: "Семен Картко",  country:  "Украина" },
    {  name: "Маргарет Джонсон",  country:  "США" },
    {  name: "Филипп Данько",  country:  "Украина" },
    {  name: "Роберт Трамп",  country:  "США" },
]

var res = people.every ( x => x.country === "Украина" )

console.log ( res )
```

В этом примере массив  **`people`**  проверяется на наличие в нем жителей не Украины

Переменная  **`res`**  будет иметь значение `false`, поскольку в массиве есть элементы,
не удовлетворяющие заданному условию

________________________________________________________________________

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
* [`sort()`](Array.prototype.sort.md)
* [`values()`](Array.prototype.values.md)

_________________________________________________________________________

![footer]
