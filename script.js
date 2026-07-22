// Elementos principales

const pokeball = document.getElementById("pokeball");

const openBtn = document.getElementById("openBtn");

const resetBtn = document.getElementById("resetBtn");


const music = document.getElementById("music");  // ✅ CORRECTO

const openSound = document.getElementById("openSound");



// Estado

let abierto = false;



// Función abrir regalo

function abrirPokebola(){

    if(abierto) return;

    abierto = true;


    // La Pokébola tiembla primero
    pokeball.classList.add("shaking");


    // Después de 1.5 segundos se detiene el temblor y se abre
    setTimeout(() => {

        pokeball.classList.remove("shaking");

        pokeball.classList.add("open");


        // Sonido de apertura
        openSound.currentTime = 0;

        openSound.play().catch(() => {

            console.log("El navegador bloqueó el sonido");

        });


        // Música
        music.volume = 0.4;

        music.play().catch(() => {

            console.log("La música necesita interacción");

        });

    }, 1500);

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
