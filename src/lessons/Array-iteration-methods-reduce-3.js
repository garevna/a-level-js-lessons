const section = document.body;

section.style["letterSpacing"] = "2px"

document.body.innerHTML = JSON.stringify([ "first", "second", "third", "fourth" ]
    .reduce( ( res, item, index, arr ) => {
        res[ index ] = arr[ arr.length - index - 1 ]
        return res
    },
    []
)).toString()
