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
###### :coffee: Измерение производительности:
```javascript
performance.mark ( "start" )
for ( var x = 0; x < 1000; x++ )
    document.write ( `${x}<br/>` )
performance.mark ( "end" )

var items = window.performance
        .getEntriesByType('mark')
console.log ( items )
```
###### 
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