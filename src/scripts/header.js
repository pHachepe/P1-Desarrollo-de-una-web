document.addEventListener("DOMContentLoaded", () => {
  const mobileMenu = document.getElementById("mobile-menu");
  const menuList = document.getElementById("menu-list");

  mobileMenu.addEventListener("click", () => {
    menuList.classList.toggle("open");
    mobileMenu.innerHTML = menuList.classList.contains("open")
      ? '<span class="fas fa-times"></span>'
      : '<span class="fas fa-bars"></span>';
  });
});
