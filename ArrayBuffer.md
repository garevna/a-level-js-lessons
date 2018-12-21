# :mortar_board: ArrayBuffer
###### конструктор
Создает объект с двоичными данными в виде строки

Непосредственного доступа к данным в экземпляре `ArrayBuffer` нет

Доступна для чтения только длина буфера в байтах

```javascript
var arrayBuffer  = new ArrayBuffer ( 32 )
```

## :mortar_board: Акцессоры
Для работы с данными экземпляра необходимо использовать конструкторы, создающие экземпляры аксессоров

* DataView
* Int8Array
* Uint8Array
* Int16Array
* Uint16Array
* Int32Array
* Uint32Array

```javascript
var sample  = new ArrayBuffer ( 32 )
new Uint8Array ( sample )
// ► Uint8Array(32) [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
new Int16Array ( sample )
// ► Int16Array(16) [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
new Uint16Array ( sample )
// ► Uint16Array(16) [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
new Uint32Array ( sample )
// ► Uint32Array(8) [0, 0, 0, 0, 0, 0, 0, 0]
new Int32Array ( sample )
// ► Int32Array(8) [0, 0, 0, 0, 0, 0, 0, 0]
```
Результатом вызова конструкторов `Int8Array`, `Uint8Array`, `Int16Array`, `Uint16Array`, `Int32Array`, `Uint32Array` будет _итерабельный объект_ с числовыми данными

Для получения массива можно использовать метод **`ArrayFrom()`**:
```javascript
var buffer  = new ArrayBuffer ( 16 )
var sample = Array.from ( new Uint8Array ( buffer ) )
sample [0] = 50
sample [3] = 255
sample [4] = 178
console.log ( sample )
```
###### Результат в консоли:
```console
► (16) [50, 0, 0, 255, 178, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
```
Однако это "дорога в одну сторону", поскольку приводит к созданию нового массива ( **_sample_** ), изменения в котором не отражаются на исходном объекте ( **_buffer_** )

### DataView
С помощью этого конструктора создается экземпляр акцессора, обеспечивающего гибкий доступ к данным исходного экземпляра `ArrayBuffer` 

```javascript
var buffer  = new ArrayBuffer ( 16 )
var dataView = new DataView ( buffer )
console.log ( dataView.__proto__ )
```
###### Результат в консоли:
```console
DataView {constructor: ƒ, getInt8: ƒ, …}
    buffer: (...)
    byteLength: (...)
    byteOffset: (...)
  ► constructor: ƒ DataView()
  ► getBigInt64: ƒ getBigInt64()
  ► getBigUint64: ƒ getBigUint64()
  ► getFloat32: ƒ getFloat32()
  ► getFloat64: ƒ getFloat64()
  ► getInt8: ƒ getInt8()
  ► getInt16: ƒ getInt16()
  ► getInt32: ƒ getInt32()
  ► getUint8: ƒ getUint8()
  ► getUint16: ƒ getUint16()
  ► getUint32: ƒ getUint32()
  ► setBigInt64: ƒ setBigInt64()
  ► setBigUint64: ƒ setBigUint64()
  ► setFloat32: ƒ setFloat32()
  ► setFloat64: ƒ setFloat64()
  ► setInt8: ƒ setInt8()
  ► setInt16: ƒ setInt16()
  ► setInt32: ƒ setInt32()
  ► setUint8: ƒ setUint8()
  ► setUint16: ƒ setUint16()
  ► setUint32: ƒ setUint32()
    Symbol(Symbol.toStringTag): "DataView"
  ► get buffer: ƒ buffer()
  ► get byteLength: ƒ byteLength()
  ► get byteOffset: ƒ byteOffset()
  ► __proto__: Object
```
###### :coffee: :one: setInt8
```javascript
var buffer  = new ArrayBuffer ( 16 )
var dataView = new DataView ( buffer )
dataView.setInt8 ( 2, 78 )
dataView.setInt8 ( 3, 94 )
dataView.setInt8 ( 5, 55 )
console.log ( buffer)
```
###### Результат в консоли:
```console
▼ ArrayBuffer(16) {}
  ► [[Int8Array]]: Int8Array(16) [0, 0, 78, 94, 0, 55, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
  ► [[Int16Array]]: Int16Array(8) [0, 24142, 14080, 0, 0, 0, 0, 0]
  ► [[Int32Array]]: Int32Array(4) [1582170112, 14080, 0, 0]
  ► [[Uint8Array]]: Uint8Array(16) [0, 0, 78, 94, 0, 55, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
    byteLength: (...)
  ► __proto__: ArrayBuffer
```

###### :coffee: :two: setInt16
```javascript
var buffer  = new ArrayBuffer ( 16 )
var dataView = new DataView ( buffer )
dataView.setInt16 ( 1, 78 )
dataView.setInt16 ( 3, 94 )
dataView.setInt16 ( 5, 55 )
console.log ( buffer)
```
###### Результат в консоли:
```console
▼ ArrayBuffer(16) {}
  ► [[Int8Array]]: Int8Array(16) [0, 0, 78, 0, 94, 0, 55, 0, 0, 0, 0, 0, 0, 0, 0, 0]
  ► [[Int16Array]]: Int16Array(8) [0, 78, 94, 55, 0, 0, 0, 0]
  ► [[Int32Array]]: Int32Array(4) [5111808, 3604574, 0, 0]
  ► [[Uint8Array]]: Uint8Array(16) [0, 0, 78, 0, 94, 0, 55, 0, 0, 0, 0, 0, 0, 0, 0, 0]
    byteLength: (...)
  ► __proto__: ArrayBuffer
```

###### :coffee: :three: setInt32
```javascript
var buffer  = new ArrayBuffer ( 16 )
var dataView = new DataView ( buffer )
dataView.setInt16 ( 3, 78 )
dataView.setInt16 ( 7, 94 )
dataView.setInt16 ( 11, 55 )
console.log ( buffer)
```
###### Результат в консоли:
```console
▼ ArrayBuffer(16) {}
  ► [[Int8Array]]: Int8Array(16) [0, 0, 0, 0, 78, 0, 0, 0, 94, 0, 0, 0, 55, 0, 0, 0]
  ► [[Int16Array]]: Int16Array(8) [0, 0, 78, 0, 94, 0, 55, 0]
  ► [[Int32Array]]: Int32Array(4) [0, 78, 94, 55]
  ► [[Uint8Array]]: Uint8Array(16) [0, 0, 0, 0, 78, 0, 0, 0, 94, 0, 0, 0, 55, 0, 0, 0]
    byteLength: (...)
  ► __proto__: ArrayBuffer
```