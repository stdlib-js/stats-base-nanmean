// Copyright (c) 2023 The Stdlib Authors. License is Apache-2.0: http://www.apache.org/licenses/LICENSE-2.0
var e,r;e=this,r=function(){"use strict";var e="function"==typeof Object.defineProperty?Object.defineProperty:null,r=Object.defineProperty,t=Object.prototype,n=t.toString,o=t.__defineGetter__,a=t.__defineSetter__,i=t.__lookupGetter__,u=t.__lookupSetter__,f=function(){try{return e({},"x",{}),!0}catch(e){return!1}}()?r:function(e,r,f){var l,c,_,p;if("object"!=typeof e||null===e||"[object Array]"===n.call(e))throw new TypeError("invalid argument. First argument must be an object. Value: `"+e+"`.");if("object"!=typeof f||null===f||"[object Array]"===n.call(f))throw new TypeError("invalid argument. Property descriptor must be an object. Value: `"+f+"`.");if((c="value"in f)&&(i.call(e,r)||u.call(e,r)?(l=e.__proto__,e.__proto__=t,delete e[r],e[r]=f.value,e.__proto__=l):e[r]=f.value),_="get"in f,p="set"in f,c&&(_||p))throw new Error("invalid argument. Cannot specify one or more accessors and a value or writable attribute in the property descriptor.");return _&&o&&o.call(e,r,f.get),p&&a&&a.call(e,r,f.set),e};function l(e,r,t){f(e,r,{configurable:!1,enumerable:!1,writable:!1,value:t})}function c(e,r,t){var n,o,a,i,u,f,l;if(e<=0)return NaN;if(1===e||0===t)return r[0];for(l=n=t<0?(1-e)*t:0,a=0,u=0,f=0;f<e;f++)(o=r[n])==o&&(u+=1,a+=o),n+=t;if(0===u)return NaN;for(a/=u,i=0,n=l,f=0;f<e;f++)(o=r[n])==o&&(i+=o-a),n+=t;return a+i/u}l(c,"ndarray",(function(e,r,t,n){var o,a,i,u,f,l;if(e<=0)return NaN;if(1===e||0===t)return r[n];for(o=n,i=0,f=0,l=0;l<e;l++)(a=r[o])==a&&(f+=1,i+=a),o+=t;if(0===f)return NaN;for(i/=f,o=n,u=0,l=0;l<e;l++)(a=r[o])==a&&(u+=a-i),o+=t;return i+u/f}));const{ndarray:_}=c;function p(e,r,t){return c(e,r,t)}return l(p,"ndarray",(function(e,r,t,n){return _(e,r,t,n)})),p},"object"==typeof exports&&"undefined"!=typeof module?module.exports=r():"function"==typeof define&&define.amd?define(r):(e="undefined"!=typeof globalThis?globalThis:e||self).nanmean=r();
//# sourceMappingURL=index.js.map
