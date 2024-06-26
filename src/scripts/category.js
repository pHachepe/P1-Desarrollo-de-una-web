import { albums } from "../data/albumsData.js";

document.addEventListener("DOMContentLoaded", () => {
  const container = document.getElementById("album-links");
  albums.forEach((album) => {
    const card = document.createElement("div");
    card.className = "card";
    card.innerHTML = `
          <div class="cd-container">
            <picture>
              <source media="(max-width: 320px)" srcset="${album.images.small}">
              <source media="(min-width: 321px) and (max-width: 767px)" srcset="${album.images.medium}">
              <source media="(min-width: 768px)" srcset="${album.images.large}">
              <img loading="lazy" src="${album.images.original}" alt="${album.title}" class="album-image"/>
            </picture>
          </div>
          <div class="card-body">
            <h2>${album.title}</h2>
            <p>${album.shortDescription}</p>
            <a href="detail.html?id=${album.id}" class="btn">Más Info</a>
          </div>`;
    container.appendChild(card);
  });
});
