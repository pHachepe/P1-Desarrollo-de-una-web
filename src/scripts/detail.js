import { albums } from "../data/albumsData.js";

document.addEventListener("DOMContentLoaded", () => {
  const params = new URLSearchParams(window.location.search);
  const albumId = params.get("id");
  const album = albums.find((album) => album.id == albumId);

  if (album) {
    document.getElementById("album-title").textContent = album.title;
    document.getElementById("album-cover").src = album.image;
    document.getElementById(
      "album-cover"
    ).alt = `Portada del disco ${album.title}`;
    document.getElementById("album-description").innerHTML =
      album.longDescription
        .split("\n")
        .map((paragraph) => `<p>${paragraph}</p>`)
        .join("");

    const songList = document.getElementById("songs");
    songList.innerHTML = album.songs.map((song) => `<li>${song}</li>`).join("");

    loadRecommendedAlbums(album.id);
  } else {
    document.getElementById("album-title").textContent = "Disco no encontrado";
  }
});

function loadRecommendedAlbums(currentAlbumId) {
  const recommendedContainer = document.getElementById("recommended-list");
  const filteredAlbums = albums.filter((album) => album.id !== currentAlbumId);
  const recommendedAlbums = filteredAlbums
    .sort(() => 0.5 - Math.random())
    .slice(0, 4);

  recommendedAlbums.forEach((album) => {
    const albumCard = document.createElement("div");
    albumCard.className = "album-card";
    albumCard.innerHTML = `
      <img src="${album.image}" alt="${album.title}" class="recommended-album-image" loading="lazy">
      <div class="recommended-album-title">${album.title}</div>
    `;
    albumCard.onclick = () =>
      (window.location.href = `detail.html?id=${album.id}`);
    recommendedContainer.appendChild(albumCard);
  });
}
