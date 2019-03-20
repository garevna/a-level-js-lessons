:one:

Используя асинхронную функцию, напилить код функции `printString`, выводящей строку на страницу по 1 символу в секунду

```javascript
function printString ( text, container ) {
    printLetter = ( letter, index ) => new Promise (
        resolve => setTimeout (
            () => resolve ( letter ),
            1000*index
        )
    )
    let demo = container && container.nodeType === 1 ?
        container : document.body.appendChild (
            document.createElement ( "div" )
        )
    text.split("")
        .forEach (
            async ( letter, index ) => demo.appendChild (
                document.createTextNode(
                    await printLetter ( letter, index )
                )
            )
        )
}
```

:three:

Напилить код функции `printString`, выводящей строку на страницу по 1 символу в секунду, используя анонимную асинхронную рекурсивную функцию, IIFE

```javascript
function printString ( text, container ) {
    printLetter = ( letter, index ) => new Promise (
        resolve => setTimeout (
            () => resolve ( letter ),
            1000*index
        )
    )
    let demo = container && container.nodeType === 1 ?
        container : document.body.appendChild (
            document.createElement ( "div" )
        )
    let tmp = text.split("")
    let index = 0;
    ( async function () {
        demo.appendChild ( document.createTextNode(
            await printLetter ( tmp.shift(), index++ )
        ))
        while ( tmp.length ) arguments.callee ()
    })()
}
```