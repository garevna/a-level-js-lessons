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
            document.createElement ( "h3" )
        )
    var index = 0
    return function ( message ) {
        var letter = message [ index ]
        var num = index
        setTimeout ( 
            () => container.textContent += letter,
            1000 * velocity * num
        )
        index++ < message.length - 1 ? arguments.callee ( message ) : null
    }
})( 1 )

typeMessage ( `Welcome to the hell` )
```