# :mortar_board: Итерирующие методы массивов

[`entries()`](Array.prototype.entries)<br/>
[`every()`](Array.prototype.every)<br/>
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
***
## :mortar_board: sort()
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
    ( x, y ) => x.value > y.value
)
```
###### Результат в консоли:
![](https://lh3.googleusercontent.com/_kieTSevJPydMdJvUSTGAQmoLtEipovy2egnkI-OhWoeiEpzmmPvFpN52pWRe_C5Bi3_K7mybJ3pXOc7egWdOlCqrHRXo916ICx9S39_aHNHnH2Pf-2b4b8CMDU-txQ2bYYxDHvLXXoIKOo)

Для понимания механизма сортировки выведем в консоль значения сравниваемых элементов массива на каждой итерации:
```javascript
var resArray = sourceArray
    .sort (
        ( x, y ) => {
            console.log ( x, y )
            return  x.value - y.value
        }
    )
```
###### Результат в консоли:
![](https://lh5.googleusercontent.com/XmbzknCG7kbLJdPV9BeqUAsbzTHjkNk5iGlLHP-HxmrpS4adhF423C9tU5nSbxhYwDfpJcOOQpdRg2otOPquShU_6wojcwZqiFKp53N01KpRYW8gZug0IK_gkMHkF1HKX7gSAzsz5I2j1f8)

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
###### Результат в консоли:
![](https://lh3.googleusercontent.com/u0aPsglhKK5UuoR5jJ-PYaURxvHFysDomO4yhpzGsTq1eLG9BfCDMuAf_kQ3ULL-e2xluQL49PVdgunPTH62i_c_oPtqPaDTWmrqrZobhnUd66v9lRvtWPPEa_SqEWNbf8VbRoV80LyktK4)

Итак, в отличие от других итерирующих методов, функция, передаваемая методу в качестве единственного аргумента, принимает строго два параметра

:warning: Этому методу нельзя передать ссылку на контекст вызова

:warning: Число итераций будет заведомо больше числа элементов массива

☝ Самостоятельно попробуйте нарисовать блок-схему алгоритма сортировки массива методом  **`sort()`**
***
[`values()`](Array.prototype.values)<br/>
