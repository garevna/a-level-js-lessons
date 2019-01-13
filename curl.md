# :mortar_board: curl

Утилита командной строки для передачи данных по URL

| [<img src="https://curl.haxx.se/logo/curl-logo.svg" height="20"/>](https://curl.haxx.se/docs/manpage.html) | [:link:**usage**](https://curl.haxx.se/docs/manual.html) |
|-|-|

***

<img src="https://github.com/garevna/js-course/blob/master/images/git-bush-ico.png?raw=true" height="20"/> Синтаксис:

<table><tr><td><code>
$ curl <em>опции <b>ссылка</b></em>
</code></td></tr></table>

***

### Получение данных по url

По умолчанию содержимое запрошенного ресурса будет отправлено на стандартный вывод

:coffee: :one:
<table><tr><td><code>
$ curl https://github.com
</code></td></tr></table>

![](https://lh4.googleusercontent.com/NNBTdfB5sjJHwZonWN9Cas48xn-6Z9FpbQ6cWE8BuKT3viwiqeJARIVZtqXhh-3TYdpRF_E0ZoBCqqWijAUdYdJzTgwMbAGG2EWfLyZEF_3jIRxjKmeHjsHcWTlVjCHfc26Je71T-6LSge8)

:coffee: :two:
<table><tr><td><code>
$ curl curl https://garevna.github.io/js-samples/js/index08.js
</code></td></tr></table>

![](https://lh6.googleusercontent.com/i5RSX6lSW65LpS8fr040nn2716uWNpBzmjYpI8gy0BFvs8Zm61AvKEd59ym2WbR5OdX7T89iR7Bm0wBUo6o-4unD4W8m3urkCVkAs-LbaaWnkupj6dwvBS4eZ-QUX25uCE83n5RzyZGX_yU)

***

## :mortar_board: Опции

***

### -O

Сохранить загруженный файл в текущую папку под тем же именем, что и на сервере

:coffee: :four:
<table><tr><td><code>
$ curl  -O  https://garevna.github.io/js-samples/js/index08.js
</code></td></tr></table>

![](https://lh6.googleusercontent.com/lkSnp2j3kw-lr6y4-S1BCzNMBmdpp2UJ1Qy9LzrWzwyKARaMK1N5o7NbeaEVsrI0XEI1h1jRM7hHE1sh70LJeKA1fRXVgkGlInTBNVToyIE5KsmQWIR8iRQO6XrMBvwQ06FyMliqczbDeB4)

После выполнения этой операции в текущей папке появится новый файл  `index08.js`

![](https://lh6.googleusercontent.com/jEWF7e21zrx4yQ9ktuK0vwdObUdi6oGTD8Qhzpdw_ngtMP_1A8gb8mpgjqX2qd4NrPO_HSpVubLIpMl_cXWtl9efg2GKOEC76R_81uqlX2fSke5XP0QUBAP1D69q9HlJfYL59TWRi8XHmHE)

***

### -o

Сохранить загруженный файл в текущую папку под указанным именем

:coffee: :three:
<table><tr><td><code>
$ curl  -o  index-1.html  https://garevna.github.io/js-samples/index.html
</code></td></tr></table>

![](https://lh3.googleusercontent.com/dqMLhIuIj6A4Itq2c5-16BhyBFwZtGjxK4BR4MpWFRKhnuwXzL3pKd8wKzupjmMH0u6QzvbpLaJw-sEDY6GlOILYD_TIz1GFJRy1bD-1ZdL0xhB6qXMTvFaELtnCQYEMjplDyzsjUPqwto0)

После выполнения этой операции в текущей папке появится новый файл `index-1.html`

![](https://lh6.googleusercontent.com/I9qFh4ByAOmjgAqF7ctDCxeTDwpRBwh-3qzHO1qv97xq5jzADcgPmHQyt3a86LNz-lTiX50t8PaUN5YpoDNSfT6qR7e90O0xy3QpxGL1XgagNCQlu8kGzJCY41fk6HfnpZThmMa1XY3EPoM)

***

