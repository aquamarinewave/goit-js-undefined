var e="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},n={},t={},i=e.parcelRequired7c6;null==i&&((i=function(e){if(e in n)return n[e].exports;if(e in t){var i=t[e];delete t[e];var r={id:e,exports:{}};return n[e]=r,i.call(r.exports,r,r.exports),r.exports}var l=new Error("Cannot find module '"+e+"'");throw l.code="MODULE_NOT_FOUND",l}).register=function(e,n){t[e]=n},e.parcelRequired7c6=i);var r=i("eCi4J");const l=document.querySelector(".gallery");JSON.parse(localStorage.getItem("allGenres"));!async function(){(0,r.getTrendingAPI)().then((e=>function(e){let n=e.results.map((({poster_path:e,title:n,release_date:t,genre_ids:i})=>`<li class="movie-card"> \n     <a  href=''><img src=https://image.tmdb.org/t/p/w500${e} alt=${n} loading="lazy" height=574px width=395px /></a> \n    <p class="info-item"> \n      <b> ${n}</b> \n    </p> \n    <p class="card__additional-information"> \n        ${i} | ${t.slice(0,4)} \n        </p> \n     </li> \n     \n    `)).join("");l.innerHTML=n}(e)))}();
//# sourceMappingURL=library.9beecaed.js.map