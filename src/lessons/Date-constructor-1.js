let section = document.body

let currentDate = section.appendChild (
    document.createElement ( "p" )
).innerHTML = "<small>Текущая дата: </small><span style='color:#09b'>" + new Date().toLocaleDateString() + "</span><small>&nbsp;(" + new Date().toLocaleTimeString() + ")</small>"

let label = section.appendChild (
    document.createElement ( "p" )
).innerText = "укажите день рождения"

const input = section.appendChild (
    document.createElement ( "input" )
)

input.type = "date"

let demo = section.appendChild (
    document.createElement ( "p" )
)

function getRelativeData ( data, days ) {
    if ( !( data instanceof Date ) ) return console.log ( "Invalid date" )
    return new Date ( data.setDate ( data.getDate() + days ) )
}

input.onchange = function ( event ) {
    var birthday = new Date ( event.target.value )

    var ms = birthday.setFullYear( new Date().getFullYear() ) - new Date();
    var hours = ms / 3600000
    var days = Math.round ( hours / 24 )
    
    section.innerHTML = days < 0 ? `<p>День рождения был <span style="color: #f50">${Math.abs ( days )}</span> дней назад</p>` : 
        `<p>До дня рождения осталось <span style="color: #90b">${days}</span> дней</p>`;
}