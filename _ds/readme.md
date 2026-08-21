# Miss Voli — Design System

Miss Voli est une coach d'anglais indépendante basée à Lyon, qui donne des ateliers en petits groupes, en présentiel et en visio. La marque tient en une image : un pin émail. Portrait cerné d'or, bandeau rouge, lettrage crème. Tout le système découle de là — le rouge dominant, la crème en fond, l'encre brune pour le texte, les coins très arrondis, et une iconographie faite de 17 pins émail plutôt que d'icônes vectorielles.

La promesse tient en une phrase, reprise dans tous les supports : **Mistakes welcome.** — sous-titrée « Les erreurs sont les bienvenues. » quand la place le permet.

## Sources

| Source | Chemin | Ce qu'on en a tiré |
| --- | --- | --- |
| Brand book PDF (2 pages, août 2026) | `uploads/Branding Miss Voli.pdf` | Palette avec hex et usage, échelle typographique, formes, composants core, ton de voix, liste des cinq applications |
| Pin logo | `uploads/Logo Miss Voli Pins.png` | Marque officielle |
| 17 pins émail PNG | `uploads/*.png` | Système d'iconographie, copié dans `assets/pins/` |

Aucun codebase, aucun fichier Figma, aucun deck n'a été fourni. Les cinq UI kits sont des reconstitutions fidèles au brand book (qui nomme explicitement les cinq supports et montre leurs composants), pas des recopies d'écrans existants. Signature du document source : « Design system · @missvoli_tutor · août 2026 ».

## Index

| Fichier | Contenu |
| --- | --- |
| `styles.css` | Point d'entrée unique — n'importe que des fichiers `tokens/` |
| `tokens/fonts.css` | Fredoka + DM Sans (Google Fonts) |
| `tokens/colors.css` | Palette brute + alias sémantiques |
| `tokens/typography.css` | Familles, graisses, échelle, raccourcis `--text-*` |
| `tokens/spacing.css` | Échelle base 4 + conteneurs |
| `tokens/shape.css` | Rayons, bordures, ombres, courbes et durées d'animation |
| `tokens/base.css` | Reset, éléments de texte, liens, focus |
| `guidelines/*.card.html` | 17 fiches de spécimen (onglet Design System) |
| `assets/pins/` | Les 17 pins émail PNG |
| `assets/logo-miss-voli-pin.png` | Le logo fourni |
| `thumbnail.html` | Vignette du système |
| `SKILL.md` | Enveloppe Agent Skill |

### Composants

`components/core/` — **Button**, **Badge**, **Card**, **SectionHeading**
`components/forms/` — **Input**
`components/brand/` — **Logo**, **PinIcon**, **PinCard**, **StickerBand**

Chaque dossier contient un `.jsx`, un `.d.ts`, un `.prompt.md` et une fiche `@dsCard`.

**Ajouts intentionnels** (absents du brand book, ajoutés parce que le motif se répète dans les cinq supports) : `SectionHeading` (sur-titre + titre + chapô), `PinCard` (pin + titre + ligne de contexte), `Logo` (lockup pin + logotype), `PinIcon` (accès nommé aux 17 pins).

### UI kits

| Dossier | Support |
| --- | --- |
| `ui_kits/site_web/` | Page d'accueil, réservation en deux étapes |
| `ui_kits/reseaux_sociaux/` | Trois posts 1080×1080, deux stories 1080×1920 |
| `ui_kits/pedagogie/` | Fiche de vocabulaire avec exercice |
| `ui_kits/newsletter/` | E-mail mensuel, corps 640px |
| `ui_kits/print/` | Carte de visite 85×55 mm, flyer A5, recto-verso |

---

## Content fundamentals

**Langue.** Tout le système est en français ; l'anglais n'apparaît que comme matière pédagogique (expressions, exemples) et dans la baseline « Mistakes welcome. », toujours accompagnée de sa traduction « Les erreurs sont les bienvenues. ».

**Personne : deux registres, jamais mélangés.** Le tutoiement et le vouvoiement cohabitent, séparés par support.

| Registre | Où | Exemple |
| --- | --- | --- |
| **Tu** | Instagram, stories, bio, newsletter mensuelle, e-mails à la communauté (English Olympics) | « Tu bloques à l'oral ? On en parle jeudi. » |
| **Vous** | Site, pages de vente, devis, factures, préparation d'examens, premier contact | « Vous avancez à votre rythme, en petit groupe. » |

