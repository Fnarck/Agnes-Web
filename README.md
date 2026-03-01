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

## ⚙️ Avant de mettre en ligne

### 1. Formspree (formulaire de contact)
1. Créer un compte gratuit sur [formspree.io](https://formspree.io)
2. Créer un nouveau formulaire et copier l'ID généré (ex: `xabc1234`)
3. Dans `index.html`, remplacer :
   ```
   action="https://formspree.io/f/VOTRE_ID"
   ```
   par ton ID Formspree.

### 2. Calendly (prise de RDV)
1. Créer un compte sur [calendly.com](https://calendly.com)
2. Dans `index.html`, remplacer `https://calendly.com/VOTRE_LIEN` par le vrai lien.

### 3. Nom de domaine
- Remplacer `agnesbrandely.fr` dans `sitemap.xml` et `robots.txt` par le vrai domaine d'Agnès.
- Idem dans le schema.org JSON-LD de `index.html`.
- Idem dans le footer et les meta tags.

### 4. Email
- Remplacer `contact@agnesbrandely.fr` dans `index.html` par la vraie adresse.

## 🚀 Déploiement sur Hostinger

1. Connecte-toi au panel Hostinger (hPanel)
2. Ouvre **File Manager** → public_html
3. Supprime les fichiers par défaut (index.php, etc.)
4. Upload tout le contenu du dossier `Agnes-Web/` (garder la structure)
5. Vérifier que `index.html` est bien à la racine de `public_html`
6. Le site est en ligne ! 🎉

## 📱 Instagram First — Stratégie (Phase 2)

Recommandations à développer :
- Compte Instagram professionnel avec bio optimisée + lien Linktree → site
- Publication automatique sur Facebook via Meta Business Suite (gratuit)
- Fréquence : 2 posts/semaine minimum
- Templates Canva (gratuit) réutilisables
- Thèmes : citations Bach, témoignages anonymisés, backstage ateliers, conseils émotionnels
