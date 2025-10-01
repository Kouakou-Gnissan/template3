document.addEventListener('DOMContentLoaded', () => {
    MobileToggle();
    mettreAJourCompteurPanier();
    pagePanier();
})

import { mettreAJourCompteurPanier } from './boutique.js'


function MobileToggle() {
    // Menu mobile
    const hamburger = document.getElementById('hamburger');
    const navMenu = document.getElementById('nav-menu');

    hamburger.addEventListener('click', () => {
        hamburger.classList.toggle('active');
        navMenu.classList.toggle('active');
    });

    // Fermer le menu en cliquant sur un lien
    document.querySelectorAll('.nav-link').forEach(link => {
        link.addEventListener('click', () => {
            hamburger.classList.remove('active');
            navMenu.classList.remove('active');
        });
    });
}

function pagePanier() {
    const panier = document.getElementById('panier');
    if (!panier) {
        return;
    } else {
        panier.addEventListener('click', () => {
            window.location.href = 'panier.html';
        })
    }
}


//=================================GESTION DU PANIER =========================================================


