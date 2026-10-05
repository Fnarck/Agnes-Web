# README — Site Web Agnès Brandely

## Structure du projet

```
Agnes-Web/
├── index.html          ← Page principale (one-page complète)
├── style.css           ← Design premium (Cormorant + Inter)
├── main.js             ← Animations, formulaire Formspree, navigation
├── sitemap.xml         ← Indexation Google
├── robots.txt          ← Directives moteurs de recherche
├── llms.txt            ← Indexation par les IA (standard émergent)
└── images/
    ├── hero_botanical.png           ← Illustration hero
    ├── agnes_portrait.jpg           ← Portrait Agnès (production)
    ├── agnes_portrait_botanical.png ← Portrait Agnès version botanique (production)
    ├── dr_bach.jpg                  ← Photo Dr Edward Bach
    ├── fleurs_bach_multiples.jpg    ← Composition 3 fleurs de Bach
    └── fleur_bach_jaune.jpg         ← Fleur jaune de Bach
```

## État du projet — Sprint 2026-10-01

### Expérience interactive « Quelle fleur vous parle aujourd'hui ? »

Intégration finalisée et contrôlée localement le 2026-10-05. Publication sur `agnesbrandely.fr` encore en attente
du feu vert de Franck : la présence des fichiers dans le dépôt local ne signifie pas que la section est en ligne.

- Ajout d'une section éditoriale dédiée, placée après la présentation de l'approche du Dr Bach.
- Présentation concise du parcours : 7 familles émotionnelles, 38 fleurs et durée indicative de 5 minutes.
- CTA externe vers le prototype public :
  `https://fleurs-bach-agnes-experience.espace-de-tr-3475.chatgpt.site`
- Ouverture dans un nouvel onglet avec protection `noopener noreferrer`.
- Mention explicite du caractère non diagnostique de l'expérience.
- Lien ajouté au pied de page pour faciliter l'accès à la section.
- Mise à jour des mentions d'hébergement : Vercel est la source de vérité actuelle.
- Accès annoncé comme ouvrant un nouvel onglet pour les lecteurs d'écran.
- Grille et bouton adaptés aux petits écrans, y compris 320 px, et prise en compte de la préférence de mouvement réduit.

Contrôles effectués : syntaxe de `main.js`, absence d'erreurs de whitespace Git, 54 identifiants HTML uniques,
7 références de fichiers locaux et 24 ancres internes vérifiées, rendu de la nouvelle section à 320, 390, 768 et
1024 px. Le prototype public se charge sans authentification. Aucune soumission du formulaire de contact n'a été faite.

La nouvelle section ne déborde plus à 320 px. Un débordement global de la page existe encore à cette largeur en dehors
de cette section ; il relève d'une revue responsive générale, non incluse dans cette intégration.

**Attention au déploiement :** Vercel est relié au dépôt GitHub. Un push sur la branche de production peut déclencher
automatiquement une publication. Ne pas pousser sur `main` sans autorisation explicite de publication.

Le prototype ne conserve actuellement aucune réponse : les choix restent en mémoire dans le navigateur pendant le
parcours puis disparaissent au rechargement. Une évolution ultérieure pourra ajouter une collecte anonyme et un export
CSV, sous réserve de définir le consentement, les données strictement nécessaires et leur durée de conservation.

## État du projet — Sprint 2026-05-21

### ✅ Effectué

#### Thérapie fréquentielle (Bio-résonance)
- Intégration du nouveau soin avec description du déroulement, du bilan et des tags associés.
- Création d'une troisième colonne de tarifs flexible pour l'offre découverte (80 € au lieu de 120 €) et information de déplacement.
- Ajout de l'option dans le menu déroulant du formulaire de contact.

#### Optimisation UI/UX & Agenda
- Refonte esthétique de la rubrique agenda avec un cadre continu solide vert de niveau premium.
- Harmonisation des titres, boutons et explications pour inciter à la consultation de l'agenda en ligne et au contact direct.
- Intégration d'un second encadré de localisation/déplacement dans la carte de l'atelier d'initiation et renommage du CTA en "Me contacter".

