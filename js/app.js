"use strict"

document.addEventListener("DOMContentLoaded", function(){
    
    let liste = document.querySelector("ul");
    let iPlus = document.querySelector('.plus');
    let input = creationInput();

    if(localStorage.length != 0){
        for (let index = 0; index < localStorage.length; index++) {    
            let newItem = creationListeItem(localStorage.getItem("tache"+index));
            ajouterDOM(liste, newItem);
        }
    }

    document.querySelector("body").addEventListener("click", function(event){
        event.stopPropagation();
        let target = event.target;

        let tasks = document.querySelectorAll("span");
        for (let index = 0; index < tasks.length; index++) {
            const element = tasks[index];
    
            if(target == element){
                toggleClass(iPlus, "fa-plus");
                toggleClass(iPlus, "fa-pen");
                toggleClass(input, "hide");
                toggleClass(iPlus, "creaItem");
                
                let li = element.parentNode;
                li.replaceWith(input);
                input.value = element.innerText;
                
            }
        }

        if(target == iPlus){
            toggleClass(iPlus, "fa-plus");
            toggleClass(iPlus, "fa-check");
            toggleClass(iPlus, "creaItem");
            toggleItem(input);
            ajouterDOM(liste, input);
            
            if(input.value != ""){
              ajouterDOM(liste, creationListeItem(input.value))
              input.value = '';
            }

            let items = document.querySelectorAll("span");
            for (let index = 0; index < items.length; index++) {
                const element = items[index];
                localStorage.setItem("tache" + index, element.innerHTML);
            }

            return;
        }

        let cercle = document.querySelectorAll(".far");
        boucleCercle(cercle, target);

        let poubelle = document.querySelectorAll(".fa-trash");
        boucleTrash(poubelle, target)

    })

    let tasks = document.querySelectorAll("li > span");
    let pencil = document.querySelectorAll(".fa-pencil-alt");
    for (let index = 0; index < tasks.length; index++) { 
        for (let index = 0; index < pencil.length; index++) {
            const element = tasks[index];
            const elm = pencil[index];

            element.addEventListener("mouseenter", function(){
                curseur(element, "pointer");
                elm.classList.remove("hide")
            })

            element.addEventListener("mouseleave", function(){
                curseur(element, "auto");
                elm.classList.add("hide") 
            })
        }    
    }


    document.querySelector("body").addEventListener("mouseover", function(event){
        event.stopPropagation();
        let target = event.target;

        if(target == iPlus){
            curseur(iPlus, "pointer");
        }

        let cercle = document.querySelectorAll(".far");
        for (let index = 0; index < cercle.length; index++) {
            const element = cercle[index];
            if(target == element){
                curseur(element, "pointer");
            }
        }

        let poubelle = document.querySelectorAll(".fa-trash");
        for (let index = 0; index < poubelle.length; index++) {
            const element = poubelle[index];
            if(target == element){
                curseur(element, "pointer");
            } 
        }

    })

});

