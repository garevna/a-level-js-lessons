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

[`entries()`](Array.prototype.entries)<br/>
[`every()`](Array.prototype.every)<br/>

_________________________________________________________

## ![ico25] filter()

Метод **`filter()`** итерирует массив, проверяя выполнение заданного условия для каждого элемента массива

Метод возвращает новый массив

В результирующий массив попадут только те элементы, которые удовлетворяют условию фильтрации

![cap-30]

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

_________________________________________________________

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
