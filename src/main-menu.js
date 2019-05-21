class MainMenuComponent extends HTMLElement {
  constructor () {
    super()

  }
  connectedCallback () {
    this.innerHTML = `
      <ul class="top-level"></ul>
      `

    this.className = "main-menu"

    this.appendChild (
      document.createElement ( "style" )
    ).textContent = this.constructor.styleSheet

    fetch ("src/main-menu.json")
      .then ( response => response.json() )
        .then (
          menuData => {
            menuData[Symbol.iterator] = function* () {
              let end = Math.max ( ...Object.keys ( menuData ) )
              for ( let num = 1; num <= end; num++ )
                  yield menuData [num]
            }
            let lessonNum = 1
            for ( let lesson of menuData ) {

              let topLevel = this.querySelector ( ".top-level" )
              let topLevelItem = topLevel.appendChild (
                document.createElement ( "li" )
              )
              topLevelItem.className = "top-level-item"
              topLevelItem.innerHTML = `<b><img src="src/icons/a-level-ico.png" width="20"/> ${lessonNum++}</b>`

              let subLevel = topLevelItem.appendChild (
                  document.createElement ( "ul" )
              )
              subLevel.className = "sub-level"

              for ( let topic in lesson ) {
                let item = subLevel.appendChild (
                  document.createElement ( "li" )
                )
                item.className = "sub-level-item"
                item.innerText = topic
                item.ref = lesson [ topic ]
                item.onclick = function ( event ) {
                  document.getElementsByTagName ( "page-element" )[0]
                            .setAttribute ( "src",  `src/lessons/${event.target.ref}.md` )
                }
              }
            }
          }
        )
  }
}

MainMenuComponent.styleSheet = `
ul {
    list-style-type: none;
}
.main-menu {
    --hover-back: #079;
    --hover-color: #fff;
    --menu-back: #000;
    --menu-color: #079;
    --orange: #f50;
    --blue: #079;

    position: fixed;
    top: 4vh;
    right: 5vw;
    z-index: 1500;
    cursor: pointer;
}
.main-menu:before, .main-menu:after {
      content: "■";
        color: var(--orange);
        font-size: 30px;
        font-weight: bold;
        transition: all 0.5s;
    }

    .main-menu:before {
        color: var(--orange);
    }
    .main-menu:hover:before {
        color: var(--blue);
    }

    .main-menu:after {
        color: var(--blue);
    }
    .main-menu:hover:after {
        color: var(--orange);
    }

    @media screen and (max-width:900px) {
      .main-menu {
        right: 1vw;
        top: 1vh;
      }
      .main-menu:before {
        font-size: 20px;
      }
    }

.main-menu .top-level {
    position: absolute;
    transition: all 0.8s;
    height: 85vh;
    max-width: 70vw;
    min-width: 200px;
    width: max-content;
    top: 1.5vh;
    right: -100vw;
    padding: 10px;
    font-size: 1rem;
    line-height: 1.5rem;
    overflow: auto;
    background: var(--menu-back);
    border: solid 10px var(--menu-back);
    box-shadow: -2px 2px 4px #00000050;
}
.main-menu:hover .top-level {
    right:-5vw;
}

.top-level-item {
    position: relative;
    display: block;
    vertical-align: top;
    font-size: 1.1rem;
    line-height: 1.5rem;
    padding: 5px 10px;

    background: var(--menu-back);
    color: var(--menu-color);
}

.sub-level {
    max-height: 0;
    transition: all 0.8s ease-in-out;
}

.top-level-item:hover .sub-level {
  max-height: 90vh;
  height: max-content;
}

.sub-level-item {
    font-size: 0;
    padding: 0;
    line-height: 0;
    opacity: 0;
    transition: all 0.5s;
}

.sub-level-item:hover {
    background: var(--hover-back);
    color: var(--hover-color);
}

.top-level-item:hover .sub-level-item {
    font-size: 0.9rem;
    line-height: 1.4rem;
    padding: 5px 10px;
    opacity: 1;
    box-shadow: inset 1px 1px 2px #00000050;
}`

customElements.define (
  "main-menu-component",
  MainMenuComponent
)
