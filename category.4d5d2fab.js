var e,i,t,a,d;i={},t={},null==(a=(e="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{}).parcelRequire3c64)&&((a=function(e){if(e in i)return i[e].exports;if(e in t){var a=t[e];delete t[e];var d={id:e,exports:{}};return i[e]=d,a.call(d.exports,d,d.exports),d.exports}var r=Error("Cannot find module '"+e+"'");throw r.code="MODULE_NOT_FOUND",r}).register=function(e,i){t[e]=i},e.parcelRequire3c64=a),a.register,d=a("ipMuT"),document.addEventListener("DOMContentLoaded",()=>{let e=document.getElementById("album-links");(0,d.albums).forEach(i=>{let t=document.createElement("div");t.className="card",t.innerHTML=`
          <div class="cd-container">
            <picture>
              <source media="(max-width: 167px)" srcset="${i.images.small}">
              <source media="(min-width: 168px) and (max-width: 334px)" srcset="${i.images.medium}">
              <source media="(min-width: 335px)" srcset="${i.images.large}">
              <img loading="lazy" src="${i.images.original}" alt="${i.title}" class="album-image"/>
            </picture>
          </div>
          <div class="card-body">
            <h3>${i.title}</h3>
            <p>${i.shortDescription}</p>
            <a href="detail.html?id=${i.id}" class="btn">M\xe1s Info</a>
          </div>`,e.appendChild(t)})});
//# sourceMappingURL=category.4d5d2fab.js.map
