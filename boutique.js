

//===================================Gestion des produits ===============================================



function getProduits(options = {}) {
    const tousLesProduits = [
        // Robes
        {
            id: 1,
            nom: "Robe Élégante Noire",
            categorie: "robes",
            marque: "Amaro",
            prix: 189,
            prixOriginal: 229,
            remise: 17,
            note: 4.8,
            avis: 48,
            stock: 12,
            description: "Robe cocktail en soie naturelle, coupée pour épouser vos formes avec élégance.",
            descriptionDetaillee: "Cette robe noire incarne l'essence même de l'élégance Amaro. Confectionnée dans une soie naturelle de première qualité, elle offre un tombé parfait et un confort incomparable. Parfaite pour les occasions spéciales.",
            images: [
                "assets/product-1.jpg",
                "assets/product-1-2.jpg",
                "assets/product-1-3.jpg",
                "assets/product-1-4.jpg"
            ],
            caracteristiques: [
                "100% Soie naturelle",
                "Col V plongeant avec finition satin",
                "Dos nu avec lien réglable",
                "Longueur midi - 95cm",
                "Ourlet invisible à la main"
            ],
            specifications: {
                "Composition": "100% Soie naturelle",
                "Origine": "Confection française",
                "Entretien": "Nettoyage à sec uniquement",
                "Poids": "320g",
                "Longueur": "95cm"
            },
            options: [
                {
                    nom: "Taille",
                    valeurs: [
                        { nom: "XS", disponible: true },
                        { nom: "S", disponible: true },
                        { nom: "M", disponible: true },
                        { nom: "L", disponible: false },
                        { nom: "XL", disponible: true }
                    ]
                },
                {
                    nom: "Couleur",
                    valeurs: [
                        { nom: "Noir", disponible: true },
                        { nom: "Bordeaux", disponible: true },
                        { nom: "Navy", disponible: false }
                    ]
                }
            ],
            garantie: "2 ans",
            estNouveau: true,
            estBestSeller: true,
            dateAjout: "2024-01-15"
        },
        {
            id: 2,
            nom: "Robe Rouge Passion",
            categorie: "robes",
            marque: "Amaro",
            prix: 159,
            prixOriginal: 199,
            remise: 20,
            note: 4.6,
            avis: 32,
            stock: 8,
            description: "Robe soirée en satin, couleur rouge intense pour une présence remarquée.",
            descriptionDetaillee: "La robe Rouge Passion en satin luxueux vous garantit une entrée remarquée. Sa coupe ajustée et son drapé fluide créent une silhouette élégante et sensuelle.",
            images: [
                "assets/product-2.jpg",
                "assets/product-2-2.jpg",
                "assets/product-2-3.jpg"
            ],
            caracteristiques: [
                "Satin de haute qualité",
                "Couleur rouge intense",
                "Dos nu élégant",
                "Longueur longue",
                "Drapé fluide"
            ],
            specifications: {
                "Composition": "100% Polyester satiné",
                "Origine": "Confection italienne",
                "Entretien": "Lavage main à froid",
                "Poids": "280g",
                "Longueur": "120cm"
            },
            options: [
                {
                    nom: "Taille",
                    valeurs: [
                        { nom: "XS", disponible: true },
                        { nom: "S", disponible: true },
                        { nom: "M", disponible: true },
                        { nom: "L", disponible: true }
                    ]
                }
            ],
            garantie: "2 ans",
            estBestSeller: true,
            dateAjout: "2024-01-10"
        },

        // Hauts
        {
            id: 3,
            nom: "Chemisier Soie Blanc",
            categorie: "hauts",
            marque: "Amaro",
            prix: 89,
            prixOriginal: 119,
            remise: 25,
            note: 4.7,
            avis: 67,
            stock: 15,
            description: "Chemisier en soie naturelle, coupe fluide et col chemisier classique.",
            descriptionDetaillee: "Ce chemisier en soie naturelle allie confort et élégance. Sa coupe fluide et son col classique en font une pièce intemporelle pour toutes les occasions.",
            images: [
                "assets/product-3.jpg",
                "assets/product-3-2.jpg"
            ],
            caracteristiques: [
                "100% Soie naturelle",
                "Col chemisier classique",
                "Manches longues",
                "Coupe fluide et ajustée",
                "Boutons nacrés"
            ],
            specifications: {
                "Composition": "100% Soie naturelle",
                "Origine": "Confection française",
                "Entretien": "Nettoyage à sec",
                "Poids": "180g"
            },
            options: [
                {
                    nom: "Taille",
                    valeurs: [
                        { nom: "XS", disponible: true },
                        { nom: "S", disponible: true },
                        { nom: "M", disponible: true },
                        { nom: "L", disponible: true },
                        { nom: "XL", disponible: false }
                    ]
                }
            ],
            garantie: "1 an",
            estNouveau: true,
            dateAjout: "2024-01-12"
        },

        // Pantalons
        {
            id: 4,
            nom: "Pantalon Taille Haute",
            categorie: "pantalons",
            marque: "Amaro",
            prix: 129,
            note: 4.5,
            avis: 43,
            stock: 20,
            description: "Pantalon taille haute en lin, coupe droite et confort optimal.",
            descriptionDetaillee: "Le pantalon taille haute en lin offre un confort exceptionnel avec une coupe droite moderne. Parfait pour le bureau ou les occasions décontractées.",
            images: [
                "assets/product-4.jpg",
                "assets/product-4-2.jpg"
            ],
            caracteristiques: [
                "100% Lin naturel",
                "Taille haute",
                "Coupe droite moderne",
                "Poches fonctionnelles",
                "Ceinture intégrée"
            ],
            specifications: {
                "Composition": "100% Lin",
                "Origine": "Confection portugaise",
                "Entretien": "Lavage machine 30°",
                "Poids": "350g"
            },
            options: [
                {
                    nom: "Taille",
                    valeurs: [
                        { nom: "34", disponible: true },
                        { nom: "36", disponible: true },
                        { nom: "38", disponible: true },
                        { nom: "40", disponible: true },
                        { nom: "42", disponible: true }
                    ]
                },
                {
                    nom: "Couleur",
                    valeurs: [
                        { nom: "Écru", disponible: true },
                        { nom: "Noir", disponible: true },
                        { nom: "Marine", disponible: false }
                    ]
                }
            ],
            garantie: "1 an",
            dateAjout: "2024-01-08"
        },

        // Accessoires
        {
            id: 5,
            nom: "Sac à Main Cuir Noir",
            categorie: "accessoires",
            marque: "Amaro",
            prix: 279,
            prixOriginal: 329,
            remise: 15,
            note: 4.9,
            avis: 89,
            stock: 10,
            description: "Sac à main en cuir véritable, fabrication artisanale italienne.",
            descriptionDetaillee: "Ce sac à main en cuir véritable allie artisanat italien et design moderne. Son compartiment principal spacieux et ses finitions soignées en font un accessoire indispensable.",
            images: [
                "assets/product-5.jpg",
                "assets/product-5-2.jpg"
            ],
            caracteristiques: [
                "Cuir véritable",
                "Fabrication italienne",
                "Fermoir magnétique",
                "Bandoulière amovible",
                "Compartiments multiples"
            ],
            specifications: {
                "Matériau": "Cuir de vachette",
                "Origine": "Fabrication italienne",
                "Dimensions": "28x20x12cm",
                "Poids": "800g"
            },
            options: [
                {
                    nom: "Couleur",
                    valeurs: [
                        { nom: "Noir", disponible: true },
                        { nom: "Cognac", disponible: true },
                        { nom: "Taupe", disponible: false }
                    ]
                }
            ],
            garantie: "2 ans",
            estBestSeller: true,
            dateAjout: "2024-01-05"
        },
        {
            id: 6,
            nom: "Écharpe Cachemire",
            categorie: "accessoires",
            marque: "Amaro",
            prix: 149,
            note: 4.8,
            avis: 56,
            stock: 25,
            description: "Écharpe en cachemire pur, douceur et chaleur exceptionnelles.",
            descriptionDetaillee: "L'écharpe en cachemire pur offre une douceur et une chaleur incomparables. Sa texture légère et son fini soyeux en font un accessoire de luxe.",
            images: [
                "assets/product-6.jpg"
            ],
            caracteristiques: [
                "100% Cachemire",
                "Dimensions 180x70cm",
                "Léger et chaud",
                "Finition soyeuse",
                "Coloris intemporels"
            ],
            specifications: {
                "Composition": "100% Cachemire",
                "Dimensions": "180x70cm",
                "Poids": "150g",
                "Origine": "Mongolie"
            },
            options: [
                {
                    nom: "Couleur",
                    valeurs: [
                        { nom: "Gris chiné", disponible: true },
                        { nom: "Bordeaux", disponible: true },
                        { nom: "Crème", disponible: true },
                        { nom: "Noir", disponible: true }
                    ]
                }
            ],
            garantie: "1 an",
            estNouveau: true,
            dateAjout: "2024-01-03"
        },

        // Chaussures
        {
            id: 7,
            nom: "Escarpins Élégants",
            categorie: "chaussures",
            marque: "Amaro",
            prix: 159,
            note: 4.4,
            avis: 34,
            stock: 18,
            description: "Escarpins en daim, talon 8cm, confort et élégance assurés.",
            descriptionDetaillee: "Ces escarpins en daim allient confort et élégance avec leur talon de 8cm parfaitement équilibré. La semelle intérieure rembourrée assure un confort toute la journée.",
            images: [
                "assets/product-7.jpg",
                "assets/product-7-2.jpg"
            ],
            caracteristiques: [
                "Daim de haute qualité",
                "Talon 8cm",
                "Semelle intérieure rembourrée",
                "Bout pointu",
                "Doublure cuir"
            ],
            specifications: {
                "Matériau": "Daim",
                "Talon": "8cm",
                "Semelle": "Cuir",
                "Doublure": "Cuir"
            },
            options: [
                {
                    nom: "Pointure",
                    valeurs: [
                        { nom: "36", disponible: true },
                        { nom: "37", disponible: true },
                        { nom: "38", disponible: true },
                        { nom: "39", disponible: false },
                        { nom: "40", disponible: true }
                    ]
                },
                {
                    nom: "Couleur",
                    valeurs: [
                        { nom: "Noir", disponible: true },
                        { nom: "Bordeaux", disponible: true },
                        { nom: "Nude", disponible: true }
                    ]
                }
            ],
            garantie: "6 mois",
            dateAjout: "2024-01-01"
        }
    ];

    let produitsFiltres = [...tousLesProduits];

    // Filtrage par catégorie
    if (options.categorie) {
        produitsFiltres = produitsFiltres.filter(produit =>
            produit.categorie === options.categorie
        );
    }

    // Filtrage par marque
    if (options.marque) {
        produitsFiltres = produitsFiltres.filter(produit =>
            produit.marque === options.marque
        );
    }

    // Filtrage par fourchette de prix
    if (options.prixMin !== undefined) {
        produitsFiltres = produitsFiltres.filter(produit =>
            produit.prix >= options.prixMin
        );
    }
    if (options.prixMax !== undefined) {
        produitsFiltres = produitsFiltres.filter(produit =>
            produit.prix <= options.prixMax
        );
    }

    // Filtrage par disponibilité
    if (options.enStockSeulement) {
        produitsFiltres = produitsFiltres.filter(produit =>
            produit.stock > 0
        );
    }

    // Recherche par nom ou description
    if (options.termeRecherche) {
        const terme = options.termeRecherche.toLowerCase();
        produitsFiltres = produitsFiltres.filter(produit =>
            produit.nom.toLowerCase().includes(terme) ||
            produit.description.toLowerCase().includes(terme) ||
            produit.marque.toLowerCase().includes(terme)
        );
    }

    // Filtrage par flags spéciaux
    if (options.bestSellersSeulement) {
        produitsFiltres = produitsFiltres.filter(produit =>
            produit.estBestSeller
        );
    }
    if (options.nouveautesSeulement) {
        produitsFiltres = produitsFiltres.filter(produit =>
            produit.estNouveau
        );
    }

    // Tri des produits
    if (options.trierPar) {
        switch (options.trierPar) {
            case 'prix-croissant':
                produitsFiltres.sort((a, b) => a.prix - b.prix);
                break;
            case 'prix-decroissant':
                produitsFiltres.sort((a, b) => b.prix - a.prix);
                break;
            case 'note':
                produitsFiltres.sort((a, b) => b.note - a.note);
                break;
            case 'nouveautes':
                produitsFiltres.sort((a, b) => new Date(b.dateAjout) - new Date(a.dateAjout));
                break;
            case 'nom':
                produitsFiltres.sort((a, b) => a.nom.localeCompare(b.nom));
                break;
            default:
                // Par défaut, tri par nouveauté
                produitsFiltres.sort((a, b) => new Date(b.dateAjout) - new Date(a.dateAjout));
        }
    }

    return produitsFiltres;
}

