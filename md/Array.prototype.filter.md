# :mortar_board: Итерирующие методы массивов

[`entries()`](Array.prototype.entries)<br/>
[`every()`](Array.prototype.every)<br/>
***
## :mortar_board: filter()
Метод **`filter()`** итерирует массив, проверяя выполнение заданного условия для каждого элемента массива

Метод возвращает новый массив

В результирующий массив попадут только те элементы, которые удовлетворяют условию фильтрации
```javascript
var sourceArray = [
    {  name: "Николай Василенко",  country:  "Украина" },
    {  name: "Дюк Шейн",  country:  "США" },
    {  name: "Демид Швейк",  country:  "Франция" },
    {  name: "Семен Картко",  country:  "Украина" },
    {  name: "Маргарет Джонсон",  country:  "США" },
    {  name: "Филипп Данько",  country:  "Украина" },
    {  name: "Роберт Трамп",  country:  "США" },
]

var usa = sourceArray.filter ( x => x.country === "США" )

console.log ( usa )
```
###### Результат в консоли:
![](https://lh4.googleusercontent.com/dPJ7fo_MpTFLila8yzWxmVCTxW6QRyd44lWhg_fGoAGeg1JTCj4Ni-zfy63rKdodIK017yyAqgSrDeao_QZW4vhCY44EjO7ltOGjoGU0BaR3QlRXv6VmByUKw_HyE4SilpWEaAouNcOPwrs)
***
* [`find()`](md/Array.prototype.find.md)
* [`findIndex()`](md/Array.prototype.findIndex.md)
* [`flatMap()`](md/Array.prototype.flatMap.md)
* [`forEach()`](md/Array.prototype.forEach.md)
* [`keys()`](md/Array.prototype.keys.md)
* [`map()`](md/Array.prototype.map.md)
* [`reduce()`](md/Array.prototype.reduce.md)
* [`reduceRight()`](md/Array.prototype.reduceRight.md)
* [`some()`](md/Array.prototype.some.md)
* [`sort()`](md/Array.prototype.sort.md)
* [`values()`](md/Array.prototype.values.md)
