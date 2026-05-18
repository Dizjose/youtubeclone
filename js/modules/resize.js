export function handleResize() {
  const sidebar = document.getElementById("sidebar");
  const mainContent = document.getElementById("main-content");

  if (window.innerWidth > 768) {
    // Desktop → sidebar visible correctamente
    sidebar.classList.remove("collapsed");
    mainContent.classList.remove("expanded");
  } else {
    // Móvil → sidebar oculto por defecto
    sidebar.classList.add("collapsed");
    mainContent.classList.add("expanded");
  }
}