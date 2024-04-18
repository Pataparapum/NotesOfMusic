/**
 * Js para tranajar en las funciones del index y experimentar
 */

var folders = document.getElementById('foldersNote');
var notesFolder = document.getElementsByClassName('botonNoteFold')
var count = 1;

function createNoteFoldEvent(){
    for (let noteFold of notesFolder){
        noteFold.addEventListener('click', experimento);
    }
}

function divSetAttribute(div){
    div.setAttribute('id',`bloque${count}`);
    div.setAttribute('class','bloqueNoteFold col-3 btn-group dropend');
}

function buttonNoteFoldSetAttribute(button){
    button.setAttribute('type','button');
    button.setAttribute('class','boton btn btn-secondary dropsown-toggle');
    button.setAttribute('data-bs-toggle','dropdown');
    button.setAttribute('aria-expanded','false');
}

function iSetAttribute(i){
    i.setAttribute('id',`fol${count}`);
    i.setAttribute('class', 'fa-solid fa-plus nuevoNoteFold');
}

function ulSetAttribute(ul){
    ul.setAttribute('class','dropdown-menu menuNoteFold');
}

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

    divSetAttribute(divBloque);
    buttonNoteFoldSetAttribute(buttonNoteFold);
    iSetAttribute(imageNoteFold);
    ulSetAttribute(ulDropdowMenu);
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

function experimento(event) {
    let noteFold = event.target;
    let i = document.getElementById(`fol${count}`);

    if (noteFold.innerText == 'Carpeta'){
        i.setAttribute('class',"fa-solid fa-folder-open nuevoNoteFold");
    } else if (noteFold.innerText == 'Nota') {
        i.setAttribute('class','fa-regular fa-file-lines nuevoNoteFold')
    }
    
    
    createBlockNoteFold();
    createNoteFoldEvent();

    
}

createNoteFoldEvent();

