var target = document.body.appendChild (
    document.createElement ( "h2" )
)
target.innerText = "Hello"
target.style.color = "#09b"

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
    outline: none;
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

let comment = document.body.appendChild (
  document.createElement ( "p" )
)
comment.innerText = "Введите любой текст в нижнее поле ( оранжевый текст ) и отслеживайте изменения в верхнем ( синий текст )"
observer.observe ( input, config )