import { albums } from "../data/albumsData.js";

document.addEventListener("DOMContentLoaded", () => {
  const container = document.getElementById("album-links");
  albums.forEach((album) => {
    const card = document.createElement("div");
    card.className = "card";
    card.innerHTML = `
          <div class="cd-container">
            <picture>
              <source media="(max-width: 167px)" srcset="${album.images.small}">
              <source media="(min-width: 168px) and (max-width: 334px)" srcset="${album.images.medium}">
              <source media="(min-width: 335px)" srcset="${album.images.large}">
              <img loading="lazy" src="${album.images.large}" alt="${album.title}" class="album-image"/>
            </picture>
          </div>
          <div class="card-body">
            <h3>${album.title}</h3>
            <p>${album.shortDescription}</p>
            <a href="detail.html?id=${album.id}" class="btn">Más Info</a>
          </div>`;
    container.appendChild(card);
  });
});