La règle est de rassurance : un inconnu qui envisage de payer se rassure mieux au vous. Le site s'adresse aussi à des parents dont l'enfant prépare un examen officiel (TOEFL, TEFL). C'est le public qui a le plus besoin d'être rassuré, et celui pour qui le tutoiement sonnerait léger. Le vous reste chaleureux — celui de l'artisan, pas celui de l'institution — et n'autorise ni jargon ni formule administrative. Un même support ne panache jamais les deux : les placeholders d'un formulaire du site disent « votre@email.com », ceux d'un lien Instagram « ton@email.com ».

Dans les deux registres, la coach dit « je » rarement et signe « Voli ». Le collectif domine : « on avance ensemble », « on parle », « on fait le point ». C'est le « on » qui porte la chaleur, quelle que soit la personne.

**La newsletter est un support de communauté, donc elle tutoie.** On y entre par choix, après un atelier ou depuis Instagram : le lecteur n'est plus un inconnu. Le seul endroit où elle bascule au vous est un encart de vente explicite adressé à des parents (préparation TOEFL, TEFL) — auquel cas cet encart est visuellement séparé du corps de la lettre, comme une annonce.

**Vocabulaire.** Le brand book pose deux listes fermées.

> **On dit** : « coach », « ateliers », « on avance ensemble ». Tutoiement, phrases courtes, encouragement direct.
> **On évite** : « professeur », « cours magistraux », « programme ». Pas d'emoji dans l'UI, jamais de ton scolaire.

Corollaires : pas de « élève » (dire « toi », ou rien), pas de « niveau requis » (dire « débutant ok »), pas de « inscription » quand « réserver » suffit, pas de « leçon » ni de « devoirs ».

**Longueur.** Titres de trois à huit mots. Chapôs d'une à deux phrases. Descriptions de carte : une phrase, point final. Le brand book lui-même donne le calibre : « On avance ensemble, à ton rythme. Des petits groupes, des thèmes de vie réelle, et zéro jugement : juste des progrès. »

**Casse.** Phrase capitalisée partout. Jamais de Title Case français, jamais de capitales sauf dans les sur-titres (`.mv-eyebrow`, 12px, tracking 0.14em). Les boutons sont en casse de phrase : « Réserver un atelier », pas « RÉSERVER UN ATELIER ».

**Ponctuation.** Le tiret cadratin est **proscrit**. C'est la marque la plus reconnaissable d'un texte généré, et en français il n'a jamais eu l'usage courant qu'il a en anglais. À la place : deux-points quand la suite explique, virgule quand elle prolonge, point quand elle s'oppose. « Zéro jugement : juste des progrès. » Les parenthèses restent possibles pour un aparté court. Guillemets français, avec espace insécable à l'intérieur. Point d'exclamation autorisé, un seul, dans les retours positifs (« Bien joué ! »). Espaces insécables avant `!`, `?`, `:` et `;`.

**Français d'abord, pas d'anglais traduit.** La cible est lyonnaise et attachée à sa langue. Un texte calqué sur l'anglais se repère immédiatement et décrédibilise une coach de langues. Ce qu'il faut surveiller :

| Structure anglophone | Ce qu'on écrit |
| --- | --- |
| Titre en fragment nominal (« Trois étapes. Zéro pression. ») | Une phrase avec un verbe : « On avance en trois étapes. » |
| Impératif publicitaire (« Réservez maintenant », « Découvrez ») | « Réserver un atelier », « Voir les créneaux » |
| Adjectif antéposé calqué (« une simple méthode ») | « une méthode simple » |
| Possessif systématique (« votre progression, votre rythme, votre objectif ») | Le français élide : « à votre rythme, vers un objectif clair » |
| Question rhétorique en accroche (« Envie de progresser ? ») | Une affirmation : « Vous progressez plus vite en petit groupe. » |
| Rythme ternaire publicitaire (« Simple. Rapide. Efficace. ») | Une phrase pleine, même courte |
| Faux amis et anglicismes (« supporter », « adresser un problème », « au final », « en charge de ») | « soutenir », « régler », « finalement », « responsable de » |

Autres réflexes : pas de majuscule en milieu de phrase pour insister, pas de gras sur des mots isolés au fil du texte, pas de listes à puces là où deux phrases suffisent. Le vocabulaire anglais reste anglais, sans italique ni guillemets, quand il désigne la matière enseignée (`to nail it`, `a heads-up`) ; partout ailleurs on écrit français.

**Encouragement.** Toute erreur est formulée comme un progrès en cours, jamais comme une faute : « Presque parfait, encore un petit effort ! » Une correction se termine toujours par la marche à suivre, pas par le constat.

**Emoji.** Jamais dans l'interface. Le brand book l'écrit noir sur blanc. La chaleur passe par les pins émail et par la couleur, pas par des glyphes système.

