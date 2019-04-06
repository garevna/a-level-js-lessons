[ico25]: https://raw.githubusercontent.com/garevna/a-level-js-lessons/master/ico/a-level-25.png
[hw-30]: https://raw.githubusercontent.com/garevna/a-level-js-lessons/master/ico/breafcase-30.png

## <img src="https://avatars2.githubusercontent.com/u/19735284?s=40&v=4" width="30" title="Ⓒ Irina Fylyppova ( garevna ) 2019"/> Методы массивов

* [`pop()`](Array-methods-pop.md)
* [`push()`](Array-methods-push.md)
* [`splice()`](Array-methods-splice.md)
* [`shift()`](Array-methods-shift.md)
* [`unshift()`](Array-methods-unshift.md)
* [`slice()`](Array-methods-slice.md)
______________________________________________________________________________

### ![ico25] concat ()

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

* [`join()`](Array-methods-join.md)
* [`includes()`](Array-methods-includes.md)

______________________________________________________________________________________________

### [![hw-30] Тесты](https://garevna.github.io/js-quiz/#arrayMethods)

_________________________________________________________________________

![](https://github.com/garevna/js-course/raw/master/images/a-level-ico.png?raw=true)
