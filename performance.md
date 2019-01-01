# :mortar_board: Performance

Для оценки производительности приложения можно использовать встроенный в браузеры интерфейс **performance**

Этот интерфейс обеспечивает доступ к следующим API:

* Performance Timeline API
* High Resolution Time API
* Navigation Timing API
* User Timing API
* Resource Timing API

Если в консоли любой веб-страницы вывести объект **performance**, то можно увидеть примерно следующее:

###### performance
```console
▼ Performance {timeOrigin: 1546006432906.767, onresourcetimingbufferfull: null, memory: MemoryInfo, navigation: PerformanceNavigation, timing: PerformanceTiming}
  ▼ memory: MemoryInfo
        jsHeapSizeLimit: 2217857988
        totalJSHeapSize: 33243136
        usedJSHeapSize: 19358120
      ► __proto__: MemoryInfo
  ► navigation: PerformanceNavigation {type: 0, redirectCount: 0}
    onresourcetimingbufferfull: null
    timeOrigin: 1546006432906.767
  ▼ timing: PerformanceTiming
        connectEnd: 1546006433378
        connectStart: 1546006432960
        domComplete: 1546006435228
        domContentLoadedEventEnd: 1546006434216
        domContentLoadedEventStart: 1546006434216
        domInteractive: 1546006434216
        domLoading: 1546006433576
        domainLookupEnd: 1546006432960
        domainLookupStart: 1546006432915
        fetchStart: 1546006432910
        loadEventEnd: 1546006435231
        loadEventStart: 1546006435228
        navigationStart: 1546006432906
        redirectEnd: 0
        redirectStart: 0
        requestStart: 1546006433379
        responseEnd: 1546006433563
        responseStart: 1546006433534
        secureConnectionStart: 1546006433015
        unloadEventEnd: 0
        unloadEventStart: 0
      ► __proto__: PerformanceTiming
  ► __proto__: Performance
```
Что наследует объект **`performance`**:
###### Performance.prototype
```console
▼ Performance {now: ƒ, getEntries: ƒ, getEntriesByType: ƒ, …}
  ► clearMarks: ƒ clearMarks()
  ► clearMeasures: ƒ clearMeasures()
  ► clearResourceTimings: ƒ clearResourceTimings()
  ► getEntries: ƒ getEntries()
  ► getEntriesByName: ƒ getEntriesByName()
  ► getEntriesByType: ƒ getEntriesByType()
  ► mark: ƒ mark()
  ► measure: ƒ measure()
    memory: (...)
    navigation: (...)
  ► now: ƒ now()
    onresourcetimingbufferfull: (...)
  ► setResourceTimingBufferSize: ƒ setResourceTimingBufferSize()
    timeOrigin: (...)
    timing: (...)
  ► toJSON: ƒ toJSON()
  ► constructor: ƒ Performance()
    Symbol(Symbol.toStringTag): "Performance"
  ► get memory: ƒ memory()
  ► get navigation: ƒ navigation()
  ► get onresourcetimingbufferfull: ƒ onresourcetimingbufferfull()
  ► set onresourcetimingbufferfull: ƒ onresourcetimingbufferfull()
  ► get timeOrigin: ƒ timeOrigin()
  ► get timing: ƒ timing()
  ► __proto__: EventTarget
```
***
#### :coffee: performance.mark
Установка временных меток
```javascript
performance.mark ( "start" )
for ( var x = 0; x < 1000; x++ )
    document.write ( `${x}<br/>` )
performance.mark ( "end" )

var items = window.performance
        .getEntriesByType('mark')
console.log ( items )
```
###### Результат в консоли:
```console
▼ (2) [PerformanceMark, PerformanceMark]
  ▼ 0: PerformanceMark
        duration: 0
        entryType: "mark"
        name: "start"
        startTime: 2677.5999999954365
      ► __proto__: PerformanceMark
  ▼ 1: PerformanceMark
        duration: 0
        entryType: "mark"
        name: "end"
        startTime: 2725.9000000049127
      ► __proto__: PerformanceMark
    length: 2
  ► __proto__: Array(0)
```
***
#### :coffee: performance.measure
Измерение производительности
```javascript
performance.mark ( "start1" )

let elem = document.body.appendChild (
    document.createElement ( "img" )
)

elem.src = "http://ogo.ua/images/articles/1567/big/1395958980.jpg"
elem.width = "200"

performance.mark ( "end1" )

performance.measure (
    "insertElement",
    "start1",
    "end1"
)

performance.mark ( "start2" )

document.body.innerHTML += `
    <img src="http://ogo.ua/images/articles/1567/big/1395958980.jpg" width="200"/>
`

performance.mark ( "end2" )

performance.measure (
    "insertElement",
    "start2",
    "end2"
)

let measures = performance.getEntriesByName ( "insertElement" )

console.log ( `1: duration: ${measures[0].duration}ms` )
console.log ( `2: duration: ${measures[1].duration}ms` )

performance.clearMarks()
performance.clearMeasures()
```
###### Результат в консоли:
```console
1: duration: 0.20000000949949026ms
2: duration: 0.20000000949949026ms
```
Обратите внимание на методы
* clearMarks()
* clearMeasures()
***

### :mortar_board: performance.getEntries

