class Shutter extends HTMLElement {
    constructor () {
        super()
        this.shadow = this.attachShadow ( { mode:"closed" } )
        this.polygones = []
    }
    connectedCallback () {
        let style = this.shadow.appendChild (
            document.createElement ( "style" )
        )
        style.textContent = `
            main {
                position: absolute;
                width: 100vw;
                height: 100vh;
                margin: 0;
                padding: 0;
                overflow:hidden;
                box-sizing: border-box;
            }
            section {
                position: relative;
                width: 100%;
                overflow: hidden;
                margin: 0;
                padding: 0;
            }
            figure {
                position: absolute;
                display: inline-block;
                background-color: #444;
                height: 100%;
                margin: 0;
                animation-fill-mode: forwards;
                background: #00000090;
                box-shadow: 2px 2px 4px #00000070;
            }
            .right-figure {
                right: -100%;
                box-shadow: -2px 2px 4px #00000070;
            }
            .left-figure {
                left: -100%;
                box-shadow: 2px 2px 4px #00000070;
            }
            @keyframes movie-left {
                0%   { left: -100%; }
                45%  { left: 0%; }
                55%  { left: 0%; }
                100% { left: -100%; }
            }
            @keyframes movie-right {
                0%   { right: -100%; }
                45%  { right: 0%; }
                55%  { right: 0%; }
                100% { right: -100%; }
            }
        `
        let main = this.createElem ( "main", this.shadow )
        this.createPolygones( main )
        this.polygones.forEach (
            item => item.forEach (
                elem => elem.style [ "animation-name" ] = elem.movie
            )
        )
    }
    getSegmentHeight ( totalHeight ) {
        return totalHeight > 50 ?
                Math.max( 50, Math.min ( 150, Math.random () * totalHeight ) ) :
                totalHeight
    }
    getRandomColor () {
        return `rgba(
                    ${Math.round ( Math.random() * 200 )},
                    ${Math.round ( Math.random() * 200 )},
                    ${Math.round ( Math.random() * 200 )},
                    0.8)`
    }
    createElem ( tagName, container ) {
        return container.appendChild (
            document.createElement ( tagName )
        )
    }
    createFigure ( container, class_name ) {
        let elem = this.createElem ( "figure", container )
        class_name ? elem.className = class_name : null
        return elem
    }
    createPolygones ( container ) {

        let num = Math.max ( 5, Math.round ( Math.random () * 10 ) )
        let totalHeight = container.offsetHeight

        do {
            let height = this.getSegmentHeight ( totalHeight )
            let section = this.createElem ( "section", container )
            section.style.height = height + "px"
            totalHeight -= height

            let width = Math.round ( Math.max ( 0.3, Math.min ( Math.random (), 0.7 ) ) * section.offsetWidth )

            let elem1 = this.createFigure ( section, "left-figure" )
            let elem2 = this.createFigure ( section, "right-figure" )
            // elem1.style.backgroundColor = this.getRandomColor()
            // elem2.style.backgroundColor = this.getRandomColor()

            elem1.style[ "animation-duration" ] =
                elem2.style[ "animation-duration" ] = Math.max( 0.5, Math.random () ) + "s"

            elem1.movie = "movie-left"
            elem2.movie = "movie-right"

            elem1.style.width = width + "px"
            elem2.style.width = section.offsetWidth - width + "px"

            this.polygones.push ( [ elem1, elem2 ] )
        } while ( totalHeight > 0 )
    }
}

customElements.define ( "shutter-element", Shutter )

export default Shutter
