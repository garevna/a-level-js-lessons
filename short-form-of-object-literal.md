#### :coffee: 1

```javascript
let name = "Ivan", age = 25
let user = { name, age }

console.log ( user )
```

###### console

```console
► { name: "Ivan", age: 25 }
```

#### :coffee: 2

Не забывайте, что массивы и объекты передаются по ссылке

```javascript
let name = "Ivan", age = 25
let hobby = [ "football", "fishing" ],
    family = {
        mother: { name: "Mary", age: 50 },
        father: { name: "Stephan", age: 52 }
    }

let user = { name, age, hobby, family }

hobby.push ( "maps" )
family.sister = { name: "Helen", age: 20 }

console.log ( user )
```

###### console

```console
▼ { name: "Ivan", age: 25, hobby: Array(3), family: {…} }
    age: 25
  ▼ family:
      ► father: {name: "Stephan", age: 52}
      ► mother: {name: "Mary", age: 50}
      ► sister: {name: "Helen", age: 20}
      ► __proto__: Object
  ► hobby: (3) ["football", "fishing", "maps"]
    name: "Ivan"
  ► __proto__: Object
```