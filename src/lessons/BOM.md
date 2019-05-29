# ![ico-30 study] Browser Object Model ( BOM )

_____________________________

## ![ico-25 icon] Объект window

**_viewport_** - часть окна браузера, где отображается веб-страница
^^( без панелей и элементов управления самого браузера )^^

^^^[Упражнение 1]

Объявите функцию **_~winResize()~_**, которая выводит в консоль текущие размеры ~viewport~

Используйте свойства объекта ~window~:
• **~window._innerWidth_~**
• **~window._innerHeight_~**

Изменяйте размер ~viewport~ и вызывайте функцию **_~winResize()~_**

^^^

К числу свойств объекта  **window** относятся следующие объекты:

![ico-20 green-ok] console
![ico-20 green-ok] navigator
![ico-20 green-ok] screen
![ico-20 green-ok] location
![ico-20 green-ok] history
![ico-20 green-ok] document

^^Проверим это:^^

~~~js
var props = [
  "console",
  "document",
  "location",
  "history",
  "screen",
  "navigator"
]

for ( var prop of props )
    console.log ( window [ prop ] )
~~~

^^**Результат в консоли:**^^

~~~console
► console {debug: ƒ, error: ƒ, info: ƒ, log: ƒ, warn: ƒ, …}
► #document
► Location {replace: ƒ, href: "about:blank", ancestorOrigins: DOMStringList, origin: "null", protocol: "about:", …}
► History {length: 2, scrollRestoration: "auto", state: null}
► Screen {availWidth: 1920, availHeight: 1040, width: 1920, height: 1080, colorDepth: 24, …}
► Navigator {vendorSub: "", productSub: "20030107", vendor: "Google Inc.", maxTouchPoints: 0, hardwareConcurrency: 8, …}
~~~

_____________________________________

У каждого из этих объектов есть свои свойства и методы

_____________________________________

### ![ico-20 icon] console

Методами объекта  **~console~**  мы уже пользовались

