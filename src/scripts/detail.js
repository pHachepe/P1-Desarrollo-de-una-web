import { albums } from '../data/albumsData.js';

document.addEventListener("DOMContentLoaded", () => {
  const params = new URLSearchParams(window.location.search);
  const albumId = params.get("id");
  const album = albums.find((album) => album.id == albumId);

  if (album) {
    const albumTitleElement = document.getElementById("album-title");
    const albumCoverElement = document.getElementById("album-cover");
    const albumDescriptionElement = document.getElementById("album-description");
    const songListElement = document.getElementById("songs");

    albumTitleElement.textContent = album.title;

    if (album.images) {
      const pictureElement = `
          <picture>
            <source media="(max-width: 167px)" srcset="${album.images.small}">
            <source media="(min-width: 168px) and (max-width: 334px)" srcset="${album.images.medium}">
            <source media="(min-width: 335px)" srcset="${album.images.large}">
            <img src="${album.images.large}" alt="Portada del disco ${album.title}" class="album-image">
          </picture>
        `;
      albumCoverElement.outerHTML = pictureElement;
    } else {
      albumCoverElement.src = album.image;
      albumCoverElement.alt = `Portada del disco ${album.title}`;
    }

    albumDescriptionElement.innerHTML =
      album.longDescription
        .split("\n")
        .map((paragraph) => `<p>${paragraph}</p>`)
        .join("");

    songListElement.innerHTML = album.songs.map((song) => `<li>${song}</li>`).join("");

    loadRecommendedAlbums(album.id);
  } else {
    document.getElementById("album-title").textContent = "Disco no encontrado";
  }
});

const loadRecommendedAlbums = (currentAlbumId) => {
  const recommendedContainer = document.getElementById("recommended-list");
  const filteredAlbums = albums.filter((album) => album.id !== currentAlbumId);
  const recommendedAlbums = filteredAlbums
    .sort(() => 0.5 - Math.random())
    .slice(0, 4);

  recommendedAlbums.forEach((album) => {
    const albumCard = document.createElement("div");
    albumCard.className = "album-card";
    albumCard.innerHTML = `
      <img src="${album.images.small}" alt="${album.title}" class="recommended-album-image" loading="lazy">
      <div class="recommended-album-title">${album.title}</div>
    `;
    albumCard.onclick = () =>
      (window.location.href = `detail.html?id=${album.id}`);
    recommendedContainer.appendChild(albumCard);
  });
}
