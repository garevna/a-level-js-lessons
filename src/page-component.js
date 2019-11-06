'use strict';

class PageComponent extends HTMLElement {
  constructor() {
    super();
    this.fragments = {};
    this.pageContent = "";
    this.pageContentList = [];
    this.main = this.appendChild(document.createElement("main"));
    let footer = this.appendChild(document.createElement("footer"));
    footer.innerHTML += `
    <br><br><br><br><br><br>
    <figure class="overshadow">
      <div class="overshadow__shadow">
        <div class="overshadow__text">&nbsp;</div>
      </div>
    </figure>`;
    this.menu = document.getElementsByTagName("menu-component")[0];
  }

  connectedCallback() {
    
    let path = location.host === "garevna.github.io" ? "/js-lessons/" : "/"
    let pathNew = location.pathname.split( location.host === "garevna.github.io" ? "/js-lessons/" : "/" ).join ("");
    console.log ( pathNew );
    let startPath = `${createPath("lessons", location.pathname === path ? "start-page" : location.pathname.slice(1))}`;
    // let startPath = `${createPath("lessons", location.pathname === "/" ? "start-page" : location.pathname.slice(1))}`;
    console.log ( startPath )
    this.setAttribute("src", `${startPath}.md`);
    this.styleSheet = this.appendChild(document.createElement("style"));
    Promise.all([
      fetch(createPath("src", "for-rainbow.css")).then(response => response.text()),
      fetch(createPath("src", "page.css")).then(response => response.text()),
      fetch(createPath("src", "icons.css"))
        .then(response => response.text())])
          .then(response => this.styleSheet.textContent += response.join(String.fromCharCode(10)));
  }

  static get observedAttributes() {
    return ['src'];
  }

  attributeChangedCallback(attrName, oldVal, newVal) {
    this.fragments = {};
    this.pageContent = "";
    this.pageContentList = [];
    this.main.innerHTML = "";
    this.menu.setAttribute("options", "");
    this.getData(newVal);
  }

  getData(file) {
    fetch(file).then(response => response.text().then(response => this.parsePageContent(response)));
  }

  parseTextFragment(textFragment) {
    let lines = textFragment.length ? textFragment.split("\n") : [];
    lines.forEach(line => line.length ? this.main.appendChild(this.parseLine(line)) : null);
  }

  parsePageContent(pageContent) {
    this.main.innerHTML = "";
    this.pageContent = pageContent;
    this.parseTables();
    this.regExprs.pageContent = this.pageContent;
    this.fragments = {};

    for (let fragment of this.regExprs) {
      Object.assign(this.fragments, fragment);
    }

    this.pageContent = this.fragments.pageContent;
    delete this.fragments.pageContent;
    let insertionPoints = this.pageContent.match(/!!!.[^!!!]+!!!/g);
    !insertionPoints ? null : insertionPoints.forEach(insertionPoint => {
      let tmp = this.pageContent.split(insertionPoint);
      insertionPoint = insertionPoint.slice(3, -3);

      while (tmp.length > 1) {
        let fragment = tmp.shift();
        this.parseTextFragment(fragment);
        this[`create${this.fragments[insertionPoint].type}`](this.fragments[insertionPoint].content);
      }

      this.pageContent = tmp.join("");
    });
    this.pageContent.length ? this.parseTextFragment(this.pageContent) : null;
    this.menu.setAttribute("options", JSON.stringify(this.pageContentList));
    this.pageContent = this.createTables(this.pageContent);
    document.querySelector("page-element").querySelectorAll("div", "pre").forEach(elem => elem.innerHTML.trim() ? this.insertTable(elem) : elem.remove());
  } // Block level


  insertTable(elem) {
    let cont = elem.innerHTML.match(/\[{3}\d\]{3}/);
    if (!cont) return;
    elem.innerHTML = "";
    elem.appendChild(this.createTable(cont[0].slice(3, -3)));
  }

  parseTables() {
    let total = this.pageContent.split("\n");
    this.tables = [];
    let table, string, x;

    const startTable = function (string) {
      this.pageContent = this.pageContent.split(string).join(`[[[${this.tables.length}]]]`);
      this.tables.push([]);
      return this.tables[this.tables.length - 1];
    }.bind(this);

    const fillTable = function () {
      string = total.shift();
      x = string.match(/(^\|)(.)*\|/gm);
      x ? table = startTable(string) : null;

      while (x) {
        table.push(x[0].slice(1,-1));
        this.pageContent = this.pageContent.split(string).join("");
        string = total.shift();
        x = string.match(/(^\|)(.)*\|/);
      }

      total.length ? fillTable(total) : null;
    }.bind(this);

    fillTable();
  }

  createTables(content) {
    let tables = this.pageContent.match(/\[{3}\d\]{3}/gm);
    if (!tables) return;
    tables.forEach(item => this.pageContent.split(item).join(this.createTable(parseInt(item.slice(3, -3))).innerHTML)); // return content
  }

