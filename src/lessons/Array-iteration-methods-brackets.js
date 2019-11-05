const section = document.body;

String.prototype.testBrackets = function () {
    
    let brackets = {
      '[': ']',
      '{': '}',
      '(': ')'
    }

    let stack = [], result = '';

    this.split("").forEach (
        symbol => {
            
            if ( !brackets [ symbol ] && stack.length === 0 ) return false;

            brackets [ symbol ] ? stack.push ( symbol ) : 
                                  symbol = brackets [ stack.pop() ];
            result += symbol
        }
    )

    return result == this && stack.length === 0
}

let input = document.body.appendChild (
    document.createElement ( "input" )
)
input.vaild = true

let message = document.body.appendChild (
    document.createElement ( "p" )
)

message.style = `
    color: red;
    font-family: Arial;
`

input.title = "Brackets and spaces only"
input.style = `
    padding: 4px 10px;
    color: #555;
    letter-spacing: 4px;
`

input.oninput = function ( event ) {
    event.target.valid = event.target.value.match ( /[^ {}()\[\]]/g );
    event.target.style.color = !event.target.valid ? "#09b" : "#f50";
    message.innerHTML = !event.target.valid ? "" :
        "Invalid input<br>Brackets - []{}() - and spaces only available";
}

input.onchange = function ( event ) {

    if ( event.target.valid ) {
        
        return
    }

    let valid = event.target.value.testBrackets ();

    message.textContent = valid ? "Valid" : "Invalid";
    message.style.color = valid ? "#09b" : "#f50";
}