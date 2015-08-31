!function(e){if("object"==typeof exports&&"undefined"!=typeof module)module.exports=e();else if("function"==typeof define&&define.amd)define([],e);else{var n;n="undefined"!=typeof window?window:"undefined"!=typeof global?global:"undefined"!=typeof self?self:this,n.JsonRefs=e()}}(function(){var e;return function n(e,t,r){function i(f,u){if(!t[f]){if(!e[f]){var c="function"==typeof require&&require;if(!u&&c)return c(f,!0);if(o)return o(f,!0);var s=new Error("Cannot find module '"+f+"'");throw s.code="MODULE_NOT_FOUND",s}var a=t[f]={exports:{}};e[f][0].call(a.exports,function(n){var t=e[f][1][n];return i(t?t:n)},a,a.exports,n,e,t,r)}return t[f].exports}for(var o="function"==typeof require&&require,f=0;f<r.length;f++)i(r[f]);return i}({1:[function(e,n,t){(function(t){"use strict";function r(e,n){var t=d[e],r=Promise.resolve(),i=-1===e.indexOf(":")?void 0:e.split(":")[0];return c.isUndefined(t)?-1!==l.indexOf(i)||c.isUndefined(i)?(r=s.load(e,n),r=r.then(n.processContent?function(t){return n.processContent(t,e)}:JSON.parse),r=r.then(function(n){return d[e]=n,n})):r=r.then(function(){return Promise.reject(new Error("Unsupported remote reference scheme: "+i))}):r=r.then(function(){return t}),r=r.then(function(e){return c.cloneDeep(e)})}function i(e,n){var t=y(e);return w(n)&&(n=-1===n.indexOf("#")?"#":n.substring(n.indexOf("#"))),h(t.concat(y(n))).replace(/\/\$ref/g,"")}function o(e,n){function t(e){".."===e?i.pop():"."!==e&&i.push(e)}var r="#"!==n.charAt(0)&&-1===n.indexOf(":"),i=[],o=(n.indexOf("#")>-1?n.split("#")[0]:n).split("/");return e&&e.length>1&&"/"===e[e.length-1]&&(e=e.substring(0,e.length-1)),e&&e.split("#")[0].split("/").forEach(t),r?o.forEach(t):i=o,i.join("/")}function f(e,n,t){function r(e){var n=e.slice(0,e.lastIndexOf("allOf")),i=t[h(n)];return c.isUndefined(i)?n.indexOf("allOf")>-1?r(n):void 0:h(n)}function o(e){var n=[],i=e.map(function(){var e,i=h(this.path),o=t[i];this.circular&&(n.push(i),c.isUndefined(o)&&(e=r(this.path),o=t[e]),c.isUndefined(o)||(o.circular=!0),this.update(0===u?{}:a(this.node).map(function(){this.circular&&this.parent.update({})})))});return c.each(n,function(e){var n,t=[],r=y(e),o=a(i).get(r);for(n=0;u>n;n++)t.push.apply(t,r),a(i).set(t,c.cloneDeep(o))}),i}function f(e,n){var r=i(n,"#"),o=e=-1===e.indexOf("#")?"#":e.substring(e.indexOf("#")),f=y(o),u=!s.has(f),c=s.get(f),a=y(n),d=a.slice(0,a.length-1),l=t[r]||{ref:e};u?l.missing=!0:0===d.length?(s.value===c&&(c={},l.circular=!0),s.value=c):(s.get(d)===c&&(c={},l.circular=!0),s.set(d,c)),t[r]=l}var u=c.isUndefined(n.depth)?1:n.depth,s=a(e);return c.each(v(e),function(e,n){w(e)||f(e,n)}),c.isUndefined(n.location)||c.each(t,function(e){var t=e.ref;0===t.indexOf(n.location)&&(t=t.substring(n.location.length),"/"===t.charAt(0)&&(t=t.substring(1))),e.ref=t}),{metadata:t,resolved:o(s)}}function u(e,n,t,s,d){function l(e,n,r,o,f){var u,l=r+("#"===o?"":o),p=i(t,e),h=d[p]||{},v=y(e);c.isUndefined(f)?(h.circular=!0,u=s[r].ref):(u=a(f).get(y(o)),u.$ref?u=u.$ref:v.pop()),0===v.length?g.value=u:g.set(v,u),h.ref=l,d[p]=h}function p(){return{metadata:d,resolved:g.value}}var h=Promise.resolve(),g=a(e);return c.each(v(e),function(e,f){w(e)&&(h=h.then(function(){var a=o(n.location,e),p=e.split("#"),h="#"+(p[1]||"");return c.isUndefined(s[a])?r(a,n).then(function(e){return e},function(e){return e}).then(function(r){var v=p[0],w=c.cloneDeep(n),y=i(t,f);return v=v.substring(0,v.lastIndexOf("/")+1),w.location=o(n.location,v),s[a]={ref:t},c.isError(r)?void(d[y]={err:r,missing:!0,ref:e}):u(r,w,y,s,d).then(function(n){return delete s[a],l(f,e,a,h,n.resolved),n})}):void l(f,e,a,h)}))}),h=h.then(function(){f(g.value,n,d)}).then(p,p)}"undefined"==typeof Promise&&e("native-promise-only");var c=e("./lib/utils"),s="undefined"!=typeof window?window.PathLoader:"undefined"!=typeof t?t.PathLoader:null,a="undefined"!=typeof window?window.traverse:"undefined"!=typeof t?t.traverse:null,d={},l=["file","http","https"];n.exports.clearCache=function(){d={}};var p=n.exports.isJsonReference=function(e){return c.isPlainObject(e)&&c.isString(e.$ref)},h=n.exports.pathToPointer=function(e){if(c.isUndefined(e))throw new Error("path is required");if(!c.isArray(e))throw new Error("path must be an array");var n="#";return e.length>0&&(n+="/"+e.map(function(e){return e.replace(/~/g,"~0").replace(/\//g,"~1")}).join("/")),n},v=n.exports.findRefs=function(e){if(c.isUndefined(e))throw new Error("json is required");if(!c.isPlainObject(e))throw new Error("json must be an object");return a(e).reduce(function(e){var n=this.node;return"$ref"===this.key&&p(this.parent.node)&&(e[h(this.path)]=n),e},{})},w=n.exports.isRemotePointer=function(e){if(c.isUndefined(e))throw new Error("ptr is required");if(!c.isString(e))throw new Error("ptr must be a string");return""!==e&&"#"!==e.charAt(0)},y=n.exports.pathFromPointer=function(e){if(c.isUndefined(e))throw new Error("ptr is required");if(!c.isString(e))throw new Error("ptr must be a string");var n=[],t=["","#","#/"];return w(e)?n=e:-1===t.indexOf(e)&&"#"===e.charAt(0)&&(n=e.substring(e.indexOf("/")).split("/").reduce(function(e,n){return""!==n&&e.push(n.replace(/~0/g,"~").replace(/~1/g,"/")),e},[])),n};n.exports.resolveRefs=function(e,n,t){var r=Promise.resolve();return 2===arguments.length&&c.isFunction(n)&&(t=n,n={}),c.isUndefined(n)&&(n={}),r=r.then(function(){if(c.isUndefined(e))throw new Error("json is required");if(!c.isPlainObject(e))throw new Error("json must be an object");if(!c.isPlainObject(n))throw new Error("options must be an object");if(!c.isUndefined(t)&&!c.isFunction(t))throw new Error("done must be a function");if(!c.isUndefined(n.processContent)&&!c.isFunction(n.processContent))throw new Error("options.processContent must be a function");if(!c.isUndefined(n.prepareRequest)&&!c.isFunction(n.prepareRequest))throw new Error("options.prepareRequest must be a function");if(!c.isUndefined(n.location)&&!c.isString(n.location))throw new Error("options.location must be a string");if(!c.isUndefined(n.depth)&&!c.isNumber(n.depth))throw new Error("options.depth must be a number");if(!c.isUndefined(n.depth)&&n.depth<0)throw new Error("options.depth must be greater or equal to zero")}),e=a(e).clone(),n=a(n).clone(),r=r.then(function(){return u(e,n,"#",{},{})}).then(function(e){return f(e.resolved,n,e.metadata)}),!c.isUndefined(t)&&c.isFunction(t)&&(r=r.then(function(e){t(void 0,e.resolved,e.metadata)},function(e){t(e)})),r}}).call(this,"undefined"!=typeof global?global:"undefined"!=typeof self?self:"undefined"!=typeof window?window:{})},{"./lib/utils":2,"native-promise-only":3}],2:[function(e,n,t){(function(e){"use strict";function t(e,n){return Object.prototype.toString.call(e)==="[object "+n+"]"}var r="undefined"!=typeof window?window.traverse:"undefined"!=typeof e?e.traverse:null;n.exports.cloneDeep=function(e){return r(e).clone()};var i=n.exports.isArray=function(e){return t(e,"Array")};n.exports.isError=function(e){return t(e,"Error")},n.exports.isFunction=function(e){return t(e,"Function")},n.exports.isNumber=function(e){return t(e,"Number")};var o=n.exports.isPlainObject=function(e){return t(e,"Object")};n.exports.isString=function(e){return t(e,"String")},n.exports.isUndefined=function(e){return"undefined"==typeof e},n.exports.each=function(e,n){i(e)?e.forEach(n):o(e)&&Object.keys(e).forEach(function(t){n(e[t],t)})}}).call(this,"undefined"!=typeof global?global:"undefined"!=typeof self?self:"undefined"!=typeof window?window:{})},{}],3:[function(n,t,r){(function(n){!function(n,r,i){r[n]=r[n]||i(),"undefined"!=typeof t&&t.exports?t.exports=r[n]:"function"==typeof e&&e.amd&&e(function(){return r[n]})}("Promise","undefined"!=typeof n?n:this,function(){"use strict";function e(e,n){l.add(e,n),d||(d=h(l.drain))}function n(e){var n,t=typeof e;return null==e||"object"!=t&&"function"!=t||(n=e.then),"function"==typeof n?n:!1}function t(){for(var e=0;e<this.chain.length;e++)r(this,1===this.state?this.chain[e].success:this.chain[e].failure,this.chain[e]);this.chain.length=0}function r(e,t,r){var i,o;try{t===!1?r.reject(e.msg):(i=t===!0?e.msg:t.call(void 0,e.msg),i===r.promise?r.reject(TypeError("Promise-chain cycle")):(o=n(i))?o.call(i,r.resolve,r.reject):r.resolve(i))}catch(f){r.reject(f)}}function i(r){var f,c=this;if(!c.triggered){c.triggered=!0,c.def&&(c=c.def);try{(f=n(r))?e(function(){var e=new u(c);try{f.call(r,function(){i.apply(e,arguments)},function(){o.apply(e,arguments)})}catch(n){o.call(e,n)}}):(c.msg=r,c.state=1,c.chain.length>0&&e(t,c))}catch(s){o.call(new u(c),s)}}}function o(n){var r=this;r.triggered||(r.triggered=!0,r.def&&(r=r.def),r.msg=n,r.state=2,r.chain.length>0&&e(t,r))}function f(e,n,t,r){for(var i=0;i<n.length;i++)!function(i){e.resolve(n[i]).then(function(e){t(i,e)},r)}(i)}function u(e){this.def=e,this.triggered=!1}function c(e){this.promise=e,this.state=0,this.triggered=!1,this.chain=[],this.msg=void 0}function s(n){if("function"!=typeof n)throw TypeError("Not a function");if(0!==this.__NPO__)throw TypeError("Not a promise");this.__NPO__=1;var r=new c(this);this.then=function(n,i){var o={success:"function"==typeof n?n:!0,failure:"function"==typeof i?i:!1};return o.promise=new this.constructor(function(e,n){if("function"!=typeof e||"function"!=typeof n)throw TypeError("Not a function");o.resolve=e,o.reject=n}),r.chain.push(o),0!==r.state&&e(t,r),o.promise},this["catch"]=function(e){return this.then(void 0,e)};try{n.call(void 0,function(e){i.call(r,e)},function(e){o.call(r,e)})}catch(f){o.call(r,f)}}var a,d,l,p=Object.prototype.toString,h="undefined"!=typeof setImmediate?function(e){return setImmediate(e)}:setTimeout;try{Object.defineProperty({},"x",{}),a=function(e,n,t,r){return Object.defineProperty(e,n,{value:t,writable:!0,configurable:r!==!1})}}catch(v){a=function(e,n,t){return e[n]=t,e}}l=function(){function e(e,n){this.fn=e,this.self=n,this.next=void 0}var n,t,r;return{add:function(i,o){r=new e(i,o),t?t.next=r:n=r,t=r,r=void 0},drain:function(){var e=n;for(n=t=d=void 0;e;)e.fn.call(e.self),e=e.next}}}();var w=a({},"constructor",s,!1);return s.prototype=w,a(w,"__NPO__",0,!1),a(s,"resolve",function(e){var n=this;return e&&"object"==typeof e&&1===e.__NPO__?e:new n(function(n,t){if("function"!=typeof n||"function"!=typeof t)throw TypeError("Not a function");n(e)})}),a(s,"reject",function(e){return new this(function(n,t){if("function"!=typeof n||"function"!=typeof t)throw TypeError("Not a function");t(e)})}),a(s,"all",function(e){var n=this;return"[object Array]"!=p.call(e)?n.reject(TypeError("Not an array")):0===e.length?n.resolve([]):new n(function(t,r){if("function"!=typeof t||"function"!=typeof r)throw TypeError("Not a function");var i=e.length,o=Array(i),u=0;f(n,e,function(e,n){o[e]=n,++u===i&&t(o)},r)})}),a(s,"race",function(e){var n=this;return"[object Array]"!=p.call(e)?n.reject(TypeError("Not an array")):new n(function(t,r){if("function"!=typeof t||"function"!=typeof r)throw TypeError("Not a function");f(n,e,function(e,n){t(n)},r)})}),s})}).call(this,"undefined"!=typeof global?global:"undefined"!=typeof self?self:"undefined"!=typeof window?window:{})},{}]},{},[1])(1)});