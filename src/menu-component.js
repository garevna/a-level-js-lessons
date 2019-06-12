class MenuComponent extends HTMLElement {
    constructor () {
      super()
      this.shadow = this.attachShadow ({ mode: "open" })
      this.shadow.innerHTML = `
      <nav id="nav">
          <ul class="main-nav">
            <li>
                <a href="#"></a>
                <ul class="dropdown"></ul>
            </li>
          </ul>
      </nav>
      `
      this.shadow.appendChild (
        document.createElement ( "style" )
      ).textContent = this.styleContent
    }

    connectedCallback () {
        this.menuContent = this.shadow.appendChild (
          document.createElement ( "ul" )
        )
        this.menuContent.className = "main-nav"
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
          option => {
            let li = container.appendChild (
              document.createElement ( "li" )
            )
            li.className = `option${option.level}`
            let ref = li.appendChild (
              document.createElement ( "a" )
            )
            ref.innerHTML = option.text
            ref.href = `#${encodeURI ( option.text )}`

          }
        )
    }
}

MenuComponent.prototype.styleContent = `
* { user-select: none; outline: none; }
li {
  list-style-type: none;
}
#nav {
    position: sticky;
    top:0;
    z-index: 50;
}
.main-nav {
    --hover-back: #f90;
    --menu-back: #079;
    --menu-color: #fff;
    --main-color: #f50;

    line-height: 0;
    padding-left:0;
    padding-top: 58px;
}

.main-nav > li {
    position: absolute;
    font-size: 1rem;
    line-height: 0.7rem;
}
.main-nav > li:before, .main-nav > li:after {
    content: "◆";
    display: block;
    font-size: 30px;
    line-height:-1rem;
    font-weight: bold;
    transition: all 0.5s;
}

.main-nav > li:before, .main-nav > li:hover:after {
    color: #f50;
}
.main-nav > li:hover:before, .main-nav > li:after {
    color: #09b;
}

.main-nav > li:hover .dropdown {
    opacity: 1;
    max-width: 50vw;
    max-height: 90vh;
    width: max-content;
    height: max-content;
    border: solid 10px transparent;
    box-sizing: border-box;
    box-shadow: 4px 4px 8px #00000080;
    color: #f50;
}

.main-nav .dropdown a:hover {
    color: #fff;
    background: var(--hover-back);
}

.dropdown {
    position: absolute;
    max-height: 0;
    line-height: 1.8rem;
    transition: all 0.8s ease;
    opacity: 0;
    background: #005070cc;
    border: solid 10px #005070cc;
    z-index: 50;
    left: 30px;
    top: 10px;
    overflow: auto;
}

.dropdown > li {
    margin-left: -40px;
}

.dropdown > li > a {
    display: block;
    padding: 0.4rem;
    text-decoration: none;
    color: var(--menu-color);
}

  .dropdown > li.option1 {
    padding-left: 0;
    font-size: 1.1rem;
    font-weight: bold;
  }
  .dropdown > li.option2 {
    padding-left: 35px;
    font-size: 1.05rem;
  }

  .dropdown > li.option3 {
    padding-left: 70px;
    font-size: 1.0rem;
  }
  .dropdown > li.option4 {
    padding-left: 100px;
    font-size: 0.95rem;
  }
  .dropdown > li.option5 {
    padding-left: 130px;
    font-size: 0.8rem;
  }
  .dropdown > li.option6 {
    padding-left: 155px;
    font-size: 0.7rem;
  }

  ::-webkit-scrollbar {
  width: 4px;
}

::-webkit-scrollbar-track {
  background: #079;
  box-shadow: inset 0 0 1px #00000070;
  border-radius: 1px;
}

::-webkit-scrollbar-thumb {
  background: #f70;
  border-radius: 1px;
}

::-webkit-scrollbar-thumb:hover {
  background: #fff;
}
`
MenuComponent.prototype.template = `
<nav id="nav" class="main-nav">
  <li>
      <a href="#">∷</a>
	    <ul class="dropdown"></ul>
  </li>
</nav>
`

customElements.define(
  "menu-component",
  MenuComponent
)
