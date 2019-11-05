# ![ico-30 study] indexedDB

______________________________________________________

## ![ico-25 icon] Работа с базой данных

Рассмотрим на примере работу индексов

Для этого создадим класс ( синглтон ),
который будет обеспечивать создание и наполнение базы данных,
а так же создание хранилища, ключа и индексов
при создании экземпляра класса,
и обеспечивать интерфейс доступа к данным как по ключу,
так и по индексам

◘◘![ico-20 cap] ** 1**◘◘

~~~js
class UsersDB {

    constructor ( url ) {
        fetch ( url ).then (
            response => response.json(),
            error => console.warn ( error )
        )
            .then (
                response => {
                    this.users = response
                    this.openDB()
                }
            )
    }

    openDB () {
        Object.assign (
            indexedDB.open ( "users" ), {
                onupgradeneeded: this.upgradeDB.bind( this ),
                onsuccess: event => this.clear ( event ),
                onerror: event => console.warn ( event.target.error )
            }
        )
    }

    upgradeDB ( event ) {
        event.target.result.objectStoreNames
            .contains( "userStore" ) ? null :
                this.createStore( event.target.result )
    }

    clear ( event ) {
        this.db = event.target.result
        delete this.users
        delete this.__proto__.createStore
        delete this.__proto__.upgradeDB
    }

    async createStore ( db ) {

        let store = db.createObjectStore (
            "userStore", { keyPath: "name" }
        )
            .createIndex (
                "birthIndex",
                "birthYear",
                { unique: false }
            )
                .objectStore.createIndex (
                    "hobbyIndex",
                    "hobby", {
                        unique: false,
                        multiEntry: true
                    }
                ).objectStore
        this.users.forEach ( record => store.put ( record ) )
    }

    getAllData () {
        return new Promise (
            ( resolve, reject ) => Object.assign (
                this.db.transaction ( [ "userStore" ], "readonly" )
                    .objectStore ( "userStore" )
                        .getAll(), {
                    onsuccess: event => resolve ( event.target.result ),
                    onerror: event => reject ( event.target.error )
                }
            )
        )
    }

    async getDataByIndex ( indexName, indexValue ) {
        let store = this.db.transaction ( [ "userStore" ], "readonly" )
            .objectStore ( "userStore" )
        let cursor = await this.getIndexCursor (
            store,
            indexName,
            IDBKeyRange.only( indexValue )
        )
        return cursor ? cursor.value : null
    }

    async getDataByKey ( keyValue ) {
        let store = this.db.transaction ( [ "userStore" ], "readonly" )
            .objectStore ( "userStore" )
        let cursor = await this.getKeyCursor ( store, IDBKeyRange.only( keyValue ) )
        return cursor ? cursor.value : null
    }

    getKeyCursor ( store, keyRange ) {
        return new Promise (
            ( resolve, reject ) => Object.assign (
                store.openCursor ( keyRange ), {
                   onsuccess: event => resolve ( event.target.result ),
                   onerror: event => reject ( event.target.error )
                }
            )
        )
    }

    getIndexCursor ( store, indexName, keyRange ) {
        return new Promise (
            ( resolve, reject ) => Object.assign (
                store.index ( indexName ).openCursor ( keyRange ), {
                   onsuccess: event => { console.log ( event.target.result ); resolve ( event.target.result ) },
                   onerror: event => reject ( event.target.error )
                }
            )
        )
    }
}
~~~

^^^[Описание]

Когда мы первый раз создаем экземпляр класса,
• создается база данных **users**,
• создается хранилище **userStore** с ключом **name**,
• создаются индексы **birthIndex** и **hobbyIndex** по ключам **birthYear** и **hobby**, соответственно
• хранилище **userStore** наполняется данными, полученными с сервера

______________________

В конструкторе класса первая операция - это получение данных ( fetch ) по переданной конструктору ссылке ( **~url~** )
Ссылка на эти данные помещается в **~this.users~**
и далее вызывается унаследованный метод **openDB**
Этот метод создает запрос на открытие соединения с базой данных **users**
Если такой базы данных еще не существует, она будет создана,
произойдет событие **~upgradeneeded~** объекта запроса,
( т.е. автоматически будет создана транзакция типа **versionchange** ),
сработает колбэк **~onupgradeneeded~** объекта запроса,
т.е. будет вызван унаследованный метод **upgradeDB**
Этот метод просто проверяет наличие в базе данных хранилища **userStore**,
и если такого нет, вызывает унаследованый метод **createStore**
_______________

