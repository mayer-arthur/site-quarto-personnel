---
name: rediger-quarto
description: Rédiger et vérifier les pages Quarto du site personnel STT-6230 à partir de traces sourcées, puis mettre à jour la progression et la déclaration IA.
---

1. Lis `progression.md` et la partie utile de `atelier/sources/traces.md`. En cas de lacune factuelle, laisse une tâche précise dans la progression.
2. Sur `cours.qmd`, relie la chronologie aux compétences développées. Pour une réalisation, couvre le contexte, la production, les outils, la validation, la compétence, la limite et la provenance. Explique un choix technique et le compromis qu’il résout.
3. Garde les journaux, les chemins privés et les instructions d’agents hors des pages publiques. Avant d’ajouter une page, déclare-la dans la liste de rendu et relie-la dans le site.
4. Lance `quarto render` à la racine. Si OneDrive bloque le rendu direct, suis la procédure du README. Vérifie les liens et le contenu généré dans `docs/`.
5. Mets à jour `progression.md` avec le résultat du contrôle et `ai-log.md` avec les usages significatifs. Répercute les usages qui influencent le site dans `declaration-ia.qmd`.