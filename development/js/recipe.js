const showRecipies = document.querySelector(".recipes-add_recipe");

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