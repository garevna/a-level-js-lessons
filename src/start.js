window.onhashchange = function ( event ) {
  const topic = location.hash.slice(1)
  console.log ( topic )
  const pageElement = document.getElementsByTagName ( "page-element" )[0]
  pageElement.setAttribute (
    "src",
    `src/lessons/${topic}.md`
  )
}
