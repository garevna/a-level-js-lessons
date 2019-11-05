# ![ico-30 study] File API

**обеспечивает доступ к файлам на стороне клиента**
^^( добавлен к DOM в HTML5 )^^

Приложение может попросить пользователя выбрать локальные файлы, а затем прочитать содержимое этих файлов

Посмотрим, как это можно сделать с помощью html-элемента ~&lt;input>~

Вставим в разметку страницы тег:

~~~html
<input  type="file"
        multiple
        onchange="handleFiles( event )"
/>
~~~

Созданный host-объект имеет свойство  **_~files~_**:

![](https://lh5.googleusercontent.com/0eiw34U9IMH0shTkHI9YSa4udFo-_PeVDV43oUHq08TR2pEe7BAqjfgZfctLgZP0w_IOOcxIuJr6dTOxkj6jtABPhClD9kQY8MUtEoy0zu6tan262Qa1PP54LqyiWmNdso0q7hpagPnEKhk)

Свойство  **_~files~_**  является итерируемым объектом класса  **~FileList~**

Свойства объекта **_~files~`_** являются экземплярами класса  **~File~**

Доступ к этим свойствам реализуется по индексу:

~~~js
let input = document.querySelector('input[type="file"]')
console.log ( input.files[0] )
~~~

У свойств итерабельного объекта **~FileList~** есть ряд собственных свойств

Свойство **_~type~_** ( строка ) характеризует тип файла

• Для файлов изображений значением этого свойства будет "~image/jpg~" | "~image/png~" | "~image/gif~" | "~image/svg+xml~"
• Для ~json~-файлов значением этого свойства будет "~application/json~"
• Для ~js~-файлов значением этого свойства будет "~application/javascript~"
• Для ~css~-файлов значением этого свойства будет "~text/css~"
• Для ~html~-файлов значением этого свойства будет "~text/html~"
• Для файлов c расширением ~txt~ значением этого свойства будет "~text/plain~"
• Для исполняемых файлов ( c расширением ~.exe~ ) значением этого свойства будет "~application/x-msdownload~"
...

!![https://lh5.googleusercontent.com/UL10T1mTvlC0saqtzTA-ymb8AphfkN11lU-qVVB87ZC2jDGSXP1BZeGHCHSROtFJgGshHoRjJFiLqHHeZuEDuPI7BI_hpYBcF0RsVmGR1o2WMZQZBtug1bmFUBVPKZmup0HbJM6khcGis_c, https://lh5.googleusercontent.com/AR_4Pe-IeLuw5HQiNxVBM5PlZvMcbveqs77TBK08ApS9yYs236x--r2eToXTuvChdwpfgo9JmsMqUDE35iRYHCtOm_MRf4rvmGDTeTTgun_Kn3mTriZ8zVJbrvLHh5WpiGraz1IDraXB2b8, https://lh3.googleusercontent.com/1prRwVOXPAZXwRLps_lEG5K-mm1xc1ES80ThnSc2L17oMYU0GGU-L_8hg1nbWRYeYRHr6riseWVWYRfl-xf7vffnLFNVYOa7ZiCtv_948vXC-gGRNON8wPRgZ-q9twaxIDpBqMmYGA3sbZY]

Кроме того, у каждого объекта структуры **~FileList~** есть свойство **~size~**, значение которого характеризует размер файла в байтах

Также можно узнать дату последней модификации файла ( **~lastModified~** ) и его имя ( **~name~** )

___________________________________

[![ico-30 hw] **Тесты**](https://garevna.github.io/js-quiz/#file-API)
