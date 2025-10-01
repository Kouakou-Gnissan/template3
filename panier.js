// ==================================================
// GESTION COMPLÈTE DU PANIER
// ==================================================

/**
 * Affiche tous les articles du panier
 */
function afficherPanier() {
    const container = document.getElementById('cart-items-container');
    const emptyMessage = document.getElementById('cart-empty-message');
    const panier = obtenirPanier();
    
    if (panier.length === 0) {
        container.innerHTML = '';
        emptyMessage.style.display = 'block';
        mettreAJourResumePanier();
        return;
    }
    
    emptyMessage.style.display = 'none';
    container.innerHTML = panier.map(item => `
        <div class="cart-item" data-product-id="${item.id}">
            <div class="cart-item-product">
                <img src="${item.image}" alt="${item.nom}" class="cart-item-image" 
                     onerror="this.src='assets/pic-3.jpg'">
                <div class="cart-item-details">
                    <h4>${item.nom}</h4>
                    <p>Taille: ${item.taille || 'Unique'}</p>
                </div>
            </div>
            <div class="cart-item-price">€${item.prix}</div>
            <div class="cart-item-quantity">
                <div class="quantity-controls">
                    <button class="quantity-btn" onclick="modifierQuantite(${item.id}, -1)">-</button>
                    <input type="text" class="quantity-input" value="${item.quantite}" 
                           onchange="changerQuantite(${item.id}, this.value)" readonly>
                    <button class="quantity-btn" onclick="modifierQuantite(${item.id}, 1)">+</button>
                </div>
            </div>
            <div class="cart-item-total">€${(item.prix * item.quantite).toFixed(2)}</div>
            <div class="cart-item-actions">
                <button class="remove-item" onclick="supprimerDuPanier(${item.id})">
                    <i class="ri-delete-bin-line"></i>
                </button>
            </div>
        </div>
    `).join('');
    
    mettreAJourResumePanier();
}

/**
 * Met à jour le résumé du panier (sous-total, livraison, total)
 */
function mettreAJourResumePanier() {
    const panier = obtenirPanier();
    const sousTotal = panier.reduce((total, item) => total + (item.prix * item.quantite), 0);
    
    // Calcul des frais de livraison
    const fraisLivraison = sousTotal > 50 ? 0 : 4.90;
    const total = sousTotal + fraisLivraison;
    
    document.getElementById('subtotal').textContent = `€${sousTotal.toFixed(2)}`;
    document.getElementById('shipping').textContent = fraisLivraison === 0 ? 'Gratuite' : `€${fraisLivraison.toFixed(2)}`;
    document.getElementById('total').textContent = `€${total.toFixed(2)}`;
}

/**
 * Modifie la quantité d'un article dans le panier
 * @param {number} productId - ID du produit
 * @param {number} changement - Changement de quantité (+1 ou -1)
 */
function modifierQuantite(productId, changement) {
    let panier = obtenirPanier();
    const itemIndex = panier.findIndex(item => item.id === productId);
    
    if (itemIndex !== -1) {
        panier[itemIndex].quantite += changement;
        
        // Supprimer l'article si la quantité devient 0
        if (panier[itemIndex].quantite <= 0) {
            panier.splice(itemIndex, 1);
        }
        
        sauvegarderPanier(panier);
        afficherPanier();
        mettreAJourCompteurPanier();
    }
}

/**
 * Change la quantité d'un article via l'input
 * @param {number} productId - ID du produit
 * @param {string} nouvelleQuantite - Nouvelle quantité
 */
function changerQuantite(productId, nouvelleQuantite) {
    const quantite = parseInt(nouvelleQuantite);
    
    if (isNaN(quantite) || quantite < 1) {
        afficherPanier(); // Recharger l'affichage
        return;
    }
    
    let panier = obtenirPanier();
    const itemIndex = panier.findIndex(item => item.id === productId);
    
    if (itemIndex !== -1) {
        panier[itemIndex].quantite = quantite;
        sauvegarderPanier(panier);
        afficherPanier();
        mettreAJourCompteurPanier();
    }
}

/**
 * Supprime un article du panier
 * @param {number} productId - ID du produit à supprimer
 */
function supprimerDuPanier(productId) {
    let panier = obtenirPanier();
    panier = panier.filter(item => item.id !== productId);
    sauvegarderPanier(panier);
    afficherPanier();
    mettreAJourCompteurPanier();
}

/**
 * Videz complètement le panier
 */
function viderPanier() {
    localStorage.removeItem('panierAmaro');
    afficherPanier();
    mettreAJourCompteurPanier();
}

// ==================================================
// GESTION DE LA COMMANDE
// ==================================================

/**
 * Initialise le formulaire de commande
 */
function initialiserFormulaireCommande() {
    const form = document.getElementById('checkout-form');
    
    form.addEventListener('submit', function(e) {
        e.preventDefault();
        traiterCommande();
    });
    
    // Mettre à jour les frais de livraison quand la méthode change
    const shippingOptions = document.querySelectorAll('input[name="shipping"]');
    shippingOptions.forEach(option => {
        option.addEventListener('change', mettreAJourResumePanier);
    });
}

/**
 * Traite la commande lorsque le formulaire est soumis
 */
