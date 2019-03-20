:one:

```javascript
function typeMessage ( message, velocity ) {
    var container = document.getElementById ( "demo" ) ?
        document.getElementById ( "demo" ) :
        document.body.appendChild (
            document.createElement ( "h3" )
        )
    container.style = `color: magenta;`
    message.split("").forEach ( 
        ( letter, index ) => 
            setTimeout (
                () => container.textContent += letter,
                1000 * velocity * index
            )
    )
}

typeMessage ( `Welcome to the hell`, 1 )
```

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
var users = (
    function ( list ) {
        var users = []
        for ( var user of list )
            users.push ({
                name: user,
                present: false
            })

        return {
            setUserPresent ( userName, present ) {
                users.filter ( user => user.name === userName )[0].present = true
            },
            showPresent () {
                users.filter ( user => user.present )
                    .forEach ( user => console.log ( user ) )
            },
            showAbsent () {
                users.filter ( user => !user.present )
                    .forEach ( user => console.log ( user ) )
            }
        }
    }
)( [ "Иван", "Дмитрий", "Степан", "Михаил" ] )

users.showAbsent()
```