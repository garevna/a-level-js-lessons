# ![ico-30 study] Селектор :not(:defined)

![ico-25 cap] ** 1 **

~~~html
<body>
    <hello-element></hello-element>
    <bye-element></bye-element>
</body>
~~~

Запрос

~~~javascript
document.querySelectorAll ( ":not(:defined)" )
~~~

Результат

~~~console
▶ NodeList(2) [hello-element, bye-element]
~~~

Запрос

~~~javascript
document.querySelectorAll ( ":defined" )
~~~

Результат

~~~console
▶ NodeList(3) [html, head, body]
~~~
