!function(){var e="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},t={},n={},r=e.parcelRequired7c6;null==r&&((r=function(e){if(e in t)return t[e].exports;if(e in n){var r=n[e];delete n[e];var a={id:e,exports:{}};return t[e]=a,r.call(a.exports,a,a.exports),a.exports}var i=new Error("Cannot find module '"+e+"'");throw i.code="MODULE_NOT_FOUND",i}).register=function(e,t){n[e]=t},e.parcelRequired7c6=r);var a=r("54T7b");function i({id:e,posterURL:t="",title:n="",genres:r="no info",year:a="no info",votes:i=""}){return` \n    <div class="card" data-filmid="${e}">\n        <img src="${t}" alt="${n}" class="card__pic">\n        <div class="card__information">\n            <p class="card__film-name">${n}</p>\n            <div class="card__additional-information">\n                <ul class="card__gener-list">\n                    <li class="card__gener-item">${r}</li>\n                </ul>\n                <div class="card__vl"></div>\n                <p class="card__release-year">${a}</p>\n            </div>\n        </div>\n    </div>\n  `}var o=r("73ES2"),d=r("kWfXz");let l=a.default.watched,s=1;const c={gallery:document.querySelector(".gallery"),btnWatched:document.querySelector("#btn-watched"),btnQueue:document.querySelector("#btn-queue"),overlay:document.querySelector(".overlay"),btnModalClose:document.querySelector(".modal__button-cls"),modalContent:document.querySelector(".modal__content")};function u(e){const t=e.currentTarget;t===c.btnWatched&&l===a.default.watched||t===c.btnQueue&&l===a.default.queue||(s=1,t===c.btnWatched?(l=a.default.watched,c.btnWatched.classList.add("is-active"),c.btnQueue.classList.remove("is-active")):t===c.btnQueue&&(l=a.default.queue,c.btnWatched.classList.remove("is-active"),c.btnQueue.classList.add("is-active")),l.refreshMovies(),f())}Object.values(c).some((e=>!e))&&console.error("Error: invalid markup!"),c.gallery.insertAdjacentHTML("afterend",'<div class="js-guard"></div>'),c.guardDiv=document.querySelector(".js-guard"),c.btnWatched.addEventListener("click",u),c.btnQueue.addEventListener("click",u);const v=new IntersectionObserver(((e,t)=>{e.forEach((e=>{e.isIntersecting&&s<l.getCountPages(6)&&(s+=1,f())}))}),{root:null,rootMargin:"300px",threshold:1});function f(){1===s&&(c.gallery.innerHTML="");const e=l.getMoviesPage(s,6);c.gallery.insertAdjacentHTML("beforeend",function(e){return e.map((e=>i(e))).join("")}(e)),1===s&&l.getCountPages(6)>1?v.observe(c.guardDiv):s===l.getCountPages(6)&&v.unobserve(c.guardDiv)}f(),c.btnModalClose.addEventListener("click",(function(){c.overlay.classList.add("visually-hidden"),s=1,f()})),c.gallery.addEventListener("click",(function(e){e.preventDefault();const t=e.target.closest(".card");if(!t)return;const n=t.dataset.filmid,r=l.getMovieById(n);if(!r)return void console.error(`Movie with id = ${n} isn't found in library!`);c.modalContent.innerHTML=(0,o.default)(r),(0,d.initModal)(),c.overlay.classList.remove("visually-hidden")}))}();
//# sourceMappingURL=library.242b3908.js.map
