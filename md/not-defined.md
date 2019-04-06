### <img src="https://avatars2.githubusercontent.com/u/19735284?s=40&v=4" width="30" title="Ⓒ Irina Fylyppova ( garevna ) 2019"/> Селектор `:not(:defined)`

:coffee: :one:
```html
<body>
    <hello-element></hello-element>
    <bye-element></bye-element>
</body>
```
###### Запрос
```javascript
document.querySelectorAll ( ":not(:defined)" )
```
###### Результат
```console
▶ NodeList(2) [hello-element, bye-element]
```
###### Запрос
```javascript
document.querySelectorAll ( ":defined" )
```
###### Результат
```console
▶ NodeList(3) [html, head, body]
```
