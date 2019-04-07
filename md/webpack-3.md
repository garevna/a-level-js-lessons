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

## ![hw-30] Упражнение 3

### ![file-30] package.json

Откройте файл  ![file-20] **_package.json_**  и добавьте в свойство **`scripts`** в настройки запуска webpack :

```javascript
"scripts": {
    "dev": "webpack --mode development",
    "prod": "webpack --mode production"
}
```

<img src="http://icecream.me/uploads/d2f7543e47891188282c5f21075ea5bd.png" width= "550"/>

###### Опция  `--mode`  позволяет настроить режим сборки

###### ![warn-25] --mode development

    результирующий бандл не будет минимизирован,
    в консоль будут выводится сообщения об ошибках
    используется на этапе отладки

###### ![warn-25] --mode production

    результирующий бандл будет минимизирован,
    это окончательная сборка проекта - production

![bash-30] Теперь запустите команду :

    npm run dev

<img src="https://lh3.googleusercontent.com/9Kw0fdiVv9zrVzwLuN9mgI_kTysz4yCDr_pz4DixW9p4EHJnAtuiYC2zjZ_Zua4hZNB9J_7mwNOsVS8BnCpsJs7MmSkxSALp431a-mnwUIog458xNgcAxmUALDz9ddZsAEqqIWRyt9V37Vg" width="500"/>

###### npm run prod

Теперь соберите свое приложение для  production

Обратите внимание, насколько сократился размер результирующего файла ![file-20] `main.js`

<img src="https://lh3.googleusercontent.com/y8ZDRi431GzQ2QJjKd5u8rm9NehAdfgq48K6jtahgt1NPWZ6YY_pp_Ut_HBcJ5alQ0Zp6kHNCBqnxTM9iq2cUncPrNVvKwA9i5NsBce78yhOfFWmOxrF9KmBeahFEbSum1Q2g-B07GLC3qo" width="500"/>

_________________________________________________________________________

![](https://github.com/garevna/js-course/raw/master/images/a-level-ico.png?raw=true)
