//Selectors

//Id selector

const list = document.getElementById("list");

//list.style.backgroundColor = "#b30";

//===============================================================================

//Class selector

const item = document.getElementsByClassName("item");
item[0].style.color = "#f00";
item[1].textContent = "Hello DOM!";
item[2].innerHTML = "Hello <strong>DOM!</strong>";

//===============================================================================

//Tag selector

const tag = document.getElementsByTagName("h1");
tag[0].innerHTML = "This is Tag Selector";

//===============================================================================

//Query selector

const query = document.querySelector("h1");
query.style.color = "#00f";

const items = document.querySelectorAll(".item");
items[1].style.color = "#00f";

const para = document.querySelector("#para");
para.style.color = "#00f";

//===============================================================================


// document.querySelector(".btn").onclick = function() {
//     document.querySelector("h1").innerText = "This is ChangeOver";
//     document.querySelector("#list li:first-child").style.color = "#00f";

// };

// document.querySelector(".box").addEventListener("mouseover", myFun);
// document.querySelector(".box").addEventListener("mouseout", myFun);

// function myFun(event) {
//     console.log(event.type);
// };

// document.querySelector("#sel").addEventListener("change", changeAction);

// function changeAction(event) {
//     console.log(event.target.value);
// };

//===============================================================================