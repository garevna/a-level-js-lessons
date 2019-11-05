const section = document.body

let btn = section.appendChild (
    document.createElement ( "button" )
)

btn.innerText = "new"
btn.onclick = function ( event ) {
    let ava = getAvatar.next()
    if ( !ava.done ) section.appendChild ( ava.value )
}

function* avaGenerator () {
    let num = 9
    while ( ++num < 99 ) {
        let ava = document.createElement ( "img" )
        ava.src = `https://www.shareicon.net/data/2015/12/14/2078${num}_face_300x300.png`
        ava.width = "80"
        yield ava
    }
}

let getAvatar = avaGenerator ()