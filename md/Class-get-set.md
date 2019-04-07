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

| [:rewind:](Class) |
|-|

## <img src="https://avatars2.githubusercontent.com/u/19735284?s=40&v=4" width="30" title="Ⓒ Irina Fylyppova ( garevna ) 2019"/> get & set

:warning: Свойства, объявленные в конструкторе, будут собственными свойствами экземпляра

Для создания вычисляемых свойств нужно использовать геттеры и сеттеры

✋ С помощью ключевого слова  **`get`**  можно объявить геттер, возвращающий значение вычисляемого свойства

Геттер будет вызываться каждый раз при обращении к свойству экземпляра

✋ С помощью ключевого слова  **`set`**  можно объявить сеттер, изменяющий значение свойства

Такой метод будет вызываться каждый раз, когда идентификатор вычисляемого свойства будет в левой части оператора присваивания

:coffee:

Рассмотрим упрощенный пример с  canvas:
```javascript
const Canvas = class {
    constructor () {
        this.canvas = document.createElement ( 'canvas' )
        document.body.appendChild ( this.canvas )
        this.area = this.canvas.getContext ( "2d" )
    }
}
```
✍ Добавим сеттер свойства  **_history_**

Обратите внимание, что в конструкторе такого свойства нет
( и не должно быть )
```javascript
set history ( newHistory ) {
    if ( !this.canvas.history ) this.canvas.history = []
    if ( !Array.isArray ( newHistory )  ) {
        console.error ( 'History must be array' )
        return
    }
    var __history = newHistory
        .filter ( x => x.points && Array.isArray ( x.points ) )
    if ( __history.length === 0 ) {
        console.error ( 'History must contain points array' )
        return
    }
    this.canvas.history = __history
}
```
Этот метод изменяет содержимое массива  **canvas._history_**, если такое свойство уже существует,<br/>
или создает его в противном случае

✍ Теперь добавим геттер свойства  history:
```javascript
get history () {
    return this.canvas.history
}
```
Этот метод возвращает массив  **canvas._history_**

###### 📄 Теперь полный код примера будет таким:
```javascript
const Canvas = class {
    constructor () {
        this.canvas = document.createElement ( 'canvas' )
        document.body.appendChild ( this.canvas )
        this.area = this.canvas.getContext ( "2d" )
    }
    get history () {
        return this.canvas.history
    }
    set history ( newHistory ) {
        if ( !this.canvas.history ) this.canvas.history = []
        if ( !Array.isArray ( newHistory )  ) {
            console.error ( 'History must be array' )
            return
        }
        var __history = newHistory
            .filter ( x => x.path && Array.isArray ( x.path ) )
        if ( __history.length === 0 ) {
            console.error ( 'History must contain path array' )
            return
        }
        this.canvas.history = __history
    }
}

let pict = new Canvas ()
```
✍ Создадим свойство  **_history_**  экземпляра  **pict**, передав массив значений:
```javascript
pict.history = [
    { path: [ { x: 150, y: 250 }, { x: 350, y: 50 } ], lineColor: "red" },
    { path:  [ { x: 350, y: 50 }, { x: 100, y: 250 } ], lineColor: "green" },
    "***",
    { val: "***" }
]
```
```console
▼ Canvas {canvas: canvas, area: CanvasRenderingContext2D}
  ► area: CanvasRenderingContext2D {canvas: canvas, globalAlpha: 1, globalCompositeOperation: "source-over", filter: "none", imageSmoothingEnabled: true, …}
  ► canvas: canvas
  ▼ history: Array(2)
    ► 0: {path: Array(2), lineColor: "red"}
    ► 1: {path: Array(2), lineColor: "green"}
      length: 2
    ► __proto__: Array(0)
  ► __proto__: Object
```
в массив  **canvas._history_**  попали только первые два элемента <br/>
из массива в правой части оператора присваивания, <br/>
т.е. сработал сеттер, который отфильтровал входной массив

Попробуем выполнить присваивание, передавая некорректные значения:
```javascript
pict.history = [ "***" ]
```
###### Результат - исключение:
```
⛔️ History must contain path array
```

```javascript
pict.history = true
```
###### Результат - исключение:
```
⛔️ History must be array
```
Значение свойства  **_history_**  не изменилось, <br/>
а в консоль были выданы соответствующие сообщения об ошибке

| [:rewind:](Class) |
|-|

_________________________________________________________________________

![](https://github.com/garevna/js-course/raw/master/images/a-level-ico.png?raw=true)