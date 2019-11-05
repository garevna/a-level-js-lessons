'use strict'

export default class SpoilerClass extends HTMLElement {
    constructor() {
      super()
      this.shadow = this.attachShadow ( { mode: "open" } )
      this.shadow.appendChild (
        document.createElement ( "style" )
      ).textContent = `
        * { box-sizing: border-box; }
        a {
          text-decoration: none;
          color: #079;
        }
        a:hover {
          color: #f50;
        }
        img {
            max-width:98%;
            margin: 20px 1%;
            padding: 10px;
            border: inset 1px white;
            box-shadow: 2px 2px 4px #00000080;
            box-sizing: border-box;
        }
        div {
            text-align: justify;
            margin: 16px 0;
        }

        table {
            margin: 30px 0;
            border-collapse: collapse;
        }
        td {
            border: solid 1px #eef;
            padding: 5px 10px;
            text-align: center;
        }

        input[type='checkbox'] {
            display: none;
        }
        .lbl-toggle {
            margin-top: 40px;
            display: block;
            font-weight: bold;
            font-family: Roboto, Arial, monospace;
            font-size: 1.0rem;
            text-align: right;
            padding: 0.5rem 0.8rem;
            color: #079;
            box-shadow: 1px 1px 2px #00000070;
            cursor: pointer;
            transition: all 0.25s ease-out;
            user-select: none;
            background-image: url(${createPath( "externalIcons", "coffee.png" )});
            background-repeat: no-repeat;
            background-size: 40px;
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
            max-height: 70vh;
            border: solid 20px transparent;
            padding-right:10px;
            box-shadow: 2px 2px 4px #00000080;
        }
        .toggle:checked + .lbl-toggle::before {
            transform: rotate(90deg) translateX(-3px);
        }
        .toggle:checked + .lbl-toggle {
            border-bottom-right-radius: 3px;
            border-bottom-left-radius: 3px;
        }

        table {
          margin: 30px 0;
          border-collapse: collapse;
        }
        td {
          border: solid 1px #eef;
          padding: 2px 8px;
        }
        td > div {
          margin: 0;
          padding: 0;
          font-size: 0.8rem;
        }

        hr {
          margin: 30px 0;
          border: 0;
        }
        hr:before {
          content: "▗";
          color: #f50;

        }
        hr:after {
          content: "▘";
          color: #09b;
        }

        ::-webkit-scrollbar {
            width: 4px;
            height: 4px;
        }

        .black {
            background-color: #000;
            color: #dde;
            padding: 10px 15px;
            font-family: monospace, Roboto, Arial;
            font-size: 13px;
        }

        @media screen and (max-width: 400px), screen and (max-height: 400px) {
          h1 { font-size: 1.2rem; }
          h2 { font-size: 1.0rem; }
          h3 { font-size: 0.9rem; }
          div { font-size: 0.8rem; }
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

// export default SpoilerClass