![](https://lh6.googleusercontent.com/FHul11TF39yiG8bLDovHLaq7IMBbOQg89ZAM7qt6ZSeNk07tsMvweLSyzDh7WAGO-5ie7vzUzSfT9c83t8tIt_IOATE2JnbX4CYtxiPRx1iCwyi8qwjmWo2J9KAr1huCggPETwEjOC1rj54)

^^^[Упражнение 2]

^^Выполните код в консоли:^^
~~~js
console.time( "while" )

var x = 10000
while ( x-- > 0 ) {}

console.timeEnd( "while" )

console.time( "for" )

for ( var x = 0; x < 10000; x++ ) {}

console.timeEnd( "for" )
~~~

Что произошло ?

^^^

______________________________________

### ![ico-20 icon] screen

![](https://lh4.googleusercontent.com/Xy-Xi0F6y-X8qe40XPyh9cgCjV-lmy-RDsL-zyGAVU7idW7yg8MWf7k8nEKyRU6NXWSm7kUgorttqnIN00hBfpzZujcDHaHZc9NPXncEBaH2dELGkR1N_ZQstiQCfVMK30a-ThFOKyR3uiA)
______________________________________

### ![ico-20 icon] location

![](https://lh5.googleusercontent.com/BDxbjdSrRLyZay-obUWoZdXet67x5J2PTJgXNxAo9sHeJMnCMrfGL2lY7McqZnyg9FnPM2IhT8DVeD86HgSLpx0KMyM4EXlsXsACtQ5-UfjPQ5YcojhInNMp1rGksB3BQwGG1t8cKxW_6VQ)

^^^[свойства объекта location]

![ico-20 green-ok] hash
![ico-20 green-ok] host
![ico-20 green-ok] hostname
![ico-20 green-ok] href
![ico-20 green-ok] origin
![ico-20 green-ok] pathname
![ico-20 green-ok] port
![ico-20 green-ok] protocol
![ico-20 green-ok] search

^^^

^^^[Упражнение 3]

^^Выполните код в консоли:^^
~~~js
var win = window.open ( "https://css-tricks.com" )
~~~

^^Откройте консоль новой вкладки^^
^^Выполните код в консоли:^^
~~~js
console.clear()
~~~

^^Добавьте в конец адреса в адресной строке браузера: #777^^
^^Нажмите _Enter_^^
^^Выполните код в консоли:^^
~~~js
location.hash
~~~

^^Что вы видите в консоли?^^

^^Вернитесь в исходную вкладку^^
^^Выполните код в консоли:^^
~~~js
win.close()
~~~

Что произошло ?

^^^

^^^[Упражнение 4]

^^Выполните код в консоли:^^
~~~js
var win = window.open ()
~~~

^^Откройте консоль новой вкладки^^
^^Выполните код в консоли:^^
~~~js
location.href = "https://translate.google.com"
~~~

Что произошло ?

^^^
______________________________________

### ![ico-20 icon] history

Посмотрим на объект **~history~** в консоли:

~~~~history
▼ history: History
      length: 2
      scrollRestoration: "auto"
      state: null
    ▼__proto__: History
        ► back: ƒ back()
        ► forward: ƒ forward()
        ► go: ƒ go()
          length: (...)
        ► pushState: ƒ pushState()
        ► replaceState: ƒ replaceState()
          scrollRestoration: (...)
          state: (...)
        ► constructor: ƒ History()
          Symbol(Symbol.toStringTag): "History"
        ► get length: ƒ ()
        ► get scrollRestoration: ƒ ()
        ► set scrollRestoration: ƒ ()
        ► get state: ƒ ()
        ► __proto__: Object
~~~~

![ico-20 green-ok] Свойство **history._state_** ( строка ) содержит адрес текущей страницы

![ico-20 green-ok] Свойство **history._length_** ( целое число ) содержит число переходов в истории текущей страницы ^^( на единицу больше, чем максимально возможное значение для метода **_go()_** )^^

![ico-20 green-ok] С помощью методов **history._back()_** и **history._forward()_** можно управлять переходами назад / вперед по истории

![ico-20 green-ok] С помощью метода **history._go()_** ( ^^если аргумент метода - целое число^^ ) можно перейти на заданное число страниц вперед ( ^^положительное значение аргумента^^ ) или назад ( ^^отрицательное значение аргумента^^ )

~~~javascript
window.history.go(-2)
~~~

^^В HTML5 были введены методы **history._pushState()_** и **history._replaceState()_**, которые позволяют добавлять и изменять записи истории^^
[![ico-20 link] MDN](https://developer.mozilla.org/ru/docs/Web/API/History_API)

Обратите внимание, что свойство **~history.&#95;&#95;proto&#95;&#95;~** является ссылкой на **~History()~**, а свойство **~history.&#95;&#95;proto&#95;&#95;.&#95;&#95;proto&#95;&#95;~** является ссылкой на  **~Object~**

___________________________________________

### ![ico-20 icon] document

^^^[Упражнение 5]

^^Выполните код в консоли:^^

~~~js
var newWin = window.open()
newWin.document.write ( "<h1>Я  - программист</h1>" )
newWin.document.write ( "<script>document.write('<h3>Hello!</h3>')</script>" )
console.log ( newWin.document.body )
~~~

Что произошло ?

^^^

^^^[Упражнение 6]

^^Выполните код в консоли:^^

~~~js
var newWin = window.open()
newWin.document.write ( "<h1>Я  - программист</h1>" )
newWin.document.write ( "<script>document.write('<h3>Hello!</h3>')</script>" )
console.log ( newWin.document.body )
newWin.close()
~~~

Что произошло ?

^^^

^^^[Упражнение 7]

^^Выполните код в консоли:^^

~~~js
var newWin = window.open( "https://www.w3schools.com/" )
newWin.document.write (`
     <style>
         h3 {
             font-family: Arial;
             color: #f50;
         }
     </style>
     <script>
        document.write('<h3>Hello!</h3>')
     </script>
`)
~~~

Что произошло ?

^^^

_________________________________________________________

[![ico-30 hw] **Упражнения**](https://docs.google.com/forms/d/e/1FAIpQLSegoz325rD2axv1Trw3EYZVPFhXbRaEa40WQhSO22EzEEYvZA/viewform) 
