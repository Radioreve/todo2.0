"use strict"

document.addEventListener("DOMContentLoaded", function(){
    
    let liste = document.querySelector("ul");
    let iPlus = document.querySelector('.plus');
    let input = creationInput();
    let circleList = []
    let textList = []
    let trashList = []
    let itemsList = []
    let penList = []
    let num = 0
    

    if(localStorage.length != 0){
        for (let index = 0; index < localStorage.length; index++) {    
            if(localStorage.getItem("tache"+index) != null){
                let newItem = creationListeItem(localStorage.getItem("tache"+index));
                liste.append(newItem);
                //Sélection des éléments
                let check = document.querySelector("#check"+num)
                let text = document.querySelector("#text"+num)
                let trash = document.querySelector("#trash"+num)
                let item = document.querySelector("#item"+num)
                let pen = document.querySelector("#pen"+num)

                //Placement des élément dans un tableau
                circleList.push(check)
                textList.push(text)
                trashList.push(trash)
                itemsList.push(item)
                penList.push(pen)

                num++
            }  
        }
    }

    document.querySelector("body").addEventListener("click", function(event){
        event.stopPropagation();
        let target = event.target;

        //Ajouter un item à la liste
        if(target === iPlus){
            iPlus.classList.toggle("fa-plus");
            iPlus.classList.toggle("fa-check");
            iPlus.classList.toggle("creaItem");
            input.classList.toggle("hide");
            liste.append(input);
            
            if(input.value != ""){
                let newLi = creationListeItem(input.value)
                liste.append(newLi)

                //Sélection des éléments
                let check = document.querySelector("#check"+num)
                let text = document.querySelector("#text"+num)
                let trash = document.querySelector("#trash"+num)
                let item = document.querySelector("#item"+num)
                let pen = document.querySelector("#pen"+num)

                //Placement des élément dans un tableau
                circleList.push(check)
                textList.push(text)
                trashList.push(trash)
                itemsList.push(item)
                penList.push(pen)

                //Remise à zéro de la valeur d'input
                input.value = ''

                //incrémentation de num
                num++
            }
            
            //Stocker l'item dans le localStorage
            let items = document.querySelectorAll("span");
            items.forEach((singleItem, index) => {
                localStorage.setItem("tache" + index, singleItem.innerHTML)
            })

            return;
        }
        
        //Modification d'un item
        let tasks = document.querySelectorAll("span");
        tasks.forEach(element =>{
            if(target === element){
                iPlus.classList.toggle("fa-plus");
                iPlus.classList.toggle("fa-pen");
                input.classList.toggle("hide");
                iPlus.classList.toggle("creaItem");
                
                let li = element.parentNode;
                li.replaceWith(input);
                input.value = element.innerText;
                
            }
        }) 

        //Valider un cercle
        circleList.forEach((singleCircle, index) =>{
            if(target === document.querySelector("#check"+index)){
                validatedCircle(singleCircle)
            }
        })

        //Rayer l'item
        textList.forEach((singleTask, index) => {
            if(target === document.querySelector("#check"+index)){
                checkItem(singleTask)
            }
        })

        //Afficher la poubelle
        trashList.forEach((singleTrash, index) =>{
            if(target === document.querySelector("#check"+index)){
                showTrash(singleTrash)
            }
        })
        
        //Supprimer un item
        itemsList.forEach((singleItem, index) => {
            if(target === document.querySelector("#trash"+index)){
                singleItem.remove()
            }
        })

    })


    document.querySelector("body").addEventListener("mouseover", function(event){
        event.stopPropagation();
        let target = event.target;
        
        //Changer le curseur
        if(target === iPlus){
            iPlus.style.cursor = "pointer";
        }

        circleList.forEach((singleCircle, index) =>{
            if(target === document.querySelector("#check"+index)){
                singleCircle.style.cursor = "pointer"
            }
        })

        textList.forEach((singleTask, index) => {
            if(target === document.querySelector("#text"+index)){
                singleTask.style.cursor = "pointer"
            }
        })

        trashList.forEach((singleTrash, index) =>{
            if(target === document.querySelector("#trash"+index)){
                singleTrash.style.cursor = "pointer"
            }
        })
        
        //Affichage du stylo
       penList.forEach((singlePen, index) => {
            if(target === document.querySelector("#text"+index)){
                singlePen.classList.remove("hide") 
            }else if (target != document.querySelector("#text"+index)){
                singlePen.classList.add("hide")
            }
        })

    })

});