## <img src="https://avatars2.githubusercontent.com/u/19735284?s=40&v=4" width="30" title="Ⓒ Irina Fylyppova ( garevna ) 2019"/> Методы массивов

* [`pop()`](Array-methods-pop)
* [`push()`](Array-methods-push)
* [`splice()`](Array-methods-splice)
* [`shift()`](Array-methods-shift)
* [`unshift()`](Array-methods-unshift)
* [`slice()`](Array-methods-slice)

______________________________________________________________________________

### :memo: concat ()

Метод объединяет два или более массива в один массив

Возвращаемое значение - новый массив

⚠️ Исходные массивы не изменятся

:coffee: ❶

```javascript
var ukrainianCities = [ "Киев", "Львов", "Харьков", "Одесса" ]
var europeanCities = [ "Монреаль", "Копенгаген", "Вена", "Лондон" ]
var newArray = ukrainianCities.concat ( europeanCities )
```

Результатом будет новый массив **newArray**:
```
[ "Киев", "Львов", "Харьков", "Одесса", "Монреаль", "Копенгаген", "Вена", "Лондон" ]
```

_____________________________________________________________________________________

* [`join()`](Array-methods-join)
* [`includes()`](Array-methods-includes)

______________________________________________________________________________________________

### [:briefcase: Тесты](https://garevna.github.io/js-quiz/#arrayMethods)
