/* Filtres du cours et démonstration pédagogique de jointure. */
(() => {
  const filters = document.querySelector("[data-filtres-semaines]");
  if (filters) {
    const cards = [...document.querySelectorAll("[data-themes]")];
    const buttons = [...filters.querySelectorAll("[data-filtre]")];
    const counter = filters.querySelector("[data-compteur-semaines]");

    function filterWeeks(theme) {
      let visible = 0;
      cards.forEach((card) => {
        const matches = theme === "tous" || card.dataset.themes.split(" ").includes(theme);
        card.hidden = !matches;
        if (matches) visible += 1;
      });
      buttons.forEach((button) => {
        button.setAttribute("aria-pressed", String(button.dataset.filtre === theme));
      });
      counter.textContent = visible + (visible === 1 ? " semaine affichée" : " semaines affichées") +
        " sur " + cards.length;
    }

    buttons.forEach((button) => {
      button.addEventListener("click", () => filterWeeks(button.dataset.filtre));
    });
    filterWeeks("tous");
    filters.hidden = false;
  }

  const demo = document.querySelector("[data-jointure-demo]");
  if (!demo) return;

  // Données fictives pour rendre les correspondances visibles.
  const lots = [
    { lot: "L01", source: "A", code: "001" },
    { lot: "L02", source: "B", code: "001" },
    { lot: "L03", source: "A", code: "002" }
  ];
  const tariffs = [
    { source: "A", code: "001", rate: 10 },
    { source: "B", code: "001", rate: 20 },
    { source: "A", code: "002", rate: 5 }
  ];
  const tariffBody = demo.querySelector("[data-demo-tarifs]");
  const resultBody = demo.querySelector("[data-demo-lignes]");
  const status = demo.querySelector("[data-demo-statut]");
  const explanation = demo.querySelector("[data-demo-explication]");
  const code = demo.querySelector("[data-demo-code]");

  function appendRow(body, cells, mismatch = false) {
    const row = document.createElement("tr");
    if (mismatch) row.classList.add("jointure-incoherente");
    cells.forEach((value) => {
      const cell = document.createElement("td");
      cell.textContent = String(value);
      row.appendChild(cell);
    });
    body.appendChild(row);
  }

  function updateJoin() {
    const composite = demo.querySelector('input[name="cle-jointure"]:checked').value === "composite";
    const duplicate = demo.querySelector("[data-demo-doublon]").checked;
    const references = duplicate ? [...tariffs, { ...tariffs[0] }] : tariffs;
    const rows = lots.flatMap((lot) =>
      references
        .filter((tariff) => tariff.code === lot.code && (!composite || tariff.source === lot.source))
        .map((tariff) => ({ lot, tariff }))
    );

    tariffBody.replaceChildren();
    references.forEach((tariff) => appendRow(tariffBody, [tariff.source, tariff.code, tariff.rate + " %"]));
    resultBody.replaceChildren();
    rows.forEach(({ lot, tariff }) => {
      const mismatch = lot.source !== tariff.source;
      appendRow(resultBody, [
        lot.lot, lot.source, lot.code, tariff.source, tariff.rate + " %",
        mismatch ? "Autre source" : "Même source"
      ], mismatch);
    });

    const extra = rows.length - lots.length;
    status.textContent = rows.length + " lignes obtenues pour " + lots.length + " lots" +
      (extra > 0 ? " · " + extra + " lignes supplémentaires" : " · effectif attendu conservé");
    status.dataset.etat = extra > 0 ? "alerte" : "valide";
    explanation.textContent = composite
      ? (duplicate
        ? "Même avec la clé composite, le doublon A + 001 multiplie L01. Vérifier aussi l’unicité de la table de référence."
        : "Chaque lot retrouve le tarif de sa source. La paire source + code est unique dans la table de référence.")
      : "Le code 001 existe dans deux sources. La jointure sur le code seul associe des lots à des tarifs d’une autre source." +
        (duplicate ? " Le doublon exact ajoute encore des correspondances." : "");
    code.textContent = 'lots |>\n  left_join(tarifs, by = ' +
      (composite ? 'c("source_table", "code_tarifaire")' : '"code_tarifaire"') + ')';
  }

  demo.querySelectorAll("input").forEach((input) => input.addEventListener("change", updateJoin));
  updateJoin();
  demo.querySelector("[data-demo-commandes]").hidden = false;
  demo.querySelector("[data-demo-resultat]").hidden = false;
})();
