class ScriptSpoiler extends SpoilerClass {
    constructor() {
      super()
      let rainbowStyles = this.shadow.appendChild (
        document.createElement("style")
      )
      fetch ( "src/for-rainbow.css" )
          .then ( response => response.text() )
          .then ( css => rainbowStyles.textContent = css )
    }
    connectedCallback () {
      this.header = this.shadow.querySelector ( "#header" )
      this.wrapper = this.shadow.querySelector ( ".collapsible-content" )

    }
    static get observedAttributes() {
        return [ 'lang', 'header', 'content' ]
    }
    attributeChangedCallback( attrName, oldVal, newVal ) {
        if ( attrName === "content" )
            this.wrapper.appendChild ( this.content )

        if ( attrName === 'header' || !newVal ) {
          this.header.innerText = this.getAttribute ( "header" )
          return
        }
    }
}

customElements.define( 'script-spoiler', ScriptSpoiler )
