let section = document.body
section.style.letterSpacing = "2px"

function testExpr ( func, expr ) {
    let test = eval ( func );
    return `<p>${expr}<span style="color:#09b">&nbsp;&nbsp;&nbsp;&nbsp;// ${test()}</span> <span style="color:#888; font-size: 0.8rem;">( "${typeof test()}" )</span></p>`
}

let expressions = [ "0 + {}", "{} + 0", "0 + []", "[] + 0", "[] + {}", "{} + []", "!![] + ![]" ]

expressions.forEach (
    ( expression, index ) => setTimeout (
      function () {
        let func = "() => { let x = " + expression + "; return x }";
        section.innerHTML += testExpr ( func, expression )
      },
      2000 * index
    )
)