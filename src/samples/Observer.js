const template = document.body.appendChild (
    document.createElement ( "template" )
)

template.innerHTML = `
    <style>
        .code { color: magenta; }
        .div { border: inset 1px; padding: 10px 20px; }
    </style>
    <div class="div">
        <p class="code"><slot name="script">Default script</slot></p>
    </div>
`

customElements.define( 'sample-element',
  class extends HTMLElement {
    constructor() {
      super();
      const shadowRoot = this.attachShadow({mode: 'open'})
        .appendChild( template.content.cloneNode(true) );
  }
})

let codeText = `
function () {
    console.log ( "Hello!" )
}`

document.body.appendChild (
    document.createElement ( "sample-element" )
).appendChild(
    (
        text => {
            let elem = document.createElement ( "pre" )
            elem.setAttribute ( "slot", "script" )
            elem.innerText = text
            return elem
        }
    )( codeText )
)
