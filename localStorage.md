# :mortar_board: localStorage
###### Локальное хранилище данных на клиенте
###### Свойство глобального объекта window
###### Объем 5Mb

<img src="https://lh5.googleusercontent.com/SXRWoXR2DCrwVt9HlDSS9mHqzDN-OaALoHA2CaS47eTbuOt3hYAY4ZtE-TTsXChd8oHTJY_zcLnfYxyIe7S5b2-bqTP0Ew4ZY0pApXqlrQ6yPjWqUv50nLxyF598YiAHn6zZ52XSbw4LhFI" width="50"/><br/>
<img src="https://lh3.googleusercontent.com/PiqN6DSsKBOXC4M6ziRLdGzKX97HdnP071HwE5J-ooSgqOLK5MXqn118vTcPS-pSpeCqVvDtu-XNYyDrEhFwC5PDpaeBXuQi9o1t63CdNE4KJPTpmpTsuV5u_mbRUDBmsBDzRwYAQSKfTjY" width="700"/><br/>
<hr/>
<img src="https://lh6.googleusercontent.com/PGj3ajCzD9Oe5oXyzOKj4zVLTHUGcMV5FzUJfgSjYXyhmAJEKsEPbq4z72kdb-NVXdBD98ufyoDl6JD_6Azzd_Nt2Xk0fIr4-K7Ns-gmt-TizO8M4O-kEkqvy9rtiCpcCnNWyvv7OaDMA9A" width="50"/><br/>

<img src="https://lh4.googleusercontent.com/iugMdt41GkC9IgOugs_E9vAkMsTGwx_WDI1jm_SHqMmllPKRPOD59Jgvt5Viff0vo_eV8_kRNXDfoWMDQrgUqV0CSr-2Gh1w9RybES4oEh6VUz3TBNNx7n5iVmow7zZHjpgDOXi44O-fw0A" width="700"/>

## :mortar_board: Методы
#### :radio_button: setItem ( key, value )
###### поместить данные в хранилище
```javascript
localStorage.setItem ( "figure", "circle" )
localStorage.setItem ( "circle", 100 )
localStorage.setItem ( "color", "red" )
```
В localStorage можно хранить только строки<br/>
Поэтому для сохранения объекта нужно превратить его в строку:
```javascript
var user = {
    name: "Иван",
    lastVisit: "27.02.2018",
    lastPage: "/home/page_07"
}
localStorage.setItem (
    "user",
    JSON.stringify ( user )
)
```
<img src="https://lh6.googleusercontent.com/C5_6UMa6lCRV-0uIPrpFc2EnrRJbpl4GE3TJmu1F5IjBbKVqu7IFK_OhWBnvIzRPX5bCblGaIqRDKlNNG_2r_4J2yriXO0jPcS_MWUHcEQwj8AJ8bziGqU1Kowl4MhQsMnBd3T2jUkwXmhE" width="580"/>

#### :radio_button: getItem ( key )
###### получить данные из хранилища
```javascript
localStorage.getItem ( "figure" )  // "circle"
localStorage.getItem ( "circle" )  // "100"
localStorage.getItem ( "color" )   // "red"
```
К данным в хранилище можно получить доступ и так:
```javascript
localStorage [ "figure" ]  // вернет "circle"
localStorage [ "circle" ]  // вернет "100"
localStorage [ "color" ]   // вернет "red"
```
Теперь, если прочитать данные их хранилища
```javascript
localStorage [ "user" ]
```
то мы получим строку
```javascript
'{ "name": "Иван", "lastVisit": "27.02.2018", "lastPage": "/home/page_07" }'
```
Чтобы получить объект user, нужно распарсить эту строку:
```javascript
JSON.parse ( localStorage [ "user" ] )
```
#### :radio_button: removeItem( key )
```javascript
localStorage.removeItem ( "circle" )
```
#### :radio_button: clear ()
###### очищает хранилище
#### :radio_button: key ()
<img src="https://lh4.googleusercontent.com/HIMDL3cti50OFewe729t9aiJogCWrtQzMJklRwdtJqCgswUei2jrvEK0Q23qW3wzerPgfsKlIgHooc75MBUisfhn8OhlxAvQTDI_x3DPxJSJQMgkn-V_G6L7XW9cFrDwllsj7uhP99tFNRo" width="200"/>

:coffee: :one:
###### Получим все имена ключей:
```javascript
let k = 0
while ( k < localStorage.length )
    console.log ( localStorage.key( k++ ) )
```
:coffee: :two:
```javascript
localStorage.setItem ( "url", location.href )
var user = {
    name: prompt ( "Enter your name" ),
    last_visit: new Date().toLocaleString().split(", ")[0]
}
localStorage.setItem (
    "user",
    JSON.stringify ( user )
)
```
Если вывести в косоль свойства объекта localStorage:
```javascript
for ( var x in localStorage ) {
    console.log ( x )
}
```
то в консоли мы увидим не только имена помещенных нами в хранилище данных, но и имена прототипных свойств и методов объекта `localStorage`:
```console
circle
color
figure
user
length
key
getItem
setItem
removeItem
clear
```
:coffee: :three:
###### Мы можем добавить новые методы объекту `localStorage`, используя свойство `prototype` конструктора `Storage`
```javascript
Storage.prototype.getItemList = function () {
    for ( var x in this ) {
        console.log ( x, ": ", this [ x ] )
    }
}
```
<img src="https://lh4.googleusercontent.com/7xyx1vvwXZw0F1hQx7dR3HUca227YXbz5ScaTplal2XqZxsVeGT_OIb-JQomW5Ao0ZVqQSeQvdeUBShrPB4_yRioGo_0MnYiu9GU7WiXvd-2-VyiO4Z-IcFhrogdPtz7JM10SQbKg_OU7gA" width="580"/>

###### Как видите, мы можем расширять функциональность объекта  localStorage