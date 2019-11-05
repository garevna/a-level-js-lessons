const section = document.body;

section.style["letterSpacing"] = "3px"

document.body.innerHTML = JSON.stringify([ "first", "second", "third", "fourth" ]
    .reduce( ( res, item, index, arr ) => {
        res.push ( arr.shift() )
        return res
    },
    []
))