  createTable(num) {
    let table = document.createElement("table");

    for (let row of this.tables[num]) {
      let tr = table.appendChild(document.createElement("tr"));
      row.split("|").forEach(cell => tr.appendChild(document.createElement("td")).innerHTML = this.parseLine(cell.trim()).outerHTML);
    }

    return table;
  }

  createSlider(fragment) {
    let sliderStart = this.main.appendChild(document.createElement("button"));
    sliderStart.className = "slider-button";

    sliderStart.onclick = function (event) {
      const elem = this.main.appendChild(document.createElement('picture-slider'));
      elem.setAttribute("pictures", JSON.stringify(fragment.slice(3, -1).split(",")));
    }.bind(this);
  }

  createCodeComponent(fragment) {
    let lang = fragment.slice(4, fragment.search(String.fromCharCode(10)));
    let snippet = this.main.appendChild(document.createElement("code-snippet"));
    snippet.textContent = fragment.slice(4 + lang.length, fragment.length - 4);
    snippet.setAttribute("header", lang);
    snippet.setAttribute("lang", lang);
    this.main.appendChild(snippet);
  }

  createScriptSpoiler(fragment) {
    let lang = fragment.slice(4, fragment.search(String.fromCharCode(10)));
    let scriptSpoiler = this.main.appendChild(document.createElement("script-spoiler"));
    let scriptSpoilerContent = this.main.appendChild(lang.trim() === "console" ? this.createConsoleOutput(fragment.slice(1, -1)) : this.createCodeSnippet(fragment.slice(4 + lang.length, fragment.length - 4), lang));
    scriptSpoiler.setAttribute("header", lang);
    scriptSpoiler.content = scriptSpoilerContent;
    scriptSpoiler.setAttribute("content", "ready");
  }

  createScriptSnippet(fragment) {
    let lang = fragment.slice(3, fragment.search(String.fromCharCode(10)));
    return this.main.appendChild(lang.trim() === "console" ? this.createConsoleOutput(fragment) : this.createCodeSnippet(fragment.slice(3 + lang.length, fragment.length - 3), lang));
  }

  createConsoleOutput(fragment) {
    let snippet = document.createElement("pre");
    snippet.textContent = fragment.slice(10, fragment.length - 3);
    snippet.className = "black";
    return snippet;
  }

  createCodeSnippet(fragment, lang) {
    var div = document.createElement('div');
    div.innerHTML = `<pre><code data-language=${lang}>${fragment.trim()}</code></pre>`;
    Rainbow.color(div);
    Array.from(document.getElementsByClassName("preloader")).forEach(elem => elem.remove());
    return div;
  }

  createCodeOutput(fragment) {
    let outputScreen = this.main.appendChild(document.createElement("code-output"));
    outputScreen.setAttribute("script", fragment.slice(3, -3));
  }

  createSpoiler(fragment) {
    let spoiler = document.createElement("spoiler-component");
    this.main.appendChild(spoiler);
    let head = fragment.match(/(\^{3})\[(.+)\]/)[0];
    spoiler.setAttribute("header", head.slice(4, -1));
    spoiler.content = [];

    const getSnippet = function (string) {
      return string.indexOf("!!!") < 0 ? null : this.fragments[string.slice(3, -3)];
    }.bind(this);

    const getCodeSnippet = function (snippet) {
      if (snippet.type !== "ScriptSnippet") return null;
      let lang = snippet.content.slice(3, snippet.content.search(String.fromCharCode(10)));
      let scriptSnippetContent = this.main.appendChild(lang.trim() === "console" ? this.createConsoleOutput(snippet.content.slice(1, -1)) : this.createCodeSnippet(snippet.content.slice(3 + lang.length, snippet.content.length - 3), lang));
      spoiler.content.push(scriptSnippetContent);
      return true;
    }.bind(this);

    const getTable = function (string) {
      if (!string.match(/\[{3}\d\]{3}/)) return null;
      spoiler.content.push(this.createTable(parseInt(string.trim().slice(3, -3))));
      return true;
    }.bind(this);

    fragment.split(head).join("").slice(0, -3).split('\n').forEach(line => getSnippet(line) ? getCodeSnippet(getSnippet(line)) : getTable(line) ? null : spoiler.content.push(this.parseLine(line)));
    spoiler.setAttribute("ready", "1");
  } // =============================== Line level ===============================


  parseImage(line) {
    let string = line.match(/!\[\]\(.+\)/);
    let url = string ? line.match(/!\[\]\(.+\)/)[0].slice(4, -1) : null;
    if (!url) return null;
    let elem = document.createElement("img");
    elem.src = url.indexOf("http") === 0 ? url : eval(url);
    return elem;
  }