function traiterCommande() {
    const panier = obtenirPanier();
    
    if (panier.length === 0) {
        alert('Votre panier est vide !');
        return;
    }
    
    // Validation du formulaire
    if (!validerFormulaire()) {
        return;
    }
    
    // Afficher un loading
    afficherLoading('Traitement de votre commande...');
    
    // Simuler le traitement de la commande
    setTimeout(() => {
        // Récupérer les données du formulaire
        const formData = new FormData(document.getElementById('checkout-form'));
        const donneesCommande = {
            client: {
                prenom: formData.get('firstName'),
                nom: formData.get('lastName'),
                email: formData.get('email'),
                telephone: formData.get('phone'),
                adresse: formData.get('address'),
                ville: formData.get('city'),
                codePostal: formData.get('postalCode'),
                pays: formData.get('country')
            },
            livraison: formData.get('shipping'),
            paiement: formData.get('payment'),
            articles: panier,
            total: document.getElementById('total').textContent,
            date: new Date().toISOString()
        };
        
        // Sauvegarder la commande
        sauvegarderCommande(donneesCommande);
        
        // Vider le panier
        viderPanier();
        
        masquerLoading();
        
        // Rediriger vers la page de confirmation
        window.location.href = 'confirmation.html';
        
    }, 2000);
}

/**
 * Valide le formulaire de commande
 * @returns {boolean} True si le formulaire est valide
 */
function validerFormulaire() {
    const requiredFields = document.querySelectorAll('#checkout-form [required]');
    let isValid = true;
    
    requiredFields.forEach(field => {
        if (!field.value.trim()) {
            field.style.borderColor = '#ff4444';
            isValid = false;
        } else {
            field.style.borderColor = '#ddd';
        }
    });
    
    // Validation spécifique de l'email
    const emailField = document.getElementById('email');
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (emailField.value && !emailRegex.test(emailField.value)) {
        emailField.style.borderColor = '#ff4444';
        isValid = false;
        alert('Veuillez entrer une adresse email valide.');
    }
    
    if (!isValid) {
        alert('Veuillez remplir tous les champs obligatoires.');
    }
    
    return isValid;
}

/**
 * Sauvegarde la commande dans le localStorage
 * @param {Object} commande - Données de la commande
 */
function sauvegarderCommande(commande) {
    const commandes = JSON.parse(localStorage.getItem('commandesAmaro')) || [];
    commande.id = Date.now(); // ID unique basé sur le timestamp
    commandes.push(commande);
    localStorage.setItem('commandesAmaro', JSON.stringify(commandes));
}

// ==================================================
// FONCTIONS UTILITAires MISES À JOUR
// ==================================================

/**
 * Obtient le panier depuis le localStorage
 * @returns {Array} Le panier actuel
 */
function obtenirPanier() {
    return JSON.parse(localStorage.getItem('panierAmaro')) || [];
}

/**
 * Sauvegarde le panier dans le localStorage
 * @param {Array} panier - Le panier à sauvegarder
 */
function sauvegarderPanier(panier) {
    localStorage.setItem('panierAmaro', JSON.stringify(panier));
}

/**
 * Fonction ajouterAuPanier mise à jour pour gérer les tailles
 * @param {number} productId - ID du produit
 * @param {string} taille - Taille sélectionnée (optionnelle)
 */
function ajouterAuPanier(productId, taille = null) {
    const produit = getProduitParId(productId);
    if (!produit) return;
    
    let panier = obtenirPanier();
    
    // Vérifier si le produit existe déjà dans le panier avec la même taille
    const existingItemIndex = panier.findIndex(item => 
        item.id === productId && item.taille === taille
    );
    
    if (existingItemIndex !== -1) {
        // Produit existe déjà, augmenter la quantité
        panier[existingItemIndex].quantite += 1;
    } else {
        // Nouvel article
        panier.push({
            id: produit.id,
            nom: produit.nom,
            prix: produit.prix,
            image: produit.images[0],
            taille: taille,
            quantite: 1,
            dateAjout: new Date().toISOString()
        });
    }
    
    sauvegarderPanier(panier);
    
    // Animation de confirmation
    const btn = event.target.closest('button');
    const originalText = btn.innerHTML;
    btn.innerHTML = '<i class="ri-check-line"></i> Ajouté !';
    btn.style.background = '#4CAF50';
    
    setTimeout(() => {
        btn.innerHTML = originalText;
        btn.style.background = '';
    }, 2000);
    
    mettreAJourCompteurPanier();
}

/**
 * Met à jour le compteur d'articles dans le panier
 */
function mettreAJourCompteurPanier() {
    const compteur = document.querySelector('.cart-count');
    if (compteur) {
        const panier = obtenirPanier();
        const totalItems = panier.reduce((sum, item) => sum + item.quantite, 0);
        compteur.textContent = totalItems;
    }
}

// ==================================================
// INITIALISATION DE LA PAGE PANIER
// ==================================================

/**
 * Initialise la page panier au chargement
 */
function initialiserPagePanier() {
    if (document.querySelector('.cart-container')) {
        afficherPanier();
        initialiserFormulaireCommande();
        mettreAJourCompteurPanier();
        console.log('🛒 Page panier initialisée');
    }
}



// Démarrer la page panier quand elle est chargée
document.addEventListener('DOMContentLoaded', function() {
    initialiserPagePanier();
});

// Rendre les fonctions disponibles globalement
window.modifierQuantite = modifierQuantite;
window.changerQuantite = changerQuantite;
window.supprimerDuPanier = supprimerDuPanier;
window.ajouterAuPanier = ajouterAuPanier;