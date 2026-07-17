const poke = document.getElementById("pokeball");

const message =
document.getElementById("message");

const photos =
document.getElementById("photos");

const text =
document.getElementById("text");



poke.addEventListener("click",()=>{


poke.classList.add("open");


text.innerHTML="✨ La Pokébola se abrió ✨";



setTimeout(()=>{


message.style.display="block";


},1200);



setTimeout(()=>{


photos.style.display="block";


},2500);



});
