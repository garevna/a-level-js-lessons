# :mortar_board: Итерирующие методы массивов

[`entries()`](Array.prototype.entries)<br/>
***
## :mortar_board: every()
Осуществляет проверку массива на предмет вхождения элементов, не удовлетворяющих заданному условию

Возвращает логическое значение: 
  - если все элементы массива благополучно прошли проверку -  `true`
  - если хотя бы один элемент не прошел проверку - `false`

Функция, передаваемая методу в качестве первого аргумента, проверяет выполнение заданного условия для каждого элемента массива, и возвращает логическое значение

Массив итерируется до тех пор, пока функция не вернет значение `false`

В этом случае метод вернет  `false`

Если функция вернет `true` для всех элементов массива, метод вернет `true`
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
В этом примере массив  **people**  проверяется на наличие в нем жителей не Украины

Переменная  **res**  будет иметь значение `false`, поскольку в массиве есть элементы, не удовлетворяющие заданному условию
***
[`filter()`](Array.prototype.filter)<br/>
[`find()`](Array.prototype.find)<br/>
[`findIndex()`](Array.prototype.findIndex)<br/>
[`flatMap()`](Array.prototype.flatMap)<br/>
[`forEach()`](Array.prototype.forEach)<br/>
[`keys()`](Array.prototype.keys)<br/>
[`map()`](Array.prototype.map)<br/>
[`reduce()`](Array.prototype.reduce)<br/>
[`reduceRight()`](Array.prototype.reduceRight)<br/>
[`some()`](Array.prototype.some)<br/>
[`sort()`](Array.prototype.sort)<br/>
[`values()`](Array.prototype.values)<br/>