// Fonctions utilitaires pour votre boutique
function getProduitParId(id) {
    return getProduits().find(produit => produit.id === id);
}


// ==================================================
// CONFIGURATION ET ÉTAT GLOBAL DE LA BOUTIQUE
// ==================================================

const configBoutique = {
    produitsParPage: 6,
    pageActuelle: 1,
    produitsTotaux: 0,
    panier: JSON.parse(localStorage.getItem('panierAmaro')) || []
};

// ==================================================
// FONCTION PRINCIPALE D'INITIALISATION
// ==================================================

/**
 * Initialise toute la boutique au chargement de la page
 */
function initialiserBoutique() {
    console.log('🔄 Initialisation de la boutique Amaro...');
    // Afficher un loading pendant le chargement initial
    afficherLoading('un instant...');

    // Simuler un délai de chargement (remplacez par vos vraies données)
    setTimeout(() => {
        const tousProduits = getProduits();
        afficherProduitsAvecPagination(tousProduits);
        initialiserFiltres();
        mettreAJourCompteurPanier();
        masquerLoading();

        console.log('✅ Boutique initialisée avec succès!');
    }, 500);
}

// ==================================================
// GESTION DE L'AFFICHAGE DES PRODUITS
// ==================================================

/**
 * Affiche les produits avec système de pagination
 * @param {Array} produits - Liste des produits à afficher
 */
