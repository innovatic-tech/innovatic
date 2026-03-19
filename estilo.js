// Esta función es la que hace que los botones funcionen
function irA(id) {
    // 1. Buscamos todas las secciones (Inicio, Cursos, Contacto)
    const secciones = document.querySelectorAll('.seccion-pagina');
    
    // 2. Les quitamos la clase 'activa' a todas para que se oculten
    secciones.forEach(s => s.classList.remove('activa'));

    // 3. Buscamos la sección a la que queremos ir (ej: 'contacto')
    const destino = document.getElementById(id);
    
    // 4. Si existe, le ponemos la clase 'activa' para que se vea
    if (destino) {
        destino.classList.add('activa');
        // Esto hace que la página suba al inicio automáticamente
        window.scrollTo({ top: 0, behavior: 'smooth' });
    }

    // Opcional: Cerrar el menú móvil si está abierto
    const navMobile = document.getElementById('navLinksMobile');
    if (navMobile && navMobile.classList.contains('active')) {
        navMobile.classList.remove('active');
    }
}


// Función Menú Móvil (Hamburguesa Animada)
        function toggleMenu() {
            const menuBtn = document.getElementById('menuBtn');
            const navMobile = document.getElementById('navLinksMobile');
            
            menuBtn.classList.toggle('active');
            navMobile.classList.toggle('active');
        }

        // Navegación SPA
        function irA(seccionId){

    document.querySelectorAll('.seccion-pagina')
        .forEach(s => s.classList.remove('activa'));

    const nueva = document.getElementById(seccionId);

    if(nueva){
        nueva.classList.add('activa');
        window.scrollTo({ top: 0, behavior: 'smooth' });
    }
}

        // Integración WhatsApp
       function enviarWA() {
 
    const telefono = "593982792425"; // con código país
    const nombre = document.getElementById('nombre')?.value.trim();
    const edad = document.getElementById('edad')?.value.trim();
    const curso = document.getElementById('curso')?.value || "Información general";

    if(!nombre || !edad){
        mostrarAlerta("Por favor completa tu nombre y edad.");
        return;
    }

    const mensaje = 
`Hola equipo INNOVATIC 🚀

Quiero información para inscripción:

Nombre: ${nombre}
Edad: ${edad}
Curso: ${curso}

¿Podrían ayudarme con horarios y formas de pago?`;

    window.open(`https://wa.me/${telefono}?text=${encodeURIComponent(mensaje)}`, '_blank');
}
        const form = document.getElementById("formRegistro");
const mensaje = document.getElementById("mensajeEstado");

form.addEventListener("submit", async function(e) {
    e.preventDefault();

    const data = new FormData(form);

    try {
        const response = await fetch("https://formspree.io/f/xkoqybrl", {
            method: "POST",
            body: data,
            headers: {
                'Accept': 'application/json'
            }
        });

        if (response.ok) {
           const modal = document.getElementById("mensajeExito");
const loader = document.getElementById("loaderIcon");
const check = document.getElementById("checkIcon");
const texto = document.getElementById("textoMensaje");

modal.style.display = "flex";

loader.style.display = "block";
check.style.display = "none";
texto.textContent = "Enviando información...";

setTimeout(() => {
    loader.style.display = "none";
    check.style.display = "block";
    texto.innerHTML = "Mensaje enviado con éxito.<br>Nos contactaremos lo más rápido posible con usted.";
}, 1500);

setTimeout(() => {
    modal.style.display = "none";
}, 4000);

form.reset();
        } else {
            alert("Hubo un error al enviar el mensaje.");
        }

    } catch (error) {
        alert("Error de conexión.");
    }
});

function mostrarAlerta(texto){
    const alerta = document.getElementById("alertaCustom");
    alerta.textContent = texto;
    alerta.style.display = "block";

    setTimeout(()=>{
        alerta.style.display = "none";
    },3000);
}

