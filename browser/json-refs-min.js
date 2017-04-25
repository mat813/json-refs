!function(e){if("object"==typeof exports&&"undefined"!=typeof module)module.exports=e();else if("function"==typeof define&&define.amd)define([],e);else{var r;r="undefined"!=typeof window?window:"undefined"!=typeof global?global:"undefined"!=typeof self?self:this,r.JsonRefs=e()}}(function(){var e;return function e(r,t,n){function o(a,s){if(!t[a]){if(!r[a]){var c="function"==typeof require&&require;if(!s&&c)return c(a,!0);if(i)return i(a,!0);var u=new Error("Cannot find module '"+a+"'");throw u.code="MODULE_NOT_FOUND",u}var f=t[a]={exports:{}};r[a][0].call(f.exports,function(e){var t=r[a][1][e];return o(t||e)},f,f.exports,e,r,t,n)}return t[a].exports}for(var i="function"==typeof require&&require,a=0;a<n.length;a++)o(n[a]);return o}({1:[function(e,r,t){(function(t,n){"use strict";function o(e,r){function t(e){_.each(e,function(e,r){n[r]=e})}var n={};return t(H.parse(e||"")),t(H.parse(r||"")),0===Object.keys(n).length?void 0:H.stringify(n)}function i(e,r){_.isString(e)&&(e=L(e)),_.isString(r)&&(r=L(r));var t,n,i=m(_.isUndefined(r)?"":r);return Z.indexOf(i.reference)>-1?n=i:(t=_.isUndefined(e)?void 0:m(e),_.isUndefined(t)?n=i:(n=t,n.path=L(q.join(t.path,i.path)),n.query=o(t.query,i.query))),n.fragment=void 0,(-1===Z.indexOf(n.reference)&&0===n.path.indexOf("../")?"../":"")+$.serialize(n)}function a(e,r){var t,n=[];return r.length>0&&(t=e,r.slice(0,r.length-1).forEach(function(e){e in t&&(t=t[e],n.push(t))})),n}function s(e){return M.indexOf(l(e))>-1}function c(e){return _.isUndefined(e.error)&&"invalid"!==e.type}function u(e,r){var t=e;return r.forEach(function(e){if(!((e=decodeURI(e))in t))throw Error("JSON Pointer points to missing location: "+N(r));t=t[e]}),t}function f(e){return Object.keys(e).filter(function(e){return"$ref"!==e})}function l(e){var r;switch(e.uriDetails.reference){case"absolute":case"uri":r="remote";break;case"same-document":r="local";break;default:r=e.uriDetails.reference}return r}function p(e,r){var t=J[e],n=Promise.resolve(),o=_.cloneDeep(r.loaderOptions||{});return _.isUndefined(t)?(_.isUndefined(o.processContent)&&(o.processContent=function(e,r){r(void 0,JSON.parse(e.text))}),n=z.load(decodeURI(e),o),n=n.then(function(r){return J[e]={value:r},r}).catch(function(r){throw J[e]={error:r},r})):n=n.then(function(){if(_.isError(t.error))throw t.error;return t.value}),n=n.then(function(e){return _.cloneDeep(e)})}function h(e,r){var t=!0;try{if(!_.isPlainObject(e))throw new Error("obj is not an Object");if(!_.isString(e.$ref))throw new Error("obj.$ref is not a String")}catch(e){if(r)throw e;t=!1}return t}function d(e){return-1!==e.indexOf("://")||q.isAbsolute(e)?e:q.resolve(t.cwd(),e)}function v(e){var r,t;return _.isArray(e.filter)||_.isString(e.filter)?(t=_.isString(e.filter)?[e.filter]:e.filter,r=function(e){return t.indexOf(e.type)>-1||t.indexOf(l(e))>-1}):_.isFunction(e.filter)?r=e.filter:_.isUndefined(e.filter)&&(r=function(){return!0}),function(t,n){return("invalid"!==t.type||!0===e.includeInvalid)&&r(t,n)}}function g(e){var r;return _.isArray(e.subDocPath)?r=e.subDocPath:_.isString(e.subDocPath)?r=j(e.subDocPath):_.isUndefined(e.subDocPath)&&(r=[]),r}function y(e,r){e.error=r.message,e.missing=!0}function m(e){return $.parse(encodeURI(decodeURI(e)))}function b(e,r,t){var n,o,a=Promise.resolve(),u=N(r.subDocPath),f=d(r.location),l=q.dirname(r.location),h=f+u;return _.isUndefined(t.docs[f])&&(t.docs[f]=e),_.isUndefined(t.deps[h])&&(t.deps[h]={},n=S(e,r),_.each(n,function(n,f){var v=d(r.location)+f,g=n.refdId=d(s(n)?i(l,n.uri):r.location)+"#"+(n.uri.indexOf("#")>-1?n.uri.split("#")[1]:"");if(t.refs[v]=n,c(n)){if(t.deps[h][f===u?"#":f.replace(u+"/","#/")]=g,0===v.indexOf(g+"/"))return void(n.circular=!0);o=_.cloneDeep(r),o.subDocPath=_.isUndefined(n.uriDetails.fragment)?[]:j(decodeURI(n.uriDetails.fragment)),s(n)?(delete o.filter,o.location=g.split("#")[0],a=a.then(function(e,r){return function(){var t=d(r.location),n=e.docs[t];return _.isUndefined(n)?p(t,r).catch(function(r){return e.docs[t]=r,r}):Promise.resolve().then(function(){return n})}}(t,o))):a=a.then(function(){return e}),a=a.then(function(e,r,t){return function(n){if(_.isError(n))y(t,n);else try{return b(n,r,e).catch(function(e){y(t,e)})}catch(e){y(t,e)}}}(t,o,n))}})),a}function w(e,r,t){u(e,r.slice(0,r.length-1))[decodeURI(r[r.length-1])]=t}function E(e,r,t,n){function o(r,o){t.push(o),E(e,r,t,n),t.pop()}var i=!0;_.isFunction(n)&&(i=n(e,r,t)),-1===e.indexOf(r)&&(e.push(r),!1!==i&&(_.isArray(r)?r.forEach(function(e,r){o(e,r.toString())}):_.isObject(r)&&_.each(r,function(e,r){o(e,r)})),e.pop())}function O(e,r){var t;if(e=_.isUndefined(e)?{}:_.cloneDeep(e),!_.isObject(e))throw new TypeError("options must be an Object");if(!_.isUndefined(e.resolveCirculars)&&!_.isBoolean(e.resolveCirculars))throw new TypeError("options.resolveCirculars must be a Boolean");if(!(_.isUndefined(e.filter)||_.isArray(e.filter)||_.isFunction(e.filter)||_.isString(e.filter)))throw new TypeError("options.filter must be an Array, a Function of a String");if(!_.isUndefined(e.includeInvalid)&&!_.isBoolean(e.includeInvalid))throw new TypeError("options.includeInvalid must be a Boolean");if(!_.isUndefined(e.location)&&!_.isString(e.location))throw new TypeError("options.location must be a String");if(!_.isUndefined(e.refPreProcessor)&&!_.isFunction(e.refPreProcessor))throw new TypeError("options.refPreProcessor must be a Function");if(!_.isUndefined(e.refPostProcessor)&&!_.isFunction(e.refPostProcessor))throw new TypeError("options.refPostProcessor must be a Function");if(!_.isUndefined(e.subDocPath)&&!_.isArray(e.subDocPath)&&!T(e.subDocPath))throw new TypeError("options.subDocPath must be an Array of path segments or a valid JSON Pointer");if(_.isUndefined(e.resolveCirculars)&&(e.resolveCirculars=!1),e.filter=v(e),_.isUndefined(e.location)&&(e.location=d("./root.json")),t=e.location.split("#"),t.length>1&&(e.subDocPath="#"+t[1]),e.location=i(e.location,void 0),e.subDocPath=g(e),!_.isUndefined(r))try{u(r,e.subDocPath)}catch(e){throw e.message=e.message.replace("JSON Pointer","options.subDocPath"),e}return e}function C(){J={}}function P(e){if(!_.isArray(e))throw new TypeError("path must be an array");return e.map(function(e){return _.isString(e)||(e=JSON.stringify(e)),decodeURI(e.replace(/~1/g,"/").replace(/~0/g,"~"))})}function x(e){if(!_.isArray(e))throw new TypeError("path must be an array");return e.map(function(e){return _.isString(e)||(e=JSON.stringify(e)),e.replace(/~/g,"~0").replace(/\//g,"~1")})}function S(e,r){var t={};if(!_.isArray(e)&&!_.isObject(e))throw new TypeError("obj must be an Array or an Object");return r=O(r,e),E(a(e,r.subDocPath),u(e,r.subDocPath),_.cloneDeep(r.subDocPath),function(e,n,o){var i,a,s=!0;return h(n)&&(_.isUndefined(r.refPreProcessor)||(n=r.refPreProcessor(_.cloneDeep(n),o)),i=A(n),_.isUndefined(r.refPostProcessor)||(i=r.refPostProcessor(i,o)),r.filter(i,o)&&(a=N(o),t[a]=i),f(n).length>0&&(s=!1)),s}),t}function D(e,r){var t=Promise.resolve();return t=t.then(function(){if(!_.isString(e))throw new TypeError("location must be a string");return _.isUndefined(r)&&(r={}),_.isObject(r)&&(r.location=e),r=O(r),p(r.location,r)}).then(function(e){var t=_.cloneDeep(J[r.location]),n=_.cloneDeep(r),o=m(r.location);return _.isUndefined(t.refs)&&(delete n.filter,delete n.subDocPath,n.includeInvalid=!0,J[r.location].refs=S(e,n)),_.isUndefined(r.filter)||(n.filter=r.filter),_.isUndefined(o.fragment)?_.isUndefined(o.subDocPath)||(n.subDocPath=r.subDocPath):n.subDocPath=j(decodeURI(o.fragment)),{refs:S(e,n),value:e}})}function A(e){var r,t,n,o={def:e};try{h(e,!0)?(r=e.$ref,n=V[r],_.isUndefined(n)&&(n=V[r]=m(r)),o.uri=r,o.uriDetails=n,_.isUndefined(n.error)?o.type=l(o):(o.error=o.uriDetails.error,o.type="invalid"),t=f(e),t.length>0&&(o.warning="Extra JSON Reference properties will be ignored: "+t.join(", "))):o.type="invalid"}catch(e){o.error=e.message,o.type="invalid"}return o}function T(e,r){var t,n=!0;try{if(!_.isString(e))throw new Error("ptr is not a String");if(""!==e){if(t=e.charAt(0),-1===["#","/"].indexOf(t))throw new Error("ptr must start with a / or #/");if("#"===t&&"#"!==e&&"/"!==e.charAt(1))throw new Error("ptr must start with a / or #/");if(e.match(k))throw new Error("ptr has invalid token(s)")}}catch(e){if(!0===r)throw e;n=!1}return n}function U(e,r){return h(e,r)&&"invalid"!==A(e,r).type}function j(e){try{T(e,!0)}catch(e){throw new Error("ptr must be a JSON Pointer: "+e.message)}var r=e.split("/");return r.shift(),P(r)}function N(e,r){if(!_.isArray(e))throw new Error("path must be an Array");return(!1!==r?"#":"")+(e.length>0?"/":"")+x(e).join("/")}function I(e,r){var t=Promise.resolve();return t=t.then(function(){if(!_.isArray(e)&&!_.isObject(e))throw new TypeError("obj must be an Array or an Object");r=O(r,e),e=_.cloneDeep(e)}).then(function(){var t={deps:{},docs:{},refs:{}};return b(e,r,t).then(function(){return t})}).then(function(e){function t(o,i,a){var s,u=i.split("#"),f=e.refs[i];if(n[u[0]===r.location?"#"+u[1]:N(r.subDocPath.concat(a))]=f,f.circular||!c(f))return void(!f.circular&&f.error&&(f.error=f.error.replace("options.subDocPath","JSON Pointer"),f.error.indexOf("#")>-1&&(f.error=f.error.replace(f.uri.substr(f.uri.indexOf("#")),f.uri)),0!==f.error.indexOf("ENOENT:")&&0!==f.error.indexOf("Not Found")||(f.error="JSON Pointer points to missing location: "+f.uri)));s=e.deps[f.refdId],0!==f.refdId.indexOf(o)&&Object.keys(s).forEach(function(e){t(f.refdId,f.refdId+e.substr(1),a.concat(j(e)))})}var n={},o=[],i=[],a=new F.Graph,f=d(r.location),l=f+N(r.subDocPath);return Object.keys(e.deps).forEach(function(e){a.setNode(e)}),_.each(e.deps,function(e,r){_.each(e,function(e){a.setEdge(r,e)})}),o=F.alg.findCycles(a),o.forEach(function(e){e.forEach(function(e){-1===i.indexOf(e)&&i.push(e)})}),_.each(e.deps,function(r,t){_.each(r,function(r,n){var a,c=!1,u=t+n.slice(1),f=e.refs[t+n.slice(1)],l=s(f);i.indexOf(r)>-1&&o.forEach(function(e){c||(a=e.indexOf(r))>-1&&e.forEach(function(r){c||0===u.indexOf(r+"/")&&(l&&a===e.length-1||!l)&&(c=!0)})}),c&&(f.circular=!0)})}),_.each(e.deps,function(t,n){var o=n.split("#"),i=e.docs[o[0]],a=j(o[1]);_.each(t,function(t,n){var s=t.split("#"),c=e.docs[s[0]],f=a.concat(j(n)),l=e.refs[o[0]+N(f)];if(_.isUndefined(l.error)&&_.isUndefined(l.missing))if(!r.resolveCirculars&&l.circular)l.value=l.def;else{try{l.value=u(c,j(s[1]))}catch(e){return void y(l,e)}""===o[1]&&"#"===n?e.docs[o[0]]=l.value:w(i,f,l.value)}})}),Object.keys(e.refs).forEach(function(e){0===e.indexOf(l)&&t(l,e,j(e.substr(l.length)))}),_.each(e.refs,function(e){delete e.refdId}),{refs:n,resolved:e.docs[f]}})}function R(e,r){var t=Promise.resolve();return t=t.then(function(){if(!_.isString(e))throw new TypeError("location must be a string");return _.isUndefined(r)&&(r={}),_.isObject(r)&&(r.location=e),r=O(r),p(r.location,r)}).then(function(e){var t=_.cloneDeep(r),n=m(r.location);return _.isUndefined(n.fragment)||(t.subDocPath=j(decodeURI(n.fragment))),I(e,t).then(function(r){return{refs:r.refs,resolved:r.resolved,value:e}})})}var _="undefined"!=typeof window?window._:void 0!==n?n._:null,F="undefined"!=typeof window?window.graphlib:void 0!==n?n.graphlib:null,q=e("path"),z="undefined"!=typeof window?window.PathLoader:void 0!==n?n.PathLoader:null,H=e("querystring"),L=e("slash"),$=e("uri-js"),k=/~(?:[^01]|$)/g,J={},M=["relative","remote"],Z=["absolute","uri"],V={};"undefined"==typeof Promise&&e("native-promise-only"),r.exports.clearCache=C,r.exports.decodePath=P,r.exports.encodePath=x,r.exports.findRefs=S,r.exports.findRefsAt=D,r.exports.getRefDetails=A,r.exports.isPtr=T,r.exports.isRef=U,r.exports.pathFromPtr=j,r.exports.pathToPtr=N,r.exports.resolveRefs=I,r.exports.resolveRefsAt=R}).call(this,e("_process"),"undefined"!=typeof global?global:"undefined"!=typeof self?self:"undefined"!=typeof window?window:{})},{_process:4,"native-promise-only":2,path:3,querystring:7,slash:8,"uri-js":9}],2:[function(r,t,n){(function(r){!function(r,n,o){n[r]=n[r]||o(),void 0!==t&&t.exports?t.exports=n[r]:"function"==typeof e&&e.amd&&e(function(){return n[r]})}("Promise",void 0!==r?r:this,function(){"use strict";function e(e,r){p.add(e,r),l||(l=d(p.drain))}function r(e){var r,t=typeof e;return null==e||"object"!=t&&"function"!=t||(r=e.then),"function"==typeof r&&r}function t(){for(var e=0;e<this.chain.length;e++)n(this,1===this.state?this.chain[e].success:this.chain[e].failure,this.chain[e]);this.chain.length=0}function n(e,t,n){var o,i;try{!1===t?n.reject(e.msg):(o=!0===t?e.msg:t.call(void 0,e.msg),o===n.promise?n.reject(TypeError("Promise-chain cycle")):(i=r(o))?i.call(o,n.resolve,n.reject):n.resolve(o))}catch(e){n.reject(e)}}function o(n){var a,c=this;if(!c.triggered){c.triggered=!0,c.def&&(c=c.def);try{(a=r(n))?e(function(){var e=new s(c);try{a.call(n,function(){o.apply(e,arguments)},function(){i.apply(e,arguments)})}catch(r){i.call(e,r)}}):(c.msg=n,c.state=1,c.chain.length>0&&e(t,c))}catch(e){i.call(new s(c),e)}}}function i(r){var n=this;n.triggered||(n.triggered=!0,n.def&&(n=n.def),n.msg=r,n.state=2,n.chain.length>0&&e(t,n))}function a(e,r,t,n){for(var o=0;o<r.length;o++)!function(o){e.resolve(r[o]).then(function(e){t(o,e)},n)}(o)}function s(e){this.def=e,this.triggered=!1}function c(e){this.promise=e,this.state=0,this.triggered=!1,this.chain=[],this.msg=void 0}function u(r){if("function"!=typeof r)throw TypeError("Not a function");if(0!==this.__NPO__)throw TypeError("Not a promise");this.__NPO__=1;var n=new c(this);this.then=function(r,o){var i={success:"function"!=typeof r||r,failure:"function"==typeof o&&o};return i.promise=new this.constructor(function(e,r){if("function"!=typeof e||"function"!=typeof r)throw TypeError("Not a function");i.resolve=e,i.reject=r}),n.chain.push(i),0!==n.state&&e(t,n),i.promise},this.catch=function(e){return this.then(void 0,e)};try{r.call(void 0,function(e){o.call(n,e)},function(e){i.call(n,e)})}catch(e){i.call(n,e)}}var f,l,p,h=Object.prototype.toString,d="undefined"!=typeof setImmediate?function(e){return setImmediate(e)}:setTimeout;try{Object.defineProperty({},"x",{}),f=function(e,r,t,n){return Object.defineProperty(e,r,{value:t,writable:!0,configurable:!1!==n})}}catch(e){f=function(e,r,t){return e[r]=t,e}}p=function(){function e(e,r){this.fn=e,this.self=r,this.next=void 0}var r,t,n;return{add:function(o,i){n=new e(o,i),t?t.next=n:r=n,t=n,n=void 0},drain:function(){var e=r;for(r=t=l=void 0;e;)e.fn.call(e.self),e=e.next}}}();var v=f({},"constructor",u,!1);return u.prototype=v,f(v,"__NPO__",0,!1),f(u,"resolve",function(e){var r=this;return e&&"object"==typeof e&&1===e.__NPO__?e:new r(function(r,t){if("function"!=typeof r||"function"!=typeof t)throw TypeError("Not a function");r(e)})}),f(u,"reject",function(e){return new this(function(r,t){if("function"!=typeof r||"function"!=typeof t)throw TypeError("Not a function");t(e)})}),f(u,"all",function(e){var r=this;return"[object Array]"!=h.call(e)?r.reject(TypeError("Not an array")):0===e.length?r.resolve([]):new r(function(t,n){if("function"!=typeof t||"function"!=typeof n)throw TypeError("Not a function");var o=e.length,i=Array(o),s=0;a(r,e,function(e,r){i[e]=r,++s===o&&t(i)},n)})}),f(u,"race",function(e){var r=this;return"[object Array]"!=h.call(e)?r.reject(TypeError("Not an array")):new r(function(t,n){if("function"!=typeof t||"function"!=typeof n)throw TypeError("Not a function");a(r,e,function(e,r){t(r)},n)})}),u})}).call(this,"undefined"!=typeof global?global:"undefined"!=typeof self?self:"undefined"!=typeof window?window:{})},{}],3:[function(e,r,t){(function(e){function r(e,r){for(var t=0,n=e.length-1;n>=0;n--){var o=e[n];"."===o?e.splice(n,1):".."===o?(e.splice(n,1),t++):t&&(e.splice(n,1),t--)}if(r)for(;t--;t)e.unshift("..");return e}function n(e,r){if(e.filter)return e.filter(r);for(var t=[],n=0;n<e.length;n++)r(e[n],n,e)&&t.push(e[n]);return t}var o=/^(\/?|)([\s\S]*?)((?:\.{1,2}|[^\/]+?|)(\.[^.\/]*|))(?:[\/]*)$/,i=function(e){return o.exec(e).slice(1)};t.resolve=function(){for(var t="",o=!1,i=arguments.length-1;i>=-1&&!o;i--){var a=i>=0?arguments[i]:e.cwd();if("string"!=typeof a)throw new TypeError("Arguments to path.resolve must be strings");a&&(t=a+"/"+t,o="/"===a.charAt(0))}return t=r(n(t.split("/"),function(e){return!!e}),!o).join("/"),(o?"/":"")+t||"."},t.normalize=function(e){var o=t.isAbsolute(e),i="/"===a(e,-1);return e=r(n(e.split("/"),function(e){return!!e}),!o).join("/"),e||o||(e="."),e&&i&&(e+="/"),(o?"/":"")+e},t.isAbsolute=function(e){return"/"===e.charAt(0)},t.join=function(){var e=Array.prototype.slice.call(arguments,0);return t.normalize(n(e,function(e,r){if("string"!=typeof e)throw new TypeError("Arguments to path.join must be strings");return e}).join("/"))},t.relative=function(e,r){function n(e){for(var r=0;r<e.length&&""===e[r];r++);for(var t=e.length-1;t>=0&&""===e[t];t--);return r>t?[]:e.slice(r,t-r+1)}e=t.resolve(e).substr(1),r=t.resolve(r).substr(1);for(var o=n(e.split("/")),i=n(r.split("/")),a=Math.min(o.length,i.length),s=a,c=0;c<a;c++)if(o[c]!==i[c]){s=c;break}for(var u=[],c=s;c<o.length;c++)u.push("..");return u=u.concat(i.slice(s)),u.join("/")},t.sep="/",t.delimiter=":",t.dirname=function(e){var r=i(e),t=r[0],n=r[1];return t||n?(n&&(n=n.substr(0,n.length-1)),t+n):"."},t.basename=function(e,r){var t=i(e)[2];return r&&t.substr(-1*r.length)===r&&(t=t.substr(0,t.length-r.length)),t},t.extname=function(e){return i(e)[3]};var a="b"==="ab".substr(-1)?function(e,r,t){return e.substr(r,t)}:function(e,r,t){return r<0&&(r=e.length+r),e.substr(r,t)}}).call(this,e("_process"))},{_process:4}],4:[function(e,r,t){function n(){throw new Error("setTimeout has not been defined")}function o(){throw new Error("clearTimeout has not been defined")}function i(e){if(l===setTimeout)return setTimeout(e,0);if((l===n||!l)&&setTimeout)return l=setTimeout,setTimeout(e,0);try{return l(e,0)}catch(r){try{return l.call(null,e,0)}catch(r){return l.call(this,e,0)}}}function a(e){if(p===clearTimeout)return clearTimeout(e);if((p===o||!p)&&clearTimeout)return p=clearTimeout,clearTimeout(e);try{return p(e)}catch(r){try{return p.call(null,e)}catch(r){return p.call(this,e)}}}function s(){g&&d&&(g=!1,d.length?v=d.concat(v):y=-1,v.length&&c())}function c(){if(!g){var e=i(s);g=!0;for(var r=v.length;r;){for(d=v,v=[];++y<r;)d&&d[y].run();y=-1,r=v.length}d=null,g=!1,a(e)}}function u(e,r){this.fun=e,this.array=r}function f(){}var l,p,h=r.exports={};!function(){try{l="function"==typeof setTimeout?setTimeout:n}catch(e){l=n}try{p="function"==typeof clearTimeout?clearTimeout:o}catch(e){p=o}}();var d,v=[],g=!1,y=-1;h.nextTick=function(e){var r=new Array(arguments.length-1);if(arguments.length>1)for(var t=1;t<arguments.length;t++)r[t-1]=arguments[t];v.push(new u(e,r)),1!==v.length||g||i(c)},u.prototype.run=function(){this.fun.apply(null,this.array)},h.title="browser",h.browser=!0,h.env={},h.argv=[],h.version="",h.versions={},h.on=f,h.addListener=f,h.once=f,h.off=f,h.removeListener=f,h.removeAllListeners=f,h.emit=f,h.binding=function(e){throw new Error("process.binding is not supported")},h.cwd=function(){return"/"},h.chdir=function(e){throw new Error("process.chdir is not supported")},h.umask=function(){return 0}},{}],5:[function(e,r,t){"use strict";function n(e,r){return Object.prototype.hasOwnProperty.call(e,r)}r.exports=function(e,r,t,i){r=r||"&",t=t||"=";var a={};if("string"!=typeof e||0===e.length)return a;e=e.split(r);var s=1e3;i&&"number"==typeof i.maxKeys&&(s=i.maxKeys);var c=e.length;s>0&&c>s&&(c=s);for(var u=0;u<c;++u){var f,l,p,h,d=e[u].replace(/\+/g,"%20"),v=d.indexOf(t);v>=0?(f=d.substr(0,v),l=d.substr(v+1)):(f=d,l=""),p=decodeURIComponent(f),h=decodeURIComponent(l),n(a,p)?o(a[p])?a[p].push(h):a[p]=[a[p],h]:a[p]=h}return a};var o=Array.isArray||function(e){return"[object Array]"===Object.prototype.toString.call(e)}},{}],6:[function(e,r,t){"use strict";function n(e,r){if(e.map)return e.map(r);for(var t=[],n=0;n<e.length;n++)t.push(r(e[n],n));return t}var o=function(e){switch(typeof e){case"string":return e;case"boolean":return e?"true":"false";case"number":return isFinite(e)?e:"";default:return""}};r.exports=function(e,r,t,s){return r=r||"&",t=t||"=",null===e&&(e=void 0),"object"==typeof e?n(a(e),function(a){var s=encodeURIComponent(o(a))+t;return i(e[a])?n(e[a],function(e){return s+encodeURIComponent(o(e))}).join(r):s+encodeURIComponent(o(e[a]))}).join(r):s?encodeURIComponent(o(s))+t+encodeURIComponent(o(e)):""};var i=Array.isArray||function(e){return"[object Array]"===Object.prototype.toString.call(e)},a=Object.keys||function(e){var r=[];for(var t in e)Object.prototype.hasOwnProperty.call(e,t)&&r.push(t);return r}},{}],7:[function(e,r,t){"use strict";t.decode=t.parse=e("./decode"),t.encode=t.stringify=e("./encode")},{"./decode":5,"./encode":6}],8:[function(e,r,t){"use strict";r.exports=function(e){var r=/^\\\\\?\\/.test(e),t=/[^\x00-\x80]+/.test(e);return r||t?e:e.replace(/\\/g,"/")}},{}],9:[function(r,t,n){!function(r,o){"object"==typeof n&&void 0!==t?o(n):"function"==typeof e&&e.amd?e(["exports"],o):o(r.URI=r.URI||{})}(this,function(e){"use strict";function r(){for(var e=arguments.length,r=Array(e),t=0;t<e;t++)r[t]=arguments[t];if(r.length>1){r[0]=r[0].slice(0,-1);for(var n=r.length-1,o=1;o<n;++o)r[o]=r[o].slice(1,-1);return r[n]=r[n].slice(1),r.join("")}return r[0]}function t(e){return"(?:"+e+")"}function n(e){return void 0===e?"undefined":null===e?"null":Object.prototype.toString.call(e).split(" ").pop().split("]").shift().toLowerCase()}function o(e){return e.toUpperCase()}function i(e){return void 0!==e&&null!==e?e instanceof Array?e:"number"!=typeof e.length||e.split||e.setInterval||e.call?[e]:Array.prototype.slice.call(e):[]}function a(e){var n=r("[0-9]","[A-Fa-f]"),o=t(t("%[EFef]"+n+"%"+n+n+"%"+n+n)+"|"+t("%[89A-Fa-f]"+n+"%"+n+n)+"|"+t("%"+n+n)),i="[\\!\\$\\&\\'\\(\\)\\*\\+\\,\\;\\=]",a=r("[\\:\\/\\?\\#\\[\\]\\@]",i),s=e?"[\\xA0-\\u200D\\u2010-\\u2029\\u202F-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFEF]":"[]",c=e?"[\\uE000-\\uF8FF]":"[]",u=r("[A-Za-z]","[0-9]","[\\-\\.\\_\\~]",s),f=t("[A-Za-z]"+r("[A-Za-z]","[0-9]","[\\+\\-\\.]")+"*"),l=t(t(o+"|"+r(u,i,"[\\:]"))+"*"),p=t(t("25[0-5]")+"|"+t("2[0-4][0-9]")+"|"+t("1[0-9][0-9]")+"|"+t("[1-9][0-9]")+"|[0-9]"),h=t(p+"\\."+p+"\\."+p+"\\."+p),d=t(n+"{1,4}"),v=t(t(d+"\\:"+d)+"|"+h),g=t(t(d+"\\:")+"{6}"+v),y=t("\\:\\:"+t(d+"\\:")+"{5}"+v),m=t(t(d)+"?\\:\\:"+t(d+"\\:")+"{4}"+v),b=t(t(t(d+"\\:")+"{0,1}"+d)+"?\\:\\:"+t(d+"\\:")+"{3}"+v),w=t(t(t(d+"\\:")+"{0,2}"+d)+"?\\:\\:"+t(d+"\\:")+"{2}"+v),E=t(t(t(d+"\\:")+"{0,3}"+d)+"?\\:\\:"+d+"\\:"+v),O=t(t(t(d+"\\:")+"{0,4}"+d)+"?\\:\\:"+v),C=t(t(t(d+"\\:")+"{0,5}"+d)+"?\\:\\:"+d),P=t(t(t(d+"\\:")+"{0,6}"+d)+"?\\:\\:"),x=t([g,y,m,b,w,E,O,C,P].join("|")),S=t("[vV]"+n+"+\\."+r(u,i,"[\\:]")+"+"),D=t("\\["+t(x+"|"+S)+"\\]"),A=t(t(o+"|"+r(u,i))+"*"),T=t(D+"|"+h+"(?!"+A+")|"+A),U=t("[0-9]*"),j=t(t(l+"@")+"?"+T+t("\\:"+U)+"?"),N=t(o+"|"+r(u,i,"[\\:\\@]")),I=t(N+"*"),R=t(N+"+"),_=t(t(o+"|"+r(u,i,"[\\@]"))+"+"),F=t(t("\\/"+I)+"*"),q=t("\\/"+t(R+F)+"?"),z=t(_+F),H=t(R+F),L="(?!"+N+")",$=(t(F+"|"+q+"|"+z+"|"+H+"|"+L),t(t(N+"|"+r("[\\/\\?]",c))+"*")),k=t(t(N+"|[\\/\\?]")+"*"),J=t(t("\\/\\/"+j+F)+"|"+q+"|"+H+"|"+L),M=t(f+"\\:"+J+t("\\?"+$)+"?"+t("\\#"+k)+"?"),Z=t(t("\\/\\/"+j+F)+"|"+q+"|"+z+"|"+L),V=t(Z+t("\\?"+$)+"?"+t("\\#"+k)+"?");t(M+"|"+V),t(f+"\\:"+J+t("\\?"+$)+"?"),t(t("\\/\\/("+t("("+l+")@")+"?("+T+")"+t("\\:("+U+")")+"?)")+"?("+F+"|"+q+"|"+H+"|"+L+")"),t("\\?("+$+")"),t("\\#("+k+")"),t(t("\\/\\/("+t("("+l+")@")+"?("+T+")"+t("\\:("+U+")")+"?)")+"?("+F+"|"+q+"|"+z+"|"+L+")"),t("\\?("+$+")"),t("\\#("+k+")"),t(t("\\/\\/("+t("("+l+")@")+"?("+T+")"+t("\\:("+U+")")+"?)")+"?("+F+"|"+q+"|"+H+"|"+L+")"),t("\\?("+$+")"),t("\\#("+k+")"),t("("+l+")@"),t("\\:("+U+")");return{NOT_SCHEME:new RegExp(r("[^]","[A-Za-z]","[0-9]","[\\+\\-\\.]"),"g"),NOT_USERINFO:new RegExp(r("[^\\%\\:]",u,i),"g"),NOT_HOST:new RegExp(r("[^\\%\\[\\]\\:]",u,i),"g"),NOT_PATH:new RegExp(r("[^\\%\\/\\:\\@]",u,i),"g"),NOT_PATH_NOSCHEME:new RegExp(r("[^\\%\\/\\@]",u,i),"g"),NOT_QUERY:new RegExp(r("[^\\%]",u,i,"[\\:\\@\\/\\?]",c),"g"),NOT_FRAGMENT:new RegExp(r("[^\\%]",u,i,"[\\:\\@\\/\\?]"),"g"),ESCAPE:new RegExp(r("[^]",u,i),"g"),UNRESERVED:new RegExp(u,"g"),OTHER_CHARS:new RegExp(r("[^\\%]",u,a),"g"),PCT_ENCODED:new RegExp(o,"g"),IPV6ADDRESS:new RegExp("\\[?("+x+")\\]?","g")}}function s(e){throw new RangeError(N[e])}function c(e,r){for(var t=[],n=e.length;n--;)t[n]=r(e[n]);return t}function u(e,r){var t=e.split("@"),n="";return t.length>1&&(n=t[0]+"@",e=t[1]),e=e.replace(j,"."),n+c(e.split("."),r).join(".")}function f(e){for(var r=[],t=0,n=e.length;t<n;){var o=e.charCodeAt(t++);if(o>=55296&&o<=56319&&t<n){var i=e.charCodeAt(t++);56320==(64512&i)?r.push(((1023&o)<<10)+(1023&i)+65536):(r.push(o),t--)}else r.push(o)}return r}function l(e){var r=e.charCodeAt(0);return r<16?"%0"+r.toString(16).toUpperCase():r<128?"%"+r.toString(16).toUpperCase():r<2048?"%"+(r>>6|192).toString(16).toUpperCase()+"%"+(63&r|128).toString(16).toUpperCase():"%"+(r>>12|224).toString(16).toUpperCase()+"%"+(r>>6&63|128).toString(16).toUpperCase()+"%"+(63&r|128).toString(16).toUpperCase()}function p(e){for(var r="",t=0,n=e.length;t<n;){var o=parseInt(e.substr(t+1,2),16);if(o<128)r+=String.fromCharCode(o),t+=3;else if(o>=194&&o<224){if(n-t>=6){var i=parseInt(e.substr(t+4,2),16);r+=String.fromCharCode((31&o)<<6|63&i)}else r+=e.substr(t,6);t+=6}else if(o>=224){if(n-t>=9){var a=parseInt(e.substr(t+4,2),16),s=parseInt(e.substr(t+7,2),16);r+=String.fromCharCode((15&o)<<12|(63&a)<<6|63&s)}else r+=e.substr(t,9);t+=9}else r+=e.substr(t,3),t+=3}return r}function h(e,r){function t(e){var t=p(e);return t.match(r.UNRESERVED)?t:e}return e.scheme&&(e.scheme=String(e.scheme).replace(r.PCT_ENCODED,t).toLowerCase().replace(r.NOT_SCHEME,"")),void 0!==e.userinfo&&(e.userinfo=String(e.userinfo).replace(r.PCT_ENCODED,t).replace(r.NOT_USERINFO,l).replace(r.PCT_ENCODED,o)),void 0!==e.host&&(e.host=String(e.host).replace(r.PCT_ENCODED,t).toLowerCase().replace(r.NOT_HOST,l).replace(r.PCT_ENCODED,o)),void 0!==e.path&&(e.path=String(e.path).replace(r.PCT_ENCODED,t).replace(e.scheme?r.NOT_PATH:r.NOT_PATH_NOSCHEME,l).replace(r.PCT_ENCODED,o)),void 0!==e.query&&(e.query=String(e.query).replace(r.PCT_ENCODED,t).replace(r.NOT_QUERY,l).replace(r.PCT_ENCODED,o)),void 0!==e.fragment&&(e.fragment=String(e.fragment).replace(r.PCT_ENCODED,t).replace(r.NOT_FRAGMENT,l).replace(r.PCT_ENCODED,o)),e}function d(e){var r=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},t={},n=!1!==r.iri?S:x;"suffix"===r.reference&&(e=(r.scheme?r.scheme+":":"")+"//"+e);var o=e.match(Z);if(o){V?(t.scheme=o[1],t.userinfo=o[3],t.host=o[4],t.port=parseInt(o[5],10),t.path=o[6]||"",t.query=o[7],t.fragment=o[8],isNaN(t.port)&&(t.port=o[5])):(t.scheme=o[1]||void 0,t.userinfo=-1!==e.indexOf("@")?o[3]:void 0,t.host=-1!==e.indexOf("//")?o[4]:void 0,t.port=parseInt(o[5],10),t.path=o[6]||"",t.query=-1!==e.indexOf("?")?o[7]:void 0,t.fragment=-1!==e.indexOf("#")?o[8]:void 0,isNaN(t.port)&&(t.port=e.match(/\/\/(?:.|\n)*\:(?:\/|\?|\#|$)/)?o[4]:void 0)),t.host&&(t.host=t.host.replace(n.IPV6ADDRESS,"$1")),void 0!==t.scheme||void 0!==t.userinfo||void 0!==t.host||void 0!==t.port||t.path||void 0!==t.query?void 0===t.scheme?t.reference="relative":void 0===t.fragment?t.reference="absolute":t.reference="uri":t.reference="same-document",r.reference&&"suffix"!==r.reference&&r.reference!==t.reference&&(t.error=t.error||"URI is not a "+r.reference+" reference.");var i=M[(r.scheme||t.scheme||"").toLowerCase()];if(r.unicodeSupport||i&&i.unicodeSupport)h(t,n);else{if(t.host&&(r.domainHost||i&&i.domainHost))try{t.host=J.toASCII(t.host.replace(n.PCT_ENCODED,p).toLowerCase())}catch(e){t.error=t.error||"Host's domain name can not be converted to ASCII via punycode: "+e}h(t,x)}i&&i.parse&&i.parse(t,r)}else t.error=t.error||"URI can not be parsed.";return t}function v(e,r){var t=!1!==r.iri?S:x,n=[];return void 0!==e.userinfo&&(n.push(e.userinfo),n.push("@")),void 0!==e.host&&n.push(String(e.host).replace(t.IPV6ADDRESS,"[$1]")),"number"==typeof e.port&&(n.push(":"),n.push(e.port.toString(10))),n.length?n.join(""):void 0}function g(e){for(var r=[];e.length;)if(e.match(B))e=e.replace(B,"");else if(e.match(G))e=e.replace(G,"/");else if(e.match(K))e=e.replace(K,"/"),r.pop();else if("."===e||".."===e)e="";else{var t=e.match(Q);if(!t)throw new Error("Unexpected dot segment condition");var n=t[0];e=e.slice(n.length),r.push(n)}return r.join("")}function y(e){var r=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},t=r.iri?S:x,n=[],o=M[(r.scheme||e.scheme||"").toLowerCase()];if(o&&o.serialize&&o.serialize(e,r),e.host)if(t.IPV6ADDRESS.test(e.host));else if(r.domainHost||o&&o.domainHost)try{e.host=r.iri?J.toUnicode(e.host):J.toASCII(e.host.replace(t.PCT_ENCODED,p).toLowerCase())}catch(t){e.error=e.error||"Host's domain name can not be converted to "+(r.iri?"Unicode":"ASCII")+" via punycode: "+t}h(e,t),"suffix"!==r.reference&&e.scheme&&(n.push(e.scheme),n.push(":"));var i=v(e,r);if(void 0!==i&&("suffix"!==r.reference&&n.push("//"),n.push(i),e.path&&"/"!==e.path.charAt(0)&&n.push("/")),void 0!==e.path){var a=e.path;r.absolutePath||o&&o.absolutePath||(a=g(a)),void 0===i&&(a=a.replace(/^\/\//,"/%2F")),n.push(a)}return void 0!==e.query&&(n.push("?"),n.push(e.query)),void 0!==e.fragment&&(n.push("#"),n.push(e.fragment)),n.join("")}function m(e,r){var t=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{},n=arguments[3],o={};return n||(e=d(y(e,t),t),r=d(y(r,t),t)),t=t||{},!t.tolerant&&r.scheme?(o.scheme=r.scheme,o.userinfo=r.userinfo,o.host=r.host,o.port=r.port,o.path=g(r.path||""),o.query=r.query):(void 0!==r.userinfo||void 0!==r.host||void 0!==r.port?(o.userinfo=r.userinfo,o.host=r.host,o.port=r.port,o.path=g(r.path||""),o.query=r.query):(r.path?("/"===r.path.charAt(0)?o.path=g(r.path):(void 0===e.userinfo&&void 0===e.host&&void 0===e.port||e.path?e.path?o.path=e.path.slice(0,e.path.lastIndexOf("/")+1)+r.path:o.path=r.path:o.path="/"+r.path,o.path=g(o.path)),o.query=r.query):(o.path=e.path,void 0!==r.query?o.query=r.query:o.query=e.query),o.userinfo=e.userinfo,o.host=e.host,o.port=e.port),o.scheme=e.scheme),o.fragment=r.fragment,o}function b(e,r,t){return y(m(d(e,t),d(r,t),t,!0),t)}function w(e,r){return"string"==typeof e?e=y(d(e,r),r):"object"===n(e)&&(e=d(y(e,r),r)),e}function E(e,r,t){return"string"==typeof e?e=y(d(e,t),t):"object"===n(e)&&(e=y(e,t)),"string"==typeof r?r=y(d(r,t),t):"object"===n(r)&&(r=y(r,t)),e===r}function O(e,r){return e&&e.toString().replace(r&&r.iri?S.ESCAPE:x.ESCAPE,l)}function C(e,r){return e&&e.toString().replace(r&&r.iri?S.PCT_ENCODED:x.PCT_ENCODED,p)}function P(e){var r=p(e);return r.match(oe)?r:e}var x=a(!1),S=a(!0),D=function(e){if(Array.isArray(e)){for(var r=0,t=Array(e.length);r<e.length;r++)t[r]=e[r];return t}return Array.from(e)},A=2147483647,T=/^xn--/,U=/[^\0-\x7E]/,j=/[\x2E\u3002\uFF0E\uFF61]/g,N={overflow:"Overflow: input needs wider integers to process","not-basic":"Illegal input >= 0x80 (not a basic code point)","invalid-input":"Invalid input"},I=Math.floor,R=String.fromCharCode,_=function(e){return String.fromCodePoint.apply(String,D(e))},F=function(e){return e-48<10?e-22:e-65<26?e-65:e-97<26?e-97:36},q=function(e,r){return e+22+75*(e<26)-((0!=r)<<5)},z=function(e,r,t){var n=0;for(e=t?I(e/700):e>>1,e+=I(e/r);e>455;n+=36)e=I(e/35);return I(n+36*e/(e+38))},H=function(e){var r=[],t=e.length,n=0,o=128,i=72,a=e.lastIndexOf("-");a<0&&(a=0);for(var c=0;c<a;++c)e.charCodeAt(c)>=128&&s("not-basic"),r.push(e.charCodeAt(c));for(var u=a>0?a+1:0;u<t;){for(var f=n,l=1,p=36;;p+=36){u>=t&&s("invalid-input");var h=F(e.charCodeAt(u++));(h>=36||h>I((A-n)/l))&&s("overflow"),n+=h*l;var d=p<=i?1:p>=i+26?26:p-i;if(h<d)break;var v=36-d;l>I(A/v)&&s("overflow"),l*=v}var g=r.length+1;i=z(n-f,g,0==f),I(n/g)>A-o&&s("overflow"),o+=I(n/g),n%=g,r.splice(n++,0,o)}return String.fromCodePoint.apply(String,r)},L=function(e){var r=[];e=f(e);var t=e.length,n=128,o=0,i=72,a=!0,c=!1,u=void 0;try{for(var l,p=e[Symbol.iterator]();!(a=(l=p.next()).done);a=!0){var h=l.value;h<128&&r.push(R(h))}}catch(e){c=!0,u=e}finally{try{!a&&p.return&&p.return()
}finally{if(c)throw u}}var d=r.length,v=d;for(d&&r.push("-");v<t;){var g=A,y=!0,m=!1,b=void 0;try{for(var w,E=e[Symbol.iterator]();!(y=(w=E.next()).done);y=!0){var O=w.value;O>=n&&O<g&&(g=O)}}catch(e){m=!0,b=e}finally{try{!y&&E.return&&E.return()}finally{if(m)throw b}}var C=v+1;g-n>I((A-o)/C)&&s("overflow"),o+=(g-n)*C,n=g;var P=!0,x=!1,S=void 0;try{for(var D,T=e[Symbol.iterator]();!(P=(D=T.next()).done);P=!0){var U=D.value;if(U<n&&++o>A&&s("overflow"),U==n){for(var j=o,N=36;;N+=36){var _=N<=i?1:N>=i+26?26:N-i;if(j<_)break;var F=j-_,H=36-_;r.push(R(q(_+F%H,0))),j=I(F/H)}r.push(R(q(j,0))),i=z(o,C,v==d),o=0,++v}}}catch(e){x=!0,S=e}finally{try{!P&&T.return&&T.return()}finally{if(x)throw S}}++o,++n}return r.join("")},$=function(e){return u(e,function(e){return T.test(e)?H(e.slice(4).toLowerCase()):e})},k=function(e){return u(e,function(e){return U.test(e)?"xn--"+L(e):e})},J={version:"2.1.0",ucs2:{decode:f,encode:_},decode:H,encode:L,toASCII:k,toUnicode:$},M={},Z=/^(?:([^:\/?#]+):)?(?:\/\/((?:([^\/?#@]*)@)?(\[[\dA-F:.]+\]|[^\/?#:]*)(?:\:(\d*))?))?([^?#]*)(?:\?([^#]*))?(?:#((?:.|\n|\r)*))?/i,V=void 0==="".match(/(){0}/)[1],B=/^\.\.?\//,G=/^\/\.(\/|$)/,K=/^\/\.\.(\/|$)/,Q=/^\/?(?:.|\n)*?(?=\/|$)/,Y={scheme:"http",domainHost:!0,parse:function(e,r){return e.host||(e.error=e.error||"HTTP URIs must have a host."),e},serialize:function(e,r){return e.port!==("https"!==String(e.scheme).toLowerCase()?80:443)&&""!==e.port||(e.port=void 0),e.path||(e.path="/"),e}},W={scheme:"https",domainHost:Y.domainHost,parse:Y.parse,serialize:Y.serialize},X={},ee="[A-Za-z0-9\\-\\.\\_\\~\\xA0-\\u200D\\u2010-\\u2029\\u202F-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFEF]",re="[0-9A-Fa-f]",te=t(t("%[EFef][0-9A-Fa-f]%"+re+re+"%"+re+re)+"|"+t("%[89A-Fa-f][0-9A-Fa-f]%"+re+re)+"|"+t("%"+re+re)),ne=r("[\\!\\$\\%\\'\\(\\)\\*\\+\\,\\-\\.0-9\\<\\>A-Z\\x5E-\\x7E]",'[\\"\\\\]'),oe=new RegExp(ee,"g"),ie=new RegExp(te,"g"),ae=new RegExp(r("[^]","[A-Za-z0-9\\!\\$\\%\\'\\*\\+\\-\\^\\_\\`\\{\\|\\}\\~]","[\\.]",'[\\"]',ne),"g"),se=new RegExp(r("[^]",ee,"[\\!\\$\\'\\(\\)\\*\\+\\,\\;\\:\\@]"),"g"),ce=se,ue={scheme:"mailto",parse:function(e,r){var t=e.to=e.path?e.path.split(","):[];if(e.path=void 0,e.query){for(var n=!1,o={},i=e.query.split("&"),a=0,s=i.length;a<s;++a){var c=i[a].split("=");switch(c[0]){case"to":for(var u=c[1].split(","),f=0,l=u.length;f<l;++f)t.push(u[f]);break;case"subject":e.subject=C(c[1],r);break;case"body":e.body=C(c[1],r);break;default:n=!0,o[C(c[0],r)]=C(c[1],r)}}n&&(e.headers=o)}e.query=void 0;for(var p=0,h=t.length;p<h;++p){var d=t[p].split("@");if(d[0]=C(d[0]),r.unicodeSupport)d[1]=C(d[1],r).toLowerCase();else try{d[1]=J.toASCII(C(d[1],r).toLowerCase())}catch(r){e.error=e.error||"Email address's domain name can not be converted to ASCII via punycode: "+r}t[p]=d.join("@")}return e},serialize:function(e,r){var t=i(e.to);if(t){for(var n=0,a=t.length;n<a;++n){var s=String(t[n]),c=s.lastIndexOf("@"),u=s.slice(0,c).replace(ie,P).replace(ie,o).replace(ae,l),f=s.slice(c+1);try{f=r.iri?J.toUnicode(f):J.toASCII(C(f,r).toLowerCase())}catch(t){e.error=e.error||"Email address's domain name can not be converted to "+(r.iri?"Unicode":"ASCII")+" via punycode: "+t}t[n]=u+"@"+f}e.path=t.join(",")}var p=e.headers=e.headers||{};e.subject&&(p.subject=e.subject),e.body&&(p.body=e.body);var h=[];for(var d in p)p[d]!==X[d]&&h.push(d.replace(ie,P).replace(ie,o).replace(se,l)+"="+p[d].replace(ie,P).replace(ie,o).replace(ce,l));return h.length&&(e.query=h.join("&")),e}},fe=new RegExp("^urn\\:((?:[0-9A-Za-z][0-9A-Za-z\\-]{1,31}))$"),le={scheme:"urn",parse:function(e,r){var t=e.path&&e.path.match(/^([^\:]+)\:(.*)/);if(t){var n="urn:"+t[1].toLowerCase(),o=M[n];o||(o=M[n]={scheme:n,parse:function(e,r){return e},serialize:M.urn.serialize}),e.scheme=n,e.path=t[2],e=o.parse(e,r)}else e.error=e.error||"URN can not be parsed.";return e},serialize:function(e,r){var t=e.scheme||r.scheme;if(t&&"urn"!==t){var n=t.match(fe)||["urn:"+t,t];e.scheme="urn",e.path=n[1]+":"+(e.path?e.path.replace(/[\x00-\x20\\\"\&\<\>\[\]\^\`\{\|\}\~\x7F-\xFF]/g,l):"")}return e}},pe=/^[0-9A-Fa-f]{8}(?:\-[0-9A-Fa-f]{4}){3}\-[0-9A-Fa-f]{12}$/,he={scheme:"urn:uuid",parse:function(e,r){return r.tolerant||e.path&&e.path.match(pe)||(e.error=e.error||"UUID is not valid."),e},serialize:function(e,r){return r.tolerant||e.path&&e.path.match(pe)?e.path=(e.path||"").toLowerCase():e.scheme=void 0,M.urn.serialize(e,r)}};M.http=Y,M.https=W,M.mailto=ue,M.urn=le,M["urn:uuid"]=he,e.SCHEMES=M,e.pctEncChar=l,e.pctDecChars=p,e.parse=d,e.removeDotSegments=g,e.serialize=y,e.resolveComponents=m,e.resolve=b,e.normalize=w,e.equal=E,e.escapeComponent=O,e.unescapeComponent=C,Object.defineProperty(e,"__esModule",{value:!0})})},{}]},{},[1])(1)});