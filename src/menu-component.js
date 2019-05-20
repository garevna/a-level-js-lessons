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
        // this.className = "sticky"
        this.menuContent.className = "main-nav"
        // this.parentNode.classList.add ( "main-nav" )
        // this.parentNode.onmouseover = function ( event ) {
        //   this.menuContent.style.height = "50vh"
        //   this.menuContent.style.opacity = "1"
        // }.bind(this)

        // this.parentNode.onmouseout = function ( event ) {
        //   this.menuContent.style.height = "0"
        //   this.menuContent.style.opacity = "0"
        // }.bind(this)
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
#nav {
    position: sticky;
    top:0;
    z-index: 1000;
}
.main-nav {
    --hover-back: #457;
    --menu-back: #bbc;

    font-size: 0;
    line-height: 0;
    /* background: var(--menu-back); */
    padding-left:0;
}

.main-nav > li {
    position: relative;
    display: inline-block;
    vertical-align: top;
    font-size: 1rem;
    line-height: 1rem;
    border-left: 2px solid #fff;
}

.main-nav > li:hover .dropdown {
    opacity: 1;
    visibility: visible;
    width: max-content;
    border: solid 10px transparent;
    box-sizing: border-box;
    box-shadow: 4px 4px 8px #00000080;
}

.main-nav > li:hover > a {
    color: #fff;
    /* background: var(--hover-back); */
}

.main-nav > li > a {
    display: block;
    color: var(--hover-back);
    padding: 20px 0;
    transition: background .5s ease;
    text-decoration: none;
    font-size: 30px;
}
.main-nav > li > a::before {
  content: "•••";
  font-size: 24px;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%) rotate(90deg);
}


.main-nav .dropdown a:hover {
    color: #fff;
    background: var(--hover-back);
}

.dropdown {
    position: absolute;
    z-index: 10;
    left: 0;
    top: 10px;
    width: 100%;
    background: #eef;
    border: 2px solid #fff;
    opacity: 0;
    visibility: hidden;
    transition: opacity .5s ease;
    padding-left: 0;
}

.dropdown > li {
    border-bottom: 1px solid #fff;
    list-style-type: none;
    list-style-position: outside;
}

.dropdown > li:last-child {
    border-bottom: 0;
}

.dropdown > li > a {
    display: block;
    padding: 1rem;
    text-decoration: none;
    color: #555;
}

  .dropdown > li.option1 {
    padding-left: 0;
    font-size: 1.2rem;
    font-weight: bold;
  }
  .dropdown > li.option2 {
    padding-left: 20px;
    font-size: 1.1rem;
  }

  .dropdown > li.option3 {
    padding-left: 40px;
    font-size: 1.0rem;
  }
  .dropdown > li.option4 {
    padding-left: 60px;
    font-size: 0.9rem;
  }
  .dropdown > li.option5 {
    padding-left: 80px;
    font-size: 0.8rem;
  }
  .dropdown > li.option6 {
    padding-left: 100px;
    font-size: 0.7rem;
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
