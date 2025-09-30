document.addEventListener('DOMContentLoaded', () => {
    
    MobileToggle();
    updateCartCount();
})


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


//=================================GESTION DU PANIER =========================================================

let cartCount = 0; // on initilise cartCount à 0

function addcart() {
    
    const cartButtons = document.querySelectorAll('.add-to-cart-btn');
    const cartDisplay = document.querySelector('.cart-count');

    cartButtons.forEach(button => {
        button.addEventListener('click', function () {

            // Animation feedback
            this.textContent = '✓ Ajouté';
            this.style.background = '#4CAF50';

            setTimeout(() => {
                this.textContent = 'Ajouter au panier';
                this.style.background = '';
            }, 2000);
        });
    });
    incrementCartCount();
    updateCartCount();
};

/**
 * vider completement le panier 
 */
function clearCart() {
    localStorage.removeItem('cartCount');
    updateCartCount();
}


// Lis le compteur actuel depuis localStorage (NE PAS incrémenter)
function getCartCount() {
  const saved = localStorage.getItem('cartCount');
  const n = saved !== null ? parseInt(saved, 10) : 0;
  return Number.isNaN(n) ? 0 : n;
}

// Incrémente le compteur (utiliser uniquement quand on ajoute un article)
function incrementCartCount() {
  const current = getCartCount();
  const next = current + 1;
  localStorage.setItem('cartCount', next);
  return next;
}

// Met à jour l'affichage (NE PAS incrémenter ici)
function updateCartCount() {
  const cartCountElements = document.querySelectorAll('.cart-count');
  const count = getCartCount(); // <-- lecture seule, pas d'incrémentation

  cartCountElements.forEach(el => {
    el.textContent = count;
  });
}
