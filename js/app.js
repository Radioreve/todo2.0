"use strict"

document.addEventListener("DOMContentLoaded", function(){
    
    let liste = document.querySelector("ul");
    let iPlus = document.querySelector('.plus');
    let input = creationInput();

    document.querySelector("body").addEventListener("click", function(event){
        event.stopPropagation();
        let target = event.target;
        
        if(target == iPlus){
            toggleClass(iPlus, "fa-plus");
            toggleClass(iPlus, "fa-check");
            toggleItem(input);
            ajouterDOM(liste, input);
            
            if(input.value != ""){
              ajouterDOM(liste, creationListeItem(input.value))
              input.value = '';
            }

            return;
        }

        let cercle = document.querySelectorAll(".far");
        boucleCercle(cercle, target);

        let poubelle = document.querySelectorAll(".fa-trash");
        boucleTrash(poubelle, target)

        let tasks = document.querySelectorAll("li");
        boucleTask(tasks, target);

        let save1 = document.querySelector(".cookies");
        if(target == save1){
            let currentliste = document.querySelectorAll("li");
            for (let index = 0; index < currentliste.length; index++) {
                const element = currentliste[index];
                let item = element.firstChild.innerText;
                let cooks = creationCookies("liste", item);
                alert(cooks);
            }
        }

        let save2 = document.querySelector(".storage");
        let items = document.querySelectorAll("span");
        if(target == save2){
            for (let index = 0; index < items.length; index++) {
                const element = items[index];
                let task = { id: + index, tache: + "" + element.innerHTML + "" };
                setItem(index, task);
                let course = getItem(index);
                todoItems.push(course);
            }
            if(todoItems.length != 0){
               alert("Liste enregistrée avec succès") 
            }
            
        } 
        
    })

    
    document.querySelector("body").addEventListener("mouseover", function(event){
        event.stopPropagation();
        let target = event.target;

        let iPlus = document.querySelector(".plus");
        let save1 = document.querySelector(".cookies");
        let save2 = document.querySelector(".storage");

        if(target == iPlus || target == save1 || target == save2){
            curseur(iPlus, "pointer");
            curseur(save1, "pointer");
            curseur(save2, "pointer");
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









