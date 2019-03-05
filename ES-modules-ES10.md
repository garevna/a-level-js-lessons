## :mortar_board: Dynamic import ( ES10 )

:coffee:

Запустите в консоли следующий код:

```javascript
document.body.onclick = async () => {
    const module = await import(`https://garevna.github.io/js-samples/js/index12.js`)
}
```

:pushpin: Примечательно то, что в файле **_index12.js_** нет директивы **_`export`_**

Однако импорт сработал, и скрипт запустился 