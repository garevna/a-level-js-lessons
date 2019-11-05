'use strict'

class PictureSlider extends HTMLElement {
    constructor () {
        super()
        this.pictures = []
        this.currentIndex = 0
        this.currentSlide = 0
        let shadow = this.attachShadow ( { mode: 'open' } )
        this.container = shadow.appendChild (
          this.createElem ( 'figure' )
        )
        let style = document.createElement ( 'style' )
        style.textContent = `
            figure {
                position: fixed;
                top: 0;
                left: 0;
                bottom: 0;
                right: 0;
                overflow: hidden;
                margin: 0;
                z-index:500;
                background: #00000090;
                background-image: url(src/images/phone-static-3.jpg);
                background-size: cover;
                background-position: center;

            }
            button {
              position: absolute;
              top: 50%;
              font-size: 50px;
              font-weight: bold;
              z-index: 100;
              background: transparent;
              border: 0;
              color: white;
              text-shadow: 3px 3px 5px #00000090;
              outline: none;
              font-family: Poppins, 'Luckiest Guy', Roboto, Arial;
              transition: all 0.5s;
            }
            button:hover {
              transform: rotate(360deg);
              text-shadow: 2px 2px 4px #000000b0;
              cursor: pointer;
            }
            #left { left: 4%; }
            #left:before { content: "<"; }
            #right { right: 4%; }
            #right:before { content: ">"; }
            #close { top: 10px; right: 4px; }
            #close:before {
              content: "";
              padding: 25px;
              vertical-align: middle;
              background-size: contain;
              background-repeat: no-repeat;
              background-position: center;
              background-image: url(https://www.webfx.com/tools/emoji-cheat-sheet/graphics/emojis/no_entry_sign.png);
            }
            div {
              position: absolute;
              top: 5%;
              bottom: 5%;
              left: 5%;
              width: 80%;
              box-sizing: border-box;
              margin:0;
              background-color: #000c0d90;
              background-repeat: no-repeat;
              background-size: contain;
              background-position: center center;
              transition: all 0.8s;
              box-shadow: inset 10px 10px 20px #00000090;
            }
            @media screen and (max-width:500px) {
              button { font-size: 20px; }
            }
            @media screen and (max-width:360px) {
              button { font-size: 16px; }
            }
        `
        shadow.appendChild ( style )
        this.btnClose = this.createElem ( 'button', this.container )
        this.btnClose.onclick = () => this.remove()

        this.btnClose.id = 'close'
        this.btnLeft = this.createElem ( 'button', this.container )
        this.btnLeft.id = 'left'
        this.btnLeft.onclick = () => this.changePicture ( "left" )

        this.btnRight = this.createElem ( 'button', this.container )
        this.btnRight.id = 'right'
        this.btnRight.onclick = () => this.changePicture ( "right" )

    }
    createElem ( tagName, container ) {
        return  ( !container ? document.body : container )
                .appendChild (
                  document.createElement ( tagName )
                )
    }

    static get observedAttributes() {
        return [ 'pictures']
    }

    attributeChangedCallback( attrName, oldVal, newVal ) {
        this.pictures = JSON.parse ( this.getAttribute ( "pictures" ) )
        this.slides = []
        this.slides [ 0 ] = new Slide (
                        this.pictures [ 0 ],
                        this.container
        )
        this.slides [ 0 ].mcFromTo ( 100, 10 )
        this.slides [ 1 ] = new Slide (
                        this.pictures [ 1 ],
                        this.container
        )
        this.slides [ 1 ].init ( 100 )
    }

    changePicture ( direction ) {
        let to = direction === 'left' ? 100 : -100
        let nextSlide = this.currentSlide === 0 ? 1 : 0
        let nextIndex = this.getNextIndex ( direction )
        this.slides [ nextSlide ].setPicture ( this.pictures [ nextIndex ] )
        this.slides [ nextSlide ].init ( -to )
        this.slides [ this.currentSlide ].mcFromTo ( 10, to, 0 )
        this.slides [ nextSlide ].mcFromTo ( -to, 10, 1 )
        setTimeout ( function () {
            this.currentSlide = nextSlide
            this.currentIndex = nextIndex
        }.bind(this), 1000 )
    }

    getNextIndex ( dir ) {
      return dir === 'left' ?
            ( this.currentIndex === 0 ?
                this.pictures.length - 1 : this.currentIndex - 1 ) :
            ( this.currentIndex === this.pictures.length - 1 ?
                0 : this.currentIndex + 1 )
    }

}
customElements.define ( 'picture-slider', PictureSlider )

const Slide = function ( imageURL, container ) {
    this.imageURL = imageURL
    let elem = container.appendChild (
      document.createElement ( 'div' )
    )
    elem.style = `background-image: url(${imageURL});`
    this.init = x => {
        elem.style.left = x + '%'
    }
    this.setPicture = pictureURL =>
        elem.style.backgroundImage = `url(${pictureURL})`

    this.mcFromTo = function ( from, to, finalOpacity ) {
        elem.style.transition = 'none'
        elem.style.left = from + '%'
        elem.style.opacity = 1 - finalOpacity
        setTimeout ( function () {
            elem.style.transition = 'all 0.8s'
            elem.style.left = to + '%'
            elem.style.opacity = finalOpacity
        }, 50 )
    }
}

export default PictureSlider
