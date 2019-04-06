## <img src="https://avatars2.githubusercontent.com/u/19735284?s=40&v=4" width="30" title="Ⓒ Irina Fylyppova ( garevna ) 2019"/> Типы узлов дерева DOM

DOM представляет собой граф ( дерево ), вершины которого ( узлы, или **_nodes_** ) могут быть html-элементами, комментариями, обычным текстом...

Получить все дочерние узлы элемента DOM можно с помощью свойства  **`childNodes`**  этого элемента

:coffee:

```javascript
document.body.childNodes
document.querySelector ( "main" ).childNodes
```
Каждый узел ( объект )  имеет свойство  **_nodeType_**:

| Код | Тип узла | Пример |
|-|-|-|
| `1` | `ELEMENT_NODE` | `<div>` |
| `2` | `ATTRIBUTE_NODE` | `href = "https://translate.google.com/"` |
| `3` | `TEXT_NODE` | `document.body.appendChild ( new Text( "Hello" ) )` |
| `4` | `CDATA_SECTION_NODE` | |
| `5` | `ENTITY_REFERENCE_NODE` | |
| `6` | `ENTITY_NODE` | |
| `7` | `PROCESSING_INSTRUCTION_NODE` | |
| `8` | `COMMENT_NODE` | `<!-- ... -->` |
| `9` | `DOCUMENT_NODE` | `<html>...</html>` |
| `10` | `DOCUMENT_TYPE_NODE` | `<!DOCTYPE>` |
| `11` | `DOCUMENT_FRAGMENT_NODE` | |
| `12` | `NOTATION_NODE` | |

:coffee: :one:

Выполним код в консоли:
```javascript
document.body.appendChild ( new Text( "Hello" ) )
document.body.childNodes
```
Результат:
```console
▼ NodeList [text]
      0: text
      length: 1
    ► __proto__: NodeList
```
:coffee: :two:

```javascript
var style = document.createElement ( 'style' )
document.head.appendChild ( style )
style.innerText = `p { color: red; }`

var p = document.body.appendChild (
    document.createElement ( "p" )
)
p.innerText = "Hello!"

document.head.childNodes // ▶ NodeList [style]
document.head.childNodes[0].nodeType // 1
```
***
[:link: w3schools](https://www.w3schools.com/xml/dom_nodetype.asp)
