'use strict'

class MenuComponent extends HTMLElement {
    constructor () {
      super()
      this.shadow = this.attachShadow ({ mode: "open" })
      this.shadow.innerHTML = `
      <link href="https://fonts.googleapis.com/css?family=Luckiest+Guy|Poppins|Roboto|Montserrat|&amp;display=swap" rel="stylesheet">
      <link rel="stylesheet" href="src/menu.css">
      <nav id="navigation">
        <ul id="main-nav" class="dropdown"></ul>
      </nav>
      `
    }

    connectedCallback () {
        this.menuContent = this.shadow.getElementById("main-nav")
    }

    static get observedAttributes() {
        return [ 'options']
    }

    attributeChangedCallback( attrName, oldVal, newVal ) {
        let container = this.shadow.querySelector ( ".dropdown" )
        container.innerHTML = ""
        if ( !newVal ) return
        this.options = JSON.parse ( this.getAttribute ( "options" ) )
        this.setAttribute ( "options", "" )
        this.options.forEach (
          ( option, index ) => {
            let li = container.appendChild (
              document.createElement ( "li" )
            )
            li.style["animation-delay"] = index < 10 ? `0.${index}s` : `1.${index-9}s`
            li.className = `option${option.level}`
            let ref = li.appendChild ( document.createElement ( "a" ) )
            ref.innerHTML = option.text
            ref.href = `#${encodeURI ( option.text )}`

          }
        )
    }
}

// MenuComponent.prototype.styleContent = `
//
// `
MenuComponent.prototype.template = `
<nav id="nav" class="main-nav">

  <li>

	    <ul class="dropdown"></ul>

  </li>
</nav>
`

customElements.define(
  "menu-component",
  MenuComponent
)

export default MenuComponent
