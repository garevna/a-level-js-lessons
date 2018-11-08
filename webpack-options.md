## :mortar_board: Опция --mode
Для того, чтобы настроить различные режимы запуска `webpack`, нужно использовать опцию **`--mode`**

После опции **`--mode`** должно следовать одно из двух возможных значений:

###### :radio_button: development
###### :radio_button: production

Пока идет процесс отладки приложения, лучше использовать режим сборки **`development`**, поскольку в консоли можно отслеживать предупреждения о возможных ошибках

В **`production`** сборке такие предупреждения не будут  выводиться

### <img src="https://github.com/garevna/js-course/blob/master/images/git-bush-ico.png?raw=true" width="22"/> webpack --mode development

<img src="https://lh3.googleusercontent.com/9Kw0fdiVv9zrVzwLuN9mgI_kTysz4yCDr_pz4DixW9p4EHJnAtuiYC2zjZ_Zua4hZNB9J_7mwNOsVS8BnCpsJs7MmSkxSALp431a-mnwUIog458xNgcAxmUALDz9ddZsAEqqIWRyt9V37Vg" width="500"/>

`На следующем скрине показаны сообщения о дублировании значений ключей в базе данных, которые позволяют разработчику 
внести соответствующие изменения перед окончательной сборкой, чтобы избежать проблем в дальнейшем`

![](https://lh4.googleusercontent.com/jWl0b6D9RUO5Xmi51lrJE0l63pAHk-RYJFK9b5WFh0WRoKePjL5OlkWd40yzRnGzIORy7kN0wkJRiM_kxykFfRJE7yU1soHiOBvAhsTcfYdaETJfamHOacUtPMR5raxqMtMGOtPIRFqqkb0)

При этом результирующий бандл  main.js  не минимизирован,<br/>
что облегчает отладку приложения ( переход к строке с ошибкой )

![](https://lh4.googleusercontent.com/ug6vfxniKfZP8CHRCCH6J3MrjMmmkInYejG-8ApUMOPQlHlKLpnEubIstwhRX0gLBx1HD797H-PjkRQMhkgcrVaiGFwOVHDFCWlywS8xoB5t1YLYReZZF7qkW4DrqRHuqKHpURWkrZsDQ4k)

### <img src="https://github.com/garevna/js-course/blob/master/images/git-bush-ico.png?raw=true" width="22"/> webpack --mode production
###### Окончательная сборка

Результирующий бандл будет минимизирован,<br/>
сообщения об ошибках не будут выводиться в консоль
***
### 👁‍🗨 Опция --watch
webpack будет следить за изменениями в исходных файлах<br/>
и оперативно пересобирать приложение при каждом обновлении

    webpack --watch --mode production

![](http://icecream.me/uploads/cef7b80e645edabc44cfd1d609bad0b4.png)

Внесем изменения в файл **_index.js_**<br/>
В консоли видно, что вебпак автоматически пересобрал приложение

![](http://icecream.me/uploads/4af9d3df11f420d5565f8ee17138ad81.png)