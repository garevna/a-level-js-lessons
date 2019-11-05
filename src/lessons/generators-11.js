const section = document.body

async function* messageGenerator ( arr ) {
    while ( arr.length > 0 ) {
        let result = await new Promise (
            function ( resolve ) {
                setTimeout (
                    () => resolve ( arr.shift() ),
                    1000
                )
            }
        )
        yield result
    }
}

async function showMessage ( message ) {
    const iterator = messageGenerator ( [...message] )
    let finish = false

    while ( !finish ) {
        let currentState = await iterator.next()
        section.textContent += !currentState.done ?
            currentState.value : ""
        finish = currentState.done
    }
}

showMessage ( "Привет, студент!" )
