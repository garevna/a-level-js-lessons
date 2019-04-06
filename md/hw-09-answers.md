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

_____________________________________________________________________

:three:

```javascript
let changeClass = ( classname, styleString ) => ( Array.from ( document.styleSheets )
    .filter ( sheet => !sheet.href )
        .map (
            sheet => Array.from ( sheet.cssRules )
                    .filter ( rule => rule.selectorText === `.{classname}` )
        )
           .filter ( item => item.length > 0 )
               .map ( item => item[0].cssText.split ("}")
                           .join ( `${styleString}}` )
               )
).length > 0 ? console.log ( "found" ) : 
    document.head.appendChild (
        document.createElement ( "style" )
    ).textContent = `.${classname} {${styleString}}`

changeClass ( "second-level-menu", "background-color: red!important;" )
```