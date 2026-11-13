# Progression du site

## Base du 6 novembre 2026

- [x] Créer la navigation et une page qui couvre les modules, les défis, les jalons et le projet.
- [x] Rédiger les deux études de cas à partir des traces retenues.
- [x] Installer dans le dépôt les consignes des agents, leurs skills et les prompts de reprise.
- [x] Rendre les sept pages avec Quarto 1.5.57 et vérifier 158 liens et ressources HTML, les liens Markdown et les métadonnées des deux skills.
- [ ] Compléter la chronologie pour les semaines 11 à 14 et des prochains livrables du projet.
- [ ] Ajouter les détails de présentation qu’Arthur veut rendre publics et relire les études de cas dans sa voix.
- [ ] Vérifier les consignes officielles et les liens que le site pourra rendre publics.
- [ ] Préparer la remise quand le site sera prêt. Renseigner URL, dépôt source, commit évalué et emplacement des réalisations dans le README. L’ajout du lien au portfolio reste à faire par Arthur ou sur instruction distincte.

## Organisation des fichiers

Les sources des pages sont regroupées dans `pages/`, les réalisations dans `pages/realisations/` et le suivi dans `atelier/suivi/`. L’accueil reste à la racine et les anciennes adresses des pages sont prises en charge par des redirections Quarto.

Pour chaque nouvelle séance, noter la page touchée, la preuve et le résultat du contrôle. [Registre des traces](../sources/traces.md) · [AI-log](ai-log.md) · [Prompts de reprise](../CONTEXTE.md).

## Présentation visuelle

La palette et la mise en page sont centralisées dans `assets/styles.css`. Le rendu des sept pages et les liens locaux ont été vérifiés.

## 7 novembre 2026 — Structure visuelle

Navigation, bandeaux, tableaux, cartes et pied de page partagent la palette bordeaux, or, noir et ivoire. Les variantes pour les petits écrans sont dans la feuille de style.

## 13 novembre 2026 — Parcours et semaine 10

Le parcours est développé autour de quatre étapes validées par Arthur. La semaine 10 est ajoutée à la chronologie. La skill actualiser-parcours et les prompts indiquent comment poursuivre les mises à jour avec validation préalable. Les prochaines semaines à documenter sont les semaines 11 à 14.


Contrôles de cette mise à jour terminés. Les sept pages ont été générées, les quatre étapes du parcours et la présence de la semaine 10 dans le tableau ont été contrôlées, ainsi que les liens et ressources locaux. Les 57 liens documentaires et les métadonnées des trois skills ont aussi été vérifiés. Quarto a signalé des refus d’accès au nettoyage des fichiers temporaires après génération.

## 13 novembre 2026 — Accueil et aperçus

La présentation et le bloc En ce moment complètent l’accueil. Les deux réalisations disposent d’un aperçu SVG et d’un accès direct dans le menu. Le favicon est dans assets/favicon.svg. Le nom personnel a été retiré des déclarations et du journal IA du site, y compris du pied de page commun.


Vérification terminée. Les sept pages ont été rendues, les 203 liens et ressources HTML ainsi que 66 liens dans les sources et la documentation ont été contrôlés. Les trois SVG sont valides. La déclaration source, son HTML, sa redirection et le journal IA du site ne contiennent plus le nom personnel. Quarto a encore signalé des refus d’accès lors du nettoyage temporaire après génération.