var e="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},t={},i={},l=e.parcelRequire3c64;null==l&&((l=function(e){if(e in t)return t[e].exports;if(e in i){var l=i[e];delete i[e];var n={id:e,exports:{}};return t[e]=n,l.call(n.exports,n,n.exports),n.exports}var d=Error("Cannot find module '"+e+"'");throw d.code="MODULE_NOT_FOUND",d}).register=function(e,t){i[e]=t},e.parcelRequire3c64=l),l.register;var n=l("cRn1d");document.addEventListener("DOMContentLoaded",()=>{let e=new URLSearchParams(window.location.search).get("id"),t=(0,n.albums).find(t=>t.id==e);if(t){let e=document.getElementById("album-title"),i=document.getElementById("album-cover"),l=document.getElementById("album-description"),n=document.getElementById("songs");if(e.textContent=t.title,t.images){let e=`
          <picture>
            <source media="(max-width: 167px)" srcset="${t.images.small}">
            <source media="(min-width: 168px) and (max-width: 334px)" srcset="${t.images.medium}">
            <source media="(min-width: 335px)" srcset="${t.images.large}">
            <img src="${t.images.large}" alt="Portada del disco ${t.title}" class="album-image">
          </picture>
        `;i.outerHTML=e}else i.src=t.image,i.alt=`Portada del disco ${t.title}`;l.innerHTML=t.longDescription.split("\n").map(e=>`<p>${e}</p>`).join(""),n.innerHTML=t.songs.map(e=>`<li>${e}</li>`).join(""),d(t.id)}else document.getElementById("album-title").textContent="Disco no encontrado"});const d=e=>{let t=document.getElementById("recommended-list");(0,n.albums).filter(t=>t.id!==e).sort(()=>.5-Math.random()).slice(0,4).forEach(e=>{let i=document.createElement("div");i.className="album-card",i.innerHTML=`
      <img src="${e.images.small}" alt="${e.title}" class="recommended-album-image" loading="lazy">
      <div class="recommended-album-title">${e.title}</div>
    `,i.onclick=()=>window.location.href=`detail.html?id=${e.id}`,t.appendChild(i)})};
//# sourceMappingURL=detail.c5132ded.js.map
