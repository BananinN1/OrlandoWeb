// 1. Notificaciones de "Venta Reciente" (Simulación de Social Proof)
const sales = [
    { name: "Carlos de Comas", book: "La Biblia de RM" },
    { name: "Lucía de S.J.L", book: "Pack Ciencias DECO" },
    { name: "Ricardo de Surco", book: "Letras Imparables" },
    { name: "Jimena de Breña", book: "Fijas Medicina" }
];

const notification = document.getElementById('sale-notification');
const saleText = document.getElementById('sale-text');

function showSale() {
    const randomSale = sales[Math.floor(Math.random() * sales.length)];
    saleText.innerHTML = `<b>${randomSale.name}</b> acaba de comprar <i>"${randomSale.book}"</i>`;
    notification.classList.add('active');
    
    setTimeout(() => {
        notification.classList.remove('active');
    }, 5000);
}

// Iniciar notificaciones cada 15 segundos
setInterval(showSale, 15000);
setTimeout(showSale, 3000); // Primera carga

// 2. Rotador de Hero Text (Más dinámico)
const titles = [
    "Asegura tu vacante con las fijas",
    "Estudia con el Método DECO",
    "Libros hechos por cachimbos",
    "Tu nombre en el periódico hoy"
];
let i = 0;
setInterval(() => {
    const el = document.getElementById("hero-text");
    el.style.opacity = 0;
    setTimeout(() => {
        i = (i + 1) % titles.length;
        el.textContent = titles[i];
        el.style.opacity = 1;
    }, 500);
}, 4000);

// 3. Scroll Reveal Pro
const observerOptions = { threshold: 0.2 };
const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.opacity = "1";
            entry.target.style.transform = "translateY(0)";
        }
    });
}, observerOptions);

document.querySelectorAll('.reveal').forEach(el => {
    el.style.opacity = "0";
    el.style.transform = "translateY(50px)";
    el.style.transition = "0.8s ease-out";
    observer.observe(el);
});

function scrollToId(id) {
    document.getElementById(id).scrollIntoView({ behavior: 'smooth' });
}

// Añadir al final de tu script.js

// 1. Efecto Parallax en el Hero
document.addEventListener("mousemove", (e) => {
    const glow = document.querySelector(".circle-glow");
    const x = e.clientX / window.innerWidth;
    const y = e.clientY / window.innerHeight;
    
    glow.style.transform = `translate(${x * 50}px, ${y * 50}px)`;
});

// 2. Navbar cambiante al hacer Scroll
window.addEventListener("scroll", () => {
    const nav = document.querySelector(".nav");
    if (window.scrollY > 50) {
        nav.style.background = "rgba(5, 5, 6, 0.95)";
        nav.style.height = "70px";
        nav.style.borderBottom = "1px solid var(--primary)";
    } else {
        nav.style.background = "transparent";
        nav.style.height = "80px";
        nav.style.borderBottom = "1px solid rgba(255,255,255,0.05)";
    }
});

// 3. Simulación de "X personas están viendo este libro ahora"
function updateViewers() {
    const indicator = document.querySelector(".live-indicator");
    const baseCount = 140;
    const variation = Math.floor(Math.random() * 20);
    indicator.innerHTML = `<span class="dot"></span> ${baseCount + variation} Estudiantes online`;
}
setInterval(updateViewers, 5000);


// Añadir efecto de aparición al hacer scroll (Intersection Observer)
const revealElements = document.querySelectorAll('.reveal');
const scrollObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('visible');
        }
    });
}, { threshold: 0.1 });

revealElements.forEach(el => scrollObserver.observe(el));

// Mostrar el mensaje de WhatsApp automáticamente a los 5 segundos
setTimeout(() => {
    const msg = document.querySelector('.wa-message');
    if(msg) msg.style.opacity = "1";
    if(msg) msg.style.transform = "translateX(0)";
}, 5000);

// Notificaciones de venta mejoradas
const localSales = [
    { name: "Anderson de S.M.P", book: "La Biblia de RM" },
    { name: "Maria de Los Olivos", book: "Letras Imparables" },
    { name: "Kevin de Ate", book: "Pack Ciencias DECO" }
];

setInterval(() => {
    const notification = document.getElementById('sale-notification');
    const text = document.getElementById('sale-text');
    const random = localSales[Math.floor(Math.random() * localSales.length)];
    
    text.innerHTML = `<b>${random.name}</b> acaba de comprar <i>"${random.book}"</i>`;
    notification.classList.add('active');
    
    setTimeout(() => notification.classList.remove('active'), 5000);
}, 20000);