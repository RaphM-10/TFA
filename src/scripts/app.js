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

gsap.from(".photo--1", {
    scale:0.9,
    opacity: 0,
    scrollTrigger: {
        trigger:".photo--1",
        start: "60% 75%",
        end: "60% 25%",
        toggleActions: "play pause reverse reset",
        scrub: true,
    }
});

gsap.from(".photo--2", {
    scale:0.9,
    opacity: 0,
    scrollTrigger: {
        trigger:".photo--2",
        start: "60% 75%",
        end: "60% 25%",
        toggleActions: "play pause reverse reset",
        scrub: true,
    }
});

gsap.from(".photo--3", {
    scale:0.9,
    opacity: 0,
    scrollTrigger: {
        trigger:".photo--3",
        start: "60% 75%",
        end: "60% 25%",
        toggleActions: "play pause reverse reset",
        scrub: true,
    }
});

gsap.from(".photo--4", {
    scale:0.9,
    opacity: 0,
    scrollTrigger: {
        trigger:".photo--4",
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

let photoVignette = document.querySelectorAll('.photo');
let texteVignette = document.querySelectorAll('.vignette__texte'); 

function getRandomIntInclusive(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min +1)) + min;
};


var dejaAfficher = [];
var tableauVignette = [{source : './assets/images/sac.png', sourceset : './assets/images/sac@2x.png 2x', text : 'Sac totebag'},{source : './assets/images/trousse.png', sourceset : './assets/images/trousse@2x.png 2x', text : 'Trousse'},{source : './assets/images/jupe.png', sourceset : './assets/images/jupe@2x.png 2x', text : 'Jupe portefeuille'},{source : './assets/images/cor.png', sourceset : './assets/images/cor@2x.png 2x', text : 'Corset sans bretelles'}];

for(let i=0; i<4; i++){
    do{
        var nombreAleatoire = getRandomIntInclusive(0, 3);
    }while(dejaAfficher.includes(nombreAleatoire));
    photoVignette[i].setAttribute("src",tableauVignette[nombreAleatoire].source);
    photoVignette[i].setAttribute("srcset",tableauVignette[nombreAleatoire].sourceset);
    texteVignette[i].innerHTML=tableauVignette[nombreAleatoire].text;
    dejaAfficher.push(nombreAleatoire);
    console.log(dejaAfficher);
}