---

## Visual foundations

**Couleurs.** Huit couleurs, chacune avec un emploi unique nommé dans le brand book.

| Nom | Hex | Emploi |
| --- | --- | --- |
| Rouge Miss Voli | `#C0392B` | Marque, boutons primaires, encarts |
| Rouge foncé | `#98291D` | Survol du rouge, uniquement |
| Crème | `#FBF2DF` | Fond de page par défaut |
| Crème 100 | `#F3E4C4` | Cartes et blocs alternés |
| Encre brune | `#2E1B12` | Texte, footer |
| Pêche | `#F4C9AC` | Étiquettes douces, texte secondaire sur rouge |
| Orange | `#D9662E` | Liens et anneau de focus, rien d'autre |
| Menthe | `#7FAE8B` | Validations pédagogiques, rien d'autre |

Trois fonds seulement sont autorisés : crème (page), blanc (cartes), rouge (encarts et bandeaux). Le blanc n'est jamais un fond de page — il n'existe que posé sur la crème. Les neutres de texte sont des dérivés désaturés de l'encre brune (`--encre-70`, `--encre-50`, `--encre-20`), jamais des gris froids.

**Typographie.** Deux familles, strictement réparties. **Fredoka** — géométrique arrondie, très proche de la rondeur du logo — pour les titres et le logotype, en 600 et 700 uniquement. **DM Sans** pour tout le reste : texte courant, UI, étiquettes, légendes. Aucune troisième police, aucune police monospace (le système n'affiche pas de code). Échelle : 64 / 48 / 32 / 24 / 20 en Fredoka, 19 / 16 / 14 / 13 / 12 en DM Sans. Interlignage 1.1 en display, 1.6 en corps. L'italique existe pour une seule chose : l'annotation d'encouragement.

**Espacement.** Base 4px, échelle 4→96. Conteneur 1160px, gouttière 24px, rythme vertical de section 80px (72px sur les pages denses). Les cartes respirent : padding 24px par défaut, 32px pour les grandes.

**Fonds.** Aplats unis, toujours. Aucun dégradé nulle part dans le système — c'est délibéré et cela doit le rester. Aucune photographie ni image pleine largeur n'a été fournie ; là où une photo irait, poser un aplat crème ou une grille de pins. Aucune texture, aucun grain. Le seul motif du système est le bandeau sticker : icônes ligne crème répétées sur fond rouge, pleine largeur, en haut ou en bas d'un bloc.

**Coins.** Très arrondis, c'est la signature de forme du brand book. Cartes 24px, grandes surfaces 32px, petits blocs 16px, boutons et champs en pilule pleine. Jamais d'angle vif sauf sur le bandeau sticker, qui court d'un bord à l'autre.

**Ombres.** Toutes teintées d'encre brune (`rgba(46,27,18,…)`), jamais de noir pur — c'est ce qui les rend chaudes. Quatre niveaux : `xs` pour les séparations, `sm` pour les blocs internes, `md` pour les cartes posées sur la crème, `lg` pour l'état survolé. Le rouge a son ombre propre, `--shadow-brand`, teintée rouge. Aucune ombre interne sauf le liseré clair optionnel en haut des surfaces claires. Pas de « protection gradient » : les textes ne se posent jamais sur une image, donc pas besoin — quand un texte doit se détacher, on lui donne une capsule (carte ou pilule).

**Bordures.** 1.5px par défaut, 2px pour le contour des boutons secondaires. Couleur `--border-card` (`#EFE2CC`) sur crème, rouge pour les contours d'action. Jamais de bordure colorée sur un seul côté.

**Transparence et flou.** Deux emplois, pas plus : la nav collante (crème à 88% + `blur(12px)`) et l'arrière-plan de modale (encre brune à 50% + `blur(4px)`). Partout ailleurs, les surfaces sont opaques.

**Animation.** Sobre. Transitions de 200ms en `cubic-bezier(.2,.7,.3,1)` sur la couleur, la transformation et l'ombre. Rien d'autre ne bouge : pas de rebond, pas de rotation, pas d'apparition au défilement, pas de compteur animé. Les pins émail ne tournent jamais.

**Survol.** Bouton primaire : le fond passe en rouge foncé `#98291D`. Bouton secondaire et ghost : un voile rouge à 5% arrive derrière le texte. Carte cliquable : translation de −2px et passage de `--shadow-md` à `--shadow-lg`. Lien : couleur orange → rouge foncé et le soulignement apparaît (`border-bottom` de la couleur courante). Jamais d'opacité comme état de survol.

**Appui.** `scale(.97)` sur les boutons, sans changement de couleur supplémentaire. Les cartes ne se compriment pas.

**Focus.** Anneau orange de 2px, offset 2px. Sur les champs, l'anneau devient un halo orange à 15% et le contour passe à l'orange.

**Désactivé.** Opacité 45%, curseur `not-allowed`, ombre retirée. Pas de gris de substitution.

**Imagerie.** La seule imagerie du système est photographique-en-illustration : les pins émail. Ambiance chaude, palette rouge / crème / noir, contour doré, ombre portée douce. Pas de noir et blanc, pas de filtre froid, pas de grain. Si une photographie devait entrer dans le système, elle devrait être chaude, lumineuse et non filtrée — mais aucune n'a été fournie.

**Mise en page.** Une nav collante en haut, rien d'autre de fixe. Pas de sidebar. Contenu centré dans un conteneur 1160px. Sur les pages longues, alternance crème / blanc pour découper les sections, jamais plus de deux fonds différents à l'écran. Le bandeau sticker sert de charnière avant le footer.

---

## Iconography

**Le système d'icônes de la marque, ce sont les pins émail.** Dix-sept visuels PNG fournis (`assets/pins/`), tous dans la même esthétique que le logo : contour doré, aplats rouge / crème / noir, ombre portée douce, cadrage carré 810×810. Ils couvrent les thèmes d'ateliers et la vie quotidienne.

`miss-voli` (portrait, sert de logo) · `mistakes-welcome` (la baseline, en pin) · `cinema` · `dialogues` · `diplome` · `en-ligne` · `fearless` · `globe-trotter` · `jeux` · `lyon` · `musique` · `niveau` · `sessions` · `sorties` · `tea` · `th` · `travail` · `vacances`

**`sorties`** couvre le registre « girls' night out » / afterwork entre mamans ou entre collègues : cocktails, rires, anglais glissé dans la conversation plutôt qu'enseigné. C'est le pendant plus festif de `tea` (qui reste calme et posé) — les deux ne sont jamais utilisés l'un pour l'autre.

On les utilise à 40–120px, un par carte ou par bloc, jamais deux côte à côte dans un même titre. `<PinIcon name="tea" size={72} />`. Ne jamais les recolorer, les détourer, les mettre en niveaux de gris, ni les redessiner en SVG.

**Le pin `lyon`** — les armes de la ville, lion sur écu rouge et couronne murale dorée — a un emploi réservé : il marque l'ancrage local. Il accompagne toute mention de la ville (footer, pied de flyer, verso de carte, page « À propos »), et lui seul. Ne pas le poser dans une grille thématique à côté de `tea` ou `cinema` : ce n'est pas un thème d'atelier, c'est une signature de territoire. Sa palette est déjà celle de la marque, donc il se pose aussi bien sur crème que sur encre brune.

**Icônes fonctionnelles.** Le brand book décrit un second registre, minimal : « icônes ligne crème sur fond rouge, en bandeau répétitif », deux glyphes visibles — une étoile et une bulle de dialogue, trait fin, arrondi. Aucun fichier source n'a été fourni pour ce jeu. Le composant `StickerBand` les redessine en SVG inline avec le tracé et la graisse de trait de **Lucide** (1.6px, extrémités arrondies), qui correspond au style du brand book. **Substitution à valider** — si un jeu d'icônes ligne officiel existe, il doit remplacer ces deux tracés.

Le système n'a besoin d'aucune autre icône : pas de chevrons, pas de flèches, pas d'icônes sociales dans les maquettes fournies. Si une interface en réclame, prendre Lucide, trait 1.6px, taille 20 ou 24px, couleur `currentColor`.

**Emoji : jamais.** **Caractères Unicode comme icônes : jamais** (pas de « → », pas de « ✓ ») — une validation s'écrit avec un `Badge tone="success"`.

---

## Substitutions à valider

1. **Fichiers de police.** Aucun binaire n'a été fourni. `tokens/fonts.css` charge **Fredoka** et **DM Sans** depuis Google Fonts — ce sont bien les deux familles nommées dans le brand book, donc la substitution ne porte que sur la source, pas sur le dessin. Si Miss Voli possède des fichiers sous licence (woff2), les déposer dans `assets/fonts/` et remplacer l'`@import` par des règles `@font-face`.
2. **Glyphes du bandeau sticker.** Tracés Lucide, voir Iconography.
3. **Photographies.** Aucune image de personne, de lieu ou d'ambiance n'a été fournie. Les maquettes tiennent sur les aplats et les pins.
