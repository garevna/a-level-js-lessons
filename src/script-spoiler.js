'use strict'

import SpoilerClass from './spoiler'

class ScriptSpoiler extends SpoilerClass {
    constructor() {
      super()
      let rainbowStyles = this.shadow.appendChild (
        document.createElement("style")
      )
      fetch ( `${createPath( "src", "for-rainbow.css" )}` )
          .then ( response => response.text() )
          .then ( css => rainbowStyles.textContent = css )
    }
    connectedCallback () {
      this.header = this.shadow.querySelector ( "#header" )
      this.wrapper = this.shadow.querySelector ( ".collapsible-content" )
    }
    static get observedAttributes() {
        return [ 'header', 'content' ]
    }
    attributeChangedCallback( attrName, oldVal, newVal ) {
        attrName === "content" ?
            this.wrapper.appendChild ( this.content ) :
            attrName === 'header' || !newVal ?
                this.header.innerText = this.getAttribute ( "header" ) :
                null
    }
}

customElements.define( 'script-spoiler', ScriptSpoiler )

export default ScriptSpoiler
