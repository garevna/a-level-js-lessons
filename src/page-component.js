class PageComponent extends HTMLElement {
  constructor () {
    super()
    this.fragments = {}
    this.pageContent = ""
    this.pageContentList = []
    this.styles = document.head.appendChild (
      document.createElement ( "style" )
    )
    this.main = this.appendChild (
      document.createElement ( "main" )
    )
    this.menu = document.getElementsByTagName ( "menu-component" )[0]
  }

  connectedCallback() {
      Promise.all ([
        fetch ( "src/rainbow.css" )
          .then (response => response.text()),
        fetch ( "src/style.css" )
          .then (response => response.text()),
        fetch ( "style.css" )
          .then (response => response.text())
      ]).then (
        response =>
          this.styles.textContent = response.join(
            String.fromCharCode(10)
          )
      )
  }
  static get observedAttributes() {
      return [ 'src' ]
  }
  attributeChangedCallback( attrName, oldVal, newVal ) {
      this.getData ( this.getAttribute ( "src" ) )
  }

  getData ( file ) {
    fetch ( file )
      .then (
        response => response.text()
          .then ( response => this.parsePageContent ( response ) )
      )
  }

  parsePageContent ( pageContent ) {

      this.pageContent = pageContent

      this.regExprs.pageContent = this.pageContent

      this.regExprs[Symbol.iterator] = this.generator

      this.fragments = {}

      for ( let fragment of this.regExprs )
          this.fragments = Object.assign ( this.fragments, fragment )

      this.pageContent = this.fragments.pageContent
      delete this.fragments.pageContent
      this.pageContent.match ( /!!!.[^!!!]+!!!/g ).forEach (
        divider => {
          let tmp = this.pageContent.split( divider )
          let fragment = tmp.shift()
          this.pageContent = tmp.join("")
          let lines = fragment.split("\n")
          lines.forEach (
            line => line.length ? this.main.appendChild ( this.parseLine ( line ) ) : null
          )
          divider = divider.slice(3,-3)
          this[ `create${this.fragments[divider].type}` ](
              this.fragments[divider].content
          )
        }
      )
      let footer = this.appendChild (
        document.createElement ( "footer" )
      )
      footer.innerHTML += `
      <figure class="overshadow">
        <div class="overshadow__shadow">
          <div class="overshadow__text"></div>
        </div>
      </figure>`

      this.menu.setAttribute ( "options", JSON.stringify (this.pageContentList) )
  }

  // Block level

  createTable ( fragment ) {

      let tableFragment = fragment.slice (
        fragment.match ( /\n\n\|/ ).index + 2
      )

      let table = this.main.appendChild (
          document.createElement ( "table" )
      )

      tableFragment.match ( /.[^\n]*/g )
        .filter (
            string => string.trim().indexOf ( "|" ) === 0
        )
        .forEach (
            item => {
                let row = table.appendChild (
                    document.createElement ( "tr" )
                )
                let cells = item.split ( "|" )
                    .filter ( cell => cell.length )
                    .map ( cell => cell.trim() )
                    .forEach (
                        cellContent => row.appendChild (
                            document.createElement ( "td" )
                        ).innerHTML = cellContent
                    )
            }
      )
  }

  createSlider ( fragment ) {
      let sliderStart = this.main.appendChild (
        document.createElement ( "button" )
      )
      sliderStart.className = "slider-button"

      sliderStart.onclick = function ( event ) {
        const elem = this.main.appendChild (
            document.createElement ( 'picture-slider' )
        )
        elem.setAttribute( "pictures", JSON.stringify ( fragment.slice(3,-1).split(",") ) )
      }.bind(this)
  }


  createCodeComponent ( fragment ) {
      let lang = fragment.slice(
          4, fragment.search ( String.fromCharCode(10) )
      )

      let snippet = this.main.appendChild (
        document.createElement ( "code-snippet" )
      )

      snippet.textContent = fragment.slice (
            4 + lang.length,
            fragment.length - 4
      )

      snippet.setAttribute ( "header", lang )
      snippet.setAttribute ( "lang", lang )

      this.main.appendChild ( snippet )
  }

  createCodeSnippet ( fragment ) {
      let lang = fragment.slice(
          3, fragment.search ( String.fromCharCode(10) )
      )
      let wrapper = document.createElement ( "pre" )
      let script = document.createElement ( "code" )
      script.setAttribute( "data-language", lang )
      script.textContent = fragment.slice (
          3 + lang.length,
          fragment.length - 3
      )
      wrapper.appendChild( script )
      Rainbow.color(
          script.textContent,
          lang,
          highlightedCode => script.innerHTML = highlightedCode
      )
      this.main.appendChild ( wrapper )
  }

  // =============================== Line level ===============================


  parseImage ( line ) {
    let string = line.match ( /!\[\]\(.+\)/ )
    let url = string ? line.match ( /!\[\]\(.+\)/ )[0].slice(4, -1) : null
    if ( url ) {
      let elem = document.createElement ( "img" )
      elem.src = url
      return elem
    } else return null
  }

  parseHeader ( line ) {
    let tmp = line.split("#")
    if ( tmp.length === 1 ) return { level: 0, text: tmp [0] }

    let text = tmp [ tmp.length - 1 ]

    let icons = text.match (/!\[.[^\]]+\]/g)
      icons ? icons.forEach (
        icon => text = text.split ( icon ).join("")
      ) : null
    let refs = text.match (/\[.[^(]+\]\(.[^\)]+\)/g)
      refs ? refs.forEach (
        ref => {
            let content = ref.split ( "](" )[0].slice ( 1 )
            text = text.split ( ref ).join( content )
        }
      ) : null

      this.main.appendChild (
        document.createElement ( "a" )
      ).name = encodeURI ( text.trim() )

      this.pageContentList.push ({
          level: tmp.length - 1,
          text: text.trim()
      })

      return { level: tmp.length - 1, text: tmp [ tmp.length - 1 ] }
  }



  parseLine ( line ) {
      if ( line.match (/[-_]{2,5000}/) ) {
        return document.createElement ( "hr" )
      }
      let img = this.parseImage ( line )
      if ( img ) return img
      let { level, text } = this.parseHeader ( line )
      let elem = document.createElement ( level > 0 ? `h${level}` : "p" )
      elem.innerHTML = this.parseAnchors (
          this.parseIcons (
            this.formatText ( text )
          )
        )
      return elem
  }

  parseIcons ( line ) {
    let icons = line.match (/!\[.[^\]]+\]/g)
    icons ? icons.forEach (
      icon => {
        let ico = document.createElement ( "span" )
        icon.slice( 2, -1 ).split(" ")
            .forEach (
                item => ico.classList.add (item)
            )
        line = line.split ( icon ).join( ico.outerHTML )
      }
    ) : null
    return line
  }

  parseAnchors ( line ) {
    console.log (line)
    let anchors = line.match (/\[.[^(]+\]\(.[^\)]+\)/g)
    anchors ? anchors.forEach (
      anchor => {
        let tmp = anchor.split ( "](" )
        let ref = document.createElement ( "a" )
        ref.href = tmp[1].slice(0,-1)
        ref.setAttribute( "target", "_blank" )
        ref.innerHTML = this.formatText ( tmp[0].slice(1) )
        line = line.split ( anchor ).join( ref.outerHTML )
      }
    ) : null
    return line
  }

  formatText ( line ) {
      let result = "";
      let regexpr;
      this.symbols.forEach (
        current => {
          regexpr = new RegExp(
            current.reg + ".[^" + current.reg + "]+" + current.reg, "g"
          )
          let matches = line.match ( regexpr )
          matches ? matches.forEach (
            item => line = line.split(item)
              .join(
                  item.replace( current.symb, current.tag[0] )
                    .replace( current.symb, current.tag[1] )
              )
          ) : null
        }
      )
      return line
  }

}

