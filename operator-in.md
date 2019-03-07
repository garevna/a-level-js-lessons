## :mortar_board: Оператор in

Оператор **`in`** возвращает `true`, если свойство содержится в указанном объекте или в его цепочке прототипов

```javascript
let sample = {
    type: "figure",
    class: "circle",
    color: "red"
}
console.log ( "type" in sample )  // true
```