function afficherProduitsAvecPagination(produits) {
    if (!produits || produits.length === 0) {
        afficherMessageAucunProduit();
        return;
    }

    // Configuration de la pagination
    configBoutique.produitsTotaux = produits.length;
    configBoutique.pagesTotales = Math.ceil(produits.length / configBoutique.produitsParPage);
    configBoutique.pageActuelle = 1;

    // Afficher la première page
    afficherPageProduits(produits);
    genererPagination(produits);
}

/**
 * Affiche les produits de la page actuelle
 * @param {Array} produits - Liste complète des produits
 */
function afficherPageProduits(produits) {
    const debut = (configBoutique.pageActuelle - 1) * configBoutique.produitsParPage;
    const fin = debut + configBoutique.produitsParPage;
    const produitsPage = produits.slice(debut, fin);

    const container = document.querySelector('.products-grid');
    const messageVide = document.getElementById('no-products-message');
    if (messageVide) messageVide.style.display = 'none';
    if (!container) return;

    container.innerHTML = produitsPage.map(produit => `
        <div class="product-card" data-product-id="${produit.id}">
            <div class="product-image">
                <img src="${produit.images[0]}" alt="${produit.nom}" 
                     onerror="this.src='assets/pic-3.jpg'">
                <div class="product-actions">
                    <button class="quick-view" onclick="afficherDetailsProduit(${produit.id})">
                        <i class="ri-eye-line"></i>
                    </button>
                    <button class="add-to-cart" onclick="ajouterAuPanier(${produit.id})">
                        <i class="ri-shopping-bag-line"></i>
                    </button>
                </div>
                ${produit.estNouveau ? '<span class="product-badge">Nouveau</span>' : ''}
                ${produit.estBestSeller && !produit.estNouveau ? '<span class="product-badge">Best Seller</span>' : ''}
                ${produit.remise ? `<span class="product-badge">-${produit.remise}%</span>` : ''}
            </div>
            <div class="product-info">
                <h3>${produit.nom}</h3>
                <p>${produit.description}</p>
                <div class="product-price">
                    <span class="current-price">€${produit.prix}</span>
                    ${produit.prixOriginal ? `<span class="original-price">€${produit.prixOriginal}</span>` : ''}
                </div>
                <button class="add-to-cart-btn" onclick="ajouterAuPanier(${produit.id})">
                    Ajouter au panier
                </button>
            </div>
        </div>
    `).join('');

    // Mettre à jour les informations de pagination
    mettreAJourInfosPagination(produits.length, debut, fin);
}

