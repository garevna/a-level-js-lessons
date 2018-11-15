[npm]: https://lh5.googleusercontent.com/2FfCuZPJhm_n2X-WXG_jfSFI-KLNUNs2_2FknRMEsD0hZDqLFprSadHU0HWXmHj74VljRiCJ6grDmpMZt-05vjwouVLO_ZZ65F1N_P28hyVzQWn7eMAfq2mWieGiDOxPrNUpaeFHvy8fcQc
[bush]: https://github.com/garevna/js-course/blob/master/images/git-bush-ico.png?raw=true

# <img src="https://lh5.googleusercontent.com/2FfCuZPJhm_n2X-WXG_jfSFI-KLNUNs2_2FknRMEsD0hZDqLFprSadHU0HWXmHj74VljRiCJ6grDmpMZt-05vjwouVLO_ZZ65F1N_P28hyVzQWn7eMAfq2mWieGiDOxPrNUpaeFHvy8fcQc" width="70"/> npm

Менеджер пакетов **npm** - это крупнейший в мире реестр программного обеспечения<br/>
( около 3 миллиардов загрузок в неделю )

В реестре содержится более 600 000 пакетов

Open-source разработчики всего мира используют **npm**<br/>
для совместного использования и заимствования пакетов

***
## Installation
Поскольку **npm** идет в составе **Node.js**, необходимо установить [<img src="https://lh5.googleusercontent.com/jtBBT0GcTBpcVz_jTSw_mjrkA50bE7le_iDcw_QUqhKl70Fkgw3p_iWWLZwPl5FtiLXxXttIX3uXgGGYbYyoZAsz2aK2lhhu86x8M17xn_zXkdOYjXozof1rZ7UdzquMsqQTCkkBCydA5Qc" width="150"/>](nodejs.org)

Далее заходим в [<img src="https://github.com/garevna/js-course/blob/master/images/git-bush-ico.png?raw=true" width="30"/>](Git-Bush "Справка по Git Bush")
***
## <img src="https://lh5.googleusercontent.com/2FfCuZPJhm_n2X-WXG_jfSFI-KLNUNs2_2FknRMEsD0hZDqLFprSadHU0HWXmHj74VljRiCJ6grDmpMZt-05vjwouVLO_ZZ65F1N_P28hyVzQWn7eMAfq2mWieGiDOxPrNUpaeFHvy8fcQc" width="50"/> Commands

