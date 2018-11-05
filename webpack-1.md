### :briefcase: Упражнение 1

📦 ( zero-config )

Работаем в созданной ранее папке  npm-test  `( вы можете назвать свою папку иначе )`

###### Создаем файлы и папки:

#### :pencil: index.html

```html
<!DOCTYPE html>
<html lang="ru">
    <head>
        <meta charset="UTF-8">
        <title>webpack-sample</title>
    </head>
    <body>
        <div class = "sampleClass"></div>
        <script src = "./dist/main.js"></script>
    </body>
</html>
```
#### :open_file_folder: src

Cоздайте папку  src  и поместите туда файл  :pencil: index.js

#### :pencil: index.js

```javascript
var promise = new Promise ( function ( resolve, reject ) {
    document.write ( 'Wait, pease...<br>' )
    setTimeout ( () => resolve ( "OK, you are here ?" ), 2000 )
})

promise.then ( response => document.write ( response ) )
```
#### webpack

<img src="https://gitforwindows.org/img/gwindows_logo.png" width="22"/>а теперь выполните в консоли `Git Bush` команду

    webpack

webpack был вызван нами без каких-либо параметров и опций

В консоли видно предупреждение, что опция  mode отсутствует, поэтому использовано значение по умолчанию - `production`

Обратите внимание, что в папке проекта появилась новая папка  :open_file_folder: dist,

а в этой папке - минифицированный файл  :pencil: main.js

Как видите, мы обошлись без файла конфигурации, поскольку  Webpack 4  позволяет это при использовании дефолтных имен файлов и папок:

✅ Исходный файл должен находиться в папке :open_file_folder: src и называться :pencil: index.js

✅ Результат сборки будет помещен в папку :open_file_folder: dist под именем  :pencil: main.js

Теперь откройте файл  index.html  в браузере