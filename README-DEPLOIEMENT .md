# Déploiement — missvoli.com

## 1. Fichiers du repo (déploiement automatique via Git)

Chaque push sur la branche principale du repo GitHub redéploie automatiquement le site sur Netlify — aucun transfert manuel.

```
index.html
cours-en-groupe.html
cours-particuliers.html
entreprises.html
ados.html
a-propos.html
contact.html
mentions-legales.html
confidentialite.html
404.html
css/style.css
js/app.js
netlify.toml
sitemap.xml
robots.txt
favicon.svg
img/pins/ (17 fichiers)
img/.gitkeep
```

Transférer aussi les 3 photos une fois disponibles (voir section 3).

### Formulaire (Netlify Forms)

La détection de formulaire est automatique au déploiement : Netlify analyse le HTML publié et enregistre tout formulaire portant `data-netlify="true"`. Rien à activer côté code au-delà de ce qui est déjà en place dans contact.html :

- `<form name="contact" method="post" data-netlify="true" netlify-honeypot="website">`
- `<input type="hidden" name="form-name" value="contact">` (indispensable, c'est ce champ qui identifie la soumission)
- un attribut `name` sur chaque champ (c'est le nom qui sert d'intitulé dans le dashboard)
- le champ leurre `website`, masqué en CSS, qui filtre les robots
- `action="/contact.html?envoi=ok"` : après envoi, Netlify renvoie sur la page contact avec le bandeau de confirmation

Le formulaire n'apparaît dans le dashboard qu'après un déploiement réussi, et seulement s'il est présent dans le HTML publié (pas injecté en JavaScript). Il fonctionne sans JavaScript.

## 2. Vérifications après mise en ligne, dans l'ordre

1. Ouvrir https://missvoli.com/ — vérifier que le HTTPS est actif (cadenas) et qu'il n'y a pas de redirection en boucle.
2. Vérifier que https://www.missvoli.com/ redirige bien vers https://missvoli.com/.
3. Non applicable sur Netlify — désactivé par défaut, rien à vérifier.
4. Vérifier que les URLs sans extension fonctionnent : https://missvoli.com/contact doit afficher contact.html. Un échec vient d'une mauvaise configuration de _redirects ou netlify.toml.
5. Vérifier qu'une URL inexistante affiche bien 404.html (avec le bon code HTTP 404).
6. Tester la soumission du formulaire, vérifier qu'elle apparaît dans le dashboard Netlify Forms (Site settings → Forms), configurer la notification e-mail vers hello@missvoli.com dans Site settings → Forms → Notifications, et vérifier la boîte de réception ET les spams — l'expéditeur des notifications Netlify n'est pas une adresse du domaine missvoli.com, donc ce test est plus important qu'avant, pas moins.
7. Vérifier que le formulaire fonctionne aussi avec JavaScript désactivé.
8. Vérifier le menu burger et la barre fixe mobile sur un téléphone.
9. Vérifier le bouton WhatsApp flottant sur desktop (apparition après 400px de défilement, bulle après 8 secondes).
10. Passer le site dans PageSpeed Insights ou Lighthouse et vérifier le LCP en 4G.
11. Vérifier robots.txt et sitemap.xml, puis soumettre le sitemap dans Google Search Console.

## 3. Liste complète des [À COMPLÉTER]

### Photos à ajouter dans img/
- `img/portrait-miss-voli.webp` — remplace le bloc « [PHOTO À FOURNIR — portrait de Miss Voli] » sur index.html et a-propos.html
- `img/groupe-en-seance.webp` — photo d'une séance de groupe (à intégrer si souhaité)
- `img/hotel-tribe.webp` — remplace le bloc « [PHOTO À FOURNIR — l'Hôtel Tribe] » sur cours-en-groupe.html

### Contenu à compléter, page par page
- **index.html** — jour et horaire d'English Talk et de Back to Basics ; 3 témoignages (bulles « [TÉMOIGNAGE À COLLECTER] ») ; bloc tarifs en commentaire HTML, à activer après validation.
- **cours-en-groupe.html** — jour et horaire des deux groupes ; accès/parking/transports en commun ; réponse FAQ sur un créneau de groupe en soirée ; réponse FAQ sur la politique de report et d'annulation.
- **entreprises.html** — références clients ; statut juridique, SIRET, déclaration d'activité, Qualiopi, CPF.
- **ados.html** — modalités actuelles (lieu, durée, fréquence).
- **contact.html** — horaires de disponibilité.
- **mentions-legales.html** — forme juridique, adresse, SIRET, numéro de déclaration d'activité, coordonnées complètes de l'hébergeur Netlify, Inc.

### Autres
- Configurer la notification Netlify Forms vers hello@missvoli.com (voir section 2, point 6).
- JSON-LD (index.html) : le champ `openingHours` n'est pas renseigné, à ajouter une fois les horaires fixés.

## Notes de fabrication

- Le design applique le design system Miss Voli attaché au projet (couleurs, typographies Fredoka/DM Sans, rayons et composants). Certaines valeurs numériques indiquées dans le brief d'origine (rayon 12px, rouge #D73E23) ont été remplacées par les jetons réels du design system livré (rayon jusqu'à 24px, boutons en pilule, rouge #C0392B / rouge foncé #98291D), qui fait autorité sur la palette et les formes.
- Les illustrations demandées (bulles, tasse, clap de cinéma, mallette, palmier, sceau, ordinateur, sac à dos, écusson au lion) sont remplacées par les pins émail déjà produits pour la marque (dossier `img/pins/`), thématiquement équivalents, plutôt que redessinés en SVG.
