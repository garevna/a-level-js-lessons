[footer]: https://github.com/garevna/js-course/raw/master/images/a-level-ico.png?raw=true
[me30]: https://raw.githubusercontent.com/garevna/a-level-js-lessons/master/ico/myPhoto-30.png "Ⓒ Irina Fylyppova ( garevna ) 2019"
[ico20]: https://raw.githubusercontent.com/garevna/a-level-js-lessons/master/ico/a-level-20.png
[ico25]: https://raw.githubusercontent.com/garevna/a-level-js-lessons/master/ico/a-level-25.png
[hw-30]: https://raw.githubusercontent.com/garevna/a-level-js-lessons/master/ico/briefcase-30.png
[cap-30]: https://raw.githubusercontent.com/garevna/a-level-js-lessons/master/ico/coffee-30.png
[warn-25]: https://raw.githubusercontent.com/garevna/a-level-js-lessons/master/ico/warning-25.png
[link-25]: https://raw.githubusercontent.com/garevna/a-level-js-lessons/master/ico/link-25.png
[err-20]: https://raw.githubusercontent.com/garevna/a-level-js-lessons/master/ico/no_entry-20.png
[err-25]: https://raw.githubusercontent.com/garevna/a-level-js-lessons/master/ico/no_entry-25.png
[err-30]: https://raw.githubusercontent.com/garevna/a-level-js-lessons/master/ico/no_entry-30.png

# ![me30] API

**_Application Programming Interface_** ( **API** ) позволяет двум системам взаимодействовать друг с другом

Каждый API имеет документацию и спецификации, которые определяют способ передачи информации

API-интерфейсы могут использовать HTTP-запросы для получения информации от веб-приложения или веб-сервера
***
## ![ico25] web service

:clipboard: **SOA** — **_Service Oriented Architecture_** — сервис-ориентированная архитектура веб-приложений ( набор архитектурных принципов )

:clipboard: **RPC** — **_Remote Procedure Call_** — удаленный вызов процедуры

:clipboard: **Сервис** ( service ) — это набор операций, принимающих запрос ( _Request_ ) и выдающих ответ ( _Response_ )

:clipboard: **Веб-сервис** — идентифицируемая веб-адресом программная система со стандартизированными интерфейсами

Веб-сервисы могут взаимодействовать друг с другом и со сторонними приложениями посредством сообщений, основанных на определённых протоколах

Наибольшее распространение получили следующие протоколы реализации веб-сервисов:

* **SOAP**    ( _Simple Object Access Protocol_ )
* **REST**    ( _Representational State Transfer_ )
* **XML-RPC** ( _XML Remote Procedure Call_ )

Основной принцип **REST** заключается в ограничении набора операций — используются только операции **CRUD** ( `Create` `Read` `Update` `Delete` )

Архитектурный стиль **REST** в большинстве случаев подразумевает использование протокола HTTP

Поэтому команды CRUD преобразованы в  HTTP-методы  **POST** — **GET** — **PUT** — **DELETE**

_____________________________________________________________________________________________

### ![ico25] SOAP vs REST

**_API_** обычно классифицируются как **SOAP** или **REST**, и оба используются для доступа к веб-сервисам

* **SOAP**: для обмена сообщениями используется формат XML
* **REST**:  для получения или отправки информации используются URL-адреса

**REST** использует четыре разных HTTP 1.1 глагола ( `GET`, `POST`, `PUT` и `DELETE` )

В отличие от SOAP, REST не обязательно должен использовать XML для предоставления ответа

Существуют веб-сервисы на основе REST, которые выводят данные в формате:

        Command Separated Value ( CSV )
        JavaScript Object Notation ( JSON )
        Really Simple Syndication ( RSS )

Можно получить результат в формате, который легче парсить на языке вашего приложения

________________________________________________________________________

## ![ico25] API  endpoints

API работают по принципу «запрос» — «ответ»

Место, куда отправляется запрос, называется конечной точкой ( **_endpoint_** )

:clipboard: **_endpoint_** — это один из концов канала коммуникации

**_endpoint_** указывают, к каким ресурсам можно получить доступ с помощью API

_________________________________________________________

![footer]
