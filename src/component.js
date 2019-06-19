class CodeSnippet extends HTMLElement {
    constructor() {
      super()
      this.shadow = this.attachShadow ( { mode: "open" } )
      this.shadow.innerHTML = this.constructor.template
    }
    connectedCallback () {

      this.header = this.shadow.querySelector ( "#header" )
      this.script = this.shadow.querySelector ( "#scriptContent" )
      this.wrapper = this.shadow.querySelector ( ".collapsible-content" )
    }
    static get observedAttributes() {
        return [ 'lang', 'header' ]
    }
    attributeChangedCallback( attrName, oldVal, newVal ) {

        this.content = this.content ? this.content : this.textContent
        this.script.textContent = this.content

        if ( attrName === 'header' || !newVal ) {
          this.header.innerText = this.getAttribute ( "header" )
          return
        }

        let lang = this.getAttribute ( "lang" )
        if ( !lang ) return

        this.script.setAttribute( "data-language", lang )
        let wrapper = this.wrapper
        let script = this.script
        Rainbow.color(
            script.textContent,
            lang,
            function( highlightedCode ) {
                script.innerHTML = highlightedCode
            }
        )
    }
}

CodeSnippet.template = `

<style>
  a {
    text-decoration: none;
    color: #777;
  }
  input[type='checkbox'] {
      display: none;
  }
  .lbl-toggle {
      display: block;
      font-weight: bold;
      font-family: monospace;
      font-size: 1.1rem;
      text-transform: uppercase;
      text-align: right;
      padding: 0.7rem;
      color: #fff;
      background: #bbb;
      cursor: pointer;
      border-radius: 3px;
      transition: all 0.25s ease-out;
      user-select: none;
      background-image: url(https://www.webfx.com/tools/emoji-cheat-sheet/graphics/emojis/coffee.png);
      background-repeat: no-repeat;
      background-size: 25px;
      background-position: left center;
      border-left: solid 10px transparent;
  }
  .lbl-toggle:hover {
      text-shadow: 1px 1px 1.5px #00000090;
  }
  .lbl-toggle::before {
      content: ' ';
      display: inline-block;
      border-top: 5px solid transparent;
      border-bottom: 5px solid transparent;
      border-left: 5px solid currentColor;
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
      border: inset 1px;
  }
  .collapsible-content {
      max-height: 0px;
      overflow: auto;
      transition: max-height .25s ease-in-out;
  }
  .toggle:checked + .lbl-toggle + .collapsible-content {
      max-height: 900px;
  }
  .toggle:checked + .lbl-toggle::before {
      transform: rotate(90deg) translateX(-3px);
  }
  .toggle:checked + .lbl-toggle {
      border-bottom-right-radius: 3px;
      border-bottom-left-radius: 3px;
  }

  /* Rainbow */
/* @keyframes fade-in{0%{opacity:0}100%{opacity:1}}@keyframes fade{10%{transform:scale(1, 1)}35%{transform:scale(1, 1.7)}40%{transform:scale(1, 1.7)}50%{opacity:1}60%{transform:scale(1, 1)}100%{transform:scale(1, 1);opacity:0}}[data-language] code,[class^="lang"] code,pre [data-language],pre [class^="lang"]{opacity:0;-ms-filter:"progid:DXImageTransform.Microsoft.Alpha(Opacity=100)";animation:fade-in 50ms ease-in-out 2s forwards}[data-language] code.rainbow,[class^="lang"] code.rainbow,pre [data-language].rainbow,pre [class^="lang"].rainbow{animation:none;transition:opacity 50ms ease-in-out}[data-language] code.loading,[class^="lang"] code.loading,pre [data-language].loading,pre [class^="lang"].loading{animation:none}[data-language] code.rainbow-show,[class^="lang"] code.rainbow-show,pre [data-language].rainbow-show,pre [class^="lang"].rainbow-show{opacity:1}pre{position:relative}pre.loading .preloader div{animation-play-state:running}pre.loading .preloader div:nth-of-type(1){background:#0081f5;animation:fade 1.5s 300ms linear infinite}pre.loading .preloader div:nth-of-type(2){background:#5000f5;animation:fade 1.5s 438ms linear infinite}pre.loading .preloader div:nth-of-type(3){background:#9000f5;animation:fade 1.5s 577ms linear infinite}pre.loading .preloader div:nth-of-type(4){background:#f50419;animation:fade 1.5s 715ms linear infinite}pre.loading .preloader div:nth-of-type(5){background:#f57900;animation:fade 1.5s 853ms linear infinite}pre.loading .preloader div:nth-of-type(6){background:#f5e600;animation:fade 1.5s 992ms linear infinite}pre.loading .preloader div:nth-of-type(7){background:#00f50c;animation:fade 1.5s 1130ms linear infinite}pre .preloader{position:absolute;top:12px;left:10px}pre .preloader div{width:12px;height:12px;border-radius:4px;display:inline-block;margin-right:4px;opacity:0;animation-play-state:paused;animation-fill-mode:forwards}pre{background-color:#000;word-wrap:break-word;margin:0px;padding:10px;color:#fff;font-size:14px;margin-bottom:20px}pre,code{font-family:'Monaco', 'Menlo', courier, monospace}code span{transition:color 0.6s ease-in}code .red{color:#f50419}code .orange{color:#f57900}code .yellow{color:#f5e600}code .green{color:#00f50c}code .blue{color:#0081f5}code .indigo{color:#5000f5}code .violet{color:#9000f5}code .animate{color:#fff !important}pre{background:#010104}pre .comment{color:#747474}pre .keyword,pre .selector,pre .operator{color:#bc5cff}pre .storage,pre .support{color:#fb2639}pre .string{color:#fff55c}pre .constant{color:#ffad5c}pre .entity{color:#43a6ff}pre .inherited-class,pre .storage{font-style:italic}[data-language="custom"] .comment,.lang-custom .comment,.language-custom .comment{color:#314CAD}[data-language="custom"] .integer,.lang-custom .integer,.language-custom .integer{color:#f5e600}[data-language="custom"] .keyword,.lang-custom .keyword,.language-custom .keyword{color:#f57900}[data-language="html"] .attribute,.lang-html .attribute,.language-html .attribute{color:#fc4959} */

/* Github */
/*@keyframes fade-in{0%{opacity:0}100%{opacity:1}}@keyframes fade{10%{transform:scale(1, 1)}35%{transform:scale(1, 1.7)}40%{transform:scale(1, 1.7)}50%{opacity:1}60%{transform:scale(1, 1)}100%{transform:scale(1, 1);opacity:0}}[data-language] code,[class^="lang"] code,pre [data-language],pre [class^="lang"]{opacity:0;-ms-filter:"progid:DXImageTransform.Microsoft.Alpha(Opacity=100)";animation:fade-in 50ms ease-in-out 2s forwards}[data-language] code.rainbow,[class^="lang"] code.rainbow,pre [data-language].rainbow,pre [class^="lang"].rainbow{animation:none;transition:opacity 50ms ease-in-out}[data-language] code.loading,[class^="lang"] code.loading,pre [data-language].loading,pre [class^="lang"].loading{animation:none}[data-language] code.rainbow-show,[class^="lang"] code.rainbow-show,pre [data-language].rainbow-show,pre [class^="lang"].rainbow-show{opacity:1}pre{position:relative}pre.loading .preloader div{animation-play-state:running}pre.loading .preloader div:nth-of-type(1){background:#0081f5;animation:fade 1.5s 300ms linear infinite}pre.loading .preloader div:nth-of-type(2){background:#5000f5;animation:fade 1.5s 438ms linear infinite}pre.loading .preloader div:nth-of-type(3){background:#9000f5;animation:fade 1.5s 577ms linear infinite}pre.loading .preloader div:nth-of-type(4){background:#f50419;animation:fade 1.5s 715ms linear infinite}pre.loading .preloader div:nth-of-type(5){background:#f57900;animation:fade 1.5s 853ms linear infinite}pre.loading .preloader div:nth-of-type(6){background:#f5e600;animation:fade 1.5s 992ms linear infinite}pre.loading .preloader div:nth-of-type(7){background:#00f50c;animation:fade 1.5s 1130ms linear infinite}pre .preloader{position:absolute;top:12px;left:10px}pre .preloader div{width:12px;height:12px;border-radius:4px;display:inline-block;margin-right:4px;opacity:0;animation-play-state:paused;animation-fill-mode:forwards}pre{border:1px solid #ccc;word-wrap:break-word;padding:6px 10px;line-height:19px;margin-bottom:20px}pre code{border:0;padding:0;margin:0;border-radius:0}code{border:1px solid #eaeaea;margin:0px 2px;padding:0px 5px;font-size:12px}pre,code{font-family:Consolas, 'Liberation Mono', Courier, monospace;color:#333;background:#f8f8f8;border-radius:3px}pre,pre code{font-size:13px}pre .comment{color:#998}pre .support{color:#0086B3}pre .tag,pre .tag-name{color:navy}pre .keyword,pre .css-property,pre .vendor-fix,pre .sass,pre .class,pre .id,pre .css-value,pre .entity.function,pre .storage.function{font-weight:bold}pre .css-property,pre .css-value,pre .vendor-fix,pre .support.namespace{color:#333}pre .constant.numeric,pre .keyword.unit,pre .hex-color{font-weight:normal;color:#099}pre .entity.class{color:#458}pre .entity.id,pre .entity.function{color:#900}pre .attribute,pre .variable{color:teal}pre .string,pre .support.value{font-weight:normal;color:#d14}pre .regexp{color:#009926}*/

/* Blackboard */
/* @keyframes fade-in{0%{opacity:0}100%{opacity:1}}@keyframes fade{10%{transform:scale(1, 1)}35%{transform:scale(1, 1.7)}40%{transform:scale(1, 1.7)}50%{opacity:1}60%{transform:scale(1, 1)}100%{transform:scale(1, 1);opacity:0}}[data-language] code,[class^="lang"] code,pre [data-language],pre [class^="lang"]{opacity:0;-ms-filter:"progid:DXImageTransform.Microsoft.Alpha(Opacity=100)";animation:fade-in 50ms ease-in-out 2s forwards}[data-language] code.rainbow,[class^="lang"] code.rainbow,pre [data-language].rainbow,pre [class^="lang"].rainbow{animation:none;transition:opacity 50ms ease-in-out}[data-language] code.loading,[class^="lang"] code.loading,pre [data-language].loading,pre [class^="lang"].loading{animation:none}[data-language] code.rainbow-show,[class^="lang"] code.rainbow-show,pre [data-language].rainbow-show,pre [class^="lang"].rainbow-show{opacity:1}pre{position:relative}pre.loading .preloader div{animation-play-state:running}pre.loading .preloader div:nth-of-type(1){background:#0081f5;animation:fade 1.5s 300ms linear infinite}pre.loading .preloader div:nth-of-type(2){background:#5000f5;animation:fade 1.5s 438ms linear infinite}pre.loading .preloader div:nth-of-type(3){background:#9000f5;animation:fade 1.5s 577ms linear infinite}pre.loading .preloader div:nth-of-type(4){background:#f50419;animation:fade 1.5s 715ms linear infinite}pre.loading .preloader div:nth-of-type(5){background:#f57900;animation:fade 1.5s 853ms linear infinite}pre.loading .preloader div:nth-of-type(6){background:#f5e600;animation:fade 1.5s 992ms linear infinite}pre.loading .preloader div:nth-of-type(7){background:#00f50c;animation:fade 1.5s 1130ms linear infinite}pre .preloader{position:absolute;top:12px;left:10px}pre .preloader div{width:12px;height:12px;border-radius:4px;display:inline-block;margin-right:4px;opacity:0;animation-play-state:paused;animation-fill-mode:forwards}pre{background-color:#000;word-wrap:break-word;margin:0px;padding:10px;color:#fff;font-size:14px;margin-bottom:20px}pre,code{font-family:'Monaco', 'Menlo', courier, monospace}pre{background:#0B1022}pre .comment{color:#727272}pre .constant{color:#D8FA3C}pre .storage{color:#FBDE2D}pre .string,pre .comment.docstring{color:#61CE3C}pre .string.regexp,pre .support.tag.script,pre .support.tag.style{color:#fff}pre .keyword,pre .selector{color:#FBDE2D}pre .inherited-class{font-style:italic}pre .entity{color:#FF6400}pre .support{color:#8DA6CE}pre .variable.global,pre .variable.class,pre .variable.instance{color:#FF6400}[data-language="c"] .function.call,.lang-c .function.call,.language-c .function.call{color:#8DA6CE} */

/* Dreamwaver */
@keyframes fade-in{0%{opacity:0}100%{opacity:1}}@keyframes fade{10%{transform:scale(1, 1)}35%{transform:scale(1, 1.7)}40%{transform:scale(1, 1.7)}50%{opacity:1}60%{transform:scale(1, 1)}100%{transform:scale(1, 1);opacity:0}}[data-language] code,[class^="lang"] code,pre [data-language],pre [class^="lang"]{opacity:0;-ms-filter:"progid:DXImageTransform.Microsoft.Alpha(Opacity=100)";animation:fade-in 50ms ease-in-out 2s forwards}[data-language] code.rainbow,[class^="lang"] code.rainbow,pre [data-language].rainbow,pre [class^="lang"].rainbow{animation:none;transition:opacity 50ms ease-in-out}[data-language] code.loading,[class^="lang"] code.loading,pre [data-language].loading,pre [class^="lang"].loading{animation:none}[data-language] code.rainbow-show,[class^="lang"] code.rainbow-show,pre [data-language].rainbow-show,pre [class^="lang"].rainbow-show{opacity:1}pre{position:relative}pre.loading .preloader div{animation-play-state:running}pre.loading .preloader div:nth-of-type(1){background:#0081f5;animation:fade 1.5s 300ms linear infinite}pre.loading .preloader div:nth-of-type(2){background:#5000f5;animation:fade 1.5s 438ms linear infinite}pre.loading .preloader div:nth-of-type(3){background:#9000f5;animation:fade 1.5s 577ms linear infinite}pre.loading .preloader div:nth-of-type(4){background:#f50419;animation:fade 1.5s 715ms linear infinite}pre.loading .preloader div:nth-of-type(5){background:#f57900;animation:fade 1.5s 853ms linear infinite}pre.loading .preloader div:nth-of-type(6){background:#f5e600;animation:fade 1.5s 992ms linear infinite}pre.loading .preloader div:nth-of-type(7){background:#00f50c;animation:fade 1.5s 1130ms linear infinite}pre .preloader{position:absolute;top:12px;left:10px}pre .preloader div{width:12px;height:12px;border-radius:4px;display:inline-block;margin-right:4px;opacity:0;animation-play-state:paused;animation-fill-mode:forwards}pre{background-color:#000;word-wrap:break-word;margin:0px;padding:10px;color:#fff;font-size:14px;margin-bottom:20px}pre,code{font-family:'Monaco', 'Menlo', courier, monospace}pre,code{font-family:monospace}pre{background-color:#fff;color:#000;font-size:13px;line-height:16px}pre .comment{color:#888}pre .support{color:#cd57d5}pre .constant.numeric,pre .php.embedded{color:#fa0002;font-weight:bold}pre .keyword,pre .constant.language{color:#000789;font-weight:bold}pre .selector,pre .support.property,pre .entity.name.function{color:#000}pre .storage.function,pre .variable.self,pre .support.function,pre .constant.language{color:#000;font-weight:bold}pre .string{color:#0d43fa;font-weight:normal}pre .css-property+span,pre .keyword.unit,pre .support.css-value{color:#0d43fa !important;font-weight:normal !important}pre .entity.tag.style+.string,pre .php.embedded .constant.language,pre .php.embedded .keyword{color:#37a348 !important}pre .support.method{color:#2bd5bb}pre .entity.name{color:#fd74e0}pre .support.css-property,pre .support.tag-name,pre .support.tag,pre .support.attribute,pre .support.attribute+.operator{color:#000789}pre .storage.module,pre .storage.class{color:#122573;font-weight:bold}pre .css.embedded .support.tag,pre .css.embedded .style.tag{color:#cd57d5}pre .keyword.operator{color:#2852eb;font-weight:normal}pre .php.embedded .variable,pre .php.embedded .storage.function{color:#0d43fa;font-weight:normal}pre .php.embedded .string,pre .js.embedded .tag.script{color:#c4001e}pre .php.embedded .comment{color:#f4b441;font-weight:normal}pre .php.embedded .function.name{color:#000;font-weight:normal}

/* twilight */
/* @keyframes fade-in{0%{opacity:0}100%{opacity:1}}@keyframes fade{10%{transform:scale(1, 1)}35%{transform:scale(1, 1.7)}40%{transform:scale(1, 1.7)}50%{opacity:1}60%{transform:scale(1, 1)}100%{transform:scale(1, 1);opacity:0}}[data-language] code,[class^="lang"] code,pre [data-language],pre [class^="lang"]{opacity:0;-ms-filter:"progid:DXImageTransform.Microsoft.Alpha(Opacity=100)";animation:fade-in 50ms ease-in-out 2s forwards}[data-language] code.rainbow,[class^="lang"] code.rainbow,pre [data-language].rainbow,pre [class^="lang"].rainbow{animation:none;transition:opacity 50ms ease-in-out}[data-language] code.loading,[class^="lang"] code.loading,pre [data-language].loading,pre [class^="lang"].loading{animation:none}[data-language] code.rainbow-show,[class^="lang"] code.rainbow-show,pre [data-language].rainbow-show,pre [class^="lang"].rainbow-show{opacity:1}pre{position:relative}pre.loading .preloader div{animation-play-state:running}pre.loading .preloader div:nth-of-type(1){background:#0081f5;animation:fade 1.5s 300ms linear infinite}pre.loading .preloader div:nth-of-type(2){background:#5000f5;animation:fade 1.5s 438ms linear infinite}pre.loading .preloader div:nth-of-type(3){background:#9000f5;animation:fade 1.5s 577ms linear infinite}pre.loading .preloader div:nth-of-type(4){background:#f50419;animation:fade 1.5s 715ms linear infinite}pre.loading .preloader div:nth-of-type(5){background:#f57900;animation:fade 1.5s 853ms linear infinite}pre.loading .preloader div:nth-of-type(6){background:#f5e600;animation:fade 1.5s 992ms linear infinite}pre.loading .preloader div:nth-of-type(7){background:#00f50c;animation:fade 1.5s 1130ms linear infinite}pre .preloader{position:absolute;top:12px;left:10px}pre .preloader div{width:12px;height:12px;border-radius:4px;display:inline-block;margin-right:4px;opacity:0;animation-play-state:paused;animation-fill-mode:forwards}pre{background-color:#000;word-wrap:break-word;margin:0px;padding:10px;color:#fff;font-size:14px;margin-bottom:20px}pre,code{font-family:'Monaco', 'Menlo', courier, monospace}pre{background:#141414;color:#F8F8F8}pre .comment{color:#5F5A60}pre .constant.numeric{color:#D87D50}pre .constant{color:#889AB4}pre .constant.symbol,pre .constant.language{color:#D87D50}pre .storage{color:#F9EE98}pre .string{color:#8F9D6A}pre .string.regexp{color:#E9C062}pre .keyword,pre .selector,pre .storage{color:#CDA869}pre .inherited-class{color:#9B5C2E}pre .entity{color:#FF6400}pre .support{color:#9B859D}pre .support.magic{color:#DAD69A}pre .variable{color:#7587A6}pre .function,pre .entity.class{color:#9B703F}pre .support.class-name,pre .support.type{color:#AB99AC} */

.constant.language {
    color: darkorchid;
    font-weight: bold;
}

pre .storage.type {
  color: firebrick;
}

pre .storage.function, pre .variable.self, pre .support.function, pre .constant.language {
  color: #9000f5;
}

pre .entity.name.function {
    color: rgb(7, 119, 7);
}

pre .support {
  color: #84730b;
}

code {
    font-size: 14px;
    line-height: 1.8;
}


</style>
<section id="component">
    <div class="wrap-collabsible">
        <input id="collapsible" class="toggle" type="checkbox">
        <label for="collapsible" class="lbl-toggle">
          <span id="header">***</span>
        </label>
        <div class="collapsible-content">
          <pre class="content-inner">
            <code id="scriptContent">
              ...
            </code>
          </pre>
        </div>
    </div>
</section>
`
customElements.define( 'code-snippet', CodeSnippet )
