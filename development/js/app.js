// 2.3_Przechowywanie_i_dodawanie_imienia

function callme() {
  let name = document.getElementById('inputName').value;
  localStorage.setItem('userName', name);
  location.reload()
}

function logout() {
  localStorage.setItem('userName', "");
  location.reload()
}

window.onload = function () {
  document.getElementById('user_name').innerText = "Witaj, " + localStorage.getItem('userName');
  if (localStorage.userName !== "") {
    document.getElementById("first_entry").style.visibility = "hidden";
  }
};
// Koniec 2.3_Przechowywanie_i_dodawanie_imienia

const recipeAddButton = document.querySelector(".button--recipe-add");
const planAddButton = document.querySelector(".button--plan-add");
const widgetCloseButton = document.querySelectorAll(".division--close-button");
const divisionsWidgetWindow = document.querySelectorAll("[class*=divisions--]");
const weeknumspan = document.querySelector(".weekplan--info_weeknum");
const prevWeekButton = document.querySelector(".weekplan--buttons-prevweek");
const nextWeekButton = document.querySelector(".weekplan--buttons-nextweek");

console.log(
  recipeAddButton,
  planAddButton,
  widgetCloseButton,
  divisionsWidgetWindow
);

// Te przyciski do dorobienia jak będzie dodawanie przepisu i dodawanie planu
// recipeAddButton.addEventListener('click', function () {
//     if (windowpopupname.style.display = none) {
//         windowpopupname.style.display = block;
//     }
// });

// planAddButton.addEventListener('click', function () {
//     if (windowpopupname2.style.display = none) {
//         windowpopupname2.style.display = block;
//     }
// });

//Opcja z forEach...
// widgetCloseButton.forEach(function (e) {
//     e.addEventListener('click', function () {
//         e.parentElement.style.display = 'none';
//     });
// })

for (let i = 0; i < widgetCloseButton.length; i++) {
  widgetCloseButton[i].addEventListener("click", function (e) {
    this.parentElement.style.display = "none";
  });
}

//Obliczanie tygodnia
const now = new Date();
const start = new Date(now.getFullYear(), 0, 0);
const diff =
  now -
  start +
  (start.getTimezoneOffset() - now.getTimezoneOffset()) * 60 * 1000;
const oneday = 1000 * 60 * 60 * 24;
let numberofweek = Math.floor(diff / oneday / 7);

prevWeekButton.addEventListener("click", function () {
  numberofweek--;
  weeknumspan.innerText = numberofweek;
});
nextWeekButton.addEventListener("click", function () {
  numberofweek++;
  weeknumspan.innerText = numberofweek;
});
weeknumspan.innerText = numberofweek;

//Dodawanie przepisu logika 
const recipename = document.querySelector(".recipe-name_input");
const recipeabout = document.querySelector(".recipe-about_input");
const instructionList = document.querySelector(".instructions-list");
const instructioninput = document.querySelector(".instructions-input");
const indigrientsList = document.querySelector(".indigrients-list");
const indigrientsinput = document.querySelector(".indigrients_input");
const addInstruction = document.querySelector(".instructions-add");
const addIndigrients = document.querySelector(".indigrients-add");

// <i class="fas fa-trash-alt"></i> - śmietnik
// <i class="fas fa-edit"></i> - edycja planu
// <i class="far fa-save"></i> - save icon
//  let newSaveIcon = document.createElement("i"); - ikonka zapisu
addInstruction.addEventListener('click', function (e) {
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
  newSpan.innerText = instructioninput.value;
  newLi.appendChild(newSpan);
  newLi.appendChild(newEditIcon);
  newLi.appendChild(newSaveIcon);
  newLi.appendChild(newTrashIcon);
  instructioninput.value = "";
  instructionList.appendChild(newLi);
  newTrashIcon.addEventListener('click', function () {
    this.parentElement.style.display = "none";
  });
  newEditIcon.addEventListener('click', function () {
    this.previousSibling.contentEditable = "true";
    newEditIcon.style.display = "none";
    newSaveIcon.style.display = "inline";
  });
  newSaveIcon.addEventListener('click', function () {
    this.previousSibling.previousSibling.contentEditable = "false";
    newSaveIcon.style.display = "none";
    newEditIcon.style.display = "inline";
  });
});

addIndigrients.addEventListener('click', function (e) {
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
  newSpan.innerText = indigrientsinput.value;
  newLi.appendChild(newSpan);
  newLi.appendChild(newEditIcon);
  newLi.appendChild(newSaveIcon);
  newLi.appendChild(newTrashIcon);
  indigrientsList.appendChild(newLi);
  indigrientsinput.value = "";
  newTrashIcon.addEventListener('click', function () {
    this.parentElement.style.display = "none";
  });
  newEditIcon.addEventListener('click', function () {
    this.previousSibling.contentEditable = "true";
    newEditIcon.style.display = "none";
    newSaveIcon.style.display = "inline";
  });
  newSaveIcon.addEventListener('click', function () {
    this.previousSibling.previousSibling.contentEditable = "false";
    newSaveIcon.style.display = "none";
    newEditIcon.style.display = "inline";
  });

});