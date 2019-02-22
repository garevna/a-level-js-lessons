```javascript
var style = document.head.appendChild (
    document.createElement ( "style" )
)
style.textContent = `
    .redBack {
        background-color: red!important;
    }
`

var elements = Array.from ( document.body.children )

console.log ( elements )

elements.forEach (
    elem => elem.tagName !== "SCRIPT" ? elem.classList.add( "redBack" ) : null
)
```

###### Вариант с заранее заданными элементами

```javascript
var style = document.head.appendChild (
    document.createElement ( "style" )
)
style.textContent = `
    .redBack {
        background-color: red!important;
    }
`

var tags = [ "header", "footer", "main", "div", "p" ]

var elem = tags.map (
    tag => document.querySelector ( tag )
)[0].classList.add( "redBack" )
```