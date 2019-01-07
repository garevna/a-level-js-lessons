<img src="https://nodejs.org/static/images/logos/nodejs-new-pantone-black.png" width="200"/>

**Node.js** работает с модулями, 

которые подключаются к приложению 

в нужное время в нужном месте 

с помощью функции **`require`**

```javascript
const fs = require ( 'fs' )
```

Далее, если в примерах встречается функция **`require`**, это означает, что соотвествующий модуль должен быть установлен


<table>
<tr>
<td>
<img src="https://github.com/garevna/js-course/blob/master/images/git-bush-ico.png?raw=true" height="20"/>
</td>
<td><code>$ npm install -g fs</code></td>
</tr>
</table>

***

# <img src="https://github.com/garevna/js-course/blob/master/images/node.png?raw=true" height="30"/> process

Этот глобальный объект содержит всю необходимую информацию о текущем процессе  и обеспечивает возможность его контролировать

Текущий процесс **Node.js** можно запустить консольной командой **`node`**

<table>
<tr>
<td>
<img src="https://github.com/garevna/js-course/blob/master/images/git-bush-ico.png?raw=true" height="20"/>
</td>
<td><code>$ node start</code></td>
</tr>
</table>

Таким образом мы запустили серверный скрипт **_start.js_** 

> ( файл **_start.js_** должен находиться в папке, в которой была запущена команда **`node`** )

## Ввод и вывод

Процесс **Node.js** работает с потоками данных ( stream )

Потоки проходят по трубам ( pipes )

<img src="https://static.victaulic.com/wp-content/uploads/2017/05/Seismic-1.gif" width="300"/>

> Потоки откуда-то "втекают" ( ReadableStream ) и куда-то "вытекают" ( WritadableStream )

>> Они могут "втекать" ( из файла на сервере ), с клавиатуры ( в консоли ) и т.д.

>> Точно так же они могут вытекать в файл или на стандартное устройство вывода

У процесса **Node.js** есть свойства 

* process.stdin
* process.stdout
* process.stderr

Это источник входящего потока ( ReadableStream ),

куда направляется исходящий поток ( WritadableStream ) 

и куда направляется поток ошибок ( исключений )

Главное - это не обязательно устройства или файлы

Это могут быть функции, которые что-то делают с данными потока

По умолчанию `process.stdin` и `process.stdout` связаны с терминалом ( консолью )

Используем метод `write()` объекта `process.stdout`


После запуска в консоли появится `process.stdout >>>`, а через секунду добавится `Привет, Иван, как дела ?`

<table>
<tr>
<td>
<img src="https://github.com/garevna/js-course/blob/master/images/git-bush-ico.png?raw=true" height="20"/>
</td><td><pre>
$ node start
> process.stdout >>> Привет, Иван, как дела ?
</pre></td></tr></table>

После чего процесс будет завершен - все выполнено, делать больше нечего

Используем событие **`exit`** процесса, чтобы сообщить о его завершении перед выходом:

###### start.js
```javascript
let name = "Иван"
process.stdout.write ( `\n\nprocess >>> ` )
setTimeout (
    () => process.stdout
        .write ( `Привет, ${name}, как дела ?` ),
    1000
)

process.on ( 'exit', () => {
    process.stdout
        .write ( '\n\nprocess >>> Все, я закончил работу\n\n' )
})
```

<table>
<tr>
<td>
<img src="https://github.com/garevna/js-course/blob/master/images/git-bush-ico.png?raw=true" height="20"/>
</td><td>
<pre>
$ node start<br/>
 
 
process >>> Привет, Иван, как дела ?

process >>> Все, я закончил работу



</pre></td></tr></table>