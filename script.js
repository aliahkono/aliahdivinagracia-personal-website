// Activate Menu Button //
let menuBtn = document.querySelector('#menu-btn');
let menuBar = document.querySelector('.menu-bar');

menuBtn.onclick = () => {
    menuBtn.classList.toggle('bx-x');
    menuBar.classList.toggle('active');
}

// Let's remove menu-bar on scrool //
window.onscroll = () => {
    menuBtn.classList.remove('bx-x');
    menuBar.classList.remove('active');
}

// Open tab //
var tablinks = document.getElementsByClassName("tab-links");
var tabcontents = document.getElementsByClassName("tab-contents");

function opentab(tabname){
    for(tablink of tablinks){
        tablink.classList.remove("active-link");
    }
    for(tabcontent of tabcontents){
        tabcontent.classList.remove("active-tab");
    }
    event.currentTarget.classList.add("active-link");
    document.getElementById(tabname).classList.add("active-tab")
}

// Scroll Reveal //

ScrollReveal({
    reset: true,
    distance: '100px',
    duration: 2000,
    delay: 200,
});

// Scroll Reveal Animations //

ScrollReveal().reveal('.home-bio h1, .about-col-1, .logo-con', {origin: 'left'});
ScrollReveal().reveal('.home-bio p, .col-md-8, info', {origin: 'right'});
ScrollReveal().reveal('.home-bio, heading, .career-text-con', {origin: 'top'});
ScrollReveal().reveal('.profile-pic, .about-col-2, .hobbies-items, .home-town, .gallery, .family, .fam-gallery-container, .future-career, .footer', {origin: 'bottom'});

// Typing Animation //

document.addEventListener("DOMContentLoaded", function() {
    const typed = new Typed(".auto-type", {
    strings: ["1st Year College Student", "Web Developer", "Gamer"],
    typeSpeed: 100,
    backSpeed: 100,
    backDelay: 600,
      startDelay: 500, // Delay before typing starts
    loop: true,
      showCursor: true, // Show blinking cursor
      cursorChar: "|", // Customize cursor character
      contentType: 'html', // 'html' or 'text' for richer content
    onComplete: function() {
        // Optional callback function when typing completes
        console.log('Typed animation complete');
    },
    });
});

// Animate on Scroll //

window.addEventListener('scroll', function(){
    const anim = document.querySelectorAll('.animate-me');

    anim.forEach(function(item){
        const animTop = item.offsetTop;
        const animHeight = item.offsetHeight;
        const animClientHeight = document.documentElement.clientHeight;

        if(animTop + animHeight/2 < animClientHeight + document.documentElement.scrollTop){
            item.classList.add('active');
        } else {
            item.classList.remove('active');
        }
    });
});