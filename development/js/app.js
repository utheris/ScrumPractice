// 2.3_Przechowywanie_i_dodawanie_imienia

function callme(){
  let name = document.getElementById('inputName').value;
  localStorage.setItem('userName', name);
  location.reload()
}

function logout(){
  localStorage.setItem('userName', "");
  location.reload()
}

window.onload = function() {
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