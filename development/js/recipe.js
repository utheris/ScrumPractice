const showRecipies = document.querySelector(".recipes-add_recipe");
const addRcpBtn = document.querySelector(".recipes-add_recipe");

window.onload = function showArllRecipes(e) {
    e.preventDefault();
    const recipeTable = document.querySelector(".recipes--table");
    var allRecipes = JSON.parse(localStorage.getItem("recipes"));
    allRecipes.forEach(function (singleRecipe) {
        let newRow = document.createElement("tr");
        let newIdTd = document.createElement("td");
        let newNameTd = document.createElement("td");
        let newAboutTd = document.createElement("td");
        let newActionTd = document.createElement("td");
        let editBtn = document.createElement("i");
        let trashBtn = document.createElement("i");
        newIdTd.innerText = singleRecipe.id;
        newNameTd.innerText = singleRecipe.title;
        newAboutTd.innerText = singleRecipe.description;
        trashBtn.className = "fas fa-trash-alt";
        trashBtn.style.color = "red";
        trashBtn.style.fontSize = "24px";
        editBtn.className = "fas fa-edit";
        editBtn.style.color = "gold";
        editBtn.style.fontSize = "24px";
        newActionTd.appendChild(editBtn);
        newActionTd.appendChild(trashBtn);
        newRow.appendChild(newIdTd);
        newRow.appendChild(newNameTd);
        newRow.appendChild(newAboutTd);
        newRow.appendChild(newActionTd);
        newRow.appendChild(newActionTd)
        trashBtn.addEventListener("click", function () {
            this.parentElement.parentElement.style.display = "none";
        });
        recipeTable.appendChild(newRow);
    });
};

//Dodawanie przepisu logika
const recipename = document.querySelector(".recipe-name_input");
const recipeabout = document.querySelector(".recipe-about_input");
const instructionList = document.querySelector(".instructions-list");
const instructioninput = document.querySelector(".instructions-input");
const indigrientsList = document.querySelector(".indigrients-list");
const indigrientsinput = document.querySelector(".indigrients_input");
const addInstruction = document.querySelector(".instructions-add");
const addIndigrients = document.querySelector(".indigrients-add");
const saveExitBtn = document.querySelector(".btn-closensave");
// <i class="fas fa-trash-alt"></i> - śmietnik
// <i class="fas fa-edit"></i> - edycja planu
// <i class="far fa-save"></i> - save icon
//  let newSaveIcon = document.createElement("i"); - ikonka zapisu
addInstruction.addEventListener("click", function (e) {
    e.preventDefault();
    let newLi = document.createElement("li");
    let newSpan = document.createElement("span");
    let newTrashIcon = document.createElement("i");
    let newEditIcon = document.createElement("i");
    let newSaveIcon = document.createElement("i");
    newTrashIcon.className = "fas fa-trash-alt";
    newTrashIcon.style.color = "red";
    newEditIcon.className = "fas fa-edit";
    newEditIcon.style.color = "gold";
    newEditIcon.style.margin = "0 5px";
    newSaveIcon.className = "far fa-save";
    newSaveIcon.style.color = "blue";
    newSaveIcon.style.display = "none";
    newSaveIcon.style.margin = "0 5px";

    if (instructioninput.value == "") {
        alert("Wpisz instrukcje ziomek");
    } else {
        newSpan.innerText = instructioninput.value;
        newLi.appendChild(newSpan);
        newLi.appendChild(newEditIcon);
        newLi.appendChild(newSaveIcon);
        newLi.appendChild(newTrashIcon);
        instructioninput.value = "";
        instructionList.appendChild(newLi);
        newTrashIcon.addEventListener("click", function () {
            this.parentElement.style.display = "none";
        });
        newEditIcon.addEventListener("click", function () {
            this.previousSibling.contentEditable = "true";
            newEditIcon.style.display = "none";
            newSaveIcon.style.display = "inline";
        });
        newSaveIcon.addEventListener("click", function () {
            this.previousSibling.previousSibling.contentEditable = "false";
            newSaveIcon.style.display = "none";
            newEditIcon.style.display = "inline";
        });
        newRecipe.instructions.push(newSpan.innerText);
    }
});

