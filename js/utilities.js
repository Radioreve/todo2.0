"use strict"

let index = 0

/******* FUNCTIONS ********/

function creationInput(){
    let input = document.createElement("input");
    input.classList.add("hide");
    input.setAttribute("type", "text");
    return input;
}

function creationListeItem(valeurInput){
    let li = document.createElement('li'); 
    let span = document.createElement('span');
    let check = document.createElement('i');
    let trash = document.createElement('i');
    let pen = document.createElement('i');
    check.classList.add("far", "fa-circle");
    trash.classList.add("fas", "fa-trash", "delete", "hide");
    pen.classList.add("fas", "fa-pencil-alt", "update", "hide");

    //Ajout ids
    li.id = "item"+index
    span.id = "text"+index
    check.id = "check"+index
    trash.id = "trash"+index
    pen.id = "pen"+index

    span.append(valeurInput);
    li.append(span);
    li.append(check);
    check.append(trash);
    check.append(pen);
    
    index++

    return li;
}

function checkItem(item){
    item.classList.toggle("done");
}

function validatedCircle(iconeCircle){
    iconeCircle.classList.toggle("fa-circle");
    iconeCircle.classList.toggle("fa-check-circle");
    iconeCircle.classList.toggle("validated")
}

function showTrash(iconeTrash){
    iconeTrash.classList.toggle("hide");
}