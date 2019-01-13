### <img src="https://lh5.googleusercontent.com/fP0Irt59sQdYkAogbRwZMIHJcA78jolq1GwUZfJJseZLo_F5Cj1-Y-vG_VRmSHqArgwyZWkYQj7svBsAaZ--baMRcd9a7uTgyXfyXw5ZCm00uFszRjqUVc-kSiLZEKIbBR8bFPK4_7dxS2U" height="25"/> [JSONPlaceholder](https://jsonplaceholder.typicode.com/)

***

Для того, чтобы понять принцип взаимодействия с `REST API`, воспользуемся бесплатным сервисом [**`JSONPlaceholder`**](https://jsonplaceholder.typicode.com/)

Здесь нам не нужна авторизация, не нужно посылать login и пароль, чтобы получить доступ к данным

Но, естественно, мы имеем доступ только на чтение данных

Методы `POST`, `PUT`, `PATCH`, `DELETE` только имитируются, фактически мы не можем вносить изменения

Перечень **`endpoint`** ( доступных операций с ресурсами )

###### JSONPlaceholder endpoints

<img src="https://lh4.googleusercontent.com/kLZ2AUHmxj_tGElT44CKZEDXYqZ9fKOUbciuV5XDf-tRnKiPT0njS1rJnurGUEI7QGfFLNL6UYRa-noaqWmZ1QcUG_7bKBAYWMSLntBIcA-Kop3T3W-y4w1e-moZvWG-ndn0IPJwtWAOmlE" width="250"/>

***

Например, чтобы получить с фейкового сервера все посты, мы должны использовать ссылку: 

https://jsonplaceholder.typicode.com/posts

При этом нас не волнуют детали реализации обработки нашего запроса на стороне сервера

Сервер также "свободен" в выборе или изменении способа обработки запроса и фактического размещения данных

Нас связывают с сервером только условные ссылки ( `endpoints` ), которые понятны серверу ( чего мы хотим )

Где конкретно лежат нужные нам данные - это не наше дело, как сервер будет их обрабатывать - не наше дело

то есть есть некое соглашение ( протокол ), по которому и взаимодействуют две стороны: клиент и сервер

***

:coffee: :one:

Получим все комментарии к первому посту с помощью утилиты `curl`

<img src="https://github.com/garevna/js-course/blob/master/images/git-bush-ico.png?raw=true" height="20"/> Выполним консольную команду
```
$ curl https://jsonplaceholder.typicode.com/posts/1/comments
```

<img width="450" src="https://lh6.googleusercontent.com/RRQtfUSawytMqnSDIF4k8wpz1oDzkM8-RxWqBR3XN5PR18HS3jOfGfAyNVYe587xnJL0NoPfy7V1MbovDbOpPuJ0nFj0O-LZinvj2dmdBb1yLKFtRwMcKf7tXimuD0nEB0ZECxD7oPr7liU"/>

***

:coffee: :two:

Получим все комментарии к первому посту прямо в консоли браузера, воспользовавшись методом `fetch`

```javascript
fetch ( 'https://jsonplaceholder.typicode.com/posts/1/comments' )
    .then ( response => response.json ()
        .then ( json => console.log ( json ) )
    )
```

<img width="580" src="https://lh6.googleusercontent.com/tQof5aM48ME-v6g1l-4gkfE2v2WYqinFGYyarEsCdKNvAxfQLjY02h9VffWTvVqk1QlkMxpy14ZNhbCTnVxTzIdMb-5-CYM4zgEVzXQUdodp0UUFx5SMozubZ-1kmTRdly-mS03cSBVGDQ8"/>