###### <img src="https://github.com/garevna/js-course/blob/master/images/git-bush-ico.png?raw=true" width="20"/> which npm
![](https://lh6.googleusercontent.com/w65C2Uqbs47V9db_Yn_oR4ui2MUFvFWnl6Yb4riD4zImCTTPUWSLDNXiUD7VuJdl0eQgsK_iLfvTb2kBwLuq64VhDpXYUiTQctg2zbP3Vt-w34LtxtVjY7jHfX4wvY-prbVrtwZBh1UEf5M)
###### <img src="https://github.com/garevna/js-course/blob/master/images/git-bush-ico.png?raw=true" width="20"/> npm --version
![](https://lh6.googleusercontent.com/cP5U5nwO7rgudZfLJCkqvRU9Am4wI7jzAJzz3G0iBG-Rt9pnrV9xpIFqTvcjJk-YgZSYhpe1qOwyqe6YxMdZbKI7HqnczyStJEO2F7Yve01Fcgs2_vio4ExYpaQmGV0TepBGbcvQYIdJ_oM)

<a name="root"></a>
###### <img src="https://github.com/garevna/js-course/blob/master/images/git-bush-ico.png?raw=true" width="20"/> npm root
###### Папка для глобальной установки пакетов
![](http://icecream.me/uploads/7830dd20c39c6b4b5f13ca4ea179cebe.png)
***

### <img src="https://github.com/garevna/js-course/blob/master/images/git-bush-ico.png?raw=true" width="20"/> npm init

Эта команда создаст файл [**`package.json`**](https://docs.npmjs.com/files/package.json) в текущей папке<br/>
Предварительно нужно создать новую папку для проекта и перейти в нее

:clipboard: **`package.json`** хранит зависимости проекта,<br/>
т.е. список пакетов, необходимых для проекта<br/>
( для каждого пакета указана нужная версия )<br/>

При создании файла **`package.json`** **npm** задаст ряд вопросов о проекте,<br/>
который будет расположен в текущей папке

Ваши ответы будут использованы для установки значений полей:<br/>
* **`name`**` - название проекта`
* **`version`**` - версия`
* **`description`**` - краткое описание`
* **`author`**` - автор ( вы )`
* **`repository`**` - ссылка на репозиторий проекта`
* **`keywords`**` - ключевые слова`
* **`scripts`**` - объект, описывающий команды запуска скриптов с помощью `**`npm run`**

![](https://lh4.googleusercontent.com/ZfltZTmbCAsgDdV4IMmNt92vXLdwU5pLyl446vLzdZ5bfuOVx_GIGW-WP2TtxVLriNWUrhkAn2JnNdmYEUszIiQKNkIsGKiuJEfW4t9c3L2-HnhTYjmTaQwW6vmDb1snqoyQ6w0IcjsvR9E)

> Поскольку в дальнейшем вы сможете редактировать файл **`package.json`**,<br/>
> можно особо не заморачиваться первоначальными установками :wink:

***

### <img src="https://lh5.googleusercontent.com/2FfCuZPJhm_n2X-WXG_jfSFI-KLNUNs2_2FknRMEsD0hZDqLFprSadHU0HWXmHj74VljRiCJ6grDmpMZt-05vjwouVLO_ZZ65F1N_P28hyVzQWn7eMAfq2mWieGiDOxPrNUpaeFHvy8fcQc" width="50"/> package.json

Теперь при установке любого пакета запись об этом пакете<br/>
будет автоматически добавляться в  раздел **_`dependencies`_**<br/>
файла **`package.json`**

Все пакеты, которые необходимы для проекта, будут описаны в разделах 

    ✅ dependencies
    ✅ devDependencies

✅ **`dependencies`** - зависимости пакета<br/>
эти пакеты будут непосредственно включены в сборку приложения

✅ **`devDependencies`** - пакеты, необходимые на этапе сборки<br/>
в само приложение не встраиваются

***

### <img src="https://lh5.googleusercontent.com/2FfCuZPJhm_n2X-WXG_jfSFI-KLNUNs2_2FknRMEsD0hZDqLFprSadHU0HWXmHj74VljRiCJ6grDmpMZt-05vjwouVLO_ZZ65F1N_P28hyVzQWn7eMAfq2mWieGiDOxPrNUpaeFHvy8fcQc" width="50"/> .npmrc

Файл конфигурации, откуда <br/>
( наряду с package.json )<br/>
npm  будет считывать установки<br/>

Файл  .npmrc  может существовать для каждого проекта,<br/>
для каждого пользователя,<br/>
и глобально<br/>

Посмотреть настройки конфигурации по умолчанию<br/>
можно с помощью команды

    npm config ls -l

Изменить настройки можно с помощью команды

     npm config

Например, для автоматического сохранения зависимостей:

    npm config set save=true

а для сохранения зависимостей с указанием точной версии пакета:

    npm config set save-exact=true

***
### <img src="https://github.com/garevna/js-course/blob/master/images/git-bush-ico.png?raw=true" width="20"/> npm install

В своих проектах вы будете использовать различные пакеты,<br/>
облегчающие жизнь :wink:

🚥 Часть этих пакетов нужна будет для сборки вашего приложения,<br/>
его тестирования, отладки, транспилляции и т.д.<br/>
Эти пакеты не будут включаться в тело приложения<br/>
Они помогут это тело постоить

🚦 Однако в самом приложении вы будете использовать<br/>
сторонние библиотеки, фреймворки и т.д.<br/>
Эти пакеты будут включены в сборку вашего приложения

Короче, все эти пакеты нужно установить

Для этого вам понадобится команда  **`npm install`**

Опция  **`-g`**  позволяет установить пакет [**глобально**](#root),<br/>
чтобы он был доступен всем вашим приложениям

Глобальная установка пакета с именем <имя пакета>:

    npm install -g <имя пакета>

Локальная установка пакета с именем <имя пакета>:

    npm install <имя пакета>

Локальная - значит, пакет будет установлен в той директории <br/>
( папке пректа ), в которой вы находитесь в момент вызова  npm

При установке пакетов с опцией   🚦 _`--save`_   или   🚥 _`--save-dev`_ <br/>
npm   будет добавлять соответствующие записи <br/>
в раздел 🚦 **`dependencies`**  или  🚥 **`devDependencies`** 

:coffee: Например, команда

    npm install  -g  css-loader  --save-dev

установит загрузчик  **`css-loader`**   глобально<br/>
и внесет соответствующую запись в **_`devDependencies`_**

***

### :open_file_folder: node_modules

Все установленные локально пакеты будут находиться <br/>
в папке :open_file_folder: **_node_modules_**  текущего проекта

Необходимо всегда добавлять папку **_node_modules_** в `gitignore`

В git-репозитории никто никогда не хранит папку :open_file_folder: **_node_modules_**,<br/>
однако если клонировать репо,<br/>
то установить все необходимые пакеты при наличии файла<br/>
**`package.json`**  очень легко

достаточно выполнить консольную команду  ⚙️ `npm install`,<br/>
и все пакеты, перечисленные в package.json, будут установлены<br/>
в соответствии с указанными версиями

###### gitignore

![](https://lh6.googleusercontent.com/SLXHR8Om5imjD3M9PUDQeB8WmOoBDYBYZYGxJC1IhdUji_AxJca4r_c9sxL1nK7Ly-naC8DX9vKDaf03a3w2E3zYUxnXeatwEfu8oe0jlGOlfqkO0Fftlrb8JJFoA-odZqTAzbuur3SD_ZQ)

***
### <img src="https://github.com/garevna/js-course/blob/master/images/git-bush-ico.png?raw=true" width="20"/> npm run

Прежде, чем использовать эту команду, <br/>
нужно внести определенные изменения в файл **`package.json`**

Конкретнее - в раздел **_`scripts`_**:
```javascript
"scripts": {
    "алиас" : "путь_к_файлу_скрипта"
    ...
}
```
В этом разделе мы описываем скрипты или пакеты, <br/>
которые будем запускать с помощью команды  npm run

Эта команда запускает указанный скрипт
```javascript
"scripts": {
    "start" : "node index.js",
    "build" : "webpack"
}
```
***
### <img src="https://github.com/garevna/js-course/blob/master/images/git-bush-ico.png?raw=true" width="20"/> npm list
###### Вывод списка установленных пакетов
> Для вывода списка пакетов, установленных глобально, используйте опцию **`-g`**
###### npm list -g
![](https://lh6.googleusercontent.com/MCZpi5JBh9OCJmvpvl139V_WNTvFRlhf_qoDsLRh4eETCYDngtEeiuLxiipbaiqfs-zizH5SVgUbKgOpvXMNkoA-88_9TdjKSbp7qBIAb5Px51_x_Z89MpuhJU0UcSvt-Vg-04nHlz2c6s8)
###### npm list --depth=0
> Для вывода краткого списка ( без подробностей о каждом пакете ) используется опция **`--depth=0`**

![](http://icecream.me/uploads/ca3c97a33ec377e15452bfcc82615ab9.png)

***
### <img src="https://github.com/garevna/js-course/blob/master/images/git-bush-ico.png?raw=true" width="20"/> npm search

###### поиск пакетов
###### :coffee: npm search babel
![](https://lh4.googleusercontent.com/oo2pdarDWkeQdqJVNbF8-LI4Z0Ki6DpzQsNyaRdY7zsjKByhVHDNw2t9v2RoUNw1HAUhj6YhlUAX3kYfemfira5X2Zgmp2MYIX0SJXAI0Iviv4LJRUl3DLCoJFirCr9lh3TcnQBEs1sQkRU)

***
### <img src="https://github.com/garevna/js-course/blob/master/images/git-bush-ico.png?raw=true" width="20"/> link
###### Создание символических ссылок

1. Глобальная символическая ссылка

Когда вы запускаете `npm link` в корневой папке проекта, **`npm`** создает символическую ссылку из вашего каталога **_`global node_modules`_** в папку проекта

###### **`global node_modules`** представляет собой специальную папку, в которой хранятся все глобально установленные модули

    npm install -g

Вы можете найти путь к вашему глобальному каталогу `node_modules`, запустив 

    npm root -g

:coffee:

**1**. создание символической ссылки в глобальной папке ( **~** ) на пакет в локальной папке

Перейдем в папку `z/home/test/node_modules`<br/>
и создадим символическую ссылку на пакет **_express_** в текущей папке

![](http://icecream.me/uploads/c822230d4ea7d8c23989faa08b7e0533.png)

**2**. Теперь перейдем в папку другого проекта ( _`/z/home/js-samples`_ )<br/>
и создадим там символическую ссылку на пакет **_express_**,<br/>
установленный в папке ( _`/z/home/test/node_modules`_ ),<br/>
на который есть символическая ссылка из глобальной папки ( **~** )

![](http://icecream.me/uploads/68f176dd4c7535aeb9d3e1fbedfd9830.png)

###### :warning: Команда `link` предназначена для создания символических ссылок только на пакеты

Для отмены установленной связи используем команду:

    npm unlink images


```
ls -al $(npm root -g)
```
***
## <img src="https://lh5.googleusercontent.com/2FfCuZPJhm_n2X-WXG_jfSFI-KLNUNs2_2FknRMEsD0hZDqLFprSadHU0HWXmHj74VljRiCJ6grDmpMZt-05vjwouVLO_ZZ65F1N_P28hyVzQWn7eMAfq2mWieGiDOxPrNUpaeFHvy8fcQc" width="50"/> package-lock.json

Каждый раз при установке новой зависимости NPM автоматически генерирует lock-файл с именем **_`package-lock.json`_**

**_`package-lock.json`_** - это "слепок" текущего дерева зависимостей, который точно описывает дерево папок в директории `node_modules`

:warning: **_`package-lock.json`_** никогда не будет опубликован, даже если его явно включить в сборку

**_`package-lock.json`_** включает поле **_integrity_** для проверки целостности пакета

>> Указание конкретной версии пакета в **_`package.json`_** фиксирует зависимости только верхнего уровня

>> Если ваше приложение будет запущено на другой машине ( пользователя ), то могут быть установлены другие версии пакетов более глубокого уровня, что может "сломать" работу приложения

>> Для того, чтобы у конечного пользователя вашего приложения всегда воспроизводилось дерево зависимостей, идентичное вашему на момент публикации, следует использовать **_`shrinkwrap`_** для создания точного слепка этих зависимостей и публикации этого слепка вместе с приложением

![](http://icecream.me/uploads/e5b85cfcb24ca4d34562e1e2ae37ae54.png)

***

### <img src="https://lh5.googleusercontent.com/2FfCuZPJhm_n2X-WXG_jfSFI-KLNUNs2_2FknRMEsD0hZDqLFprSadHU0HWXmHj74VljRiCJ6grDmpMZt-05vjwouVLO_ZZ65F1N_P28hyVzQWn7eMAfq2mWieGiDOxPrNUpaeFHvy8fcQc" width="50"/> npm shrinkwrap
Каждый раз, когда выполняется развертывание ( _deploy_ ) приложения, Node.js запускает **_npm_**

Развертывание может существенно затянуться за счет установки новых версий пакетов, указанных в списке зависимостей вашего приложения

Избежать обновления зависимостей можно путем создания файла **_npm-shrinkwrap.json_**, который фиксирует текущие версии
зависимостей вашего приложения

Формат этого файла полностью идентичен формату **_`package-lock.json`_**

:warning: **_`npm-shrinkwrap.json`_** может быть частью опубликованного пакета

Если выполнить команду **`npm shrinkwrap`** в папке, в которой уже есть **_`package-lock.json`_**,

**npm** переименует **_`package-lock.json`_** в **_`npm-shrinkwrap.json`_**

Если в папке проекта будут оба файла, **npm** будет использовать **_`npm-shrinkwrap.json`_** и игнорировать **_`package-lock.json`_**

###### [npm shrinkwrap](https://javascript.tutorialhorizon.com/2015/03/21/what-is-npm-shrinkwrap-and-when-is-it-needed/)
