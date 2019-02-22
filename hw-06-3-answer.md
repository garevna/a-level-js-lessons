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