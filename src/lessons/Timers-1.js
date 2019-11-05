const section = document.body

// section.timeStamps = []

// section.onclick = (
//     function () {
//         let num = 0
//         const timeStart = new Date().getTime()
//         section.timeStamps.push ( undefined )
//         let func = function () {
//             console.log ( num++, section.timeStamps[num], section.timeStamps[num-1] )
//             let end = section.timeStamps[num]
//             let start = section.timeStamps[num-1]

//             start === end ? null : section.appendChild ( document.createElement ( "p" ) )
//                 .innerText = `${num}: ${section.timeStamps[num]}\n`
//         } 

//         return function ( event ) {
//             event.target.timeStamps.push ( new Date().getTime() - timeStart )
//             requestAnimationFrame( func )
//         }
//     }
// )()

// for ( let num = 0 ; num < 200; num++ ) 
//     section.dispatchEvent ( new Event ( "click" ) )

section.timeStamps = []

section.showClick = function () {
    let elem = section.appendChild (
        document.createElement ( "span" )
    )
    let interval = section.timeEnd - section.timeStart
    let back = interval >= 1000 ? '#09b' : 'transparent'
    section.timeStart = interval >= 1000 ? section.timeEnd : section.timeStart

    elem.style = `
        position: relative;
        display: inline-block;
        width: 10px;
        height: 20px;
        border: dotted 0.1px white;
        box-sizing: border-box;
        background: ${back};`
}

section.onclick = (
    function () {
        section.timeStart =section.timeEnd =  new Date().getTime()

        return function ( event ) {
            section.timeEnd = new Date().getTime()
            requestAnimationFrame( section.showClick )
        }
    }
)()