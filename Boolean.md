# 🎓 Логические выражения

## 📖 Логические значения

Логических значений всего два:  **true** (истина)  и  **false**  (ложь)

## 📖 Операторы сравнения

Сравнивают две переменных ( или два выражения ) и возвращают логическое значение

    Оператор	                  Описание	            
                  
    ==	        нестрогое равенство  ( равенство значений )
    ===	        строгое равенство ( равенство значений и типов данных )
    !=	        нестрогое неравенство ( значения не равны )
    !==	        строгое неравенство ( сравниваются не только  значения, но и типы данных )
    >	        больше
    <	        меньше
    >=	        больше или равно
    <=	        меньше или равно


☕
```javascript
    var x = 5
//  Выражение	          Результат
    x == 8	           //  false	
    x == 5	           //  true
    x == "5"	           //  true
    x === 5	           //  true
    x === "5"	           //  false
    x != 8	           //  true
    x !== 5	           //  false
    x !== "5"	           //  true
    x !== 8	           //  true
    x > 8	           //  false
    x < 8	           //  true
    x >= 8                 //  false
    x <= 8                 //  true
```
________________________________________________________
[🔗 JavaScript Comparison and Logical Operators](https://www.w3schools.com/js/js_comparisons.asp)

## 📖 Логические операции

>>    ✅ Логическое "ИЛИ"  ( || )

>>    ✅ Логическое "И"  ( && )

>>    ✅ Логическое "НЕ"  ( ! ) ( отрицание )

### 📖 &&

логическое "*И*"
```javascript
✅ true  && true    -->    true
✅ true  && false   -->    false
✅ false && true    -->    false
✅ false && false   -->    false
```

✍ 
```javascript
    5 > 8 && 4 < 5   // -->    false  
    // explanation: 
    5 > 8            // -->    false,
    4 < 5            // -->    true,
    false && true    // -->    false
```
✍ 
```javascript
    8 > 5 && 4 < 5   // -->    true
    // explanation:
    8 > 5            // -->    true,
    4 < 5            // -->    true,
    true && true     // -->    true
```

✍ 
```javascript
    var    x = 4,    y = 10,    z = 8
    x > y && z < y   // -->    false
    // explanation:
    x > y            // -->    false,
    z < y            // -->    true,
    false && true    // -->    false
```
✍ 
```javascript
    x < y && z < y   // -->    true
    // explanation:
    x < y            // -->    true,
    z < y            // -->    true,
    true && true     // -->    true
```

### 📖 ||

логическое "*ИЛИ*"
```javascript
✅ true  || true    -->    true
✅ true  || false   -->    true
✅ false || true    -->    true
✅ false || false   -->    false
```

✍ 
```javascript
    5 > 8 || 4 < 5   // -->    true
    // explanation:
    5 > 8            // -->    false,
    4 < 5            // -->    true,
    false || true    //  -->   true
```
✍ 
```javascript
    5 > 8 || 4 > 5   // -->    false
    // explanation:
    5 > 8            // -->    false,
    4 > 5            // -->    false,
    false || false   // -->    false
```
✍ 
```javascript
    var  x = 4,  y = 10,  z = 8
    x > y || z < y   // -->    true
    // explanation:
    x > y            // -->    false,
    z < y            // -->    true,
    false || true    // -->    true
```
✍ 
```javascript
    x > y || z > y   // -->    false
    // explanation:
    x > y            // -->    false,
    z > y            // -->    false,
    false || false   // -->    false
```
### 📖 !

*Логическое отрицание*
```javascript
✅ ! true   // -->   false
✅ ! false  // -->   true
```
✍ 
```javascript
    !(5 > 8)   // -->    true
    // explanation:
    5 > 8      // -->    false,
    !false     // -->    true
```
✍ 
```javascript
    !(5 > 4)   // -->    false
    // explanation:
    5 > 4      // -->    true,
    !true      // -->    false
```
✋ для логических значений x, а так же значений **null**, **NaN**, **undefined**
```javascript
    x || !x    // всегда  true
```
✋ для логических значений x
```javascript
    x && !x    // всегда  false
```
☕ 1
```javascript
    var x = undefined
    var y = x || !x       // -->  true
    var z = x && !x       // -->  undefined
```
☕ 2
```javascript
    var x = null
    var y = x || !x       // -->  true
    var z = x && !x       // -->  null
```
☕ 3
```javascript
    var x = NaN
    var y = x || !x       // -->  true
    var z = x && !x       // -->  NaN
```
☕ 4
```javascript
    var x = 5
    var y = x || !x       // -->  5
    var z = x && !x       // -->  false
```
☕ 5
```javascript
    var x = "h"
    var y = x || !x       // -->  "h"
    var z = x && !x       // -->  false
```
☕ 6
```javascript
    var x = ""   ( пустая строка )
    var y = x || !x       // -->  true
    var z = x && !x       // -->  ""
```
☕ 7
```javascript
    var  x = 4,  y = 10

    !( x > y )   // -->    true
    // explanation:
    x > y        // -->    false,
    !( false )   // -->    true
```

## 📖 Логические выражения

Логические выражения - это конструкции из переменных и/или констант, связанных между собой операторами сравнения и/или логическими операторами

Логические выражения принимают значения **true** или **false**

☕ Примеры логических выражений
```javascript
    x >= y
    z == t
    z === t
    y != x  // значение y не равно значению x
    y !== x // или значение y не равно значению x,
            // или тип данных y не совпадает с типом данных x

    y != x 
    y !== x

    x > 8 && y === 5
    typeof x === "number" || x === null
    !x === y
```
***

## [💼 Упражнения](https://docs.google.com/forms/d/e/1FAIpQLSfjTMY7jF_kLLHzrE5bwhxOX7gUpbZ-M3mNv9fdFVvkf3K0Tg/viewform)