// Elementos principales

const pokeball = document.getElementById("pokeball");

const openBtn = document.getElementById("openBtn");

const resetBtn = document.getElementById("resetBtn");


const music = document.getElementById("music");

const openSound = document.getElementById("openSound");



// Estado

let abierto = false;



// Función abrir regalo

function abrirPokebola(){


    if(abierto) return;


    abierto = true;


    // activar animación CSS

    pokeball.classList.add("open");



    // sonido de apertura

    openSound.currentTime = 0;

    openSound.play()
    .catch(()=>{

        console.log("El navegador bloqueó el sonido");

    });



    // música

    music.volume = 0.4;

    music.play()
    .catch(()=>{

        console.log("La música necesita interacción");

    });



}



// Botón abrir

openBtn.addEventListener("click",()=>{

    abrirPokebola();

});



// También abre tocando la Pokébola

pokeball.addEventListener("click",()=>{

    abrirPokebola();

});




// Reiniciar

resetBtn.addEventListener("click",()=>{


    abierto=false;


    pokeball.classList.remove("open");


    // detener sonidos

    openSound.pause();

    openSound.currentTime=0;



    music.pause();

    music.currentTime=0;



});