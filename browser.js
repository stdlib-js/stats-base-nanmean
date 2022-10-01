// Copyright (c) 2022 The Stdlib Authors. License is Apache-2.0: http://www.apache.org/licenses/LICENSE-2.0
var e,r;e=this,r=function(e){"use strict";var r="function"==typeof Object.defineProperty?Object.defineProperty:null,t=Object.defineProperty,n=Object.prototype,o=n.toString,a=n.__defineGetter__,i=n.__defineSetter__,u=n.__lookupGetter__,f=n.__lookupSetter__,l=function(){try{return r({},"x",{}),!0}catch(e){return!1}}()?t:function(e,r,t){var l,c,_,d;if("object"!=typeof e||null===e||"[object Array]"===o.call(e))throw new TypeError("invalid argument. First argument must be an object. Value: `"+e+"`.");if("object"!=typeof t||null===t||"[object Array]"===o.call(t))throw new TypeError("invalid argument. Property descriptor must be an object. Value: `"+t+"`.");if((c="value"in t)&&(u.call(e,r)||f.call(e,r)?(l=e.__proto__,e.__proto__=n,delete e[r],e[r]=t.value,e.__proto__=l):e[r]=t.value),_="get"in t,d="set"in t,c&&(_||d))throw new Error("invalid argument. Cannot specify one or more accessors and a value or writable attribute in the property descriptor.");return _&&a&&a.call(e,r,t.get),d&&i&&i.call(e,r,t.set),e};function c(e,r,t){l(e,r,{configurable:!1,enumerable:!1,writable:!1,value:t})}function _(e,r,t){var n,o,a,i,u,f,l;if(e<=0)return NaN;if(1===e||0===t)return r[0];for(l=n=t<0?(1-e)*t:0,a=0,u=0,f=0;f<e;f++)(o=r[n])==o&&(u+=1,a+=o),n+=t;if(0===u)return NaN;for(a/=u,i=0,n=l,f=0;f<e;f++)(o=r[n])==o&&(i+=o-a),n+=t;return a+i/u}c(_,"ndarray",(function(e,r,t,n){var o,a,i,u,f,l;if(e<=0)return NaN;if(1===e||0===t)return r[n];for(o=n,i=0,f=0,l=0;l<e;l++)(a=r[o])==a&&(f+=1,i+=a),o+=t;if(0===f)return NaN;for(i/=f,o=n,u=0,l=0;l<e;l++)(a=r[o])==a&&(u+=a-i),o+=t;return i+u/f}));const{ndarray:d}=_;function p(e,r,t){return _(e,r,t)}c(p,"ndarray",(function(e,r,t,n){return d(e,r,t,n)}));const{ndarray:y}=nanmean;e.default=p,e.ndarray=y,Object.defineProperty(e,"__esModule",{value:!0})},"object"==typeof exports&&"undefined"!=typeof module?r(exports):"function"==typeof define&&define.amd?define(["exports"],r):r((e="undefined"!=typeof globalThis?globalThis:e||self).nanmean={});
//# sourceMappingURL=browser.js.map
