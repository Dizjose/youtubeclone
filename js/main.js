import { videos } from "./data/videos.js";
import { createVideoCard } from "./components/videoCard.js";
import { toggleSidebar } from "./modules/sidebar.js";
import { handleResize } from "./modules/resize.js";
import { initTabs } from "./modules/tabs.js";

// Render de videos dentro de la grilla principal
function renderVideoGrid() {
  const videoGrid = document.getElementById("videoGrid");

  videoGrid.innerHTML = videos
    .map(video => createVideoCard(video))
    .join("");
}

// Inicializa los componentes y funcionalidades principales de la aplicación
function initApp() {
  renderVideoGrid();
  initTabs();
  handleResize();

  const menuBtn = document.getElementById("menuBtn");

  menuBtn?.addEventListener("click", toggleSidebar);

  window.addEventListener("resize", handleResize);
}

// Inicializa la aplicación una vez que todos los elementos HTML estén disponibles
document.addEventListener("DOMContentLoaded", initApp);