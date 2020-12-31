const sections = document.querySelectorAll('.nav-link')
const home_btn = document.querySelector('.home-btn');
const blog_btn = document.querySelector('.blog-btn');
const team_btn = document.querySelector('.team-btn');
const contact_btn = document.querySelector('.contact-btn');

let ok = false;

sections.forEach(section => {
    section.addEventListener('click', () => {
        removerActiveClasses()
        section.classList.add('active-link')
    })
})

function removerActiveClasses() {
    sections.forEach(section => {
        section.classList.remove('active-link');
    })
}

let root = document.documentElement;
const cards = document.querySelectorAll('.team-content')
const container = document.querySelector('body')
let active = document.querySelector('.active')


for (const [i, card] of cards.entries()) {
    card.addEventListener('click', () => {
        removerActiveClass()
        if (active != card) {
            ok = true;
            card.classList.add('active');
            card.classList.remove('animate');
            let index = Math.floor(i / 4) + 1;
            root.style.setProperty('--start-row', index);
            var elDistanceToTop = window.pageYOffset + card.getBoundingClientRect().top - 150;
            window.scrollTo(0, elDistanceToTop);
            active = card;
        } else {
            active = null;
        }
    })
}


container.addEventListener('click', () => {
    console.log(window.scrollY);
    if (ok == false) {
        removerActiveClass()
    }
    ok = false;
})


function removerActiveClass() {
    cards.forEach(card => {
        if (card == active)
            card.classList.remove('active');
        card.classList.add('animate');
    })
}

const sr = ScrollReveal({
    origin: 'top',
    distance: '30px',
    duration: 2200,
});

sr.reveal('.home__data, .human, form, .team-content, .blog__content, .contact-data, .contact-button, .footer-content', {
    interval: 200
})

const logo_b = document.querySelector('.logoblack');
const logo_w = document.querySelector('.logowhite');
const h = document.querySelector('nav');


if (!(logo_b.classList.contains('active') && logo_w.classList.contains('active'))) {
    home_btn.classList.toggle('active-link', window.scrollY <= 1200);
    blog_btn.classList.toggle('active-link', window.scrollY > 1200 && window.scrollY <= 2200);
    team_btn.classList.toggle('active-link', window.scrollY > 2200 && window.scrollY <= 4950);
    contact_btn.classList.toggle('active-link', window.scrollY > 4950);
    const val = window.scrollY;
    h.classList.toggle("sticky", val > 90);
    if (val > 90) {
        logo_b.classList.add("active");
    } else {
        logo_w.classList.add("active");
    }
}

window.addEventListener('scroll', function() {
    home_btn.classList.toggle('active-link', window.scrollY <= 1200);
    blog_btn.classList.toggle('active-link', window.scrollY > 1200 && window.scrollY <= 2200);
    team_btn.classList.toggle('active-link', window.scrollY > 2200 && window.scrollY <= 4950);
    contact_btn.classList.toggle('active-link', window.scrollY > 4950);

    h.classList.toggle("sticky", window.scrollY > 90);

    logo_b.classList.toggle("active", window.scrollY > 90);
    logo_w.classList.toggle("active", window.scrollY <= 90);
});