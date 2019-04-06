:one:

```javascript
let clock = document.body.appendChild(
    document.createElement ( "h1" )
)

var counter = 0
while ( counter++ < 100 ) {
    setTimeout (
        () => clock.innerText = new Date().toLocaleString().split(", ")[1],
        1000 * counter
    )
}
```

_________________________________________________________

:two:

```javascript
var typeMessage = ( function ( velocity ) {
    const container = document.getElementById ( "demo" ) ?
        document.getElementById ( "demo" ) :
        document.body.appendChild (
            document.createElement ( "h4" )
        )
    var index = 0
    return function ( message ) {
        var num = index
        setTimeout ( 
            () => container.textContent += message [ num ],
            1000 * velocity * num
        )
        index++ < message.length - 1 ? arguments.callee ( message ) : null
    }
})( 1 )

typeMessage ( `Welcome to the hell` )
```

_____________________________________________________________________

:three:

```javascript
function User ( name ) {
    this.name = name
    this.id = this.counter()
}
User.prototype.counter = (
    function () {
        var counter = 0
        return function () {
            return this.id ? this.id : counter++
        }
    }
)()

var users = [
    new User ( "Семен" ),
    new User ( "Антон" ),
    new User ( "Демьян" ),
    new User ( "Василий" )
]
```