// ==================================================
// SYSTÈME DE PAGINATION
// ==================================================

/**
 * Génère la pagination en bas de page
 * @param {Array} produits - Liste des produits
 */
function genererPagination(produits) {
    const paginationEl = document.getElementById('pagination');
    if (!paginationEl) return;

    paginationEl.innerHTML = '';

    // Bouton Précédent
    const prevLi = document.createElement('li');
    const prevLink = document.createElement('a');
    prevLink.href = '#';
    prevLink.setAttribute('aria-label', 'Page précédente');

    if (configBoutique.pageActuelle === 1) {
        prevLink.classList.add('disabled');
    } else {
        prevLink.addEventListener('click', (e) => {
            e.preventDefault();
            changerPage(configBoutique.pageActuelle - 1, produits);
        });
    }
    prevLink.innerHTML = `<i class="ri-arrow-left-line"></i>`;
    prevLi.appendChild(prevLink);
    paginationEl.appendChild(prevLi);

    // Numéros de pages
    const pages = genererNumerosPages();
    pages.forEach(page => {
        const pageLi = document.createElement('li');
        const link = document.createElement('a');

        if (page === '...') {
            link.textContent = '...';
            link.classList.add('dots');
        } else {
            link.textContent = page;
            if (page === configBoutique.pageActuelle) {
                link.classList.add('active');
                link.setAttribute('aria-current', 'page');
            }
            link.addEventListener('click', (e) => {
                e.preventDefault();
                changerPage(page, produits);
            });
        }
        pageLi.appendChild(link);
        paginationEl.appendChild(pageLi);
    });

    // Bouton Suivant
    const nextLi = document.createElement('li');
    const nextLink = document.createElement('a');
    nextLink.href = '#';
    nextLink.setAttribute('aria-label', 'Page suivante');

    if (configBoutique.pageActuelle === configBoutique.pagesTotales) {
        nextLink.classList.add('disabled');
    } else {
        nextLink.addEventListener('click', (e) => {
            e.preventDefault();
            changerPage(configBoutique.pageActuelle + 1, produits);
        });
    }

    nextLink.innerHTML = `<i class="ri-arrow-right-line"></i>`;
    nextLi.appendChild(nextLink);
    paginationEl.appendChild(nextLi);
}


