
```javascript
const express = require('express')
const app = express()
const server = require('http').createServer(app)
var io = require('socket.io')(server)

let port = process.env.PORT || 3000

server.listen(port, function () {
    console.log( `Server listening at port ${port}` )
})
```

Созданный нами объект **`io`** является экземпляром класса **`Server`** следующей структуры:

```javascript
Server {
    nsps: { ... },
    parentNsps: Map {},
    _path: '/socket.io',
    _serveClient: true,
    parser: { ... },
    encoder: Encoder {},
    _adapter: [Function: Adapter],
    _origins: '*:*',
    sockets: Namespace { ... },
    eio: Server { ... }
}
```

Если развернуть содержимое этого объекта подробнее

```javascript
console.log ( io )
```

то можно увидеть структуру каждого свойства

###### Result:

```javascript
Server {
    nsps: {
        '/': Namespace {
            name: '/',
            server: [Circular],
            sockets: {},
            connected: {},
            fns: [],
            ids: 0,
            rooms: [],
            flags: {},
            adapter: [Object]
        }
    },
    parentNsps: Map {},
    _path: '/socket.io',
    _serveClient: true,
    parser: {
        protocol: 4,
        types: [
            'CONNECT',
            'DISCONNECT',
            'EVENT',
            'ACK',
            'ERROR',
            'BINARY_EVENT',
            'BINARY_ACK'
        ],
        CONNECT: 0,
        DISCONNECT: 1,
        EVENT: 2,
        ACK: 3,
        ERROR: 4,
        BINARY_EVENT: 5,
        BINARY_ACK: 6,
        Encoder: [Function: Encoder],
        Decoder: [Function: Decoder]
    },
    encoder: Encoder {},
    _adapter: [Function: Adapter],
    _origins: '*:*',
    sockets: Namespace {
        name: '/',
        server: [Circular],
        sockets: {},
        connected: {},
        fns: [],
        ids: 0,
        rooms: [],
        flags: {},
        adapter: Adapter {
            nsp: [Circular],
            rooms: {},
            sids: {},
            encoder: Encoder {}
        }
    },
    eio: Server {
        clients: {},
        clientsCount: 0,
        wsEngine: 'ws',
        pingTimeout: 5000,
        pingInterval: 25000,
        upgradeTimeout: 10000,
        maxHttpBufferSize: 100000000,
        transports: [ 'polling', 'websocket' ],
        allowUpgrades: true,
        allowRequest: [Function: bound ],
        cookie: 'io',
        cookiePath: '/',
        cookieHttpOnly: true,
        perMessageDeflate: { threshold: 1024 },
        httpCompression: { threshold: 1024 },
        initialPacket: [ '0' ],
        ws: WebSocketServer {
            domain: null,
            _events: {},
            _eventsCount: 0,
            _maxListeners: undefined,
            options: [Object] },
            _events: { connection: [Function: bound ] },
            _eventsCount: 1
        },
        httpServer: Server {
            domain: null,
            _events: {
                connection: [Function: connectionListener],
                close: [Function: bound ],
                listening: [Function: bound ],
                upgrade: [Function],
                request: [Function]
            },
            _eventsCount: 5,
            _maxListeners: undefined,
            _connections: 0,
            _handle: null,
            _usingSlaves: false,
            _slaves: [],
            _unref: false,
            allowHalfOpen: true,
            pauseOnConnect: false,
            httpAllowHalfOpen: false,
            timeout: 120000,
            keepAliveTimeout: 5000,
            _pendingResponseData: 0,
            maxHeadersCount: null,
            headersTimeout: 40000,
            [Symbol(IncomingMessage)]: { [Function: IncomingMessage] super_: [Object] },
            [Symbol(ServerResponse)]: { [Function: ServerResponse] super_: [Object] },
            [Symbol(asyncId)]: -1
        },
        engine: Server {
            clients: {},
            clientsCount: 0,
            wsEngine: 'ws',
            pingTimeout: 5000,
            pingInterval: 25000,
            upgradeTimeout: 10000,
            maxHttpBufferSize: 100000000,
            transports: [ 'polling', 'websocket' ],
            allowUpgrades: true,
            allowRequest: [Function: bound ],
            cookie: 'io',
            cookiePath: '/',
            cookieHttpOnly: true,
            perMessageDeflate: { threshold: 1024 },
            httpCompression: { threshold: 1024 },
            initialPacket: [ '0' ],
            ws: WebSocketServer {
                domain: null,
                _events: {},
                _eventsCount: 0,
                _maxListeners: undefined,
                options: [Object]
            },
            _events: { connection: [Function: bound ]
        },
        _eventsCount: 1
    }
}
```

