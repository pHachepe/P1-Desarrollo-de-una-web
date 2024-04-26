import { albums } from "../data/albumsData.js";

document.addEventListener("DOMContentLoaded", () => {
  const container = document.getElementById("album-links");
  albums.forEach((album) => {
    const card = document.createElement("div");
    card.className = "card";
    card.innerHTML = `
      <img loading="lazy" src="${album.image}" alt="${album.title}" />
      <div class="card-body">
        <h3>${album.title}</h3>
        <p>${album.shortDescription}</p>
        <a href="detail.html?id=${album.id}" class="btn">Más Info</a>
      </div>`;
    container.appendChild(card);
  });
});
