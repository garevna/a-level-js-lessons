const addElem = ( tag = "input", container ) =>
    ( container && container.nodeType === 1 ?
                container : document.body )
        .appendChild ( document.createElement ( tag ) )
