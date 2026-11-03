document.addEventListener("click", (event) => {
  const note = event.target.closest("[data-sticky-note]");
  if (!note) return;

  const selected = note.getAttribute("aria-pressed") !== "true";
  note.setAttribute("aria-pressed", String(selected));
  note.closest("li, article")?.classList.toggle("is-selected", selected);
});