/**
 * Change de page avec animation fluide
 * @param {number} nouvellePage - Numéro de la nouvelle page
 * @param {Array} produits - Liste des produits
 */
function changerPage(nouvellePage, produits) {

    if (nouvellePage < 1 || nouvellePage > configBoutique.pagesTotales) return;

    configBoutique.pageActuelle = nouvellePage;

    // Animation de scroll fluide
    window.scrollTo({ top: 300, behavior: 'smooth' });

    // Afficher la nouvelle page
    afficherPageProduits(produits);
    genererPagination(produits);
}

/**
 * Génère les numéros de page avec points de suspension si beaucoup de pages
 * @returns {Array} Liste des numéros de page à afficher
 */
function genererNumerosPages() {
    const pages = [];
    const pageActuelle = configBoutique.pageActuelle;
    const pagesTotales = configBoutique.pagesTotales;

    if (pagesTotales <= 7) {
        // Afficher toutes les pages
        for (let i = 1; i <= pagesTotales; i++) {
            pages.push(i);
        }
    } else {
        // Logique avec points de suspension pour beaucoup de pages
        if (pageActuelle <= 4) {
            for (let i = 1; i <= 5; i++) pages.push(i);
            pages.push('...');
            pages.push(pagesTotales);
        } else if (pageActuelle >= pagesTotales - 3) {
            pages.push(1);
            pages.push('...');
            for (let i = pagesTotales - 4; i <= pagesTotales; i++) pages.push(i);
        } else {
            pages.push(1);
            pages.push('...');
            for (let i = pageActuelle - 1; i <= pageActuelle + 1; i++) pages.push(i);
            pages.push('...');
            pages.push(pagesTotales);
        }
    }

    return pages;
}

