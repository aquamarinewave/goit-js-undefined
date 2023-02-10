!function(){function e(e,t,n,o){Object.defineProperty(e,t,{get:n,set:o,enumerable:!0,configurable:!0})}function t(e){return e&&e.__esModule?e.default:e}var n="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},o={},r={},s=n.parcelRequired7c6;null==s&&((s=function(e){if(e in o)return o[e].exports;if(e in r){var t=r[e];delete r[e];var n={id:e,exports:{}};return o[e]=n,t.call(n.exports,n,n.exports),n.exports}var s=new Error("Cannot find module '"+e+"'");throw s.code="MODULE_NOT_FOUND",s}).register=function(e,t){r[e]=t},n.parcelRequired7c6=s),s.register("iE7OH",(function(t,n){var o,r;e(t.exports,"register",(function(){return o}),(function(e){return o=e})),e(t.exports,"resolve",(function(){return r}),(function(e){return r=e}));var s={};o=function(e){for(var t=Object.keys(e),n=0;n<t.length;n++)s[t[n]]=e[t[n]]},r=function(e){var t=s[e];if(null==t)throw new Error("Could not resolve bundle with id "+e);return t}})),s.register("b3pWk",(function(t,n){e(t.exports,"default",(function(){return r}));var o=s("kWfXz");function r({id:e,posterURL:t="",title:n="",genres:r="",year:s="",vote:a=""}){return`<li class="card" data-filmid="${e}">\n        <div class="card__wrapper"><img src="${t||o.noPosterURL}" alt="${n}" class="card__pic"></div>\n        <div class="card__information">\n            <p class="card__film-name">${n}</p>\n            <div class="card__additional-information">\n            <p class="card__gener-item">${r||"no info"} &#124; <span class="card__release-year">${s||"no info"}</span></p>\n            <div class="card__rating-background"> \n              <p class="card__rating">${a}</p>\n            </div>\n            </div>\n        </div>\n    </li>`}})),s.register("kWfXz",(function(t,n){e(t.exports,"noPosterURL",(function(){return i})),e(t.exports,"openMovieModal",(function(){return l}));var o=s("54T7b");let r,a;const i="https://dummyimage.com/400x500/dbdbdb/000000.png&text=No+poster";function l(e=null){return r={overlay:document.querySelector(".overlay"),btnModalClose:document.querySelector(".modal__button-cls"),btnWatched:document.querySelector(".modal__button--watched"),btnQueue:document.querySelector(".modal__button--queue"),infoId:document.querySelector(".modal__information"),title:document.querySelector(".modal__title"),poster:document.querySelector(".modal__image"),genres:document.querySelector(".modal__genres"),year:document.querySelector(".modal__year"),vote:document.querySelector(".modal__vote"),votes:document.querySelector(".modal__votes"),popularity:document.querySelector(".modal__popularity"),original:document.querySelector(".modal__original"),overview:document.querySelector(".modal__text")},Object.values(r).some((e=>!e))&&console.error("Error: invalid markup of modal window!"),a=e,r.btnModalClose.addEventListener("click",f),r.overlay.addEventListener("click",v),document.addEventListener("keydown",_),r.btnWatched.addEventListener("click",u.bind(null,"watched")),r.btnQueue.addEventListener("click",u.bind(null,"queue")),c(),m=window.scrollY,r.overlay.classList.remove("modal__is-hidden"),document.body.classList.add("modal__is-open"),document.body.style.top=`-${m}px`,r}function d(){return r.infoId.dataset.filmid}function u(e){const t=d();t&&(o.default[e].getMovieById(t)?o.default[e].removeMovie(t):o.default[e].addMovie({id:d(),title:r.title.textContent,posterURL:r.poster.src===i?"":r.poster.src,overview:r.overview.textContent,genres:r.genres.textContent,year:r.year.textContent,vote:r.vote.textContent,votes:r.votes.textContent,popularity:r.popularity.textContent,original:r.original.textContent}),c())}function c(){const e=d();e&&(o.default.watched.getMovieById(e)?(r.btnWatched.textContent="REMOVE FROM WATCHED",r.btnWatched.classList.remove("js-active")):(r.btnWatched.textContent="ADD TO WATCHED",r.btnWatched.classList.add("js-active")),o.default.queue.getMovieById(e)?(r.btnQueue.textContent="REMOVE FROM QUEUE",r.btnQueue.classList.remove("js-active")):(r.btnQueue.textContent="ADD TO QUEUE",r.btnQueue.classList.add("js-active")))}function f(){r.overlay.classList.add("modal__is-hidden"),document.body.classList.remove("modal__is-open"),function(){const e=document.body.style.top,t=document.documentElement.style.scrollBehavior;document.body.style.top="",document.documentElement.style.scrollBehavior="auto",window.scrollTo({left:0,top:-1*parseInt(e||"0"),behavior:"auto"}),document.documentElement.style.scrollBehavior=t}(),a&&a()}function _(e){"Escape"===e.key&&(f(),document.removeEventListener("keydown",_))}function v(e){e.currentTarget===e.target&&(f(),r.overlay.removeEventListener("click",v))}let m})),s.register("54T7b",(function(t,n){e(t.exports,"default",(function(){return r}));var o=s("bSEwQ");var r={watched:new(0,o.default)("Watched"),queue:new(0,o.default)("Queue")}})),s.register("bSEwQ",(function(n,o){e(n.exports,"default",(function(){return v}));var r=s("4KMWL"),a=s("8MQK7"),i=s("dPxxm"),l=s("beht7"),d=s("fyAfh");var u=new WeakMap,c=new WeakMap,f=new WeakSet,_=new WeakSet;class v{getCount(){return t(r)(this,c).length}getMovies(){return t(r)(this,c)}getMovieById(e){return t(r)(this,c).find((t=>t.id===e))}getCountPages(e){return Math.ceil(t(r)(this,c).length/e)}getMoviesPage(e=1,n=-1){return-1===n?t(r)(this,c):t(r)(this,c).slice((e-1)*n,e*n)}refreshMovies(){t(l)(this,_,p).call(this)}clearMovies(){t(i)(this,c,[]),t(l)(this,f,m).call(this)}addMovie(e){const n=t(r)(this,c).findIndex((t=>t.id===e.id));-1!==n?t(r)(this,c)[n]=e:t(r)(this,c).push(e),t(l)(this,f,m).call(this)}removeMovie(e){const n=t(r)(this,c).findIndex((t=>t.id===e));-1!==n&&(t(r)(this,c).splice(n,1),t(l)(this,f,m).call(this))}constructor(e="mylib"){t(d)(this,f),t(d)(this,_),t(a)(this,u,{writable:!0,value:void 0}),t(a)(this,c,{writable:!0,value:[]}),t(i)(this,u,"MoviesLibrary_"+e),t(l)(this,_,p).call(this)}}function m(){try{localStorage.setItem(t(r)(this,u),JSON.stringify(t(r)(this,c)))}catch(e){console.error(`Error: failure saving movies in LocalStorage: ${t(r)(this,u)}`)}}function p(){t(i)(this,c,[]);const e=localStorage.getItem(t(r)(this,u));if(e)try{t(i)(this,c,JSON.parse(e))}catch(e){console.error(`Error: invalid movies library in LocalStorage: ${t(r)(this,u)}`)}}})),s.register("4KMWL",(function(e,t){"use strict";Object.defineProperty(e.exports,"__esModule",{value:!0}),e.exports.default=function(e,t){var r=n.default(e,t,"get");return o.default(e,r)};var n=r(s("1UHsN")),o=r(s("ffZzF"));function r(e){return e&&e.__esModule?e:{default:e}}})),s.register("1UHsN",(function(e,t){"use strict";Object.defineProperty(e.exports,"__esModule",{value:!0}),e.exports.default=function(e,t,n){if(!t.has(e))throw new TypeError("attempted to "+n+" private field on non-instance");return t.get(e)}})),s.register("ffZzF",(function(e,t){"use strict";Object.defineProperty(e.exports,"__esModule",{value:!0}),e.exports.default=function(e,t){return t.get?t.get.call(e):t.value}})),s.register("8MQK7",(function(e,t){"use strict";Object.defineProperty(e.exports,"__esModule",{value:!0}),e.exports.default=function(e,t,n){o.default(e,t),t.set(e,n)};var n,o=(n=s("5k7tO"))&&n.__esModule?n:{default:n}})),s.register("5k7tO",(function(e,t){"use strict";Object.defineProperty(e.exports,"__esModule",{value:!0}),e.exports.default=function(e,t){if(t.has(e))throw new TypeError("Cannot initialize the same private elements twice on an object")}})),s.register("dPxxm",(function(e,t){"use strict";Object.defineProperty(e.exports,"__esModule",{value:!0}),e.exports.default=function(e,t,r){var s=n.default(e,t,"set");return o.default(e,s,r),r};var n=r(s("1UHsN")),o=r(s("jdVyQ"));function r(e){return e&&e.__esModule?e:{default:e}}})),s.register("jdVyQ",(function(e,t){"use strict";Object.defineProperty(e.exports,"__esModule",{value:!0}),e.exports.default=function(e,t,n){if(t.set)t.set.call(e,n);else{if(!t.writable)throw new TypeError("attempted to set read only private field");t.value=n}}})),s.register("beht7",(function(e,t){"use strict";Object.defineProperty(e.exports,"__esModule",{value:!0}),e.exports.default=function(e,t,n){if(!t.has(e))throw new TypeError("attempted to get private field on non-instance");return n}})),s.register("fyAfh",(function(e,t){"use strict";Object.defineProperty(e.exports,"__esModule",{value:!0}),e.exports.default=function(e,t){o.default(e,t),t.add(e)};var n,o=(n=s("5k7tO"))&&n.__esModule?n:{default:n}})),s.register("73ES2",(function(n,o){e(n.exports,"default",(function(){return i}));var r=s("kWfXz"),a=s("k8rmz");function i({id:e,posterURL:n="",title:o="",genres:s="",year:i="",vote:l="",votes:d="",popularity:u="",original:c="",overview:f=""}){return`\n  \n    <div class="modal__poster">\n    <button type="button" class="modal__button-cls">\n      <svg height="30" width="30" class="modal__icon">\n        <use href="${t(a)}#icon-close"></use>\n      </svg>\n    </button>\n      <img class="modal__image" src="${n||r.noPosterURL}" alt="${o}"/>\n    </div>\n    <div class="modal__information" data-filmid="${e}">\n      <h2 class="modal__title">${o}</h2>\n      <table class="modal__table">\n        <tr class="modal__tr">\n          <td class="modal__td">Vote / Votes</td>\n          <td class="modal__td-right">\n            <span class="modal__vote">${l}</span>\n            / <span class="modal__votes">${d}</span>\n          </td>\n        </tr>\n        <tr class="modal__tr">\n          <td class="modal__td">Popularity</td>\n          <td class="modal__td-right modal__popularity">${u}</td>\n        </tr>\n        <tr class="modal__tr">\n          <td class="modal__td">Original Title</td>\n          <td class="modal__td-right modal__original">${c}</td>\n        </tr>\n        <tr class="modal__tr">\n          <td class="modal__td">Genre</td>\n          <td class="modal__td-right modal__genres">${s}</td>\n        </tr>\n        <tr class="modal__tr">\n          <td class="modal__td">Year</td>\n          <td class="modal__td-right modal__year">${i}</td>\n        </tr>\n      </table>\n      <h3 class="modal__description">About</h3>\n      <p class="modal__text">${f}</p>\n      <div class="modal__flex">\n        <button class="modal__button modal__button--watched js-active" type="button">add to Watched</button>\n        <button class="modal__button modal__button--queue js-active" type="button">add to queue</button>\n      </div>\n    </div> \n  `}})),s.register("k8rmz",(function(e,t){e.exports=s("aNJCr").getBundleURL("5yY5W")+s("iE7OH").resolve("ee16w")})),s.register("aNJCr",(function(t,n){var o;e(t.exports,"getBundleURL",(function(){return o}),(function(e){return o=e}));var r={};function s(e){return(""+e).replace(/^((?:https?|file|ftp|(chrome|moz)-extension):\/\/.+)\/[^/]+$/,"$1")+"/"}o=function(e){var t=r[e];return t||(t=function(){try{throw new Error}catch(t){var e=(""+t.stack).match(/(https?|file|ftp|(chrome|moz)-extension):\/\/[^)\n]+/g);if(e)return s(e[2])}return"/"}(),r[e]=t),t}})),s("iE7OH").register(JSON.parse('{"5yY5W":"index.b165cb16.js","ee16w":"sprite.07866f17.svg"}'))}();
//# sourceMappingURL=index.b165cb16.js.map
