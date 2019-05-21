class SpoilerClass extends HTMLElement {
    constructor() {
      super()
      this.shadow = this.attachShadow ( { mode: "open" } )
      this.shadow.appendChild (
        document.createElement ( "style" )
      ).textContent = `
        a {
          text-decoration: none;
          color: #079;
        }
        a:hover {
          color: #f50;
        }
        img {
          max-width: 100%;
        }
        input[type='checkbox'] {
            display: none;
        }
        .lbl-toggle {
            margin-top: 40px;
            display: block;
            font-weight: bold;
            font-family: monospace;
            font-size: 1.4rem;
            text-transform: uppercase;
            text-align: right;
            padding: 0.7rem;
            color: #079;
            box-shadow: 1px 1px 2px #00000070;
            cursor: pointer;
            transition: all 0.25s ease-out;
            user-select: none;
            background-image: url(src/icons/cap.png);
            background-repeat: no-repeat;
            background-size: 24px;
            background-position: left center;
            border-left: solid 10px transparent;
        }
        .lbl-toggle:hover {
            text-shadow: 1px 1px 1.5px #00005050;
        }
        .lbl-toggle::before {
            content: ' ';
            display: inline-block;
            border-top: 8px solid transparent;
            border-bottom: 8px solid transparent;
            border-left: 8px solid #ff7000;
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
            background-color: white;
            color: #444;
            box-shadow: inset 2px -2px 3px #00000090;
            padding: .5rem 1.2rem;
            font-size: 0.8rem;
            overflow: auto;
        }
        .collapsible-content {
            max-height: 0px;
            overflow: auto;
            transition: all .4s ease-in-out;
            margin-bottom: 40px;
            border: solid 0px transparent;
            box-shadow: 0px 0px 0px transparent;
        }
        .toggle:checked + .lbl-toggle + .collapsible-content {
            max-height: 900px;
            border: solid 30px transparent;
            box-shadow: 2px 2px 4px #00000080;
        }
        .toggle:checked + .lbl-toggle::before {
            transform: rotate(90deg) translateX(-3px);
        }
        .toggle:checked + .lbl-toggle {
            border-bottom-right-radius: 3px;
            border-bottom-left-radius: 3px;
        }
      `
      this.shadow.innerHTML += `
      <section id="component">
          <div class="wrap-collabsible">
              <input id="collapsible" class="toggle" type="checkbox">
              <label for="collapsible" class="lbl-toggle">
                <span id="header"></span>
              </label>
              <div class="collapsible-content"></div>
          </div>
      </section>
      `
    }
    connectedCallback () {
      this.header = this.shadow.querySelector ( "#header" )
      this.script = this.shadow.querySelector ( "#scriptContent" )
      this.wrapper = this.shadow.querySelector ( ".collapsible-content" )
    }
}

// customElements.define( 'spoiler-element', SpoilerComponent )
