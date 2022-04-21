const nav = document.querySelector("nav"),
toggleBtn = nav.querySelector(".toggle-btn");

toggleBtn.addEventListener("click" , () =>{
nav.classList.toggle("open");
});

function click({movementY}) { 
const navStyle = window.getComputedStyle(nav),
  navTop = parseInt(navStyle.top), 
  navHeight = parseInt(navStyle.height), 
  windHeight = window.innerHeight; 

nav.style.top = navTop > 0 ? `${navTop + movementY}px` : "1px";
if(navTop > windHeight - navHeight){
nav.style.top = `${windHeight - navHeight}px`;
}
}

//this function will call when user click mouse's button and  move mouse on nav
nav.addEventListener("mousedown", () =>{
nav.addEventListener("mousemove", click);
});

//these function will call when user relase mouse button and leave mouse from nav
nav.addEventListener("mouseup", () =>{
nav.removeEventListener("mousemove", click);
});
nav.addEventListener("mouseleave", () =>{
nav.removeEventListener("mousemove", click);
});