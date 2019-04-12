const observed = inputs.map (
    item => {
        let label = addElem ( "label" )
        let elem = addElem()
        elem.id = item
        label.for = item
        label.innerText = item
        addElem ( "br" )
        return elem
    }
)
