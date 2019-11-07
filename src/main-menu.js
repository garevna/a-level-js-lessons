'use strict'

class MainMenuComponent extends HTMLElement {

  constructor () {
    super()
    this.shadow = this.attachShadow( { mode: "closed" } )
    this.view = document.getElementsByTagName ( "page-element" )[0]
    this.course = createPath( "lessons", "" )
    this.assets = createPath( "src", "" )
    this.menuOptions = []
    this.submenuOptions = []
    this.state = "close"
  }

  connectedCallback () {
    this.shadow.innerHTML += `

      <graphic-header></graphic-header>
      <svg-nav-panel></svg-nav-panel>
      <aside>
        <div id="menuToggle">

          <input type="checkbox" />
          <span></span>
          <span></span>
          <span></span>
          <ul id="menu">
            <div class="search-wrapper">
              <hr>
              <div class="search-icon"></div>
              <input id="search-input">
              <div id="search-result"></div>
            </div>

            <h3><a href="${location.host === 'garevna.github.io' ? '/js-lessons/' : '/'}" class="home">Lessons</a></h3>
            <hr>
          </ul>
        </div>
      </aside>
      `
      this.checkbox = this.shadow.querySelector ( '#menuToggle > input[type="checkbox"]' )
      this.menu = this.shadow.querySelector ( "#menu" )

      this.setStyles()
      this.checkbox.onclick = function ( event ) {
        this.state = this.state === "close" ? "expand" : "close"
        this.menu.style["transition-delay"] = this.state === "expand" ? "1s" : "0s"
        this.shadow.querySelector ( "svg-nav-panel" ).dispatchEvent ( new Event ( this.state ) )
      }.bind (this)

      this.shadow.querySelector ( ".home" ).onclick = function ( event ) {
          event.preventDefault();
          this.checkbox.checked = !this.checkbox.checked;
          this.checkbox.dispatchEvent ( new Event ( "click" ) );
          console.log ( event.target.href );
          if ( location.host === "js-lessons.glitch.me" )
              window.history.pushState( { route: event.target.href }, "home", event.target.href )
          else window.history.pushState( { route: '/js-lessons/' }, "home", '/js-lessons/' )
          this.view.setAttribute ( "src", `${createPath( "lessons", "start-page.md" )}` )
      }.bind ( this )

      this.getData ().then (
        () => this.shadow.getElementById ( "search-input" )
            .oninput = this.search.bind ( this )
      )
  }

  search ( event ) {
      let result = this.shadow.getElementById ( "search-result" )
      result.innerHTML = ""
      if ( !event.target.value ) {
          for ( let item of this.menuOptions ) this.show ( item )
          for ( let item of this.submenuOptions ) this.show ( item )
          return
      }
      let strings = this.keywords.getAll ( event.target.value.toLowerCase() )
      if ( strings.length === 0 ) {
          result.innertext = "Not found..."
          for ( let item of this.menuOptions ) this.hide ( item )
          for ( let item of this.submenuOptions ) this.hide ( item )
          return
      }
      let items = strings.map ( item => JSON.parse( item ) )
      for ( let option of this.menuOptions ) {
          items.find ( item => option.firstElementChild.id === item.lesson ) ?
               this.show ( option ) : this.hide ( option )
      }
      for ( let option of this.submenuOptions ) {
          let content = option.querySelector ( "a" ).textContent
          items.find ( item => content === item.topic ) ?
              this.show ( option ) : this.hide ( option )
      }
  }
  addElem ( tagName, container ) {
      return container.appendChild ( document.createElement ( tagName ) )
  }
  setStyles () {
    fetch( `src/main-menu.css` )
      .then ( response => response.text() )
        .then(
          css => this.shadow.appendChild(
                  document.createElement("style")
          ).textContent = css
        )
  }
  hide ( elem ) {
      elem.dispatchEvent ( new Event ( "hide" ) )
  }
  show ( elem ) {
      elem.dispatchEvent ( new Event ( "show" ) )
  }
  hideCallback ( event ) {
      event.target.style.display = "none"
  }
  showCallback ( event ) {
      event.target.style.display = "block"
  }
  setListeners ( elem ) {
      elem.addEventListener ( "show", this.showCallback )
      elem.addEventListener ( "hide", this.hideCallback )
  }
  async getData () {
      this.menuData = await ( await fetch ( `src/main-menu.json` ) ).json()
      this.keywords = new FormData
      const topLevel = this.shadow.querySelector ( "#menu" )

      for ( let lesson of this.menuData ) {
          let lessonItem = this.addElem ( "li", topLevel );
          this.menuOptions.push ( lessonItem );
          this.setListeners ( lessonItem );
          lessonItem.innerHTML = this.getLessonTemplate ( lesson.id );
          lessonItem.subLevel = lessonItem.querySelector ( "ul.sub-level" );
          let index = 0;
          for ( let item of lesson.items ) {
              let elem = this.addElem ( "li", lessonItem.subLevel );
              this.submenuOptions.push ( elem );
              this.setListeners ( elem );
              elem.style["animation-delay"] = index++ < 10 ? `0.${index}s` : `1.${index - 9}s`;
              let anchor = this.addElem ( "a", elem );
              anchor.href = item.ref;
              anchor.textContent = item.title;
              anchor.fileName = item.ref;

              anchor.onclick = function ( event ) {
                  event.preventDefault();
                  this.checkbox.checked = !this.checkbox.checked;
                  this.checkbox.dispatchEvent ( new Event ( "click" ) );
                  let ref = location.host === "js-lessons.glitch.me" ? event.target.href : `?${event.target.fileName}`;
                  window.history.pushState( { route: ref }, event.target.innerText, ref );

                  let shutter = this.addElem ( "shutter-element", document.body );
                  shutter.style = `position: absolute; top: 0; left: 0;`;
                  setTimeout ( () => shutter.remove(), 1000 );
                  this.view.setAttribute ( "src",  `${createPath( "lessons", event.target.fileName + ".md" )}` );
              }.bind ( this )

              for ( let keyword of item.keywords )
                  this.keywords.append (
                      keyword,
                      JSON.stringify ({
                          lesson: lesson.id,
                          topic: item.title,
                          url: item.ref
                      })
                  )
          }
      }
  }
  getLessonTemplate ( lessonId ) {
      return `<input type="radio" id="${lessonId}" name="lessons">
        <label for="${lessonId}">
          <div class = "icon"></div>
          <b>${lessonId}</b>
        </label>
        <ul class="sub-level"></ul>`
  }
}

customElements.define(
  "main-menu-component",
  MainMenuComponent
)

export default MainMenuComponent
