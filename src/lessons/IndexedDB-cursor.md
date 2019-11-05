# ![ico-30 study] indexedDB

______________________________________________________

## ![ico-25 icon] IDBKeyRange

Этот интерфейс предоставляет нам возможность задать диапазон значений ключа

Для этого у него есть методы:

• **bound**
• **lowerBound**
• **upperBound**
• **only**

~~~console
▼ ƒ IDBKeyRange()
  ► bound: ƒ bound()
  ► lowerBound: ƒ lowerBound()
  ► only: ƒ only()
  ► upperBound: ƒ upperBound()
    arguments: null
    caller: null
    length: 0
    name: "IDBKeyRange"
  ▼ prototype: IDBKeyRange
      ► includes: ƒ includes()
        lower: (...)
        lowerOpen: (...)
        upper: (...)
        upperOpen: (...)
      ► constructor: ƒ IDBKeyRange()
        Symbol(Symbol.toStringTag): "IDBKeyRange"
      ► get lower: ƒ lower()
      ► get lowerOpen: ƒ lowerOpen()
      ► get upper: ƒ upper()
      ► get upperOpen: ƒ upperOpen()
      ► __proto__: Object
__proto__: ƒ ()
~~~

___________________________________________________________

◘◘![ico-20 cap] ** 1**◘◘

~~~js
const testCount = async db => {
    let transaction = db.transaction ( [ "userStore" ], "readonly" )
    let store = transaction.objectStore ( "userStore" )
    let index = store.index ( "hobbyIndex" )

    store.count().onsuccess = event => console.log ( event.target.result )
    index.count( IDBKeyRange.only ( "footbal" ) )
        .onsuccess = event => console.log ( event.target.result )

    transaction.oncomplete = event => console.log ( "Finish" )
}

let promise = new Promise (
    ( resolve, reject ) => Object.assign (
        indexedDB.open ( "users" ), {
            onsuccess: event => resolve ( event.target.result ),
            onerror: event => reject ( event.target.error )
        }
    )
)

promise.then ( testCount )
~~~

Результат в консоли:

~~~console
4
2
Finish
~~~

______________________________________________

◘◘![ico-20 cap] ** 2**◘◘

~~~js
const getRecordsRange = db => {
    let transaction = db.transaction ( [ "userStore" ], "readonly" )
    let store = transaction.objectStore ( "userStore" )
    let index = store.index ( "nameIndex" )

    store.getAll ( IDBKeyRange.bound ( 2, 4 ) ).onsuccess = event => console.log ( event.target.result )
    index.getAll ( IDBKeyRange.lowerBound ( "P" ) )
        .onsuccess = event => console.log ( event.target.result )

    transaction.oncomplete = event => console.log ( "Finish" )
}

let promise = new Promise (
    ( resolve, reject ) => Object.assign (
        indexedDB.open ( "users" ), {
            onsuccess: event => resolve ( event.target.result ),
            onerror: event => reject ( event.target.error )
        }
    )
)

promise.then ( getRecordsRange )
~~~

Результат в консоли:

~~~console
▼ (3) [{…}, {…}, {…}]
  ► 0: {name: "Andry", birthYear: 1998, family: {…}, hobby: Array(1)}
  ► 1: {name: "Piter", birthYear: 2001, family: {…}, hobby: Array(2)}
  ► 2: {name: "Иван", birthYear: 2004, family: {…}, hobby: Array(2)}length: 3
  ► __proto__: Array(0)

▼ (3) [{…}, {…}, {…}]
  ► 0: {name: "Piter", birthYear: 2001, family: {…}, hobby: Array(2)}
  ► 1: {name: "Stephan", birthYear: 1995, family: {…}, hobby: Array(2)}
  ► 2: {name: "Иван", birthYear: 2004, family: {…}, hobby: Array(2)}length: 3

  ► __proto__: Array(0)
Finish
~~~
