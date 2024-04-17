/**
 * Js para tranajar en las funciones del index y experimentar
 */

var folders = document.getElementById('foldersNote');
var count = 1;

function createNoteFoldEvent(){
    for (let boton of button){
        boton.addEventListener('click', experimento);
    }
}

function createBlockNoteFold() {
    count += 1
    let div = document.createElement('div');
    let i = document.createElement('i');
    div.setAttribute('id','bloque');
    div.setAttribute('class','col-3');
    i.setAttribute('id',`fol${count}`);
    i.setAttribute('class', 'fa-solid fa-plus nuevoNoteFold');
    div.appendChild(i);
    folders.appendChild(div);
}

function experimento(event) {
    createBlockNoteFold();
    let id = event.target;
    id.setAttribute('class','fa-solid fa-folder carpeta');
    createNoteFoldEvent()
    id.removeEventListener('click',experimento);
}

createNoteFoldEvent();

