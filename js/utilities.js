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

    ajouterDOM(span, valeurInput);
    ajouterDOM(li, span);
    ajouterDOM(li, icone);
    ajouterDOM(icone, trash);
    ajouterDOM(icone, pen);
    return li;
}

function togglePlus(){
    let iPlus = document.querySelector('.plus');
    return iPlus.classList.toggle("fa-plus");
}

function toggleCheck(){
    let iPlus = document.querySelector('.plus');
    return iPlus.classList.toggle("fa-check");
}

function toggleItem(quoi){
    return quoi.classList.toggle("hide");
}

function toggleClass(qui, quoi){
    return qui.classList.toggle(quoi);
}

function ajouterDOM(ou, quoi){
    return ou.append(quoi);
}

function boucleCercle(tableau, cible){
    for (let index = 0; index < tableau.length; index++) {
        const element = tableau[index];
        
        if(cible == element){
            let span = element.previousSibling;
            let trash = element.firstChild;
            toggleClass(span, "done");
            toggleClass(element, "fa-circle");
            toggleClass(element, "fa-check-circle");
            toggleClass(element, "validated")
            toggleClass(trash, "hide");
        }

    }
    
}

function boucleTrash(tableau, cible){
    for (let index = 0; index < tableau.length; index++) {
        const element = tableau[index];
        
        if(cible == element){
            
            let item = element.parentNode;
            let listeItem = item.parentNode;
            listeItem.remove();
            localStorage.removeItem("tache"+index);
            
        }
        
        
    }
}

function curseur(qui, quoi){
    return qui.style.cursor = quoi;
}
