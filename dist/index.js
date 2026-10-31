"use strict";var c=function(e,r){return function(){try{return r||e((r={exports:{}}).exports,r),r.exports}catch(i){throw (r=0, i)}};};var v=c(function(j,s){
var t=require('@stdlib/math-base-assert-is-nan/dist'),o=require('@stdlib/math-base-special-pow/dist');function w(e,r,i){var n;return t(e)||t(r)||t(i)||r<=0||i<=0?NaN:e<=0?0:e<=r?(n=o(e/r,i),n/(1+n)):1/(1+o(r/e,i))}s.exports=w
});var y=c(function(k,N){
var m=require('@stdlib/utils-constant-function/dist'),f=require('@stdlib/math-base-assert-is-nan/dist'),q=require('@stdlib/math-base-special-pow/dist');function F(e,r){if(f(e)||f(r)||e<=0||r<=0)return m(NaN);return i;function i(n){var u;return f(n)?NaN:n<=0?0:n<=e?(u=q(n/e,r),u/(1+u)):1/(1+q(e/n,r))}}N.exports=F
});var O=require('@stdlib/utils-define-nonenumerable-read-only-property/dist'),d=v(),R=y();O(d,"factory",R);module.exports=d;
/** @license Apache-2.0 */
//# sourceMappingURL=index.js.map
