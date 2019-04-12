class Observer {
    constructor ( subjects ) {
        this.subscribers = []
        this.events = subjects.map (
            function ( elem ) {
                elem.oninput = function ( event ) {
                    this.broadcast ( { [elem.id]: event.target.value } )
                }.bind(this)
                return elem.oninput
            },
            this
        )
    }
    subscibe ( client ) {
        typeof client === "function" ? this.subscribers.push ( client ) :
            console.warn ( "Invalide subscriber" )
    }
    unsubscibe ( client ) {
        this.subscribers = this.subscribers
            .filter ( subscriber !== client )
    }
    broadcast ( data ) {
        this.subscribers.forEach (
            client => client ( data )
        )
    }
}
