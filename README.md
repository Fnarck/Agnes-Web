# 📁 README — Site Web Agnès Brandely

## Structure du projet

```
Agnes-Web/
├── index.html          ← Page principale (one-page complète)
├── style.css           ← Design premium (Cormorant + Inter)
├── main.js             ← Animations, formulaire, navigation
├── sitemap.xml         ← Indexation Google
├── robots.txt          ← Directives moteurs de recherche
├── llms.txt            ← Indexation par les IA (standard émergent)
└── images/
    ├── hero_botanical.png    ← Illustration hero (générée)
    ├── agnes_portrait.png    ← Portrait Agnès (à remplacer — voir ci-dessous)
    ├── dr_bach.png           ← Photo Dr Bach (à placer — voir ci-dessous)
    ├── fleurs_bach_multiples.png  ← Composition 3 fleurs (à placer)
    └── fleur_bach_jaune.png  ← Fleur jaune (à placer)
```

## ⚠️ Photos à placer manuellement

Renomme et place ces fichiers dans le dossier `images/` :

| Fichier attendu | Photo correspondante |
|---|---|
| `agnes_portrait.png` | La photo professionnelle d'Agnès |
| `dr_bach.png` | La photo du Dr Edward Bach |
| `fleurs_bach_multiples.png` | La composition 3 fleurs de Bach |
| `fleur_bach_jaune.png` | La fleur jaune de Bach |

## ⚙️ État du Projet & Next Steps

### ✅ Effectué
- **Contenu & Design** : Intégration complète (Cormorant + Inter, animations, témoignages, tarifs à jour).
- **SEO & Méta** : Configuration terminée pour `agnesbrandely.fr` (Sitemap, robots.txt, schema.org).
- **Hébergement** : Déployé en production sur **Vercel** via GitHub.
- **Domaine** : `agnesbrandely.fr` déposé chez OVH (DNSSEC actif) et relié à Vercel.
- **Email** : Hébergement gratuit 100M activé sur OVH. Redirection de `contact@agnesbrandely.fr` vers `agnesb63370@gmail.com` en place.

### ⏳ Reste à faire (avec Agnès)
#### 1. Formspree (formulaire de contact)
1. Créer un compte gratuit sur [formspree.io](https://formspree.io) avec l'adresse `agnesb63370@gmail.com`
2. Créer un nouveau formulaire et copier l'ID généré (ex: `xabc1234`)
3. Dans `index.html`, mettre à jour la balise form (actuellement configurée avec un `mailto:`) :
   ```html
   <form id="contactForm" action="https://formspree.io/f/VOTRE_ID" method="POST">
   ```

#### 2. Calendly (prise de RDV - Optionnel)
1. Créer un compte sur [calendly.com](https://calendly.com)
2. Dans `index.html`, chercher `https://calendly.com/VOTRE_LIEN` et remplacer par le vrai lien d'Agnès.

## 📱 Instagram First — Stratégie (Phase 2)

Recommandations à développer :
- Compte Instagram professionnel avec bio optimisée + lien Linktree → site
- Publication automatique sur Facebook via Meta Business Suite (gratuit)
- Fréquence : 2 posts/semaine minimum
- Templates Canva (gratuit) réutilisables
- Thèmes : citations Bach, témoignages anonymisés, backstage ateliers, conseils émotionnels
