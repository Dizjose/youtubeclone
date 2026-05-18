export function initTabs() {
const categoryTabs = document.querySelectorAll(".category-tab");

  categoryTabs.forEach(tab => {
    tab.addEventListener("click", function () {
      categoryTabs.forEach(t => t.classList.remove("active"));
      this.classList.add("active");
    });
  });
}