Метод **createStore** является асинхронной функцией,
которая создает хранилище **userStore** с ключом **name**,
создает индексы **birthIndex** и **hobbyIndex**
по ключам **birthYear** и **hobby** записей,
и затем помещает данные из **~this.users~** в хранилище
Транзакция типа **versionchange** закрывается,
происходит событие **success** объекта запроса на открытие соединения с базой данных,
срабатывает колбэк **onsuccess** объекта запроса,
и все "лишние" теперь данные удаляются с помощью унаследованного метода **clear**
_______________________________

^^После того, как хранилище, ключи и индексы созданы,^^
^^обновление схемы базы данных уже невозможно,^^
^^поэтому удаляются методы **createStore**  и **upgradeDB**,^^
^^а так же ненужный теперь **users**^^
_______________________________

^^При повторном создании экземпляра^^
^^( например, после нового запуска приложения )^^
^^будет устанавливаться соединение с существующей версией базы данных^^
__________________________________________

^^Главное, что наследует экземпляр класса **UsersDB** -^^
^^это интерфейсные методы **getAllData**, **getDataByIndex** и **getDataByKey**^^

^^^

Давайте создадим экземпляр класса **UsersDB**:

~~~js
let usersLocal = new UsersDB ( "https://garevna-json-server.glitch.me/users" )
~~~

__________________________________________________

