<img src="https://avatars2.githubusercontent.com/u/19735284?s=40&v=4" width="30" title="Ⓒ Irina Fylyppova ( garevna ) 2019"/>

:one:

simple

:two:

```javascript
var messages = [
    "backspace",
    "enter",
    "shift",
    "control",
    "delete",
    "space",
    "subtract"
]

messages.getKey = () => {
    var key = new Date().toLocaleString().split(", ")[1]
    return log [ key ] ? log [ key + "[2]" ] ? key + "[3]" : key + "[2]" : key
}

var log = {}

var sendMessage = message => new Promise (
    resolve => setTimeout (
        () => resolve ( message ),
        Math.random () * 7000
    )
)

messages.forEach (
    ( message, index, arr ) => sendMessage ( message )
        .then (
            mess => Object.assign ( log,
                { [ arr.getKey() ] : message }
            )
        )
)
```

:three:

```javascript
var messages = [
    "backspace",
    "enter",
    "shift",
    "control",
    "delete",
    "space",
    "subtract"
]

messages.getKey = () => new Date().toLocaleString().split(", ")[1]

var log = {}

var sendMessage = message => new Promise (
    resolve => setTimeout (
        () => resolve ( message ),
        Math.random () * 5000
    )
)

var sendAll = () => {
    var index = 0
    function recursive () {
        sendMessage ( messages [ index++ ] )
            .then (
                response => {
                    if ( !response ) return
                    Object.assign ( log,
                        { [ messages.getKey() ] : response }
                    )
                    recursive ()
                }
            )
    }
    recursive ()
}

sendAll()
```
