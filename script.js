function crearDulce() {


    // Creamos un elemento nuevo

    let dulce = document.createElement("div");


    // Elegimos un dulce al azar

    let dulces = ["🕷️", "🍭", "🍫", "🍡", "🍬"];

    dulce.innerHTML = dulces[Math.floor(Math.random() * dulces.length)];


    // Damos estilo al dulce

    dulce.style.position = "fixed";

    dulce.style.top = "-50px";

    dulce.style.left = Math.random() * 100 + "vw";

    dulce.style.fontSize = (20 + Math.random() * 20) + "px";

    dulce.style.zIndex = "9999";

    dulce.style.pointerEvents = "none";


    // Agregamos el dulce a la página

    document.body.appendChild(dulce);


    // Elegimos la velocidad de caída

    let duracion = 3 + Math.random() * 4;


    // Hacemos que caiga

    dulce.animate(

        [

            { transform: "translateY(0) rotate(0deg)" },

            { transform: "translateY(110vh) rotate(360deg)" }

        ],

        {

            duration: duracion * 1000,

            easing: "linear"

        }

    );


    // Eliminamos el dulce cuando termina

    setTimeout(function () {

        dulce.remove();

    }, duracion * 1000);

}


// Creamos un dulce cada 300 milisegundos

setInterval(crearDulce, 300);