###### getEntries()
###### getEntriesByName()
###### getEntriesByType()

:coffee:
```javascript
performance.mark ( "start" )

let elem = document.body.appendChild (
    document.createElement ( "img" )
)
elem.src = "http://ogo.ua/images/articles/1567/big/1395958980.jpg"
elem.width = "200"

performance.mark ( "end" )
```
#### performance.getEntries
```javascript
console.log (
    performance.getEntries()
)
```
###### Результат в консоли:
```console
▼ (5) [PerformanceMark, PerformanceMark, PerformanceResourceTiming, PerformancePaintTiming, PerformancePaintTiming]
  ► 0: PerformanceMark {name: "start", entryType: "mark", startTime: 10251.299999945331, duration: 0}
  ► 1: PerformanceMark {name: "end", entryType: "mark", startTime: 10251.59999995958, duration: 0}
  ► 2: PerformanceResourceTiming {initiatorType: "img", nextHopProtocol: "h2", workerStart: 0, redirectStart: 0, redirectEnd: 0, …}
  ► 3: PerformancePaintTiming {name: "first-paint", entryType: "paint", startTime: 10267.59999996284, duration: 0}
  ► 4: PerformancePaintTiming {name: "first-contentful-paint", entryType: "paint", startTime: 10267.59999996284, duration: 0}
    length: 5
  ► __proto__: Array(0)
```
***
#### performance.getEntriesByName
:coffee: :one:
```javascript
performance.getEntriesByName( "start" )
```
###### Результат в консоли:
```console
▼ [PerformanceMark]
  ▼ 0: PerformanceMark
        duration: 0
        entryType: "mark"
        name: "start"
        startTime: 10251.299999945331
      ► __proto__: PerformanceMark
        length: 1
  ► __proto__: Array(0)
```

:coffee: :two:
```javascript
const pictures = [
    "http://ogo.ua/images/articles/1567/big/1395958980.jpg",
    "https://wxpcdn.gcdn.co/dcont/fb/image/crew3_1024.png",
    "https://mixpix.in/post_imgs/2015/04/10/141025/00009.jpg",
    "https://mixpix.in/post_imgs/2015/04/10/141025/00006.jpg"
]
pictures.forEach (
    item => {
        performance.mark ( "start" )

        let elem = document.body.appendChild (
            document.createElement ( "img" )
        )
        elem.src = item
        elem.width = "200"

        performance.mark ( "end" )
    }
)

console.log (
    performance.getEntriesByName ( "start" )
)
```
###### Результат в консоли:
```console
▼ (4) [PerformanceMark, PerformanceMark, PerformanceMark, PerformanceMark]
  ► 0: PerformanceMark {name: "start", entryType: "mark", startTime: 2465.700000000652, duration: 0}
  ► 1: PerformanceMark {name: "start", entryType: "mark", startTime: 2467.000000004191, duration: 0}
  ► 2: PerformanceMark {name: "start", entryType: "mark", startTime: 2467.1000000089407, duration: 0}
  ► 3: PerformanceMark {name: "start", entryType: "mark", startTime: 2467.30000001844, duration: 0}
    length: 4
  ► __proto__: Array(0)
```
***
#### getEntriesByType

:coffee: :one:
```javascript
console.log (
    performance.getEntriesByType ( "resource" )
)
```
###### Результат в консоли:
```console
▼ [PerformanceResourceTiming]
  ▼ 0: PerformanceResourceTiming
        connectEnd: 0
        connectStart: 0
        decodedBodySize: 0
        domainLookupEnd: 0
        domainLookupStart: 0
        duration: 1.400000008288771
        encodedBodySize: 0
        entryType: "resource"
        fetchStart: 19113.49999997765
        initiatorType: "img"
        name: "http://ogo.ua/images/articles/1567/big/1395958980.jpg"
        nextHopProtocol: "h2"
        redirectEnd: 0
        redirectStart: 0
        requestStart: 0
        responseEnd: 19114.899999985937
        responseStart: 0
        secureConnectionStart: 0
      ► serverTiming: []
        startTime: 19113.49999997765
        transferSize: 0
        workerStart: 0
      ► __proto__: PerformanceResourceTiming
        length: 1
  ► __proto__: Array(0)
```

:coffee: :two:
```javascript
fetch ( 'https://httpbin.org/' )
    .then (
        response => console.log (
            performance.getEntriesByType ( "resource" )
        )
    )
```
###### Результат в консоли:
```console
▼ [PerformanceResourceTiming]
  ▼ 0: PerformanceResourceTiming
        connectEnd: 0
        connectStart: 0
        decodedBodySize: 0
        domainLookupEnd: 0
        domainLookupStart: 0
        duration: 144.70000000437722
        encodedBodySize: 0
        entryType: "resource"
        fetchStart: 24782.19999995781
        initiatorType: "fetch"
        name: "https://httpbin.org/"
        nextHopProtocol: "http/1.1"
        redirectEnd: 0
        redirectStart: 0
        requestStart: 0
        responseEnd: 24926.89999996219
        responseStart: 0
        secureConnectionStart: 0
      ► serverTiming: []
        startTime: 24782.19999995781
        transferSize: 0
        workerStart: 0
      ► __proto__: PerformanceResourceTiming
        length: 1
  ► __proto__: Array(0)
```