function recomendarCurso() {

    const edad = document.getElementById("edadSelector").value;
    const interes = document.getElementById("interesSelector").value;
    const resultado = document.getElementById("resultadoCurso");

    if(!edad || !interes){
        resultado.innerHTML = "Por favor selecciona tu edad e interés.";
        return;
    }

    let recomendacion = "";

    if(edad === "nino" && interes === "robotica"){
        recomendacion = "Recomendado: Curso de Robótica Kids 🚀";
    }
    else if(edad === "nino" && interes === "programacion"){
        recomendacion = "Recomendado: Programación con Scratch 🖥️";
    }
    else if(edad === "joven" && interes === "programacion"){
        recomendacion = "Recomendado: Desarrollo Web y Lógica de Programación 💻";
    }
    else if(edad === "joven" && interes === "diseno"){
        recomendacion = "Recomendado: Diseño Gráfico Digital 🎨";
    }
    else if(edad === "adulto" && interes === "ofimatica"){
        recomendacion = "Recomendado: Ofimática Profesional y Excel 📊";
    }
    else if(edad === "adulto" && interes === "programacion"){
        recomendacion = "Recomendado: Programación Full Stack 💡";
    }
    else {
        recomendacion = "Te recomendamos una asesoría personalizada para elegir el mejor programa.";
    }

    resultado.innerHTML = recomendacion;
}

document.querySelectorAll(".faq-question").forEach(btn => {
    btn.addEventListener("click", () => {

        const answer = btn.nextElementSibling;

        document.querySelectorAll(".faq-answer").forEach(a => {
            if(a !== answer) a.style.display = "none";
        });

        answer.style.display =
            answer.style.display === "block" ? "none" : "block";
    });
});

function toggleMenu() {
    const menuBtn = document.getElementById('menuBtn');
    const navMobile = document.getElementById('navLinksMobile');
    
    menuBtn.classList.toggle('active');
    navMobile.classList.toggle('active');
}

function toggleMenu() {
    const menuBtn = document.getElementById('menuBtn');
    const navMobile = document.getElementById('navLinksMobile');
    
    menuBtn.classList.toggle('active');
    navMobile.classList.toggle('active');
}


function irA(idSeccion) {
  
    const secciones = document.querySelectorAll('.seccion-pagina');
    secciones.forEach(sec => sec.classList.remove('activa'));
    
    const seccionDestino = document.getElementById(idSeccion);
    if (seccionDestino) {
        seccionDestino.classList.add('activa');
    }

   
    const menuBtn = document.getElementById('menuBtn');
    const navMobile = document.getElementById('navLinksMobile');
    
  
    if (menuBtn.classList.contains('active')) {
        menuBtn.classList.remove('active');
        navMobile.classList.remove('active');
    }

    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    });
}


window.addEventListener('DOMContentLoaded', () => {
    const hash = window.location.hash.replace('#', ''); 
    
    if (hash) {
       
        setTimeout(() => {
            irA(hash); 
        }, 100);
    }

});

const scriptURL = 'https://script.google.com/macros/s/AKfycbxNqT3r_Haf3EbZSXWeAh-wYWCpzpQQntyQqAEWManOCbRdv5_LhKHQ58ohbIcm6Q-B/exec';
const form = document.getElementById('formRegistro');
const mensajeExito = document.getElementById('mensajeExito');

form.addEventListener('submit', e => {
    e.preventDefault();
    
    // Mostrar loader
    mensajeExito.style.display = 'flex';
    document.getElementById('loaderIcon').style.display = 'block';
    document.getElementById('checkIcon').style.display = 'none';
    document.getElementById('textoMensaje').innerText = 'Guardando datos...';

    fetch(scriptURL, { method: 'POST', body: new FormData(form)})
        .then(response => {
            // Cambiar loader por check de éxito
            document.getElementById('loaderIcon').style.display = 'none';
            document.getElementById('checkIcon').style.display = 'block';
            document.getElementById('textoMensaje').innerText = '¡Registro completado con éxito!';
            
            form.reset(); // Limpiar formulario

            // Ocultar modal después de 3 segundos
            setTimeout(() => {
                mensajeExito.style.display = 'none';
            }, 3000);
        })
        .catch(error => {
            console.error('Error!', error.message);
            alert('Hubo un error al enviar los datos.');
        });
});
