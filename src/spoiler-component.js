'use strict'

import SpoilerClass from './spoiler'

class SpoilerComponent extends SpoilerClass {
    constructor () {
        super()
        let styles = this.shadow.appendChild (
        document.createElement("style")
      )
      Promise.all ([
          fetch ( "src/icons.css" )
            .then ( response => response.text() ),
          fetch ( "src/for-rainbow.css" )
            .then ( response => response.text() ),
      ])
      .then ( css => styles.textContent = css.join("\n\n") )
    }
    connectedCallback () {
      this.header = this.shadow.querySelector ( "#header" )
      this.wrapper = this.shadow.querySelector ( ".collapsible-content" )
      this.shadow.querySelector ( ".lbl-toggle" )
        .style.backgroundImage = `url(${createPath( "icons","slider-2.gif" )})`
    }
    static get observedAttributes() {
        return [ 'header', 'ready' ]
    }
    attributeChangedCallback( attrName, oldVal, newVal ) {
        if ( !attrName ) return
        attrName === "header" ? this.header.innerHTML = newVal :
          attrName === "ready" ? (
            () => {
              this.content.forEach (
                item => this.wrapper.appendChild ( item )
              )
            })() : null
    }
}


customElements.define ( 'spoiler-component', SpoilerComponent )

export default SpoilerComponent
