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
                            .setAttribute ( "src",  `lessons/${event.target.ref}.md` )
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
        --menu-back: #fff;
        --menu-color: #079;

        position: fixed;
        top: 2vh;
        right: 1vw;
        z-index: 1500;
        cursor: pointer;
    }
    .main-menu:before {
        content: "☰";
        font-size: 24px;
    }
    .main-menu .top-level {
        position: absolute;
        max-height: 0;
        transition: all 0.8s;
        opacity: 0;
    }
    .main-menu:hover .top-level {
      max-height: 90vh;
      height: max-content;
      opacity: 1;
      font-size: 1rem;
      line-height: 1.5rem;
      right: 0;
      top:0;
      max-width: 70vw;
      min-width: 200px;
      width: max-content;
      padding: 10px;
      overflow: auto;
      border: solid 10px var(--menu-back);
      background: var(--menu-back);
      box-shadow: -4px 4px 8px #00000070;
    }

    .top-level-item {
        position: relative;
        display: block;
        vertical-align: top;
        font-size: 1rem;
        line-height: 1.5rem;
        padding: 5px 10px;
        border: 5px solid var(--menu-back);
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
        font-size: 1rem;
        line-height: 1.4rem;
        padding: 5px 10px;
        opacity: 1;
        box-shadow: inset 1px 1px 2px #00000050;
    }`

customElements.define (
  "main-menu-component",
  MainMenuComponent
)
