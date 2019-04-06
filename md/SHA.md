## <img src="https://avatars2.githubusercontent.com/u/19735284?s=40&v=4" width="30" title="Ⓒ Irina Fylyppova ( garevna ) 2019"/> Secure Hash Algorithm

###### криптографический алгоритм компьютерной безопасности

Алгоритм генерирует криптографический хэш ( «дайджест» )

Этот хэш является своего рода «сигнатурой» для текста или файла данных

Алгоритм SHA не является «шифрованием»

:warning: он не может быть расшифрован обратно к исходному тексту

это «односторонняя» криптографическая функция

она возвращает цифровую подпись фиксированного размера для любого размера исходного текста

>> Создан Агентством национальной безопасности США

>> * SHA-0 - в 1993 году
>> * SHA-1 - в 1995 году
>> * SHA-2 - в 2002 году

    является частью стандарта цифровой подписи ( DSS )
***
## :mortar_board: SHA-1

    генерирует почти уникальную 160-битную ( 20-байтную ) подпись для текста

:coffee:
    Например, для исходного текста:
```javascript
for ( var x of arr ) {
     console.log ( x )
}
```
криптографический хэш SHA-1 будет:

    15E84BC669EC1F264F68CF0329A3DE12788EBC7D

а  SHA-2 ( SHA256 ):

    B731057D4688C1BCE4E6D7213027AA5F9E30939456B222E4FFF74FA0CD399D4F

>> **git** широко использует хэши **SHA-1** в качестве идентификаторов и проверок согласованности

***

###### Онлайн-генераторы цифровой подписи SHA

| [:link:**SHA1**](https://passwordsgenerator.net/sha1-hash-generator/) | [ :link: **SHA2**](https://passwordsgenerator.net/sha256-hash-generator/) |
|-|-|

***

### :octocat: js-sha1

Вы можете установить пакет [**`js-sha1`**](https://github.com/emn178/js-sha1 "repo") из _CDN_

<table><tr>
<td><img src="https://github.com/garevna/js-course/blob/master/images/git-bush-ico.png?raw=true" height="20"/></td>
<td><code>
$ npm install js-sha1
</code></td>
</tr></table>

***

### SHA256

Вы можете подключить скрипт **`sha256`** к своей странице:

```html
<script src="https://cdn.rawgit.com/chrisveness/crypto/4e93a4d/sha256.js"></script>
```

и использовать функцию **`Sha256.hash()`** для динамической генерации дайджеста любого текста

```javascript
var hash = Sha256.hash ( text )
```

| [:coffee: :one:](https://garevna.github.io/js-samples/#07) |
|-|

Кроме того, в <img src="https://github.com/garevna/js-course/blob/master/images/git-bush-ico.png?raw=true" height="20"/> **Bush** вы можете использовать консольную команду `sha256sum`

###### sha256sum

![](https://lh4.googleusercontent.com/wM_pdlag2wymXBf0vtG0LDwLUPyKPmNI0Z8op0grW79K0LNzSzQMTdOx_1zQtT9Utj6VxtRtNEjJajYfCusV8LejAeXMvtOliRJG_T6btsIShVCe20WkxABN4P2K5zqwp6E9ORQpuRwKF4k)

***

### SHA384

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

***

## :mortar_board: integrity

**_Subresource Integrity_** ( **SRI** ) - это функция безопасности, которая позволяет браузерам проверять файлы, загружаемые из внешних источников ( например, из CDN )

Если файл был изменен, то значение атрибута  **`integrity`** ( цифровой подписи файла ) не будет соответствовать новому значению, вычисленному браузером, и загрузка поврежденного файла не произойдет

Для генерации дайджестов файлов используйте [:link: сервис](https://www.srihash.org/)

![](https://lh3.googleusercontent.com/JUoOnSODv-YbGzZ_qsAWeSB4MRjYiAL62kmeb6eOSQZvMbVFKgUzC8XAdJq4GRtoWT-8N4AVAbWnXdZfHmLcGRgI-DOuvqANAPLjvLHfvAsC6m0Yas_mNZQ_Mb-w2dwnVh4Zth6ZOwxUYew)

* Вставьте ссылку на файл в сети
* Нажмите  кнопку   **`Hash!`**
* Полученный тег скрипта содержит атрибут **`integrity`**
* Скопируйте значение атрибута **`integrity`**
* Теперь вы сможете использовать его при динамической загрузке скриптов

***

## :briefcase: Самостоятельная работа

Посмотрите код [:coffee: **примера**](https://garevna.github.io/js-samples/#09) в отладчике

Установите **`breakpoints`**

С помощью **`Watch`** отслеживайте, как изменяются значения массива  **_users_** и переменной **_user_**

###### Задание:

* Создайте форму регистрации пользователя
* Создайте страницу для зарегистрированных пользователей

> При регистрации пользователя должен генерироваться дайджест, который будет ключом записи в базе данных

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

Создайте форму для входа пользователя

После ввода _email_ нужно найти пользователя с таким _**email**_ и запросить пароль

После ввода пароля должен быть сгенерирован дайджест, который будет проверяться на совпадение со значением **_key_**
найденного пользователя

Если значения не совпадут, нужно вывести предупреждение

Если значения совпали, то перейти на страницу для зарегистрированных пользователей

На странице для зарегистрированных пользователей должно быть выведено имя пользователя и его аватар
