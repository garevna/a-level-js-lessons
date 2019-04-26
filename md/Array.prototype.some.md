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
[space-800]: https://raw.githubusercontent.com/garevna/a-level-js-lessons/master/ico/space-800.png

| ![ico25] <br/><sup>[**Lesson&nbsp;9**](../lessons/lesson-09.md)</sup> | <h2>Итерирующие методы массивов</h2>![space-800]<sup><sup>[entries()](Array.prototype.entries.md) • [every()](Array.prototype.every.md) • [filter()](Array.prototype.filter.md) • [find()](Array.prototype.find.md) • [findIndex()](Array.prototype.findIndex.md) • [flatMap()](Array.prototype.flatMap.md) • [forEach()](Array.prototype.forEach.md) • [keys()](Array.prototype.keys.md) • [map()](Array.prototype.map.md) • [reduce()](Array.prototype.reduce.md) • [reduceRight()](Array.prototype.reduceRight.md) • some() • [sort()](Array.prototype.sort.md) • [values()](Array.prototype.values.md)</sup></sup> | ![me] <br/><sup>[**Занятие&nbsp;9**](../lessons/lesson-09.md)</sup> |
|-|-|-|

_____________________________________________________________________

## ![ico25] some()

Осуществляет поиск в массиве по заданному условию

Возвращает логическое значение ( найдено / не найдено )

Функция, передаваемая методу в качестве первого аргумента, проверяет выполнение заданного условия для каждого элемента массива, и возвращает логическое значение

Массив итерируется до тех пор, пока функция не вернет значение `true`

В этом случае метод вернет  `true`

Если функция вернет `false` для всех элементов массива, метод вернет `false`

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

var res = people.some ( x => x.country === "Пакистан" )

console.log ( res )
```
В этом примере массив  **people**  проверяется на наличие в нем жителей Пакистана

Переменная  **res**  будет иметь значение `false`, поскольку таких "персонажей" в массиве нет

____________________________________________________________________________

#### [![cap-30] Примеры](Array.prototype-samples.md)
#### [![hw-30] Тесты](https://garevna.github.io/js-quiz/#arrayIterationMethods)
_________________________________________________________________________

![footer]
