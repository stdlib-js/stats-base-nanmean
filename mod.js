// Copyright (c) 2022 The Stdlib Authors. License is Apache-2.0: http://www.apache.org/licenses/LICENSE-2.0
/// <reference types="./mod.d.ts" />
var r="function"==typeof Object.defineProperty?Object.defineProperty:null;var e=function(){try{return r({},"x",{}),!0}catch(r){return!1}},t=Object.defineProperty,n=Object.prototype,a=n.toString,o=n.__defineGetter__,u=n.__defineSetter__,i=n.__lookupGetter__,l=n.__lookupSetter__;var c=t,f=function(r,e,t){var c,f,_,p;if("object"!=typeof r||null===r||"[object Array]"===a.call(r))throw new TypeError("invalid argument. First argument must be an object. Value: `"+r+"`.");if("object"!=typeof t||null===t||"[object Array]"===a.call(t))throw new TypeError("invalid argument. Property descriptor must be an object. Value: `"+t+"`.");if((f="value"in t)&&(i.call(r,e)||l.call(r,e)?(c=r.__proto__,r.__proto__=n,delete r[e],r[e]=t.value,r.__proto__=c):r[e]=t.value),_="get"in t,p="set"in t,f&&(_||p))throw new Error("invalid argument. Cannot specify one or more accessors and a value or writable attribute in the property descriptor.");return _&&o&&o.call(r,e,t.get),p&&u&&u.call(r,e,t.set),r},_=e()?c:f;var p=function(r,e,t){_(r,e,{configurable:!1,enumerable:!1,writable:!1,value:t})};var y=function(r,e,t){var n,a,o,u,i,l,c;if(r<=0)return NaN;if(1===r||0===t)return e[0];for(c=n=t<0?(1-r)*t:0,o=0,i=0,l=0;l<r;l++)(a=e[n])==a&&(i+=1,o+=a),n+=t;if(0===i)return NaN;for(o/=i,u=0,n=c,l=0;l<r;l++)(a=e[n])==a&&(u+=a-o),n+=t;return o+u/i};p(y,"ndarray",(function(r,e,t,n){var a,o,u,i,l,c;if(r<=0)return NaN;if(1===r||0===t)return e[n];for(a=n,u=0,l=0,c=0;c<r;c++)(o=e[a])==o&&(l+=1,u+=o),a+=t;if(0===l)return NaN;for(u/=l,a=n,i=0,c=0;c<r;c++)(o=e[a])==o&&(i+=o-u),a+=t;return u+i/l}));var b=y;function v(r,e,t){return b(r,e,t)}p(v,"ndarray",(function(r,e,t,n){return b.ndarray(r,e,t,n)}));export{v as default};
//# sourceMappingURL=mod.js.map