```javascript
io.on('connection', function ( socket ) {
    console.log ( 'io.sockets.sockets: ', io.sockets.sockets )
```

Созданный нами **`Server`**

У  есть свойство **_`sockets`_** ( объект )

У объекта **`io.sockets`** тоже есть свойство **_`sockets`_** ( объект )

Предположим, у нас два подключения ( откройте две вкладки )

Мы увидим два объекта класса **`Socket`** с никальными айдишниками:

```console
io.sockets.sockets:  {
    riIk7xPKPqrcmqVUAAAA: Socket { ... },
    'hCF0R-0W6qrBcIn1AAAB': Socket { ... }
}
```

Если заглянуть глубже в структуру экземпляра класса **`Socket`**, то можно увидеть такие свойства, как

* **`id`** ( строка )
* **`nsp`** ( объект )
* **`server`** ( объект )
* **`adapter`** ( объект )
* **`client`** ( объект )
* **`handshake`** ( объект )
* **`connected`** ( логическое значение )
* **`disconnected`** ( логическое значение )

... и так далее


```javascript
io.sockets.sockets:  {

    riIk7xPKPqrcmqVUAAAA: Socket {
        nsp: Namespace { ... },
        server: Server { ... },
        adapter: Adapter { ... },
        id: 'riIk7xPKPqrcmqVUAAAA',
        client: Client { ... },
        conn: Socket { ... },
        rooms: { ... },
        acks: {},
        connected: true,
        disconnected: false,
        handshake: { ... },
        fns: [],
        flags: {},
        _rooms: [],
        _events: { ... },
        _eventsCount: 2
    },

    'hCF0R-0W6qrBcIn1AAAB': Socket {
        nsp: Namespace { ... },
        server: Server { ... },
        adapter: Adapter { ... },
        id: 'hCF0R-0W6qrBcIn1AAAB',
        client: Client { ... },
        conn: Socket { ... },
        rooms: { ... },
        acks: {},
        connected: true,
        disconnected: false,
        handshake: { ... },
        fns: [],
        flags: {},
        _rooms: []
    }
}
```

###### Результат:

