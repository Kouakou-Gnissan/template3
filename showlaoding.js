
function showLoading(options = {}) {
    // Options par défaut
    const config = {
        type: options.type || 'spinner', // 'spinner', 'dots', 'skeleton', 'progress'
        message: options.message || 'Chargement en cours...',
        duration: options.duration || null, // null pour chargement manuel
        overlay: options.overlay !== false, // true par défaut
        target: options.target || document.body,
        position: options.position || 'center', // 'center', 'top', 'bottom'
        size: options.size || 'medium', // 'small', 'medium', 'large'
        theme: options.theme || 'amaro' // 'amaro', 'light', 'dark'
    };

    // Créer l'élément de loading
    const loadingEl = document.createElement('div');
    loadingEl.className = `loading-container loading-${config.theme} loading-${config.size}`;
    loadingEl.id = 'amaro-loading-' + Date.now();

    // Styles pour le loading
    const styles = `
        .loading-container {
            position: ${config.target === document.body ? 'fixed' : 'absolute'};
            top: 0;
            left: 0;
            width: 100%;
            height: 100%;
            display: flex;
            flex-direction: column;
            justify-content: ${config.position === 'top' ? 'flex-start' : config.position === 'bottom' ? 'flex-end' : 'center'};
            align-items: center;
            z-index: 9999;
            padding: 20px;
            box-sizing: border-box;
        }
        
        .loading-overlay {
            position: absolute;
            top: 0;
            left: 0;
            width: 100%;
            height: 100%;
            background: rgba(38, 32, 32, 0.9);
            backdrop-filter: blur(5px);
        }
        
        .loading-content {
            position: relative;
            z-index: 2;
            text-align: center;
            background: ${config.theme === 'light' ? '#ffffff' : config.theme === 'dark' ? '#262020' : 'var(--secondary-color)'};
            padding: ${config.size === 'small' ? '20px' : config.size === 'large' ? '40px' : '30px'};
            border-radius: 15px;
            box-shadow: 0 10px 30px rgba(0, 0, 0, 0.3);
            border: 1px solid var(--primary-color);
            min-width: ${config.size === 'small' ? '200px' : config.size === 'large' ? '300px' : '250px'};
        }
        
        /* Spinner Animation */
        .loading-spinner {
            width: ${config.size === 'small' ? '30px' : config.size === 'large' ? '50px' : '40px'};
            height: ${config.size === 'small' ? '30px' : config.size === 'large' ? '50px' : '40px'};
            border: 3px solid transparent;
            border-top: 3px solid var(--primary-color);
            border-radius: 50%;
            animation: spin 1s linear infinite;
            margin: 0 auto 15px;
        }
        
        /* Dots Animation */
        .loading-dots {
            display: flex;
            justify-content: center;
            gap: 5px;
            margin-bottom: 15px;
        }
        
        .loading-dot {
            width: ${config.size === 'small' ? '8px' : config.size === 'large' ? '12px' : '10px'};
            height: ${config.size === 'small' ? '8px' : config.size === 'large' ? '12px' : '10px'};
            background: var(--primary-color);
            border-radius: 50%;
            animation: bounce 1.4s infinite ease-in-out;
        }
        
        .loading-dot:nth-child(1) { animation-delay: -0.32s; }
        .loading-dot:nth-child(2) { animation-delay: -0.16s; }
        
        /* Skeleton Loading */
        .loading-skeleton {
            display: flex;
            flex-direction: column;
            gap: 10px;
            margin-bottom: 15px;
        }
        
        .skeleton-line {
            height: ${config.size === 'small' ? '12px' : config.size === 'large' ? '16px' : '14px'};
            background: linear-gradient(90deg, #f0f0f0 25%, #e0e0e0 50%, #f0f0f0 75%);
            background-size: 200% 100%;
            animation: shimmer 2s infinite;
            border-radius: 4px;
        }
        
        .skeleton-line.short { width: 70%; }
        .skeleton-line.medium { width: 85%; }
        .skeleton-line.long { width: 100%; }
        
        /* Progress Bar */
        .loading-progress {
            width: 100%;
            height: 4px;
            background: rgba(255, 255, 255, 0.2);
            border-radius: 2px;
            overflow: hidden;
            margin-bottom: 15px;
        }
        
        .progress-bar {
            height: 100%;
            background: var(--primary-color);
            width: 0%;
            animation: progress 2s ease-in-out infinite;
        }
        
        .loading-message {
            color: var(--extra-light);
            font-family: 'Poppins', sans-serif;
            font-size: ${config.size === 'small' ? '14px' : config.size === 'large' ? '18px' : '16px'};
            margin: 0;
            font-weight: 500;
        }
        
        /* Animations */
        @keyframes spin {
            0% { transform: rotate(0deg); }
            100% { transform: rotate(360deg); }
        }
        
        @keyframes bounce {
            0%, 80%, 100% { transform: scale(0); }
            40% { transform: scale(1); }
        }
        
        @keyframes shimmer {
            0% { background-position: -200% 0; }
            100% { background-position: 200% 0; }
        }
        
        @keyframes progress {
            0% { width: 0%; }
            50% { width: 70%; }
            100% { width: 100%; }
        }
        
        /* Thème Amaro */
        .loading-amaro .loading-content {
            background: var(--secondary-color);
            border-color: var(--primary-color);
        }
        
        .loading-light .loading-content {
            background: #ffffff;
            color: #333333;
        }
        
        .loading-light .loading-message {
            color: #333333;
        }
        
        .loading-dark .loading-content {
            background: #1a1a1a;
        }
    `;

    // Ajouter les styles s'ils n'existent pas déjà
    if (!document.querySelector('#amaro-loading-styles')) {
        const styleSheet = document.createElement('style');
        styleSheet.id = 'amaro-loading-styles';
        styleSheet.textContent = styles;
        document.head.appendChild(styleSheet);
    }

    // Structure HTML
    let loadingHTML = '';

    if (config.overlay) {
        loadingHTML += '<div class="loading-overlay"></div>';
    }

    loadingHTML += '<div class="loading-content">';

    switch (config.type) {
        case 'dots':
            loadingHTML += `
                <div class="loading-dots">
                    <div class="loading-dot"></div>
                    <div class="loading-dot"></div>
                    <div class="loading-dot"></div>
                </div>
            `;
            break;

        case 'skeleton':
            loadingHTML += `
                <div class="loading-skeleton">
                    <div class="skeleton-line long"></div>
                    <div class="skeleton-line medium"></div>
                    <div class="skeleton-line short"></div>
                </div>
            `;
            break;

        case 'progress':
            loadingHTML += `
                <div class="loading-progress">
                    <div class="progress-bar"></div>
                </div>
            `;
            break;

        default: // spinner
            loadingHTML += '<div class="loading-spinner"></div>';
    }

    loadingHTML += `<p class="loading-message">${config.message}</p>`;
    loadingHTML += '</div>';

    loadingEl.innerHTML = loadingHTML;

    // Ajouter au DOM
    if (config.target === document.body) {
        document.body.style.overflow = 'hidden';
    }
    config.target.appendChild(loadingEl);

    // Auto-hide si durée spécifiée
    if (config.duration) {
        setTimeout(() => {
            hideLoading(loadingEl.id);
        }, config.duration);
    }

    // Retourner l'ID pour pouvoir le cacher manuellement
    return loadingEl.id;
}

