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

# <img src="https://avatars2.githubusercontent.com/u/19735284?s=40&v=4" width="30" title="Ⓒ Irina Fylyppova ( garevna ) 2019"/> cookie

###### Свойство  **`document.cookie`**  возвращает  строку

###### В этой строке можно выделить отдельные "записи", отделяемые друг от друга точкой с запятой и пробелом  ( "; " )

###### Каждая "запись" представляет собой подстроку вида  xxx=yyy,   где
     xxx - идентификатор
     yyy - значение

`Файлы cookie позволяют идентифицировать уникальных пользователей в разных сеансах,`

:warning: `но не при смене браузеров или устройств`
***

#### 💼 Упражнение 1

Откройте в браузере любую веб-страницу, которая сохраняет куки на клиенте

и которой разрешено это делать на вашем компе

`( Chrome игнорирует файлы cookie с локальных страниц )`

Запустите в консоли следующий ( "многословный" ) код:
```javascript
console.info ( location.href )

var res = document.cookie.split ( "; " ).map ( x =>  {
        var tmp = x.split ( "=" )
        var elem = {}
        elem [ tmp [0] ] = tmp [1]
        return elem
})
console.log ( res )
````
Вы получите массив объектов, свойства которых являются записями в cookie-файле данного сайта

_________________________________________________________________________

![](https://github.com/garevna/js-course/raw/master/images/a-level-ico.png?raw=true)