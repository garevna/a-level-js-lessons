:coffee: :one:

[:link: Перейдите по ссылке](https://developer.mozilla.org/en-US/docs/Web/API/Window/location?name=garevna,date=10.07.2018)

В консоли новой вкладки выполните код:
```javascript
location.search.slice(1).split(',')
        .map ( x => Object.assign ( {}, 
                        { [ x.split( '=' )[0] ] : x.split( '=' )[1] } 
                    ) 
        )
```

_____________________________________________________________________________

:coffee: :two:

[:link: Перейдите по ссылке](https://developer.mozilla.org/en-US/docs/Web/API/Window/location?name=garevna,date=10.07.2018)

Теперь в консоли новой вкладки объявите функцию:

```javascript
function getSearchObject () {
        var obj = {}
        location.search.slice(1).split( ',' )
                .map ( x => x.split( '=' ) )
                .map ( function ( item ) {
                        this[ item [0] ] = item [1]
        }, obj )
        return obj
}
```
Вызовите функцию  getSearchObject ()

________________________________________________________________________________

| [:coffee::three:](https://garevna.github.io/js-samples/?name=garevna,date=10.07.2018#11 "Пример в песочнице") |
|-|

_____________________________________________________________________________

:coffee: :four:

В консоли [**_страницы_**](https://medium.com/@js_tut/the-complete-guide-to-es10-features-f09a8c7be1bd) выполните код: 

```javascript
let changeClass = ( classname, styleString ) => ( Array.from ( document.styleSheets )
    .filter ( sheet => !sheet.href )
        .map (
            sheet => Array.from ( sheet.cssRules )
                    .filter ( rule => rule.selectorText === `.{classname}` )
        )
           .filter ( item => item.length > 0 )
               .map ( item => item[0].cssText.split ("}")
                           .join ( `${styleString}}` )
               )
).length > 0 ? console.log ( "found" ) : 
    document.head.appendChild (
        document.createElement ( "style" )
    ).textContent = `.${classname} {${styleString}}`

changeClass ( "graf", "background-color: red!important;" )
```