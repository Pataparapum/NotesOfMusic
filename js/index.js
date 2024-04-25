/**
 * Js para tranajar en las funciones del index y experimentar
 */


/**
 * Declaracion de variables principales
 */
var folders = document.getElementById('foldersNote');
var notesFolder = document.getElementsByClassName('botonNoteFold')
var countFold = 1;
var countNote = 1;
var count = 1;
/**
 * Funcion que crea el evento para crear notas o carpetas
 */
function createEventNoteFold(){
    for (let noteFold of notesFolder){
        noteFold.addEventListener('click', createNoteFoldEvent);
    }
}

/**
 * Funcion que setea los elementos pedido por los parametros:
 * @param {*} div 
 * @param {*} button 
 * @param {*} i 
 * @param {*} ul 
 */
function elementSetAttribute(div, button ,i ,ul){
    div.setAttribute('id',`bloque${count}`);
    div.setAttribute('class','bloqueNoteFold col-3 btn-group dropend');

    button.setAttribute('type','button');
    button.setAttribute('class','boton btn btn-secondary dropsown-toggle');
    button.setAttribute('data-bs-toggle','dropdown');
    button.setAttribute('aria-expanded','false');
    button.setAttribute('id',`boton${count}`);

    i.setAttribute('id',`fol${count}`);
    i.setAttribute('class', 'fa-solid fa-plus nuevoNoteFold');

    ul.setAttribute('class','dropdown-menu menuNoteFold');
    ul.setAttribute('id',`ul${count}`);
}

/**
 * Funcion que setea los atributos del elemento li
 * 
 * @param {*} liFold 
 * @param {*} liNote 
 * @param {*} liFoldButton 
 * @param {*} liNoteButton 
 */
function liSetAttribute(liFold, liNote, liFoldButton, liNoteButton){
    liFold.setAttribute('class','noteFold border-bottom border-secondary');
    liFoldButton.setAttribute('type','button');
    liFoldButton.setAttribute('class','botonNoteFold btn');
    liFoldButton.innerText = "Carpeta"

    liNote.setAttribute('class','noteFold');
    liNoteButton.setAttribute('type','button');
    liNoteButton.setAttribute('class','botonNoteFold btn');
    liNoteButton.innerText = "Nota";
}

/**
 * Funcion que crea un nuevo bloque de nota o carpeta
 */
function createBlockNoteFold() {
    count += 1
    let divBloque = document.createElement('div');
    let buttonNoteFold = document.createElement('button');
    let imageNoteFold = document.createElement('i');
    let ulDropdowMenu = document.createElement('ul');

    let liFold = document.createElement('li')
    let liFoldButton = document.createElement('button');

    let liNote = document.createElement('li');
    let liNoteButton = document.createElement('button');

    elementSetAttribute(divBloque, buttonNoteFold, imageNoteFold, ulDropdowMenu)
    liSetAttribute(liFold, liNote, liFoldButton, liNoteButton);
    
    liFold.appendChild(liFoldButton);
    liNote.appendChild(liNoteButton);

    ulDropdowMenu.appendChild(liFold);
    ulDropdowMenu.appendChild(liNote);

    buttonNoteFold.appendChild(imageNoteFold);

    divBloque.appendChild(buttonNoteFold);
    divBloque.appendChild(ulDropdowMenu);

    folders.appendChild(divBloque);
}

/**
 * Funcion que setea los atributos del boton y cambia los del i
 * para cambiar el hecho de que ya no crea nuevos elementos
 * sino que es uno nuevo
 * @param {*} i 
 * @param {*} button 
 * @param {*} noteFold 
 */
function changeBlockNoteFold(i,button,noteFold) {

    if (noteFold == 'Carpeta'){
        button.setAttribute('type','button');
        button.setAttribute('class','boton btn btn-secondary')
        button.setAttribute('id','buttonFold')
        button.setAttribute('href','./fold.html')
        i.setAttribute('class',"fa-solid fa-folder-open nuevoNoteFold");
        i.setAttribute('id',`fold${countFold}`);
        button.appendChild(i)
    } else if (noteFold == 'Nota') {
        button.setAttribute('type','button');
        button.setAttribute('class','boton btn btn-secondary')
        button.setAttribute('id','buttonNote')
        button.setAttribute('href','./note.html')
        i.setAttribute('class','fa-regular fa-file-lines nuevoNoteFold');
        i.setAttribute('id',`note${countNote}`);
        button.appendChild(i)
    };

    countFold += 1;
    countNote += 1;
}

/**
 * Evento de creacion de nota o carpeta
 * @param {*} event 
 */
function createNoteFoldEvent(event) {
    var noteFold = event.target
    let i = document.getElementById(`fol${count}`);
    let div = document.getElementById(`bloque${count}`);
    let button = document.getElementById(`boton${count}`);
    let ul = document.getElementById(`ul${count}`);
    let buttonOpenNoteFold = document.createElement('a')

    changeBlockNoteFold(i,buttonOpenNoteFold,noteFold.innerText);

    createBlockNoteFold();
    createEventNoteFold();

    div.removeChild(ul)
    div.removeChild(button);

    div.appendChild(buttonOpenNoteFold);
     
}

createEventNoteFold();

