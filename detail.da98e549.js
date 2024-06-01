!function(){var e="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},t={},i={},a=e.parcelRequire3c64;null==a&&((a=function(e){if(e in t)return t[e].exports;if(e in i){var a=i[e];delete i[e];var n={id:e,exports:{}};return t[e]=n,a.call(n.exports,n,n.exports),n.exports}var l=Error("Cannot find module '"+e+"'");throw l.code="MODULE_NOT_FOUND",l}).register=function(e,t){i[e]=t},e.parcelRequire3c64=a),a.register;var n=a("ipMuT");document.addEventListener("DOMContentLoaded",()=>{let e=new URLSearchParams(window.location.search).get("id"),t=(0,n.albums).find(t=>t.id==e);if(t){let e=document.getElementById("album-title"),i=document.getElementById("album-cover"),a=document.getElementById("album-description"),n=document.getElementById("songs");if(e.textContent=t.title,t.images){let e=`
          <picture>
            <source media="(max-width: 320px)" srcset="${t.images.small}">
            <source media="(min-width: 321px) and (max-width: 767px)" srcset="${t.images.medium}">
            <source media="(min-width: 768px)" srcset="${t.images.large}">
            <img src="${t.images.original}" alt="Portada del disco ${t.title}" class="album-image">
          </picture>
        `;i.outerHTML=e}else i.src=t.image,i.alt=`Portada del disco ${t.title}`;a.innerHTML=t.longDescription.split("\n").map(e=>`<p>${e}</p>`).join(""),n.innerHTML=t.songs.map(e=>`<li>${e}</li>`).join(""),l(t.id)}else document.getElementById("album-title").textContent="Disco no encontrado"});let l=e=>{let t=document.getElementById("recommended-list");(0,n.albums).filter(t=>t.id!==e).sort(()=>.5-Math.random()).slice(0,4).forEach(e=>{let i=document.createElement("div");i.className="album-card";let a=`
        <picture>
          <source media="(max-width: 320px)" srcset="${e.images.small}">
          <source media="(min-width: 321px) and (max-width: 767px)" srcset="${e.images.medium}">
          <source media="(min-width: 768px)" srcset="${e.images.large}">
          <img src="${e.images.original}" alt="${e.title}" class="recommended-album-image" loading="lazy">
        </picture>
      `;i.innerHTML=`
      ${a}
      <div class="recommended-album-title">${e.title}</div>
    `,i.onclick=()=>window.location.href=`detail.html?id=${e.id}`,t.appendChild(i)})}}();
//# sourceMappingURL=detail.da98e549.js.map
