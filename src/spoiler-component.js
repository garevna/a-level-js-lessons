class SpoilerComponent extends SpoilerClass {
    constructor () {
        super()
        let iconStyles = this.shadow.appendChild (
        document.createElement("style")
      )
      fetch ( "src/icons.css" )
          .then ( response => response.text() )
          .then ( css => iconStyles.textContent = css )
    }
    connectedCallback () {
      this.header = this.shadow.querySelector ( "#header" )
      this.wrapper = this.shadow.querySelector ( ".collapsible-content" )
      this.shadow.querySelector ( ".lbl-toggle" )
        .style.backgroundImage = "url(src/icons/a-level-ico.png)"
    }
    static get observedAttributes() {
        return [ 'header', 'ready' ]
    }
    attributeChangedCallback( attrName, oldVal, newVal ) {
        attrName === "header" ? this.header.innerHTML = newVal :
          attrName === "ready" ? (
            () => {
              this.wrapper.innerHTML = this.innerHTML
              this.innerHTML = ""
            })() : null
    }
}


customElements.define ( 'spoiler-component', SpoilerComponent )
