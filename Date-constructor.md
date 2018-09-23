# 🎓 Date ()

Создать объект даты и времени можно с помощью конструктора **Date ()**
```javascript
var myData = new Date ( year,  month, day, hours, minutes, seconds, milliseconds )
```
Конструктор принимает аргументы: год, месяц, число, час, минуты, секунды ( и миллисекунды )

`нумерация месяцев начинается с 0  ( январь - 0, февраль - 1 и т.д. )`

Но можно и проще:
```javascript
var newData = new Date ( год, месяц, число )
```
Если вызвать конструктор без аргументов, будет создан объект даты с текущими значениями даты и времени

Если передать аргументы год, месяц и день месяца, то будет создан объект даты с указанным значением даты

Например, в результате выполнения кода:
```javascript
var newData = new Date ( 2017,  11,  10 )
```
    в переменной   newData  будет:
    Sun Dec 10 2017 00:00:00 GMT+0200 (Финляндия (зима))

Переменная  **newData**  является объектом ( 
```javascript
typeof  newData            // "object"
```
Это объект класса **Date**
```javascript
newData instanceof Date    // true
```
`т.е. создан конструктором Date ()`

Все объекты класса **Date** имеют ряд свойств и методов

    ✅ Метод  getDay ()          вернет порядковый номер дня недели ( начиная с  0 - воскресенье )
    ✅ Метод  getFullYear ()     вернет год
    ✅ Метод  getMonth ()        вернет порядковый номер месяца ( начиная с  0 )
    ✅ Метод  getDate ()         вернет день месяца ( начиная с  1 )
    ✅ Метод  setDate ()         установит день месяца, указанный аргументом
    ✅ Метод  getHours ()        вернет часы
    ✅ Метод  getMinutes ()      вернет минуты
    ✅ Метод  getSeconds()       вернет секунды

:coffee:
```javascript
var newData = new Date ( 2017,  11,  10 )
newData
// Sun Dec 10 2017 00:00:00 GMT+0200 (Восточная Европа, стандартное время)
newData.toLocaleString()    // "10.12.2017, 0:00:00"
newData.setHours(12)
newData.toLocaleString()    // "10.12.2017, 12:00:00"
newData.setMinutes(45)
newData.toLocaleString()    // "10.12.2017, 12:45:00"
newData.setSeconds(45)
newData.toLocaleString()    // "10.12.2017, 12:45:45"
newData.setDate(45)
newData.toLocaleString()    // "14.01.2018, 12:45:45"
```

## [💼 Упражнения](https://docs.google.com/forms/d/e/1FAIpQLScAFYBPpPFxuhTyuT6izba6WKRIN3ETICHKf_IIWCIL0qzkIQ/viewform)