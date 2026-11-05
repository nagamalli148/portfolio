document.addEventListener("click", (event) => {
  const note = event.target.closest("[data-sticky-note]");
  if (!note) return;

  const selected = note.getAttribute("aria-pressed") !== "true";
  note.setAttribute("aria-pressed", String(selected));
  note.closest("li, article")?.classList.toggle("is-selected", selected);
});

document.querySelectorAll(".case-document").forEach((documentSection) => {
  documentSection.addEventListener("toggle", () => {
    if (!documentSection.open) return;

    const viewer = documentSection.querySelector(".case-document__viewer[data-src]");
    if (!viewer) return;

    viewer.src = viewer.dataset.src;
    viewer.removeAttribute("data-src");
  });
});
