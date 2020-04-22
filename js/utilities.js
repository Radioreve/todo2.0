"use strict"

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
    let icone = document.createElement('i');
    let trash = document.createElement('i');
    let pen = document.createElement('i');
    icone.classList.add("far", "fa-circle");
    trash.classList.add("fas", "fa-trash", "delete", "hide");
    pen.classList.add("fas", "fa-pencil-alt", "update", "hide");

    span.append(valeurInput);
    li.append(span);
    li.append(icone);
    icone.append(trash);
    icone.append(pen);
    return li;
}

function addId(startArray, endArray, idName){
    startArray.forEach((newItem, index) => {
        newItem.id = idName+index
        endArray.push(document.querySelector("#"+newItem.id))
    })
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

