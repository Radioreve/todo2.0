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
    icone.classList.add("far", "fa-circle");
    trash.classList.add("fas", "fa-trash", "delete", "hide");

    ajouterDOM(span, valeurInput);
    ajouterDOM(li, span);
    ajouterDOM(li, icone);
    ajouterDOM(icone, trash);
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
            let answer = prompt("Voulez-vous vraiment supprimer cette tâche? O/N");
            
            if(answer == "O"){
                let item = element.parentNode;
                let listeItem = item.parentNode;
                listeItem.remove();
            }
        }
        
        
    }
}

function boucleTask(tableau, cible){
    for (let index = 0; index < tableau.length; index++) {
        const element = tableau[index];

        if(cible == element){
            toggleClass(iPlus, "fa-plus");
            toggleClass(iPlus, "fa-pen");
            toggleClass(input, "hide");
            
            element.replaceWith(input);
            input.value = element.innerText;

        }
        
    }
}

function curseur(qui, quoi){
    return qui.style.cursor = quoi;
}

function creationCookies(nom, quoi){
    let date = new Date(Date.now() + 86400000);
    date = date.toUTCString();

    return document.cookie = nom + "=" + quoi + " " + date; //les cookies seront supprimés un jour après la date de la création

}


/* function creationStorage(){
    let currentListe = document.querySelectorAll('li');
    for (let index = 0; index < currentListe.length; index++) {
        const element = currentListe[index];
        localStorage.setItem("liste", element);
    }
    setListe();
}

function setListe(){
    let savedListe = localStorage.getItem('liste');
    let liste = document.querySelector('ul');
    for (let index = 0; index < savedListe.length; index++) {
        const element = savedListe[index];
        ajouterDOM(liste, element);
        
    }
} */