[footer]: https://github.com/garevna/js-course/raw/master/images/a-level-ico.png?raw=true
[me]: https://raw.githubusercontent.com/garevna/a-level-js-lessons/master/ico/myPhoto-40.png "Ⓒ Irina Fylyppova ( garevna ) 2019"
[ico20]: https://raw.githubusercontent.com/garevna/a-level-js-lessons/master/ico/a-level-20.png
[ico25]: https://raw.githubusercontent.com/garevna/a-level-js-lessons/master/ico/a-level-25.png
[hw-30]: https://raw.githubusercontent.com/garevna/a-level-js-lessons/master/ico/briefcase-30.png
[cap-20]: https://raw.githubusercontent.com/garevna/a-level-js-lessons/master/ico/coffee-20.png
[cap-25]: https://raw.githubusercontent.com/garevna/a-level-js-lessons/master/ico/coffee-25.png
[warn-25]: https://raw.githubusercontent.com/garevna/a-level-js-lessons/master/ico/warning-25.png
[link-20]: https://raw.githubusercontent.com/garevna/a-level-js-lessons/master/ico/link-20.png
[err-20]: https://raw.githubusercontent.com/garevna/a-level-js-lessons/master/ico/no_entry-20.png
[err-25]: https://raw.githubusercontent.com/garevna/a-level-js-lessons/master/ico/no_entry-25.png
[err-30]: https://raw.githubusercontent.com/garevna/a-level-js-lessons/master/ico/no_entry-30.png
[yt-25]: https://raw.githubusercontent.com/garevna/a-level-js-lessons/master/ico/youtube-25.png
[git-20]: https://raw.githubusercontent.com/garevna/a-level-js-lessons/master/ico/github-20.png
[git-25]: https://raw.githubusercontent.com/garevna/a-level-js-lessons/master/ico/github-25.png
[git-30]: https://raw.githubusercontent.com/garevna/a-level-js-lessons/master/ico/github-30.png
[bash-20]: https://raw.githubusercontent.com/garevna/a-level-js-lessons/master/ico/bash-20.png
[bash-25]: https://raw.githubusercontent.com/garevna/a-level-js-lessons/master/ico/bash-25.png
[bash-30]: https://raw.githubusercontent.com/garevna/a-level-js-lessons/master/ico/bash-30.png
[bash-40]: https://raw.githubusercontent.com/garevna/a-level-js-lessons/master/ico/bash-40.png
[space-800]: https://raw.githubusercontent.com/garevna/a-level-js-lessons/master/ico/space-800.png

| ![ico25] <br/><sup>[**Lesson&nbsp;9**](../lessons/lesson-09.md)</sup> | <h2>Secure Hash Algorithm</h2>![space-800] <sup>криптографический алгоритм компьютерной безопасности<sup> | ![me] <br/><sup>[**Занятие&nbsp;9**](../lessons/lesson-09.md)</sup> |
|-|-|-|


######

Алгоритм генерирует криптографический хэш ( «дайджест» )

Этот хэш является своего рода «сигнатурой» для текста или файла данных

Алгоритм SHA не является «шифрованием»

![warn-25] он не может быть расшифрован обратно к исходному тексту

это «односторонняя» криптографическая функция

она возвращает цифровую подпись фиксированного размера для любого размера исходного текста

>> <sup>Создан Агентством национальной безопасности США</sup>

>> <sup> SHA-0 - в 1993 году</sup><br>
>> <sup> SHA-1 - в 1995 году</sup><br>
>> <sup> SHA-2 - в 2002 году</sup>

>> <sup> является частью стандарта цифровой подписи ( DSS )</sup>

______________________________________________________________

## ![ico20] SHA-1

генерирует почти уникальную 160-битную ( 20-байтную ) подпись для текста

![cap-25]

<sup>Например, для исходного текста:</sup>

```javascript
for ( var x of arr ) {
     console.log ( x )
}
```

<sup>криптографический хэш SHA-1 будет:</sup>

```
15E84BC669EC1F264F68CF0329A3DE12788EBC7D
```

<sup>а  SHA-2 ( SHA256 ):</sup>

```
B731057D4688C1BCE4E6D7213027AA5F9E30939456B222E4FFF74FA0CD399D4F
```

>> <sup>**git** широко использует хэши **SHA-1** в качестве идентификаторов и проверок согласованности</sup>

_____________________________________________________________________________

### ![ico20] Онлайн-генераторы цифровой подписи SHA

