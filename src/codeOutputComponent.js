'use strict'

class CodeOutput extends HTMLElement {
    constructor () {
        super ()
        this.shadow = this.attachShadow ( { mode: "closed" } )
        this.shadow.innerHTML = `
          <style>
            * { outline: none; }
            section {
              position: relative;
              height: 300px;
              padding: 20px;
              box-sizing: border-box;
              box-shadow: inset 2px 2px 4px #00000070;
              background: #000;
              color: #dde;
              overflow-x: hidden;
              overflow-y: auto;
            }
            button {
              background: linear-gradient(to right, #09b, #09b, #09b);
              padding: 10px 20px;
              font-family: Mali, Montserrat, Arial;
              font-size: 1.2rem;
              border:0;
              color: white;
              box-shadow: 1px 1px 2px #00000070;
            }

            button:hover {
              animation: button-hover 0.2s ease alternate 2;
              box-shadow: 0px 0px 2px #00000050;
              text-shadow: 1px 1px 1px #005577de;
            }

            @keyframes button-hover {
                0% { background: linear-gradient(to right top, #09b,#09b, #09b); }
               20% { background: linear-gradient(to right top, #09b, #5bd 10% 30%, #09b); }
               40% { background: linear-gradient(to right top, #09b, #5bd 30% 50%, #09b); }
               60% { background: linear-gradient(to right top, #09b, #5bd 50% 70%, #09b); }
               80% { background: linear-gradient(to right top, #09b, #5bd 70% 90%, #09b); }
              100% { background: linear-gradient(to right top, #09b, #09b, #09b); }

            }
            ::-webkit-scrollbar {
              width: 5px;
              height: 5px;
            }

            ::-webkit-scrollbar-track {
              background: #079;
              box-shadow: inset 0 0 1px #00000070;
              border-radius: 1px;
            }

            ::-webkit-scrollbar-thumb {
              background: #f50;
              border-radius: 1px;
            }

            ::-webkit-scrollbar-thumb:hover {
              background: #fa0;
            }
          </style>
          <button>Start</button>
          <section>
          </section>
        `;

        this.button = this.shadow.querySelector ( "button" )
        this.section = this.shadow.querySelector ( "section" )
    }
    connectedCallback () {

    }
    static get observedAttributes () {
        return [ "script" ]
    }
    attributeChangedCallback ( attrName, oldVal, newVal ) {
        fetch( `${createPath("lessons", newVal )}` )
            .then ( response => response.text() )
            .then ( response => {
              response = response.replace(/document.body/g, "this.section")
              response = response.replace(/document.head/g, "this.section")

              let stopHandler = function ( event ) {
                event.target.innerText = "Start"
                event.target.onclick = startHandler
                this.section.stop = true
                this.section.innerHTML = ""
              }.bind ( this )

              let startHandler = function ( event ) {
                event.target.innerText = "stop"
                event.target.onclick = stopHandler
                this.section.stop = false
                eval ( response )
              }.bind ( this )

              this.button.onclick = startHandler
            })
    }
}

customElements.define (
  "code-output",
  CodeOutput
)

export default CodeOutput