addIndigrients.addEventListener("click", function (e) {
    e.preventDefault();
    let newLi = document.createElement("li");
    let newSpan = document.createElement("span");
    let newTrashIcon = document.createElement("i");
    let newEditIcon = document.createElement("i");
    let newSaveIcon = document.createElement("i");
    newTrashIcon.className = "fas fa-trash-alt";
    newTrashIcon.style.color = "red";
    newEditIcon.className = "fas fa-edit";
    newEditIcon.style.color = "gold";
    newEditIcon.style.margin = "0 5px";
    newSaveIcon.className = "far fa-save";
    newSaveIcon.style.color = "blue";
    newSaveIcon.style.display = "none";
    newSaveIcon.style.margin = "0 5px";
    if (indigrientsinput.value == "") {
        alert("Wpisz nazwę produktu");
    } else {
        newSpan.innerText = indigrientsinput.value;
        newLi.appendChild(newSpan);
        newLi.appendChild(newEditIcon);
        newLi.appendChild(newSaveIcon);
        newLi.appendChild(newTrashIcon);
        indigrientsList.appendChild(newLi);
        indigrientsinput.value = "";
        newTrashIcon.addEventListener("click", function () {
            this.parentElement.style.display = "none";
        });
        newEditIcon.addEventListener("click", function () {
            this.previousSibling.contentEditable = "true";
            newEditIcon.style.display = "none";
            newSaveIcon.style.display = "inline";
        });
        newSaveIcon.addEventListener("click", function () {
            this.previousSibling.previousSibling.contentEditable = "false";
            newSaveIcon.style.display = "none";
            newEditIcon.style.display = "inline";
        });
        newRecipe.ingidients.push(newSpan.innerText);
    }
});
//LocalStorage
// let allRecipies = [];

let newRecipe = {
    id: null,
    title: "",
    description: "",
    ingidients: [],
    instructions: [],
};
let dataFromLocalStorage = [];
// function saveRecipeToLocalStorage(object) {
//   let allRecipies = [];
//   if​ (localStorage.getItem(​"recipes"​) != ​null​) {
//     allRecipies = ​JSON​.parse(localStorage.getItem(​"recipes"​));
//     allRecipies.push(object);
//     localStorage.setItem("recipes", JSON.stringify(allRecipies));
//   } else {
//     allRecipies.push(object);
//     localStorage.setItem(​"recipes"​, ​JSON​.stringify(allRecipies));
//   }
// }
function saveRecipeToLocalStorage(newObject) {
    if (localStorage.getItem("recipes") != null) {
        dataFromLocalStorage = JSON.parse(localStorage.getItem("recipes"));
        dataFromLocalStorage.push(newObject);
        localStorage.setItem("recipes", JSON.stringify(dataFromLocalStorage));
    } else {
        dataFromLocalStorage.push(newObject);
        localStorage.setItem("recipes", JSON.stringify(dataFromLocalStorage));
    }
    alert("Przepis zapisany do localStorage");
}
saveExitBtn.addEventListener("click", function (e) {
    e.preventDefault();
    if (JSON.parse(localStorage.getItem("recipes")) == null) {
        newRecipe.id = 1;
    } else {
        newRecipe.id = JSON.parse(localStorage.getItem("recipes")).length + 1;
    }

    newRecipe.title = recipename.value;
    newRecipe.description = recipeabout.value;
    // newRecipe.ingidients.push(indigrientsList);
    // newRecipe.instructions.push(instructionList);
    saveRecipeToLocalStorage(newRecipe);
    document.querySelector(".recipes").style.display = "flex";
    document.querySelector(".add-recipe").style.display = "none";
    window.location.reload(true);
    console.log("zapisano", newRecipe);
});

addRcpBtn.addEventListener('click', function (e) {
    e.preventDefault();
    document.querySelector(".recipes").style.display = "none";
    document.querySelector(".add-recipe").style.display = "block";
})