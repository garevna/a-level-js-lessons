# Document Object Model

## MutationObserver

Constructor

~~~js
var target = document.body.appendChild (
    document.createElement ( "h2" )
)
target.innerText = "Hello"
target.style.color = "#097"

var input = document.body.appendChild (
    document.createElement ( "h3" )
)
input.innerText = "Hello"
input.contentEditable = true
input.style = `
    padding: 5px 10px;
    border: solid 1px #999;
    font-family: Arial;
    color: #f50;
`
 
var observer = new MutationObserver (
    function ( mutations ) {
        mutations.forEach(
            function ( mutation ) {
                mutation.type === "characterData" ?
                    target.innerText = mutation.target.data :
                    null
            }
        )   
    }
)
 
var config = {
    attributes: true,
    childList: true,
    characterData: true,
    attributeOldValue: true,
    characterDataOldValue: true,
    subtree: true
}

observer.observe ( input, config )
~~~

**Live Demo**

{{{DOM-MutationObserver-1.js}}}