```javascript
io.sockets.sockets:  {

    riIk7xPKPqrcmqVUAAAA: Socket {
        nsp: Namespace {
            name: '/',
            server: [Object],
            sockets: [Circular],
            connected: [Object],
            fns: [],
            ids: 0,
            rooms: [],
            flags: {},
            adapter: [Object],
            _events: [Object],
            _eventsCount: 1
        },
        server: Server {
            nsps: [Object],
            parentNsps: Map {},
            _path: '/socket.io',
            _serveClient: true,
            parser: [Object],
            encoder: Encoder {},
            _adapter: [Function: Adapter],
            _origins: '*:*',
            sockets: [Object],
            eio: [Object],
            httpServer: [Object],
            engine: [Object]
        },
        adapter: Adapter {
            nsp: [Object],
            rooms: [Object],
            sids: [Object],
            encoder: Encoder {}
        },
        id: 'riIk7xPKPqrcmqVUAAAA',
        client: Client {
            server: [Object],
            conn: [Object],
            encoder: Encoder {},
            decoder: [Object],
            id: 'riIk7xPKPqrcmqVUAAAA',
            request: [Object],
            onclose: [Function: bound ],
            ondata: [Function: bound ],
            onerror: [Function: bound ],
            ondecoded: [Function: bound ],
            sockets: [Object],
            nsps: [Object],
            connectBuffer: []
        },
        conn: Socket {
            id: 'riIk7xPKPqrcmqVUAAAA',
            server: [Object],
            upgrading: true,
            upgraded: false,
            readyState: 'open',
            writeBuffer: [],
            packetsFn: [],
            sentCallbackFn: [],
            cleanupFn: [Array],
            request: [Object],
            remoteAddress: '::ffff:127.0.0.1',
            checkIntervalTimer: [Object],
            upgradeTimeoutTimer: [Object],
            pingTimeoutTimer: [Object],
            transport: [Object],
            _events: [Object],
            _eventsCount: 3
        },
        rooms: { riIk7xPKPqrcmqVUAAAA: 'riIk7xPKPqrcmqVUAAAA' },
        acks: {},
        connected: true,
        disconnected: false,
        handshake: {
            headers: [Object],
            time: 'Fri Feb 08 2019 09:42:51 GMT+0000 (UTC)',
            address: '::ffff:127.0.0.1',
            xdomain: false,
            secure: false,
            issued: 1549618971459,
            url: '/socket.io/?EIO=3&transport=polling&t=MZCVGdN',
            query: [Object]
        },
        fns: [],
        flags: {},
        _rooms: [],
        _events: { message: [Function], disconnect: [Function] },
        _eventsCount: 2
    },

    'hCF0R-0W6qrBcIn1AAAB': Socket {
        nsp: Namespace {
            name: '/',
            server: [Object],
            sockets: [Circular],
            connected: [Object],
            fns: [],
            ids: 0,
            rooms: [],
            flags: {},
            adapter: [Object],
            _events: [Object],
            _eventsCount: 1
        },
        server: Server {
            nsps: [Object],
            parentNsps: Map {},
            _path: '/socket.io',
            _serveClient: true,
            parser: [Object],
            encoder: Encoder {},
            _adapter: [Function: Adapter],
            _origins: '*:*',
            sockets: [Object],
            eio: [Object],
            httpServer: [Object],
            engine: [Object]
        },
        adapter: Adapter {
            nsp: [Object],
            rooms: [Object],
            sids: [Object],
            encoder: Encoder {}
        },
        id: 'hCF0R-0W6qrBcIn1AAAB',
        client: Client {
            server: [Object],
            conn: [Object],
            encoder: Encoder {},
            decoder: [Object],
            id: 'hCF0R-0W6qrBcIn1AAAB',
            request: [Object],
            onclose: [Function: bound ],
            ondata: [Function: bound ],
            onerror: [Function: bound ],
            ondecoded: [Function: bound ],
            sockets: [Object],
            nsps: [Object],
            connectBuffer: []
        },
        conn: Socket {
            id: 'hCF0R-0W6qrBcIn1AAAB',
            server: [Object],
            upgrading: false,
            upgraded: false,
            readyState: 'open',
            writeBuffer: [],
            packetsFn: [],
            sentCallbackFn: [],
            cleanupFn: [Array],
            request: [Object],
            remoteAddress: '::ffff:127.0.0.1',
            checkIntervalTimer: null,
            upgradeTimeoutTimer: null,
            pingTimeoutTimer: [Object],
            transport: [Object],
            _events: [Object],
            _eventsCount: 3
        },
        rooms: {},
        acks: {},
        connected: true,
        disconnected: false,
        handshake: {
            headers: [Object],
            time: 'Fri Feb 08 2019 09:42:52 GMT+0000 (UTC)',
            address: '::ffff:127.0.0.1',
            xdomain: false,
            secure: false,
            issued: 1549618972152,
            url: '/socket.io/?EIO=3&transport=polling&t=MZCVGsy',
            query: [Object]
        },
        fns: [],
        flags: {},
        _rooms: []
    }
}
```