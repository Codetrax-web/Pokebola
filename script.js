const pokeball = document.getElementById("pokeball");


let abierta = false;



pokeball.addEventListener("click",()=>{


if(abierta) return;


abierta=true;



pokeball.classList.add("open");



});