/**
 * Met à jour les informations de pagination (produits 1-6 sur 24)
 */
function mettreAJourInfosPagination(total, debut, fin) {
    const pageStart = document.getElementById('page-start');
    const pageEnd = document.getElementById('page-end');
    const totalProducts = document.getElementById('total-products');

    if (pageStart) pageStart.textContent = total > 0 ? debut + 1 : 0;
    if (pageEnd) pageEnd.textContent = Math.min(fin, total);
    if (totalProducts) totalProducts.textContent = total;
}

// ==================================================
// SYSTÈME DE RECHERCHE
// ==================================================
/**
 * Initialise la recherche et le filtrage par catégorie
 */
function initialiserFiltres() {
    const searchInput = document.getElementById('search-products');
    const categorieSelect = document.getElementById('categorie-filtre');

    let timeoutId;

    // Recherche en temps réel (attente 3s)
    if (searchInput) {
        searchInput.addEventListener('input', function () {
            clearTimeout(timeoutId); // Annule le précédent

            
            timeoutId = setTimeout(() => {
                // On affiche le spinner seulement au moment du filtrage
                afficherLoading('Filtrage en cours...');
                filtrerProduits();
                masquerLoading();
            }, 400);
        });
    }

    // Filtre par catégorie (immédiat)
    if (categorieSelect) {
        categorieSelect.addEventListener('change', function () {
            afficherLoading('Filtrage en cours...');
            setTimeout(() => {
                filtrerProduits();
                masquerLoading();
            }, 300);
        });
    }
}



/**
 * Filtre les produits selon la recherche et la catégorie
 */
function filtrerProduits() {
    const searchInput = document.getElementById('search-products');
    const categorieSelect = document.getElementById('categorie-filtre');

    const terme = searchInput ? searchInput.value.trim().toLowerCase() : '';
    const categorie = categorieSelect ? categorieSelect.value.trim().toLowerCase() : '';

    const tousProduits = getProduits();

    // Filtrage combiné
    const produitsFiltres = tousProduits.filter(produit => {
        const correspondNom = produit.nom.toLowerCase().includes(terme);
        const correspondDescription = produit.description.toLowerCase().includes(terme);
        const correspondMarque = produit.marque.toLowerCase().includes(terme);
        const correspondCategorieTexte = produit.categorie.toLowerCase().includes(terme);

        // Vérifie si le produit correspond au texte
        const correspondTexte =
            !terme || correspondNom || correspondDescription || correspondMarque || correspondCategorieTexte;

        // Vérifie si le produit correspond à la catégorie
        const correspondCategorie =
            !categorie || produit.categorie.toLowerCase() === categorie;

        // Le produit doit satisfaire les deux filtres
        return correspondTexte && correspondCategorie;
    });

    afficherProduitsAvecPagination(produitsFiltres);
}


