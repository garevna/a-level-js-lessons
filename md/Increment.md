## <img src="https://avatars2.githubusercontent.com/u/19735284?s=40&v=4" width="30" title="Ⓒ Irina Fylyppova ( garevna ) 2019"/> Инкремент (++)

Инкремент - это увеличение значения числовой переменной на единицу

Пост-префиксная форма:   ```y++```

Префиксная форма:        ```++y```

Пост-префиксная форма означает, что переменная будет увеличена после операции, в которой она принимает участие

:coffee:

```javascript
var x = 0, y = 2
var z = y + x++
```

После операции:

```javascript
var z = y + x++
```
значение переменной **z** будет ```2 + 0 = 2```,

а значение переменной **x** станет равным ```1```

А вот после такой операции:

```javascript
var x = 0, y = 2
var z = y + ++x
```
сначала значение переменной **x** станет ```0 + 1 = 1```,
а затем будет вычислено значение переменной **z**:  ```2 + 1 = 3```

## 🎓 Декремент (--)

Все то же самое, только значение не увеличивается на 1,
а уменьшается 😉

## [💼 Упражнения](https://docs.google.com/forms/d/e/1FAIpQLSdsKuS6kG1r5O3H62G_m32NK8a88jmFmJ5e4N2uAiDLAb31xQ/viewform)
***
[🔗 MDN](https://developer.mozilla.org/ru/docs/Web/JavaScript/Reference/Operators/Arithmetic_Operators)