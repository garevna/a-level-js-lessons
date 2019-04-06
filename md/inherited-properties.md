### <img src="https://avatars2.githubusercontent.com/u/19735284?s=40&v=4" width="30" title="Ⓒ Irina Fylyppova ( garevna ) 2019"/> Унаследованные свойства экземпляра

:coffee:
```javascript
var figure = {
        type: "Окружность",
        size: 100,
        color: "red"
}
```
Если "развернуть" экземпляр **figure** в консоли, то помимо собственных перечислимых свойств *`color`*, *`size`* и *`type`* мы увидим свойство **`__proto__`**, которое не было выведено в консоль, когда мы итерировали объект оператором `for...in`
```javascript
▼{ type: "Окружность", size: 100, color: "red" }
    color:"red"
    size:100
    type:"Окружность"
  ► __proto__:Object
```
Вывод - это свойство **неперечислимое**

Разберемся, является ли это свойство собственным

Значением этого свойства является ссылка на встроенный нативный объект ( конструктор ) **`Object`**

Если развернуть свойство **`__proto__`**, то в консоли мы увидим следующую картину:
```javascript
▼ __proto__:
   ► constructor: ƒ Object()
   ► hasOwnProperty: ƒ hasOwnProperty()
   ► isPrototypeOf: ƒ isPrototypeOf()
   ► propertyIsEnumerable: ƒ propertyIsEnumerable()
   ► toLocaleString: ƒ toLocaleString()
   ► toString: ƒ toString()
   ► valueOf: ƒ valueOf()
   ► _defineGetter__: ƒ __defineGetter__()
   ► __defineSetter__: ƒ __defineSetter__()
   ► __lookupGetter__: ƒ __lookupGetter__()
   ► __lookupSetter__: ƒ __lookupSetter__()
   ► get __proto__: ƒ __proto__()
   ► set __proto__: ƒ __proto__()
```
Первое, что обращает внимание - наш экземпляр создан конструктором **`Object`**:
```
constructor: ƒ Object()
```
Давайте развернем **`Object`** в консоли
```
( для этого используем метод  console.dir,
поскольку  Object() - это конструктор,
т.е. функция,
и метод console.log () вернет нам

     ƒ Object() { [native code] }
```
Обратите внимание на свойство **`prototype`** конструктора **`Object`**

Это объект

Развернем этот объект, и посмотрим на его содержимое:
```javascript
▼ prototype:
   ▶ constructor: ƒ Object()
   ▶ hasOwnProperty: ƒ hasOwnProperty()
   ▶ isPrototypeOf: ƒ isPrototypeOf()
   ▶ propertyIsEnumerable: ƒ propertyIsEnumerable()
   ▶ toLocaleString: ƒ toLocaleString()
   ▶ toString: ƒ toString()
   ▶ valueOf: ƒ valueOf()
   ▶ _defineGetter__: ƒ __defineGetter__()
   ▶ __defineSetter__: ƒ __defineSetter__()
   ▶ __lookupGetter__: ƒ __lookupGetter__()
   ▶ __lookupSetter__: ƒ __lookupSetter__()
   ▶ get __proto__: ƒ __proto__()
   ▶ set __proto__: ƒ __proto__()
```

:heavy_exclamation_mark: Ого, а оно полностью совпадает с тем, что мы обнаружили ранее в свойстве **`__proto__`** экземпляра **figure**

Пойдем далее, и заглянем в экземпляр **figure2**

Там мы тоже обнаружим свойство **`__proto__`**

и его содержимое будет точно таким же, как у экземпляра **figure**

Создадим пустой объект
```javascript
var obj = {}
```
и развернем его в консоли

Ба! знакомые все лица! :wink:

Мы видим все то же свойство **`__proto__`**

У всех нативных объектов JS по умолчанию есть это свойство

:warning: Свойство **`__proto__`** создаваемых *литералом* объектов JS - это ссылка на свойство **`prototype`** конструктора **`Object`**

А что там со *встроенными* нативными объектами?

Разверните в консоли объект **Array**
```javascript
console.dir ( Array )
```
и вы увидите цепочку протипов

Последним "звеном" в цепочке прототипов всегда будет **`Object`**
```javascript
console.dir ( Array.__proto__.__proto__ )  // Object
```
"Жирная точка" в конце цепочки прототипов - **`null`**

Аналогичная картина будет с любым встроенным конструктором

:memo: У встроенных объектов, которые не являются конструкторами ( типа *Math* ) цепочка протипов будет короче - свойство **`__proto__`** будет ссылкой на **`Object`**

#### :briefcase: **Задание**
выведите в консоль все нативные встроенные объекты и отследите в цепочке прототипов ссылку на **`Object`**