// ==================================================
// GESTION DU PANIER
// ==================================================

/**
 * Ajoute un produit au panier
 * @param {number} productId - ID du produit à ajouter
 */
function ajouterAuPanier(productId) {
    const produit = getProduitParId(productId);
    if (!produit) return;

    // Vérifier si le produit est déjà dans le panier
    const existingItem = configBoutique.panier.find(item => item.id === productId);

    if (existingItem) {
        existingItem.quantite += 1;
    } else {
        configBoutique.panier.push({
            id: produit.id,
            nom: produit.nom,
            prix: produit.prix,
            image: produit.images[0],
            quantite: 1
        });
    }

    // Sauvegarder dans le localStorage
    localStorage.setItem('panierAmaro', JSON.stringify(configBoutique.panier));

    // Animation de confirmation
    const btn = event.target.closest('button');
    const originalText = btn.innerHTML;
    btn.innerHTML = '<i class="ri-check-line"></i> Ajouté !';
    btn.style.background = '#4CAF50';

    setTimeout(() => {
        btn.innerHTML = originalText;
        btn.style.background = '';
    }, 2000);

    // Mettre à jour le compteur
    mettreAJourCompteurPanier();
}

/**
 * Met à jour le compteur d'articles dans le panier
 */
export function mettreAJourCompteurPanier() {
    const compteur = document.querySelector('.cart-count');
    if (compteur) {
        const totalItems = configBoutique.panier.reduce((sum, item) => sum + item.quantite, 0);
        compteur.textContent = totalItems;
    }
}

// ==================================================
// MESSAGES ET LOADING
// ==================================================

/**
 * Affiche un message quand aucun produit n'est trouvé :cite[1]:cite[6]
 */
function afficherMessageAucunProduit() {
    const container = document.querySelector('.products-grid');
    const messageVide = document.getElementById('no-products-message');

    if (container) container.innerHTML = '';
    if (messageVide) messageVide.style.display = 'block';
}

/**
 * Affiche un loading spinner
 * @param {string} message - Message à afficher
 */
function afficherLoading(message = 'Chargement...') {
    masquerLoading(); // Nettoyer d'abord

    const overlay = document.createElement('div');
    overlay.className = 'loading-spinner-overlay';
    overlay.id = 'loading-spinner';
    overlay.innerHTML = `
        <div class="loading-spinner-content">
            <div class="loading-spinner"></div>
            <div class="loading-text">${message}</div>
        </div>
    `;

    document.body.appendChild(overlay);
    setTimeout(() => overlay.classList.add('active'), 10);
}

/**
 * Masque le loading spinner
 */
function masquerLoading() {
    const overlay = document.getElementById('loading-spinner');
    if (overlay) {
        overlay.classList.remove('active');
        setTimeout(() => {
            if (overlay.parentNode) overlay.parentNode.removeChild(overlay);
        }, 300);
    }
}

/**
 * Réinitialise la recherche et affiche tous les produits
 */
function clearSearch() {
    const searchInput = document.getElementById('search-products');
    if (searchInput) searchInput.value = '';

    const tousProduits = getProduits();
    afficherProduitsAvecPagination(tousProduits);
}

// ==================================================
// FONCTIONS D'INITIALISATION DES FILTRES
// ==================================================



function afficherDetailsProduit(productId) {
    // À implémenter pour la page détail produit
    console.log('Détails produit:', productId);
}

// ==================================================
// LANCEMENT DE LA BOUTIQUE
// ==================================================

// Démarrer la boutique quand la page est chargée
document.addEventListener('DOMContentLoaded', initialiserBoutique);

// Rendre les fonctions disponibles globalement pour le HTML

window.ajouterAuPanier = ajouterAuPanier;
window.changerPage = changerPage;
window.clearSearch = clearSearch;
window.afficherDetailsProduit = afficherDetailsProduit;