PageComponent.prototype.regExprs = {
    CodeComponent: /~~~~.[^~~~~]+~~~~/,
    CodeSnippet: /~~~.[^~~~]+~~~/,
    Slider: /!!\[.[^\]]+\]/,
    Table: /\n\n\|(.+|\n[^\n\n])+/
}

PageComponent.prototype.generator = function* () {
    let keys = Object.keys ( this )
    let fragment, start, end, key

    while ( keys.length ) {
      fragment = true
      key = keys.shift()
      if ( key === "pageContent" ) continue

      while ( fragment ) {
        fragment = this.pageContent.match ( this[ key ] )
        if ( !fragment ) break
        start = fragment.index
        end = start + fragment[0].length + 1
        this.pageContent = this.pageContent.split (
            fragment[0] ).join(`\n!!!${start}!!!\n`
        )
        yield { [ start ]: { type: key,content: fragment[0] } }
      }
    }


    yield { pageContent: this.pageContent }
}


PageComponent.prototype.symbols = [
  {
    symb: "**",
    reg: "\\*\\*",
    tag: ["<b>", "</b>"]
  },
  {
    symb: "_",
    reg: "_",
    tag: ["<em>", "</em>"]
  },
  {
    symb: "~",
    reg: "~",
    tag: ["<code>", "</code>"]
  },
  {
    symb: "#",
    reg: "#",
    tag: ["<h1>", "</h1>"]
  }
]

customElements.define(
  "page-element",
  PageComponent
)
