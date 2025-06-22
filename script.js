// Animación testimonios y FAQ, más scroll-to-top y slider auto
document.addEventListener("DOMContentLoaded", () => {
    // Testimonios slider
    const cards = document.querySelectorAll('.testimonio-card');
    let idx = 0;
    function showTestimonio(n){
        cards.forEach((c,i)=>c.classList.toggle('active',i===n));
    }
    document.querySelector('.next')?.addEventListener('click',()=>{
        idx = (idx+1)%cards.length; showTestimonio(idx);
    });
    document.querySelector('.prev')?.addEventListener('click',()=>{
        idx = (idx-1+cards.length)%cards.length; showTestimonio(idx);
    });
    // Slide automático cada 6 segundos
    setInterval(()=>{
        idx = (idx+1)%cards.length; showTestimonio(idx);
    },6000);

    // FAQ animado
    document.querySelectorAll('.faq-question').forEach(btn=>{
        btn.addEventListener('click',function(){
            const item = this.closest('.faq-item');
            item.classList.toggle('active');
        });
    });

    // Scroll to top button
    const scrollBtn = document.getElementById('scrollTopBtn');
    window.onscroll = () => {
        if(window.scrollY > 250) scrollBtn.classList.add('show');
        else scrollBtn.classList.remove('show');
    };
    scrollBtn.onclick = () => window.scrollTo({top:0, behavior:'smooth'});
});
// MODO OSCURO
const darkBtn = document.getElementById('darkModeToggle');
const moon = document.getElementById('moonIcon');
const sun = document.getElementById('sunIcon');

// Estado inicial (por preferencia previa o sistema)
if (localStorage.getItem('darkMode') === 'true' || (window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches)) {
    document.body.classList.add('dark-mode');
    moon.style.display = 'none';
    sun.style.display = 'inline';
} else {
    document.body.classList.remove('dark-mode');
    sun.style.display = 'none';
    moon.style.display = 'inline';
}

darkBtn?.addEventListener('click', () => {
    document.body.classList.toggle('dark-mode');
    const isDark = document.body.classList.contains('dark-mode');
    localStorage.setItem('darkMode', isDark);
    if (isDark) {
        moon.style.display = 'none';
        sun.style.display = 'inline';
    } else {
        sun.style.display = 'none';
        moon.style.display = 'inline';
    }
});
// ---- Partículas Hero ----
document.addEventListener("DOMContentLoaded", () => {
    const canvas = document.getElementById('heroParticles');
    if(canvas) {
        const ctx = canvas.getContext('2d');
        let w, h, particles = [];
        function resize() {
            w = canvas.width = document.querySelector('.hero-section').offsetWidth;
            h = canvas.height = document.querySelector('.hero-section').offsetHeight;
        }
        function createParticles() {
            particles = [];
            for(let i=0; i<36; i++) {
                particles.push({
                    x: Math.random()*w,
                    y: Math.random()*h,
                    r: 7+Math.random()*9,
                    dx: (Math.random()-0.5)*0.8,
                    dy: (Math.random()-0.5)*0.8,
                    a: 0.22+Math.random()*0.19
                });
            }
        }
        function draw() {
            ctx.clearRect(0,0,w,h);
            particles.forEach(p=>{
                ctx.beginPath();
                ctx.arc(p.x,p.y,p.r,0,2*Math.PI);
                ctx.fillStyle = `rgba(253,198,59,${p.a})`;
                ctx.shadowColor = "#fdc63b";
                ctx.shadowBlur = 12;
                ctx.fill();
                ctx.shadowBlur = 0;
                p.x += p.dx; p.y += p.dy;
                if(p.x<0||p.x>w) p.dx*=-1;
                if(p.y<0||p.y>h) p.dy*=-1;
            });
            requestAnimationFrame(draw);
        }
        resize(); createParticles(); draw();
        window.addEventListener('resize', ()=>{resize(); createParticles();});
    }
});

// ---- Counter Animado ----
document.addEventListener("DOMContentLoaded", () => {
    const counters = document.querySelectorAll('.counter');
    let shown = false;
    function runCounters() {
        if(shown) return;
        counters.forEach(counter=>{
            const update=()=>{
                const target=+counter.getAttribute('data-target');
                let current = +counter.innerText.replace("+","");
                let inc = Math.max(1, Math.floor(target/60));
                if(current < target) {
                    counter.innerText = current+inc > target ? target : current+inc;
                    setTimeout(update,15);
                } else {
                    counter.innerText = target;
                    if(target>100) counter.innerText = "+"+target;
                }
            };
            update();
        });
        shown = true;
    }
    function isInViewport(el) {
        const rect = el.getBoundingClientRect();
        return rect.top<window.innerHeight && rect.bottom>0;
    }
    function check() {
        const sec = document.querySelector('.counter-section');
        if(sec && isInViewport(sec)) runCounters();
    }
    window.addEventListener('scroll', check);
    setTimeout(check, 600);
});

// ---- Animación tarjetas al scrollear ----
document.addEventListener("DOMContentLoaded", () => {
    const elems = document.querySelectorAll('.servicio-card, .galeria-item, .counter-item');
    function showVisible() {
        elems.forEach(el=>{
            const rect = el.getBoundingClientRect();
            if(rect.top < window.innerHeight-50) el.classList.add('visible');
        });
    }
    window.addEventListener('scroll', showVisible);
    setTimeout(showVisible, 400);
});
