import { gsap } from "gsap"; 
console.log(gsap.version);

import ScrollTrigger from 'gsap/ScrollTrigger';
gsap.registerPlugin(ScrollTrigger);

gsap.from(".valeur-mockup", {
    y:-500,
    opacity: 0,
    scrollTrigger: {
        trigger:".valeur-mockup",
        start: "140% 75%",
        end: "130% 25%",
        toggleActions: "play pause reverse reset",
        scrub: true,
        //markers: true
    }
});

gsap.from(".list-el__texte--1", {
    x:500,
    opacity: 0,
    scrollTrigger: {
        trigger:".list-el__texte--1",
        start: "20% 75%",
        end: "-20% 25%",
        toggleActions: "play pause reverse reset",
        scrub: true,
    }
});
gsap.from(".list-el__texte--2", {
    x:500,
    opacity: 0,
    scrollTrigger: {
        trigger:".list-el__texte--2",
        start: "20% 75%",
        end: "-20% 25%",
        toggleActions: "play pause reverse reset",
        scrub: true,
    }
});gsap.from(".list-el__texte--3", {
    x:500,
    opacity: 0,
    scrollTrigger: {
        trigger:".list-el__texte--3",
        start: "20% 75%",
        end: "-20% 25%",
        toggleActions: "play pause reverse reset",
        scrub: true,
    }
});

gsap.from(".photo--sac", {
    scale:0.9,
    opacity: 0,
    scrollTrigger: {
        trigger:".photo--sac",
        start: "60% 75%",
        end: "60% 25%",
        toggleActions: "play pause reverse reset",
        scrub: true,
    }
});

gsap.from(".photo--trousse", {
    scale:0.9,
    opacity: 0,
    scrollTrigger: {
        trigger:".photo--trousse",
        start: "60% 75%",
        end: "60% 25%",
        toggleActions: "play pause reverse reset",
        scrub: true,
    }
});

gsap.from(".photo--jupe", {
    scale:0.9,
    opacity: 0,
    scrollTrigger: {
        trigger:".photo--jupe",
        start: "60% 75%",
        end: "60% 25%",
        toggleActions: "play pause reverse reset",
        scrub: true,
    }
});

gsap.from(".photo--cor", {
    scale:0.9,
    opacity: 0,
    scrollTrigger: {
        trigger:".photo--cor",
        start: "60% 75%",
        end: "60% 25%",
        toggleActions: "play pause reverse reset",
        scrub: true,
    }
});

gsap.from(".nav-avis__el", {
    x:-500,
    opacity: 0,
    scrollTrigger: {
        trigger:".nav-avis__el",
        start: "20% 75%",
        end: "-10% 25%",
        toggleActions: "play pause reverse reset",
        scrub: true,
        
    }
});

gsap.from(".mockup", {
    y:-400,
    opacity: 0,
    scrollTrigger: {
        trigger:".mockup",
        start: "80% 75%",
        end: "90% 25%",
        toggleActions: "play pause reverse reset",
        scrub: true,
        
    }
});


