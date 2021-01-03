const sections = document.querySelectorAll('.nav-link')
const home_btn = document.querySelector('.home-btn');
const blog_btn = document.querySelector('.blog-btn');
const team_btn = document.querySelector('.team-btn');
const contact_btn = document.querySelector('.contact-btn');


const home_id = document.getElementById("home");
const blog_id = document.getElementById("blog");
const team_id = document.getElementById("team");
const contact_id = document.getElementById("contact");

// const hamburger = document.querySelector('.fa-bars')

let ok = false;

let phone = window.matchMedia("(min-width: 600px)");

sections.forEach(section => {
    section.addEventListener('click', () => {
        removerActiveClasses();
        section.classList.add('active-link')
        console.log("yeet");
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
            let x = window.matchMedia("(max-width: 1025px)");
            card.classList.add('active');
            card.classList.remove('animate');
            let index = Math.floor(i / 4) + 1;
            console.log(x);
            if (x.matches)
                index = Math.floor(i / 2) + 1;
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

let y = window.matchMedia("(max-height: 800px)");

if (!(logo_b.classList.contains('active') && logo_w.classList.contains('active'))) {
    if (phone.matches) {
        const val = window.scrollY;
        addActiveLink();
        h.classList.toggle("sticky", val > 90);

        if (val > 90) {
            logo_b.classList.add("active");
        } else {
            logo_b.classList.remove("active");
            logo_w.classList.add("active");
        }
    } else h.classList.add("sticky");
}

window.addEventListener('scroll', function() {
    addActiveLink();
    if (phone.matches) {
        h.classList.toggle("sticky", window.scrollY > 90);

        logo_b.classList.toggle("active", window.scrollY > 90);
        logo_w.classList.toggle("active", window.scrollY <= 90);
    }
});

function addActiveLink() {
    const triggerBottom = window.innerHeight / 5 * 3;

    const homeTop = home_id.getBoundingClientRect().top;
    const blogTop = blog_id.getBoundingClientRect().top;
    const teamTop = team_id.getBoundingClientRect().top;
    const contactTop = contact_id.getBoundingClientRect().top;

    removeActiveLinks();
    if (contactTop < triggerBottom)
        contact_btn.classList.add('active-link');
    else if (teamTop < triggerBottom)
        team_btn.classList.add('active-link');
    else if (blogTop < triggerBottom)
        blog_btn.classList.add('active-link');
    else if (homeTop < triggerBottom)
        home_btn.classList.add('active-link');

}

function removeActiveLinks() {
    home_btn.classList.remove('active-link');
    blog_btn.classList.remove('active-link');
    team_btn.classList.remove('active-link');
    contact_btn.classList.remove('active-link');
}

const showMenu = (toggleId, navId) => {
    const toggle = document.getElementById(toggleId),
        nav = document.getElementById(navId)

    if (toggle && nav) {
        toggle.addEventListener('click', () => {
            nav.classList.toggle('show-menu')
        })
    }
}
showMenu('nav-toggle', 'nav-menu')

// HIDE MENU
const navLink = document.querySelectorAll('.nav-link')

function linkAction() {
    const navMenu = document.getElementById('nav-menu')
    navMenu.classList.remove('show-menu')
}
navLink.forEach(n => n.addEventListener('click', linkAction))