![](https://cdn.glitch.com/a4e0a9fd-ea7b-47cf-b52a-48fd6359c559%2FindexedDB-index.gif)
___________________________________________

Проверим, как работают методы **getAllData**, **getDataByIndex** и **getDataByKey**

~~~js
usersLocal.getAllData()
    .then ( response => console.log ( response ) )
~~~

~~~console
▼ (2) [{…}, {…}]
  ► 0: {name: "Andry", birthYear: 1998, family: {…}, hobby: Array(1)}
  ► 1: {name: "Stephan", birthYear: 1995, family: {…}, hobby: Array(2)}
    length: 2
  ► __proto__: Array(0)
~~~

~~~js
usersLocal.getDataByKey( "Stephan" )
    .then ( response => console.log ( response ) )
~~~

~~~console
▼ {name: "Stephan", birthYear: 1995, family: {…}, hobby: Array(2)}
    birthYear: 1995
  ► family: {mother: {…}, father: {…}}
  ► hobby: (2) ["footbal", "fishing"]
    name: "Stephan"
  ► __proto__: Object
~~~

~~~js
usersLocal.getDataByIndex ( "birthIndex", 1998 )
    .then ( response => console.log ( response ) )
~~~

~~~console
▼ {name: "Andry", birthYear: 1998, family: {…}, hobby: Array(2)}
    birthYear: 1998
  ► family: {mother: {…}, father: {…}}
  ► hobby: (2) ["dancing"]
    name: "Stephan"
  ► __proto__: Object
~~~

~~~js
usersLocal.getDataByIndex( "hobbyIndex", "footbal" )
    .then ( response => console.log ( response ) )
~~~

~~~console
▼ {name: "Stephan", birthYear: 1995, family: {…}, hobby: Array(2)}
    birthYear: 1995
  ► family: {mother: {…}, father: {…}}
  ► hobby: (2) ["footbal", "fishing"]
    name: "Stephan"
  ► __proto__: Object
~~~

__________________________________________________

Что возвращает метод openCursor в случае успешного завершения запроса:

~~~console
▼ IDBCursorWithValue {value: {…}, source: IDBIndex, direction: "next", key: 1998, primaryKey: "Andry", …}
    direction: "next"
    key: 1998
    primaryKey: "Andry"
  ► request: IDBRequest {result: IDBCursorWithValue, error: null, source: IDBIndex, transaction: IDBTransaction, readyState: "done", …}
  ► source: IDBIndex {name: "birthIndex", objectStore: IDBObjectStore, keyPath: "birthYear", multiEntry: false, unique: false}
  ► value: {name: "Andry", birthYear: 1998, family: {…}, hobby: Array(1)}
  ► __proto__: IDBCursorWithValue
~~~

______________________________________________

◘◘![ico-20 cap] ** 7**◘◘

Нужно создать базу данных с хранилищами **lessonStore** и **topicStore**

Для создания базы данных мы будем использовать функцию **openDB**:

◘◘openDB◘◘

~~~js
const openDB = ( nameDB, verDB ) => new Promise (
    ( resolve, reject ) => {
        const request = indexedDB.open( nameDB, verDB )
        request.onupgradeneeded = request.onversionchange =
            request.onsuccess = event => resolve ( event )
        request.onerror = event => reject ( event.target.error.name )
    }
)
~~~

Для создания хранилищ мы будем использовать метод **createStore**

◘◘createStore◘◘

~~~js
const createStore = function ( storeName, options ) {
    if ( DB.objectStoreNames.contains( storeName ) ) return
    return DB.createObjectStore( storeName, options )
}
~~~

В хранилище **lessonStore** будут простые объекты с одним свойством - **_lesson_** ( строка )
Там будет храниться значение свойства **id** объекта из массива **lessons**

В хранилище **topicStore** будут объекты со свойствами:
• **_topic_** ( строка ) - название темы
• **_ref_** ( строка ) - ссылка на файл темы
• **_lesson_** ( индекс ) - ссылка на запись в хранилище **lessonStore**

Ссылка на запись в хранилище **lessons** нужна, чтобы избежать дублирования строки **_lesson_** в каждой записи хранилища

т.е. в хранилище **lessonStore** каждая запись должна иметь **уникальный** ключ

Мы можем сами создавать ключ каждый раз при добавлении новой записи

Но гораздо проще предоставить API генерировать ключи автоматически
Для этого при создании хранилища **lessonStore** нужно передать вторым аргументом следующее:

~~~js
let lessonStore = createStore ( "lessonStore", { autoIncrement: true } )
~~~

Это нужно сделать при создании хранилища

Теперь при добавлении новой записи в хранилище **lessonStore** будет автоматически генерироваться целочисленный ключ этой записи, значение которого можно использовать в качестве ссылки в записях хранилища **topicStore**

Однако мы должны обеспечить возможность найти нужную запись
в хранилище **lessonStore** по значению поля  **_lesson_**,
чтобы получить индекс записи

Для этого нам прийдется воспользоваться методом **createIndex**:

~~~js
lessonStore.createIndex( "lesson", "lesson", { unique: true } )
~~~

В свою очередь, каждая запись в хранилище **topicStore** также должна быть доступна по ключу

~~~js
let topicStore = createStore ( "topicStore", { autoIncrement: true } )
~~~

мы хотим обеспечить возможность выбирать из хранилища **topicStore** все записи, связанные с определенной записью хранилища **lessonStore**

Для этого нам нужно создать **индекс**

~~~js
topicStore.createIndex( "lesson", "lesson", { unique: false } )
~~~

Теперь можно создавать колбэк-функцию, которая будет обработчиком события **~success~** объекта запроса на создание ( открытие ) базы данных:

~~~js
let DB

let openDBCallback = event => {
    DB = event.target.result
    let lessonStore = createStore ( "lessonStore", { autoIncrement: true } )
    lessonStore.createIndex( "lesson", "lesson", { unique: true } )
    let topicStore = createStore ( "topicStore", { autoIncrement: true } )
    topicStore.createIndex( "topic", "topic", { unique: true } )
    topicStore.createIndex( "lesson", "lesson", { unique: false } )
}
~~~

Вызовем функцию **openDB**:

~~~js
openDB( "keywordsDB", 1 ).then (
    openDBCallback,
    err => console.warn ( err )
)
~~~

Соберем теперь весь код создания базы данных и создания хранилищ:

◘◘![ico-20 cap] ** 7**◘◘

~~~js
const openDB = ( nameDB, verDB ) => new Promise (
    ( resolve, reject ) => {
        const request = indexedDB.open( nameDB, verDB )
        request.onupgradeneeded = request.onversionchange =
            request.onsuccess = event => resolve ( event )
        request.onerror = event => reject ( event.target.error.name )
    }
)

let DB

const createStore = function ( storeName, options ) {
    if ( DB.objectStoreNames.contains( storeName ) ) return
    return DB.createObjectStore( storeName, options )
}

let openDBCallback = event => {
    DB = event.target.result
    let lessonStore = createStore ( "lessonStore", { autoIncrement: true } )
    lessonStore.createIndex( "lesson", "lesson", { unique: true } )
    let topicStore = createStore ( "topicStore", { autoIncrement: true } )
    topicStore.createIndex( "topic", "topic", { unique: true } )
    topicStore.createIndex( "lesson", "lesson", { unique: false } )
}

openDB( "keywordsDB", 1 ).then (
    openDBCallback,
    err => console.warn ( err )
)
~~~
