function e(e){return e&&e.__esModule?e.default:e}var t="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},r={},i={},o=t.parcelRequired7c6;null==o&&((o=function(e){if(e in r)return r[e].exports;if(e in i){var t=i[e];delete i[e];var o={id:e,exports:{}};return r[e]=o,t.call(o.exports,o,o.exports),o.exports}var n=new Error("Cannot find module '"+e+"'");throw n.code="MODULE_NOT_FOUND",n}).register=function(e,t){i[e]=t},t.parcelRequired7c6=o),o.register("fExtF",(function(e,t){Object.defineProperty(e.exports,"__esModule",{value:!0}),e.exports.default=function(e,t,r){if(!t.has(e))throw new TypeError("attempted to "+r+" private field on non-instance");return t.get(e)}})),o.register("iaRLo",(function(e,t){Object.defineProperty(e.exports,"__esModule",{value:!0}),e.exports.default=function(e,t){return t.get?t.get.call(e):t.value}})),o.register("7K24o",(function(e,t){Object.defineProperty(e.exports,"__esModule",{value:!0}),e.exports.default=function(e,t){if(t.has(e))throw new TypeError("Cannot initialize the same private elements twice on an object")}})),o.register("3LGG3",(function(e,t){Object.defineProperty(e.exports,"__esModule",{value:!0}),e.exports.default=function(e,t,r){if(t.set)t.set.call(e,r);else{if(!t.writable)throw new TypeError("attempted to set read only private field");t.value=r}}}));var n={};Object.defineProperty(n,"__esModule",{value:!0}),n.default=function(e,t){var r=a.default(e,t,"get");return l.default(e,r)};var a=s(o("fExtF")),l=s(o("iaRLo"));function s(e){return e&&e.__esModule?e:{default:e}}var u={};Object.defineProperty(u,"__esModule",{value:!0}),u.default=function(e,t,r){f.default(e,t),t.set(e,r)};var d,f=(d=o("7K24o"))&&d.__esModule?d:{default:d};var c={};Object.defineProperty(c,"__esModule",{value:!0}),c.default=function(e,t,r){var i=h.default(e,t,"set");return v.default(e,i,r),r};var h=p(o("fExtF")),v=p(o("3LGG3"));function p(e){return e&&e.__esModule?e:{default:e}}var _={};Object.defineProperty(_,"__esModule",{value:!0}),_.default=function(e,t,r){if(!t.has(e))throw new TypeError("attempted to get private field on non-instance");return r};var g={};Object.defineProperty(g,"__esModule",{value:!0}),g.default=function(e,t){w.default(e,t),t.add(e)};var w=function(e){return e&&e.__esModule?e:{default:e}}(o("7K24o"));var y=new WeakMap,M=new WeakMap,b=new WeakSet,x=new WeakSet;class O{getMovies(){return e(n)(this,M)}getMoviesPage(t=1,r=20){return e(n)(this,M).slice((t-1)*r,t*r)}refreshMovies(){e(_)(this,x,E).call(this)}clearMovies(){e(c)(this,M,[]),e(_)(this,b,m).call(this)}addMovie(t){const r=e(n)(this,M).findIndex((e=>e.id==t.id));-1!=r?e(n)(this,M)[r]=t:e(n)(this,M).push(t),e(_)(this,b,m).call(this)}removeMovie(t){const r=e(n)(this,M).findIndex((e=>e.id==t));-1!=r&&(e(n)(this,M).splice(r,1),e(_)(this,b,m).call(this))}constructor(t="mylib"){e(g)(this,b),e(g)(this,x),e(u)(this,y,{writable:!0,value:void 0}),e(u)(this,M,{writable:!0,value:[]}),e(c)(this,y,"MoviesLibrary_"+t),e(_)(this,x,E).call(this)}}function m(){try{localStorage.setItem(e(n)(this,y),JSON.stringify(e(n)(this,M)))}catch(t){console.error(`Error: failure saving movies in LocalStorage: ${e(n)(this,y)}`)}}function E(){e(c)(this,M,[]);const t=localStorage.getItem(e(n)(this,y));if(t)try{e(c)(this,M,JSON.parse(t))}catch(t){console.error(`Error: invalid movies library in LocalStorage: ${e(n)(this,y)}`)}}new O("Watched"),new O("Queue");
//# sourceMappingURL=library.6e30213e.js.map
