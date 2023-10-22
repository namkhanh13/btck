window.onscroll = function() {myFunction()};

function myFunction() {
  if (document.body.scrollTop > 50 || document.documentElement.scrollTop > 50) {
    document.querySelector(".nav2").style.position = "fixed";
    document.querySelector(".nav2").style.zIndex = "100000";
    document.querySelector(".nav2").style.backgroundColor = "#FFFFFF";
    document.querySelector(".nav2").style.width = "100%";
    document.querySelector(".nav2").style.right = "0px";
    document.querySelector(".nav2").style.left = "0px";
    document.querySelector(".nav2").style.top = "60px";
    document.querySelector(".nav2").style.padding = "30px 60px 0px 60px";


    document.querySelector(".header").style.position = "fixed";
    document.querySelector(".header").style.zIndex = "100000";
    document.querySelector(".header").style.backgroundColor = "#FFFFFF";
    document.querySelector(".header").style.width = "100%";
    document.querySelector(".header").style.right = "0px";
    document.querySelector(".header").style.left = "0px";



  } else {
    console.log(document.body.scrollTop, document.documentElement.scrollTop)
    document.querySelector(".header").style.position = "";
    document.querySelector(".nav2").style.position = "";
    document.querySelector(".nav2").style.padding = "30px 0px 0px 0px";

  }
}

// document.querySelectorAll(".nav2 li a").addEventListener("click", function() {
//   alert("Please select");

//   document.querySelector(".nav2 li a").classList.add("active");
// } )
function handleClickItem (index) {
  localStorage.setItem("active", index);
  if (index == 1){
    window.location.href = "/hotel.html";
  } 
  else if (index == 0){
    window.location.href = "/island.html";
  }
  else if (index ==  2){
    window.location.href = "/Cities.html";
  }
  else if (index == 3){
    window.location.href = "/beach.html";
  }
  else if (index == 4){
    window.location.href = "/nature.html";
  }
  else if (index == 5){
    window.location.href = "/tropical.html";
  }
  else if (index == 6){
    window.location.href = "/farm.html";
  }
  const getDom = document.querySelectorAll(".nav2 li button");
  if (getDom.length > 0) {
    for (let i = 0; i < getDom.length; i++) {
      getDom[i].classList.remove("active");
    }
    getDom[index].classList.add("active");
  }
  
}

// function openPage(pageName) {
//   var i, tabcontent, nav2;
//   tabcontent = document.getElementsByClassName("tabcontent");
//   for (i = 0; i < tabcontent.length; i++) {
//     tabcontent[i].style.display = "none";
//   }
//   tablinks = document.getElementsByClassName("nav2");
//   for (i = 0; i < tablinks.length; i++) {
//     tablinks[i].style.backgroundColor = "";
//   }
//   document.getElementById(pageName).style.display = "block";
//   elmnt.style.backgroundColor = color;
// }

// // Get the element with id="defaultOpen" and click on it
// document.getElementById("defaultOpen").click();

const indexTab = localStorage.getItem("active");
const indexElement = Number(indexTab);
const getDom = document.querySelectorAll(".nav2 li button");
if (getDom.length > 0) {
  for (let i = 0; i < getDom.length; i++) {
    getDom[i].classList.remove("active");
  }
  getDom[indexElement].classList.add("active");
}

function handleSubmit () {
  const email = document.querySelector(".email").value;
  console.log("Email: " + email);
  alert("Please enter", email)
}