  parseHeader(line) {
    let headerLevel = line.match(/^[#]{1,6}/);
    if (!headerLevel) return {
      level: 0,
      text: line
    };
    let text = line.slice(headerLevel[0].length);
    let icons = text.match(/!\[.[^\]]+\]/g);
    icons ? icons.forEach(icon => text = text.split(icon).join("")) : null;
    let refs = text.match(/\[.[^(]+\]\(.[^\)]+\)/g);
    refs ? refs.forEach(ref => {
      let content = ref.split("](")[0].slice(1);
      text = text.split(ref).join(content);
    }) : null;
    this.main.appendChild(document.createElement("a")).name = encodeURI(text.trim());
    this.pageContentList.push({
      level: headerLevel[0].length,
      text: text.trim()
    });
    return {
      level: headerLevel[0].length,
      text: line = line.split(headerLevel[0]).join("")
    };
  }

  parseLine(line) {
    if (line.match(/[-_]{3,5000}/)) return document.createElement("hr");
    let img = this.parseImage(line);
    if (img) return img;
    let {
      level,
      text
    } = this.parseHeader(line);
    let elem = document.createElement(level > 0 ? `h${level}` : "div");
    elem.innerHTML = this.parseAnchors(text);
    return elem;
  }

  parseIcons(line) {
    let icons = line.match(/!\[.[^\]]+\]/g);
    icons ? icons.forEach(icon => {
      let ico = document.createElement("span");
      icon.slice(2, -1).split(" ").forEach(item => ico.classList.add(item));
      line = line.split(icon).join(ico.outerHTML);
    }) : null;
    return line;
  }

  parseAnchors(line) {
    let newLine = "";
    let anchors = line.match(/\[.[^(]+\]\(.[^\)]+\)/g);
    anchors ? anchors.forEach(anchor => {
      let parts = line.split(anchor);
      newLine += this.parseIcons(this.formatText(parts[0]));
      let tmp = anchor.split("](");
      let ref = document.createElement("a");
      ref.href = tmp[1].slice(0, -1);
      ref.setAttribute("target", "_blank");
      ref.innerHTML = this.parseIcons(this.formatText(tmp[0].slice(1)));
      newLine += ref.outerHTML + parts[1];
    }) : newLine = this.parseIcons(this.formatText(line));
    return newLine;
  }

  formatText(line) {
    let result = "";
    let regexpr;
    this.symbols.forEach(current => {
      regexpr = new RegExp(current.reg + ".[^" + current.reg + "]+" + current.reg, "g");
      let matches = line.match(regexpr);
      matches ? matches.forEach(item => line = line.split(item).join(item.replace(current.symb, current.tag[0]).replace(current.symb, current.tag[1]))) : null;
    });
    return line;
  }

  createGrid(fragment) {
    let grid = this.main.appendChild(document.createElement("div"));
    grid.className = "grid";
    let content = fragment.slice(4, -4).split("\n");
    content.forEach(line => grid.appendChild(this.parseLine(line)));
  }

}

PageComponent.prototype.regExprs = {
  CodeOutput: /\{{3}.[^}]*\}{3}/,
  ScriptSpoiler: /~~~~.[^~~~~]+~~~~/,
  ScriptSnippet: /~~~.[^~~~]+~~~/,
  Spoiler: /(\^{3})([\s\S]+?)\1/m,
  Slider: /!!\[.[^\]]+\]/,
  Grid: /\@\@\@\@\s+\S+[^\@\@\@\@]*]*\@\@\@\@/m
};

PageComponent.prototype.regExprs[Symbol.iterator] = function* () {
  let keys = Object.keys(this);
  let fragments, start, end, key;

  while (keys.length) {
    fragments = true;
    key = keys.shift();
    if (key === "pageContent") continue;

    while (fragments) {
      fragments = this.pageContent.match(this[key]);
      if (!fragments) break;
      start = fragments.index;
      end = start + fragments[0].length + 1;
      this.pageContent = this.pageContent.replace(fragments[0], `\n!!!${start}!!!\n`);
      yield {
        [start]: {
          type: key,
          content: fragments[0]
        }
      };
    }
  }

  yield {
    pageContent: this.pageContent
  };
};

PageComponent.prototype.symbols = [{
  symb: "••",
  reg: "••",
  tag: ["<figure class='black'>", "</figure>"]
}, {
  symb: "◘◘",
  reg: "◘◘",
  tag: ["<figure class='bordered'>", "</figure>"]
}, {
  symb: "**",
  reg: "\\*\\*",
  tag: ["<b>", "</b>"]
}, {
  symb: "_",
  reg: "_",
  tag: ["<em>", "</em>"]
}, {
  symb: "~",
  reg: "~",
  tag: ["<code style='background-color:#eef'>", "</code>"]
}, {
  symb: "^^",
  reg: "\\^\\^",
  tag: ["<small>", "</small>"]
}, {
  symb: ":::",
  reg: ":::",
  tag: ["<button class='cap'>", "</button>"]
}, {
  symb: "%%%",
  reg: "\%\%\%",
  tag: ["<button class='link'>", "</button>"]
}];

customElements.define("page-element", PageComponent);
export default PageComponent;
