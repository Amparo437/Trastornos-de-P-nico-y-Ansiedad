// =========================
// SCROLL SUAVE
// =========================

document.querySelectorAll('nav a').forEach(link => {

    link.addEventListener('click', function(e){

        e.preventDefault();

        const destino = document.querySelector(this.getAttribute('href'));

        destino.scrollIntoView({
            behavior: 'smooth'
        });

    });

});

// =========================
// CAMBIO DE NAVBAR
// =========================

const header = document.querySelector("header");

window.addEventListener("scroll", () => {

    if(window.scrollY > 50){

        header.style.background = "#ffffff";
        header.style.boxShadow = "0 5px 20px rgba(0,0,0,.15)";

    }else{

        header.style.background = "#ffffffee";
        header.style.boxShadow = "0 3px 10px rgba(0,0,0,.1)";

    }

});

// =========================
// ANIMACIÓN AL APARECER
// =========================

const elementos = document.querySelectorAll(
".card, .item, .paso, .grid div, .tabla, .info"
);

const observar = new IntersectionObserver((entradas)=>{

    entradas.forEach(entrada=>{

        if(entrada.isIntersecting){

            entrada.target.style.opacity = "1";
            entrada.target.style.transform = "translateY(0)";

        }

    });

},{
    threshold:0.2
});

elementos.forEach(el=>{

    el.style.opacity="0";
    el.style.transform="translateY(40px)";
    el.style.transition="all .8s ease";

    observar.observe(el);

});

// =========================
// BOTÓN VOLVER ARRIBA
// =========================

const boton = document.createElement("button");

boton.innerHTML = "↑";

boton.id = "topButton";

document.body.appendChild(boton);

boton.style.position = "fixed";
boton.style.bottom = "30px";
boton.style.right = "30px";
boton.style.width = "50px";
boton.style.height = "50px";
boton.style.border = "none";
boton.style.borderRadius = "50%";
boton.style.background = "#2b7a78";
boton.style.color = "white";
boton.style.fontSize = "22px";
boton.style.cursor = "pointer";
boton.style.display = "none";
boton.style.boxShadow = "0 5px 15px rgba(0,0,0,.3)";
boton.style.transition = ".3s";

window.addEventListener("scroll",()=>{

    if(window.scrollY > 500){

        boton.style.display="block";

    }else{

        boton.style.display="none";

    }

});

boton.onclick = ()=>{

    window.scrollTo({

        top:0,
        behavior:"smooth"

    });

};