---

## État du projet — Sprint 2026-05-08

### ✅ Effectué

#### Hébergement & Domaine

- Déployé en production sur **Vercel** via GitHub (`github.com/Fnarck/Agnes-Web`)
- Domaine `agnesbrandely.fr` déposé chez OVH (DNSSEC actif), relié à Vercel
- Email `contact@agnesbrandely.fr` redirige vers `agnesb63370@gmail.com` (hébergement OVH gratuit 100M)

#### Contenu & Design

- Intégration complète (Cormorant + Inter, animations reveal, témoignages, tarifs)
- SEO & méta configurés pour `agnesbrandely.fr` (sitemap, robots.txt, schema.org)
- Photos réelles en place (agnes_portrait, dr_bach, fleurs_bach_multiples, fleur_bach_jaune)

#### Formulaire de contact — Formspree

- **URL Formspree** : `https://formspree.io/f/xbdwaejb`
- **Compte Formspree** : créé avec `agnesb63370@gmail.com`
- Soumission AJAX (fetch) — utilisateur reste sur la page
- Message de succès vert / message d'erreur rouge avec email de secours
- Email en clair supprimé de la page (anti-spam) → remplacé par "formulaire ci-contre, réponse sous 24h à 48h"

#### Localisation & Navigation

- Adresse complète : Résidence Puy d'Anzelles, Rue des Gargailles, 63 370 Lempdes
- 3 boutons pill-style avec logos SVG inline :
  - **Voir sur Google Maps** (épingle rouge)
  - **Itinéraire Google Maps** (épingle bleue)
  - **Itinéraire Waze** (personnage Waze bleu)

#### Agenda en ligne — Google Rendez-vous

- **Lien de réservation Agnès** : `https://calendar.app.google/vGfQFfZbgZz5e1gK7`
- Page configurée : "Consultation Fleurs de Bach"
- Intégré dans la section contact (bouton "Voir les disponibilités")

---

## ⏳ Reste à faire

### 1. Google Agenda — questions à la réservation (Option B retenue)

Agnès doit ajouter dans sa page de réservation Google :

- **Champs natifs à activer** : Téléphone (Prénom/Nom et Email sont déjà actifs par défaut)
- **Question personnalisée à créer** : "Type de séance souhaitée" → liste déroulante avec :
  - Consultation Fleurs de Bach
  - Séance de sophrologie
  - Libération par toucher crânien
  - Massage énergétique
  - Drainage esthétique
  - Soin du visage
  - Atelier (initiation ou thème)
  - Autre / je ne sais pas encore

Procédure : Google Agenda → sa page de réservation → Modifier → "Questions" → Ajouter une question.

### 2. Stripe — paiement ateliers en ligne (phase suivante)

- Créer compte Stripe avec `agnesb63370@gmail.com`
- Créer un **Payment Link** par atelier (pas de backend nécessaire)
- Intégrer les liens comme boutons dans la section Ateliers du site
- Tarif Stripe : 1,5% + 0,25€ / transaction (EU)

### 3. Stratégie digitale — Instagram (Phase 2)

- Compte Instagram professionnel + bio optimisée + lien → site
- Publication automatique Facebook via Meta Business Suite
- Fréquence : 2 posts/semaine minimum
- Templates Canva réutilisables

---

## Accès & Credentials (ne pas versionner dans le repo public)

| Service       | Compte                          | Lien / ID                                    |
| ------------- | ------------------------------- | -------------------------------------------- |
| Vercel        | Franck                          | Dashboard Vercel → Agnes-Web                 |
| GitHub        | Franck                          | `github.com/Fnarck/Agnes-Web`                |
| OVH           | Franck                          | Domaine agnesbrandely.fr + email             |
| Formspree     | agnesb63370@gmail.com           | ID : `xbdwaejb`                              |
| Google Agenda | agnesb63370@gmail.com           | `calendar.app.google/vGfQFfZbgZz5e1gK7`      |
| Stripe        | à créer / agnesb63370@gmail.com | —                                            |