// Fonction pour cacher le loading
function hideLoading(loadingId = null) {
    let loadingEl;

    if (loadingId) {
        loadingEl = document.getElementById(loadingId);
    } else {
        // Cacher tous les loadings
        const loadings = document.querySelectorAll('[id^="amaro-loading-"]');
        if (loadings.length > 0) {
            loadingEl = loadings[loadings.length - 1];
        }
    }

    if (loadingEl) {
        // Animation de disparition
        loadingEl.style.opacity = '0';
        loadingEl.style.transition = 'opacity 0.3s ease';

        setTimeout(() => {
            if (loadingEl.parentNode) {
                loadingEl.parentNode.removeChild(loadingEl);
            }

            // Réactiver le scroll si plus de loadings
            const remainingLoadings = document.querySelectorAll('[id^="amaro-loading-"]');
            if (remainingLoadings.length === 0) {
                document.body.style.overflow = '';
            }
        }, 300);
    }
}

// Fonction pour mettre à jour le message
function updateLoadingMessage(loadingId, newMessage) {
    const loadingEl = document.getElementById(loadingId);
    if (loadingEl) {
        const messageEl = loadingEl.querySelector('.loading-message');
        if (messageEl) {
            messageEl.textContent = newMessage;
        }
    }
}

// Fonction de loading pour les opérations asynchrones
async function withLoading(operation, options = {}) {
    const loadingId = showLoading(options);

    try {
        const result = await operation();
        hideLoading(loadingId);
        return result;
    } catch (error) {
        hideLoading(loadingId);
        throw error;
    }
}



































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

function getCategories() {
    const produits = getProduits();
    return [...new Set(produits.map(produit => produit.categorie))];
}

function getMarques() {
    const produits = getProduits();
    return [...new Set(produits.map(produit => produit.marque))];
}

function getBestSellers() {
    return getProduits({ bestSellersSeulement: true });
}

function getNouveautes() {
    return getProduits({ nouveautesSeulement: true });
}

// Tous les produits
const tousLesProduits = getProduits();

// Robes seulement
const robes = getProduits({ categorie: 'robes' });

// Produits en solde
const enSolde = getProduits({ prixMax: 100 });

// Recherche
const resultatsRecherche = getProduits({ termeRecherche: 'soie' });

// Best-sellers triés par prix
const bestSellers = getProduits({
    bestSellersSeulement: true,
    trierPar: 'prix-croissant'
});

// Nouveautés en stock
const nouvellesArrivees = getProduits({
    nouveautesSeulement: true,
    enStockSeulement: true
});




//===========================================================================

// Fonctions de loading professionnelles
function showLoading(message = 'Chargement en cours...') {
    // Créer l'overlay de loading
    const overlay = document.createElement('div');
    overlay.className = 'loading-spinner-overlay active';
    overlay.id = 'loading-spinner';

    overlay.innerHTML = `
        <div class="loading-spinner"></div>
        <div class="loading-text">${message}</div>
    `;

    document.body.appendChild(overlay);
    document.body.classList.add('no-scroll');

    return overlay.id;
}

function hideLoading() {
    const overlay = document.getElementById('loading-spinner');
    if (overlay) {
        overlay.classList.remove('active');
        setTimeout(() => {
            if (overlay.parentNode) {
                overlay.parentNode.removeChild(overlay);
            }
            document.body.classList.remove('no-scroll');
        }, 300);
    }
}