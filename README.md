# Site Quarto personnel — Arthur Mayer

Site du cours STT-6230 à l’Université Laval, automne 2026. La page [Le cours](cours.qmd) rassemble les modules, les défis, les jalons et le projet. Les deux réalisations sont le [Défi 2](defi-2.qmd) et la [collecte GitHub Actions](github-actions.qmd).

## Rendre le site

Lancer `quarto render` depuis la racine, puis ouvrir `docs/index.html`. Pour un aperçu, lancer `quarto preview`. Sur ce poste, Quarto est fourni avec RStudio.

Si OneDrive refuse le remplacement de `docs/` ou du cache, voici la procédure PowerShell vérifiée depuis la racine.

```powershell
$stage = Join-Path (Get-Location).Path ('.quarto/stage-' + [guid]::NewGuid().ToString('N'))
New-Item -ItemType Directory -Path $stage -Force | Out-Null
Get-ChildItem -Path '*.qmd','_quarto.yml','.nojekyll' -Force |
  Copy-Item -Destination $stage -Force
& 'C:/Program Files/RStudio/resources/app/bin/quarto/bin/quarto.exe' render $stage
if ($LASTEXITCODE -ne 0) { throw 'Le rendu a échoué.' }
Get-ChildItem -LiteralPath (Join-Path $stage 'docs') -Force |
  Copy-Item -Destination 'docs' -Recurse -Force
```

Inclure les ressources des pages dans la copie si de nouveaux fichiers sont ajoutés. Si une page est retirée, vérifier que son ancien HTML ne subsiste pas dans `docs/`.

`docs/` contient le rendu pour GitHub Pages. Le [gabarit](atelier/site-personnel-demarrage.zip) est conservé dans l’atelier. [Attribution du gabarit](LICENSE.txt).

## Reprendre le travail

- [AGENTS.md](AGENTS.md) oriente les demandes vers l’agent Sources ou l’agent Quarto. Les prompts invoquent les rôles et leurs skills par chemin.
- [Prompts](atelier/CONTEXTE.md) pour documenter une semaine ou développer une réalisation.
- [Progression](progression.md), [AI-log](ai-log.md) et [registre des traces](atelier/sources/traces.md) pour retrouver l’état du travail et les preuves.

Les dépôts voisins du portfolio et du projet servent de sources en lecture seule.

## Remise à préparer

Renseigner l’adresse publique, le dépôt source et le commit à évaluer après publication. Les deux réalisations sont identifiées en haut de cette page. Le gabarit local indique le mercredi 16 décembre 2026 à 23 h 55. [Consignes du site personnel](https://aureliennicosiaulaval.github.io/programmation-pour-la-science-des-donnees/site-personnel.html).