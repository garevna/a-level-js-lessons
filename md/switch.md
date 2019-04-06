# <img src="https://avatars2.githubusercontent.com/u/19735284?s=40&v=4" width="30" title="Ⓒ Irina Fylyppova ( garevna ) 2019"/> switch

Оператор  **switch** предназначен для ветвления кода на несколько веток в зависимости от значения *выражения*,
передаваемого ему в качестве операнда

```javascript
switch ( выражение )
```

:coffee:

```javascript
var words

switch ( season ) {
    case "Зима":
        words = [ "снег", "елка", "каток", "шуба" ]
        break
    case "Весна":
        words = [ "капель", "ласточки", "подснежники", "цветение" ]
        break
    case "Лето":
        words = [ "жара", "речка", "отпуск", "каникулы" ]
        break
    case "Осень":
        words = [ "школа", "листопад", "урожай", "дождь" ]
        break
    default:
        break
}
```

***

| [:coffee: Пример в песочнице](https://jsfiddle.net/garevna/g4roemnL/27/) | [:briefcase: **Тесты**](https://garevna.github.io/js-quiz/#switch) | [:link: w3schools](https://www.w3schools.com/js/js_switch.asp) |
|-|-|-|
