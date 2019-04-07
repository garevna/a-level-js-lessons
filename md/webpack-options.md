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
[file-20]: https://raw.githubusercontent.com/garevna/a-level-js-lessons/master/ico/pencil-20.png
[file-25]: https://raw.githubusercontent.com/garevna/a-level-js-lessons/master/ico/pencil-25.png
[file-30]: https://raw.githubusercontent.com/garevna/a-level-js-lessons/master/ico/pencil-30.png
[file-40]: https://raw.githubusercontent.com/garevna/a-level-js-lessons/master/ico/pencil-40.png
[dir-20]: https://raw.githubusercontent.com/garevna/a-level-js-lessons/master/ico/folder-20.png
[dir-25]: https://raw.githubusercontent.com/garevna/a-level-js-lessons/master/ico/folder-25.png
[dir-30]: https://raw.githubusercontent.com/garevna/a-level-js-lessons/master/ico/folder-30.png
[dir-40]: https://raw.githubusercontent.com/garevna/a-level-js-lessons/master/ico/folder-40.png
[bash-20]: https://raw.githubusercontent.com/garevna/a-level-js-lessons/master/ico/bash-20.png
[bash-25]: https://raw.githubusercontent.com/garevna/a-level-js-lessons/master/ico/bash-25.png
[bash-30]: https://raw.githubusercontent.com/garevna/a-level-js-lessons/master/ico/bash-30.png
[bash-40]: https://raw.githubusercontent.com/garevna/a-level-js-lessons/master/ico/bash-40.png

# <img src="https://avatars2.githubusercontent.com/u/19735284?s=40&v=4" width="30" title="Ⓒ Irina Fylyppova ( garevna ) 2019"/> [webpack](md/webpack.md)

## ![ico25] Опция `--mode`

Для того, чтобы настроить различные режимы запуска `webpack`, нужно использовать опцию **`--mode`**

После опции **`--mode`** должно следовать одно из двух возможных значений:

###### ![ico20] development
###### ![ico20] production

Пока идет процесс отладки приложения, лучше использовать режим сборки **`development`**, поскольку в консоли можно отслеживать предупреждения о возможных ошибках

В **`production`** сборке такие предупреждения не будут  выводиться

### ![bash-25] webpack --mode development

<img src="https://lh3.googleusercontent.com/9Kw0fdiVv9zrVzwLuN9mgI_kTysz4yCDr_pz4DixW9p4EHJnAtuiYC2zjZ_Zua4hZNB9J_7mwNOsVS8BnCpsJs7MmSkxSALp431a-mnwUIog458xNgcAxmUALDz9ddZsAEqqIWRyt9V37Vg" width="500"/>

<sup>На следующем скрине показаны сообщения о дублировании значений ключей в базе данных, которые позволяют разработчику
внести соответствующие изменения перед окончательной сборкой, чтобы избежать проблем в дальнейшем</sup>

![](https://lh4.googleusercontent.com/jWl0b6D9RUO5Xmi51lrJE0l63pAHk-RYJFK9b5WFh0WRoKePjL5OlkWd40yzRnGzIORy7kN0wkJRiM_kxykFfRJE7yU1soHiOBvAhsTcfYdaETJfamHOacUtPMR5raxqMtMGOtPIRFqqkb0)

При этом результирующий бандл  `main.js`  не минимизирован,<br/>
что облегчает отладку приложения ( переход к строке с ошибкой )

![](https://lh4.googleusercontent.com/ug6vfxniKfZP8CHRCCH6J3MrjMmmkInYejG-8ApUMOPQlHlKLpnEubIstwhRX0gLBx1HD797H-PjkRQMhkgcrVaiGFwOVHDFCWlywS8xoB5t1YLYReZZF7qkW4DrqRHuqKHpURWkrZsDQ4k)

### ![bash-25] webpack --mode production

_________________________________________________________________

###### Окончательная сборка

Результирующий бандл будет минимизирован,<br/>
сообщения об ошибках не будут выводиться в консоль

_________________________________________________________

### ![ico20] Опция `--watch`

webpack будет следить за изменениями в исходных файлах<br/>
и оперативно пересобирать приложение при каждом обновлении

![bash-25] `webpack --watch --mode production`

![](http://icecream.me/uploads/cef7b80e645edabc44cfd1d609bad0b4.png)

Внесем изменения в файл **_`index.js`_**<br/>
В консоли видно, что вебпак автоматически пересобрал приложение

![](http://icecream.me/uploads/4af9d3df11f420d5565f8ee17138ad81.png)

_________________________________________________________________________

![footer]
