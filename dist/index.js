"use strict";var n=function(e,r){return function(){return r||e((r={exports:{}}).exports,r),r.exports}};var t=n(function(b,u){
var d=require('@stdlib/stats-base-nanmeanpn/dist').ndarray;function m(e,r,a,c){return d(e,r,a,c)}u.exports=m
});var s=n(function(g,i){
var p=require('@stdlib/strided-base-stride2offset/dist'),y=t();function f(e,r,a){return y(e,r,a,p(e,a))}i.exports=f
});var v=n(function(h,q){
var x=require('@stdlib/utils-define-nonenumerable-read-only-property/dist'),o=s(),l=t();x(o,"ndarray",l);q.exports=o
});var O=v();module.exports=O;
/** @license Apache-2.0 */
//# sourceMappingURL=index.js.map
