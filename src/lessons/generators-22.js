const section = document.body

function* testArgGenerator ( x ) {
    section.innerHTML += `<p><small>I receive: x = ${x}</small></p>`
    var y = ( yield ( x + 1 ) )
    section.innerHTML += `<p><small>I remember: x = ${x}</small></p><p><small>I receive: y = ${y}</small></p>`
    var z = ( yield ( y * 2 ) )
    section.innerHTML += `<p><small>I remember: x = ${x}, y = ${y}</small></p><p><small>I receive: z = ${z}</small></p>`
    return ( x + y + z )
}

var testArg = testArgGenerator ( 10 )

for ( let num of [ 0, 15, 6 ] ) {
    let val = testArg.next(num).value
    section.innerHTML += `<p style="background-color: #ffff0050; color: #fd5; padding: 2px 4px; text-shadow: 1px 1px 2px #000;"><img src="https://www.webfx.com/tools/emoji-cheat-sheet/graphics/emojis/warning.png" width="20" style="vertical-align:text-bottom"> <small style="color: #999;">►</small> Emitted value: ${val}</p>`
}