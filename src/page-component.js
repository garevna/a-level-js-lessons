// let hash = location.hash.slice(1)

let hash = "Data-Structures"

class PageComponent extends HTMLElement {
  constructor () {
    super()
    this.fragments = {}
    this.pageContent = ""
    this.pageContentList = []

    this.main = this.appendChild (
      document.createElement ( "main" )
    )
    this.menu = document.getElementsByTagName ( "menu-component" )[0]
  }

  connectedCallback() {
      this.styleSheet = this.appendChild (
          document.createElement ( "style" )
      )

      Promise.all ([
        fetch ( "src/for-rainbow.css" )
          .then (response => response.text()),
        fetch ( "src/for-rainbow.css" )
          .then (response => response.text()),
        fetch ( "src/main.css" )
          .then (response => response.text()),
        fetch ( "src/icons.css" )
          .then (response => response.text())
      ]).then (
        response =>
          this.styleSheet.textContent += response.join(
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

  parseTextFragment ( textFragment ) {
      let lines = textFragment.length ?
          textFragment.split("\n") : []
      lines.forEach (
        line => line.length ?
          this.main.appendChild ( this.parseLine ( line ) ) :
          null
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
      this.pageContent.match ( /!!!.[^!!!]+!!!/g )
        .forEach (
          insertionPoint => {
            let tmp = this.pageContent.split( insertionPoint )
            let fragment = tmp.shift()
            this.pageContent = tmp.join("")

            this.parseTextFragment ( fragment )

            insertionPoint = insertionPoint.slice(3,-3)
            this[ `create${this.fragments[insertionPoint].type}` ](
                this.fragments[insertionPoint].content
            )
          }
        )
        this.pageContent.length ?
            this.parseTextFragment ( this.pageContent ) : null

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
                        cellContent => {
                          row.appendChild (
                            document.createElement ( "td" )
                          ).appendChild ( this.parseLine ( cellContent ) )
                        }
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

  createScriptSpoiler ( fragment ) {
      let lang = fragment.slice(
          4, fragment.search ( String.fromCharCode(10) )
      )
      let scriptSpoiler = this.main.appendChild (
        document.createElement ( "script-spoiler" )
      )

      let scriptSpoilerContent = this.main.appendChild (
        this.createCodeSnippet (
            fragment.slice ( 4 + lang.length, fragment.length - 4 ),
            lang
        )
      )

      scriptSpoiler.setAttribute ( "header", lang )
      scriptSpoiler.content = scriptSpoilerContent
      scriptSpoiler.setAttribute ( "content", "ready" )
  }

  createScriptSnippet ( fragment ) {
      let lang = fragment.slice(
          3, fragment.search ( String.fromCharCode(10) )
      )
      return this.main.appendChild (
          this.createCodeSnippet (
              fragment.slice ( 3 + lang.length, fragment.length - 3 ),
              lang
          )
      )
  }

  createCodeSnippet ( fragment, lang ) {
      let wrapper = document.createElement ( "pre" )
      let script = document.createElement ( "code" )
      script.setAttribute( "data-language", lang )
      script.textContent = fragment
      wrapper.appendChild( script )
      Rainbow.color(
          script.textContent,
          lang,
          highlightedCode => script.innerHTML = highlightedCode
      )
      return wrapper
  }

  createSpoiler ( fragment ) {
      let spoiler = document.createElement ( "spoiler-component" )
      this.main.appendChild ( spoiler )
      let head = fragment.match(/(\^{3})\[(.+)\]/)[0]
      spoiler.setAttribute ("header", head.slice(4,-1) )

      spoiler.content = []

      fragment.split ( head ).join("").slice (0,-3).split('\n')
        .forEach (
            line => {
                if ( line.indexOf ( "!!!" ) >= 0 ) {
                    let snippet = this.fragments [ line.slice(3,-3) ]
                    if ( snippet.type === "ScriptSnippet" ) {
                      let lang = snippet.content.slice(
                          3, snippet.content.search ( String.fromCharCode(10) )
                      )
                      let scriptSnippetContent = this.main.appendChild (
                          this.createCodeSnippet (
                              snippet.content.slice (
                                3 + lang.length,
                                snippet.content.length - 3
                              ),
                              lang
                          )
                      )
                      spoiler.content.push ( scriptSnippetContent )
                    }
                }
                else line.length ?
                        spoiler.content.push ( this.parseLine ( line ) ) :
                        null
            }
        )
      spoiler.setAttribute ( "ready", "1" )
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

    let headerLevel = line.match ( /^[#]{1,6}/ )

    if ( !headerLevel ) return { level: 0, text: line }

    let text = line.slice( headerLevel[0].length )

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
          level: headerLevel.length,
          text: text.trim()
      })

      return { level: headerLevel[0].length, text: line = line.split ( headerLevel[0] ).join("") }
  }

  parseLine ( line ) {
      if ( line.match (/[-_]{2,5000}/) ) return document.createElement ( "hr" )
      let img = this.parseImage ( line )
      if ( img ) return img
      let { level, text } = this.parseHeader ( line )
      let elem = document.createElement ( level > 0 ? `h${level}` : "div" )
      elem.innerHTML = this.parseAnchors ( text )
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
    let newLine = ""
    let anchors = line.match (/\[.[^(]+\]\(.[^\)]+\)/g)
    anchors ? anchors.forEach (
      anchor => {
        let parts = line.split ( anchor )
        newLine += this.parseIcons (
          this.formatText ( parts[0] )
        )
        let tmp = anchor.split ( "](" )
        let ref = document.createElement ( "a" )
        ref.href = tmp[1].slice(0,-1)
        ref.setAttribute( "target", "_blank" )
        ref.innerHTML = this.parseIcons (
          this.formatText ( tmp[0].slice(1) )
        )
        newLine += ref.outerHTML + parts[1]
      })
      : newLine = this.parseIcons (
          this.formatText ( line )
        )
    return newLine
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
    ScriptSpoiler: /~~~~.[^~~~~]+~~~~/,
    ScriptSnippet: /~~~.[^~~~]+~~~/,
    Slider: /!!\[.[^\]]+\]/,
    Table: /\n\n\|(.+|\n[^\n\n])+/,
    Spoiler: /(\^{3})([\s\S]+?)\1/m
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
        yield { [ start ]: { type: key, content: fragment[0] } }
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
    tag: ["<code style='background-color:#eef'>", "</code>"]
  },
  {
    symb: "^^",
    reg: "\\^\\^",
    tag: ["<small>", "</small>"]
  }
]

customElements.define(
  "page-element",
  PageComponent
)