| [![link-20] **SHA1**](https://passwordsgenerator.net/sha1-hash-generator/) | [![link-20] **SHA2**](https://passwordsgenerator.net/sha256-hash-generator/) |
|-|-|

_____________________________________________________________________________

## ![git-30] js-sha1

Вы можете установить пакет [**`js-sha1`**](https://github.com/emn178/js-sha1 "repo") из _CDN_

| ![bash-20] | ```$ npm install js-sha1``` |
|-|-|

_____________________________________________________________________________

## ![ico20] SHA256

Вы можете подключить скрипт **`sha256`** к своей странице:

```html
<script src="https://cdn.rawgit.com/chrisveness/crypto/4e93a4d/sha256.js"></script>
```

и использовать функцию **`Sha256.hash()`** для динамической генерации дайджеста любого текста

```javascript
var hash = Sha256.hash ( text )
```

| [![cap-20] **1**](https://garevna.github.io/js-samples/#07) |
|-|

Кроме того, в <img src="https://github.com/garevna/js-course/blob/master/images/git-bush-ico.png?raw=true" height="20"/> **Bush** вы можете использовать консольную команду `sha256sum`

## ![ico20] sha256sum

![](https://lh4.googleusercontent.com/wM_pdlag2wymXBf0vtG0LDwLUPyKPmNI0Z8op0grW79K0LNzSzQMTdOx_1zQtT9Utj6VxtRtNEjJajYfCusV8LejAeXMvtOliRJG_T6btsIShVCe20WkxABN4P2K5zqwp6E9ORQpuRwKF4k)

______________________________________________________________________________

## ![ico20] SHA384

Откройте пустое окно ( _blank_ )

В этом окне откройте **_Chrome DevTools_**

Создайте  фрагмент кода ( **snippet** ), как показано на видео [<img src="https://github.com/garevna/js-course/blob/master/pictures/logo_small_2x-vfl4_cFqn%5B1%5D.png?raw=true" height="22"/>](https://www.youtube.com/watch?v=xg9qsryE8Hk)

Вставьте следующий код сниппета:

```javascript
let script = document.createElement( 'script' )
script.src = 'https://garevna.github.io/js-samples/js/testSHA384.js'
script.crossOrigin = 'anonymous';
script.integrity = 'sha384-yXrIdlO1CBJknfDtCtDe2tmWWNl5xK30aTz62nLkEpEIBRD3OGi7+To7hfKRaUZ/'
document.head.appendChild( script )
```

______________________________________________________________________________________________

## ![ico25] integrity

**_Subresource Integrity_** ( **SRI** ) - это функция безопасности, которая позволяет браузерам проверять файлы, загружаемые из внешних источников ( например, из CDN )

Если файл был изменен, то значение атрибута  **`integrity`** ( цифровой подписи файла ) не будет соответствовать новому значению, вычисленному браузером, и загрузка поврежденного файла не произойдет

Для генерации дайджестов файлов используйте [:link: сервис](https://www.srihash.org/)

![](https://lh3.googleusercontent.com/JUoOnSODv-YbGzZ_qsAWeSB4MRjYiAL62kmeb6eOSQZvMbVFKgUzC8XAdJq4GRtoWT-8N4AVAbWnXdZfHmLcGRgI-DOuvqANAPLjvLHfvAsC6m0Yas_mNZQ_Mb-w2dwnVh4Zth6ZOwxUYew)

* Вставьте ссылку на файл в сети
* Нажмите  кнопку   **`Hash!`**
* Полученный тег скрипта содержит атрибут **`integrity`**
* Скопируйте значение атрибута **`integrity`**
* Теперь вы сможете использовать его при динамической загрузке скриптов

_________________________________________________________________________________________________

## ![hw-30] Самостоятельная работа

<sup>Посмотрите код [![cap-20] **примера**](https://garevna.github.io/js-samples/#09) в отладчике</sup>

<sup>Установите **`breakpoints`**</sup>

<sup>С помощью **`Watch`** отслеживайте, как изменяются значения массива  **_users_** и переменной **_user_**</sup>

###### Задание:

* <sup>Создайте форму регистрации пользователя</sup>
* <sup>Создайте страницу для зарегистрированных пользователей</sup>

> <sup>При регистрации пользователя должен генерироваться дайджест, который будет ключом записи в базе данных</sup>

```javascript
users = [
    {
        key: a42caea01469a4687fb8713dc1748a0d14adec7f307371f82382812142ee2c58,
        name: "Иван",
        email: "ivan.petrenko@gmail.com",
        avatar: "https://imgur.com/I80W1Q0.png"
    },
    {
        key: b7d20c2dc6cb3e4bcde90f80598e369ab3d1841d799039dfd06f86221af10fd8,
        name: "Mary",
        email: "mary789@gmail.com",
        avatar: "https://raw.githubusercontent.com/fangpenlin/avataaars/HEAD/avataaars-example.png"
    },
    ...
]
```

<sup>Создайте форму для входа пользователя</sup>

<sup>После ввода _email_ нужно найти пользователя с таким _**email**_ и запросить пароль</sup>

<sup>После ввода пароля должен быть сгенерирован дайджест, который будет проверяться на совпадение со значением **_key_**
найденного пользователя</sup>

<sup>Если значения не совпадут, нужно вывести предупреждение</sup>

<sup>Если значения совпали, то перейти на страницу для зарегистрированных пользователей</sup>

<sup>На странице для зарегистрированных пользователей должно быть выведено имя пользователя и его аватар</sup>

_________________________________________________________________________

![footer]
