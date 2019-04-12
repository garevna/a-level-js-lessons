const template = document.body.appendChild (
    document.createElement ( "template" )
)

template.innerHTML = `
    <style>
        /* * { user-select: none; } */
        a {
              text-decoration: none;
              color: #777;
        }
        input[type='checkbox'] {
              display: none;
        }
        label {
          background-image: url(https://raw.githubusercontent.com/garevna/a-level-js-lessons/master/ico/coffee-40.png);
          background-repeat: no-repeat;
          background-size: 25px;
          background-position: left center;
          border-left: solid 10px transparent;
        }
        .lbl-toggle {
              display: block;
              font-weight: bold;
              font-family: monospace;
              font-size: 1.1rem;
              text-transform: uppercase;
              text-align: center;
              padding: 0.7rem;
              color: #fff;
              background: #bbb;
              cursor: pointer;
              border-radius: 3px;
              transition: all 0.25s ease-out;
              user-select: none;
        }
        .lbl-toggle:hover {
              text-shadow: 1px 1px 1.5px #00000090;
        }
        .lbl-toggle::before {
              content: ' ';
              display: inline-block;
              border-top: 5px solid transparent;
              border-bottom: 5px solid transparent;
              border-left: 5px solid currentColor;
              vertical-align: middle;
              margin-right: .7rem;
              transform: translateY(-2px);
              transition: transform .2s ease-out;
              user-select: none;
        }
        .lbl-toggle::after {

          width: 20px;
          height: 20px;
          display: inline-block;
          background-repeat: no-repeat;
          background-size: contain;
          background-position: center center;
        }
        .collapsible-content .content-inner {
              /* background-color: #000; */
              background-color: white;
              /* color: #bbb; */
              color: #444;
              box-shadow: inset 2px -2px 3px #00000090;
              padding: .5rem 1.2rem;
              font-size: 0.8rem;
              border: inset 1px;
        }
        .collapsible-content {
              max-height: 0px;
              overflow: auto;
              transition: max-height .25s ease-in-out;
              background-color: #000;
        }
        .toggle:checked + .lbl-toggle + .collapsible-content {
              max-height: 900px;
        }
        .toggle:checked + .lbl-toggle::before {
              transform: rotate(90deg) translateX(-3px);
        }
        .toggle:checked + .lbl-toggle {
              border-bottom-right-radius: 0;
              border-bottom-left-radius: 0;
        }
    </style>

    <section>
      <div class="wrap-collabsible">
        <input id="collapsible" class="toggle" type="checkbox">

        <label for="collapsible" class="lbl-toggle">
          <slot name="header">***</slot>
        </label>
        <div class="collapsible-content">
          <div class="content-inner">
            <code>
            <slot name="scriptContent">***</slot>
            </code>
          </div>
        </div>
      </div>
    </section>
`

customElements.define( 'sample-element',
  class extends HTMLElement {
    constructor() {
      super()
      const file = this.getAttribute ( "file" )
      const title = this.getAttribute ( "header" )
      const lang = this.getAttribute ( "lang" )
      const shadowRoot = this.attachShadow({ mode: 'open' })
        .appendChild( template.content.cloneNode(true) )
      let header = document.createElement ( "span" )
      header.setAttribute ( "slot", "header" )
      header.innerText = title
      this.appendChild ( header )
      fetch( file ).then(
        response => response.text()
          .then(
            response => this.appendChild(
              ( function ( text, lang ) {
                  let wrapper = document.createElement ( "pre" )
                  wrapper.setAttribute ( "slot", "scriptContent" )
                  let script = document.createElement ( "code" )
                  script.setAttribute( "data-language", lang )
                  wrapper.appendChild(script)
                  Rainbow.color(
                    text,
                    lang,
                    function( highlightedCode ) {
                      script.innerHTML = highlightedCode
                    }
                  )
                  return wrapper
              })( response, lang )
            )
          )
      )
    }
})
