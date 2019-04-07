# <img src="https://avatars2.githubusercontent.com/u/19735284?s=40&v=4" width="30" title="Ⓒ Irina Fylyppova ( garevna ) 2019"/> WebSocket

**WebSockets API** позволяет веб-приложениям использовать протокол `WebSockets` для двусторонней связи с удаленным хостом

> `WebSockets, как и Local Storage и Geolocation, изначально был частью спецификации HTML5`

> `Cогласно спецификации протокола,
> соединение WebSocket стартует как HTTP-соединение,
> гарантируя полную обратную совместимость с миром до WebSocket`

Переключение протокола с `HTTP` на `WebSocket` называется рукопожатием ( handshake ) `WebSocket`

При отправке запроса на сервер браузер с помощью заголовков **`Connection`** и **`Upgrade`** сообщает, что он хочет переключиться с протокола `HTTP` на `WebSocket`:

###### Request Headers

<table><tr><td><pre>
Accept-Encoding: gzip, deflate
Accept-Language: en-US,en;q=0.9,ru;q=0.8
Cache-Control: no-cache
Connection: Upgrade
Host: echo.websocket.org
Origin: null
Pragma: no-cache
Sec-WebSocket-Extensions: permessage-deflate; client_max_window_bits
Sec-WebSocket-Key: FWRPxaoGQhQaeqg1eRPHTw==
Sec-WebSocket-Version: 13
Upgrade: websocket
User-Agent: Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/71.0.3578.98 Safari/537.36
</pre></td></tr></table>

Если сервер поддерживает протокол `WebSocket`, он соглашается на переключение протокола через те же заголовки **`Connection`** и **`Upgrade`**

###### Response Headers

<table><tr><td><pre>Access-Control-Allow-Credentials: true
Access-Control-Allow-Headers: content-type
Access-Control-Allow-Headers: authorization
Access-Control-Allow-Headers: x-websocket-extensions
Access-Control-Allow-Headers: x-websocket-version
Access-Control-Allow-Headers: x-websocket-protocol
Access-Control-Allow-Origin: null
Connection: Upgrade
Date: Mon, 31 Dec 2018 19:53:07 GMT
Sec-WebSocket-Accept: OQbuqh0sOBKbPsVMFPKNpI75N8I=
Server: Kaazing Gateway
Upgrade: websocket
</pre></td></tr></table>

В этот момент HTTP-соединение разрывается и заменяется `WebSocket`-соединением через то же TCP/IP

`WebSocket`-соединение использует те же порты по умолчанию, что и HTTP (`80`) и HTTPS (`443`)

***

<a name="samples"></a>

### Упражнения

| [ :briefcase: :one:](websocket-1) | [ :briefcase: :two:](websocket-2) | [ :briefcase: :three:](websocket-3) |
|-|-|-|

_________________________________________________________________________

![](https://github.com/garevna/js-course/raw/master/images/a-level-ico.png?raw=true)
