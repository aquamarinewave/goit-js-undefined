!function(){function e(e,t,n,r){Object.defineProperty(e,t,{get:n,set:r,enumerable:!0,configurable:!0})}function t(e){return e&&e.__esModule?e.default:e}var n="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},r={},o={},i=n.parcelRequired7c6;null==i&&((i=function(e){if(e in r)return r[e].exports;if(e in o){var t=o[e];delete o[e];var n={id:e,exports:{}};return r[e]=n,t.call(n.exports,n,n.exports),n.exports}var i=new Error("Cannot find module '"+e+"'");throw i.code="MODULE_NOT_FOUND",i}).register=function(e,t){o[e]=t},n.parcelRequired7c6=i),i.register("iE7OH",(function(t,n){var r,o;e(t.exports,"register",(function(){return r}),(function(e){return r=e})),e(t.exports,"resolve",(function(){return o}),(function(e){return o=e}));var i={};r=function(e){for(var t=Object.keys(e),n=0;n<t.length;n++)i[t[n]]=e[t[n]]},o=function(e){var t=i[e];if(null==t)throw new Error("Could not resolve bundle with id "+e);return t}})),i.register("b3pWk",(function(t,n){e(t.exports,"default",(function(){return o}));var r=i("kWfXz");function o({id:e,posterURL:t="",title:n="",genres:o="",year:i="",vote:a=""}){return`<li class="card" data-filmid="${e}">\n        <img src="${t||r.noPosterURL}" alt="${n}" class="card__pic">\n        <div class="card__information">\n            <p class="card__film-name">${n}</p>\n            <div class="card__additional-information">\n                <ul class="card__gener-list">\n                    <li class="card__gener-item">${o||"no info"}</li>\n                </ul>\n                <div class="card__vl"></div>\n                <p class="card__release-year">${i||"no info"}</p>\n                <div class="card__rating-background"> \n                  <p class="card__rating">${a}</p>\n                </div>\n            </div>\n        </div>\n    </li>`}})),i.register("kWfXz",(function(t,n){e(t.exports,"noPosterURL",(function(){return s})),e(t.exports,"openMovieModal",(function(){return l}));var r=i("54T7b");let o,a;const s="https://dummyimage.com/400x500/dbdbdb/000000.png&text=No+poster";function l(e=null){return o={overlay:document.querySelector(".overlay"),btnModalClose:document.querySelector(".modal__button-cls"),btnWatched:document.querySelector(".modal__button--watched"),btnQueue:document.querySelector(".modal__button--queue"),infoId:document.querySelector(".modal__information"),title:document.querySelector(".modal__title"),poster:document.querySelector(".modal__image"),genres:document.querySelector(".modal__genres"),year:document.querySelector(".modal__year"),vote:document.querySelector(".modal__vote"),votes:document.querySelector(".modal__votes"),popularity:document.querySelector(".modal__popularity"),original:document.querySelector(".modal__original"),overview:document.querySelector(".modal__text")},Object.values(o).some((e=>!e))&&console.error("Error: invalid markup of modal window!"),a=e,o.btnModalClose.addEventListener("click",f),o.overlay.addEventListener("click",v),document.addEventListener("keydown",_),o.btnWatched.addEventListener("click",u.bind(null,"watched")),o.btnQueue.addEventListener("click",u.bind(null,"queue")),c(),o.overlay.classList.remove("visually-hidden"),document.body.classList.add("modal__is-open"),o}function d(){return o.infoId.dataset.filmid}function u(e){const t=d();t&&(r.default[e].getMovieById(t)?r.default[e].removeMovie(t):r.default[e].addMovie({id:d(),title:o.title.textContent,posterURL:o.poster.src===s?"":o.poster.src,overview:o.overview.textContent,genres:o.genres.textContent,year:o.year.textContent,vote:o.vote.textContent,votes:o.votes.textContent,popularity:o.popularity.textContent,original:o.original.textContent}),c())}function c(){const e=d();e&&(r.default.watched.getMovieById(e)?(o.btnWatched.textContent="REMOVE FROM WATCHED",o.btnWatched.classList.remove("js-active")):(o.btnWatched.textContent="ADD TO WATCHED",o.btnWatched.classList.add("js-active")),r.default.queue.getMovieById(e)?(o.btnQueue.textContent="REMOVE FROM QUEUE",o.btnQueue.classList.remove("js-active")):(o.btnQueue.textContent="ADD TO QUEUE",o.btnQueue.classList.add("js-active")))}function f(){o.overlay.classList.add("visually-hidden"),document.body.classList.remove("modal__is-open"),a&&a()}function _(e){"Escape"===e.key&&(f(),document.removeEventListener("keydown",_))}function v(e){e.currentTarget===e.target&&(f(),o.overlay.removeEventListener("click",v))}})),i.register("54T7b",(function(t,n){e(t.exports,"default",(function(){return o}));var r=i("bSEwQ");var o={watched:new(0,r.default)("Watched"),queue:new(0,r.default)("Queue")}})),i.register("bSEwQ",(function(n,r){e(n.exports,"default",(function(){return v}));var o=i("4KMWL"),a=i("8MQK7"),s=i("dPxxm"),l=i("beht7"),d=i("fyAfh");var u=new WeakMap,c=new WeakMap,f=new WeakSet,_=new WeakSet;class v{getCount(){return t(o)(this,c).length}getMovies(){return t(o)(this,c)}getMovieById(e){return t(o)(this,c).find((t=>t.id===e))}getCountPages(e){return Math.ceil(t(o)(this,c).length/e)}getMoviesPage(e=1,n=-1){return-1===n?t(o)(this,c):t(o)(this,c).slice((e-1)*n,e*n)}refreshMovies(){t(l)(this,_,p).call(this)}clearMovies(){t(s)(this,c,[]),t(l)(this,f,m).call(this)}addMovie(e){const n=t(o)(this,c).findIndex((t=>t.id===e.id));-1!==n?t(o)(this,c)[n]=e:t(o)(this,c).push(e),t(l)(this,f,m).call(this)}removeMovie(e){const n=t(o)(this,c).findIndex((t=>t.id===e));-1!==n&&(t(o)(this,c).splice(n,1),t(l)(this,f,m).call(this))}constructor(e="mylib"){t(d)(this,f),t(d)(this,_),t(a)(this,u,{writable:!0,value:void 0}),t(a)(this,c,{writable:!0,value:[]}),t(s)(this,u,"MoviesLibrary_"+e),t(l)(this,_,p).call(this)}}function m(){try{localStorage.setItem(t(o)(this,u),JSON.stringify(t(o)(this,c)))}catch(e){console.error(`Error: failure saving movies in LocalStorage: ${t(o)(this,u)}`)}}function p(){t(s)(this,c,[]);const e=localStorage.getItem(t(o)(this,u));if(e)try{t(s)(this,c,JSON.parse(e))}catch(e){console.error(`Error: invalid movies library in LocalStorage: ${t(o)(this,u)}`)}}})),i.register("4KMWL",(function(e,t){"use strict";Object.defineProperty(e.exports,"__esModule",{value:!0}),e.exports.default=function(e,t){var o=n.default(e,t,"get");return r.default(e,o)};var n=o(i("1UHsN")),r=o(i("ffZzF"));function o(e){return e&&e.__esModule?e:{default:e}}})),i.register("1UHsN",(function(e,t){"use strict";Object.defineProperty(e.exports,"__esModule",{value:!0}),e.exports.default=function(e,t,n){if(!t.has(e))throw new TypeError("attempted to "+n+" private field on non-instance");return t.get(e)}})),i.register("ffZzF",(function(e,t){"use strict";Object.defineProperty(e.exports,"__esModule",{value:!0}),e.exports.default=function(e,t){return t.get?t.get.call(e):t.value}})),i.register("8MQK7",(function(e,t){"use strict";Object.defineProperty(e.exports,"__esModule",{value:!0}),e.exports.default=function(e,t,n){r.default(e,t),t.set(e,n)};var n,r=(n=i("5k7tO"))&&n.__esModule?n:{default:n}})),i.register("5k7tO",(function(e,t){"use strict";Object.defineProperty(e.exports,"__esModule",{value:!0}),e.exports.default=function(e,t){if(t.has(e))throw new TypeError("Cannot initialize the same private elements twice on an object")}})),i.register("dPxxm",(function(e,t){"use strict";Object.defineProperty(e.exports,"__esModule",{value:!0}),e.exports.default=function(e,t,o){var i=n.default(e,t,"set");return r.default(e,i,o),o};var n=o(i("1UHsN")),r=o(i("jdVyQ"));function o(e){return e&&e.__esModule?e:{default:e}}})),i.register("jdVyQ",(function(e,t){"use strict";Object.defineProperty(e.exports,"__esModule",{value:!0}),e.exports.default=function(e,t,n){if(t.set)t.set.call(e,n);else{if(!t.writable)throw new TypeError("attempted to set read only private field");t.value=n}}})),i.register("beht7",(function(e,t){"use strict";Object.defineProperty(e.exports,"__esModule",{value:!0}),e.exports.default=function(e,t,n){if(!t.has(e))throw new TypeError("attempted to get private field on non-instance");return n}})),i.register("fyAfh",(function(e,t){"use strict";Object.defineProperty(e.exports,"__esModule",{value:!0}),e.exports.default=function(e,t){r.default(e,t),t.add(e)};var n,r=(n=i("5k7tO"))&&n.__esModule?n:{default:n}})),i.register("73ES2",(function(n,r){e(n.exports,"default",(function(){return s}));var o=i("kWfXz"),a=i("k8rmz");function s({id:e,posterURL:n="",title:r="",genres:i="",year:s="",vote:l="",votes:d="",popularity:u="",original:c="",overview:f=""}){return`\n  \n    <div class="modal__poster">\n    <button type="button" class="modal__button-cls">\n      <svg height="30" width="30" class="modal__icon">\n        <use href="${t(a)}#icon-close"></use>\n      </svg>\n    </button>\n      <img class="modal__image" src="${n||o.noPosterURL}" alt="${r}"/>\n    </div>\n    <div class="modal__information" data-filmid="${e}">\n      <h1 class="modal__title">${r}</h1>\n      <table class="modal__table">\n        <tr class="modal__tr">\n          <td class="modal__td">Vote / Votes</td>\n          <td class="modal__td-right">\n            <span class="modal__vote">${l}</span>\n            / <span class="modal__votes">${d}</span>\n          </td>\n        </tr>\n        <tr class="modal__tr">\n          <td class="modal__td">Popularity</td>\n          <td class="modal__td-right modal__popularity">${u}</td>\n        </tr>\n        <tr class="modal__tr">\n          <td class="modal__td">Original Title</td>\n          <td class="modal__td-right modal__original">${c}</td>\n        </tr>\n        <tr class="modal__tr">\n          <td class="modal__td">Genre</td>\n          <td class="modal__td-right modal__genres">${i}</td>\n        </tr>\n        <tr class="modal__tr">\n          <td class="modal__td">Year</td>\n          <td class="modal__td-right modal__year">${s}</td>\n        </tr>\n      </table>\n      <h2 class="modal__description">About</h2>\n      <p class="modal__text">${f}</p>\n      <div class="modal__flex">\n        <button class="modal__button modal__button--watched js-active" type="button">add to Watched</button>\n        <button class="modal__button modal__button--queue js-active" type="button">add to queue</button>\n      </div>\n    </div> \n  `}})),i.register("k8rmz",(function(e,t){e.exports=i("aNJCr").getBundleURL("5yY5W")+i("iE7OH").resolve("ee16w")})),i.register("aNJCr",(function(t,n){var r;e(t.exports,"getBundleURL",(function(){return r}),(function(e){return r=e}));var o={};function i(e){return(""+e).replace(/^((?:https?|file|ftp|(chrome|moz)-extension):\/\/.+)\/[^/]+$/,"$1")+"/"}r=function(e){var t=o[e];return t||(t=function(){try{throw new Error}catch(t){var e=(""+t.stack).match(/(https?|file|ftp|(chrome|moz)-extension):\/\/[^)\n]+/g);if(e)return i(e[2])}return"/"}(),o[e]=t),t}})),i("iE7OH").register(JSON.parse('{"5yY5W":"index.a45003e0.js","ee16w":"sprite.a90c2bfd.svg"}'))}();
//# sourceMappingURL=index.a45003e0.js.map
