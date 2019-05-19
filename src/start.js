const topic = location.hash.slice(1)
console.log ( topic )
const pageElement = document.getElementsByTagName ( "page-element" )[0]

pageElement.setAttribute (
  "src",
  `src/lessons/${topic}.md`
)
// location.href = topic.indexOf ( ".md" ) >= 0 ?
//     `https://github.com/garevna/a-level-js-lessons/blob/master/md/${topic}` :
//     `https://garevna.github.io/a-level-js-lessons/html/${topic}`
