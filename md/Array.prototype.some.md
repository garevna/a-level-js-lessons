# <img src="https://avatars2.githubusercontent.com/u/19735284?s=40&v=4" width="30" title="Ⓒ Irina Fylyppova ( garevna ) 2019"/> Итерирующие методы массивов

* [`entries()`](md/Array.prototype.entries.md)
* [`every()`](md/Array.prototype.every.md)
* [`filter()`](md/Array.prototype.filter.md)
* [`find()`](md/Array.prototype.find.md)
* [`findIndex()`](md/Array.prototype.findIndex.md)
* [`flatMap()`](md/Array.prototype.flatMap.md)
* [`forEach()`](md/Array.prototype.forEach.md)
* [`keys()`](md/Array.prototype.keys.md)
* [`map()`](md/Array.prototype.map.md)
* [`reduce()`](md/Array.prototype.reduce.md)
* [`reduceRight()`](md/Array.prototype.reduceRight.md)

_____________________________________________________________________

## :mortar_board: some()
Осуществляет поиск в массиве по заданному условию

Возвращает логическое значение ( найдено / не найдено )

Функция, передаваемая методу в качестве первого аргумента, проверяет выполнение заданного условия для каждого элемента массива, и возвращает логическое значение

Массив итерируется до тех пор, пока функция не вернет значение `true`

В этом случае метод вернет  `true`

Если функция вернет `false` для всех элементов массива, метод вернет `false`
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


________________________________________________________________________

* [`sort()`](md/Array.prototype.sort.md)
* [`values()`](md/Array.prototype.values.md)

_________________________________________________________________________

![](https://github.com/garevna/js-course/raw/master/images/a-level-ico.png?raw=true)
