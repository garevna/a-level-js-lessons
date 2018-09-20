[:arrow_backward:](native-objects#literal) **Литерал объекта**

#### :coffee: 1

```javascript
var sample = {
    name: `Google`,
    testToken: ( function ( __token ) {
        return function () {
            return prompt ( "Input Your Token: " ) === __token
        }
    } )( prompt ( "Set Your Token: " ) ),
    page: function () {
        if ( this.testToken () ) 
            document.write ( '<h1>🤡</h1>' )
        else document.write ( '<h1>👺</h1>' )
    }
}
sample.page()
```
В этом примере при создании объекта запрашивается ввод токена доступа,

который будет сохранен в замыкании метода **testToken**

при попытке получения доступа к странице ( свойству **page** )

будет вызван метод **testToken**, который запросит токен доступа

и сверит его со значением, хранящимся в замыкании

Если значения совпадут, то на страницу будет выведено **🤡**

В противном случае - **👺**

[:arrow_backward:](native-objects#literal) **Литерал объекта**