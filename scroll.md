## :mortar_board: Размеры и прокрутка элемента

✅ scrollHeight

    полная высота элемента

✅ scrollWidth

    полная ширина элемента

✅ clientHeight

    высота видимой части элемента
    ( за вычетом полосы прокрутки )

✅ clientWidth

    ширина видимой части элемента
    ( за вычетом полосы прокрутки )


✅ offsetHeight

    высота видимой части элемента
    ( с учетом полосы прокрутки )

✅ offsetWidth

    ширина видимой части элемента
    ( с учетом полосы прокрутки )

✅ scrollTop

    высота "прокрученной" части элемента 
    ( сверху )

✅ scrollLeft

    ширина "прокрученной" части элемента 
    ( слева )
***
|[:coffee: :one:](https://plnkr.co/edit/2TACKm8yWn4FnbSujOGu?p=preview)|
|-|

###### :coffee: :two: Выполните код в консоли
```javascript
var randomMovie = ( function ( url ) {

    function randomPosition ( axis ) {
        return Math.round (
            Math.random() * window[ `inner${[ "Height", "Width" ][ axis ]}` ] 
                          - logo [ `offset${[ "Height", "Width" ][ axis ]}` ]
        )
    }

    var logo = document.body.appendChild (
        document.createElement ( "img" )
    )
    logo.src = url
    logo.width = 70
    logo.style = `
        transition: all 1s;
        position: fixed;
        top: ${randomPosition ( 0 )}px;
        left: ${randomPosition ( 1 )}px;
    `
	
    function randomDistance ( axis ) {

        return randomPosition ( axis ) - 
               logo [ `offset${[ "Top", "Left" ][ axis ]}` ]
    }

    return function ( num ) {
        while ( num --> 0 ) {
            var sign = Math.random() < 0.5 ? -1 : 1
            var transformations = [
                `scale(${Math.max(Math.random(),0.3)})`,
                `rotate(
                    ${sign * Math.round( Math.random()*360 )}deg)`,
                `translate(
                    ${randomDistance(1)}px,
                    ${randomDistance(0)}px
                 )`
            ]
            var transformation = transformations [
                Math.round ( Math.random()*( transformations.length - 1 ) )
            ]
            setTimeout (
                ( function ( img, mc ) {
                    return function () {
                        img.style.transform = mc
                    }
                })( logo, transformation )
                , Math.round ( 1000*num )
            )
        }
    }
})( "https://cdn.vuetifyjs.com/images/logos/v-alt.svg"  )

randomMovie ( 50 )
```

***
###### :mortar_board: getBoundingClientRect()
