const sections =[
    document.getElementById("Web-Development"),
    document.getElementById("UI-UX-Design"),
    document.getElementById("Graphic-Design"),
    document.getElementById("Digital-Marketing")
];

function hideallsections (){
    sections.forEach(section =>{
        section.style.display = "none";
    });
}
const btnweb=document.getElementById("web");
const btnui=document.getElementById("ui");
const btngraphic=document.getElementById("graphic");
const btnmarketing=document.getElementById("digital");
const courses =document.getElementById("courses");
btnweb.addEventListener("click", ()=> {
    hideallsections ();
    document.getElementById("Web-Development").style.display="block";
    courses.style.display="none";
})
btnui.addEventListener("click", ()=> {
    hideallsections ();
    document.getElementById("UI-UX-Design").style.display="block";
    courses.style.display="none";
})
btngraphic.addEventListener("click", ()=> {
    hideallsections ();
    document.getElementById("Graphic-Design").style.display="block";
    courses.style.display="none";
})
btnmarketing.addEventListener("click", ()=> {
    hideallsections ();
    document.getElementById("Digital-Marketing").style.display="block";
    courses.style.display="none";
})

 window.addEventListener("scroll", () => {
  const about = document.querySelector("#about");
  const coursescard = document.querySelector("#courses .cards");
  const screenHeight = window.innerHeight;

    const rectabout = about.getBoundingClientRect();
    const rectcourses = courses.getBoundingClientRect();
    if (rectabout.top < screenHeight - 100) {
        about.classList.add("animationabout");
      }
      if (rectcourses.top < screenHeight - 100) {
        coursescard.classList.add("animationcards");
      }
    })

const btns =document.querySelectorAll(".btn");
btns.forEach(btn => {
    btn.addEventListener("click", ()=> {
    hideallsections ();
    courses.style.display= "block";
})
})

const menu = document.getElementById("mobile-menu");
const menubtn= document.getElementById("menu-icon");
const menua =document.querySelectorAll(".mobile-menu a");
const animation ="animation-menu";
menubtn.addEventListener("click", () => {
 if (menu.style.display === "flex") {
    menu.style.display = "none";
    menua.forEach(link =>{link.style.display="none"});
  } 
  else {
    menu.style.display = "flex";
    menua.forEach(link =>{link.style.display="flex"});
    menu.classList.add(animation);
  }
})