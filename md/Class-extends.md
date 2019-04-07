[footer]: https://github.com/garevna/js-course/raw/master/images/a-level-ico.png?raw=true
[ico20]: https://raw.githubusercontent.com/garevna/a-level-js-lessons/master/ico/a-level-20.png
[ico25]: https://raw.githubusercontent.com/garevna/a-level-js-lessons/master/ico/a-level-25.png
[hw-30]: https://raw.githubusercontent.com/garevna/a-level-js-lessons/master/ico/briefcase-30.png
[cap-30]: https://raw.githubusercontent.com/garevna/a-level-js-lessons/master/ico/coffee-30.png
[warn-25]: https://raw.githubusercontent.com/garevna/a-level-js-lessons/master/ico/warning-25.png
[link-25]: https://raw.githubusercontent.com/garevna/a-level-js-lessons/master/ico/link-25.png
[err-20]: https://raw.githubusercontent.com/garevna/a-level-js-lessons/master/ico/no_entry-20.png
[err-25]: https://raw.githubusercontent.com/garevna/a-level-js-lessons/master/ico/no_entry-25.png
[err-30]: https://raw.githubusercontent.com/garevna/a-level-js-lessons/master/ico/no_entry-30.png

| [:rewind:](Class#es6--ecmascript-2015-) |
|-|

###### Наследование

### extends

Ключевое слово **`extends`** используется для создания дочернего класса<br/>
Фактически мы передаем с помощью  extends  ссылку на прототип

:coffee:

```javascript
const Canvas = class {
    constructor () {
        this.canvas = document.createElement ( 'canvas' )
        document.body.appendChild ( this.canvas )
        this.canvas.height = "400"
        this.area = this.canvas.getContext ( "2d" )
    }
    drawLine ( points ) {
        this.area.beginPath()
        this.area.moveTo( points[0].x, points[0].y )
        this.area.lineTo( points[1].x, points[1].y )
        this.area.stroke()
    }
}

class ExtendedCanvas extends Canvas {
    drawCircle ( center, radius ) {
        this.area.beginPath()
        this.area.arc( center.x, center.y, radius, 0, 2 * Math.PI )
        this.area.stroke()
    }
}

let newCanvas = new ExtendedCanvas ()
newCanvas.drawCircle ( { x: 100, y: 100 }, 100 )
newCanvas.drawLine (  [ { x: 20, y: 20 }, { x: 300, y: 400 } ] )
```
👉 Обратите внимание, что метод **_drawCircle_** находится в прототипе экземпляра <br/>
( что логично, поскольку это метод класса ), <br/>
а метод **_drawLine_** родительского класса  Canvas<br/>
находится в прототипе прототипа <br/>
( что соответствует прототипной модели наследования - <br/>
мы получили цепочку прототипов )

| [:rewind:](Class#es6--ecmascript-2015-) |
|-|

_________________________________________________________________________

![](https://github.com/garevna/js-course/raw/master/images/a-level-ico.png?raw=true)
