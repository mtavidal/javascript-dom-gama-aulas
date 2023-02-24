
// Selecionar elemento
let container = document.querySelector('.container');
console.log("Elemento selecionado: ", container);

// Pegar nodos filhos (conta todos os nodos, elementos mais texto, itens, enter, tudo - nesse caso 9 (4 elementos +5 espaços /n))
let containerChilds = container.childNodes;
console.log("childNodes: ", containerChilds);

// Pegar primeiro nodo filho da lista (pegou o enter, pois não considera só element0)
let firstNode = container.firstChild;
console.log("firstChild: ", firstNode);

// Pegar o nome do nodo (pode pegar texto ou elemento) -> voltou o nome DIV
let nodeName = container.nodeName;
console.log("nodeName: ", nodeName);

// Pegar valor (texto) do nodo (o nodo em questao é a DIV, que não tem valor, nao tem texto (container.nodeValue) por isso pegou o buttom(node de posição 3))
let nodeValue = container.childNodes[3].firstChild.nodeValue;
console.log("nodeValue: ", nodeValue);

// Pegar o tipo elemento
let elemType = container.nodeType;
console.log("nodeType: ", elemType); // 1 - Element / 2 - Attr

// Pegar o elemento "pai"
let parentElem = container.parentElement;
console.log("parentElement: ", parentElem);

// Pegar primeiro elemento filho
let firstChildElem = container.firstElementChild;
console.log("firstElementChild: ", firstChildElem);

// Pegar o último elemento filho
let lastChildElem = container.lastElementChild;
console.log("lastElementChild: ", lastChildElem);