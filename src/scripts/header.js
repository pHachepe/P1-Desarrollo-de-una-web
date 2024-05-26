document.addEventListener("DOMContentLoaded", () => {
  const mobileMenu = document.getElementById("mobile-menu");
  const menuList = document.getElementById("menu-list");

  mobileMenu.addEventListener("click", () => {
    menuList.classList.toggle("open");
    mobileMenu.innerHTML = menuList.classList.contains("open")
      ? '<span class="fas fa-times"></span>'
      : '<span class="fas fa-bars"></span>';
  });

  // Se redirige desde aquí a la página principal porque si se engloba la imagen en una etiqueta <a> se estropea el aspect-ratio de la imagen
  const logo = document.getElementById("logo");
  logo.addEventListener("click", () => {
    window.location.href = "/";
  });
});
