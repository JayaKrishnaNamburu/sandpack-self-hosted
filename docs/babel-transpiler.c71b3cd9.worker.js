!function(e){this.webpackChunk=function(t,r){for(var s in r)e[s]=r[s];for(;t.length;)n[t.pop()]=1};var t={},n={main:1};function r(n){if(t[n])return t[n].exports;var s=t[n]={i:n,l:!1,exports:{}};return e[n].call(s.exports,s,s.exports,r),s.l=!0,s.exports}r.e=function(e){var t=[];return t.push(Promise.resolve().then((function(){n[e]||importScripts(r.p+""+e+".babel-transpiler.c71b3cd9.worker.js")}))),Promise.all(t)},r.m=e,r.c=t,r.d=function(e,t,n){r.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},r.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},r.t=function(e,t){if(1&t&&(e=r(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(r.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var s in e)r.d(n,s,function(t){return e[t]}.bind(null,s));return n},r.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return r.d(t,"a",t),t},r.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},r.p="/",r(r.s="../../node_modules/thread-loader/dist/cjs.js?!./node_modules/babel-loader/lib/index.js?!./src/sandbox/eval/transpilers/babel/worker/index.js")}({"../../node_modules/@babel/code-frame/lib/index.js":function(e,t,n){"use strict";(function(e){Object.defineProperty(t,"__esModule",{value:!0}),t.codeFrameColumns=a,t.default=function(t,n,r,s={}){if(!o){o=!0;const t="Passing lineNumber and colNumber is deprecated to @babel/code-frame. Please use `codeFrameColumns`.";if(e.emitWarning)e.emitWarning(t,"DeprecationWarning");else{new Error(t).name="DeprecationWarning",console.warn(new Error(t))}}return r=Math.max(r,0),a(t,{start:{column:r,line:n}},s)};var r=function(e){if(e&&e.__esModule)return e;if(null===e||"object"!==typeof e&&"function"!==typeof e)return{default:e};var t=s();if(t&&t.has(e))return t.get(e);var n={},r=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var o in e)if(Object.prototype.hasOwnProperty.call(e,o)){var i=r?Object.getOwnPropertyDescriptor(e,o):null;i&&(i.get||i.set)?Object.defineProperty(n,o,i):n[o]=e[o]}n.default=e,t&&t.set(e,n);return n}(n("../../node_modules/@babel/highlight/lib/index.js"));function s(){if("function"!==typeof WeakMap)return null;var e=new WeakMap;return s=function(){return e},e}let o=!1;const i=/\r\n|[\n\r\u2028\u2029]/;function a(e,t,n={}){const s=(n.highlightCode||n.forceColor)&&(0,r.shouldHighlight)(n),o=(0,r.getChalk)(n),a=function(e){return{gutter:e.grey,marker:e.red.bold,message:e.red.bold}}(o),l=(e,t)=>s?e(t):t,u=e.split(i),{start:c,end:d,markerLines:f}=function(e,t,n){const r=Object.assign({column:0,line:-1},e.start),s=Object.assign({},r,e.end),{linesAbove:o=2,linesBelow:i=3}=n||{},a=r.line,l=r.column,u=s.line,c=s.column;let d=Math.max(a-(o+1),0),f=Math.min(t.length,u+i);-1===a&&(d=0),-1===u&&(f=t.length);const p=u-a,h={};if(p)for(let m=0;m<=p;m++){const e=m+a;if(l)if(0===m){const n=t[e-1].length;h[e]=[l,n-l+1]}else if(m===p)h[e]=[0,c];else{const n=t[e-m].length;h[e]=[0,n]}else h[e]=!0}else h[a]=l===c?!l||[l,0]:[l,c-l];return{start:d,end:f,markerLines:h}}(t,u,n),p=t.start&&"number"===typeof t.start.column,h=String(d).length;let m=(s?(0,r.default)(e,n):e).split(i).slice(c,d).map((e,t)=>{const r=c+1+t,s=` ${(" "+r).slice(-h)} | `,o=f[r],i=!f[r+1];if(o){let t="";if(Array.isArray(o)){const r=e.slice(0,Math.max(o[0]-1,0)).replace(/[^\t]/g," "),u=o[1]||1;t=["\n ",l(a.gutter,s.replace(/\d/g," ")),r,l(a.marker,"^").repeat(u)].join(""),i&&n.message&&(t+=" "+l(a.message,n.message))}return[l(a.marker,">"),l(a.gutter,s),e,t].join("")}return` ${l(a.gutter,s)}${e}`}).join("\n");return n.message&&!p&&(m=`${" ".repeat(h+1)}${n.message}\n${m}`),s?o.reset(m):m}}).call(this,n("../../node_modules/process/browser.js"))},"../../node_modules/@babel/core/lib/config/caching.js":function(e,t,n){"use strict";function r(){const e=(t=n("../../node_modules/gensync/index.js"))&&t.__esModule?t:{default:t};var t;return r=function(){return e},e}Object.defineProperty(t,"__esModule",{value:!0}),t.makeWeakCache=l,t.makeWeakCacheSync=function(e){return i(l(e))},t.makeStrongCache=u,t.makeStrongCacheSync=function(e){return i(u(e))},t.assertSimpleType=h;var s=n("../../node_modules/@babel/core/lib/gensync-utils/async.js"),o=n("../../node_modules/@babel/core/lib/config/util.js");const i=e=>(0,r().default)(e).sync;function*a(e){return!0}function l(e){return c(WeakMap,e)}function u(e){return c(Map,e)}function c(e,t){const n=new e,r=new e,i=new e;return function*(e,a){const l=yield*(0,s.isAsync)(),u=l?r:n,c=yield*function*(e,t,n,r,o){const i=yield*d(t,r,o);if(i.valid)return i;if(e){const e=yield*d(n,r,o);if(e.valid){return{valid:!0,value:yield*(0,s.waitFor)(e.value.promise)}}}return{valid:!1,value:null}}(l,u,i,e,a);if(c.valid)return c.value;const h=new p(a),y=t(e,h);let b,g;if((0,o.isIterableIterator)(y)){const t=y;g=yield*(0,s.onFirstPause)(t,()=>{b=function(e,t,n){const r=new m;return f(t,e,n,r),r}(h,i,e)})}else g=y;return f(u,h,e,g),b&&(i.delete(e),b.release(g)),g}}function*d(e,t,n){const r=e.get(t);if(r)for(const{value:s,valid:o}of r)if(yield*o(n))return{valid:!0,value:s};return{valid:!1,value:null}}function f(e,t,n,r){t.configured()||t.forever();let s=e.get(n);switch(t.deactivate(),t.mode()){case"forever":s=[{value:r,valid:a}],e.set(n,s);break;case"invalidate":s=[{value:r,valid:t.validator()}],e.set(n,s);break;case"valid":s?s.push({value:r,valid:t.validator()}):(s=[{value:r,valid:t.validator()}],e.set(n,s))}}class p{constructor(e){this._active=!0,this._never=!1,this._forever=!1,this._invalidate=!1,this._configured=!1,this._pairs=[],this._data=e}simple(){return function(e){function t(t){if("boolean"!==typeof t)return e.using(()=>h(t()));t?e.forever():e.never()}return t.forever=()=>e.forever(),t.never=()=>e.never(),t.using=t=>e.using(()=>h(t())),t.invalidate=t=>e.invalidate(()=>h(t())),t}(this)}mode(){return this._never?"never":this._forever?"forever":this._invalidate?"invalidate":"valid"}forever(){if(!this._active)throw new Error("Cannot change caching after evaluation has completed.");if(this._never)throw new Error("Caching has already been configured with .never()");this._forever=!0,this._configured=!0}never(){if(!this._active)throw new Error("Cannot change caching after evaluation has completed.");if(this._forever)throw new Error("Caching has already been configured with .forever()");this._never=!0,this._configured=!0}using(e){if(!this._active)throw new Error("Cannot change caching after evaluation has completed.");if(this._never||this._forever)throw new Error("Caching has already been configured with .never or .forever()");this._configured=!0;const t=e(this._data),n=(0,s.maybeAsync)(e,"You appear to be using an async cache handler, but Babel has been called synchronously");return(0,s.isThenable)(t)?t.then(e=>(this._pairs.push([e,n]),e)):(this._pairs.push([t,n]),t)}invalidate(e){return this._invalidate=!0,this.using(e)}validator(){const e=this._pairs;return function*(t){for(const[n,r]of e)if(n!==(yield*r(t)))return!1;return!0}}deactivate(){this._active=!1}configured(){return this._configured}}function h(e){if((0,s.isThenable)(e))throw new Error("You appear to be using an async cache handler, which your current version of Babel does not support. We may add support for this in the future, but if you're on the most recent version of @babel/core and still seeing this error, then you'll need to synchronously handle your caching logic.");if(null!=e&&"string"!==typeof e&&"boolean"!==typeof e&&"number"!==typeof e)throw new Error("Cache keys must be either string, boolean, number, null, or undefined.");return e}class m{constructor(){this.released=!1,this.promise=new Promise(e=>{this._resolve=e})}release(e){this.released=!0,this._resolve(e)}}},"../../node_modules/@babel/core/lib/config/config-chain.js":function(e,t,n){"use strict";function r(){const e=c(n("../../node_modules/path-browserify/index.js"));return r=function(){return e},e}function s(){const e=c(n("../../node_modules/debug/src/browser.js"));return s=function(){return e},e}Object.defineProperty(t,"__esModule",{value:!0}),t.buildPresetChain=function*(e,t){const n=yield*f(e,t);return n?{plugins:D(n.plugins),presets:D(n.presets),options:n.options.map(e=>N(e))}:null},t.buildRootChain=function*(e,t){const n=yield*_({options:e,dirname:t.cwd},t);if(!n)return null;let s;"string"===typeof e.configFile?s=yield*(0,a.loadConfig)(e.configFile,t.cwd,t.envName,t.caller):!1!==e.configFile&&(s=yield*(0,a.findRootConfig)(t.root,t.envName,t.caller));let{babelrc:o,babelrcRoots:l}=e,u=t.cwd;const c={options:[],presets:[],plugins:[]};if(s){const e=b(s),n=yield*j(e,t);if(!n)return null;void 0===o&&(o=e.options.babelrc),void 0===l&&(u=e.dirname,l=e.options.babelrcRoots),M(c,n)}const d="string"===typeof t.filename?yield*(0,a.findPackageData)(t.filename):null;let f,p;const h={options:[],presets:[],plugins:[]};if((!0===o||void 0===o)&&d&&function(e,t,n,s){if("boolean"===typeof n)return n;const o=e.root;if(void 0===n)return-1!==t.directories.indexOf(o);let a=n;Array.isArray(a)||(a=[a]);if(a=a.map(e=>"string"===typeof e?r().default.resolve(s,e):e),1===a.length&&a[0]===o)return-1!==t.directories.indexOf(o);return a.some(n=>("string"===typeof n&&(n=(0,i.default)(n,s)),t.directories.some(t=>U(n,s,t,e))))}(t,d,l,u)){if(({ignore:f,config:p}=yield*(0,a.findRelativeConfig)(d,t.envName,t.caller)),f&&B(t,f.ignore,null,f.dirname))return null;if(p){const e=yield*j(g(p),t);if(!e)return null;M(h,e)}}const m=M(M(M({options:[],presets:[],plugins:[]},c),h),n);return{plugins:D(m.plugins),presets:D(m.presets),options:m.options.map(e=>N(e)),ignore:f||void 0,babelrc:p||void 0,config:s||void 0}},t.buildPresetChainWalker=void 0;var o=n("../../node_modules/@babel/core/lib/config/validation/options.js"),i=c(n("../../node_modules/@babel/core/lib/config/pattern-to-regex.js")),a=n("../../node_modules/@babel/core/lib/config/files/index-browser.js"),l=n("../../node_modules/@babel/core/lib/config/caching.js"),u=n("../../node_modules/@babel/core/lib/config/config-descriptors.js");function c(e){return e&&e.__esModule?e:{default:e}}const d=(0,s().default)("babel:config:config-chain");const f=O({init:e=>e,root:e=>p(e),env:(e,t)=>h(e)(t),overrides:(e,t)=>m(e)(t),overridesEnv:(e,t,n)=>y(e)(t)(n)});t.buildPresetChainWalker=f;const p=(0,l.makeWeakCacheSync)(e=>T(e,e.alias,u.createUncachedDescriptors)),h=(0,l.makeWeakCacheSync)(e=>(0,l.makeStrongCacheSync)(t=>P(e,e.alias,u.createUncachedDescriptors,t))),m=(0,l.makeWeakCacheSync)(e=>(0,l.makeStrongCacheSync)(t=>k(e,e.alias,u.createUncachedDescriptors,t))),y=(0,l.makeWeakCacheSync)(e=>(0,l.makeStrongCacheSync)(t=>(0,l.makeStrongCacheSync)(n=>A(e,e.alias,u.createUncachedDescriptors,t,n))));const b=(0,l.makeWeakCacheSync)(e=>({filepath:e.filepath,dirname:e.dirname,options:(0,o.validate)("configfile",e.options)})),g=(0,l.makeWeakCacheSync)(e=>({filepath:e.filepath,dirname:e.dirname,options:(0,o.validate)("babelrcfile",e.options)})),v=(0,l.makeWeakCacheSync)(e=>({filepath:e.filepath,dirname:e.dirname,options:(0,o.validate)("extendsfile",e.options)})),_=O({root:e=>T(e,"base",u.createCachedDescriptors),env:(e,t)=>P(e,"base",u.createCachedDescriptors,t),overrides:(e,t)=>k(e,"base",u.createCachedDescriptors,t),overridesEnv:(e,t,n)=>A(e,"base",u.createCachedDescriptors,t,n)}),j=O({root:e=>x(e),env:(e,t)=>w(e)(t),overrides:(e,t)=>S(e)(t),overridesEnv:(e,t,n)=>E(e)(t)(n)}),x=(0,l.makeWeakCacheSync)(e=>T(e,e.filepath,u.createUncachedDescriptors)),w=(0,l.makeWeakCacheSync)(e=>(0,l.makeStrongCacheSync)(t=>P(e,e.filepath,u.createUncachedDescriptors,t))),S=(0,l.makeWeakCacheSync)(e=>(0,l.makeStrongCacheSync)(t=>k(e,e.filepath,u.createUncachedDescriptors,t))),E=(0,l.makeWeakCacheSync)(e=>(0,l.makeStrongCacheSync)(t=>(0,l.makeStrongCacheSync)(n=>A(e,e.filepath,u.createUncachedDescriptors,t,n))));function T({dirname:e,options:t},n,r){return r(e,t,n)}function P({dirname:e,options:t},n,r,s){const o=t.env&&t.env[s];return o?r(e,o,`${n}.env["${s}"]`):null}function k({dirname:e,options:t},n,r,s){const o=t.overrides&&t.overrides[s];if(!o)throw new Error("Assertion failure - missing override");return r(e,o,`${n}.overrides[${s}]`)}function A({dirname:e,options:t},n,r,s,o){const i=t.overrides&&t.overrides[s];if(!i)throw new Error("Assertion failure - missing override");const a=i.env&&i.env[o];return a?r(e,a,`${n}.overrides[${s}].env["${o}"]`):null}function O({root:e,env:t,overrides:n,overridesEnv:r}){return function*(s,o,i=new Set){const{dirname:a}=s,l=[],u=e(s);if(L(u,a,o)){l.push(u);const e=t(s,o.envName);e&&L(e,a,o)&&l.push(e),(u.options.overrides||[]).forEach((e,t)=>{const i=n(s,t);if(L(i,a,o)){l.push(i);const e=r(s,t,o.envName);e&&L(e,a,o)&&l.push(e)}})}if(l.some(({options:{ignore:e,only:t}})=>B(o,e,t,a)))return null;const c={options:[],presets:[],plugins:[]};for(const e of l){if(!(yield*C(c,e.options,a,o,i)))return null;I(c,e)}return c}}function*C(e,t,n,r,s){if(void 0===t.extends)return!0;const o=yield*(0,a.loadConfig)(t.extends,n,r.envName,r.caller);if(s.has(o))throw new Error(`Configuration cycle detected loading ${o.filepath}.\nFile already loaded following the config chain:\n`+Array.from(s,e=>" - "+e.filepath).join("\n"));s.add(o);const i=yield*j(v(o),r,s);return s.delete(o),!!i&&(M(e,i),!0)}function M(e,t){return e.options.push(...t.options),e.plugins.push(...t.plugins),e.presets.push(...t.presets),e}function I(e,{options:t,plugins:n,presets:r}){return e.options.push(t),e.plugins.push(...n()),e.presets.push(...r()),e}function N(e){const t=Object.assign({},e);return delete t.extends,delete t.env,delete t.overrides,delete t.plugins,delete t.presets,delete t.passPerPreset,delete t.ignore,delete t.only,delete t.test,delete t.include,delete t.exclude,Object.prototype.hasOwnProperty.call(t,"sourceMap")&&(t.sourceMaps=t.sourceMap,delete t.sourceMap),t}function D(e){const t=new Map,n=[];for(const r of e)if("function"===typeof r.value){const e=r.value;let s=t.get(e);s||(s=new Map,t.set(e,s));let o=s.get(r.name);o?o.value=r:(o={value:r},n.push(o),r.ownPass||s.set(r.name,o))}else n.push({value:r});return n.reduce((e,t)=>(e.push(t.value),e),[])}function L({options:e},t,n){return(void 0===e.test||R(n,e.test,t))&&(void 0===e.include||R(n,e.include,t))&&(void 0===e.exclude||!R(n,e.exclude,t))}function R(e,t,n){return F(e,Array.isArray(t)?t:[t],n)}function B(e,t,n,r){return t&&F(e,t,r)?(d("Ignored %o because it matched one of %O from %o",e.filename,t,r),!0):!(!n||F(e,n,r))&&(d("Ignored %o because it failed to match one of %O from %o",e.filename,n,r),!0)}function F(e,t,n){return t.some(t=>U(t,n,e.filename,e))}function U(e,t,n,r){if("function"===typeof e)return!!e(n,{dirname:t,envName:r.envName,caller:r.caller});if("string"!==typeof n)throw new Error("Configuration contains string/RegExp pattern, but no filename was passed to Babel");return"string"===typeof e&&(e=(0,i.default)(e,t)),e.test(n)}},"../../node_modules/@babel/core/lib/config/config-descriptors.js":function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.createCachedDescriptors=function(e,t,n){const{plugins:r,presets:s,passPerPreset:o}=t;return{options:t,plugins:r?()=>u(r,e)(n):()=>[],presets:s?()=>a(s,e)(n)(!!o):()=>[]}},t.createUncachedDescriptors=function(e,t,n){let r,s;return{options:t,plugins:()=>(r||(r=p(t.plugins||[],e,n)),r),presets:()=>(s||(s=f(t.presets||[],e,n,!!t.passPerPreset)),s)}},t.createDescriptor=m;var r=n("../../node_modules/@babel/core/lib/config/files/index-browser.js"),s=n("../../node_modules/@babel/core/lib/config/item.js"),o=n("../../node_modules/@babel/core/lib/config/caching.js");const i=new WeakMap,a=(0,o.makeWeakCacheSync)((e,t)=>{const n=t.using(e=>e);return(0,o.makeStrongCacheSync)(t=>(0,o.makeStrongCacheSync)(r=>f(e,n,t,r).map(e=>d(i,e))))}),l=new WeakMap,u=(0,o.makeWeakCacheSync)((e,t)=>{const n=t.using(e=>e);return(0,o.makeStrongCacheSync)(t=>p(e,n,t).map(e=>d(l,e)))}),c={};function d(e,t){const{value:n,options:r=c}=t;if(!1===r)return t;let s=e.get(n);s||(s=new WeakMap,e.set(n,s));let o=s.get(r);if(o||(o=[],s.set(r,o)),-1===o.indexOf(t)){const e=o.filter(e=>{return r=t,(n=e).name===r.name&&n.value===r.value&&n.options===r.options&&n.dirname===r.dirname&&n.alias===r.alias&&n.ownPass===r.ownPass&&(n.file&&n.file.request)===(r.file&&r.file.request)&&(n.file&&n.file.resolved)===(r.file&&r.file.resolved);var n,r});if(e.length>0)return e[0];o.push(t)}return t}function f(e,t,n,r){return h("preset",e,t,n,r)}function p(e,t,n){return h("plugin",e,t,n)}function h(e,t,n,r,s){const o=t.map((t,o)=>m(t,n,{type:e,alias:`${r}$${o}`,ownPass:!!s}));return function(e){const t=new Map;for(const n of e){if("function"!==typeof n.value)continue;let r=t.get(n.value);if(r||(r=new Set,t.set(n.value,r)),r.has(n.name)){const t=e.filter(e=>e.value===n.value);throw new Error(["Duplicate plugin/preset detected.","If you'd like to use two separate instances of a plugin,","they need separate names, e.g.","","  plugins: [","    ['some-plugin', {}],","    ['some-plugin', {}, 'some unique name'],","  ]","","Duplicates detected are:",""+JSON.stringify(t,null,2)].join("\n"))}r.add(n.name)}}(o),o}function m(e,t,{type:n,alias:o,ownPass:i}){const a=(0,s.getItemDescriptor)(e);if(a)return a;let l,u,c=e;Array.isArray(c)&&(3===c.length?[c,u,l]=c:[c,u]=c);let d=void 0,f=null;if("string"===typeof c){if("string"!==typeof n)throw new Error("To resolve a string-based item, the type of item must be given");const e="plugin"===n?r.loadPlugin:r.loadPreset,s=c;({filepath:f,value:c}=e(c,t)),d={request:s,resolved:f}}if(!c)throw new Error("Unexpected falsy value: "+String(c));if("object"===typeof c&&c.__esModule){if(!c.default)throw new Error("Must export a default export when using ES6 modules.");c=c.default}if("object"!==typeof c&&"function"!==typeof c)throw new Error(`Unsupported format: ${typeof c}. Expected an object or a function.`);if(null!==f&&"object"===typeof c&&c)throw new Error("Plugin/Preset files are not allowed to export objects, only functions. In "+f);return{name:l,alias:f||o,value:c,options:u,dirname:t,ownPass:i,file:d}}},"../../node_modules/@babel/core/lib/config/files/index-browser.js":function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.findConfigUpwards=function*(e){return null},t.findPackageData=function*(e){return{filepath:e,directories:[],pkg:null,isPackage:!1}},t.findRelativeConfig=function*(e,t,n){return{pkg:null,config:null,ignore:null}},t.findRootConfig=function*(e,t,n){return null},t.loadConfig=function*(e,t,n,r){throw new Error(`Cannot load ${e} relative to ${t} in a browser`)},t.resolvePlugin=function(e,t){return null},t.resolvePreset=function(e,t){return null},t.loadPlugin=function(e,t){throw new Error(`Cannot load plugin ${e} relative to ${t} in a browser`)},t.loadPreset=function(e,t){throw new Error(`Cannot load preset ${e} relative to ${t} in a browser`)},t.ROOT_CONFIG_FILENAMES=void 0;t.ROOT_CONFIG_FILENAMES=[]},"../../node_modules/@babel/core/lib/config/full.js":function(e,t,n){"use strict";function r(){const e=b(n("../../node_modules/gensync/index.js"));return r=function(){return e},e}Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var s=n("../../node_modules/@babel/core/lib/gensync-utils/async.js"),o=n("../../node_modules/@babel/core/lib/config/util.js"),i=function(e){if(e&&e.__esModule)return e;if(null===e||"object"!==typeof e&&"function"!==typeof e)return{default:e};var t=y();if(t&&t.has(e))return t.get(e);var n={},r=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var s in e)if(Object.prototype.hasOwnProperty.call(e,s)){var o=r?Object.getOwnPropertyDescriptor(e,s):null;o&&(o.get||o.set)?Object.defineProperty(n,s,o):n[s]=e[s]}n.default=e,t&&t.set(e,n);return n}(n("../../node_modules/@babel/core/lib/index.js")),a=b(n("../../node_modules/@babel/core/lib/config/plugin.js")),l=n("../../node_modules/@babel/core/lib/config/item.js"),u=n("../../node_modules/@babel/core/lib/config/config-chain.js");function c(){const e=b(n("../../node_modules/@babel/traverse/lib/index.js"));return c=function(){return e},e}var d=n("../../node_modules/@babel/core/lib/config/caching.js"),f=n("../../node_modules/@babel/core/lib/config/validation/options.js"),p=n("../../node_modules/@babel/core/lib/config/validation/plugins.js"),h=b(n("../../node_modules/@babel/core/lib/config/helpers/config-api.js")),m=b(n("../../node_modules/@babel/core/lib/config/partial.js"));function y(){if("function"!==typeof WeakMap)return null;var e=new WeakMap;return y=function(){return e},e}function b(e){return e&&e.__esModule?e:{default:e}}var g=(0,r().default)((function*(e){const t=yield*(0,m.default)(e);if(!t)return null;const{options:n,context:r}=t,s={},i=[[]];try{const{plugins:e,presets:t}=n;if(!e||!t)throw new Error("Assertion failure - plugins and presets exist");if(yield*function*e(t,n){const a=[];for(let s=0;s<t.plugins.length;s++){const e=t.plugins[s];if(!1!==e.options)try{a.push(yield*_(e,r))}catch(u){throw s>0&&"BABEL_UNKNOWN_PLUGIN_PROPERTY"===u.code&&(0,f.checkNoUnwrappedItemOptionPairs)(t.plugins[s-1],e,"plugin",s,u),u}}const l=[];for(let s=0;s<t.presets.length;s++){const e=t.presets[s];if(!1!==e.options)try{l.push({preset:yield*w(e,r),pass:e.ownPass?[]:n})}catch(u){throw s>0&&"BABEL_UNKNOWN_OPTION"===u.code&&(0,f.checkNoUnwrappedItemOptionPairs)(t.presets[s-1],e,"preset",s,u),u}}if(l.length>0){i.splice(1,0,...l.map(e=>e.pass).filter(e=>e!==n));for(const{preset:t,pass:n}of l){if(!t)return!0;if(yield*e({plugins:t.plugins,presets:t.presets},n))return!0;t.options.forEach(e=>{(0,o.mergeOptions)(s,e)})}}a.length>0&&n.unshift(...a)}({plugins:e.map(e=>{const t=(0,l.getItemDescriptor)(e);if(!t)throw new Error("Assertion failure - must be config item");return t}),presets:t.map(e=>{const t=(0,l.getItemDescriptor)(e);if(!t)throw new Error("Assertion failure - must be config item");return t})},i[0]))return null}catch(u){throw/^\[BABEL\]/.test(u.message)||(u.message=`[BABEL] ${r.filename||"unknown"}: ${u.message}`),u}const a=s;return(0,o.mergeOptions)(a,n),a.plugins=i[0],a.presets=i.slice(1).filter(e=>e.length>0).map(e=>({plugins:e})),a.passPerPreset=a.presets.length>0,{options:a,passes:i}}));t.default=g;const v=(0,d.makeWeakCache)((function*({value:e,options:t,dirname:n,alias:r},s){if(!1===t)throw new Error("Assertion failure");t=t||{};let o=e;if("function"===typeof e){const l=Object.assign({},i,{},(0,h.default)(s));try{o=e(l,t,n)}catch(a){throw r&&(a.message+=` (While processing: ${JSON.stringify(r)})`),a}}if(!o||"object"!==typeof o)throw new Error("Plugin/Preset did not return an object.");if("function"===typeof o.then)throw yield*[],new Error("You appear to be using an async plugin, which your current version of Babel does not support. If you're using a published plugin, you may need to upgrade your @babel/core version.");return{value:o,options:t,dirname:n,alias:r}}));function*_(e,t){if(e.value instanceof a.default){if(e.options)throw new Error("Passed options to an existing Plugin instance will not work.");return e.value}return yield*j(yield*v(e,t),t)}const j=(0,d.makeWeakCache)((function*({value:e,options:t,dirname:n,alias:r},o){const i=(0,p.validatePluginObject)(e),l=Object.assign({},i);if(l.visitor&&(l.visitor=c().default.explode(Object.assign({},l.visitor))),l.inherits){const e={name:void 0,alias:r+"$inherits",value:l.inherits,options:t,dirname:n},i=yield*(0,s.forwardAsync)(_,t=>o.invalidate(n=>t(e,n)));l.pre=E(i.pre,l.pre),l.post=E(i.post,l.post),l.manipulateOptions=E(i.manipulateOptions,l.manipulateOptions),l.visitor=c().default.visitors.merge([i.visitor||{},l.visitor||{}])}return new a.default(l,t,r)})),x=(e,t)=>{if(e.test||e.include||e.exclude){const e=t.name?`"${t.name}"`:"/* your preset */";throw new Error([`Preset ${e} requires a filename to be set when babel is called directly,`,"```",`babel.transform(code, { filename: 'file.ts', presets: [${e}] });`,"```","See https://babeljs.io/docs/en/options#filename for more information."].join("\n"))}};function*w(e,t){const n=S(yield*v(e,t));return((e,t,n)=>{if(!t.filename){const{options:t}=e;x(t,n),t.overrides&&t.overrides.forEach(e=>x(e,n))}})(n,t,e),yield*(0,u.buildPresetChain)(n,t)}const S=(0,d.makeWeakCacheSync)(({value:e,dirname:t,alias:n})=>({options:(0,f.validate)("preset",e),alias:n,dirname:t}));function E(e,t){const n=[e,t].filter(Boolean);return n.length<=1?n[0]:function(...e){for(const t of n)t.apply(this,e)}}},"../../node_modules/@babel/core/lib/config/helpers/config-api.js":function(e,t,n){"use strict";function r(){const e=(t=n("../../node_modules/semver/semver.js"))&&t.__esModule?t:{default:t};var t;return r=function(){return e},e}Object.defineProperty(t,"__esModule",{value:!0}),t.default=function(e){return{version:s.version,cache:e.simple(),env:t=>e.using(e=>"undefined"===typeof t?e.envName:"function"===typeof t?(0,o.assertSimpleType)(t(e.envName)):(Array.isArray(t)||(t=[t]),t.some(t=>{if("string"!==typeof t)throw new Error("Unexpected non-string value");return t===e.envName}))),async:()=>!1,caller:t=>e.using(e=>(0,o.assertSimpleType)(t(e.caller))),assertVersion:i,tokTypes:void 0}};var s=n("../../node_modules/@babel/core/lib/index.js"),o=n("../../node_modules/@babel/core/lib/config/caching.js");function i(e){if("number"===typeof e){if(!Number.isInteger(e))throw new Error("Expected string or integer value.");e=`^${e}.0.0-0`}if("string"!==typeof e)throw new Error("Expected string or integer value.");if(r().default.satisfies(s.version,e))return;const t=Error.stackTraceLimit;"number"===typeof t&&t<25&&(Error.stackTraceLimit=25);const n=new Error(`Requires Babel "${e}", but was loaded with "${s.version}". If you are sure you have a compatible version of @babel/core, it is likely that something in your build process is loading the wrong version. Inspect the stack trace of this error to look for the first entry that doesn't mention "@babel/core" or "babel-core" to see what is calling Babel.`);throw"number"===typeof t&&(Error.stackTraceLimit=t),Object.assign(n,{code:"BABEL_VERSION_UNSUPPORTED",version:s.version,range:e})}},"../../node_modules/@babel/core/lib/config/helpers/environment.js":function(e,t,n){"use strict";(function(e){Object.defineProperty(t,"__esModule",{value:!0}),t.getEnv=function(t="development"){return e.env.BABEL_ENV||"production"}}).call(this,n("../../node_modules/process/browser.js"))},"../../node_modules/@babel/core/lib/config/index.js":function(e,t,n){"use strict";function r(){const e=i(n("../../node_modules/gensync/index.js"));return r=function(){return e},e}Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"default",{enumerable:!0,get:function(){return s.default}}),t.loadOptionsAsync=t.loadOptionsSync=t.loadOptions=t.loadPartialConfigAsync=t.loadPartialConfigSync=t.loadPartialConfig=void 0;var s=i(n("../../node_modules/@babel/core/lib/config/full.js")),o=n("../../node_modules/@babel/core/lib/config/partial.js");function i(e){return e&&e.__esModule?e:{default:e}}const a=(0,r().default)((function*(e){const t=yield*(0,s.default)(e);return t?t.options:null})),l=e=>(t,n)=>(void 0===n&&"function"===typeof t&&(n=t,t=void 0),n?e.errback(t,n):e.sync(t)),u=l(o.loadPartialConfig);t.loadPartialConfig=u;const c=o.loadPartialConfig.sync;t.loadPartialConfigSync=c;const d=o.loadPartialConfig.async;t.loadPartialConfigAsync=d;const f=l(a);t.loadOptions=f;const p=a.sync;t.loadOptionsSync=p;const h=a.async;t.loadOptionsAsync=h},"../../node_modules/@babel/core/lib/config/item.js":function(e,t,n){"use strict";function r(){const e=(t=n("../../node_modules/path-browserify/index.js"))&&t.__esModule?t:{default:t};var t;return r=function(){return e},e}Object.defineProperty(t,"__esModule",{value:!0}),t.createItemFromDescriptor=o,t.createConfigItem=function(e,{dirname:t=".",type:n}={}){return o((0,s.createDescriptor)(e,r().default.resolve(t),{type:n,alias:"programmatic item"}))},t.getItemDescriptor=function(e){if(e instanceof i)return e._descriptor;return};var s=n("../../node_modules/@babel/core/lib/config/config-descriptors.js");function o(e){return new i(e)}class i{constructor(e){this._descriptor=e,Object.defineProperty(this,"_descriptor",{enumerable:!1}),this.value=this._descriptor.value,this.options=this._descriptor.options,this.dirname=this._descriptor.dirname,this.name=this._descriptor.name,this.file=this._descriptor.file?{request:this._descriptor.file.request,resolved:this._descriptor.file.resolved}:void 0,Object.freeze(this)}}Object.freeze(i.prototype)},"../../node_modules/@babel/core/lib/config/partial.js":function(e,t,n){"use strict";function r(){const e=f(n("../../node_modules/path-browserify/index.js"));return r=function(){return e},e}function s(){const e=f(n("../../node_modules/gensync/index.js"));return s=function(){return e},e}Object.defineProperty(t,"__esModule",{value:!0}),t.default=p,t.loadPartialConfig=void 0;var o=f(n("../../node_modules/@babel/core/lib/config/plugin.js")),i=n("../../node_modules/@babel/core/lib/config/util.js"),a=n("../../node_modules/@babel/core/lib/config/item.js"),l=n("../../node_modules/@babel/core/lib/config/config-chain.js"),u=n("../../node_modules/@babel/core/lib/config/helpers/environment.js"),c=n("../../node_modules/@babel/core/lib/config/validation/options.js"),d=n("../../node_modules/@babel/core/lib/config/files/index-browser.js");function f(e){return e&&e.__esModule?e:{default:e}}function*p(e){if(null!=e&&("object"!==typeof e||Array.isArray(e)))throw new Error("Babel options must be an object, null, or undefined");const t=e?(0,c.validate)("arguments",e):{},{envName:n=(0,u.getEnv)(),cwd:s=".",root:o=".",rootMode:f="root",caller:p}=t,h=r().default.resolve(s),m=yield*function*(e,t){switch(t){case"root":return e;case"upward-optional":{const t=yield*(0,d.findConfigUpwards)(e);return null===t?e:t}case"upward":{const t=yield*(0,d.findConfigUpwards)(e);if(null!==t)return t;throw Object.assign(new Error(`Babel was run with rootMode:"upward" but a root could not be found when searching upward from "${e}".\nOne of the following config files must be in the directory tree: "${d.ROOT_CONFIG_FILENAMES.join(", ")}".`),{code:"BABEL_ROOT_NOT_FOUND",dirname:e})}default:throw new Error("Assertion failure - unknown rootMode value.")}}(r().default.resolve(h,o),f),y={filename:"string"===typeof t.filename?r().default.resolve(s,t.filename):void 0,cwd:h,root:m,envName:n,caller:p},b=yield*(0,l.buildRootChain)(t,y);if(!b)return null;const g={};return b.options.forEach(e=>{(0,i.mergeOptions)(g,e)}),g.babelrc=!1,g.configFile=!1,g.passPerPreset=!1,g.envName=y.envName,g.cwd=y.cwd,g.root=y.root,g.filename="string"===typeof y.filename?y.filename:void 0,g.plugins=b.plugins.map(e=>(0,a.createItemFromDescriptor)(e)),g.presets=b.presets.map(e=>(0,a.createItemFromDescriptor)(e)),{options:g,context:y,ignore:b.ignore,babelrc:b.babelrc,config:b.config}}const h=(0,s().default)((function*(e){const t=yield*p(e);if(!t)return null;const{options:n,babelrc:r,ignore:s,config:i}=t;return(n.plugins||[]).forEach(e=>{if(e.value instanceof o.default)throw new Error("Passing cached plugin instances is not supported in babel.loadPartialConfig()")}),new m(n,r?r.filepath:void 0,s?s.filepath:void 0,i?i.filepath:void 0)}));t.loadPartialConfig=h;class m{constructor(e,t,n,r){this.options=e,this.babelignore=n,this.babelrc=t,this.config=r,Object.freeze(this)}hasFilesystemConfig(){return void 0!==this.babelrc||void 0!==this.config}}Object.freeze(m.prototype)},"../../node_modules/@babel/core/lib/config/pattern-to-regex.js":function(e,t,n){"use strict";function r(){const e=o(n("../../node_modules/path-browserify/index.js"));return r=function(){return e},e}function s(){const e=o(n("../../node_modules/lodash/escapeRegExp.js"));return s=function(){return e},e}function o(e){return e&&e.__esModule?e:{default:e}}Object.defineProperty(t,"__esModule",{value:!0}),t.default=function(e,t){const n=r().default.resolve(t,e).split(r().default.sep);return new RegExp(["^",...n.map((e,t)=>{const r=t===n.length-1;return"**"===e?r?f:d:"*"===e?r?c:u:0===e.indexOf("*.")?l+(0,s().default)(e.slice(1))+(r?a:i):(0,s().default)(e)+(r?a:i)})].join(""))};const i="\\"+r().default.sep,a=`(?:${i}|$)`,l=`[^${i}]+`,u=`(?:${l}${i})`,c=`(?:${l}${a})`,d=u+"*?",f=`${u}*?${c}?`},"../../node_modules/@babel/core/lib/config/plugin.js":function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;t.default=class{constructor(e,t,n){this.key=e.name||n,this.manipulateOptions=e.manipulateOptions,this.post=e.post,this.pre=e.pre,this.visitor=e.visitor||{},this.parserOverride=e.parserOverride,this.generatorOverride=e.generatorOverride,this.options=t}}},"../../node_modules/@babel/core/lib/config/util.js":function(e,t,n){"use strict";function r(e,t){for(const n of Object.keys(t)){const r=t[n];void 0!==r&&(e[n]=r)}}Object.defineProperty(t,"__esModule",{value:!0}),t.mergeOptions=function(e,t){for(const n of Object.keys(t))if("parserOpts"===n&&t.parserOpts){const n=t.parserOpts;r(e.parserOpts=e.parserOpts||{},n)}else if("generatorOpts"===n&&t.generatorOpts){const n=t.generatorOpts;r(e.generatorOpts=e.generatorOpts||{},n)}else{const r=t[n];void 0!==r&&(e[n]=r)}},t.isIterableIterator=function(e){return!!e&&"function"===typeof e.next&&"function"===typeof e[Symbol.iterator]}},"../../node_modules/@babel/core/lib/config/validation/option-assertions.js":function(e,t,n){"use strict";function r(e){switch(e.type){case"root":return"";case"env":return`${r(e.parent)}.env["${e.name}"]`;case"overrides":return`${r(e.parent)}.overrides[${e.index}]`;case"option":return`${r(e.parent)}.${e.name}`;case"access":return`${r(e.parent)}[${JSON.stringify(e.name)}]`;default:throw new Error("Assertion failure: Unknown type "+e.type)}}function s(e,t){return{type:"access",name:t,parent:e}}function o(e,t){if(void 0!==t&&("object"!==typeof t||Array.isArray(t)||!t))throw new Error(r(e)+" must be an object, or undefined");return t}function i(e,t){if(null!=t&&!Array.isArray(t))throw new Error(r(e)+" must be an array, or undefined");return t}function a(e){return"string"===typeof e||"function"===typeof e||e instanceof RegExp}function l(e,t){if(("object"!==typeof t||!t)&&"string"!==typeof t&&"function"!==typeof t)throw new Error(r(e)+" must be a string, object, function");return t}Object.defineProperty(t,"__esModule",{value:!0}),t.msg=r,t.access=s,t.assertRootMode=function(e,t){if(void 0!==t&&"root"!==t&&"upward"!==t&&"upward-optional"!==t)throw new Error(r(e)+' must be a "root", "upward", "upward-optional" or undefined');return t},t.assertSourceMaps=function(e,t){if(void 0!==t&&"boolean"!==typeof t&&"inline"!==t&&"both"!==t)throw new Error(r(e)+' must be a boolean, "inline", "both", or undefined');return t},t.assertCompact=function(e,t){if(void 0!==t&&"boolean"!==typeof t&&"auto"!==t)throw new Error(r(e)+' must be a boolean, "auto", or undefined');return t},t.assertSourceType=function(e,t){if(void 0!==t&&"module"!==t&&"script"!==t&&"unambiguous"!==t)throw new Error(r(e)+' must be "module", "script", "unambiguous", or undefined');return t},t.assertCallerMetadata=function(e,t){const n=o(e,t);if(n){if("string"!==typeof n.name)throw new Error(r(e)+' set but does not contain "name" property string');for(const t of Object.keys(n)){const o=s(e,t),i=n[t];if(null!=i&&"boolean"!==typeof i&&"string"!==typeof i&&"number"!==typeof i)throw new Error(r(o)+" must be null, undefined, a boolean, a string, or a number.")}}return t},t.assertInputSourceMap=function(e,t){if(void 0!==t&&"boolean"!==typeof t&&("object"!==typeof t||!t))throw new Error(r(e)+" must be a boolean, object, or undefined");return t},t.assertString=function(e,t){if(void 0!==t&&"string"!==typeof t)throw new Error(r(e)+" must be a string, or undefined");return t},t.assertFunction=function(e,t){if(void 0!==t&&"function"!==typeof t)throw new Error(r(e)+" must be a function, or undefined");return t},t.assertBoolean=function(e,t){if(void 0!==t&&"boolean"!==typeof t)throw new Error(r(e)+" must be a boolean, or undefined");return t},t.assertObject=o,t.assertArray=i,t.assertIgnoreList=function(e,t){const n=i(e,t);n&&n.forEach((t,n)=>function(e,t){if("string"!==typeof t&&"function"!==typeof t&&!(t instanceof RegExp))throw new Error(r(e)+" must be an array of string/Function/RegExp values, or undefined");return t}(s(e,n),t));return n},t.assertConfigApplicableTest=function(e,t){if(void 0===t)return t;if(Array.isArray(t))t.forEach((t,n)=>{if(!a(t))throw new Error(r(s(e,n))+" must be a string/Function/RegExp.")});else if(!a(t))throw new Error(r(e)+" must be a string/Function/RegExp, or an array of those");return t},t.assertConfigFileSearch=function(e,t){if(void 0!==t&&"boolean"!==typeof t&&"string"!==typeof t)throw new Error(r(e)+" must be a undefined, a boolean, a string, got "+JSON.stringify(t));return t},t.assertBabelrcSearch=function(e,t){if(void 0===t||"boolean"===typeof t)return t;if(Array.isArray(t))t.forEach((t,n)=>{if(!a(t))throw new Error(r(s(e,n))+" must be a string/Function/RegExp.")});else if(!a(t))throw new Error(r(e)+" must be a undefined, a boolean, a string/Function/RegExp or an array of those, got "+JSON.stringify(t));return t},t.assertPluginList=function(e,t){const n=i(e,t);n&&n.forEach((t,n)=>function(e,t){if(Array.isArray(t)){if(0===t.length)throw new Error(r(e)+" must include an object");if(t.length>3)throw new Error(r(e)+" may only be a two-tuple or three-tuple");if(l(s(e,0),t[0]),t.length>1){const n=t[1];if(void 0!==n&&!1!==n&&("object"!==typeof n||Array.isArray(n)||null===n))throw new Error(r(s(e,1))+" must be an object, false, or undefined")}if(3===t.length){const n=t[2];if(void 0!==n&&"string"!==typeof n)throw new Error(r(s(e,2))+" must be a string, or undefined")}}else l(e,t);return t}(s(e,n),t));return n}},"../../node_modules/@babel/core/lib/config/validation/options.js":function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.validate=function(e,t){return c({type:"root",source:e},t)},t.checkNoUnwrappedItemOptionPairs=function(e,t,n,r,s){e.file&&void 0===e.options&&"object"===typeof t.value&&(s.message+=`\n- Maybe you meant to use\n"${n}": [\n  ["${e.file.request}", ${JSON.stringify(t.value,void 0,2)}]\n]\nTo be a valid ${n}, its name and options should be wrapped in a pair of brackets`)};o(n("../../node_modules/@babel/core/lib/config/plugin.js"));var r=o(n("../../node_modules/@babel/core/lib/config/validation/removed.js")),s=n("../../node_modules/@babel/core/lib/config/validation/option-assertions.js");function o(e){return e&&e.__esModule?e:{default:e}}const i={cwd:s.assertString,root:s.assertString,rootMode:s.assertRootMode,configFile:s.assertConfigFileSearch,caller:s.assertCallerMetadata,filename:s.assertString,filenameRelative:s.assertString,code:s.assertBoolean,ast:s.assertBoolean,envName:s.assertString},a={babelrc:s.assertBoolean,babelrcRoots:s.assertBabelrcSearch},l={extends:s.assertString,ignore:s.assertIgnoreList,only:s.assertIgnoreList},u={inputSourceMap:s.assertInputSourceMap,presets:s.assertPluginList,plugins:s.assertPluginList,passPerPreset:s.assertBoolean,env:function(e,t){if("env"===e.parent.type)throw new Error((0,s.msg)(e)+" is not allowed inside of another .env block");const n=e.parent,r=(0,s.assertObject)(e,t);if(r)for(const o of Object.keys(r)){const t=(0,s.assertObject)((0,s.access)(e,o),r[o]);t&&c({type:"env",name:o,parent:n},t)}return r},overrides:function(e,t){if("env"===e.parent.type)throw new Error((0,s.msg)(e)+" is not allowed inside an .env block");if("overrides"===e.parent.type)throw new Error((0,s.msg)(e)+" is not allowed inside an .overrides block");const n=e.parent,r=(0,s.assertArray)(e,t);if(r)for(const[o,i]of r.entries()){const t=(0,s.access)(e,o),r=(0,s.assertObject)(t,i);if(!r)throw new Error((0,s.msg)(t)+" must be an object");c({type:"overrides",index:o,parent:n},r)}return r},test:s.assertConfigApplicableTest,include:s.assertConfigApplicableTest,exclude:s.assertConfigApplicableTest,retainLines:s.assertBoolean,comments:s.assertBoolean,shouldPrintComment:s.assertFunction,compact:s.assertCompact,minified:s.assertBoolean,auxiliaryCommentBefore:s.assertString,auxiliaryCommentAfter:s.assertString,sourceType:s.assertSourceType,wrapPluginVisitorMethod:s.assertFunction,highlightCode:s.assertBoolean,sourceMaps:s.assertSourceMaps,sourceMap:s.assertSourceMaps,sourceFileName:s.assertString,sourceRoot:s.assertString,getModuleId:s.assertFunction,moduleRoot:s.assertString,moduleIds:s.assertBoolean,moduleId:s.assertString,parserOpts:s.assertObject,generatorOpts:s.assertObject};function c(e,t){const n=function e(t){return"root"===t.type?t.source:e(t.parent)}(e);return function(e){if(f(e,"sourceMap")&&f(e,"sourceMaps"))throw new Error(".sourceMap is an alias for .sourceMaps, cannot use both")}(t),Object.keys(t).forEach(r=>{const o={type:"option",name:r,parent:e};if("preset"===n&&l[r])throw new Error((0,s.msg)(o)+" is not allowed in preset options");if("arguments"!==n&&i[r])throw new Error((0,s.msg)(o)+" is only allowed in root programmatic options");if("arguments"!==n&&"configfile"!==n&&a[r]){if("babelrcfile"===n||"extendsfile"===n)throw new Error((0,s.msg)(o)+' is not allowed in .babelrc or "extends"ed files, only in root programmatic options, or babel.config.js/config file options');throw new Error((0,s.msg)(o)+" is only allowed in root programmatic options, or babel.config.js/config file options")}(u[r]||l[r]||a[r]||i[r]||d)(o,t[r])}),t}function d(e){const t=e.name;if(r.default[t]){const{message:n,version:o=5}=r.default[t];throw new Error(`Using removed Babel ${o} option: ${(0,s.msg)(e)} - ${n}`)}{const t=new Error(`Unknown option: ${(0,s.msg)(e)}. Check out https://babeljs.io/docs/en/babel-core/#options for more information about options.`);throw t.code="BABEL_UNKNOWN_OPTION",t}}function f(e,t){return Object.prototype.hasOwnProperty.call(e,t)}},"../../node_modules/@babel/core/lib/config/validation/plugins.js":function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.validatePluginObject=function(e){const t={type:"root",source:"plugin"};return Object.keys(e).forEach(n=>{const r=s[n],o={type:"option",name:n,parent:t};if(!r){const e=new Error(`.${n} is not a valid Plugin property`);throw e.code="BABEL_UNKNOWN_PLUGIN_PROPERTY",e}r(o,e[n])}),e};var r=n("../../node_modules/@babel/core/lib/config/validation/option-assertions.js");const s={name:r.assertString,manipulateOptions:r.assertFunction,pre:r.assertFunction,post:r.assertFunction,inherits:r.assertFunction,visitor:function(e,t){const n=(0,r.assertObject)(e,t);if(n&&(Object.keys(n).forEach(e=>function(e,t){if(t&&"object"===typeof t)Object.keys(t).forEach(t=>{if("enter"!==t&&"exit"!==t)throw new Error(`.visitor["${e}"] may only have .enter and/or .exit handlers.`)});else if("function"!==typeof t)throw new Error(`.visitor["${e}"] must be a function`);return t}(e,n[e])),n.enter||n.exit))throw new Error(`.${e} cannot contain catch-all "enter" or "exit" handlers. Please target individual nodes.`);return n},parserOverride:r.assertFunction,generatorOverride:r.assertFunction}},"../../node_modules/@babel/core/lib/config/validation/removed.js":function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;t.default={auxiliaryComment:{message:"Use `auxiliaryCommentBefore` or `auxiliaryCommentAfter`"},blacklist:{message:"Put the specific transforms you want in the `plugins` option"},breakConfig:{message:"This is not a necessary option in Babel 6"},experimental:{message:"Put the specific transforms you want in the `plugins` option"},externalHelpers:{message:"Use the `external-helpers` plugin instead. Check out http://babeljs.io/docs/plugins/external-helpers/"},extra:{message:""},jsxPragma:{message:"use the `pragma` option in the `react-jsx` plugin. Check out http://babeljs.io/docs/plugins/transform-react-jsx/"},loose:{message:"Specify the `loose` option for the relevant plugin you are using or use a preset that sets the option."},metadataUsedHelpers:{message:"Not required anymore as this is enabled by default"},modules:{message:"Use the corresponding module transform plugin in the `plugins` option. Check out http://babeljs.io/docs/plugins/#modules"},nonStandard:{message:"Use the `react-jsx` and `flow-strip-types` plugins to support JSX and Flow. Also check out the react preset http://babeljs.io/docs/plugins/preset-react/"},optional:{message:"Put the specific transforms you want in the `plugins` option"},sourceMapName:{message:"The `sourceMapName` option has been removed because it makes more sense for the tooling that calls Babel to assign `map.file` themselves."},stage:{message:"Check out the corresponding stage-x presets http://babeljs.io/docs/plugins/#presets"},whitelist:{message:"Put the specific transforms you want in the `plugins` option"},resolveModuleSource:{version:6,message:"Use `babel-plugin-module-resolver@3`'s 'resolvePath' options"},metadata:{version:6,message:"Generated plugin metadata is always included in the output result"},sourceMapTarget:{version:6,message:"The `sourceMapTarget` option has been removed because it makes more sense for the tooling that calls Babel to assign `map.file` themselves."}}},"../../node_modules/@babel/core/lib/gensync-utils/async.js":function(e,t,n){"use strict";function r(){const e=(t=n("../../node_modules/gensync/index.js"))&&t.__esModule?t:{default:t};var t;return r=function(){return e},e}Object.defineProperty(t,"__esModule",{value:!0}),t.maybeAsync=function(e,t){return(0,r().default)({sync(...n){const r=e.apply(this,n);if(c(r))throw new Error(t);return r},async(...t){return Promise.resolve(e.apply(this,t))}})},t.forwardAsync=function(e,t){const n=(0,r().default)(e);return a(e=>{const r=n[e];return t(r)})},t.isThenable=c,t.waitFor=t.onFirstPause=t.isAsync=void 0;const s=e=>e,o=(0,r().default)((function*(e){return yield*e})),i=(0,r().default)({sync:()=>!1,errback:e=>e(null,!0)});t.isAsync=i;const a=(0,r().default)({sync:e=>e("sync"),async:e=>e("async")});const l=(0,r().default)({name:"onFirstPause",arity:2,sync:function(e){return o.sync(e)},errback:function(e,t,n){let r=!1;o.errback(e,(e,t)=>{r=!0,n(e,t)}),r||t()}});t.onFirstPause=l;const u=(0,r().default)({sync:s,async:s});function c(e){return!!e&&("object"===typeof e||"function"===typeof e)&&!!e.then&&"function"===typeof e.then}t.waitFor=u},"../../node_modules/@babel/core/lib/index.js":function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.Plugin=function(e){throw new Error(`The (${e}) Babel 5 plugin is being run with an unsupported Babel version.`)},Object.defineProperty(t,"File",{enumerable:!0,get:function(){return r.default}}),Object.defineProperty(t,"buildExternalHelpers",{enumerable:!0,get:function(){return s.default}}),Object.defineProperty(t,"resolvePlugin",{enumerable:!0,get:function(){return o.resolvePlugin}}),Object.defineProperty(t,"resolvePreset",{enumerable:!0,get:function(){return o.resolvePreset}}),Object.defineProperty(t,"version",{enumerable:!0,get:function(){return i.version}}),Object.defineProperty(t,"getEnv",{enumerable:!0,get:function(){return a.getEnv}}),Object.defineProperty(t,"tokTypes",{enumerable:!0,get:function(){return function(){const e=n("../../node_modules/@babel/parser/lib/index.js");return function(){return e},e}().tokTypes}}),Object.defineProperty(t,"traverse",{enumerable:!0,get:function(){return function(){const e=y(n("../../node_modules/@babel/traverse/lib/index.js"));return function(){return e},e}().default}}),Object.defineProperty(t,"template",{enumerable:!0,get:function(){return function(){const e=y(n("../../node_modules/@babel/template/lib/index.js"));return function(){return e},e}().default}}),Object.defineProperty(t,"createConfigItem",{enumerable:!0,get:function(){return u.createConfigItem}}),Object.defineProperty(t,"loadPartialConfig",{enumerable:!0,get:function(){return c.loadPartialConfig}}),Object.defineProperty(t,"loadPartialConfigSync",{enumerable:!0,get:function(){return c.loadPartialConfigSync}}),Object.defineProperty(t,"loadPartialConfigAsync",{enumerable:!0,get:function(){return c.loadPartialConfigAsync}}),Object.defineProperty(t,"loadOptions",{enumerable:!0,get:function(){return c.loadOptions}}),Object.defineProperty(t,"loadOptionsSync",{enumerable:!0,get:function(){return c.loadOptionsSync}}),Object.defineProperty(t,"loadOptionsAsync",{enumerable:!0,get:function(){return c.loadOptionsAsync}}),Object.defineProperty(t,"transform",{enumerable:!0,get:function(){return d.transform}}),Object.defineProperty(t,"transformSync",{enumerable:!0,get:function(){return d.transformSync}}),Object.defineProperty(t,"transformAsync",{enumerable:!0,get:function(){return d.transformAsync}}),Object.defineProperty(t,"transformFile",{enumerable:!0,get:function(){return f.transformFile}}),Object.defineProperty(t,"transformFileSync",{enumerable:!0,get:function(){return f.transformFileSync}}),Object.defineProperty(t,"transformFileAsync",{enumerable:!0,get:function(){return f.transformFileAsync}}),Object.defineProperty(t,"transformFromAst",{enumerable:!0,get:function(){return p.transformFromAst}}),Object.defineProperty(t,"transformFromAstSync",{enumerable:!0,get:function(){return p.transformFromAstSync}}),Object.defineProperty(t,"transformFromAstAsync",{enumerable:!0,get:function(){return p.transformFromAstAsync}}),Object.defineProperty(t,"parse",{enumerable:!0,get:function(){return h.parse}}),Object.defineProperty(t,"parseSync",{enumerable:!0,get:function(){return h.parseSync}}),Object.defineProperty(t,"parseAsync",{enumerable:!0,get:function(){return h.parseAsync}}),t.types=t.OptionManager=t.DEFAULT_EXTENSIONS=void 0;var r=y(n("../../node_modules/@babel/core/lib/transformation/file/file.js")),s=y(n("../../node_modules/@babel/core/lib/tools/build-external-helpers.js")),o=n("../../node_modules/@babel/core/lib/config/files/index-browser.js"),i=n("../../node_modules/@babel/core/package.json"),a=n("../../node_modules/@babel/core/lib/config/helpers/environment.js");function l(){const e=function(e){if(e&&e.__esModule)return e;if(null===e||"object"!==typeof e&&"function"!==typeof e)return{default:e};var t=m();if(t&&t.has(e))return t.get(e);var n={},r=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var s in e)if(Object.prototype.hasOwnProperty.call(e,s)){var o=r?Object.getOwnPropertyDescriptor(e,s):null;o&&(o.get||o.set)?Object.defineProperty(n,s,o):n[s]=e[s]}n.default=e,t&&t.set(e,n);return n}(n("../../node_modules/@babel/types/lib/index.js"));return l=function(){return e},e}Object.defineProperty(t,"types",{enumerable:!0,get:function(){return l()}});var u=n("../../node_modules/@babel/core/lib/config/item.js"),c=n("../../node_modules/@babel/core/lib/config/index.js"),d=n("../../node_modules/@babel/core/lib/transform.js"),f=n("../../node_modules/@babel/core/lib/transform-file-browser.js"),p=n("../../node_modules/@babel/core/lib/transform-ast.js"),h=n("../../node_modules/@babel/core/lib/parse.js");function m(){if("function"!==typeof WeakMap)return null;var e=new WeakMap;return m=function(){return e},e}function y(e){return e&&e.__esModule?e:{default:e}}const b=Object.freeze([".js",".jsx",".es6",".es",".mjs"]);t.DEFAULT_EXTENSIONS=b;t.OptionManager=class{init(e){return(0,c.loadOptions)(e)}}},"../../node_modules/@babel/core/lib/parse.js":function(e,t,n){"use strict";function r(){const e=a(n("../../node_modules/gensync/index.js"));return r=function(){return e},e}Object.defineProperty(t,"__esModule",{value:!0}),t.parseAsync=t.parseSync=t.parse=void 0;var s=a(n("../../node_modules/@babel/core/lib/config/index.js")),o=a(n("../../node_modules/@babel/core/lib/parser/index.js")),i=a(n("../../node_modules/@babel/core/lib/transformation/normalize-opts.js"));function a(e){return e&&e.__esModule?e:{default:e}}const l=(0,r().default)((function*(e,t){const n=yield*(0,s.default)(t);return null===n?null:yield*(0,o.default)(n.passes,(0,i.default)(n),e)}));t.parse=function(e,t,n){if("function"===typeof t&&(n=t,t=void 0),void 0===n)return l.sync(e,t);l.errback(e,t,n)};const u=l.sync;t.parseSync=u;const c=l.async;t.parseAsync=c},"../../node_modules/@babel/core/lib/parser/index.js":function(e,t,n){"use strict";function r(){const e=n("../../node_modules/@babel/parser/lib/index.js");return r=function(){return e},e}function s(){const e=n("../../node_modules/@babel/code-frame/lib/index.js");return s=function(){return e},e}Object.defineProperty(t,"__esModule",{value:!0}),t.default=function*(e,{parserOpts:t,highlightCode:n=!0,filename:o="unknown"},a){try{const n=[];for(const s of e)for(const e of s){const{parserOverride:s}=e;if(s){const e=s(a,t,r().parse);void 0!==e&&n.push(e)}}if(0===n.length)return(0,r().parse)(a,t);if(1===n.length){if(yield*[],"function"===typeof n[0].then)throw new Error("You appear to be using an async parser plugin, which your current version of Babel does not support. If you're using a published plugin, you may need to upgrade your @babel/core version.");return n[0]}throw new Error("More than one plugin attempted to override parsing.")}catch(l){"BABEL_PARSER_SOURCETYPE_MODULE_REQUIRED"===l.code&&(l.message+="\nConsider renaming the file to '.mjs', or setting sourceType:module or sourceType:unambiguous in your Babel config for this file.");const{loc:e,missingPlugin:t}=l;if(e){const r=(0,s().codeFrameColumns)(a,{start:{line:e.line,column:e.column+1}},{highlightCode:n});l.message=t?o+": "+(0,i.default)(t[0],e,r):`${o}: ${l.message}\n\n`+r,l.code="BABEL_PARSE_ERROR"}throw l}};var o,i=(o=n("../../node_modules/@babel/core/lib/parser/util/missing-plugin-helper.js"))&&o.__esModule?o:{default:o}},"../../node_modules/@babel/core/lib/parser/util/missing-plugin-helper.js":function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=function(e,t,n){let o=`Support for the experimental syntax '${e}' isn't currently enabled (${t.line}:${t.column+1}):\n\n`+n;const i=r[e];if(i){const{syntax:e,transform:t}=i;if(e){const n=s(e);if(t){const e=s(t),r=t.name.startsWith("@babel/plugin")?"plugins":"presets";o+=`\n\nAdd ${e} to the '${r}' section of your Babel config to enable transformation.\nIf you want to leave it as-is, add ${n} to the 'plugins' section to enable parsing.`}else o+=`\n\nAdd ${n} to the 'plugins' section of your Babel config to enable parsing.`}}return o};const r={classProperties:{syntax:{name:"@babel/plugin-syntax-class-properties",url:"https://git.io/vb4yQ"},transform:{name:"@babel/plugin-proposal-class-properties",url:"https://git.io/vb4SL"}},classPrivateProperties:{syntax:{name:"@babel/plugin-syntax-class-properties",url:"https://git.io/vb4yQ"},transform:{name:"@babel/plugin-proposal-class-properties",url:"https://git.io/vb4SL"}},classPrivateMethods:{syntax:{name:"@babel/plugin-syntax-class-properties",url:"https://git.io/vb4yQ"},transform:{name:"@babel/plugin-proposal-private-methods",url:"https://git.io/JvpRG"}},decorators:{syntax:{name:"@babel/plugin-syntax-decorators",url:"https://git.io/vb4y9"},transform:{name:"@babel/plugin-proposal-decorators",url:"https://git.io/vb4ST"}},doExpressions:{syntax:{name:"@babel/plugin-syntax-do-expressions",url:"https://git.io/vb4yh"},transform:{name:"@babel/plugin-proposal-do-expressions",url:"https://git.io/vb4S3"}},dynamicImport:{syntax:{name:"@babel/plugin-syntax-dynamic-import",url:"https://git.io/vb4Sv"}},exportDefaultFrom:{syntax:{name:"@babel/plugin-syntax-export-default-from",url:"https://git.io/vb4SO"},transform:{name:"@babel/plugin-proposal-export-default-from",url:"https://git.io/vb4yH"}},exportNamespaceFrom:{syntax:{name:"@babel/plugin-syntax-export-namespace-from",url:"https://git.io/vb4Sf"},transform:{name:"@babel/plugin-proposal-export-namespace-from",url:"https://git.io/vb4SG"}},flow:{syntax:{name:"@babel/plugin-syntax-flow",url:"https://git.io/vb4yb"},transform:{name:"@babel/preset-flow",url:"https://git.io/JfeDn"}},functionBind:{syntax:{name:"@babel/plugin-syntax-function-bind",url:"https://git.io/vb4y7"},transform:{name:"@babel/plugin-proposal-function-bind",url:"https://git.io/vb4St"}},functionSent:{syntax:{name:"@babel/plugin-syntax-function-sent",url:"https://git.io/vb4yN"},transform:{name:"@babel/plugin-proposal-function-sent",url:"https://git.io/vb4SZ"}},importMeta:{syntax:{name:"@babel/plugin-syntax-import-meta",url:"https://git.io/vbKK6"}},jsx:{syntax:{name:"@babel/plugin-syntax-jsx",url:"https://git.io/vb4yA"},transform:{name:"@babel/preset-react",url:"https://git.io/JfeDR"}},logicalAssignment:{syntax:{name:"@babel/plugin-syntax-logical-assignment-operators",url:"https://git.io/vAlBp"},transform:{name:"@babel/plugin-proposal-logical-assignment-operators",url:"https://git.io/vAlRe"}},numericSeparator:{syntax:{name:"@babel/plugin-syntax-numeric-separator",url:"https://git.io/vb4Sq"},transform:{name:"@babel/plugin-proposal-numeric-separator",url:"https://git.io/vb4yS"}},optionalChaining:{syntax:{name:"@babel/plugin-syntax-optional-chaining",url:"https://git.io/vb4Sc"},transform:{name:"@babel/plugin-proposal-optional-chaining",url:"https://git.io/vb4Sk"}},pipelineOperator:{syntax:{name:"@babel/plugin-syntax-pipeline-operator",url:"https://git.io/vb4yj"},transform:{name:"@babel/plugin-proposal-pipeline-operator",url:"https://git.io/vb4SU"}},recordAndTuple:{syntax:{name:"@babel/plugin-syntax-record-and-tuple",url:"https://git.io/JvKp3"}},throwExpressions:{syntax:{name:"@babel/plugin-syntax-throw-expressions",url:"https://git.io/vb4SJ"},transform:{name:"@babel/plugin-proposal-throw-expressions",url:"https://git.io/vb4yF"}},typescript:{syntax:{name:"@babel/plugin-syntax-typescript",url:"https://git.io/vb4SC"},transform:{name:"@babel/preset-typescript",url:"https://git.io/JfeDz"}},asyncGenerators:{syntax:{name:"@babel/plugin-syntax-async-generators",url:"https://git.io/vb4SY"},transform:{name:"@babel/plugin-proposal-async-generator-functions",url:"https://git.io/vb4yp"}},nullishCoalescingOperator:{syntax:{name:"@babel/plugin-syntax-nullish-coalescing-operator",url:"https://git.io/vb4yx"},transform:{name:"@babel/plugin-proposal-nullish-coalescing-operator",url:"https://git.io/vb4Se"}},objectRestSpread:{syntax:{name:"@babel/plugin-syntax-object-rest-spread",url:"https://git.io/vb4y5"},transform:{name:"@babel/plugin-proposal-object-rest-spread",url:"https://git.io/vb4Ss"}},optionalCatchBinding:{syntax:{name:"@babel/plugin-syntax-optional-catch-binding",url:"https://git.io/vb4Sn"},transform:{name:"@babel/plugin-proposal-optional-catch-binding",url:"https://git.io/vb4SI"}}},s=({name:e,url:t})=>`${e} (${t})`},"../../node_modules/@babel/core/lib/tools/build-external-helpers.js":function(e,t,n){"use strict";function r(){const e=c(n("../../node_modules/@babel/helpers/lib/index.js"));return r=function(){return e},e}function s(){const e=l(n("../../node_modules/@babel/generator/lib/index.js"));return s=function(){return e},e}function o(){const e=l(n("../../node_modules/@babel/template/lib/index.js"));return o=function(){return e},e}function i(){const e=c(n("../../node_modules/@babel/types/lib/index.js"));return i=function(){return e},e}Object.defineProperty(t,"__esModule",{value:!0}),t.default=function(e,t="global"){let n;const r={global:d,module:f,umd:p,var:h}[t];if(!r)throw new Error("Unsupported output type "+t);n=r(e);return(0,s().default)(n).code};var a=l(n("../../node_modules/@babel/core/lib/transformation/file/file.js"));function l(e){return e&&e.__esModule?e:{default:e}}function u(){if("function"!==typeof WeakMap)return null;var e=new WeakMap;return u=function(){return e},e}function c(e){if(e&&e.__esModule)return e;if(null===e||"object"!==typeof e&&"function"!==typeof e)return{default:e};var t=u();if(t&&t.has(e))return t.get(e);var n={},r=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var s in e)if(Object.prototype.hasOwnProperty.call(e,s)){var o=r?Object.getOwnPropertyDescriptor(e,s):null;o&&(o.get||o.set)?Object.defineProperty(n,s,o):n[s]=e[s]}return n.default=e,t&&t.set(e,n),n}function d(e){const t=i().identifier("babelHelpers"),n=[],r=i().functionExpression(null,[i().identifier("global")],i().blockStatement(n)),s=i().program([i().expressionStatement(i().callExpression(r,[i().conditionalExpression(i().binaryExpression("===",i().unaryExpression("typeof",i().identifier("global")),i().stringLiteral("undefined")),i().identifier("self"),i().identifier("global"))]))]);return n.push(i().variableDeclaration("var",[i().variableDeclarator(t,i().assignmentExpression("=",i().memberExpression(i().identifier("global"),t),i().objectExpression([])))])),m(n,t,e),s}function f(e){const t=[],n=m(t,null,e);return t.unshift(i().exportNamedDeclaration(null,Object.keys(n).map(e=>i().exportSpecifier(i().cloneNode(n[e]),i().identifier(e))))),i().program(t,[],"module")}function p(e){const t=i().identifier("babelHelpers"),n=[];return n.push(i().variableDeclaration("var",[i().variableDeclarator(t,i().identifier("global"))])),m(n,t,e),i().program([(r={FACTORY_PARAMETERS:i().identifier("global"),BROWSER_ARGUMENTS:i().assignmentExpression("=",i().memberExpression(i().identifier("root"),t),i().objectExpression([])),COMMON_ARGUMENTS:i().identifier("exports"),AMD_ARGUMENTS:i().arrayExpression([i().stringLiteral("exports")]),FACTORY_BODY:n,UMD_ROOT:i().identifier("this")},o().default`
    (function (root, factory) {
      if (typeof define === "function" && define.amd) {
        define(AMD_ARGUMENTS, factory);
      } else if (typeof exports === "object") {
        factory(COMMON_ARGUMENTS);
      } else {
        factory(BROWSER_ARGUMENTS);
      }
    })(UMD_ROOT, function (FACTORY_PARAMETERS) {
      FACTORY_BODY
    });
  `(r))]);var r}function h(e){const t=i().identifier("babelHelpers"),n=[];n.push(i().variableDeclaration("var",[i().variableDeclarator(t,i().objectExpression([]))]));const r=i().program(n);return m(n,t,e),n.push(i().expressionStatement(t)),r}function m(e,t,n){const s=e=>t?i().memberExpression(t,i().identifier(e)):i().identifier("_"+e),o={};return r().list.forEach((function(t){if(n&&n.indexOf(t)<0)return;const i=o[t]=s(t);r().ensure(t,a.default);const{nodes:l}=r().get(t,s,i);e.push(...l)})),o}},"../../node_modules/@babel/core/lib/transform-ast.js":function(e,t,n){"use strict";function r(){const e=i(n("../../node_modules/gensync/index.js"));return r=function(){return e},e}Object.defineProperty(t,"__esModule",{value:!0}),t.transformFromAstAsync=t.transformFromAstSync=t.transformFromAst=void 0;var s=i(n("../../node_modules/@babel/core/lib/config/index.js")),o=n("../../node_modules/@babel/core/lib/transformation/index.js");function i(e){return e&&e.__esModule?e:{default:e}}const a=(0,r().default)((function*(e,t,n){const r=yield*(0,s.default)(n);if(null===r)return null;if(!e)throw new Error("No AST given");return yield*(0,o.run)(r,t,e)}));t.transformFromAst=function(e,t,n,r){if("function"===typeof n&&(r=n,n=void 0),void 0===r)return a.sync(e,t,n);a.errback(e,t,n,r)};const l=a.sync;t.transformFromAstSync=l;const u=a.async;t.transformFromAstAsync=u},"../../node_modules/@babel/core/lib/transform-file-browser.js":function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.transformFileSync=function(){throw new Error("Transforming files is not supported in browsers")},t.transformFileAsync=function(){return Promise.reject(new Error("Transforming files is not supported in browsers"))},t.transformFile=void 0;t.transformFile=function(e,t,n){"function"===typeof t&&(n=t),n(new Error("Transforming files is not supported in browsers"),null)}},"../../node_modules/@babel/core/lib/transform.js":function(e,t,n){"use strict";function r(){const e=i(n("../../node_modules/gensync/index.js"));return r=function(){return e},e}Object.defineProperty(t,"__esModule",{value:!0}),t.transformAsync=t.transformSync=t.transform=void 0;var s=i(n("../../node_modules/@babel/core/lib/config/index.js")),o=n("../../node_modules/@babel/core/lib/transformation/index.js");function i(e){return e&&e.__esModule?e:{default:e}}const a=(0,r().default)((function*(e,t){const n=yield*(0,s.default)(t);return null===n?null:yield*(0,o.run)(n,e)}));t.transform=function(e,t,n){if("function"===typeof t&&(n=t,t=void 0),void 0===n)return a.sync(e,t);a.errback(e,t,n)};const l=a.sync;t.transformSync=l;const u=a.async;t.transformAsync=u},"../../node_modules/@babel/core/lib/transformation/block-hoist-plugin.js":function(e,t,n){"use strict";function r(){const e=o(n("../../node_modules/lodash/sortBy.js"));return r=function(){return e},e}Object.defineProperty(t,"__esModule",{value:!0}),t.default=function(){if(!i){const e=s.default.sync({babelrc:!1,configFile:!1,plugins:[a]});if(i=e?e.passes[0][0]:void 0,!i)throw new Error("Assertion failure")}return i};var s=o(n("../../node_modules/@babel/core/lib/config/index.js"));function o(e){return e&&e.__esModule?e:{default:e}}let i;const a={name:"internal.blockHoist",visitor:{Block:{exit({node:e}){let t=!1;for(let n=0;n<e.body.length;n++){const r=e.body[n];if(r&&null!=r._blockHoist){t=!0;break}}t&&(e.body=(0,r().default)(e.body,(function(e){let t=e&&e._blockHoist;return null==t&&(t=1),!0===t&&(t=2),-1*t})))}}}}},"../../node_modules/@babel/core/lib/transformation/file/file.js":function(e,t,n){"use strict";function r(){const e=c(n("../../node_modules/@babel/helpers/lib/index.js"));return r=function(){return e},e}function s(){const e=c(n("../../node_modules/@babel/traverse/lib/index.js"));return s=function(){return e},e}function o(){const e=n("../../node_modules/@babel/code-frame/lib/index.js");return o=function(){return e},e}function i(){const e=c(n("../../node_modules/@babel/types/lib/index.js"));return i=function(){return e},e}function a(){const e=n("../../node_modules/@babel/helper-module-transforms/lib/index.js");return a=function(){return e},e}function l(){const e=(t=n("../../node_modules/semver/semver.js"))&&t.__esModule?t:{default:t};var t;return l=function(){return e},e}function u(){if("function"!==typeof WeakMap)return null;var e=new WeakMap;return u=function(){return e},e}function c(e){if(e&&e.__esModule)return e;if(null===e||"object"!==typeof e&&"function"!==typeof e)return{default:e};var t=u();if(t&&t.has(e))return t.get(e);var n={},r=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var s in e)if(Object.prototype.hasOwnProperty.call(e,s)){var o=r?Object.getOwnPropertyDescriptor(e,s):null;o&&(o.get||o.set)?Object.defineProperty(n,s,o):n[s]=e[s]}return n.default=e,t&&t.set(e,n),n}Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;const d={enter(e,t){const n=e.node.loc;n&&(t.loc=n,e.stop())}};class f{constructor(e,{code:t,ast:n,inputMap:r}){this._map=new Map,this.declarations={},this.path=null,this.ast={},this.metadata={},this.code="",this.inputMap=null,this.hub={file:this,getCode:()=>this.code,getScope:()=>this.scope,addHelper:this.addHelper.bind(this),buildError:this.buildCodeFrameError.bind(this)},this.opts=e,this.code=t,this.ast=n,this.inputMap=r,this.path=s().NodePath.get({hub:this.hub,parentPath:null,parent:this.ast,container:this.ast,key:"program"}).setContext(),this.scope=this.path.scope}get shebang(){const{interpreter:e}=this.path.node;return e?e.value:""}set shebang(e){e?this.path.get("interpreter").replaceWith(i().interpreterDirective(e)):this.path.get("interpreter").remove()}set(e,t){if("helpersNamespace"===e)throw new Error("Babel 7.0.0-beta.56 has dropped support for the 'helpersNamespace' utility.If you are using @babel/plugin-external-helpers you will need to use a newer version than the one you currently have installed. If you have your own implementation, you'll want to explore using 'helperGenerator' alongside 'file.availableHelper()'.");this._map.set(e,t)}get(e){return this._map.get(e)}has(e){return this._map.has(e)}getModuleName(){return(0,a().getModuleName)(this.opts,this.opts)}addImport(){throw new Error("This API has been removed. If you're looking for this functionality in Babel 7, you should import the '@babel/helper-module-imports' module and use the functions exposed  from that module, such as 'addNamed' or 'addDefault'.")}availableHelper(e,t){let n;try{n=r().minVersion(e)}catch(s){if("BABEL_HELPER_UNKNOWN"!==s.code)throw s;return!1}return"string"!==typeof t||(l().default.valid(t)&&(t="^"+t),!l().default.intersects("<"+n,t)&&!l().default.intersects(">=8.0.0",t))}addHelper(e){const t=this.declarations[e];if(t)return i().cloneNode(t);const n=this.get("helperGenerator");if(n){const t=n(e);if(t)return t}r().ensure(e,f);const s=this.declarations[e]=this.scope.generateUidIdentifier(e),o={};for(const i of r().getDependencies(e))o[i]=this.addHelper(i);const{nodes:a,globals:l}=r().get(e,e=>o[e],s,Object.keys(this.scope.getAllBindings()));return l.forEach(e=>{this.path.scope.hasBinding(e,!0)&&this.path.scope.rename(e)}),a.forEach(e=>{e._compact=!0}),this.path.unshiftContainer("body",a),this.path.get("body").forEach(e=>{-1!==a.indexOf(e.node)&&e.isVariableDeclaration()&&this.scope.registerDeclaration(e)}),s}addTemplateObject(){throw new Error("This function has been moved into the template literal transform itself.")}buildCodeFrameError(e,t,n=SyntaxError){let r=e&&(e.loc||e._loc);if(!r&&e){const n={loc:null};(0,s().default)(e,d,this.scope,n),r=n.loc;let o="This is an error on an internal node. Probably an internal error.";r&&(o+=" Location has been estimated."),t+=` (${o})`}if(r){const{highlightCode:e=!0}=this.opts;t+="\n"+(0,o().codeFrameColumns)(this.code,{start:{line:r.start.line,column:r.start.column+1},end:r.end&&r.start.line===r.end.line?{line:r.end.line,column:r.end.column+1}:void 0},{highlightCode:e})}return new n(t)}}t.default=f},"../../node_modules/@babel/core/lib/transformation/file/generate.js":function(e,t,n){"use strict";function r(){const e=i(n("../../node_modules/convert-source-map/index.js"));return r=function(){return e},e}function s(){const e=i(n("../../node_modules/@babel/generator/lib/index.js"));return s=function(){return e},e}Object.defineProperty(t,"__esModule",{value:!0}),t.default=function(e,t){const{opts:n,ast:i,code:a,inputMap:l}=t,u=[];for(const r of e)for(const e of r){const{generatorOverride:t}=e;if(t){const e=t(i,n.generatorOpts,a,s().default);void 0!==e&&u.push(e)}}let c;if(0===u.length)c=(0,s().default)(i,n.generatorOpts,a);else{if(1!==u.length)throw new Error("More than one plugin attempted to override codegen.");if(c=u[0],"function"===typeof c.then)throw new Error("You appear to be using an async codegen plugin, which your current version of Babel does not support. If you're using a published plugin, you may need to upgrade your @babel/core version.")}let{code:d,map:f}=c;f&&l&&(f=(0,o.default)(l.toObject(),f));"inline"!==n.sourceMaps&&"both"!==n.sourceMaps||(d+="\n"+r().default.fromObject(f).toComment());"inline"===n.sourceMaps&&(f=null);return{outputCode:d,outputMap:f}};var o=i(n("../../node_modules/@babel/core/lib/transformation/file/merge-map.js"));function i(e){return e&&e.__esModule?e:{default:e}}},"../../node_modules/@babel/core/lib/transformation/file/merge-map.js":function(e,t,n){"use strict";function r(){const e=(t=n("../../node_modules/@babel/core/node_modules/source-map/source-map.js"))&&t.__esModule?t:{default:t};var t;return r=function(){return e},e}function s(e){return`${e.line}/${e.columnStart}`}function o(e){const t=new(r().default.SourceMapConsumer)(Object.assign({},e,{sourceRoot:null})),n=new Map,s=new Map;let o=null;return t.computeColumnSpans(),t.eachMapping(e=>{if(null===e.originalLine)return;let r=n.get(e.source);r||(r={path:e.source,content:t.sourceContentFor(e.source,!0)},n.set(e.source,r));let i=s.get(r);i||(i={source:r,mappings:[]},s.set(r,i));const a={line:e.originalLine,columnStart:e.originalColumn,columnEnd:1/0,name:e.name};o&&o.source===r&&o.mapping.line===e.originalLine&&(o.mapping.columnEnd=e.originalColumn),o={source:r,mapping:a},i.mappings.push({original:a,generated:t.allGeneratedPositionsFor({source:e.source,line:e.originalLine,column:e.originalColumn}).map(e=>({line:e.line,columnStart:e.column,columnEnd:e.lastColumn+1}))})},null,r().default.SourceMapConsumer.ORIGINAL_ORDER),{file:e.file,sourceRoot:e.sourceRoot,sources:Array.from(s.values())}}Object.defineProperty(t,"__esModule",{value:!0}),t.default=function(e,t){const n=o(e),i=o(t),a=new(r().default.SourceMapGenerator);for(const{source:r}of n.sources)"string"===typeof r.content&&a.setSourceContent(r.path,r.content);if(1===i.sources.length){const e=i.sources[0],t=new Map;!function(e,t){for(const{source:n,mappings:r}of e.sources)for(const{original:e,generated:s}of r)for(const r of s)t(r,e,n)}(n,(n,r,o)=>{!function(e,t,n){const r=function({mappings:e},{line:t,columnStart:n,columnEnd:r}){return function(e,t){const n=function(e,t){let n=0,r=e.length;for(;n<r;){const s=Math.floor((n+r)/2),o=e[s],i=t(o);if(0===i){n=s;break}i>=0?r=s:n=s+1}let s=n;if(s<e.length){for(;s>=0&&t(e[s])>=0;)s--;return s+1}return s}(e,t),r=[];for(let s=n;s<e.length&&0===t(e[s]);s++)r.push(e[s]);return r}(e,({original:e})=>t>e.line?-1:t<e.line?1:n>=e.columnEnd?-1:r<=e.columnStart?1:0)}(e,t);for(const{generated:s}of r)for(const e of s)n(e)}(e,n,e=>{const n=s(e);t.has(n)||(t.set(n,e),a.addMapping({source:o.path,original:{line:r.line,column:r.columnStart},generated:{line:e.line,column:e.columnStart},name:r.name}))})});for(const n of t.values()){if(n.columnEnd===1/0)continue;const e={line:n.line,columnStart:n.columnEnd},r=s(e);t.has(r)||a.addMapping({generated:{line:e.line,column:e.columnStart}})}}const l=a.toJSON();"string"===typeof n.sourceRoot&&(l.sourceRoot=n.sourceRoot);return l}},"../../node_modules/@babel/core/lib/transformation/index.js":function(e,t,n){"use strict";function r(){const e=u(n("../../node_modules/@babel/traverse/lib/index.js"));return r=function(){return e},e}Object.defineProperty(t,"__esModule",{value:!0}),t.run=function*(e,t,n){const u=yield*(0,a.default)(e.passes,(0,i.default)(e),t,n),d=u.opts;try{yield*function*(e,t){for(const n of t){const t=[],i=[],a=[];for(const r of n.concat([(0,o.default)()])){const n=new s.default(e,r.key,r.options);t.push([r,n]),i.push(n),a.push(r.visitor)}for(const[n,r]of t){const t=n.pre;if(t){const n=t.call(r,e);if(yield*[],c(n))throw new Error("You appear to be using an plugin with an async .pre, which your current version of Babel does not support. If you're using a published plugin, you may need to upgrade your @babel/core version.")}}const l=r().default.visitors.merge(a,i,e.opts.wrapPluginVisitorMethod);(0,r().default)(e.ast,l,e.scope);for(const[n,r]of t){const t=n.post;if(t){const n=t.call(r,e);if(yield*[],c(n))throw new Error("You appear to be using an plugin with an async .post, which your current version of Babel does not support. If you're using a published plugin, you may need to upgrade your @babel/core version.")}}}}(u,e.passes)}catch(y){var f;throw y.message=`${null!=(f=d.filename)?f:"unknown"}: ${y.message}`,y.code||(y.code="BABEL_TRANSFORM_ERROR"),y}let p,h;try{!1!==d.code&&({outputCode:p,outputMap:h}=(0,l.default)(e.passes,u))}catch(y){var m;throw y.message=`${null!=(m=d.filename)?m:"unknown"}: ${y.message}`,y.code||(y.code="BABEL_GENERATE_ERROR"),y}return{metadata:u.metadata,options:d,ast:!0===d.ast?u.ast:null,code:void 0===p?null:p,map:void 0===h?null:h,sourceType:u.ast.program.sourceType}};var s=u(n("../../node_modules/@babel/core/lib/transformation/plugin-pass.js")),o=u(n("../../node_modules/@babel/core/lib/transformation/block-hoist-plugin.js")),i=u(n("../../node_modules/@babel/core/lib/transformation/normalize-opts.js")),a=u(n("../../node_modules/@babel/core/lib/transformation/normalize-file.js")),l=u(n("../../node_modules/@babel/core/lib/transformation/file/generate.js"));function u(e){return e&&e.__esModule?e:{default:e}}function c(e){return!!e&&("object"===typeof e||"function"===typeof e)&&!!e.then&&"function"===typeof e.then}},"../../node_modules/@babel/core/lib/transformation/normalize-file.js":function(e,t,n){"use strict";function r(){const e=f(n("../../standalone-packages/codesandbox-browserfs/dist/shims/fs.js"));return r=function(){return e},e}function s(){const e=f(n("../../node_modules/path-browserify/index.js"));return s=function(){return e},e}function o(){const e=f(n("../../node_modules/debug/src/browser.js"));return o=function(){return e},e}function i(){const e=f(n("../../node_modules/lodash/cloneDeep.js"));return i=function(){return e},e}function a(){const e=function(e){if(e&&e.__esModule)return e;if(null===e||"object"!==typeof e&&"function"!==typeof e)return{default:e};var t=d();if(t&&t.has(e))return t.get(e);var n={},r=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var s in e)if(Object.prototype.hasOwnProperty.call(e,s)){var o=r?Object.getOwnPropertyDescriptor(e,s):null;o&&(o.get||o.set)?Object.defineProperty(n,s,o):n[s]=e[s]}n.default=e,t&&t.set(e,n);return n}(n("../../node_modules/@babel/types/lib/index.js"));return a=function(){return e},e}function l(){const e=f(n("../../node_modules/convert-source-map/index.js"));return l=function(){return e},e}Object.defineProperty(t,"__esModule",{value:!0}),t.default=function*(e,t,n,o){if(n=""+(n||""),o){if("Program"===o.type)o=a().file(o,[],[]);else if("File"!==o.type)throw new Error("AST root must be a Program or File node");o=(0,i().default)(o)}else o=yield*(0,c.default)(e,t,n);let d=null;if(!1!==t.inputSourceMap){if("object"===typeof t.inputSourceMap&&(d=l().default.fromObject(t.inputSourceMap)),!d){const e=b(h,o);if(e)try{d=l().default.fromComment(e)}catch(f){p("discarding unknown inline input sourcemap",f)}}if(!d){const e=b(m,o);if("string"===typeof t.filename&&e)try{const n=m.exec(e),o=r().default.readFileSync(s().default.resolve(s().default.dirname(t.filename),n[1]));o.length>1e6?p("skip merging input map > 1 MB"):d=l().default.fromJSON(o)}catch(f){p("discarding unknown file input sourcemap",f)}else e&&p("discarding un-loadable file input sourcemap")}}return new u.default(t,{code:n,ast:o,inputMap:d})};var u=f(n("../../node_modules/@babel/core/lib/transformation/file/file.js")),c=f(n("../../node_modules/@babel/core/lib/parser/index.js"));function d(){if("function"!==typeof WeakMap)return null;var e=new WeakMap;return d=function(){return e},e}function f(e){return e&&e.__esModule?e:{default:e}}const p=(0,o().default)("babel:transform:file");const h=/^[@#]\s+sourceMappingURL=data:(?:application|text)\/json;(?:charset[:=]\S+?;)?base64,(?:.*)$/,m=/^[@#][ \t]+sourceMappingURL=([^\s'"`]+)[ \t]*$/;function y(e,t,n){return t&&(t=t.filter(({value:t})=>!e.test(t)||(n=t,!1))),[t,n]}function b(e,t){let n=null;return a().traverseFast(t,t=>{[t.leadingComments,n]=y(e,t.leadingComments,n),[t.innerComments,n]=y(e,t.innerComments,n),[t.trailingComments,n]=y(e,t.trailingComments,n)}),n}},"../../node_modules/@babel/core/lib/transformation/normalize-opts.js":function(e,t,n){"use strict";function r(){const e=(t=n("../../node_modules/path-browserify/index.js"))&&t.__esModule?t:{default:t};var t;return r=function(){return e},e}Object.defineProperty(t,"__esModule",{value:!0}),t.default=function(e){const{filename:t,cwd:n,filenameRelative:s=("string"===typeof t?r().default.relative(n,t):"unknown"),sourceType:o="module",inputSourceMap:i,sourceMaps:a=!!i,moduleRoot:l,sourceRoot:u=l,sourceFileName:c=r().default.basename(s),comments:d=!0,compact:f="auto"}=e.options,p=e.options,h=Object.assign({},p,{parserOpts:Object.assign({sourceType:".mjs"===r().default.extname(s)?"module":o,sourceFileName:t,plugins:[]},p.parserOpts),generatorOpts:Object.assign({filename:t,auxiliaryCommentBefore:p.auxiliaryCommentBefore,auxiliaryCommentAfter:p.auxiliaryCommentAfter,retainLines:p.retainLines,comments:d,shouldPrintComment:p.shouldPrintComment,compact:f,minified:p.minified,sourceMaps:a,sourceRoot:u,sourceFileName:c},p.generatorOpts)});for(const r of e.passes)for(const e of r)e.manipulateOptions&&e.manipulateOptions(h,h.parserOpts);return h}},"../../node_modules/@babel/core/lib/transformation/plugin-pass.js":function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;t.default=class{constructor(e,t,n){this._map=new Map,this.key=t,this.file=e,this.opts=n||{},this.cwd=e.opts.cwd,this.filename=e.opts.filename}set(e,t){this._map.set(e,t)}get(e){return this._map.get(e)}availableHelper(e,t){return this.file.availableHelper(e,t)}addHelper(e){return this.file.addHelper(e)}addImport(){return this.file.addImport()}getModuleName(){return this.file.getModuleName()}buildCodeFrameError(e,t,n){return this.file.buildCodeFrameError(e,t,n)}}},"../../node_modules/@babel/core/node_modules/source-map/lib/array-set.js":function(e,t,n){var r=n("../../node_modules/@babel/core/node_modules/source-map/lib/util.js"),s=Object.prototype.hasOwnProperty,o="undefined"!==typeof Map;function i(){this._array=[],this._set=o?new Map:Object.create(null)}i.fromArray=function(e,t){for(var n=new i,r=0,s=e.length;r<s;r++)n.add(e[r],t);return n},i.prototype.size=function(){return o?this._set.size:Object.getOwnPropertyNames(this._set).length},i.prototype.add=function(e,t){var n=o?e:r.toSetString(e),i=o?this.has(e):s.call(this._set,n),a=this._array.length;i&&!t||this._array.push(e),i||(o?this._set.set(e,a):this._set[n]=a)},i.prototype.has=function(e){if(o)return this._set.has(e);var t=r.toSetString(e);return s.call(this._set,t)},i.prototype.indexOf=function(e){if(o){var t=this._set.get(e);if(t>=0)return t}else{var n=r.toSetString(e);if(s.call(this._set,n))return this._set[n]}throw new Error('"'+e+'" is not in the set.')},i.prototype.at=function(e){if(e>=0&&e<this._array.length)return this._array[e];throw new Error("No element indexed by "+e)},i.prototype.toArray=function(){return this._array.slice()},t.ArraySet=i},"../../node_modules/@babel/core/node_modules/source-map/lib/base64-vlq.js":function(e,t,n){var r=n("../../node_modules/@babel/core/node_modules/source-map/lib/base64.js");t.encode=function(e){var t,n="",s=function(e){return e<0?1+(-e<<1):0+(e<<1)}(e);do{t=31&s,(s>>>=5)>0&&(t|=32),n+=r.encode(t)}while(s>0);return n},t.decode=function(e,t,n){var s,o,i=e.length,a=0,l=0;do{if(t>=i)throw new Error("Expected more digits in base 64 VLQ value.");if(-1===(o=r.decode(e.charCodeAt(t++))))throw new Error("Invalid base64 digit: "+e.charAt(t-1));s=!!(32&o),a+=(o&=31)<<l,l+=5}while(s);n.value=function(e){var t=e>>1;return 1===(1&e)?-t:t}(a),n.rest=t}},"../../node_modules/@babel/core/node_modules/source-map/lib/base64.js":function(e,t){var n="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/".split("");t.encode=function(e){if(0<=e&&e<n.length)return n[e];throw new TypeError("Must be between 0 and 63: "+e)},t.decode=function(e){return 65<=e&&e<=90?e-65:97<=e&&e<=122?e-97+26:48<=e&&e<=57?e-48+52:43==e?62:47==e?63:-1}},"../../node_modules/@babel/core/node_modules/source-map/lib/binary-search.js":function(e,t){t.GREATEST_LOWER_BOUND=1,t.LEAST_UPPER_BOUND=2,t.search=function(e,n,r,s){if(0===n.length)return-1;var o=function e(n,r,s,o,i,a){var l=Math.floor((r-n)/2)+n,u=i(s,o[l],!0);return 0===u?l:u>0?r-l>1?e(l,r,s,o,i,a):a==t.LEAST_UPPER_BOUND?r<o.length?r:-1:l:l-n>1?e(n,l,s,o,i,a):a==t.LEAST_UPPER_BOUND?l:n<0?-1:n}(-1,n.length,e,n,r,s||t.GREATEST_LOWER_BOUND);if(o<0)return-1;for(;o-1>=0&&0===r(n[o],n[o-1],!0);)--o;return o}},"../../node_modules/@babel/core/node_modules/source-map/lib/mapping-list.js":function(e,t,n){var r=n("../../node_modules/@babel/core/node_modules/source-map/lib/util.js");function s(){this._array=[],this._sorted=!0,this._last={generatedLine:-1,generatedColumn:0}}s.prototype.unsortedForEach=function(e,t){this._array.forEach(e,t)},s.prototype.add=function(e){!function(e,t){var n=e.generatedLine,s=t.generatedLine,o=e.generatedColumn,i=t.generatedColumn;return s>n||s==n&&i>=o||r.compareByGeneratedPositionsInflated(e,t)<=0}(this._last,e)?(this._sorted=!1,this._array.push(e)):(this._last=e,this._array.push(e))},s.prototype.toArray=function(){return this._sorted||(this._array.sort(r.compareByGeneratedPositionsInflated),this._sorted=!0),this._array},t.MappingList=s},"../../node_modules/@babel/core/node_modules/source-map/lib/quick-sort.js":function(e,t){function n(e,t,n){var r=e[t];e[t]=e[n],e[n]=r}function r(e,t,s,o){if(s<o){var i=s-1;n(e,(c=s,d=o,Math.round(c+Math.random()*(d-c))),o);for(var a=e[o],l=s;l<o;l++)t(e[l],a)<=0&&n(e,i+=1,l);n(e,i+1,l);var u=i+1;r(e,t,s,u-1),r(e,t,u+1,o)}var c,d}t.quickSort=function(e,t){r(e,t,0,e.length-1)}},"../../node_modules/@babel/core/node_modules/source-map/lib/source-map-consumer.js":function(e,t,n){var r=n("../../node_modules/@babel/core/node_modules/source-map/lib/util.js"),s=n("../../node_modules/@babel/core/node_modules/source-map/lib/binary-search.js"),o=n("../../node_modules/@babel/core/node_modules/source-map/lib/array-set.js").ArraySet,i=n("../../node_modules/@babel/core/node_modules/source-map/lib/base64-vlq.js"),a=n("../../node_modules/@babel/core/node_modules/source-map/lib/quick-sort.js").quickSort;function l(e){var t=e;return"string"===typeof e&&(t=JSON.parse(e.replace(/^\)\]\}'/,""))),null!=t.sections?new d(t):new u(t)}function u(e){var t=e;"string"===typeof e&&(t=JSON.parse(e.replace(/^\)\]\}'/,"")));var n=r.getArg(t,"version"),s=r.getArg(t,"sources"),i=r.getArg(t,"names",[]),a=r.getArg(t,"sourceRoot",null),l=r.getArg(t,"sourcesContent",null),u=r.getArg(t,"mappings"),c=r.getArg(t,"file",null);if(n!=this._version)throw new Error("Unsupported version: "+n);s=s.map(String).map(r.normalize).map((function(e){return a&&r.isAbsolute(a)&&r.isAbsolute(e)?r.relative(a,e):e})),this._names=o.fromArray(i.map(String),!0),this._sources=o.fromArray(s,!0),this.sourceRoot=a,this.sourcesContent=l,this._mappings=u,this.file=c}function c(){this.generatedLine=0,this.generatedColumn=0,this.source=null,this.originalLine=null,this.originalColumn=null,this.name=null}function d(e){var t=e;"string"===typeof e&&(t=JSON.parse(e.replace(/^\)\]\}'/,"")));var n=r.getArg(t,"version"),s=r.getArg(t,"sections");if(n!=this._version)throw new Error("Unsupported version: "+n);this._sources=new o,this._names=new o;var i={line:-1,column:0};this._sections=s.map((function(e){if(e.url)throw new Error("Support for url field in sections not implemented.");var t=r.getArg(e,"offset"),n=r.getArg(t,"line"),s=r.getArg(t,"column");if(n<i.line||n===i.line&&s<i.column)throw new Error("Section offsets must be ordered and non-overlapping.");return i=t,{generatedOffset:{generatedLine:n+1,generatedColumn:s+1},consumer:new l(r.getArg(e,"map"))}}))}l.fromSourceMap=function(e){return u.fromSourceMap(e)},l.prototype._version=3,l.prototype.__generatedMappings=null,Object.defineProperty(l.prototype,"_generatedMappings",{get:function(){return this.__generatedMappings||this._parseMappings(this._mappings,this.sourceRoot),this.__generatedMappings}}),l.prototype.__originalMappings=null,Object.defineProperty(l.prototype,"_originalMappings",{get:function(){return this.__originalMappings||this._parseMappings(this._mappings,this.sourceRoot),this.__originalMappings}}),l.prototype._charIsMappingSeparator=function(e,t){var n=e.charAt(t);return";"===n||","===n},l.prototype._parseMappings=function(e,t){throw new Error("Subclasses must implement _parseMappings")},l.GENERATED_ORDER=1,l.ORIGINAL_ORDER=2,l.GREATEST_LOWER_BOUND=1,l.LEAST_UPPER_BOUND=2,l.prototype.eachMapping=function(e,t,n){var s,o=t||null;switch(n||l.GENERATED_ORDER){case l.GENERATED_ORDER:s=this._generatedMappings;break;case l.ORIGINAL_ORDER:s=this._originalMappings;break;default:throw new Error("Unknown order of iteration.")}var i=this.sourceRoot;s.map((function(e){var t=null===e.source?null:this._sources.at(e.source);return null!=t&&null!=i&&(t=r.join(i,t)),{source:t,generatedLine:e.generatedLine,generatedColumn:e.generatedColumn,originalLine:e.originalLine,originalColumn:e.originalColumn,name:null===e.name?null:this._names.at(e.name)}}),this).forEach(e,o)},l.prototype.allGeneratedPositionsFor=function(e){var t=r.getArg(e,"line"),n={source:r.getArg(e,"source"),originalLine:t,originalColumn:r.getArg(e,"column",0)};if(null!=this.sourceRoot&&(n.source=r.relative(this.sourceRoot,n.source)),!this._sources.has(n.source))return[];n.source=this._sources.indexOf(n.source);var o=[],i=this._findMapping(n,this._originalMappings,"originalLine","originalColumn",r.compareByOriginalPositions,s.LEAST_UPPER_BOUND);if(i>=0){var a=this._originalMappings[i];if(void 0===e.column)for(var l=a.originalLine;a&&a.originalLine===l;)o.push({line:r.getArg(a,"generatedLine",null),column:r.getArg(a,"generatedColumn",null),lastColumn:r.getArg(a,"lastGeneratedColumn",null)}),a=this._originalMappings[++i];else for(var u=a.originalColumn;a&&a.originalLine===t&&a.originalColumn==u;)o.push({line:r.getArg(a,"generatedLine",null),column:r.getArg(a,"generatedColumn",null),lastColumn:r.getArg(a,"lastGeneratedColumn",null)}),a=this._originalMappings[++i]}return o},t.SourceMapConsumer=l,u.prototype=Object.create(l.prototype),u.prototype.consumer=l,u.fromSourceMap=function(e){var t=Object.create(u.prototype),n=t._names=o.fromArray(e._names.toArray(),!0),s=t._sources=o.fromArray(e._sources.toArray(),!0);t.sourceRoot=e._sourceRoot,t.sourcesContent=e._generateSourcesContent(t._sources.toArray(),t.sourceRoot),t.file=e._file;for(var i=e._mappings.toArray().slice(),l=t.__generatedMappings=[],d=t.__originalMappings=[],f=0,p=i.length;f<p;f++){var h=i[f],m=new c;m.generatedLine=h.generatedLine,m.generatedColumn=h.generatedColumn,h.source&&(m.source=s.indexOf(h.source),m.originalLine=h.originalLine,m.originalColumn=h.originalColumn,h.name&&(m.name=n.indexOf(h.name)),d.push(m)),l.push(m)}return a(t.__originalMappings,r.compareByOriginalPositions),t},u.prototype._version=3,Object.defineProperty(u.prototype,"sources",{get:function(){return this._sources.toArray().map((function(e){return null!=this.sourceRoot?r.join(this.sourceRoot,e):e}),this)}}),u.prototype._parseMappings=function(e,t){for(var n,s,o,l,u,d=1,f=0,p=0,h=0,m=0,y=0,b=e.length,g=0,v={},_={},j=[],x=[];g<b;)if(";"===e.charAt(g))d++,g++,f=0;else if(","===e.charAt(g))g++;else{for((n=new c).generatedLine=d,l=g;l<b&&!this._charIsMappingSeparator(e,l);l++);if(o=v[s=e.slice(g,l)])g+=s.length;else{for(o=[];g<l;)i.decode(e,g,_),u=_.value,g=_.rest,o.push(u);if(2===o.length)throw new Error("Found a source, but no line and column");if(3===o.length)throw new Error("Found a source and line, but no column");v[s]=o}n.generatedColumn=f+o[0],f=n.generatedColumn,o.length>1&&(n.source=m+o[1],m+=o[1],n.originalLine=p+o[2],p=n.originalLine,n.originalLine+=1,n.originalColumn=h+o[3],h=n.originalColumn,o.length>4&&(n.name=y+o[4],y+=o[4])),x.push(n),"number"===typeof n.originalLine&&j.push(n)}a(x,r.compareByGeneratedPositionsDeflated),this.__generatedMappings=x,a(j,r.compareByOriginalPositions),this.__originalMappings=j},u.prototype._findMapping=function(e,t,n,r,o,i){if(e[n]<=0)throw new TypeError("Line must be greater than or equal to 1, got "+e[n]);if(e[r]<0)throw new TypeError("Column must be greater than or equal to 0, got "+e[r]);return s.search(e,t,o,i)},u.prototype.computeColumnSpans=function(){for(var e=0;e<this._generatedMappings.length;++e){var t=this._generatedMappings[e];if(e+1<this._generatedMappings.length){var n=this._generatedMappings[e+1];if(t.generatedLine===n.generatedLine){t.lastGeneratedColumn=n.generatedColumn-1;continue}}t.lastGeneratedColumn=1/0}},u.prototype.originalPositionFor=function(e){var t={generatedLine:r.getArg(e,"line"),generatedColumn:r.getArg(e,"column")},n=this._findMapping(t,this._generatedMappings,"generatedLine","generatedColumn",r.compareByGeneratedPositionsDeflated,r.getArg(e,"bias",l.GREATEST_LOWER_BOUND));if(n>=0){var s=this._generatedMappings[n];if(s.generatedLine===t.generatedLine){var o=r.getArg(s,"source",null);null!==o&&(o=this._sources.at(o),null!=this.sourceRoot&&(o=r.join(this.sourceRoot,o)));var i=r.getArg(s,"name",null);return null!==i&&(i=this._names.at(i)),{source:o,line:r.getArg(s,"originalLine",null),column:r.getArg(s,"originalColumn",null),name:i}}}return{source:null,line:null,column:null,name:null}},u.prototype.hasContentsOfAllSources=function(){return!!this.sourcesContent&&(this.sourcesContent.length>=this._sources.size()&&!this.sourcesContent.some((function(e){return null==e})))},u.prototype.sourceContentFor=function(e,t){if(!this.sourcesContent)return null;if(null!=this.sourceRoot&&(e=r.relative(this.sourceRoot,e)),this._sources.has(e))return this.sourcesContent[this._sources.indexOf(e)];var n;if(null!=this.sourceRoot&&(n=r.urlParse(this.sourceRoot))){var s=e.replace(/^file:\/\//,"");if("file"==n.scheme&&this._sources.has(s))return this.sourcesContent[this._sources.indexOf(s)];if((!n.path||"/"==n.path)&&this._sources.has("/"+e))return this.sourcesContent[this._sources.indexOf("/"+e)]}if(t)return null;throw new Error('"'+e+'" is not in the SourceMap.')},u.prototype.generatedPositionFor=function(e){var t=r.getArg(e,"source");if(null!=this.sourceRoot&&(t=r.relative(this.sourceRoot,t)),!this._sources.has(t))return{line:null,column:null,lastColumn:null};var n={source:t=this._sources.indexOf(t),originalLine:r.getArg(e,"line"),originalColumn:r.getArg(e,"column")},s=this._findMapping(n,this._originalMappings,"originalLine","originalColumn",r.compareByOriginalPositions,r.getArg(e,"bias",l.GREATEST_LOWER_BOUND));if(s>=0){var o=this._originalMappings[s];if(o.source===n.source)return{line:r.getArg(o,"generatedLine",null),column:r.getArg(o,"generatedColumn",null),lastColumn:r.getArg(o,"lastGeneratedColumn",null)}}return{line:null,column:null,lastColumn:null}},t.BasicSourceMapConsumer=u,d.prototype=Object.create(l.prototype),d.prototype.constructor=l,d.prototype._version=3,Object.defineProperty(d.prototype,"sources",{get:function(){for(var e=[],t=0;t<this._sections.length;t++)for(var n=0;n<this._sections[t].consumer.sources.length;n++)e.push(this._sections[t].consumer.sources[n]);return e}}),d.prototype.originalPositionFor=function(e){var t={generatedLine:r.getArg(e,"line"),generatedColumn:r.getArg(e,"column")},n=s.search(t,this._sections,(function(e,t){var n=e.generatedLine-t.generatedOffset.generatedLine;return n||e.generatedColumn-t.generatedOffset.generatedColumn})),o=this._sections[n];return o?o.consumer.originalPositionFor({line:t.generatedLine-(o.generatedOffset.generatedLine-1),column:t.generatedColumn-(o.generatedOffset.generatedLine===t.generatedLine?o.generatedOffset.generatedColumn-1:0),bias:e.bias}):{source:null,line:null,column:null,name:null}},d.prototype.hasContentsOfAllSources=function(){return this._sections.every((function(e){return e.consumer.hasContentsOfAllSources()}))},d.prototype.sourceContentFor=function(e,t){for(var n=0;n<this._sections.length;n++){var r=this._sections[n].consumer.sourceContentFor(e,!0);if(r)return r}if(t)return null;throw new Error('"'+e+'" is not in the SourceMap.')},d.prototype.generatedPositionFor=function(e){for(var t=0;t<this._sections.length;t++){var n=this._sections[t];if(-1!==n.consumer.sources.indexOf(r.getArg(e,"source"))){var s=n.consumer.generatedPositionFor(e);if(s)return{line:s.line+(n.generatedOffset.generatedLine-1),column:s.column+(n.generatedOffset.generatedLine===s.line?n.generatedOffset.generatedColumn-1:0)}}}return{line:null,column:null}},d.prototype._parseMappings=function(e,t){this.__generatedMappings=[],this.__originalMappings=[];for(var n=0;n<this._sections.length;n++)for(var s=this._sections[n],o=s.consumer._generatedMappings,i=0;i<o.length;i++){var l=o[i],u=s.consumer._sources.at(l.source);null!==s.consumer.sourceRoot&&(u=r.join(s.consumer.sourceRoot,u)),this._sources.add(u),u=this._sources.indexOf(u);var c=s.consumer._names.at(l.name);this._names.add(c),c=this._names.indexOf(c);var d={source:u,generatedLine:l.generatedLine+(s.generatedOffset.generatedLine-1),generatedColumn:l.generatedColumn+(s.generatedOffset.generatedLine===l.generatedLine?s.generatedOffset.generatedColumn-1:0),originalLine:l.originalLine,originalColumn:l.originalColumn,name:c};this.__generatedMappings.push(d),"number"===typeof d.originalLine&&this.__originalMappings.push(d)}a(this.__generatedMappings,r.compareByGeneratedPositionsDeflated),a(this.__originalMappings,r.compareByOriginalPositions)},t.IndexedSourceMapConsumer=d},"../../node_modules/@babel/core/node_modules/source-map/lib/source-map-generator.js":function(e,t,n){var r=n("../../node_modules/@babel/core/node_modules/source-map/lib/base64-vlq.js"),s=n("../../node_modules/@babel/core/node_modules/source-map/lib/util.js"),o=n("../../node_modules/@babel/core/node_modules/source-map/lib/array-set.js").ArraySet,i=n("../../node_modules/@babel/core/node_modules/source-map/lib/mapping-list.js").MappingList;function a(e){e||(e={}),this._file=s.getArg(e,"file",null),this._sourceRoot=s.getArg(e,"sourceRoot",null),this._skipValidation=s.getArg(e,"skipValidation",!1),this._sources=new o,this._names=new o,this._mappings=new i,this._sourcesContents=null}a.prototype._version=3,a.fromSourceMap=function(e){var t=e.sourceRoot,n=new a({file:e.file,sourceRoot:t});return e.eachMapping((function(e){var r={generated:{line:e.generatedLine,column:e.generatedColumn}};null!=e.source&&(r.source=e.source,null!=t&&(r.source=s.relative(t,r.source)),r.original={line:e.originalLine,column:e.originalColumn},null!=e.name&&(r.name=e.name)),n.addMapping(r)})),e.sources.forEach((function(t){var r=e.sourceContentFor(t);null!=r&&n.setSourceContent(t,r)})),n},a.prototype.addMapping=function(e){var t=s.getArg(e,"generated"),n=s.getArg(e,"original",null),r=s.getArg(e,"source",null),o=s.getArg(e,"name",null);this._skipValidation||this._validateMapping(t,n,r,o),null!=r&&(r=String(r),this._sources.has(r)||this._sources.add(r)),null!=o&&(o=String(o),this._names.has(o)||this._names.add(o)),this._mappings.add({generatedLine:t.line,generatedColumn:t.column,originalLine:null!=n&&n.line,originalColumn:null!=n&&n.column,source:r,name:o})},a.prototype.setSourceContent=function(e,t){var n=e;null!=this._sourceRoot&&(n=s.relative(this._sourceRoot,n)),null!=t?(this._sourcesContents||(this._sourcesContents=Object.create(null)),this._sourcesContents[s.toSetString(n)]=t):this._sourcesContents&&(delete this._sourcesContents[s.toSetString(n)],0===Object.keys(this._sourcesContents).length&&(this._sourcesContents=null))},a.prototype.applySourceMap=function(e,t,n){var r=t;if(null==t){if(null==e.file)throw new Error('SourceMapGenerator.prototype.applySourceMap requires either an explicit source file, or the source map\'s "file" property. Both were omitted.');r=e.file}var i=this._sourceRoot;null!=i&&(r=s.relative(i,r));var a=new o,l=new o;this._mappings.unsortedForEach((function(t){if(t.source===r&&null!=t.originalLine){var o=e.originalPositionFor({line:t.originalLine,column:t.originalColumn});null!=o.source&&(t.source=o.source,null!=n&&(t.source=s.join(n,t.source)),null!=i&&(t.source=s.relative(i,t.source)),t.originalLine=o.line,t.originalColumn=o.column,null!=o.name&&(t.name=o.name))}var u=t.source;null==u||a.has(u)||a.add(u);var c=t.name;null==c||l.has(c)||l.add(c)}),this),this._sources=a,this._names=l,e.sources.forEach((function(t){var r=e.sourceContentFor(t);null!=r&&(null!=n&&(t=s.join(n,t)),null!=i&&(t=s.relative(i,t)),this.setSourceContent(t,r))}),this)},a.prototype._validateMapping=function(e,t,n,r){if(t&&"number"!==typeof t.line&&"number"!==typeof t.column)throw new Error("original.line and original.column are not numbers -- you probably meant to omit the original mapping entirely and only map the generated position. If so, pass null for the original mapping instead of an object with empty or null values.");if((!(e&&"line"in e&&"column"in e&&e.line>0&&e.column>=0)||t||n||r)&&!(e&&"line"in e&&"column"in e&&t&&"line"in t&&"column"in t&&e.line>0&&e.column>=0&&t.line>0&&t.column>=0&&n))throw new Error("Invalid mapping: "+JSON.stringify({generated:e,source:n,original:t,name:r}))},a.prototype._serializeMappings=function(){for(var e,t,n,o,i=0,a=1,l=0,u=0,c=0,d=0,f="",p=this._mappings.toArray(),h=0,m=p.length;h<m;h++){if(e="",(t=p[h]).generatedLine!==a)for(i=0;t.generatedLine!==a;)e+=";",a++;else if(h>0){if(!s.compareByGeneratedPositionsInflated(t,p[h-1]))continue;e+=","}e+=r.encode(t.generatedColumn-i),i=t.generatedColumn,null!=t.source&&(o=this._sources.indexOf(t.source),e+=r.encode(o-d),d=o,e+=r.encode(t.originalLine-1-u),u=t.originalLine-1,e+=r.encode(t.originalColumn-l),l=t.originalColumn,null!=t.name&&(n=this._names.indexOf(t.name),e+=r.encode(n-c),c=n)),f+=e}return f},a.prototype._generateSourcesContent=function(e,t){return e.map((function(e){if(!this._sourcesContents)return null;null!=t&&(e=s.relative(t,e));var n=s.toSetString(e);return Object.prototype.hasOwnProperty.call(this._sourcesContents,n)?this._sourcesContents[n]:null}),this)},a.prototype.toJSON=function(){var e={version:this._version,sources:this._sources.toArray(),names:this._names.toArray(),mappings:this._serializeMappings()};return null!=this._file&&(e.file=this._file),null!=this._sourceRoot&&(e.sourceRoot=this._sourceRoot),this._sourcesContents&&(e.sourcesContent=this._generateSourcesContent(e.sources,e.sourceRoot)),e},a.prototype.toString=function(){return JSON.stringify(this.toJSON())},t.SourceMapGenerator=a},"../../node_modules/@babel/core/node_modules/source-map/lib/source-node.js":function(e,t,n){var r=n("../../node_modules/@babel/core/node_modules/source-map/lib/source-map-generator.js").SourceMapGenerator,s=n("../../node_modules/@babel/core/node_modules/source-map/lib/util.js"),o=/(\r?\n)/,i="$$$isSourceNode$$$";function a(e,t,n,r,s){this.children=[],this.sourceContents={},this.line=null==e?null:e,this.column=null==t?null:t,this.source=null==n?null:n,this.name=null==s?null:s,this[i]=!0,null!=r&&this.add(r)}a.fromStringWithSourceMap=function(e,t,n){var r=new a,i=e.split(o),l=0,u=function(){return e()+(e()||"");function e(){return l<i.length?i[l++]:void 0}},c=1,d=0,f=null;return t.eachMapping((function(e){if(null!==f){if(!(c<e.generatedLine)){var t=(n=i[l]).substr(0,e.generatedColumn-d);return i[l]=n.substr(e.generatedColumn-d),d=e.generatedColumn,p(f,t),void(f=e)}p(f,u()),c++,d=0}for(;c<e.generatedLine;)r.add(u()),c++;if(d<e.generatedColumn){var n=i[l];r.add(n.substr(0,e.generatedColumn)),i[l]=n.substr(e.generatedColumn),d=e.generatedColumn}f=e}),this),l<i.length&&(f&&p(f,u()),r.add(i.splice(l).join(""))),t.sources.forEach((function(e){var o=t.sourceContentFor(e);null!=o&&(null!=n&&(e=s.join(n,e)),r.setSourceContent(e,o))})),r;function p(e,t){if(null===e||void 0===e.source)r.add(t);else{var o=n?s.join(n,e.source):e.source;r.add(new a(e.originalLine,e.originalColumn,o,t,e.name))}}},a.prototype.add=function(e){if(Array.isArray(e))e.forEach((function(e){this.add(e)}),this);else{if(!e[i]&&"string"!==typeof e)throw new TypeError("Expected a SourceNode, string, or an array of SourceNodes and strings. Got "+e);e&&this.children.push(e)}return this},a.prototype.prepend=function(e){if(Array.isArray(e))for(var t=e.length-1;t>=0;t--)this.prepend(e[t]);else{if(!e[i]&&"string"!==typeof e)throw new TypeError("Expected a SourceNode, string, or an array of SourceNodes and strings. Got "+e);this.children.unshift(e)}return this},a.prototype.walk=function(e){for(var t,n=0,r=this.children.length;n<r;n++)(t=this.children[n])[i]?t.walk(e):""!==t&&e(t,{source:this.source,line:this.line,column:this.column,name:this.name})},a.prototype.join=function(e){var t,n,r=this.children.length;if(r>0){for(t=[],n=0;n<r-1;n++)t.push(this.children[n]),t.push(e);t.push(this.children[n]),this.children=t}return this},a.prototype.replaceRight=function(e,t){var n=this.children[this.children.length-1];return n[i]?n.replaceRight(e,t):"string"===typeof n?this.children[this.children.length-1]=n.replace(e,t):this.children.push("".replace(e,t)),this},a.prototype.setSourceContent=function(e,t){this.sourceContents[s.toSetString(e)]=t},a.prototype.walkSourceContents=function(e){for(var t=0,n=this.children.length;t<n;t++)this.children[t][i]&&this.children[t].walkSourceContents(e);var r=Object.keys(this.sourceContents);for(t=0,n=r.length;t<n;t++)e(s.fromSetString(r[t]),this.sourceContents[r[t]])},a.prototype.toString=function(){var e="";return this.walk((function(t){e+=t})),e},a.prototype.toStringWithSourceMap=function(e){var t={code:"",line:1,column:0},n=new r(e),s=!1,o=null,i=null,a=null,l=null;return this.walk((function(e,r){t.code+=e,null!==r.source&&null!==r.line&&null!==r.column?(o===r.source&&i===r.line&&a===r.column&&l===r.name||n.addMapping({source:r.source,original:{line:r.line,column:r.column},generated:{line:t.line,column:t.column},name:r.name}),o=r.source,i=r.line,a=r.column,l=r.name,s=!0):s&&(n.addMapping({generated:{line:t.line,column:t.column}}),o=null,s=!1);for(var u=0,c=e.length;u<c;u++)10===e.charCodeAt(u)?(t.line++,t.column=0,u+1===c?(o=null,s=!1):s&&n.addMapping({source:r.source,original:{line:r.line,column:r.column},generated:{line:t.line,column:t.column},name:r.name})):t.column++})),this.walkSourceContents((function(e,t){n.setSourceContent(e,t)})),{code:t.code,map:n}},t.SourceNode=a},"../../node_modules/@babel/core/node_modules/source-map/lib/util.js":function(e,t){t.getArg=function(e,t,n){if(t in e)return e[t];if(3===arguments.length)return n;throw new Error('"'+t+'" is a required argument.')};var n=/^(?:([\w+\-.]+):)?\/\/(?:(\w+:\w+)@)?([\w.]*)(?::(\d+))?(\S*)$/,r=/^data:.+\,.+$/;function s(e){var t=e.match(n);return t?{scheme:t[1],auth:t[2],host:t[3],port:t[4],path:t[5]}:null}function o(e){var t="";return e.scheme&&(t+=e.scheme+":"),t+="//",e.auth&&(t+=e.auth+"@"),e.host&&(t+=e.host),e.port&&(t+=":"+e.port),e.path&&(t+=e.path),t}function i(e){var n=e,r=s(e);if(r){if(!r.path)return e;n=r.path}for(var i,a=t.isAbsolute(n),l=n.split(/\/+/),u=0,c=l.length-1;c>=0;c--)"."===(i=l[c])?l.splice(c,1):".."===i?u++:u>0&&(""===i?(l.splice(c+1,u),u=0):(l.splice(c,2),u--));return""===(n=l.join("/"))&&(n=a?"/":"."),r?(r.path=n,o(r)):n}t.urlParse=s,t.urlGenerate=o,t.normalize=i,t.join=function(e,t){""===e&&(e="."),""===t&&(t=".");var n=s(t),a=s(e);if(a&&(e=a.path||"/"),n&&!n.scheme)return a&&(n.scheme=a.scheme),o(n);if(n||t.match(r))return t;if(a&&!a.host&&!a.path)return a.host=t,o(a);var l="/"===t.charAt(0)?t:i(e.replace(/\/+$/,"")+"/"+t);return a?(a.path=l,o(a)):l},t.isAbsolute=function(e){return"/"===e.charAt(0)||!!e.match(n)},t.relative=function(e,t){""===e&&(e="."),e=e.replace(/\/$/,"");for(var n=0;0!==t.indexOf(e+"/");){var r=e.lastIndexOf("/");if(r<0)return t;if((e=e.slice(0,r)).match(/^([^\/]+:\/)?\/*$/))return t;++n}return Array(n+1).join("../")+t.substr(e.length+1)};var a=!("__proto__"in Object.create(null));function l(e){return e}function u(e){if(!e)return!1;var t=e.length;if(t<9)return!1;if(95!==e.charCodeAt(t-1)||95!==e.charCodeAt(t-2)||111!==e.charCodeAt(t-3)||116!==e.charCodeAt(t-4)||111!==e.charCodeAt(t-5)||114!==e.charCodeAt(t-6)||112!==e.charCodeAt(t-7)||95!==e.charCodeAt(t-8)||95!==e.charCodeAt(t-9))return!1;for(var n=t-10;n>=0;n--)if(36!==e.charCodeAt(n))return!1;return!0}function c(e,t){return e===t?0:e>t?1:-1}t.toSetString=a?l:function(e){return u(e)?"$"+e:e},t.fromSetString=a?l:function(e){return u(e)?e.slice(1):e},t.compareByOriginalPositions=function(e,t,n){var r=e.source-t.source;return 0!==r||0!==(r=e.originalLine-t.originalLine)||0!==(r=e.originalColumn-t.originalColumn)||n||0!==(r=e.generatedColumn-t.generatedColumn)||0!==(r=e.generatedLine-t.generatedLine)?r:e.name-t.name},t.compareByGeneratedPositionsDeflated=function(e,t,n){var r=e.generatedLine-t.generatedLine;return 0!==r||0!==(r=e.generatedColumn-t.generatedColumn)||n||0!==(r=e.source-t.source)||0!==(r=e.originalLine-t.originalLine)||0!==(r=e.originalColumn-t.originalColumn)?r:e.name-t.name},t.compareByGeneratedPositionsInflated=function(e,t){var n=e.generatedLine-t.generatedLine;return 0!==n||0!==(n=e.generatedColumn-t.generatedColumn)||0!==(n=c(e.source,t.source))||0!==(n=e.originalLine-t.originalLine)||0!==(n=e.originalColumn-t.originalColumn)?n:c(e.name,t.name)}},"../../node_modules/@babel/core/node_modules/source-map/source-map.js":function(e,t,n){t.SourceMapGenerator=n("../../node_modules/@babel/core/node_modules/source-map/lib/source-map-generator.js").SourceMapGenerator,t.SourceMapConsumer=n("../../node_modules/@babel/core/node_modules/source-map/lib/source-map-consumer.js").SourceMapConsumer,t.SourceNode=n("../../node_modules/@babel/core/node_modules/source-map/lib/source-node.js").SourceNode},"../../node_modules/@babel/core/package.json":function(e){e.exports=JSON.parse('{"name":"@babel/core","version":"7.9.6","description":"Babel compiler core.","main":"lib/index.js","author":"Sebastian McKenzie <sebmck@gmail.com>","homepage":"https://babeljs.io/","license":"MIT","publishConfig":{"access":"public"},"repository":"https://github.com/babel/babel/tree/master/packages/babel-core","keywords":["6to5","babel","classes","const","es6","harmony","let","modules","transpile","transpiler","var","babel-core","compiler"],"engines":{"node":">=6.9.0"},"funding":{"type":"opencollective","url":"https://opencollective.com/babel"},"browser":{"./lib/config/files/index.js":"./lib/config/files/index-browser.js","./lib/transform-file.js":"./lib/transform-file-browser.js","./src/config/files/index.js":"./src/config/files/index-browser.js","./src/transform-file.js":"./src/transform-file-browser.js"},"dependencies":{"@babel/code-frame":"^7.8.3","@babel/generator":"^7.9.6","@babel/helper-module-transforms":"^7.9.0","@babel/helpers":"^7.9.6","@babel/parser":"^7.9.6","@babel/template":"^7.8.6","@babel/traverse":"^7.9.6","@babel/types":"^7.9.6","convert-source-map":"^1.7.0","debug":"^4.1.0","gensync":"^1.0.0-beta.1","json5":"^2.1.2","lodash":"^4.17.13","resolve":"^1.3.2","semver":"^5.4.1","source-map":"^0.5.0"},"devDependencies":{"@babel/helper-transform-fixture-test-runner":"^7.8.3"},"gitHead":"9c2846bcacc75aa931ea9d556950c2113765d43d"}')},"../../node_modules/@babel/generator/lib/buffer.js":function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;const r=/^[ \t]+$/;t.default=class{constructor(e){this._map=null,this._buf=[],this._last="",this._queue=[],this._position={line:1,column:0},this._sourcePosition={identifierName:null,line:null,column:null,filename:null},this._disallowedPop=null,this._map=e}get(){this._flush();const e=this._map,t={code:this._buf.join("").trimRight(),map:null,rawMappings:null==e?void 0:e.getRawMappings()};return e&&Object.defineProperty(t,"map",{configurable:!0,enumerable:!0,get(){return this.map=e.get()},set(e){Object.defineProperty(this,"map",{value:e,writable:!0})}}),t}append(e){this._flush();const{line:t,column:n,filename:r,identifierName:s,force:o}=this._sourcePosition;this._append(e,t,n,s,r,o)}queue(e){if("\n"===e)for(;this._queue.length>0&&r.test(this._queue[0][0]);)this._queue.shift();const{line:t,column:n,filename:s,identifierName:o,force:i}=this._sourcePosition;this._queue.unshift([e,t,n,o,s,i])}_flush(){let e;for(;e=this._queue.pop();)this._append(...e)}_append(e,t,n,r,s,o){this._map&&"\n"!==e[0]&&this._map.mark(this._position.line,this._position.column,t,n,r,s,o),this._buf.push(e),this._last=e[e.length-1];for(let i=0;i<e.length;i++)"\n"===e[i]?(this._position.line++,this._position.column=0):this._position.column++}removeTrailingNewline(){this._queue.length>0&&"\n"===this._queue[0][0]&&this._queue.shift()}removeLastSemicolon(){this._queue.length>0&&";"===this._queue[0][0]&&this._queue.shift()}endsWith(e){if(1===e.length){let t;if(this._queue.length>0){const e=this._queue[0][0];t=e[e.length-1]}else t=this._last;return t===e}const t=this._last+this._queue.reduce((e,t)=>t[0]+e,"");return e.length<=t.length&&t.slice(-e.length)===e}hasContent(){return this._queue.length>0||!!this._last}exactSource(e,t){this.source("start",e,!0),t(),this.source("end",e),this._disallowPop("start",e)}source(e,t,n){e&&!t||this._normalizePosition(e,t,this._sourcePosition,n)}withSource(e,t,n){if(!this._map)return n();const r=this._sourcePosition.line,s=this._sourcePosition.column,o=this._sourcePosition.filename,i=this._sourcePosition.identifierName;this.source(e,t),n(),this._sourcePosition.force&&this._sourcePosition.line===r&&this._sourcePosition.column===s&&this._sourcePosition.filename===o||this._disallowedPop&&this._disallowedPop.line===r&&this._disallowedPop.column===s&&this._disallowedPop.filename===o||(this._sourcePosition.line=r,this._sourcePosition.column=s,this._sourcePosition.filename=o,this._sourcePosition.identifierName=i,this._sourcePosition.force=!1,this._disallowedPop=null)}_disallowPop(e,t){e&&!t||(this._disallowedPop=this._normalizePosition(e,t))}_normalizePosition(e,t,n,r){const s=t?t[e]:null;void 0===n&&(n={identifierName:null,line:null,column:null,filename:null,force:!1});const o=n.line,i=n.column,a=n.filename;return n.identifierName="start"===e&&(null==t?void 0:t.identifierName)||null,n.line=null==s?void 0:s.line,n.column=null==s?void 0:s.column,n.filename=null==t?void 0:t.filename,(r||n.line!==o||n.column!==i||n.filename!==a)&&(n.force=r),n}getCurrentColumn(){const e=this._queue.reduce((e,t)=>t[0]+e,""),t=e.lastIndexOf("\n");return-1===t?this._position.column+e.length:e.length-1-t}getCurrentLine(){const e=this._queue.reduce((e,t)=>t[0]+e,"");let t=0;for(let n=0;n<e.length;n++)"\n"===e[n]&&t++;return this._position.line+t}}},"../../node_modules/@babel/generator/lib/generators/base.js":function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.File=function(e){e.program&&this.print(e.program.interpreter,e);this.print(e.program,e)},t.Program=function(e){this.printInnerComments(e,!1),this.printSequence(e.directives,e),e.directives&&e.directives.length&&this.newline();this.printSequence(e.body,e)},t.BlockStatement=function(e){var t;this.token("{"),this.printInnerComments(e);const n=null==(t=e.directives)?void 0:t.length;e.body.length||n?(this.newline(),this.printSequence(e.directives,e,{indent:!0}),n&&this.newline(),this.printSequence(e.body,e,{indent:!0}),this.removeTrailingNewline(),this.source("end",e.loc),this.endsWith("\n")||this.newline(),this.rightBrace()):(this.source("end",e.loc),this.token("}"))},t.Noop=function(){},t.Directive=function(e){this.print(e.value,e),this.semicolon()},t.DirectiveLiteral=function(e){const t=this.getPossibleRaw(e);if(null!=t)return void this.token(t);const{value:n}=e;if(s.test(n)){if(r.test(n))throw new Error("Malformed AST: it is not possible to print a directive containing both unescaped single and double quotes.");this.token(`'${n}'`)}else this.token(`"${n}"`)},t.InterpreterDirective=function(e){this.token(`#!${e.value}\n`)},t.Placeholder=function(e){this.token("%%"),this.print(e.name),this.token("%%"),"Statement"===e.expectedNode&&this.semicolon()};const r=/(?:^|[^\\])(?:\\\\)*'/,s=/(?:^|[^\\])(?:\\\\)*"/},"../../node_modules/@babel/generator/lib/generators/classes.js":function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.ClassExpression=t.ClassDeclaration=function(e,t){this.format.decoratorsBeforeExport&&(r.isExportDefaultDeclaration(t)||r.isExportNamedDeclaration(t))||this.printJoin(e.decorators,e);e.declare&&(this.word("declare"),this.space());e.abstract&&(this.word("abstract"),this.space());this.word("class"),e.id&&(this.space(),this.print(e.id,e));this.print(e.typeParameters,e),e.superClass&&(this.space(),this.word("extends"),this.space(),this.print(e.superClass,e),this.print(e.superTypeParameters,e));e.implements&&(this.space(),this.word("implements"),this.space(),this.printList(e.implements,e));this.space(),this.print(e.body,e)},t.ClassBody=function(e){this.token("{"),this.printInnerComments(e),0===e.body.length?this.token("}"):(this.newline(),this.indent(),this.printSequence(e.body,e),this.dedent(),this.endsWith("\n")||this.newline(),this.rightBrace())},t.ClassProperty=function(e){this.printJoin(e.decorators,e),this.tsPrintClassMemberModifiers(e,!0),e.computed?(this.token("["),this.print(e.key,e),this.token("]")):(this._variance(e),this.print(e.key,e));e.optional&&this.token("?");e.definite&&this.token("!");this.print(e.typeAnnotation,e),e.value&&(this.space(),this.token("="),this.space(),this.print(e.value,e));this.semicolon()},t.ClassPrivateProperty=function(e){e.static&&(this.word("static"),this.space());this.print(e.key,e),this.print(e.typeAnnotation,e),e.value&&(this.space(),this.token("="),this.space(),this.print(e.value,e));this.semicolon()},t.ClassMethod=function(e){this._classMethodHead(e),this.space(),this.print(e.body,e)},t.ClassPrivateMethod=function(e){this._classMethodHead(e),this.space(),this.print(e.body,e)},t._classMethodHead=function(e){this.printJoin(e.decorators,e),this.tsPrintClassMemberModifiers(e,!1),this._methodHead(e)};var r=function(e){if(e&&e.__esModule)return e;if(null===e||"object"!==typeof e&&"function"!==typeof e)return{default:e};var t=s();if(t&&t.has(e))return t.get(e);var n={},r=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var o in e)if(Object.prototype.hasOwnProperty.call(e,o)){var i=r?Object.getOwnPropertyDescriptor(e,o):null;i&&(i.get||i.set)?Object.defineProperty(n,o,i):n[o]=e[o]}n.default=e,t&&t.set(e,n);return n}(n("../../node_modules/@babel/types/lib/index.js"));function s(){if("function"!==typeof WeakMap)return null;var e=new WeakMap;return s=function(){return e},e}},"../../node_modules/@babel/generator/lib/generators/expressions.js":function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.UnaryExpression=function(e){"void"===e.operator||"delete"===e.operator||"typeof"===e.operator||"throw"===e.operator?(this.word(e.operator),this.space()):this.token(e.operator);this.print(e.argument,e)},t.DoExpression=function(e){this.word("do"),this.space(),this.print(e.body,e)},t.ParenthesizedExpression=function(e){this.token("("),this.print(e.expression,e),this.token(")")},t.UpdateExpression=function(e){e.prefix?(this.token(e.operator),this.print(e.argument,e)):(this.startTerminatorless(!0),this.print(e.argument,e),this.endTerminatorless(),this.token(e.operator))},t.ConditionalExpression=function(e){this.print(e.test,e),this.space(),this.token("?"),this.space(),this.print(e.consequent,e),this.space(),this.token(":"),this.space(),this.print(e.alternate,e)},t.NewExpression=function(e,t){if(this.word("new"),this.space(),this.print(e.callee,e),this.format.minified&&0===e.arguments.length&&!e.optional&&!r.isCallExpression(t,{callee:e})&&!r.isMemberExpression(t)&&!r.isNewExpression(t))return;this.print(e.typeArguments,e),this.print(e.typeParameters,e),e.optional&&this.token("?.");this.token("("),this.printList(e.arguments,e),this.token(")")},t.SequenceExpression=function(e){this.printList(e.expressions,e)},t.ThisExpression=function(){this.word("this")},t.Super=function(){this.word("super")},t.Decorator=function(e){this.token("@"),this.print(e.expression,e),this.newline()},t.OptionalMemberExpression=function(e){if(this.print(e.object,e),!e.computed&&r.isMemberExpression(e.property))throw new TypeError("Got a MemberExpression for MemberExpression property");let t=e.computed;r.isLiteral(e.property)&&"number"===typeof e.property.value&&(t=!0);e.optional&&this.token("?.");t?(this.token("["),this.print(e.property,e),this.token("]")):(e.optional||this.token("."),this.print(e.property,e))},t.OptionalCallExpression=function(e){this.print(e.callee,e),this.print(e.typeArguments,e),this.print(e.typeParameters,e),e.optional&&this.token("?.");this.token("("),this.printList(e.arguments,e),this.token(")")},t.CallExpression=function(e){this.print(e.callee,e),this.print(e.typeArguments,e),this.print(e.typeParameters,e),this.token("("),this.printList(e.arguments,e),this.token(")")},t.Import=function(){this.word("import")},t.EmptyStatement=function(){this.semicolon(!0)},t.ExpressionStatement=function(e){this.print(e.expression,e),this.semicolon()},t.AssignmentPattern=function(e){this.print(e.left,e),e.left.optional&&this.token("?");this.print(e.left.typeAnnotation,e),this.space(),this.token("="),this.space(),this.print(e.right,e)},t.LogicalExpression=t.BinaryExpression=t.AssignmentExpression=function(e,t){const n=this.inForStatementInitCounter&&"in"===e.operator&&!s.needsParens(e,t);n&&this.token("(");this.print(e.left,e),this.space(),"in"===e.operator||"instanceof"===e.operator?this.word(e.operator):this.token(e.operator);this.space(),this.print(e.right,e),n&&this.token(")")},t.BindExpression=function(e){this.print(e.object,e),this.token("::"),this.print(e.callee,e)},t.MemberExpression=function(e){if(this.print(e.object,e),!e.computed&&r.isMemberExpression(e.property))throw new TypeError("Got a MemberExpression for MemberExpression property");let t=e.computed;r.isLiteral(e.property)&&"number"===typeof e.property.value&&(t=!0);t?(this.token("["),this.print(e.property,e),this.token("]")):(this.token("."),this.print(e.property,e))},t.MetaProperty=function(e){this.print(e.meta,e),this.token("."),this.print(e.property,e)},t.PrivateName=function(e){this.token("#"),this.print(e.id,e)},t.V8IntrinsicIdentifier=function(e){this.token("%"),this.word(e.name)},t.AwaitExpression=t.YieldExpression=void 0;var r=i(n("../../node_modules/@babel/types/lib/index.js")),s=i(n("../../node_modules/@babel/generator/lib/node/index.js"));function o(){if("function"!==typeof WeakMap)return null;var e=new WeakMap;return o=function(){return e},e}function i(e){if(e&&e.__esModule)return e;if(null===e||"object"!==typeof e&&"function"!==typeof e)return{default:e};var t=o();if(t&&t.has(e))return t.get(e);var n={},r=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var s in e)if(Object.prototype.hasOwnProperty.call(e,s)){var i=r?Object.getOwnPropertyDescriptor(e,s):null;i&&(i.get||i.set)?Object.defineProperty(n,s,i):n[s]=e[s]}return n.default=e,t&&t.set(e,n),n}function a(e){return function(t){if(this.word(e),t.delegate&&this.token("*"),t.argument){this.space();const e=this.startTerminatorless();this.print(t.argument,t),this.endTerminatorless(e)}}}const l=a("yield");t.YieldExpression=l;const u=a("await");t.AwaitExpression=u},"../../node_modules/@babel/generator/lib/generators/flow.js":function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.AnyTypeAnnotation=function(){this.word("any")},t.ArrayTypeAnnotation=function(e){this.print(e.elementType,e),this.token("["),this.token("]")},t.BooleanTypeAnnotation=function(){this.word("boolean")},t.BooleanLiteralTypeAnnotation=function(e){this.word(e.value?"true":"false")},t.NullLiteralTypeAnnotation=function(){this.word("null")},t.DeclareClass=function(e,t){r.isDeclareExportDeclaration(t)||(this.word("declare"),this.space());this.word("class"),this.space(),this._interfaceish(e)},t.DeclareFunction=function(e,t){r.isDeclareExportDeclaration(t)||(this.word("declare"),this.space());this.word("function"),this.space(),this.print(e.id,e),this.print(e.id.typeAnnotation.typeAnnotation,e),e.predicate&&(this.space(),this.print(e.predicate,e));this.semicolon()},t.InferredPredicate=function(){this.token("%"),this.word("checks")},t.DeclaredPredicate=function(e){this.token("%"),this.word("checks"),this.token("("),this.print(e.value,e),this.token(")")},t.DeclareInterface=function(e){this.word("declare"),this.space(),this.InterfaceDeclaration(e)},t.DeclareModule=function(e){this.word("declare"),this.space(),this.word("module"),this.space(),this.print(e.id,e),this.space(),this.print(e.body,e)},t.DeclareModuleExports=function(e){this.word("declare"),this.space(),this.word("module"),this.token("."),this.word("exports"),this.print(e.typeAnnotation,e)},t.DeclareTypeAlias=function(e){this.word("declare"),this.space(),this.TypeAlias(e)},t.DeclareOpaqueType=function(e,t){r.isDeclareExportDeclaration(t)||(this.word("declare"),this.space());this.OpaqueType(e)},t.DeclareVariable=function(e,t){r.isDeclareExportDeclaration(t)||(this.word("declare"),this.space());this.word("var"),this.space(),this.print(e.id,e),this.print(e.id.typeAnnotation,e),this.semicolon()},t.DeclareExportDeclaration=function(e){this.word("declare"),this.space(),this.word("export"),this.space(),e.default&&(this.word("default"),this.space());c.apply(this,arguments)},t.DeclareExportAllDeclaration=function(){this.word("declare"),this.space(),s.ExportAllDeclaration.apply(this,arguments)},t.EnumDeclaration=function(e){const{id:t,body:n}=e;this.word("enum"),this.space(),this.print(t,e),this.print(n,e)},t.EnumBooleanBody=function(e){const{explicitType:t}=e;a(this,"boolean",t),l(this,e)},t.EnumNumberBody=function(e){const{explicitType:t}=e;a(this,"number",t),l(this,e)},t.EnumStringBody=function(e){const{explicitType:t}=e;a(this,"string",t),l(this,e)},t.EnumSymbolBody=function(e){a(this,"symbol",!0),l(this,e)},t.EnumDefaultedMember=function(e){const{id:t}=e;this.print(t,e),this.token(",")},t.EnumBooleanMember=function(e){u(this,e)},t.EnumNumberMember=function(e){u(this,e)},t.EnumStringMember=function(e){u(this,e)},t.ExistsTypeAnnotation=function(){this.token("*")},t.FunctionTypeAnnotation=function(e,t){this.print(e.typeParameters,e),this.token("("),this.printList(e.params,e),e.rest&&(e.params.length&&(this.token(","),this.space()),this.token("..."),this.print(e.rest,e));this.token(")"),"ObjectTypeCallProperty"===t.type||"DeclareFunction"===t.type||"ObjectTypeProperty"===t.type&&t.method?this.token(":"):(this.space(),this.token("=>"));this.space(),this.print(e.returnType,e)},t.FunctionTypeParam=function(e){this.print(e.name,e),e.optional&&this.token("?");e.name&&(this.token(":"),this.space());this.print(e.typeAnnotation,e)},t.GenericTypeAnnotation=t.ClassImplements=t.InterfaceExtends=function(e){this.print(e.id,e),this.print(e.typeParameters,e)},t._interfaceish=function(e){this.print(e.id,e),this.print(e.typeParameters,e),e.extends.length&&(this.space(),this.word("extends"),this.space(),this.printList(e.extends,e));e.mixins&&e.mixins.length&&(this.space(),this.word("mixins"),this.space(),this.printList(e.mixins,e));e.implements&&e.implements.length&&(this.space(),this.word("implements"),this.space(),this.printList(e.implements,e));this.space(),this.print(e.body,e)},t._variance=function(e){e.variance&&("plus"===e.variance.kind?this.token("+"):"minus"===e.variance.kind&&this.token("-"))},t.InterfaceDeclaration=function(e){this.word("interface"),this.space(),this._interfaceish(e)},t.InterfaceTypeAnnotation=function(e){this.word("interface"),e.extends&&e.extends.length&&(this.space(),this.word("extends"),this.space(),this.printList(e.extends,e));this.space(),this.print(e.body,e)},t.IntersectionTypeAnnotation=function(e){this.printJoin(e.types,e,{separator:d})},t.MixedTypeAnnotation=function(){this.word("mixed")},t.EmptyTypeAnnotation=function(){this.word("empty")},t.NullableTypeAnnotation=function(e){this.token("?"),this.print(e.typeAnnotation,e)},t.NumberTypeAnnotation=function(){this.word("number")},t.StringTypeAnnotation=function(){this.word("string")},t.ThisTypeAnnotation=function(){this.word("this")},t.TupleTypeAnnotation=function(e){this.token("["),this.printList(e.types,e),this.token("]")},t.TypeofTypeAnnotation=function(e){this.word("typeof"),this.space(),this.print(e.argument,e)},t.TypeAlias=function(e){this.word("type"),this.space(),this.print(e.id,e),this.print(e.typeParameters,e),this.space(),this.token("="),this.space(),this.print(e.right,e),this.semicolon()},t.TypeAnnotation=function(e){this.token(":"),this.space(),e.optional&&this.token("?");this.print(e.typeAnnotation,e)},t.TypeParameterDeclaration=t.TypeParameterInstantiation=function(e){this.token("<"),this.printList(e.params,e,{}),this.token(">")},t.TypeParameter=function(e){this._variance(e),this.word(e.name),e.bound&&this.print(e.bound,e);e.default&&(this.space(),this.token("="),this.space(),this.print(e.default,e))},t.OpaqueType=function(e){this.word("opaque"),this.space(),this.word("type"),this.space(),this.print(e.id,e),this.print(e.typeParameters,e),e.supertype&&(this.token(":"),this.space(),this.print(e.supertype,e));e.impltype&&(this.space(),this.token("="),this.space(),this.print(e.impltype,e));this.semicolon()},t.ObjectTypeAnnotation=function(e){e.exact?this.token("{|"):this.token("{");const t=e.properties.concat(e.callProperties||[],e.indexers||[],e.internalSlots||[]);t.length&&(this.space(),this.printJoin(t,e,{addNewlines(e){if(e&&!t[0])return 1},indent:!0,statement:!0,iterator:()=>{(1!==t.length||e.inexact)&&(this.token(","),this.space())}}),this.space());e.inexact&&(this.indent(),this.token("..."),t.length&&this.newline(),this.dedent());e.exact?this.token("|}"):this.token("}")},t.ObjectTypeInternalSlot=function(e){e.static&&(this.word("static"),this.space());this.token("["),this.token("["),this.print(e.id,e),this.token("]"),this.token("]"),e.optional&&this.token("?");e.method||(this.token(":"),this.space());this.print(e.value,e)},t.ObjectTypeCallProperty=function(e){e.static&&(this.word("static"),this.space());this.print(e.value,e)},t.ObjectTypeIndexer=function(e){e.static&&(this.word("static"),this.space());this._variance(e),this.token("["),e.id&&(this.print(e.id,e),this.token(":"),this.space());this.print(e.key,e),this.token("]"),this.token(":"),this.space(),this.print(e.value,e)},t.ObjectTypeProperty=function(e){e.proto&&(this.word("proto"),this.space());e.static&&(this.word("static"),this.space());"get"!==e.kind&&"set"!==e.kind||(this.word(e.kind),this.space());this._variance(e),this.print(e.key,e),e.optional&&this.token("?");e.method||(this.token(":"),this.space());this.print(e.value,e)},t.ObjectTypeSpreadProperty=function(e){this.token("..."),this.print(e.argument,e)},t.QualifiedTypeIdentifier=function(e){this.print(e.qualification,e),this.token("."),this.print(e.id,e)},t.SymbolTypeAnnotation=function(){this.word("symbol")},t.UnionTypeAnnotation=function(e){this.printJoin(e.types,e,{separator:f})},t.TypeCastExpression=function(e){this.token("("),this.print(e.expression,e),this.print(e.typeAnnotation,e),this.token(")")},t.Variance=function(e){"plus"===e.kind?this.token("+"):this.token("-")},t.VoidTypeAnnotation=function(){this.word("void")},Object.defineProperty(t,"NumberLiteralTypeAnnotation",{enumerable:!0,get:function(){return o.NumericLiteral}}),Object.defineProperty(t,"StringLiteralTypeAnnotation",{enumerable:!0,get:function(){return o.StringLiteral}});var r=function(e){if(e&&e.__esModule)return e;if(null===e||"object"!==typeof e&&"function"!==typeof e)return{default:e};var t=i();if(t&&t.has(e))return t.get(e);var n={},r=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var s in e)if(Object.prototype.hasOwnProperty.call(e,s)){var o=r?Object.getOwnPropertyDescriptor(e,s):null;o&&(o.get||o.set)?Object.defineProperty(n,s,o):n[s]=e[s]}n.default=e,t&&t.set(e,n);return n}(n("../../node_modules/@babel/types/lib/index.js")),s=n("../../node_modules/@babel/generator/lib/generators/modules.js"),o=n("../../node_modules/@babel/generator/lib/generators/types.js");function i(){if("function"!==typeof WeakMap)return null;var e=new WeakMap;return i=function(){return e},e}function a(e,t,n){n&&(e.space(),e.word("of"),e.space(),e.word(t)),e.space()}function l(e,t){const{members:n}=t;e.token("{"),e.indent(),e.newline();for(const r of n)e.print(r,t),e.newline();e.dedent(),e.token("}")}function u(e,t){const{id:n,init:r}=t;e.print(n,t),e.space(),e.token("="),e.space(),e.print(r,t),e.token(",")}function c(e){if(e.declaration){const t=e.declaration;this.print(t,e),r.isStatement(t)||this.semicolon()}else this.token("{"),e.specifiers.length&&(this.space(),this.printList(e.specifiers,e),this.space()),this.token("}"),e.source&&(this.space(),this.word("from"),this.space(),this.print(e.source,e)),this.semicolon()}function d(){this.space(),this.token("&"),this.space()}function f(){this.space(),this.token("|"),this.space()}},"../../node_modules/@babel/generator/lib/generators/index.js":function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r=n("../../node_modules/@babel/generator/lib/generators/template-literals.js");Object.keys(r).forEach((function(e){"default"!==e&&"__esModule"!==e&&Object.defineProperty(t,e,{enumerable:!0,get:function(){return r[e]}})}));var s=n("../../node_modules/@babel/generator/lib/generators/expressions.js");Object.keys(s).forEach((function(e){"default"!==e&&"__esModule"!==e&&Object.defineProperty(t,e,{enumerable:!0,get:function(){return s[e]}})}));var o=n("../../node_modules/@babel/generator/lib/generators/statements.js");Object.keys(o).forEach((function(e){"default"!==e&&"__esModule"!==e&&Object.defineProperty(t,e,{enumerable:!0,get:function(){return o[e]}})}));var i=n("../../node_modules/@babel/generator/lib/generators/classes.js");Object.keys(i).forEach((function(e){"default"!==e&&"__esModule"!==e&&Object.defineProperty(t,e,{enumerable:!0,get:function(){return i[e]}})}));var a=n("../../node_modules/@babel/generator/lib/generators/methods.js");Object.keys(a).forEach((function(e){"default"!==e&&"__esModule"!==e&&Object.defineProperty(t,e,{enumerable:!0,get:function(){return a[e]}})}));var l=n("../../node_modules/@babel/generator/lib/generators/modules.js");Object.keys(l).forEach((function(e){"default"!==e&&"__esModule"!==e&&Object.defineProperty(t,e,{enumerable:!0,get:function(){return l[e]}})}));var u=n("../../node_modules/@babel/generator/lib/generators/types.js");Object.keys(u).forEach((function(e){"default"!==e&&"__esModule"!==e&&Object.defineProperty(t,e,{enumerable:!0,get:function(){return u[e]}})}));var c=n("../../node_modules/@babel/generator/lib/generators/flow.js");Object.keys(c).forEach((function(e){"default"!==e&&"__esModule"!==e&&Object.defineProperty(t,e,{enumerable:!0,get:function(){return c[e]}})}));var d=n("../../node_modules/@babel/generator/lib/generators/base.js");Object.keys(d).forEach((function(e){"default"!==e&&"__esModule"!==e&&Object.defineProperty(t,e,{enumerable:!0,get:function(){return d[e]}})}));var f=n("../../node_modules/@babel/generator/lib/generators/jsx.js");Object.keys(f).forEach((function(e){"default"!==e&&"__esModule"!==e&&Object.defineProperty(t,e,{enumerable:!0,get:function(){return f[e]}})}));var p=n("../../node_modules/@babel/generator/lib/generators/typescript.js");Object.keys(p).forEach((function(e){"default"!==e&&"__esModule"!==e&&Object.defineProperty(t,e,{enumerable:!0,get:function(){return p[e]}})}))},"../../node_modules/@babel/generator/lib/generators/jsx.js":function(e,t,n){"use strict";function r(){this.space()}Object.defineProperty(t,"__esModule",{value:!0}),t.JSXAttribute=function(e){this.print(e.name,e),e.value&&(this.token("="),this.print(e.value,e))},t.JSXIdentifier=function(e){this.word(e.name)},t.JSXNamespacedName=function(e){this.print(e.namespace,e),this.token(":"),this.print(e.name,e)},t.JSXMemberExpression=function(e){this.print(e.object,e),this.token("."),this.print(e.property,e)},t.JSXSpreadAttribute=function(e){this.token("{"),this.token("..."),this.print(e.argument,e),this.token("}")},t.JSXExpressionContainer=function(e){this.token("{"),this.print(e.expression,e),this.token("}")},t.JSXSpreadChild=function(e){this.token("{"),this.token("..."),this.print(e.expression,e),this.token("}")},t.JSXText=function(e){const t=this.getPossibleRaw(e);null!=t?this.token(t):this.token(e.value)},t.JSXElement=function(e){const t=e.openingElement;if(this.print(t,e),t.selfClosing)return;this.indent();for(const n of e.children)this.print(n,e);this.dedent(),this.print(e.closingElement,e)},t.JSXOpeningElement=function(e){this.token("<"),this.print(e.name,e),this.print(e.typeParameters,e),e.attributes.length>0&&(this.space(),this.printJoin(e.attributes,e,{separator:r}));e.selfClosing?(this.space(),this.token("/>")):this.token(">")},t.JSXClosingElement=function(e){this.token("</"),this.print(e.name,e),this.token(">")},t.JSXEmptyExpression=function(e){this.printInnerComments(e)},t.JSXFragment=function(e){this.print(e.openingFragment,e),this.indent();for(const t of e.children)this.print(t,e);this.dedent(),this.print(e.closingFragment,e)},t.JSXOpeningFragment=function(){this.token("<"),this.token(">")},t.JSXClosingFragment=function(){this.token("</"),this.token(">")}},"../../node_modules/@babel/generator/lib/generators/methods.js":function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t._params=function(e){this.print(e.typeParameters,e),this.token("("),this._parameters(e.params,e),this.token(")"),this.print(e.returnType,e)},t._parameters=function(e,t){for(let n=0;n<e.length;n++)this._param(e[n],t),n<e.length-1&&(this.token(","),this.space())},t._param=function(e,t){this.printJoin(e.decorators,e),this.print(e,t),e.optional&&this.token("?");this.print(e.typeAnnotation,e)},t._methodHead=function(e){const t=e.kind,n=e.key;"get"!==t&&"set"!==t||(this.word(t),this.space());e.async&&(this.word("async"),this.space());"method"!==t&&"init"!==t||e.generator&&this.token("*");e.computed?(this.token("["),this.print(n,e),this.token("]")):this.print(n,e);e.optional&&this.token("?");this._params(e)},t._predicate=function(e){e.predicate&&(e.returnType||this.token(":"),this.space(),this.print(e.predicate,e))},t._functionHead=function(e){e.async&&(this.word("async"),this.space());this.word("function"),e.generator&&this.token("*");this.space(),e.id&&this.print(e.id,e);this._params(e),this._predicate(e)},t.FunctionDeclaration=t.FunctionExpression=function(e){this._functionHead(e),this.space(),this.print(e.body,e)},t.ArrowFunctionExpression=function(e){e.async&&(this.word("async"),this.space());const t=e.params[0];1===e.params.length&&r.isIdentifier(t)&&!function(e,t){return e.typeParameters||e.returnType||t.typeAnnotation||t.optional||t.trailingComments}(e,t)?this.format.retainLines&&e.loc&&e.body.loc&&e.loc.start.line<e.body.loc.start.line?(this.token("("),t.loc&&t.loc.start.line>e.loc.start.line?(this.indent(),this.print(t,e),this.dedent(),this._catchUp("start",e.body.loc)):this.print(t,e),this.token(")")):this.print(t,e):this._params(e);this._predicate(e),this.space(),this.token("=>"),this.space(),this.print(e.body,e)};var r=function(e){if(e&&e.__esModule)return e;if(null===e||"object"!==typeof e&&"function"!==typeof e)return{default:e};var t=s();if(t&&t.has(e))return t.get(e);var n={},r=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var o in e)if(Object.prototype.hasOwnProperty.call(e,o)){var i=r?Object.getOwnPropertyDescriptor(e,o):null;i&&(i.get||i.set)?Object.defineProperty(n,o,i):n[o]=e[o]}n.default=e,t&&t.set(e,n);return n}(n("../../node_modules/@babel/types/lib/index.js"));function s(){if("function"!==typeof WeakMap)return null;var e=new WeakMap;return s=function(){return e},e}},"../../node_modules/@babel/generator/lib/generators/modules.js":function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.ImportSpecifier=function(e){"type"!==e.importKind&&"typeof"!==e.importKind||(this.word(e.importKind),this.space());this.print(e.imported,e),e.local&&e.local.name!==e.imported.name&&(this.space(),this.word("as"),this.space(),this.print(e.local,e))},t.ImportDefaultSpecifier=function(e){this.print(e.local,e)},t.ExportDefaultSpecifier=function(e){this.print(e.exported,e)},t.ExportSpecifier=function(e){this.print(e.local,e),e.exported&&e.local.name!==e.exported.name&&(this.space(),this.word("as"),this.space(),this.print(e.exported,e))},t.ExportNamespaceSpecifier=function(e){this.token("*"),this.space(),this.word("as"),this.space(),this.print(e.exported,e)},t.ExportAllDeclaration=function(e){this.word("export"),this.space(),"type"===e.exportKind&&(this.word("type"),this.space());this.token("*"),this.space(),this.word("from"),this.space(),this.print(e.source,e),this.semicolon()},t.ExportNamedDeclaration=function(e){this.format.decoratorsBeforeExport&&r.isClassDeclaration(e.declaration)&&this.printJoin(e.declaration.decorators,e);this.word("export"),this.space(),o.apply(this,arguments)},t.ExportDefaultDeclaration=function(e){this.format.decoratorsBeforeExport&&r.isClassDeclaration(e.declaration)&&this.printJoin(e.declaration.decorators,e);this.word("export"),this.space(),this.word("default"),this.space(),o.apply(this,arguments)},t.ImportDeclaration=function(e){var t;this.word("import"),this.space(),("type"===e.importKind||"typeof"===e.importKind)&&(this.word(e.importKind),this.space());const n=e.specifiers.slice(0);if(null==n?void 0:n.length){for(;;){const t=n[0];if(!r.isImportDefaultSpecifier(t)&&!r.isImportNamespaceSpecifier(t))break;this.print(n.shift(),e),n.length&&(this.token(","),this.space())}n.length&&(this.token("{"),this.space(),this.printList(n,e),this.space(),this.token("}")),this.space(),this.word("from"),this.space()}this.print(e.source,e),(null==(t=e.attributes)?void 0:t.length)&&(this.space(),this.word("with"),this.space(),this.printList(e.attributes,e));this.semicolon()},t.ImportAttribute=function(e){this.print(e.key),this.token(":"),this.space(),this.print(e.value)},t.ImportNamespaceSpecifier=function(e){this.token("*"),this.space(),this.word("as"),this.space(),this.print(e.local,e)};var r=function(e){if(e&&e.__esModule)return e;if(null===e||"object"!==typeof e&&"function"!==typeof e)return{default:e};var t=s();if(t&&t.has(e))return t.get(e);var n={},r=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var o in e)if(Object.prototype.hasOwnProperty.call(e,o)){var i=r?Object.getOwnPropertyDescriptor(e,o):null;i&&(i.get||i.set)?Object.defineProperty(n,o,i):n[o]=e[o]}n.default=e,t&&t.set(e,n);return n}(n("../../node_modules/@babel/types/lib/index.js"));function s(){if("function"!==typeof WeakMap)return null;var e=new WeakMap;return s=function(){return e},e}function o(e){if(e.declaration){const t=e.declaration;this.print(t,e),r.isStatement(t)||this.semicolon()}else{"type"===e.exportKind&&(this.word("type"),this.space());const t=e.specifiers.slice(0);let n=!1;for(;;){const s=t[0];if(!r.isExportDefaultSpecifier(s)&&!r.isExportNamespaceSpecifier(s))break;n=!0,this.print(t.shift(),e),t.length&&(this.token(","),this.space())}(t.length||!t.length&&!n)&&(this.token("{"),t.length&&(this.space(),this.printList(t,e),this.space()),this.token("}")),e.source&&(this.space(),this.word("from"),this.space(),this.print(e.source,e)),this.semicolon()}}},"../../node_modules/@babel/generator/lib/generators/statements.js":function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.WithStatement=function(e){this.word("with"),this.space(),this.token("("),this.print(e.object,e),this.token(")"),this.printBlock(e)},t.IfStatement=function(e){this.word("if"),this.space(),this.token("("),this.print(e.test,e),this.token(")"),this.space();const t=e.alternate&&r.isIfStatement(function e(t){return r.isStatement(t.body)?e(t.body):t}(e.consequent));t&&(this.token("{"),this.newline(),this.indent());this.printAndIndentOnComments(e.consequent,e),t&&(this.dedent(),this.newline(),this.token("}"));e.alternate&&(this.endsWith("}")&&this.space(),this.word("else"),this.space(),this.printAndIndentOnComments(e.alternate,e))},t.ForStatement=function(e){this.word("for"),this.space(),this.token("("),this.inForStatementInitCounter++,this.print(e.init,e),this.inForStatementInitCounter--,this.token(";"),e.test&&(this.space(),this.print(e.test,e));this.token(";"),e.update&&(this.space(),this.print(e.update,e));this.token(")"),this.printBlock(e)},t.WhileStatement=function(e){this.word("while"),this.space(),this.token("("),this.print(e.test,e),this.token(")"),this.printBlock(e)},t.DoWhileStatement=function(e){this.word("do"),this.space(),this.print(e.body,e),this.space(),this.word("while"),this.space(),this.token("("),this.print(e.test,e),this.token(")"),this.semicolon()},t.LabeledStatement=function(e){this.print(e.label,e),this.token(":"),this.space(),this.print(e.body,e)},t.TryStatement=function(e){this.word("try"),this.space(),this.print(e.block,e),this.space(),e.handlers?this.print(e.handlers[0],e):this.print(e.handler,e);e.finalizer&&(this.space(),this.word("finally"),this.space(),this.print(e.finalizer,e))},t.CatchClause=function(e){this.word("catch"),this.space(),e.param&&(this.token("("),this.print(e.param,e),this.token(")"),this.space());this.print(e.body,e)},t.SwitchStatement=function(e){this.word("switch"),this.space(),this.token("("),this.print(e.discriminant,e),this.token(")"),this.space(),this.token("{"),this.printSequence(e.cases,e,{indent:!0,addNewlines(t,n){if(!t&&e.cases[e.cases.length-1]===n)return-1}}),this.token("}")},t.SwitchCase=function(e){e.test?(this.word("case"),this.space(),this.print(e.test,e),this.token(":")):(this.word("default"),this.token(":"));e.consequent.length&&(this.newline(),this.printSequence(e.consequent,e,{indent:!0}))},t.DebuggerStatement=function(){this.word("debugger"),this.semicolon()},t.VariableDeclaration=function(e,t){e.declare&&(this.word("declare"),this.space());this.word(e.kind),this.space();let n,s=!1;if(!r.isFor(t))for(const r of e.declarations)r.init&&(s=!0);s&&(n="const"===e.kind?h:p);if(this.printList(e.declarations,e,{separator:n}),r.isFor(t)&&(t.left===e||t.init===e))return;this.semicolon()},t.VariableDeclarator=function(e){this.print(e.id,e),e.definite&&this.token("!");this.print(e.id.typeAnnotation,e),e.init&&(this.space(),this.token("="),this.space(),this.print(e.init,e))},t.ThrowStatement=t.BreakStatement=t.ReturnStatement=t.ContinueStatement=t.ForOfStatement=t.ForInStatement=void 0;var r=function(e){if(e&&e.__esModule)return e;if(null===e||"object"!==typeof e&&"function"!==typeof e)return{default:e};var t=s();if(t&&t.has(e))return t.get(e);var n={},r=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var o in e)if(Object.prototype.hasOwnProperty.call(e,o)){var i=r?Object.getOwnPropertyDescriptor(e,o):null;i&&(i.get||i.set)?Object.defineProperty(n,o,i):n[o]=e[o]}n.default=e,t&&t.set(e,n);return n}(n("../../node_modules/@babel/types/lib/index.js"));function s(){if("function"!==typeof WeakMap)return null;var e=new WeakMap;return s=function(){return e},e}const o=function(e){return function(t){this.word("for"),this.space(),"of"===e&&t.await&&(this.word("await"),this.space()),this.token("("),this.print(t.left,t),this.space(),this.word(e),this.space(),this.print(t.right,t),this.token(")"),this.printBlock(t)}},i=o("in");t.ForInStatement=i;const a=o("of");function l(e,t="label"){return function(n){this.word(e);const r=n[t];if(r){this.space();const e="label"==t,s=this.startTerminatorless(e);this.print(r,n),this.endTerminatorless(s)}this.semicolon()}}t.ForOfStatement=a;const u=l("continue");t.ContinueStatement=u;const c=l("return","argument");t.ReturnStatement=c;const d=l("break");t.BreakStatement=d;const f=l("throw","argument");function p(){if(this.token(","),this.newline(),this.endsWith("\n"))for(let e=0;e<4;e++)this.space(!0)}function h(){if(this.token(","),this.newline(),this.endsWith("\n"))for(let e=0;e<6;e++)this.space(!0)}t.ThrowStatement=f},"../../node_modules/@babel/generator/lib/generators/template-literals.js":function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.TaggedTemplateExpression=function(e){this.print(e.tag,e),this.print(e.typeParameters,e),this.print(e.quasi,e)},t.TemplateElement=function(e,t){const n=t.quasis[0]===e,r=t.quasis[t.quasis.length-1]===e,s=(n?"`":"}")+e.value.raw+(r?"`":"${");this.token(s)},t.TemplateLiteral=function(e){const t=e.quasis;for(let n=0;n<t.length;n++)this.print(t[n],e),n+1<t.length&&this.print(e.expressions[n],e)}},"../../node_modules/@babel/generator/lib/generators/types.js":function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.Identifier=function(e){this.exactSource(e.loc,()=>{this.word(e.name)})},t.ArgumentPlaceholder=function(){this.token("?")},t.SpreadElement=t.RestElement=function(e){this.token("..."),this.print(e.argument,e)},t.ObjectPattern=t.ObjectExpression=function(e){const t=e.properties;this.token("{"),this.printInnerComments(e),t.length&&(this.space(),this.printList(t,e,{indent:!0,statement:!0}),this.space());this.token("}")},t.ObjectMethod=function(e){this.printJoin(e.decorators,e),this._methodHead(e),this.space(),this.print(e.body,e)},t.ObjectProperty=function(e){if(this.printJoin(e.decorators,e),e.computed)this.token("["),this.print(e.key,e),this.token("]");else{if(s.isAssignmentPattern(e.value)&&s.isIdentifier(e.key)&&e.key.name===e.value.left.name)return void this.print(e.value,e);if(this.print(e.key,e),e.shorthand&&s.isIdentifier(e.key)&&s.isIdentifier(e.value)&&e.key.name===e.value.name)return}this.token(":"),this.space(),this.print(e.value,e)},t.ArrayPattern=t.ArrayExpression=function(e){const t=e.elements,n=t.length;this.token("["),this.printInnerComments(e);for(let r=0;r<t.length;r++){const s=t[r];s?(r>0&&this.space(),this.print(s,e),r<n-1&&this.token(",")):this.token(",")}this.token("]")},t.RecordExpression=function(e){const t=e.properties;let n,r;if("bar"===this.format.recordAndTupleSyntaxType)n="{|",r="|}";else{if("hash"!==this.format.recordAndTupleSyntaxType)throw new Error(`The "recordAndTupleSyntaxType" generator option must be "bar" or "hash" (${JSON.stringify(this.format.recordAndTupleSyntaxType)} received).`);n="#{",r="}"}this.token(n),this.printInnerComments(e),t.length&&(this.space(),this.printList(t,e,{indent:!0,statement:!0}),this.space());this.token(r)},t.TupleExpression=function(e){const t=e.elements,n=t.length;let r,s;if("bar"===this.format.recordAndTupleSyntaxType)r="[|",s="|]";else{if("hash"!==this.format.recordAndTupleSyntaxType)throw new Error(this.format.recordAndTupleSyntaxType+" is not a valid recordAndTuple syntax type");r="#[",s="]"}this.token(r),this.printInnerComments(e);for(let o=0;o<t.length;o++){const r=t[o];r&&(o>0&&this.space(),this.print(r,e),o<n-1&&this.token(","))}this.token(s)},t.RegExpLiteral=function(e){this.word(`/${e.pattern}/${e.flags}`)},t.BooleanLiteral=function(e){this.word(e.value?"true":"false")},t.NullLiteral=function(){this.word("null")},t.NumericLiteral=function(e){const t=this.getPossibleRaw(e),n=this.format.jsescOption,r=e.value+"";n.numbers?this.number((0,o.default)(e.value,n)):null==t?this.number(r):this.format.minified?this.number(t.length<r.length?t:r):this.number(t)},t.StringLiteral=function(e){const t=this.getPossibleRaw(e);if(!this.format.minified&&null!=t)return void this.token(t);const n=this.format.jsescOption;this.format.jsonCompatibleStrings&&(n.json=!0);const r=(0,o.default)(e.value,n);return this.token(r)},t.BigIntLiteral=function(e){const t=this.getPossibleRaw(e);if(!this.format.minified&&null!=t)return void this.token(t);this.token(e.value+"n")},t.PipelineTopicExpression=function(e){this.print(e.expression,e)},t.PipelineBareFunction=function(e){this.print(e.callee,e)},t.PipelinePrimaryTopicReference=function(){this.token("#")};var r,s=function(e){if(e&&e.__esModule)return e;if(null===e||"object"!==typeof e&&"function"!==typeof e)return{default:e};var t=i();if(t&&t.has(e))return t.get(e);var n={},r=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var s in e)if(Object.prototype.hasOwnProperty.call(e,s)){var o=r?Object.getOwnPropertyDescriptor(e,s):null;o&&(o.get||o.set)?Object.defineProperty(n,s,o):n[s]=e[s]}n.default=e,t&&t.set(e,n);return n}(n("../../node_modules/@babel/types/lib/index.js")),o=(r=n("../../node_modules/@babel/generator/node_modules/jsesc/jsesc.js"))&&r.__esModule?r:{default:r};function i(){if("function"!==typeof WeakMap)return null;var e=new WeakMap;return i=function(){return e},e}},"../../node_modules/@babel/generator/lib/generators/typescript.js":function(e,t,n){"use strict";function r(e,t){!0!==t&&e.token(t)}Object.defineProperty(t,"__esModule",{value:!0}),t.TSTypeAnnotation=function(e){this.token(":"),this.space(),e.optional&&this.token("?");this.print(e.typeAnnotation,e)},t.TSTypeParameterDeclaration=t.TSTypeParameterInstantiation=function(e){this.token("<"),this.printList(e.params,e,{}),this.token(">")},t.TSTypeParameter=function(e){this.word(e.name),e.constraint&&(this.space(),this.word("extends"),this.space(),this.print(e.constraint,e));e.default&&(this.space(),this.token("="),this.space(),this.print(e.default,e))},t.TSParameterProperty=function(e){e.accessibility&&(this.word(e.accessibility),this.space());e.readonly&&(this.word("readonly"),this.space());this._param(e.parameter)},t.TSDeclareFunction=function(e){e.declare&&(this.word("declare"),this.space());this._functionHead(e),this.token(";")},t.TSDeclareMethod=function(e){this._classMethodHead(e),this.token(";")},t.TSQualifiedName=function(e){this.print(e.left,e),this.token("."),this.print(e.right,e)},t.TSCallSignatureDeclaration=function(e){this.tsPrintSignatureDeclarationBase(e),this.token(";")},t.TSConstructSignatureDeclaration=function(e){this.word("new"),this.space(),this.tsPrintSignatureDeclarationBase(e),this.token(";")},t.TSPropertySignature=function(e){const{readonly:t,initializer:n}=e;t&&(this.word("readonly"),this.space());this.tsPrintPropertyOrMethodName(e),this.print(e.typeAnnotation,e),n&&(this.space(),this.token("="),this.space(),this.print(n,e));this.token(";")},t.tsPrintPropertyOrMethodName=function(e){e.computed&&this.token("[");this.print(e.key,e),e.computed&&this.token("]");e.optional&&this.token("?")},t.TSMethodSignature=function(e){this.tsPrintPropertyOrMethodName(e),this.tsPrintSignatureDeclarationBase(e),this.token(";")},t.TSIndexSignature=function(e){const{readonly:t}=e;t&&(this.word("readonly"),this.space());this.token("["),this._parameters(e.parameters,e),this.token("]"),this.print(e.typeAnnotation,e),this.token(";")},t.TSAnyKeyword=function(){this.word("any")},t.TSBigIntKeyword=function(){this.word("bigint")},t.TSUnknownKeyword=function(){this.word("unknown")},t.TSNumberKeyword=function(){this.word("number")},t.TSObjectKeyword=function(){this.word("object")},t.TSBooleanKeyword=function(){this.word("boolean")},t.TSStringKeyword=function(){this.word("string")},t.TSSymbolKeyword=function(){this.word("symbol")},t.TSVoidKeyword=function(){this.word("void")},t.TSUndefinedKeyword=function(){this.word("undefined")},t.TSNullKeyword=function(){this.word("null")},t.TSNeverKeyword=function(){this.word("never")},t.TSThisType=function(){this.word("this")},t.TSFunctionType=function(e){this.tsPrintFunctionOrConstructorType(e)},t.TSConstructorType=function(e){this.word("new"),this.space(),this.tsPrintFunctionOrConstructorType(e)},t.tsPrintFunctionOrConstructorType=function(e){const{typeParameters:t,parameters:n}=e;this.print(t,e),this.token("("),this._parameters(n,e),this.token(")"),this.space(),this.token("=>"),this.space(),this.print(e.typeAnnotation.typeAnnotation,e)},t.TSTypeReference=function(e){this.print(e.typeName,e),this.print(e.typeParameters,e)},t.TSTypePredicate=function(e){e.asserts&&(this.word("asserts"),this.space());this.print(e.parameterName),e.typeAnnotation&&(this.space(),this.word("is"),this.space(),this.print(e.typeAnnotation.typeAnnotation))},t.TSTypeQuery=function(e){this.word("typeof"),this.space(),this.print(e.exprName)},t.TSTypeLiteral=function(e){this.tsPrintTypeLiteralOrInterfaceBody(e.members,e)},t.tsPrintTypeLiteralOrInterfaceBody=function(e,t){this.tsPrintBraced(e,t)},t.tsPrintBraced=function(e,t){if(this.token("{"),e.length){this.indent(),this.newline();for(const n of e)this.print(n,t),this.newline();this.dedent(),this.rightBrace()}else this.token("}")},t.TSArrayType=function(e){this.print(e.elementType,e),this.token("[]")},t.TSTupleType=function(e){this.token("["),this.printList(e.elementTypes,e),this.token("]")},t.TSOptionalType=function(e){this.print(e.typeAnnotation,e),this.token("?")},t.TSRestType=function(e){this.token("..."),this.print(e.typeAnnotation,e)},t.TSUnionType=function(e){this.tsPrintUnionOrIntersectionType(e,"|")},t.TSIntersectionType=function(e){this.tsPrintUnionOrIntersectionType(e,"&")},t.tsPrintUnionOrIntersectionType=function(e,t){this.printJoin(e.types,e,{separator(){this.space(),this.token(t),this.space()}})},t.TSConditionalType=function(e){this.print(e.checkType),this.space(),this.word("extends"),this.space(),this.print(e.extendsType),this.space(),this.token("?"),this.space(),this.print(e.trueType),this.space(),this.token(":"),this.space(),this.print(e.falseType)},t.TSInferType=function(e){this.token("infer"),this.space(),this.print(e.typeParameter)},t.TSParenthesizedType=function(e){this.token("("),this.print(e.typeAnnotation,e),this.token(")")},t.TSTypeOperator=function(e){this.token(e.operator),this.space(),this.print(e.typeAnnotation,e)},t.TSIndexedAccessType=function(e){this.print(e.objectType,e),this.token("["),this.print(e.indexType,e),this.token("]")},t.TSMappedType=function(e){const{readonly:t,typeParameter:n,optional:s}=e;this.token("{"),this.space(),t&&(r(this,t),this.word("readonly"),this.space());this.token("["),this.word(n.name),this.space(),this.word("in"),this.space(),this.print(n.constraint,n),this.token("]"),s&&(r(this,s),this.token("?"));this.token(":"),this.space(),this.print(e.typeAnnotation,e),this.space(),this.token("}")},t.TSLiteralType=function(e){this.print(e.literal,e)},t.TSExpressionWithTypeArguments=function(e){this.print(e.expression,e),this.print(e.typeParameters,e)},t.TSInterfaceDeclaration=function(e){const{declare:t,id:n,typeParameters:r,extends:s,body:o}=e;t&&(this.word("declare"),this.space());this.word("interface"),this.space(),this.print(n,e),this.print(r,e),s&&(this.space(),this.word("extends"),this.space(),this.printList(s,e));this.space(),this.print(o,e)},t.TSInterfaceBody=function(e){this.tsPrintTypeLiteralOrInterfaceBody(e.body,e)},t.TSTypeAliasDeclaration=function(e){const{declare:t,id:n,typeParameters:r,typeAnnotation:s}=e;t&&(this.word("declare"),this.space());this.word("type"),this.space(),this.print(n,e),this.print(r,e),this.space(),this.token("="),this.space(),this.print(s,e),this.token(";")},t.TSAsExpression=function(e){const{expression:t,typeAnnotation:n}=e;this.print(t,e),this.space(),this.word("as"),this.space(),this.print(n,e)},t.TSTypeAssertion=function(e){const{typeAnnotation:t,expression:n}=e;this.token("<"),this.print(t,e),this.token(">"),this.space(),this.print(n,e)},t.TSEnumDeclaration=function(e){const{declare:t,const:n,id:r,members:s}=e;t&&(this.word("declare"),this.space());n&&(this.word("const"),this.space());this.word("enum"),this.space(),this.print(r,e),this.space(),this.tsPrintBraced(s,e)},t.TSEnumMember=function(e){const{id:t,initializer:n}=e;this.print(t,e),n&&(this.space(),this.token("="),this.space(),this.print(n,e));this.token(",")},t.TSModuleDeclaration=function(e){const{declare:t,id:n}=e;t&&(this.word("declare"),this.space());e.global||(this.word("Identifier"===n.type?"namespace":"module"),this.space());if(this.print(n,e),!e.body)return void this.token(";");let r=e.body;for(;"TSModuleDeclaration"===r.type;)this.token("."),this.print(r.id,r),r=r.body;this.space(),this.print(r,e)},t.TSModuleBlock=function(e){this.tsPrintBraced(e.body,e)},t.TSImportType=function(e){const{argument:t,qualifier:n,typeParameters:r}=e;this.word("import"),this.token("("),this.print(t,e),this.token(")"),n&&(this.token("."),this.print(n,e));r&&this.print(r,e)},t.TSImportEqualsDeclaration=function(e){const{isExport:t,id:n,moduleReference:r}=e;t&&(this.word("export"),this.space());this.word("import"),this.space(),this.print(n,e),this.space(),this.token("="),this.space(),this.print(r,e),this.token(";")},t.TSExternalModuleReference=function(e){this.token("require("),this.print(e.expression,e),this.token(")")},t.TSNonNullExpression=function(e){this.print(e.expression,e),this.token("!")},t.TSExportAssignment=function(e){this.word("export"),this.space(),this.token("="),this.space(),this.print(e.expression,e),this.token(";")},t.TSNamespaceExportDeclaration=function(e){this.word("export"),this.space(),this.word("as"),this.space(),this.word("namespace"),this.space(),this.print(e.id,e)},t.tsPrintSignatureDeclarationBase=function(e){const{typeParameters:t,parameters:n}=e;this.print(t,e),this.token("("),this._parameters(n,e),this.token(")"),this.print(e.typeAnnotation,e)},t.tsPrintClassMemberModifiers=function(e,t){t&&e.declare&&(this.word("declare"),this.space());e.accessibility&&(this.word(e.accessibility),this.space());e.static&&(this.word("static"),this.space());e.abstract&&(this.word("abstract"),this.space());t&&e.readonly&&(this.word("readonly"),this.space())}},"../../node_modules/@babel/generator/lib/index.js":function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=function(e,t,n){return new i(e,t,n).generate()},t.CodeGenerator=void 0;var r=o(n("../../node_modules/@babel/generator/lib/source-map.js")),s=o(n("../../node_modules/@babel/generator/lib/printer.js"));function o(e){return e&&e.__esModule?e:{default:e}}class i extends s.default{constructor(e,t={},n){super(function(e,t){const n={auxiliaryCommentBefore:t.auxiliaryCommentBefore,auxiliaryCommentAfter:t.auxiliaryCommentAfter,shouldPrintComment:t.shouldPrintComment,retainLines:t.retainLines,retainFunctionParens:t.retainFunctionParens,comments:null==t.comments||t.comments,compact:t.compact,minified:t.minified,concise:t.concise,jsonCompatibleStrings:t.jsonCompatibleStrings,indent:{adjustMultilineComment:!0,style:"  ",base:0},decoratorsBeforeExport:!!t.decoratorsBeforeExport,jsescOption:Object.assign({quotes:"double",wrap:!0},t.jsescOption),recordAndTupleSyntaxType:t.recordAndTupleSyntaxType};n.minified?(n.compact=!0,n.shouldPrintComment=n.shouldPrintComment||(()=>n.comments)):n.shouldPrintComment=n.shouldPrintComment||(e=>n.comments||e.indexOf("@license")>=0||e.indexOf("@preserve")>=0);"auto"===n.compact&&(n.compact=e.length>5e5,n.compact&&console.error("[BABEL] Note: The code generator has deoptimised the styling of "+t.filename+" as it exceeds the max of 500KB."));n.compact&&(n.indent.adjustMultilineComment=!1);return n}(n,t),t.sourceMaps?new r.default(t,n):null),this.ast=e}generate(){return super.generate(this.ast)}}t.CodeGenerator=class{constructor(e,t,n){this._generator=new i(e,t,n)}generate(){return this._generator.generate()}}},"../../node_modules/@babel/generator/lib/node/index.js":function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.needsWhitespace=p,t.needsWhitespaceBefore=function(e,t){return p(e,t,"before")},t.needsWhitespaceAfter=function(e,t){return p(e,t,"after")},t.needsParens=function(e,t,n){if(!t)return!1;if(o.isNewExpression(t)&&t.callee===e&&function e(t){if(o.isCallExpression(t))return!0;return o.isMemberExpression(t)&&e(t.object)}(e))return!0;return f(u,e,t,n)};var r=a(n("../../node_modules/@babel/generator/lib/node/whitespace.js")),s=a(n("../../node_modules/@babel/generator/lib/node/parentheses.js")),o=a(n("../../node_modules/@babel/types/lib/index.js"));function i(){if("function"!==typeof WeakMap)return null;var e=new WeakMap;return i=function(){return e},e}function a(e){if(e&&e.__esModule)return e;if(null===e||"object"!==typeof e&&"function"!==typeof e)return{default:e};var t=i();if(t&&t.has(e))return t.get(e);var n={},r=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var s in e)if(Object.prototype.hasOwnProperty.call(e,s)){var o=r?Object.getOwnPropertyDescriptor(e,s):null;o&&(o.get||o.set)?Object.defineProperty(n,s,o):n[s]=e[s]}return n.default=e,t&&t.set(e,n),n}function l(e){const t={};function n(e,n){const r=t[e];t[e]=r?function(e,t,s){const o=r(e,t,s);return null==o?n(e,t,s):o}:n}for(const r of Object.keys(e)){const t=o.FLIPPED_ALIAS_KEYS[r];if(t)for(const s of t)n(s,e[r]);else n(r,e[r])}return t}const u=l(s),c=l(r.nodes),d=l(r.list);function f(e,t,n,r){const s=e[t.type];return s?s(t,n,r):null}function p(e,t,n){if(!e)return 0;o.isExpressionStatement(e)&&(e=e.expression);let r=f(c,e,t);if(!r){const s=f(d,e,t);if(s)for(let t=0;t<s.length&&(r=p(s[t],e,n),!r);t++);}return"object"===typeof r&&null!==r&&r[n]||0}},"../../node_modules/@babel/generator/lib/node/parentheses.js":function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.NullableTypeAnnotation=function(e,t){return r.isArrayTypeAnnotation(t)},t.FunctionTypeAnnotation=function(e,t,n){return r.isUnionTypeAnnotation(t)||r.isIntersectionTypeAnnotation(t)||r.isArrayTypeAnnotation(t)||r.isTypeAnnotation(t)&&r.isArrowFunctionExpression(n[n.length-3])},t.UpdateExpression=function(e,t){return a(e,t)||i(e,t)},t.ObjectExpression=function(e,t,n){return c(n,{considerArrow:!0})},t.DoExpression=function(e,t,n){return c(n)},t.Binary=function(e,t){if("**"===e.operator&&r.isBinaryExpression(t,{operator:"**"}))return t.left===e;if(i(e,t))return!0;if(a(e,t)||r.isUnaryLike(t)||r.isAwaitExpression(t))return!0;if(r.isBinary(t)){const n=t.operator,s=o[n],i=e.operator,a=o[i];if(s===a&&t.right===e&&!r.isLogicalExpression(t)||s>a)return!0}},t.IntersectionTypeAnnotation=t.UnionTypeAnnotation=function(e,t){return r.isArrayTypeAnnotation(t)||r.isNullableTypeAnnotation(t)||r.isIntersectionTypeAnnotation(t)||r.isUnionTypeAnnotation(t)},t.TSAsExpression=function(){return!0},t.TSTypeAssertion=function(){return!0},t.TSIntersectionType=t.TSUnionType=function(e,t){return r.isTSArrayType(t)||r.isTSOptionalType(t)||r.isTSIntersectionType(t)||r.isTSUnionType(t)||r.isTSRestType(t)},t.TSInferType=function(e,t){return r.isTSArrayType(t)||r.isTSOptionalType(t)},t.BinaryExpression=function(e,t){return"in"===e.operator&&(r.isVariableDeclarator(t)||r.isFor(t))},t.SequenceExpression=function(e,t){if(r.isForStatement(t)||r.isThrowStatement(t)||r.isReturnStatement(t)||r.isIfStatement(t)&&t.test===e||r.isWhileStatement(t)&&t.test===e||r.isForInStatement(t)&&t.right===e||r.isSwitchStatement(t)&&t.discriminant===e||r.isExpressionStatement(t)&&t.expression===e)return!1;return!0},t.AwaitExpression=t.YieldExpression=function(e,t){return r.isBinary(t)||r.isUnaryLike(t)||a(e,t)||r.isAwaitExpression(t)&&r.isYieldExpression(e)||r.isConditionalExpression(t)&&e===t.test||i(e,t)},t.ClassExpression=function(e,t,n){return c(n,{considerDefaultExports:!0})},t.UnaryLike=l,t.FunctionExpression=function(e,t,n){return c(n,{considerDefaultExports:!0})},t.ArrowFunctionExpression=function(e,t){return r.isExportDeclaration(t)||u(e,t)},t.ConditionalExpression=u,t.OptionalCallExpression=t.OptionalMemberExpression=function(e,t){return r.isCallExpression(t,{callee:e})||r.isMemberExpression(t,{object:e})},t.AssignmentExpression=function(e,t,n){return!!r.isObjectPattern(e.left)||u(e,t)},t.LogicalExpression=function(e,t){switch(e.operator){case"||":return!!r.isLogicalExpression(t)&&("??"===t.operator||"&&"===t.operator);case"&&":return r.isLogicalExpression(t,{operator:"??"});case"??":return r.isLogicalExpression(t)&&"??"!==t.operator}};var r=function(e){if(e&&e.__esModule)return e;if(null===e||"object"!==typeof e&&"function"!==typeof e)return{default:e};var t=s();if(t&&t.has(e))return t.get(e);var n={},r=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var o in e)if(Object.prototype.hasOwnProperty.call(e,o)){var i=r?Object.getOwnPropertyDescriptor(e,o):null;i&&(i.get||i.set)?Object.defineProperty(n,o,i):n[o]=e[o]}n.default=e,t&&t.set(e,n);return n}(n("../../node_modules/@babel/types/lib/index.js"));function s(){if("function"!==typeof WeakMap)return null;var e=new WeakMap;return s=function(){return e},e}const o={"||":0,"??":0,"&&":1,"|":2,"^":3,"&":4,"==":5,"===":5,"!=":5,"!==":5,"<":6,">":6,"<=":6,">=":6,in:6,instanceof:6,">>":7,"<<":7,">>>":7,"+":8,"-":8,"*":9,"/":9,"%":9,"**":10},i=(e,t)=>(r.isClassDeclaration(t)||r.isClassExpression(t))&&t.superClass===e,a=(e,t)=>(r.isMemberExpression(t)||r.isOptionalMemberExpression(t))&&t.object===e||(r.isCallExpression(t)||r.isOptionalCallExpression(t)||r.isNewExpression(t))&&t.callee===e||r.isTaggedTemplateExpression(t)&&t.tag===e||r.isTSNonNullExpression(t);function l(e,t){return a(e,t)||r.isBinaryExpression(t,{operator:"**",left:e})||i(e,t)}function u(e,t){return!!(r.isUnaryLike(t)||r.isBinary(t)||r.isConditionalExpression(t,{test:e})||r.isAwaitExpression(t)||r.isTSTypeAssertion(t)||r.isTSAsExpression(t))||l(e,t)}function c(e,{considerArrow:t=!1,considerDefaultExports:n=!1}={}){let s=e.length-1,o=e[s];s--;let i=e[s];for(;s>0;){if(r.isExpressionStatement(i,{expression:o})||n&&r.isExportDefaultDeclaration(i,{declaration:o})||t&&r.isArrowFunctionExpression(i,{body:o}))return!0;if(!(a(o,i)&&!r.isNewExpression(i)||r.isSequenceExpression(i)&&i.expressions[0]===o||r.isConditional(i,{test:o})||r.isBinary(i,{left:o})||r.isAssignmentExpression(i,{left:o})))return!1;o=i,s--,i=e[s]}return!1}},"../../node_modules/@babel/generator/lib/node/whitespace.js":function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.list=t.nodes=void 0;var r=function(e){if(e&&e.__esModule)return e;if(null===e||"object"!==typeof e&&"function"!==typeof e)return{default:e};var t=s();if(t&&t.has(e))return t.get(e);var n={},r=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var o in e)if(Object.prototype.hasOwnProperty.call(e,o)){var i=r?Object.getOwnPropertyDescriptor(e,o):null;i&&(i.get||i.set)?Object.defineProperty(n,o,i):n[o]=e[o]}n.default=e,t&&t.set(e,n);return n}(n("../../node_modules/@babel/types/lib/index.js"));function s(){if("function"!==typeof WeakMap)return null;var e=new WeakMap;return s=function(){return e},e}function o(e,t={}){return r.isMemberExpression(e)||r.isOptionalMemberExpression(e)?(o(e.object,t),e.computed&&o(e.property,t)):r.isBinary(e)||r.isAssignmentExpression(e)?(o(e.left,t),o(e.right,t)):r.isCallExpression(e)||r.isOptionalCallExpression(e)?(t.hasCall=!0,o(e.callee,t)):r.isFunction(e)?t.hasFunction=!0:r.isIdentifier(e)&&(t.hasHelper=t.hasHelper||i(e.callee)),t}function i(e){return r.isMemberExpression(e)?i(e.object)||i(e.property):r.isIdentifier(e)?"require"===e.name||"_"===e.name[0]:r.isCallExpression(e)?i(e.callee):!(!r.isBinary(e)&&!r.isAssignmentExpression(e))&&(r.isIdentifier(e.left)&&i(e.left)||i(e.right))}function a(e){return r.isLiteral(e)||r.isObjectExpression(e)||r.isArrayExpression(e)||r.isIdentifier(e)||r.isMemberExpression(e)}const l={AssignmentExpression(e){const t=o(e.right);if(t.hasCall&&t.hasHelper||t.hasFunction)return{before:t.hasFunction,after:!0}},SwitchCase:(e,t)=>({before:e.consequent.length||t.cases[0]===e,after:!e.consequent.length&&t.cases[t.cases.length-1]===e}),LogicalExpression(e){if(r.isFunction(e.left)||r.isFunction(e.right))return{after:!0}},Literal(e){if("use strict"===e.value)return{after:!0}},CallExpression(e){if(r.isFunction(e.callee)||i(e))return{before:!0,after:!0}},OptionalCallExpression(e){if(r.isFunction(e.callee))return{before:!0,after:!0}},VariableDeclaration(e){for(let t=0;t<e.declarations.length;t++){const n=e.declarations[t];let r=i(n.id)&&!a(n.init);if(!r){const e=o(n.init);r=i(n.init)&&e.hasCall||e.hasFunction}if(r)return{before:!0,after:!0}}},IfStatement(e){if(r.isBlockStatement(e.consequent))return{before:!0,after:!0}}};t.nodes=l,l.ObjectProperty=l.ObjectTypeProperty=l.ObjectMethod=function(e,t){if(t.properties[0]===e)return{before:!0}},l.ObjectTypeCallProperty=function(e,t){var n;if(t.callProperties[0]===e&&!(null==(n=t.properties)?void 0:n.length))return{before:!0}},l.ObjectTypeIndexer=function(e,t){var n,r;if(t.indexers[0]===e&&!(null==(n=t.properties)?void 0:n.length)&&!(null==(r=t.callProperties)?void 0:r.length))return{before:!0}},l.ObjectTypeInternalSlot=function(e,t){var n,r,s;if(t.internalSlots[0]===e&&!(null==(n=t.properties)?void 0:n.length)&&!(null==(r=t.callProperties)?void 0:r.length)&&!(null==(s=t.indexers)?void 0:s.length))return{before:!0}};const u={VariableDeclaration:e=>e.declarations.map(e=>e.init),ArrayExpression:e=>e.elements,ObjectExpression:e=>e.properties};t.list=u,[["Function",!0],["Class",!0],["Loop",!0],["LabeledStatement",!0],["SwitchStatement",!0],["TryStatement",!0]].forEach((function([e,t]){"boolean"===typeof t&&(t={after:t,before:t}),[e].concat(r.FLIPPED_ALIAS_KEYS[e]||[]).forEach((function(e){l[e]=function(){return t}}))}))},"../../node_modules/@babel/generator/lib/printer.js":function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var r=d(n("../../node_modules/lodash/isInteger.js")),s=d(n("../../node_modules/lodash/repeat.js")),o=d(n("../../node_modules/@babel/generator/lib/buffer.js")),i=c(n("../../node_modules/@babel/generator/lib/node/index.js")),a=c(n("../../node_modules/@babel/types/lib/index.js")),l=c(n("../../node_modules/@babel/generator/lib/generators/index.js"));function u(){if("function"!==typeof WeakMap)return null;var e=new WeakMap;return u=function(){return e},e}function c(e){if(e&&e.__esModule)return e;if(null===e||"object"!==typeof e&&"function"!==typeof e)return{default:e};var t=u();if(t&&t.has(e))return t.get(e);var n={},r=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var s in e)if(Object.prototype.hasOwnProperty.call(e,s)){var o=r?Object.getOwnPropertyDescriptor(e,s):null;o&&(o.get||o.set)?Object.defineProperty(n,s,o):n[s]=e[s]}return n.default=e,t&&t.set(e,n),n}function d(e){return e&&e.__esModule?e:{default:e}}const f=/e/i,p=/\.0+$/,h=/^0[box]/,m=/^\s*[@#]__PURE__\s*$/;class y{constructor(e,t){this.inForStatementInitCounter=0,this._printStack=[],this._indent=0,this._insideAux=!1,this._printedCommentStarts={},this._parenPushNewlineState=null,this._noLineTerminator=!1,this._printAuxAfterOnNextUserNode=!1,this._printedComments=new WeakSet,this._endsWithInteger=!1,this._endsWithWord=!1,this.format=e||{},this._buf=new o.default(t)}generate(e){return this.print(e),this._maybeAddAuxComment(),this._buf.get()}indent(){this.format.compact||this.format.concise||this._indent++}dedent(){this.format.compact||this.format.concise||this._indent--}semicolon(e=!1){this._maybeAddAuxComment(),this._append(";",!e)}rightBrace(){this.format.minified&&this._buf.removeLastSemicolon(),this.token("}")}space(e=!1){this.format.compact||(this._buf.hasContent()&&!this.endsWith(" ")&&!this.endsWith("\n")||e)&&this._space()}word(e){(this._endsWithWord||this.endsWith("/")&&0===e.indexOf("/"))&&this._space(),this._maybeAddAuxComment(),this._append(e),this._endsWithWord=!0}number(e){this.word(e),this._endsWithInteger=(0,r.default)(+e)&&!h.test(e)&&!f.test(e)&&!p.test(e)&&"."!==e[e.length-1]}token(e){("--"===e&&this.endsWith("!")||"+"===e[0]&&this.endsWith("+")||"-"===e[0]&&this.endsWith("-")||"."===e[0]&&this._endsWithInteger)&&this._space(),this._maybeAddAuxComment(),this._append(e)}newline(e){if(!this.format.retainLines&&!this.format.compact)if(this.format.concise)this.space();else if(!this.endsWith("\n\n")&&("number"!==typeof e&&(e=1),e=Math.min(2,e),(this.endsWith("{\n")||this.endsWith(":\n"))&&e--,!(e<=0)))for(let t=0;t<e;t++)this._newline()}endsWith(e){return this._buf.endsWith(e)}removeTrailingNewline(){this._buf.removeTrailingNewline()}exactSource(e,t){this._catchUp("start",e),this._buf.exactSource(e,t)}source(e,t){this._catchUp(e,t),this._buf.source(e,t)}withSource(e,t,n){this._catchUp(e,t),this._buf.withSource(e,t,n)}_space(){this._append(" ",!0)}_newline(){this._append("\n",!0)}_append(e,t=!1){this._maybeAddParen(e),this._maybeIndent(e),t?this._buf.queue(e):this._buf.append(e),this._endsWithWord=!1,this._endsWithInteger=!1}_maybeIndent(e){this._indent&&this.endsWith("\n")&&"\n"!==e[0]&&this._buf.queue(this._getIndent())}_maybeAddParen(e){const t=this._parenPushNewlineState;if(!t)return;let n;for(n=0;n<e.length&&" "===e[n];n++)continue;if(n===e.length)return;const r=e[n];if("\n"!==r){if("/"!==r||n+1===e.length)return void(this._parenPushNewlineState=null);const t=e[n+1];if("*"===t){if(m.test(e.slice(n+2,e.length-2)))return}else if("/"!==t)return void(this._parenPushNewlineState=null)}this.token("("),this.indent(),t.printed=!0}_catchUp(e,t){if(!this.format.retainLines)return;const n=t?t[e]:null;if(null!=(null==n?void 0:n.line)){const e=n.line-this._buf.getCurrentLine();for(let t=0;t<e;t++)this._newline()}}_getIndent(){return(0,s.default)(this.format.indent.style,this._indent)}startTerminatorless(e=!1){return e?(this._noLineTerminator=!0,null):this._parenPushNewlineState={printed:!1}}endTerminatorless(e){this._noLineTerminator=!1,(null==e?void 0:e.printed)&&(this.dedent(),this.newline(),this.token(")"))}print(e,t){if(!e)return;const n=this.format.concise;e._compact&&(this.format.concise=!0);const r=this[e.type];if(!r)throw new ReferenceError(`unknown node of type ${JSON.stringify(e.type)} with constructor ${JSON.stringify(null==e?void 0:e.constructor.name)}`);this._printStack.push(e);const s=this._insideAux;this._insideAux=!e.loc,this._maybeAddAuxComment(this._insideAux&&!s);let o=i.needsParens(e,t,this._printStack);this.format.retainFunctionParens&&"FunctionExpression"===e.type&&e.extra&&e.extra.parenthesized&&(o=!0),o&&this.token("("),this._printLeadingComments(e);const l=a.isProgram(e)||a.isFile(e)?null:e.loc;this.withSource("start",l,()=>{r.call(this,e,t)}),this._printTrailingComments(e),o&&this.token(")"),this._printStack.pop(),this.format.concise=n,this._insideAux=s}_maybeAddAuxComment(e){e&&this._printAuxBeforeComment(),this._insideAux||this._printAuxAfterComment()}_printAuxBeforeComment(){if(this._printAuxAfterOnNextUserNode)return;this._printAuxAfterOnNextUserNode=!0;const e=this.format.auxiliaryCommentBefore;e&&this._printComment({type:"CommentBlock",value:e})}_printAuxAfterComment(){if(!this._printAuxAfterOnNextUserNode)return;this._printAuxAfterOnNextUserNode=!1;const e=this.format.auxiliaryCommentAfter;e&&this._printComment({type:"CommentBlock",value:e})}getPossibleRaw(e){const t=e.extra;if(t&&null!=t.raw&&null!=t.rawValue&&e.value===t.rawValue)return t.raw}printJoin(e,t,n={}){if(!(null==e?void 0:e.length))return;n.indent&&this.indent();const r={addNewlines:n.addNewlines};for(let s=0;s<e.length;s++){const o=e[s];o&&(n.statement&&this._printNewline(!0,o,t,r),this.print(o,t),n.iterator&&n.iterator(o,s),n.separator&&s<e.length-1&&n.separator.call(this),n.statement&&this._printNewline(!1,o,t,r))}n.indent&&this.dedent()}printAndIndentOnComments(e,t){const n=e.leadingComments&&e.leadingComments.length>0;n&&this.indent(),this.print(e,t),n&&this.dedent()}printBlock(e){const t=e.body;a.isEmptyStatement(t)||this.space(),this.print(t,e)}_printTrailingComments(e){this._printComments(this._getComments(!1,e))}_printLeadingComments(e){this._printComments(this._getComments(!0,e),!0)}printInnerComments(e,t=!0){var n;(null==(n=e.innerComments)?void 0:n.length)&&(t&&this.indent(),this._printComments(e.innerComments),t&&this.dedent())}printSequence(e,t,n={}){return n.statement=!0,this.printJoin(e,t,n)}printList(e,t,n={}){return null==n.separator&&(n.separator=b),this.printJoin(e,t,n)}_printNewline(e,t,n,r){if(this.format.retainLines||this.format.compact)return;if(this.format.concise)return void this.space();let s=0;if(this._buf.hasContent()){e||s++,r.addNewlines&&(s+=r.addNewlines(e,t)||0),(e?i.needsWhitespaceBefore:i.needsWhitespaceAfter)(t,n)&&s++}this.newline(s)}_getComments(e,t){return t&&(e?t.leadingComments:t.trailingComments)||[]}_printComment(e,t){if(!this.format.shouldPrintComment(e.value))return;if(e.ignore)return;if(this._printedComments.has(e))return;if(this._printedComments.add(e),null!=e.start){if(this._printedCommentStarts[e.start])return;this._printedCommentStarts[e.start]=!0}const n="CommentBlock"===e.type,r=n&&!t&&!this._noLineTerminator;r&&this._buf.hasContent()&&this.newline(1),this.endsWith("[")||this.endsWith("{")||this.space();let o=n||this._noLineTerminator?`/*${e.value}*/`:`//${e.value}\n`;if(n&&this.format.indent.adjustMultilineComment){var i;const t=null==(i=e.loc)?void 0:i.start.column;if(t){const e=new RegExp("\\n\\s{1,"+t+"}","g");o=o.replace(e,"\n")}const n=Math.max(this._getIndent().length,this._buf.getCurrentColumn());o=o.replace(/\n(?!$)/g,"\n"+(0,s.default)(" ",n))}this.endsWith("/")&&this._space(),this.withSource("start",e.loc,()=>{this._append(o)}),r&&this.newline(1)}_printComments(e,t){if(null==e?void 0:e.length)if(t&&1===e.length&&m.test(e[0].value))this._printComment(e[0],this._buf.hasContent()&&!this.endsWith("\n"));else for(const n of e)this._printComment(n)}}function b(){this.token(","),this.space()}t.default=y,Object.assign(y.prototype,l)},"../../node_modules/@babel/generator/lib/source-map.js":function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var r,s=(r=n("../../node_modules/@babel/generator/node_modules/source-map/source-map.js"))&&r.__esModule?r:{default:r};t.default=class{constructor(e,t){this._cachedMap=null,this._code=t,this._opts=e,this._rawMappings=[]}get(){if(!this._cachedMap){const e=this._cachedMap=new s.default.SourceMapGenerator({sourceRoot:this._opts.sourceRoot}),t=this._code;"string"===typeof t?e.setSourceContent(this._opts.sourceFileName.replace(/\\/g,"/"),t):"object"===typeof t&&Object.keys(t).forEach(n=>{e.setSourceContent(n.replace(/\\/g,"/"),t[n])}),this._rawMappings.forEach(t=>e.addMapping(t),e)}return this._cachedMap.toJSON()}getRawMappings(){return this._rawMappings.slice()}mark(e,t,n,r,s,o,i){this._lastGenLine!==e&&null===n||(i||this._lastGenLine!==e||this._lastSourceLine!==n||this._lastSourceColumn!==r)&&(this._cachedMap=null,this._lastGenLine=e,this._lastSourceLine=n,this._lastSourceColumn=r,this._rawMappings.push({name:s||void 0,generated:{line:e,column:t},source:null==n?void 0:(o||this._opts.sourceFileName).replace(/\\/g,"/"),original:null==n?void 0:{line:n,column:r}}))}}},"../../node_modules/@babel/generator/node_modules/jsesc/jsesc.js":function(e,t,n){"use strict";(function(t){const n={},r=n.hasOwnProperty,s=(e,t)=>{for(const n in e)r.call(e,n)&&t(n,e[n])},o=n.toString,i=Array.isArray,a=t.isBuffer,l={'"':'\\"',"'":"\\'","\\":"\\\\","\b":"\\b","\f":"\\f","\n":"\\n","\r":"\\r","\t":"\\t"},u=/["'\\\b\f\n\r\t]/,c=/[0-9]/,d=/[ !#-&\(-\[\]-_a-~]/,f=(e,t)=>{const n=()=>{_=v,++t.indentLevel,v=t.indent.repeat(t.indentLevel)},r={escapeEverything:!1,minimal:!1,isScriptContext:!1,quotes:"single",wrap:!1,es6:!1,json:!1,compact:!0,lowercaseHex:!1,numbers:"decimal",indent:"\t",indentLevel:0,__inline1__:!1,__inline2__:!1},p=t&&t.json;var h,m;p&&(r.quotes="double",r.wrap=!0),h=r,"single"!=(t=(m=t)?(s(m,(e,t)=>{h[e]=t}),h):h).quotes&&"double"!=t.quotes&&"backtick"!=t.quotes&&(t.quotes="single");const y="double"==t.quotes?'"':"backtick"==t.quotes?"`":"'",b=t.compact,g=t.lowercaseHex;let v=t.indent.repeat(t.indentLevel),_="";const j=t.__inline1__,x=t.__inline2__,w=b?"":"\n";let S,E=!0;const T="binary"==t.numbers,P="octal"==t.numbers,k="decimal"==t.numbers,A="hexadecimal"==t.numbers;if(p&&e&&"function"==typeof e.toJSON&&(e=e.toJSON()),!(e=>"string"==typeof e||"[object String]"==o.call(e))(e)){if((e=>"[object Map]"==o.call(e))(e))return 0==e.size?"new Map()":(b||(t.__inline1__=!0,t.__inline2__=!1),"new Map("+f(Array.from(e),t)+")");if((e=>"[object Set]"==o.call(e))(e))return 0==e.size?"new Set()":"new Set("+f(Array.from(e),t)+")";if(a(e))return 0==e.length?"Buffer.from([])":"Buffer.from("+f(Array.from(e),t)+")";if(i(e))return S=[],t.wrap=!0,j&&(t.__inline1__=!1,t.__inline2__=!0),x||n(),((e,t)=>{const n=e.length;let r=-1;for(;++r<n;)t(e[r])})(e,e=>{E=!1,x&&(t.__inline2__=!1),S.push((b||x?"":v)+f(e,t))}),E?"[]":x?"["+S.join(", ")+"]":"["+w+S.join(","+w)+w+(b?"":_)+"]";if(!(e=>"number"==typeof e||"[object Number]"==o.call(e))(e))return(e=>"[object Object]"==o.call(e))(e)?(S=[],t.wrap=!0,n(),s(e,(e,n)=>{E=!1,S.push((b?"":v)+f(e,t)+":"+(b?"":" ")+f(n,t))}),E?"{}":"{"+w+S.join(","+w)+w+(b?"":_)+"}"):p?JSON.stringify(e)||"null":String(e);if(p)return JSON.stringify(e);if(k)return String(e);if(A){let t=e.toString(16);return g||(t=t.toUpperCase()),"0x"+t}if(T)return"0b"+e.toString(2);if(P)return"0o"+e.toString(8)}const O=e;let C=-1;const M=O.length;for(S="";++C<M;){const e=O.charAt(C);if(t.es6){const e=O.charCodeAt(C);if(e>=55296&&e<=56319&&M>C+1){const t=O.charCodeAt(C+1);if(t>=56320&&t<=57343){let n=(1024*(e-55296)+t-56320+65536).toString(16);g||(n=n.toUpperCase()),S+="\\u{"+n+"}",++C;continue}}}if(!t.escapeEverything){if(d.test(e)){S+=e;continue}if('"'==e){S+=y==e?'\\"':e;continue}if("`"==e){S+=y==e?"\\`":e;continue}if("'"==e){S+=y==e?"\\'":e;continue}}if("\0"==e&&!p&&!c.test(O.charAt(C+1))){S+="\\0";continue}if(u.test(e)){S+=l[e];continue}const n=e.charCodeAt(0);if(t.minimal&&8232!=n&&8233!=n){S+=e;continue}let r=n.toString(16);g||(r=r.toUpperCase());const s=r.length>2||p,o="\\"+(s?"u":"x")+("0000"+r).slice(s?-4:-2);S+=o}return t.wrap&&(S=y+S+y),"`"==y&&(S=S.replace(/\$\{/g,"\\${")),t.isScriptContext?S.replace(/<\/(script|style)/gi,"<\\/$1").replace(/<!--/g,p?"\\u003C!--":"\\x3C!--"):S};f.version="2.5.2",e.exports=f}).call(this,n("../../node_modules/node-libs-browser/node_modules/buffer/index.js").Buffer)},"../../node_modules/@babel/generator/node_modules/source-map/lib/array-set.js":function(e,t,n){var r=n("../../node_modules/@babel/generator/node_modules/source-map/lib/util.js"),s=Object.prototype.hasOwnProperty,o="undefined"!==typeof Map;function i(){this._array=[],this._set=o?new Map:Object.create(null)}i.fromArray=function(e,t){for(var n=new i,r=0,s=e.length;r<s;r++)n.add(e[r],t);return n},i.prototype.size=function(){return o?this._set.size:Object.getOwnPropertyNames(this._set).length},i.prototype.add=function(e,t){var n=o?e:r.toSetString(e),i=o?this.has(e):s.call(this._set,n),a=this._array.length;i&&!t||this._array.push(e),i||(o?this._set.set(e,a):this._set[n]=a)},i.prototype.has=function(e){if(o)return this._set.has(e);var t=r.toSetString(e);return s.call(this._set,t)},i.prototype.indexOf=function(e){if(o){var t=this._set.get(e);if(t>=0)return t}else{var n=r.toSetString(e);if(s.call(this._set,n))return this._set[n]}throw new Error('"'+e+'" is not in the set.')},i.prototype.at=function(e){if(e>=0&&e<this._array.length)return this._array[e];throw new Error("No element indexed by "+e)},i.prototype.toArray=function(){return this._array.slice()},t.ArraySet=i},"../../node_modules/@babel/generator/node_modules/source-map/lib/base64-vlq.js":function(e,t,n){var r=n("../../node_modules/@babel/generator/node_modules/source-map/lib/base64.js");t.encode=function(e){var t,n="",s=function(e){return e<0?1+(-e<<1):0+(e<<1)}(e);do{t=31&s,(s>>>=5)>0&&(t|=32),n+=r.encode(t)}while(s>0);return n},t.decode=function(e,t,n){var s,o,i=e.length,a=0,l=0;do{if(t>=i)throw new Error("Expected more digits in base 64 VLQ value.");if(-1===(o=r.decode(e.charCodeAt(t++))))throw new Error("Invalid base64 digit: "+e.charAt(t-1));s=!!(32&o),a+=(o&=31)<<l,l+=5}while(s);n.value=function(e){var t=e>>1;return 1===(1&e)?-t:t}(a),n.rest=t}},"../../node_modules/@babel/generator/node_modules/source-map/lib/base64.js":function(e,t){var n="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/".split("");t.encode=function(e){if(0<=e&&e<n.length)return n[e];throw new TypeError("Must be between 0 and 63: "+e)},t.decode=function(e){return 65<=e&&e<=90?e-65:97<=e&&e<=122?e-97+26:48<=e&&e<=57?e-48+52:43==e?62:47==e?63:-1}},"../../node_modules/@babel/generator/node_modules/source-map/lib/binary-search.js":function(e,t){t.GREATEST_LOWER_BOUND=1,t.LEAST_UPPER_BOUND=2,t.search=function(e,n,r,s){if(0===n.length)return-1;var o=function e(n,r,s,o,i,a){var l=Math.floor((r-n)/2)+n,u=i(s,o[l],!0);return 0===u?l:u>0?r-l>1?e(l,r,s,o,i,a):a==t.LEAST_UPPER_BOUND?r<o.length?r:-1:l:l-n>1?e(n,l,s,o,i,a):a==t.LEAST_UPPER_BOUND?l:n<0?-1:n}(-1,n.length,e,n,r,s||t.GREATEST_LOWER_BOUND);if(o<0)return-1;for(;o-1>=0&&0===r(n[o],n[o-1],!0);)--o;return o}},"../../node_modules/@babel/generator/node_modules/source-map/lib/mapping-list.js":function(e,t,n){var r=n("../../node_modules/@babel/generator/node_modules/source-map/lib/util.js");function s(){this._array=[],this._sorted=!0,this._last={generatedLine:-1,generatedColumn:0}}s.prototype.unsortedForEach=function(e,t){this._array.forEach(e,t)},s.prototype.add=function(e){!function(e,t){var n=e.generatedLine,s=t.generatedLine,o=e.generatedColumn,i=t.generatedColumn;return s>n||s==n&&i>=o||r.compareByGeneratedPositionsInflated(e,t)<=0}(this._last,e)?(this._sorted=!1,this._array.push(e)):(this._last=e,this._array.push(e))},s.prototype.toArray=function(){return this._sorted||(this._array.sort(r.compareByGeneratedPositionsInflated),this._sorted=!0),this._array},t.MappingList=s},"../../node_modules/@babel/generator/node_modules/source-map/lib/quick-sort.js":function(e,t){function n(e,t,n){var r=e[t];e[t]=e[n],e[n]=r}function r(e,t,s,o){if(s<o){var i=s-1;n(e,(c=s,d=o,Math.round(c+Math.random()*(d-c))),o);for(var a=e[o],l=s;l<o;l++)t(e[l],a)<=0&&n(e,i+=1,l);n(e,i+1,l);var u=i+1;r(e,t,s,u-1),r(e,t,u+1,o)}var c,d}t.quickSort=function(e,t){r(e,t,0,e.length-1)}},"../../node_modules/@babel/generator/node_modules/source-map/lib/source-map-consumer.js":function(e,t,n){var r=n("../../node_modules/@babel/generator/node_modules/source-map/lib/util.js"),s=n("../../node_modules/@babel/generator/node_modules/source-map/lib/binary-search.js"),o=n("../../node_modules/@babel/generator/node_modules/source-map/lib/array-set.js").ArraySet,i=n("../../node_modules/@babel/generator/node_modules/source-map/lib/base64-vlq.js"),a=n("../../node_modules/@babel/generator/node_modules/source-map/lib/quick-sort.js").quickSort;function l(e){var t=e;return"string"===typeof e&&(t=JSON.parse(e.replace(/^\)\]\}'/,""))),null!=t.sections?new d(t):new u(t)}function u(e){var t=e;"string"===typeof e&&(t=JSON.parse(e.replace(/^\)\]\}'/,"")));var n=r.getArg(t,"version"),s=r.getArg(t,"sources"),i=r.getArg(t,"names",[]),a=r.getArg(t,"sourceRoot",null),l=r.getArg(t,"sourcesContent",null),u=r.getArg(t,"mappings"),c=r.getArg(t,"file",null);if(n!=this._version)throw new Error("Unsupported version: "+n);s=s.map(String).map(r.normalize).map((function(e){return a&&r.isAbsolute(a)&&r.isAbsolute(e)?r.relative(a,e):e})),this._names=o.fromArray(i.map(String),!0),this._sources=o.fromArray(s,!0),this.sourceRoot=a,this.sourcesContent=l,this._mappings=u,this.file=c}function c(){this.generatedLine=0,this.generatedColumn=0,this.source=null,this.originalLine=null,this.originalColumn=null,this.name=null}function d(e){var t=e;"string"===typeof e&&(t=JSON.parse(e.replace(/^\)\]\}'/,"")));var n=r.getArg(t,"version"),s=r.getArg(t,"sections");if(n!=this._version)throw new Error("Unsupported version: "+n);this._sources=new o,this._names=new o;var i={line:-1,column:0};this._sections=s.map((function(e){if(e.url)throw new Error("Support for url field in sections not implemented.");var t=r.getArg(e,"offset"),n=r.getArg(t,"line"),s=r.getArg(t,"column");if(n<i.line||n===i.line&&s<i.column)throw new Error("Section offsets must be ordered and non-overlapping.");return i=t,{generatedOffset:{generatedLine:n+1,generatedColumn:s+1},consumer:new l(r.getArg(e,"map"))}}))}l.fromSourceMap=function(e){return u.fromSourceMap(e)},l.prototype._version=3,l.prototype.__generatedMappings=null,Object.defineProperty(l.prototype,"_generatedMappings",{get:function(){return this.__generatedMappings||this._parseMappings(this._mappings,this.sourceRoot),this.__generatedMappings}}),l.prototype.__originalMappings=null,Object.defineProperty(l.prototype,"_originalMappings",{get:function(){return this.__originalMappings||this._parseMappings(this._mappings,this.sourceRoot),this.__originalMappings}}),l.prototype._charIsMappingSeparator=function(e,t){var n=e.charAt(t);return";"===n||","===n},l.prototype._parseMappings=function(e,t){throw new Error("Subclasses must implement _parseMappings")},l.GENERATED_ORDER=1,l.ORIGINAL_ORDER=2,l.GREATEST_LOWER_BOUND=1,l.LEAST_UPPER_BOUND=2,l.prototype.eachMapping=function(e,t,n){var s,o=t||null;switch(n||l.GENERATED_ORDER){case l.GENERATED_ORDER:s=this._generatedMappings;break;case l.ORIGINAL_ORDER:s=this._originalMappings;break;default:throw new Error("Unknown order of iteration.")}var i=this.sourceRoot;s.map((function(e){var t=null===e.source?null:this._sources.at(e.source);return null!=t&&null!=i&&(t=r.join(i,t)),{source:t,generatedLine:e.generatedLine,generatedColumn:e.generatedColumn,originalLine:e.originalLine,originalColumn:e.originalColumn,name:null===e.name?null:this._names.at(e.name)}}),this).forEach(e,o)},l.prototype.allGeneratedPositionsFor=function(e){var t=r.getArg(e,"line"),n={source:r.getArg(e,"source"),originalLine:t,originalColumn:r.getArg(e,"column",0)};if(null!=this.sourceRoot&&(n.source=r.relative(this.sourceRoot,n.source)),!this._sources.has(n.source))return[];n.source=this._sources.indexOf(n.source);var o=[],i=this._findMapping(n,this._originalMappings,"originalLine","originalColumn",r.compareByOriginalPositions,s.LEAST_UPPER_BOUND);if(i>=0){var a=this._originalMappings[i];if(void 0===e.column)for(var l=a.originalLine;a&&a.originalLine===l;)o.push({line:r.getArg(a,"generatedLine",null),column:r.getArg(a,"generatedColumn",null),lastColumn:r.getArg(a,"lastGeneratedColumn",null)}),a=this._originalMappings[++i];else for(var u=a.originalColumn;a&&a.originalLine===t&&a.originalColumn==u;)o.push({line:r.getArg(a,"generatedLine",null),column:r.getArg(a,"generatedColumn",null),lastColumn:r.getArg(a,"lastGeneratedColumn",null)}),a=this._originalMappings[++i]}return o},t.SourceMapConsumer=l,u.prototype=Object.create(l.prototype),u.prototype.consumer=l,u.fromSourceMap=function(e){var t=Object.create(u.prototype),n=t._names=o.fromArray(e._names.toArray(),!0),s=t._sources=o.fromArray(e._sources.toArray(),!0);t.sourceRoot=e._sourceRoot,t.sourcesContent=e._generateSourcesContent(t._sources.toArray(),t.sourceRoot),t.file=e._file;for(var i=e._mappings.toArray().slice(),l=t.__generatedMappings=[],d=t.__originalMappings=[],f=0,p=i.length;f<p;f++){var h=i[f],m=new c;m.generatedLine=h.generatedLine,m.generatedColumn=h.generatedColumn,h.source&&(m.source=s.indexOf(h.source),m.originalLine=h.originalLine,m.originalColumn=h.originalColumn,h.name&&(m.name=n.indexOf(h.name)),d.push(m)),l.push(m)}return a(t.__originalMappings,r.compareByOriginalPositions),t},u.prototype._version=3,Object.defineProperty(u.prototype,"sources",{get:function(){return this._sources.toArray().map((function(e){return null!=this.sourceRoot?r.join(this.sourceRoot,e):e}),this)}}),u.prototype._parseMappings=function(e,t){for(var n,s,o,l,u,d=1,f=0,p=0,h=0,m=0,y=0,b=e.length,g=0,v={},_={},j=[],x=[];g<b;)if(";"===e.charAt(g))d++,g++,f=0;else if(","===e.charAt(g))g++;else{for((n=new c).generatedLine=d,l=g;l<b&&!this._charIsMappingSeparator(e,l);l++);if(o=v[s=e.slice(g,l)])g+=s.length;else{for(o=[];g<l;)i.decode(e,g,_),u=_.value,g=_.rest,o.push(u);if(2===o.length)throw new Error("Found a source, but no line and column");if(3===o.length)throw new Error("Found a source and line, but no column");v[s]=o}n.generatedColumn=f+o[0],f=n.generatedColumn,o.length>1&&(n.source=m+o[1],m+=o[1],n.originalLine=p+o[2],p=n.originalLine,n.originalLine+=1,n.originalColumn=h+o[3],h=n.originalColumn,o.length>4&&(n.name=y+o[4],y+=o[4])),x.push(n),"number"===typeof n.originalLine&&j.push(n)}a(x,r.compareByGeneratedPositionsDeflated),this.__generatedMappings=x,a(j,r.compareByOriginalPositions),this.__originalMappings=j},u.prototype._findMapping=function(e,t,n,r,o,i){if(e[n]<=0)throw new TypeError("Line must be greater than or equal to 1, got "+e[n]);if(e[r]<0)throw new TypeError("Column must be greater than or equal to 0, got "+e[r]);return s.search(e,t,o,i)},u.prototype.computeColumnSpans=function(){for(var e=0;e<this._generatedMappings.length;++e){var t=this._generatedMappings[e];if(e+1<this._generatedMappings.length){var n=this._generatedMappings[e+1];if(t.generatedLine===n.generatedLine){t.lastGeneratedColumn=n.generatedColumn-1;continue}}t.lastGeneratedColumn=1/0}},u.prototype.originalPositionFor=function(e){var t={generatedLine:r.getArg(e,"line"),generatedColumn:r.getArg(e,"column")},n=this._findMapping(t,this._generatedMappings,"generatedLine","generatedColumn",r.compareByGeneratedPositionsDeflated,r.getArg(e,"bias",l.GREATEST_LOWER_BOUND));if(n>=0){var s=this._generatedMappings[n];if(s.generatedLine===t.generatedLine){var o=r.getArg(s,"source",null);null!==o&&(o=this._sources.at(o),null!=this.sourceRoot&&(o=r.join(this.sourceRoot,o)));var i=r.getArg(s,"name",null);return null!==i&&(i=this._names.at(i)),{source:o,line:r.getArg(s,"originalLine",null),column:r.getArg(s,"originalColumn",null),name:i}}}return{source:null,line:null,column:null,name:null}},u.prototype.hasContentsOfAllSources=function(){return!!this.sourcesContent&&(this.sourcesContent.length>=this._sources.size()&&!this.sourcesContent.some((function(e){return null==e})))},u.prototype.sourceContentFor=function(e,t){if(!this.sourcesContent)return null;if(null!=this.sourceRoot&&(e=r.relative(this.sourceRoot,e)),this._sources.has(e))return this.sourcesContent[this._sources.indexOf(e)];var n;if(null!=this.sourceRoot&&(n=r.urlParse(this.sourceRoot))){var s=e.replace(/^file:\/\//,"");if("file"==n.scheme&&this._sources.has(s))return this.sourcesContent[this._sources.indexOf(s)];if((!n.path||"/"==n.path)&&this._sources.has("/"+e))return this.sourcesContent[this._sources.indexOf("/"+e)]}if(t)return null;throw new Error('"'+e+'" is not in the SourceMap.')},u.prototype.generatedPositionFor=function(e){var t=r.getArg(e,"source");if(null!=this.sourceRoot&&(t=r.relative(this.sourceRoot,t)),!this._sources.has(t))return{line:null,column:null,lastColumn:null};var n={source:t=this._sources.indexOf(t),originalLine:r.getArg(e,"line"),originalColumn:r.getArg(e,"column")},s=this._findMapping(n,this._originalMappings,"originalLine","originalColumn",r.compareByOriginalPositions,r.getArg(e,"bias",l.GREATEST_LOWER_BOUND));if(s>=0){var o=this._originalMappings[s];if(o.source===n.source)return{line:r.getArg(o,"generatedLine",null),column:r.getArg(o,"generatedColumn",null),lastColumn:r.getArg(o,"lastGeneratedColumn",null)}}return{line:null,column:null,lastColumn:null}},t.BasicSourceMapConsumer=u,d.prototype=Object.create(l.prototype),d.prototype.constructor=l,d.prototype._version=3,Object.defineProperty(d.prototype,"sources",{get:function(){for(var e=[],t=0;t<this._sections.length;t++)for(var n=0;n<this._sections[t].consumer.sources.length;n++)e.push(this._sections[t].consumer.sources[n]);return e}}),d.prototype.originalPositionFor=function(e){var t={generatedLine:r.getArg(e,"line"),generatedColumn:r.getArg(e,"column")},n=s.search(t,this._sections,(function(e,t){var n=e.generatedLine-t.generatedOffset.generatedLine;return n||e.generatedColumn-t.generatedOffset.generatedColumn})),o=this._sections[n];return o?o.consumer.originalPositionFor({line:t.generatedLine-(o.generatedOffset.generatedLine-1),column:t.generatedColumn-(o.generatedOffset.generatedLine===t.generatedLine?o.generatedOffset.generatedColumn-1:0),bias:e.bias}):{source:null,line:null,column:null,name:null}},d.prototype.hasContentsOfAllSources=function(){return this._sections.every((function(e){return e.consumer.hasContentsOfAllSources()}))},d.prototype.sourceContentFor=function(e,t){for(var n=0;n<this._sections.length;n++){var r=this._sections[n].consumer.sourceContentFor(e,!0);if(r)return r}if(t)return null;throw new Error('"'+e+'" is not in the SourceMap.')},d.prototype.generatedPositionFor=function(e){for(var t=0;t<this._sections.length;t++){var n=this._sections[t];if(-1!==n.consumer.sources.indexOf(r.getArg(e,"source"))){var s=n.consumer.generatedPositionFor(e);if(s)return{line:s.line+(n.generatedOffset.generatedLine-1),column:s.column+(n.generatedOffset.generatedLine===s.line?n.generatedOffset.generatedColumn-1:0)}}}return{line:null,column:null}},d.prototype._parseMappings=function(e,t){this.__generatedMappings=[],this.__originalMappings=[];for(var n=0;n<this._sections.length;n++)for(var s=this._sections[n],o=s.consumer._generatedMappings,i=0;i<o.length;i++){var l=o[i],u=s.consumer._sources.at(l.source);null!==s.consumer.sourceRoot&&(u=r.join(s.consumer.sourceRoot,u)),this._sources.add(u),u=this._sources.indexOf(u);var c=s.consumer._names.at(l.name);this._names.add(c),c=this._names.indexOf(c);var d={source:u,generatedLine:l.generatedLine+(s.generatedOffset.generatedLine-1),generatedColumn:l.generatedColumn+(s.generatedOffset.generatedLine===l.generatedLine?s.generatedOffset.generatedColumn-1:0),originalLine:l.originalLine,originalColumn:l.originalColumn,name:c};this.__generatedMappings.push(d),"number"===typeof d.originalLine&&this.__originalMappings.push(d)}a(this.__generatedMappings,r.compareByGeneratedPositionsDeflated),a(this.__originalMappings,r.compareByOriginalPositions)},t.IndexedSourceMapConsumer=d},"../../node_modules/@babel/generator/node_modules/source-map/lib/source-map-generator.js":function(e,t,n){var r=n("../../node_modules/@babel/generator/node_modules/source-map/lib/base64-vlq.js"),s=n("../../node_modules/@babel/generator/node_modules/source-map/lib/util.js"),o=n("../../node_modules/@babel/generator/node_modules/source-map/lib/array-set.js").ArraySet,i=n("../../node_modules/@babel/generator/node_modules/source-map/lib/mapping-list.js").MappingList;function a(e){e||(e={}),this._file=s.getArg(e,"file",null),this._sourceRoot=s.getArg(e,"sourceRoot",null),this._skipValidation=s.getArg(e,"skipValidation",!1),this._sources=new o,this._names=new o,this._mappings=new i,this._sourcesContents=null}a.prototype._version=3,a.fromSourceMap=function(e){var t=e.sourceRoot,n=new a({file:e.file,sourceRoot:t});return e.eachMapping((function(e){var r={generated:{line:e.generatedLine,column:e.generatedColumn}};null!=e.source&&(r.source=e.source,null!=t&&(r.source=s.relative(t,r.source)),r.original={line:e.originalLine,column:e.originalColumn},null!=e.name&&(r.name=e.name)),n.addMapping(r)})),e.sources.forEach((function(t){var r=e.sourceContentFor(t);null!=r&&n.setSourceContent(t,r)})),n},a.prototype.addMapping=function(e){var t=s.getArg(e,"generated"),n=s.getArg(e,"original",null),r=s.getArg(e,"source",null),o=s.getArg(e,"name",null);this._skipValidation||this._validateMapping(t,n,r,o),null!=r&&(r=String(r),this._sources.has(r)||this._sources.add(r)),null!=o&&(o=String(o),this._names.has(o)||this._names.add(o)),this._mappings.add({generatedLine:t.line,generatedColumn:t.column,originalLine:null!=n&&n.line,originalColumn:null!=n&&n.column,source:r,name:o})},a.prototype.setSourceContent=function(e,t){var n=e;null!=this._sourceRoot&&(n=s.relative(this._sourceRoot,n)),null!=t?(this._sourcesContents||(this._sourcesContents=Object.create(null)),this._sourcesContents[s.toSetString(n)]=t):this._sourcesContents&&(delete this._sourcesContents[s.toSetString(n)],0===Object.keys(this._sourcesContents).length&&(this._sourcesContents=null))},a.prototype.applySourceMap=function(e,t,n){var r=t;if(null==t){if(null==e.file)throw new Error('SourceMapGenerator.prototype.applySourceMap requires either an explicit source file, or the source map\'s "file" property. Both were omitted.');r=e.file}var i=this._sourceRoot;null!=i&&(r=s.relative(i,r));var a=new o,l=new o;this._mappings.unsortedForEach((function(t){if(t.source===r&&null!=t.originalLine){var o=e.originalPositionFor({line:t.originalLine,column:t.originalColumn});null!=o.source&&(t.source=o.source,null!=n&&(t.source=s.join(n,t.source)),null!=i&&(t.source=s.relative(i,t.source)),t.originalLine=o.line,t.originalColumn=o.column,null!=o.name&&(t.name=o.name))}var u=t.source;null==u||a.has(u)||a.add(u);var c=t.name;null==c||l.has(c)||l.add(c)}),this),this._sources=a,this._names=l,e.sources.forEach((function(t){var r=e.sourceContentFor(t);null!=r&&(null!=n&&(t=s.join(n,t)),null!=i&&(t=s.relative(i,t)),this.setSourceContent(t,r))}),this)},a.prototype._validateMapping=function(e,t,n,r){if(t&&"number"!==typeof t.line&&"number"!==typeof t.column)throw new Error("original.line and original.column are not numbers -- you probably meant to omit the original mapping entirely and only map the generated position. If so, pass null for the original mapping instead of an object with empty or null values.");if((!(e&&"line"in e&&"column"in e&&e.line>0&&e.column>=0)||t||n||r)&&!(e&&"line"in e&&"column"in e&&t&&"line"in t&&"column"in t&&e.line>0&&e.column>=0&&t.line>0&&t.column>=0&&n))throw new Error("Invalid mapping: "+JSON.stringify({generated:e,source:n,original:t,name:r}))},a.prototype._serializeMappings=function(){for(var e,t,n,o,i=0,a=1,l=0,u=0,c=0,d=0,f="",p=this._mappings.toArray(),h=0,m=p.length;h<m;h++){if(e="",(t=p[h]).generatedLine!==a)for(i=0;t.generatedLine!==a;)e+=";",a++;else if(h>0){if(!s.compareByGeneratedPositionsInflated(t,p[h-1]))continue;e+=","}e+=r.encode(t.generatedColumn-i),i=t.generatedColumn,null!=t.source&&(o=this._sources.indexOf(t.source),e+=r.encode(o-d),d=o,e+=r.encode(t.originalLine-1-u),u=t.originalLine-1,e+=r.encode(t.originalColumn-l),l=t.originalColumn,null!=t.name&&(n=this._names.indexOf(t.name),e+=r.encode(n-c),c=n)),f+=e}return f},a.prototype._generateSourcesContent=function(e,t){return e.map((function(e){if(!this._sourcesContents)return null;null!=t&&(e=s.relative(t,e));var n=s.toSetString(e);return Object.prototype.hasOwnProperty.call(this._sourcesContents,n)?this._sourcesContents[n]:null}),this)},a.prototype.toJSON=function(){var e={version:this._version,sources:this._sources.toArray(),names:this._names.toArray(),mappings:this._serializeMappings()};return null!=this._file&&(e.file=this._file),null!=this._sourceRoot&&(e.sourceRoot=this._sourceRoot),this._sourcesContents&&(e.sourcesContent=this._generateSourcesContent(e.sources,e.sourceRoot)),e},a.prototype.toString=function(){return JSON.stringify(this.toJSON())},t.SourceMapGenerator=a},"../../node_modules/@babel/generator/node_modules/source-map/lib/source-node.js":function(e,t,n){var r=n("../../node_modules/@babel/generator/node_modules/source-map/lib/source-map-generator.js").SourceMapGenerator,s=n("../../node_modules/@babel/generator/node_modules/source-map/lib/util.js"),o=/(\r?\n)/,i="$$$isSourceNode$$$";function a(e,t,n,r,s){this.children=[],this.sourceContents={},this.line=null==e?null:e,this.column=null==t?null:t,this.source=null==n?null:n,this.name=null==s?null:s,this[i]=!0,null!=r&&this.add(r)}a.fromStringWithSourceMap=function(e,t,n){var r=new a,i=e.split(o),l=0,u=function(){return e()+(e()||"");function e(){return l<i.length?i[l++]:void 0}},c=1,d=0,f=null;return t.eachMapping((function(e){if(null!==f){if(!(c<e.generatedLine)){var t=(n=i[l]).substr(0,e.generatedColumn-d);return i[l]=n.substr(e.generatedColumn-d),d=e.generatedColumn,p(f,t),void(f=e)}p(f,u()),c++,d=0}for(;c<e.generatedLine;)r.add(u()),c++;if(d<e.generatedColumn){var n=i[l];r.add(n.substr(0,e.generatedColumn)),i[l]=n.substr(e.generatedColumn),d=e.generatedColumn}f=e}),this),l<i.length&&(f&&p(f,u()),r.add(i.splice(l).join(""))),t.sources.forEach((function(e){var o=t.sourceContentFor(e);null!=o&&(null!=n&&(e=s.join(n,e)),r.setSourceContent(e,o))})),r;function p(e,t){if(null===e||void 0===e.source)r.add(t);else{var o=n?s.join(n,e.source):e.source;r.add(new a(e.originalLine,e.originalColumn,o,t,e.name))}}},a.prototype.add=function(e){if(Array.isArray(e))e.forEach((function(e){this.add(e)}),this);else{if(!e[i]&&"string"!==typeof e)throw new TypeError("Expected a SourceNode, string, or an array of SourceNodes and strings. Got "+e);e&&this.children.push(e)}return this},a.prototype.prepend=function(e){if(Array.isArray(e))for(var t=e.length-1;t>=0;t--)this.prepend(e[t]);else{if(!e[i]&&"string"!==typeof e)throw new TypeError("Expected a SourceNode, string, or an array of SourceNodes and strings. Got "+e);this.children.unshift(e)}return this},a.prototype.walk=function(e){for(var t,n=0,r=this.children.length;n<r;n++)(t=this.children[n])[i]?t.walk(e):""!==t&&e(t,{source:this.source,line:this.line,column:this.column,name:this.name})},a.prototype.join=function(e){var t,n,r=this.children.length;if(r>0){for(t=[],n=0;n<r-1;n++)t.push(this.children[n]),t.push(e);t.push(this.children[n]),this.children=t}return this},a.prototype.replaceRight=function(e,t){var n=this.children[this.children.length-1];return n[i]?n.replaceRight(e,t):"string"===typeof n?this.children[this.children.length-1]=n.replace(e,t):this.children.push("".replace(e,t)),this},a.prototype.setSourceContent=function(e,t){this.sourceContents[s.toSetString(e)]=t},a.prototype.walkSourceContents=function(e){for(var t=0,n=this.children.length;t<n;t++)this.children[t][i]&&this.children[t].walkSourceContents(e);var r=Object.keys(this.sourceContents);for(t=0,n=r.length;t<n;t++)e(s.fromSetString(r[t]),this.sourceContents[r[t]])},a.prototype.toString=function(){var e="";return this.walk((function(t){e+=t})),e},a.prototype.toStringWithSourceMap=function(e){var t={code:"",line:1,column:0},n=new r(e),s=!1,o=null,i=null,a=null,l=null;return this.walk((function(e,r){t.code+=e,null!==r.source&&null!==r.line&&null!==r.column?(o===r.source&&i===r.line&&a===r.column&&l===r.name||n.addMapping({source:r.source,original:{line:r.line,column:r.column},generated:{line:t.line,column:t.column},name:r.name}),o=r.source,i=r.line,a=r.column,l=r.name,s=!0):s&&(n.addMapping({generated:{line:t.line,column:t.column}}),o=null,s=!1);for(var u=0,c=e.length;u<c;u++)10===e.charCodeAt(u)?(t.line++,t.column=0,u+1===c?(o=null,s=!1):s&&n.addMapping({source:r.source,original:{line:r.line,column:r.column},generated:{line:t.line,column:t.column},name:r.name})):t.column++})),this.walkSourceContents((function(e,t){n.setSourceContent(e,t)})),{code:t.code,map:n}},t.SourceNode=a},"../../node_modules/@babel/generator/node_modules/source-map/lib/util.js":function(e,t){t.getArg=function(e,t,n){if(t in e)return e[t];if(3===arguments.length)return n;throw new Error('"'+t+'" is a required argument.')};var n=/^(?:([\w+\-.]+):)?\/\/(?:(\w+:\w+)@)?([\w.]*)(?::(\d+))?(\S*)$/,r=/^data:.+\,.+$/;function s(e){var t=e.match(n);return t?{scheme:t[1],auth:t[2],host:t[3],port:t[4],path:t[5]}:null}function o(e){var t="";return e.scheme&&(t+=e.scheme+":"),t+="//",e.auth&&(t+=e.auth+"@"),e.host&&(t+=e.host),e.port&&(t+=":"+e.port),e.path&&(t+=e.path),t}function i(e){var n=e,r=s(e);if(r){if(!r.path)return e;n=r.path}for(var i,a=t.isAbsolute(n),l=n.split(/\/+/),u=0,c=l.length-1;c>=0;c--)"."===(i=l[c])?l.splice(c,1):".."===i?u++:u>0&&(""===i?(l.splice(c+1,u),u=0):(l.splice(c,2),u--));return""===(n=l.join("/"))&&(n=a?"/":"."),r?(r.path=n,o(r)):n}t.urlParse=s,t.urlGenerate=o,t.normalize=i,t.join=function(e,t){""===e&&(e="."),""===t&&(t=".");var n=s(t),a=s(e);if(a&&(e=a.path||"/"),n&&!n.scheme)return a&&(n.scheme=a.scheme),o(n);if(n||t.match(r))return t;if(a&&!a.host&&!a.path)return a.host=t,o(a);var l="/"===t.charAt(0)?t:i(e.replace(/\/+$/,"")+"/"+t);return a?(a.path=l,o(a)):l},t.isAbsolute=function(e){return"/"===e.charAt(0)||!!e.match(n)},t.relative=function(e,t){""===e&&(e="."),e=e.replace(/\/$/,"");for(var n=0;0!==t.indexOf(e+"/");){var r=e.lastIndexOf("/");if(r<0)return t;if((e=e.slice(0,r)).match(/^([^\/]+:\/)?\/*$/))return t;++n}return Array(n+1).join("../")+t.substr(e.length+1)};var a=!("__proto__"in Object.create(null));function l(e){return e}function u(e){if(!e)return!1;var t=e.length;if(t<9)return!1;if(95!==e.charCodeAt(t-1)||95!==e.charCodeAt(t-2)||111!==e.charCodeAt(t-3)||116!==e.charCodeAt(t-4)||111!==e.charCodeAt(t-5)||114!==e.charCodeAt(t-6)||112!==e.charCodeAt(t-7)||95!==e.charCodeAt(t-8)||95!==e.charCodeAt(t-9))return!1;for(var n=t-10;n>=0;n--)if(36!==e.charCodeAt(n))return!1;return!0}function c(e,t){return e===t?0:e>t?1:-1}t.toSetString=a?l:function(e){return u(e)?"$"+e:e},t.fromSetString=a?l:function(e){return u(e)?e.slice(1):e},t.compareByOriginalPositions=function(e,t,n){var r=e.source-t.source;return 0!==r||0!==(r=e.originalLine-t.originalLine)||0!==(r=e.originalColumn-t.originalColumn)||n||0!==(r=e.generatedColumn-t.generatedColumn)||0!==(r=e.generatedLine-t.generatedLine)?r:e.name-t.name},t.compareByGeneratedPositionsDeflated=function(e,t,n){var r=e.generatedLine-t.generatedLine;return 0!==r||0!==(r=e.generatedColumn-t.generatedColumn)||n||0!==(r=e.source-t.source)||0!==(r=e.originalLine-t.originalLine)||0!==(r=e.originalColumn-t.originalColumn)?r:e.name-t.name},t.compareByGeneratedPositionsInflated=function(e,t){var n=e.generatedLine-t.generatedLine;return 0!==n||0!==(n=e.generatedColumn-t.generatedColumn)||0!==(n=c(e.source,t.source))||0!==(n=e.originalLine-t.originalLine)||0!==(n=e.originalColumn-t.originalColumn)?n:c(e.name,t.name)}},"../../node_modules/@babel/generator/node_modules/source-map/source-map.js":function(e,t,n){t.SourceMapGenerator=n("../../node_modules/@babel/generator/node_modules/source-map/lib/source-map-generator.js").SourceMapGenerator,t.SourceMapConsumer=n("../../node_modules/@babel/generator/node_modules/source-map/lib/source-map-consumer.js").SourceMapConsumer,t.SourceNode=n("../../node_modules/@babel/generator/node_modules/source-map/lib/source-node.js").SourceNode},"../../node_modules/@babel/helper-function-name/lib/index.js":function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=function({node:e,parent:t,scope:n,id:s},i=!1){if(e.id)return;if(!o.isObjectProperty(t)&&!o.isObjectMethod(t,{kind:"method"})||t.computed&&!o.isLiteral(t.key)){if(o.isVariableDeclarator(t)){if(s=t.id,o.isIdentifier(s)&&!i){const t=n.parent.getBinding(s.name);if(t&&t.constant&&n.getBinding(s.name)===t)return e.id=o.cloneNode(s),void(e.id[o.NOT_LOCAL_BINDING]=!0)}}else if(o.isAssignmentExpression(t,{operator:"="}))s=t.left;else if(!s)return}else s=t.key;let a;s&&o.isLiteral(s)?a=function(e){if(o.isNullLiteral(e))return"null";if(o.isRegExpLiteral(e))return`_${e.pattern}_${e.flags}`;if(o.isTemplateLiteral(e))return e.quasis.map(e=>e.value.raw).join("");if(void 0!==e.value)return e.value+"";return""}(s):s&&o.isIdentifier(s)&&(a=s.name);if(void 0===a)return;return a=o.toBindingIdentifierName(a),(s=o.identifier(a))[o.NOT_LOCAL_BINDING]=!0,function(e,t,n,s){if(e.selfReference){if(!s.hasBinding(n.name)||s.hasGlobal(n.name)){if(!o.isFunction(t))return;let e=l;t.generator&&(e=u);const i=e({FUNCTION:t,FUNCTION_ID:n,FUNCTION_KEY:s.generateUidIdentifier(n.name)}).expression,a=i.callee.body.body[0].params;for(let n=0,o=(0,r.default)(t);n<o;n++)a.push(s.generateUidIdentifier("x"));return i}s.rename(n.name)}t.id=n,s.getProgramParent().references[n.name]=!0}(function(e,t,n){const r={selfAssignment:!1,selfReference:!1,outerDeclar:n.getBindingIdentifier(t),references:[],name:t},s=n.getOwnBinding(t);s?"param"===s.kind&&(r.selfReference=!0):(r.outerDeclar||n.hasGlobal(t))&&n.traverse(e,c,r);return r}(e,a,n),e,s,n)||e};var r=a(n("../../node_modules/@babel/helper-get-function-arity/lib/index.js")),s=a(n("../../node_modules/@babel/template/lib/index.js")),o=function(e){if(e&&e.__esModule)return e;if(null===e||"object"!==typeof e&&"function"!==typeof e)return{default:e};var t=i();if(t&&t.has(e))return t.get(e);var n={},r=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var s in e)if(Object.prototype.hasOwnProperty.call(e,s)){var o=r?Object.getOwnPropertyDescriptor(e,s):null;o&&(o.get||o.set)?Object.defineProperty(n,s,o):n[s]=e[s]}n.default=e,t&&t.set(e,n);return n}(n("../../node_modules/@babel/types/lib/index.js"));function i(){if("function"!==typeof WeakMap)return null;var e=new WeakMap;return i=function(){return e},e}function a(e){return e&&e.__esModule?e:{default:e}}const l=(0,s.default)("\n  (function (FUNCTION_KEY) {\n    function FUNCTION_ID() {\n      return FUNCTION_KEY.apply(this, arguments);\n    }\n\n    FUNCTION_ID.toString = function () {\n      return FUNCTION_KEY.toString();\n    }\n\n    return FUNCTION_ID;\n  })(FUNCTION)\n"),u=(0,s.default)("\n  (function (FUNCTION_KEY) {\n    function* FUNCTION_ID() {\n      return yield* FUNCTION_KEY.apply(this, arguments);\n    }\n\n    FUNCTION_ID.toString = function () {\n      return FUNCTION_KEY.toString();\n    };\n\n    return FUNCTION_ID;\n  })(FUNCTION)\n"),c={"ReferencedIdentifier|BindingIdentifier"(e,t){if(e.node.name!==t.name)return;e.scope.getBindingIdentifier(t.name)===t.outerDeclar&&(t.selfReference=!0,e.stop())}}},"../../node_modules/@babel/helper-get-function-arity/lib/index.js":function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=function(e){const t=e.params;for(let n=0;n<t.length;n++){const e=t[n];if(r.isAssignmentPattern(e)||r.isRestElement(e))return n}return t.length};var r=function(e){if(e&&e.__esModule)return e;if(null===e||"object"!==typeof e&&"function"!==typeof e)return{default:e};var t=s();if(t&&t.has(e))return t.get(e);var n={},r=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var o in e)if(Object.prototype.hasOwnProperty.call(e,o)){var i=r?Object.getOwnPropertyDescriptor(e,o):null;i&&(i.get||i.set)?Object.defineProperty(n,o,i):n[o]=e[o]}n.default=e,t&&t.set(e,n);return n}(n("../../node_modules/@babel/types/lib/index.js"));function s(){if("function"!==typeof WeakMap)return null;var e=new WeakMap;return s=function(){return e},e}},"../../node_modules/@babel/helper-member-expression-to-functions/lib/index.js":function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=function(e,t,n){e.traverse(t,Object.assign({},i,{},n,{memoiser:new o}))};var r=function(e){if(e&&e.__esModule)return e;if(null===e||"object"!==typeof e&&"function"!==typeof e)return{default:e};var t=s();if(t&&t.has(e))return t.get(e);var n={},r=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var o in e)if(Object.prototype.hasOwnProperty.call(e,o)){var i=r?Object.getOwnPropertyDescriptor(e,o):null;i&&(i.get||i.set)?Object.defineProperty(n,o,i):n[o]=e[o]}n.default=e,t&&t.set(e,n);return n}(n("../../node_modules/@babel/types/lib/index.js"));function s(){if("function"!==typeof WeakMap)return null;var e=new WeakMap;return s=function(){return e},e}class o{constructor(){this._map=new WeakMap}has(e){return this._map.has(e)}get(e){if(!this.has(e))return;const t=this._map.get(e),{value:n}=t;return t.count--,0===t.count?r.assignmentExpression("=",n,e):n}set(e,t,n){return this._map.set(e,{count:n,value:t})}}const i={memoise(){},handle(e){const{node:t,parent:n,parentPath:s}=e;if(s.isUpdateExpression({argument:t})){const{operator:o,prefix:i}=n;this.memoise(e,2);const a=r.binaryExpression(o[0],r.unaryExpression("+",this.get(e)),r.numericLiteral(1));if(i)s.replaceWith(this.set(e,a));else{const{scope:n}=e,o=n.generateUidIdentifierBasedOnNode(t);n.push({id:o}),a.left=r.assignmentExpression("=",r.cloneNode(o),a.left),s.replaceWith(r.sequenceExpression([this.set(e,a),r.cloneNode(o)]))}}else{if(s.isAssignmentExpression({left:t})){const{operator:t,right:o}=n;let i=o;return"="!==t&&(this.memoise(e,2),i=r.binaryExpression(t.slice(0,-1),this.get(e),i)),void s.replaceWith(this.set(e,i))}if(s.isCallExpression({callee:t})){const{arguments:t}=n;s.replaceWith(this.call(e,t))}else s.isObjectProperty({value:t})&&s.parentPath.isObjectPattern()||s.isAssignmentPattern({left:t})&&s.parentPath.isObjectProperty({value:n})&&s.parentPath.parentPath.isObjectPattern()||s.isArrayPattern()||s.isAssignmentPattern({left:t})&&s.parentPath.isArrayPattern()||s.isRestElement()?e.replaceWith(this.destructureSet(e)):e.replaceWith(this.get(e))}}}},"../../node_modules/@babel/helper-module-imports/lib/import-builder.js":function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var r,s=(r=n("../../node_modules/assert/assert.js"))&&r.__esModule?r:{default:r},o=function(e){if(e&&e.__esModule)return e;if(null===e||"object"!==typeof e&&"function"!==typeof e)return{default:e};var t=i();if(t&&t.has(e))return t.get(e);var n={},r=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var s in e)if(Object.prototype.hasOwnProperty.call(e,s)){var o=r?Object.getOwnPropertyDescriptor(e,s):null;o&&(o.get||o.set)?Object.defineProperty(n,s,o):n[s]=e[s]}n.default=e,t&&t.set(e,n);return n}(n("../../node_modules/@babel/types/lib/index.js"));function i(){if("function"!==typeof WeakMap)return null;var e=new WeakMap;return i=function(){return e},e}t.default=class{constructor(e,t,n){this._statements=[],this._resultName=null,this._scope=null,this._hub=null,this._scope=t,this._hub=n,this._importedSource=e}done(){return{statements:this._statements,resultName:this._resultName}}import(){return this._statements.push(o.importDeclaration([],o.stringLiteral(this._importedSource))),this}require(){return this._statements.push(o.expressionStatement(o.callExpression(o.identifier("require"),[o.stringLiteral(this._importedSource)]))),this}namespace(e="namespace"){e=this._scope.generateUidIdentifier(e);const t=this._statements[this._statements.length-1];return(0,s.default)("ImportDeclaration"===t.type),(0,s.default)(0===t.specifiers.length),t.specifiers=[o.importNamespaceSpecifier(e)],this._resultName=o.cloneNode(e),this}default(e){e=this._scope.generateUidIdentifier(e);const t=this._statements[this._statements.length-1];return(0,s.default)("ImportDeclaration"===t.type),(0,s.default)(0===t.specifiers.length),t.specifiers=[o.importDefaultSpecifier(e)],this._resultName=o.cloneNode(e),this}named(e,t){if("default"===t)return this.default(e);e=this._scope.generateUidIdentifier(e);const n=this._statements[this._statements.length-1];return(0,s.default)("ImportDeclaration"===n.type),(0,s.default)(0===n.specifiers.length),n.specifiers=[o.importSpecifier(e,o.identifier(t))],this._resultName=o.cloneNode(e),this}var(e){e=this._scope.generateUidIdentifier(e);let t=this._statements[this._statements.length-1];return"ExpressionStatement"!==t.type&&((0,s.default)(this._resultName),t=o.expressionStatement(this._resultName),this._statements.push(t)),this._statements[this._statements.length-1]=o.variableDeclaration("var",[o.variableDeclarator(e,t.expression)]),this._resultName=o.cloneNode(e),this}defaultInterop(){return this._interop(this._hub.addHelper("interopRequireDefault"))}wildcardInterop(){return this._interop(this._hub.addHelper("interopRequireWildcard"))}_interop(e){const t=this._statements[this._statements.length-1];return"ExpressionStatement"===t.type?t.expression=o.callExpression(e,[t.expression]):"VariableDeclaration"===t.type?((0,s.default)(1===t.declarations.length),t.declarations[0].init=o.callExpression(e,[t.declarations[0].init])):s.default.fail("Unexpected type."),this}prop(e){const t=this._statements[this._statements.length-1];return"ExpressionStatement"===t.type?t.expression=o.memberExpression(t.expression,o.identifier(e)):"VariableDeclaration"===t.type?((0,s.default)(1===t.declarations.length),t.declarations[0].init=o.memberExpression(t.declarations[0].init,o.identifier(e))):s.default.fail("Unexpected type:"+t.type),this}read(e){this._resultName=o.memberExpression(this._resultName,o.identifier(e))}}},"../../node_modules/@babel/helper-module-imports/lib/import-injector.js":function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var r=l(n("../../node_modules/assert/assert.js")),s=function(e){if(e&&e.__esModule)return e;if(null===e||"object"!==typeof e&&"function"!==typeof e)return{default:e};var t=a();if(t&&t.has(e))return t.get(e);var n={},r=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var s in e)if(Object.prototype.hasOwnProperty.call(e,s)){var o=r?Object.getOwnPropertyDescriptor(e,s):null;o&&(o.get||o.set)?Object.defineProperty(n,s,o):n[s]=e[s]}n.default=e,t&&t.set(e,n);return n}(n("../../node_modules/@babel/types/lib/index.js")),o=l(n("../../node_modules/@babel/helper-module-imports/lib/import-builder.js")),i=l(n("../../node_modules/@babel/helper-module-imports/lib/is-module.js"));function a(){if("function"!==typeof WeakMap)return null;var e=new WeakMap;return a=function(){return e},e}function l(e){return e&&e.__esModule?e:{default:e}}t.default=class{constructor(e,t,n){this._defaultOpts={importedSource:null,importedType:"commonjs",importedInterop:"babel",importingInterop:"babel",ensureLiveReference:!1,ensureNoContext:!1};const r=e.find(e=>e.isProgram());this._programPath=r,this._programScope=r.scope,this._hub=r.hub,this._defaultOpts=this._applyDefaults(t,n,!0)}addDefault(e,t){return this.addNamed("default",e,t)}addNamed(e,t,n){return(0,r.default)("string"===typeof e),this._generateImport(this._applyDefaults(t,n),e)}addNamespace(e,t){return this._generateImport(this._applyDefaults(e,t),null)}addSideEffect(e,t){return this._generateImport(this._applyDefaults(e,t),!1)}_applyDefaults(e,t,n=!1){const s=[];"string"===typeof e?(s.push({importedSource:e}),s.push(t)):((0,r.default)(!t,"Unexpected secondary arguments."),s.push(e));const o=Object.assign({},this._defaultOpts);for(const r of s)r&&(Object.keys(o).forEach(e=>{void 0!==r[e]&&(o[e]=r[e])}),n||(void 0!==r.nameHint&&(o.nameHint=r.nameHint),void 0!==r.blockHoist&&(o.blockHoist=r.blockHoist)));return o}_generateImport(e,t){const n="default"===t,r=!!t&&!n,a=null===t,{importedSource:l,importedType:u,importedInterop:c,importingInterop:d,ensureLiveReference:f,ensureNoContext:p,nameHint:h,blockHoist:m}=e;let y=h||t;const b=(0,i.default)(this._programPath),g=b&&"node"===d,v=b&&"babel"===d,_=new o.default(l,this._programScope,this._hub);if("es6"===u){if(!g&&!v)throw new Error("Cannot import an ES6 module from CommonJS");_.import(),a?_.namespace(h||l):(n||r)&&_.named(y,t)}else{if("commonjs"!==u)throw new Error(`Unexpected interopType "${u}"`);if("babel"===c)if(g){y="default"!==y?y:l;const e=l+"$es6Default";_.import(),a?_.default(e).var(y||l).wildcardInterop():n?f?_.default(e).var(y||l).defaultInterop().read("default"):_.default(e).var(y).defaultInterop().prop(t):r&&_.default(e).read(t)}else v?(_.import(),a?_.namespace(y||l):(n||r)&&_.named(y,t)):(_.require(),a?_.var(y||l).wildcardInterop():(n||r)&&f?n?(y="default"!==y?y:l,_.var(y).read(t),_.defaultInterop()):_.var(l).read(t):n?_.var(y).defaultInterop().prop(t):r&&_.var(y).prop(t));else if("compiled"===c)g?(_.import(),a?_.default(y||l):(n||r)&&_.default(l).read(y)):v?(_.import(),a?_.namespace(y||l):(n||r)&&_.named(y,t)):(_.require(),a?_.var(y||l):(n||r)&&(f?_.var(l).read(y):_.prop(t).var(y)));else{if("uncompiled"!==c)throw new Error(`Unknown importedInterop "${c}".`);if(n&&f)throw new Error("No live reference for commonjs default");g?(_.import(),a?_.default(y||l):n?_.default(y):r&&_.default(l).read(y)):v?(_.import(),a?_.default(y||l):n?_.default(y):r&&_.named(y,t)):(_.require(),a?_.var(y||l):n?_.var(y):r&&(f?_.var(l).read(y):_.var(y).prop(t)))}}const{statements:j,resultName:x}=_.done();return this._insertStatements(j,m),(n||r)&&p&&"Identifier"!==x.type?s.sequenceExpression([s.numericLiteral(0),x]):x}_insertStatements(e,t=3){e.forEach(e=>{e._blockHoist=t});const n=this._programPath.get("body").find(e=>{const t=e.node._blockHoist;return Number.isFinite(t)&&t<4});n?n.insertBefore(e):this._programPath.unshiftContainer("body",e)}}},"../../node_modules/@babel/helper-module-imports/lib/index.js":function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.addDefault=function(e,t,n){return new r.default(e).addDefault(t,n)},t.addNamed=function(e,t,n,s){return new r.default(e).addNamed(t,n,s)},t.addNamespace=function(e,t,n){return new r.default(e).addNamespace(t,n)},t.addSideEffect=function(e,t,n){return new r.default(e).addSideEffect(t,n)},Object.defineProperty(t,"ImportInjector",{enumerable:!0,get:function(){return r.default}}),Object.defineProperty(t,"isModule",{enumerable:!0,get:function(){return s.default}});var r=o(n("../../node_modules/@babel/helper-module-imports/lib/import-injector.js")),s=o(n("../../node_modules/@babel/helper-module-imports/lib/is-module.js"));function o(e){return e&&e.__esModule?e:{default:e}}},"../../node_modules/@babel/helper-module-imports/lib/is-module.js":function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=function(e){const{sourceType:t}=e.node;if("module"!==t&&"script"!==t)throw e.buildCodeFrameError(`Unknown sourceType "${t}", cannot transform.`);return"module"===e.node.sourceType}},"../../node_modules/@babel/helper-module-transforms/lib/get-module-name.js":function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=function(e,t){var n,r,s;const{filename:o,filenameRelative:i=o,sourceRoot:a=(null!=(n=t.moduleRoot)?n:e.moduleRoot)}=e,{moduleId:l=e.moduleId,moduleIds:u=(null!=(r=e.moduleIds)?r:!!l),getModuleId:c=e.getModuleId,moduleRoot:d=(null!=(s=e.moduleRoot)?s:a)}=t;if(!u)return null;if(null!=l&&!c)return l;let f=null!=d?d+"/":"";if(i){const e=null!=a?new RegExp("^"+a+"/?"):"";f+=i.replace(e,"").replace(/\.(\w*?)$/,"")}return f=f.replace(/\\/g,"/"),c&&c(f)||f}},"../../node_modules/@babel/helper-module-transforms/lib/index.js":function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.rewriteModuleStatementsAndPrepareHeader=function(e,{exportName:t,strict:n,allowTopLevelThis:d,strictMode:f,loose:p,noInterop:h,lazy:b,esNamespaceOnly:g}){(0,r.default)((0,a.isModule)(e),"Cannot process module statements in a script"),e.node.sourceType="script";const v=(0,c.default)(e,t,{noInterop:h,loose:p,lazy:b,esNamespaceOnly:g});d||(0,l.default)(e);if((0,u.default)(e,v),!1!==f){e.node.directives.some(e=>"use strict"===e.value.value)||e.unshiftContainer("directives",s.directive(s.directiveLiteral("use strict")))}const _=[];(0,c.hasExports)(v)&&!n&&_.push(function(e,t=!1){return(t?o.default.statement`
        EXPORTS.__esModule = true;
      `:o.default.statement`
        Object.defineProperty(EXPORTS, "__esModule", {
          value: true,
        });
      `)({EXPORTS:e.exportName})}(v,p));const j=function(e,t){const n=Object.create(null);for(const s of t.local.values())for(const e of s.names)n[e]=!0;let r=!1;for(const s of t.source.values()){for(const e of s.reexports.keys())n[e]=!0;for(const e of s.reexportNamespace)n[e]=!0;r=r||s.reexportAll}if(!r||0===Object.keys(n).length)return null;const o=e.scope.generateUidIdentifier("exportNames");return delete n.default,{name:o.name,statement:s.variableDeclaration("var",[s.variableDeclarator(o,s.valueToNode(n))])}}(e,v);j&&(v.exportNameListName=j.name,_.push(j.statement));return _.push(...function(e,t,n=!1){const r=[],o=[];for(const[i,a]of t.local)"import"===a.kind||("hoisted"===a.kind?r.push(y(t,a.names,s.identifier(i))):o.push(...a.names));for(const s of t.source.values()){n||r.push(...m(t,s,n));for(const e of s.reexportNamespace)o.push(e)}return r.push(...(0,i.default)(o,100).map(n=>y(t,n,e.scope.buildUndefinedNode()))),r}(e,v,p)),{meta:v,headers:_}},t.ensureStatementsHoisted=function(e){e.forEach(e=>{e._blockHoist=3})},t.wrapInterop=function(e,t,n){if("none"===n)return null;let r;if("default"===n)r="interopRequireDefault";else{if("namespace"!==n)throw new Error("Unknown interop: "+n);r="interopRequireWildcard"}return s.callExpression(e.hub.addHelper(r),[t])},t.buildNamespaceInitStatements=function(e,t,n=!1){const r=[];let i=s.identifier(t.name);t.lazy&&(i=s.callExpression(i,[]));for(const a of t.importsNamespace)a!==t.name&&r.push(o.default.statement`var NAME = SOURCE;`({NAME:a,SOURCE:s.cloneNode(i)}));n&&r.push(...m(e,t,n));for(const a of t.reexportNamespace)r.push((t.lazy?o.default.statement`
            Object.defineProperty(EXPORTS, "NAME", {
              enumerable: true,
              get: function() {
                return NAMESPACE;
              }
            });
          `:o.default.statement`EXPORTS.NAME = NAMESPACE;`)({EXPORTS:e.exportName,NAME:a,NAMESPACE:s.cloneNode(i)}));if(t.reexportAll){const a=function(e,t,n){return(n?o.default.statement`
        Object.keys(NAMESPACE).forEach(function(key) {
          if (key === "default" || key === "__esModule") return;
          VERIFY_NAME_LIST;

          EXPORTS[key] = NAMESPACE[key];
        });
      `:o.default.statement`
        Object.keys(NAMESPACE).forEach(function(key) {
          if (key === "default" || key === "__esModule") return;
          VERIFY_NAME_LIST;

          Object.defineProperty(EXPORTS, key, {
            enumerable: true,
            get: function() {
              return NAMESPACE[key];
            },
          });
        });
    `)({NAMESPACE:t,EXPORTS:e.exportName,VERIFY_NAME_LIST:e.exportNameListName?o.default`
            if (Object.prototype.hasOwnProperty.call(EXPORTS_LIST, key)) return;
          `({EXPORTS_LIST:e.exportNameListName}):null})}(e,s.cloneNode(i),n);a.loc=t.reexportAll.loc,r.push(a)}return r},Object.defineProperty(t,"isModule",{enumerable:!0,get:function(){return a.isModule}}),Object.defineProperty(t,"rewriteThis",{enumerable:!0,get:function(){return l.default}}),Object.defineProperty(t,"hasExports",{enumerable:!0,get:function(){return c.hasExports}}),Object.defineProperty(t,"isSideEffectImport",{enumerable:!0,get:function(){return c.isSideEffectImport}}),Object.defineProperty(t,"getModuleName",{enumerable:!0,get:function(){return d.default}});var r=h(n("../../node_modules/assert/assert.js")),s=p(n("../../node_modules/@babel/types/lib/index.js")),o=h(n("../../node_modules/@babel/template/lib/index.js")),i=h(n("../../node_modules/lodash/chunk.js")),a=n("../../node_modules/@babel/helper-module-imports/lib/index.js"),l=h(n("../../node_modules/@babel/helper-module-transforms/lib/rewrite-this.js")),u=h(n("../../node_modules/@babel/helper-module-transforms/lib/rewrite-live-references.js")),c=p(n("../../node_modules/@babel/helper-module-transforms/lib/normalize-and-load-metadata.js")),d=h(n("../../node_modules/@babel/helper-module-transforms/lib/get-module-name.js"));function f(){if("function"!==typeof WeakMap)return null;var e=new WeakMap;return f=function(){return e},e}function p(e){if(e&&e.__esModule)return e;if(null===e||"object"!==typeof e&&"function"!==typeof e)return{default:e};var t=f();if(t&&t.has(e))return t.get(e);var n={},r=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var s in e)if(Object.prototype.hasOwnProperty.call(e,s)){var o=r?Object.getOwnPropertyDescriptor(e,s):null;o&&(o.get||o.set)?Object.defineProperty(n,s,o):n[s]=e[s]}return n.default=e,t&&t.set(e,n),n}function h(e){return e&&e.__esModule?e:{default:e}}const m=(e,t,n)=>{const r=t.lazy?s.callExpression(s.identifier(t.name),[]):s.identifier(t.name),i=(e=>e?o.default.statement`EXPORTS.EXPORT_NAME = NAMESPACE.IMPORT_NAME;`:o.default`
      Object.defineProperty(EXPORTS, "EXPORT_NAME", {
        enumerable: true,
        get: function() {
          return NAMESPACE.IMPORT_NAME;
        },
      });
    `)(n);return Array.from(t.reexports,([t,n])=>i({EXPORTS:e.exportName,EXPORT_NAME:t,NAMESPACE:s.cloneNode(r),IMPORT_NAME:n}))};function y(e,t,n){return s.expressionStatement(t.reduce((t,n)=>o.default.expression`EXPORTS.NAME = VALUE`({EXPORTS:e.exportName,NAME:n,VALUE:t}),n))}},"../../node_modules/@babel/helper-module-transforms/lib/normalize-and-load-metadata.js":function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.hasExports=function(e){return e.hasExports},t.isSideEffectImport=i,t.default=function(e,t,{noInterop:n=!1,loose:r=!1,lazy:a=!1,esNamespaceOnly:l=!1}={}){t||(t=e.scope.generateUidIdentifier("exports").name);!function(e){e.get("body").forEach(e=>{e.isExportDefaultDeclaration()&&(0,o.default)(e)})}(e);const{local:u,source:c,hasExports:d}=function(e,{loose:t,lazy:n}){const r=function(e,t){const n=new Map;e.get("body").forEach(e=>{let r;if(e.isImportDeclaration())r="import";else{if(e.isExportDefaultDeclaration()&&(e=e.get("declaration")),e.isExportNamedDeclaration())if(e.node.declaration)e=e.get("declaration");else if(t&&e.node.source&&e.get("source").isStringLiteral())return void e.node.specifiers.forEach(e=>{n.set(e.local.name,"block")});if(e.isFunctionDeclaration())r="hoisted";else if(e.isClassDeclaration())r="block";else if(e.isVariableDeclaration({kind:"var"}))r="var";else{if(!e.isVariableDeclaration())return;r="block"}}Object.keys(e.getOuterBindingIdentifiers()).forEach(e=>{n.set(e,r)})});const r=new Map,s=e=>{const t=e.node.name;let s=r.get(t);if(!s){const o=n.get(t);if(void 0===o)throw e.buildCodeFrameError(`Exporting local "${t}", which is not declared.`);s={names:[],kind:o},r.set(t,s)}return s};return e.get("body").forEach(e=>{if(!e.isExportNamedDeclaration()||!t&&e.node.source){if(e.isExportDefaultDeclaration()){const t=e.get("declaration");if(!t.isFunctionDeclaration()&&!t.isClassDeclaration())throw t.buildCodeFrameError("Unexpected default expression export.");s(t.get("id")).names.push("default")}}else if(e.node.declaration){const t=e.get("declaration"),n=t.getOuterBindingIdentifierPaths();Object.keys(n).forEach(e=>{if("__esModule"===e)throw t.buildCodeFrameError('Illegal export "__esModule".');s(n[e]).names.push(e)})}else e.get("specifiers").forEach(e=>{const t=e.get("local"),n=e.get("exported");if("__esModule"===n.node.name)throw n.buildCodeFrameError('Illegal export "__esModule".');s(t).names.push(n.node.name)})}),r}(e,t),o=new Map,a=t=>{const n=t.value;let r=o.get(n);return r||(r={name:e.scope.generateUidIdentifier((0,s.basename)(n,(0,s.extname)(n))).name,interop:"none",loc:null,imports:new Map,importsNamespace:new Set,reexports:new Map,reexportNamespace:new Set,reexportAll:null,lazy:!1},o.set(n,r)),r};let l=!1;e.get("body").forEach(e=>{if(e.isImportDeclaration()){const t=a(e.node.source);t.loc||(t.loc=e.node.loc),e.get("specifiers").forEach(e=>{if(e.isImportDefaultSpecifier()){const n=e.get("local").node.name;t.imports.set(n,"default");const s=r.get(n);s&&(r.delete(n),s.names.forEach(e=>{t.reexports.set(e,"default")}))}else if(e.isImportNamespaceSpecifier()){const n=e.get("local").node.name;t.importsNamespace.add(n);const s=r.get(n);s&&(r.delete(n),s.names.forEach(e=>{t.reexportNamespace.add(e)}))}else if(e.isImportSpecifier()){const n=e.get("imported").node.name,s=e.get("local").node.name;t.imports.set(s,n);const o=r.get(s);o&&(r.delete(s),o.names.forEach(e=>{t.reexports.set(e,n)}))}})}else if(e.isExportAllDeclaration()){l=!0;const t=a(e.node.source);t.loc||(t.loc=e.node.loc),t.reexportAll={loc:e.node.loc}}else if(e.isExportNamedDeclaration()&&e.node.source){l=!0;const t=a(e.node.source);t.loc||(t.loc=e.node.loc),e.get("specifiers").forEach(e=>{if(!e.isExportSpecifier())throw e.buildCodeFrameError("Unexpected export specifier type");const n=e.get("local").node.name,r=e.get("exported").node.name;if(t.reexports.set(r,n),"__esModule"===r)throw r.buildCodeFrameError('Illegal export "__esModule".')})}else(e.isExportNamedDeclaration()||e.isExportDefaultDeclaration())&&(l=!0)});for(const s of o.values()){let e=!1,t=!1;s.importsNamespace.size>0&&(e=!0,t=!0),s.reexportAll&&(t=!0);for(const n of s.imports.values())"default"===n?e=!0:t=!0;for(const n of s.reexports.values())"default"===n?e=!0:t=!0;e&&t?s.interop="namespace":e&&(s.interop="default")}for(const[s,u]of o)if(!1!==n&&!i(u)&&!u.reexportAll)if(!0===n)u.lazy=!/\./.test(s);else if(Array.isArray(n))u.lazy=-1!==n.indexOf(s);else{if("function"!==typeof n)throw new Error(".lazy must be a boolean, string array, or function");u.lazy=n(s)}return{hasExports:l,local:r,source:o}}(e,{loose:r,lazy:a});!function(e){e.get("body").forEach(e=>{if(e.isImportDeclaration())e.remove();else if(e.isExportNamedDeclaration())e.node.declaration?(e.node.declaration._blockHoist=e.node._blockHoist,e.replaceWith(e.node.declaration)):e.remove();else if(e.isExportDefaultDeclaration()){const t=e.get("declaration");if(!t.isFunctionDeclaration()&&!t.isClassDeclaration())throw t.buildCodeFrameError("Unexpected default expression export.");t._blockHoist=e.node._blockHoist,e.replaceWith(t)}else e.isExportAllDeclaration()&&e.remove()})}(e);for(const[,s]of c)s.importsNamespace.size>0&&(s.name=s.importsNamespace.values().next().value),n?s.interop="none":l&&"namespace"===s.interop&&(s.interop="default");return{exportName:t,exportNameListName:null,hasExports:d,local:u,source:c}};var r,s=n("../../node_modules/path-browserify/index.js"),o=(r=n("../../node_modules/@babel/helper-split-export-declaration/lib/index.js"))&&r.__esModule?r:{default:r};function i(e){return 0===e.imports.size&&0===e.importsNamespace.size&&0===e.reexports.size&&0===e.reexportNamespace.size&&!e.reexportAll}},"../../node_modules/@babel/helper-module-transforms/lib/rewrite-live-references.js":function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=function(e,t){const n=new Map,r=new Map,o=t=>{e.requeue(t)};for(const[s,i]of t.source){for(const[e,t]of i.imports)n.set(e,[s,t,null]);for(const e of i.importsNamespace)n.set(e,[s,null,e])}for(const[s,i]of t.local){let e=r.get(s);e||(e=[],r.set(s,e)),e.push(...i.names)}e.traverse(u,{metadata:t,requeueInParent:o,scope:e.scope,exported:r}),(0,i.default)(e,new Set([...Array.from(n.keys()),...Array.from(r.keys())])),e.traverse(f,{seen:new WeakSet,metadata:t,requeueInParent:o,scope:e.scope,imported:n,exported:r,buildImportReference:([e,n,r],o)=>{const i=t.source.get(e);if(r)return i.lazy&&(o=s.callExpression(o,[])),o;let a=s.identifier(i.name);return i.lazy&&(a=s.callExpression(a,[])),s.memberExpression(a,s.identifier(n))}})};var r=l(n("../../node_modules/assert/assert.js")),s=function(e){if(e&&e.__esModule)return e;if(null===e||"object"!==typeof e&&"function"!==typeof e)return{default:e};var t=a();if(t&&t.has(e))return t.get(e);var n={},r=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var s in e)if(Object.prototype.hasOwnProperty.call(e,s)){var o=r?Object.getOwnPropertyDescriptor(e,s):null;o&&(o.get||o.set)?Object.defineProperty(n,s,o):n[s]=e[s]}n.default=e,t&&t.set(e,n);return n}(n("../../node_modules/@babel/types/lib/index.js")),o=l(n("../../node_modules/@babel/template/lib/index.js")),i=l(n("../../node_modules/@babel/helper-simple-access/lib/index.js"));function a(){if("function"!==typeof WeakMap)return null;var e=new WeakMap;return a=function(){return e},e}function l(e){return e&&e.__esModule?e:{default:e}}const u={Scope(e){e.skip()},ClassDeclaration(e){const{requeueInParent:t,exported:n,metadata:r}=this,{id:o}=e.node;if(!o)throw new Error("Expected class to have a name");const i=o.name,a=n.get(i)||[];if(a.length>0){const n=s.expressionStatement(c(r,a,s.identifier(i)));n._blockHoist=e.node._blockHoist,t(e.insertAfter(n)[0])}},VariableDeclaration(e){const{requeueInParent:t,exported:n,metadata:r}=this;Object.keys(e.getOuterBindingIdentifiers()).forEach(o=>{const i=n.get(o)||[];if(i.length>0){const n=s.expressionStatement(c(r,i,s.identifier(o)));n._blockHoist=e.node._blockHoist,t(e.insertAfter(n)[0])}})}},c=(e,t,n)=>(t||[]).reduce((t,n)=>s.assignmentExpression("=",s.memberExpression(s.identifier(e.exportName),s.identifier(n)),t),n),d=e=>o.default.expression.ast`
    (function() {
      throw new Error('"' + '${e}' + '" is read-only.');
    })()
  `,f={ReferencedIdentifier(e){const{seen:t,buildImportReference:n,scope:r,imported:o,requeueInParent:i}=this;if(t.has(e.node))return;t.add(e.node);const a=e.node.name,l=e.scope.getBinding(a);if(r.getBinding(a)!==l)return;const u=o.get(a);if(u){const t=n(u,e.node);if(t.loc=e.node.loc,(e.parentPath.isCallExpression({callee:e.node})||e.parentPath.isOptionalCallExpression({callee:e.node})||e.parentPath.isTaggedTemplateExpression({tag:e.node}))&&s.isMemberExpression(t))e.replaceWith(s.sequenceExpression([s.numericLiteral(0),t]));else if(e.isJSXIdentifier()&&s.isMemberExpression(t)){const{object:n,property:r}=t;e.replaceWith(s.JSXMemberExpression(s.JSXIdentifier(n.name),s.JSXIdentifier(r.name)))}else e.replaceWith(t);i(e),e.skip()}},AssignmentExpression:{exit(e){const{scope:t,seen:n,imported:o,exported:i,requeueInParent:a,buildImportReference:l}=this;if(n.has(e.node))return;n.add(e.node);const u=e.get("left");if(!u.isMemberExpression())if(u.isIdentifier()){const n=u.node.name;if(t.getBinding(n)!==e.scope.getBinding(n))return;const f=i.get(n),p=o.get(n);if((null==f?void 0:f.length)>0||p){(0,r.default)("="===e.node.operator,"Path was not simplified");const t=e.node;p&&(t.left=l(p,t.left),t.right=s.sequenceExpression([t.right,d(n)])),e.replaceWith(c(this.metadata,f,t)),a(e)}}else{const n=u.getOuterBindingIdentifiers(),r=Object.keys(n).filter(n=>t.getBinding(n)===e.scope.getBinding(n)),l=r.find(e=>o.has(e));l&&(e.node.right=s.sequenceExpression([e.node.right,d(l)]));const f=[];if(r.forEach(e=>{const t=i.get(e)||[];t.length>0&&f.push(c(this.metadata,t,s.identifier(e)))}),f.length>0){let t=s.sequenceExpression(f);e.parentPath.isExpressionStatement()&&(t=s.expressionStatement(t),t._blockHoist=e.parentPath.node._blockHoist),a(e.insertAfter(t)[0])}}}},"ForOfStatement|ForInStatement"(e){const{scope:t,node:n}=e,{left:r}=n,{exported:o,scope:i}=this;if(!s.isVariableDeclaration(r)){let n=!1;const a=e.get("body"),l=a.scope;for(const e of Object.keys(s.getOuterBindingIdentifiers(r)))o.get(e)&&i.getBinding(e)===t.getBinding(e)&&(n=!0,l.hasOwnBinding(e)&&l.rename(e));if(!n)return;const u=t.generateUidIdentifierBasedOnNode(r);a.unshiftContainer("body",s.expressionStatement(s.assignmentExpression("=",r,u))),e.get("left").replaceWith(s.variableDeclaration("let",[s.variableDeclarator(u)])),t.registerDeclaration(e.get("left"))}}}},"../../node_modules/@babel/helper-module-transforms/lib/rewrite-this.js":function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=function(e){e.traverse(s)};var r=n("../../node_modules/@babel/helper-replace-supers/lib/index.js");const s={ThisExpression(e){e.replaceWith(e.scope.buildUndefinedNode())},Function(e){e.isMethod()?(0,r.skipAllButComputedKey)(e):e.isArrowFunctionExpression()||e.skip()},ClassProperty(e){(0,r.skipAllButComputedKey)(e)},ClassPrivateProperty(e){e.skip()}}},"../../node_modules/@babel/helper-optimise-call-expression/lib/index.js":function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=function(e,t,n){return 1===n.length&&r.isSpreadElement(n[0])&&r.isIdentifier(n[0].argument,{name:"arguments"})?r.callExpression(r.memberExpression(e,r.identifier("apply")),[t,n[0].argument]):r.callExpression(r.memberExpression(e,r.identifier("call")),[t,...n])};var r=function(e){if(e&&e.__esModule)return e;if(null===e||"object"!==typeof e&&"function"!==typeof e)return{default:e};var t=s();if(t&&t.has(e))return t.get(e);var n={},r=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var o in e)if(Object.prototype.hasOwnProperty.call(e,o)){var i=r?Object.getOwnPropertyDescriptor(e,o):null;i&&(i.get||i.set)?Object.defineProperty(n,o,i):n[o]=e[o]}n.default=e,t&&t.set(e,n);return n}(n("../../node_modules/@babel/types/lib/index.js"));function s(){if("function"!==typeof WeakMap)return null;var e=new WeakMap;return s=function(){return e},e}},"../../node_modules/@babel/helper-plugin-utils/lib/index.js":function(e,t,n){"use strict";function r(e,t){return Object.prototype.hasOwnProperty.call(e,t)}Object.defineProperty(t,"__esModule",{value:!0}),t.declare=function(e){return(t,n,s)=>(t.assertVersion||(t=Object.assign(function(e){let t=null;"string"===typeof e.version&&/^7\./.test(e.version)&&(t=Object.getPrototypeOf(e),!t||r(t,"version")&&r(t,"transform")&&r(t,"template")&&r(t,"types")||(t=null));return Object.assign({},t,e)}(t),{assertVersion(e){!function(e,t){if("number"===typeof e){if(!Number.isInteger(e))throw new Error("Expected string or integer value.");e=`^${e}.0.0-0`}if("string"!==typeof e)throw new Error("Expected string or integer value.");const n=Error.stackTraceLimit;"number"===typeof n&&n<25&&(Error.stackTraceLimit=25);let r;r="7."===t.slice(0,2)?new Error(`Requires Babel "^7.0.0-beta.41", but was loaded with "${t}". You'll need to update your @babel/core version.`):new Error(`Requires Babel "${e}", but was loaded with "${t}". If you are sure you have a compatible version of @babel/core, it is likely that something in your build process is loading the wrong version. Inspect the stack trace of this error to look for the first entry that doesn't mention "@babel/core" or "babel-core" to see what is calling Babel.`);"number"===typeof n&&(Error.stackTraceLimit=n);throw Object.assign(r,{code:"BABEL_VERSION_UNSUPPORTED",version:t,range:e})}(e,t.version)}})),e(t,n||{},s))}},"../../node_modules/@babel/helper-replace-supers/lib/index.js":function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.skipAllButComputedKey=c,t.default=t.environmentVisitor=void 0;var r=l(n("../../node_modules/@babel/traverse/lib/index.js")),s=l(n("../../node_modules/@babel/helper-member-expression-to-functions/lib/index.js")),o=l(n("../../node_modules/@babel/helper-optimise-call-expression/lib/index.js")),i=function(e){if(e&&e.__esModule)return e;if(null===e||"object"!==typeof e&&"function"!==typeof e)return{default:e};var t=a();if(t&&t.has(e))return t.get(e);var n={},r=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var s in e)if(Object.prototype.hasOwnProperty.call(e,s)){var o=r?Object.getOwnPropertyDescriptor(e,s):null;o&&(o.get||o.set)?Object.defineProperty(n,s,o):n[s]=e[s]}n.default=e,t&&t.set(e,n);return n}(n("../../node_modules/@babel/types/lib/index.js"));function a(){if("function"!==typeof WeakMap)return null;var e=new WeakMap;return a=function(){return e},e}function l(e){return e&&e.__esModule?e:{default:e}}function u(e,t,n,r){e=i.cloneNode(e);const s=t||r?e:i.memberExpression(e,i.identifier("prototype"));return i.callExpression(n.addHelper("getPrototypeOf"),[s])}function c(e){if(!e.node.computed)return void e.skip();const t=i.VISITOR_KEYS[e.type];for(const n of t)"key"!==n&&e.skipKey(n)}const d={TypeAnnotation(e){e.skip()},Function(e){e.isMethod()||e.isArrowFunctionExpression()||e.skip()},"Method|ClassProperty|ClassPrivateProperty"(e){c(e)}};t.environmentVisitor=d;const f=r.default.visitors.merge([d,{Super(e,t){const{node:n,parentPath:r}=e;r.isMemberExpression({object:n})&&t.handle(r)}}]),p={memoise(e,t){const{scope:n,node:r}=e,{computed:s,property:o}=r;if(!s)return;const i=n.maybeGenerateMemoised(o);i&&this.memoiser.set(o,i,t)},prop(e){const{computed:t,property:n}=e.node;return this.memoiser.has(n)?i.cloneNode(this.memoiser.get(n)):t?i.cloneNode(n):i.stringLiteral(n.name)},get(e){return i.callExpression(this.file.addHelper("get"),[u(this.getObjectRef(),this.isStatic,this.file,this.isPrivateMethod),this.prop(e),i.thisExpression()])},set(e,t){return i.callExpression(this.file.addHelper("set"),[u(this.getObjectRef(),this.isStatic,this.file,this.isPrivateMethod),this.prop(e),t,i.thisExpression(),i.booleanLiteral(e.isInStrictMode())])},destructureSet(e){throw e.buildCodeFrameError("Destructuring to a super field is not supported yet.")},call(e,t){return(0,o.default)(this.get(e),i.thisExpression(),t)}},h=Object.assign({},p,{prop(e){const{property:t}=e.node;return this.memoiser.has(t)?i.cloneNode(this.memoiser.get(t)):i.cloneNode(t)},get(e){const{isStatic:t,superRef:n}=this,{computed:r}=e.node,s=this.prop(e);let o;return o=t?n?i.cloneNode(n):i.memberExpression(i.identifier("Function"),i.identifier("prototype")):n?i.memberExpression(i.cloneNode(n),i.identifier("prototype")):i.memberExpression(i.identifier("Object"),i.identifier("prototype")),i.memberExpression(o,s,r)},set(e,t){const{computed:n}=e.node,r=this.prop(e);return i.assignmentExpression("=",i.memberExpression(i.thisExpression(),r,n),t)},destructureSet(e){const{computed:t}=e.node,n=this.prop(e);return i.memberExpression(i.thisExpression(),n,t)}});t.default=class{constructor(e){const t=e.methodPath;this.methodPath=t,this.isStatic=t.isObjectMethod()||t.node.static,this.isPrivateMethod=t.isPrivate()&&t.isMethod(),this.file=e.file,this.superRef=e.superRef,this.isLoose=e.isLoose,this.opts=e}getObjectRef(){return i.cloneNode(this.opts.objectRef||this.opts.getObjectRef())}replace(){const e=this.isLoose?h:p;(0,s.default)(this.methodPath,f,Object.assign({file:this.file,isStatic:this.isStatic,isPrivateMethod:this.isPrivateMethod,getObjectRef:this.getObjectRef.bind(this),superRef:this.superRef},e))}}},"../../node_modules/@babel/helper-simple-access/lib/index.js":function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=function(e,t){e.traverse(o,{scope:e.scope,bindingNames:t,seen:new WeakSet})};var r=function(e){if(e&&e.__esModule)return e;if(null===e||"object"!==typeof e&&"function"!==typeof e)return{default:e};var t=s();if(t&&t.has(e))return t.get(e);var n={},r=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var o in e)if(Object.prototype.hasOwnProperty.call(e,o)){var i=r?Object.getOwnPropertyDescriptor(e,o):null;i&&(i.get||i.set)?Object.defineProperty(n,o,i):n[o]=e[o]}n.default=e,t&&t.set(e,n);return n}(n("../../node_modules/@babel/types/lib/index.js"));function s(){if("function"!==typeof WeakMap)return null;var e=new WeakMap;return s=function(){return e},e}const o={UpdateExpression:{exit(e){const{scope:t,bindingNames:n}=this,s=e.get("argument");if(!s.isIdentifier())return;const o=s.node.name;if(n.has(o)&&t.getBinding(o)===e.scope.getBinding(o))if(e.parentPath.isExpressionStatement()&&!e.isCompletionRecord()){const t="++"==e.node.operator?"+=":"-=";e.replaceWith(r.assignmentExpression(t,s.node,r.numericLiteral(1)))}else if(e.node.prefix)e.replaceWith(r.assignmentExpression("=",r.identifier(o),r.binaryExpression(e.node.operator[0],r.unaryExpression("+",s.node),r.numericLiteral(1))));else{const t=e.scope.generateUidIdentifierBasedOnNode(s.node,"old"),n=t.name;e.scope.push({id:t});const o=r.binaryExpression(e.node.operator[0],r.identifier(n),r.numericLiteral(1));e.replaceWith(r.sequenceExpression([r.assignmentExpression("=",r.identifier(n),r.unaryExpression("+",s.node)),r.assignmentExpression("=",r.cloneNode(s.node),o),r.identifier(n)]))}}},AssignmentExpression:{exit(e){const{scope:t,seen:n,bindingNames:s}=this;if("="===e.node.operator)return;if(n.has(e.node))return;n.add(e.node);const o=e.get("left");if(!o.isIdentifier())return;const i=o.node.name;s.has(i)&&t.getBinding(i)===e.scope.getBinding(i)&&(e.node.right=r.binaryExpression(e.node.operator.slice(0,-1),r.cloneNode(e.node.left),e.node.right),e.node.operator="=")}}}},"../../node_modules/@babel/helper-split-export-declaration/lib/index.js":function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=function(e){if(!e.isExportDeclaration())throw new Error("Only export declarations can be splitted.");const t=e.isExportDefaultDeclaration(),n=e.get("declaration"),s=n.isClassDeclaration();if(t){const t=n.isFunctionDeclaration()||s,o=n.isScope()?n.scope.parent:n.scope;let i=n.node.id,a=!1;i||(a=!0,i=o.generateUidIdentifier("default"),(t||n.isFunctionExpression()||n.isClassExpression())&&(n.node.id=r.cloneNode(i)));const l=t?n:r.variableDeclaration("var",[r.variableDeclarator(r.cloneNode(i),n.node)]),u=r.exportNamedDeclaration(null,[r.exportSpecifier(r.cloneNode(i),r.identifier("default"))]);return e.insertAfter(u),e.replaceWith(l),a&&o.registerDeclaration(e),e}if(e.get("specifiers").length>0)throw new Error("It doesn't make sense to split exported specifiers.");const o=n.getOuterBindingIdentifiers(),i=Object.keys(o).map(e=>r.exportSpecifier(r.identifier(e),r.identifier(e))),a=r.exportNamedDeclaration(null,i);return e.insertAfter(a),e.replaceWith(n.node),e};var r=function(e){if(e&&e.__esModule)return e;if(null===e||"object"!==typeof e&&"function"!==typeof e)return{default:e};var t=s();if(t&&t.has(e))return t.get(e);var n={},r=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var o in e)if(Object.prototype.hasOwnProperty.call(e,o)){var i=r?Object.getOwnPropertyDescriptor(e,o):null;i&&(i.get||i.set)?Object.defineProperty(n,o,i):n[o]=e[o]}n.default=e,t&&t.set(e,n);return n}(n("../../node_modules/@babel/types/lib/index.js"));function s(){if("function"!==typeof WeakMap)return null;var e=new WeakMap;return s=function(){return e},e}},"../../node_modules/@babel/helper-validator-identifier/lib/identifier.js":function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.isIdentifierStart=c,t.isIdentifierChar=d,t.isIdentifierName=function(e){let t=!0;for(let n=0,r=Array.from(e);n<r.length;n++){const e=r[n].codePointAt(0);if(t){if(!c(e))return!1;t=!1}else if(!d(e))return!1}return!t};let r="\xaa\xb5\xba\xc0-\xd6\xd8-\xf6\xf8-\u02c1\u02c6-\u02d1\u02e0-\u02e4\u02ec\u02ee\u0370-\u0374\u0376\u0377\u037a-\u037d\u037f\u0386\u0388-\u038a\u038c\u038e-\u03a1\u03a3-\u03f5\u03f7-\u0481\u048a-\u052f\u0531-\u0556\u0559\u0560-\u0588\u05d0-\u05ea\u05ef-\u05f2\u0620-\u064a\u066e\u066f\u0671-\u06d3\u06d5\u06e5\u06e6\u06ee\u06ef\u06fa-\u06fc\u06ff\u0710\u0712-\u072f\u074d-\u07a5\u07b1\u07ca-\u07ea\u07f4\u07f5\u07fa\u0800-\u0815\u081a\u0824\u0828\u0840-\u0858\u0860-\u086a\u08a0-\u08b4\u08b6-\u08c7\u0904-\u0939\u093d\u0950\u0958-\u0961\u0971-\u0980\u0985-\u098c\u098f\u0990\u0993-\u09a8\u09aa-\u09b0\u09b2\u09b6-\u09b9\u09bd\u09ce\u09dc\u09dd\u09df-\u09e1\u09f0\u09f1\u09fc\u0a05-\u0a0a\u0a0f\u0a10\u0a13-\u0a28\u0a2a-\u0a30\u0a32\u0a33\u0a35\u0a36\u0a38\u0a39\u0a59-\u0a5c\u0a5e\u0a72-\u0a74\u0a85-\u0a8d\u0a8f-\u0a91\u0a93-\u0aa8\u0aaa-\u0ab0\u0ab2\u0ab3\u0ab5-\u0ab9\u0abd\u0ad0\u0ae0\u0ae1\u0af9\u0b05-\u0b0c\u0b0f\u0b10\u0b13-\u0b28\u0b2a-\u0b30\u0b32\u0b33\u0b35-\u0b39\u0b3d\u0b5c\u0b5d\u0b5f-\u0b61\u0b71\u0b83\u0b85-\u0b8a\u0b8e-\u0b90\u0b92-\u0b95\u0b99\u0b9a\u0b9c\u0b9e\u0b9f\u0ba3\u0ba4\u0ba8-\u0baa\u0bae-\u0bb9\u0bd0\u0c05-\u0c0c\u0c0e-\u0c10\u0c12-\u0c28\u0c2a-\u0c39\u0c3d\u0c58-\u0c5a\u0c60\u0c61\u0c80\u0c85-\u0c8c\u0c8e-\u0c90\u0c92-\u0ca8\u0caa-\u0cb3\u0cb5-\u0cb9\u0cbd\u0cde\u0ce0\u0ce1\u0cf1\u0cf2\u0d04-\u0d0c\u0d0e-\u0d10\u0d12-\u0d3a\u0d3d\u0d4e\u0d54-\u0d56\u0d5f-\u0d61\u0d7a-\u0d7f\u0d85-\u0d96\u0d9a-\u0db1\u0db3-\u0dbb\u0dbd\u0dc0-\u0dc6\u0e01-\u0e30\u0e32\u0e33\u0e40-\u0e46\u0e81\u0e82\u0e84\u0e86-\u0e8a\u0e8c-\u0ea3\u0ea5\u0ea7-\u0eb0\u0eb2\u0eb3\u0ebd\u0ec0-\u0ec4\u0ec6\u0edc-\u0edf\u0f00\u0f40-\u0f47\u0f49-\u0f6c\u0f88-\u0f8c\u1000-\u102a\u103f\u1050-\u1055\u105a-\u105d\u1061\u1065\u1066\u106e-\u1070\u1075-\u1081\u108e\u10a0-\u10c5\u10c7\u10cd\u10d0-\u10fa\u10fc-\u1248\u124a-\u124d\u1250-\u1256\u1258\u125a-\u125d\u1260-\u1288\u128a-\u128d\u1290-\u12b0\u12b2-\u12b5\u12b8-\u12be\u12c0\u12c2-\u12c5\u12c8-\u12d6\u12d8-\u1310\u1312-\u1315\u1318-\u135a\u1380-\u138f\u13a0-\u13f5\u13f8-\u13fd\u1401-\u166c\u166f-\u167f\u1681-\u169a\u16a0-\u16ea\u16ee-\u16f8\u1700-\u170c\u170e-\u1711\u1720-\u1731\u1740-\u1751\u1760-\u176c\u176e-\u1770\u1780-\u17b3\u17d7\u17dc\u1820-\u1878\u1880-\u18a8\u18aa\u18b0-\u18f5\u1900-\u191e\u1950-\u196d\u1970-\u1974\u1980-\u19ab\u19b0-\u19c9\u1a00-\u1a16\u1a20-\u1a54\u1aa7\u1b05-\u1b33\u1b45-\u1b4b\u1b83-\u1ba0\u1bae\u1baf\u1bba-\u1be5\u1c00-\u1c23\u1c4d-\u1c4f\u1c5a-\u1c7d\u1c80-\u1c88\u1c90-\u1cba\u1cbd-\u1cbf\u1ce9-\u1cec\u1cee-\u1cf3\u1cf5\u1cf6\u1cfa\u1d00-\u1dbf\u1e00-\u1f15\u1f18-\u1f1d\u1f20-\u1f45\u1f48-\u1f4d\u1f50-\u1f57\u1f59\u1f5b\u1f5d\u1f5f-\u1f7d\u1f80-\u1fb4\u1fb6-\u1fbc\u1fbe\u1fc2-\u1fc4\u1fc6-\u1fcc\u1fd0-\u1fd3\u1fd6-\u1fdb\u1fe0-\u1fec\u1ff2-\u1ff4\u1ff6-\u1ffc\u2071\u207f\u2090-\u209c\u2102\u2107\u210a-\u2113\u2115\u2118-\u211d\u2124\u2126\u2128\u212a-\u2139\u213c-\u213f\u2145-\u2149\u214e\u2160-\u2188\u2c00-\u2c2e\u2c30-\u2c5e\u2c60-\u2ce4\u2ceb-\u2cee\u2cf2\u2cf3\u2d00-\u2d25\u2d27\u2d2d\u2d30-\u2d67\u2d6f\u2d80-\u2d96\u2da0-\u2da6\u2da8-\u2dae\u2db0-\u2db6\u2db8-\u2dbe\u2dc0-\u2dc6\u2dc8-\u2dce\u2dd0-\u2dd6\u2dd8-\u2dde\u3005-\u3007\u3021-\u3029\u3031-\u3035\u3038-\u303c\u3041-\u3096\u309b-\u309f\u30a1-\u30fa\u30fc-\u30ff\u3105-\u312f\u3131-\u318e\u31a0-\u31bf\u31f0-\u31ff\u3400-\u4dbf\u4e00-\u9ffc\ua000-\ua48c\ua4d0-\ua4fd\ua500-\ua60c\ua610-\ua61f\ua62a\ua62b\ua640-\ua66e\ua67f-\ua69d\ua6a0-\ua6ef\ua717-\ua71f\ua722-\ua788\ua78b-\ua7bf\ua7c2-\ua7ca\ua7f5-\ua801\ua803-\ua805\ua807-\ua80a\ua80c-\ua822\ua840-\ua873\ua882-\ua8b3\ua8f2-\ua8f7\ua8fb\ua8fd\ua8fe\ua90a-\ua925\ua930-\ua946\ua960-\ua97c\ua984-\ua9b2\ua9cf\ua9e0-\ua9e4\ua9e6-\ua9ef\ua9fa-\ua9fe\uaa00-\uaa28\uaa40-\uaa42\uaa44-\uaa4b\uaa60-\uaa76\uaa7a\uaa7e-\uaaaf\uaab1\uaab5\uaab6\uaab9-\uaabd\uaac0\uaac2\uaadb-\uaadd\uaae0-\uaaea\uaaf2-\uaaf4\uab01-\uab06\uab09-\uab0e\uab11-\uab16\uab20-\uab26\uab28-\uab2e\uab30-\uab5a\uab5c-\uab69\uab70-\uabe2\uac00-\ud7a3\ud7b0-\ud7c6\ud7cb-\ud7fb\uf900-\ufa6d\ufa70-\ufad9\ufb00-\ufb06\ufb13-\ufb17\ufb1d\ufb1f-\ufb28\ufb2a-\ufb36\ufb38-\ufb3c\ufb3e\ufb40\ufb41\ufb43\ufb44\ufb46-\ufbb1\ufbd3-\ufd3d\ufd50-\ufd8f\ufd92-\ufdc7\ufdf0-\ufdfb\ufe70-\ufe74\ufe76-\ufefc\uff21-\uff3a\uff41-\uff5a\uff66-\uffbe\uffc2-\uffc7\uffca-\uffcf\uffd2-\uffd7\uffda-\uffdc",s="\u200c\u200d\xb7\u0300-\u036f\u0387\u0483-\u0487\u0591-\u05bd\u05bf\u05c1\u05c2\u05c4\u05c5\u05c7\u0610-\u061a\u064b-\u0669\u0670\u06d6-\u06dc\u06df-\u06e4\u06e7\u06e8\u06ea-\u06ed\u06f0-\u06f9\u0711\u0730-\u074a\u07a6-\u07b0\u07c0-\u07c9\u07eb-\u07f3\u07fd\u0816-\u0819\u081b-\u0823\u0825-\u0827\u0829-\u082d\u0859-\u085b\u08d3-\u08e1\u08e3-\u0903\u093a-\u093c\u093e-\u094f\u0951-\u0957\u0962\u0963\u0966-\u096f\u0981-\u0983\u09bc\u09be-\u09c4\u09c7\u09c8\u09cb-\u09cd\u09d7\u09e2\u09e3\u09e6-\u09ef\u09fe\u0a01-\u0a03\u0a3c\u0a3e-\u0a42\u0a47\u0a48\u0a4b-\u0a4d\u0a51\u0a66-\u0a71\u0a75\u0a81-\u0a83\u0abc\u0abe-\u0ac5\u0ac7-\u0ac9\u0acb-\u0acd\u0ae2\u0ae3\u0ae6-\u0aef\u0afa-\u0aff\u0b01-\u0b03\u0b3c\u0b3e-\u0b44\u0b47\u0b48\u0b4b-\u0b4d\u0b55-\u0b57\u0b62\u0b63\u0b66-\u0b6f\u0b82\u0bbe-\u0bc2\u0bc6-\u0bc8\u0bca-\u0bcd\u0bd7\u0be6-\u0bef\u0c00-\u0c04\u0c3e-\u0c44\u0c46-\u0c48\u0c4a-\u0c4d\u0c55\u0c56\u0c62\u0c63\u0c66-\u0c6f\u0c81-\u0c83\u0cbc\u0cbe-\u0cc4\u0cc6-\u0cc8\u0cca-\u0ccd\u0cd5\u0cd6\u0ce2\u0ce3\u0ce6-\u0cef\u0d00-\u0d03\u0d3b\u0d3c\u0d3e-\u0d44\u0d46-\u0d48\u0d4a-\u0d4d\u0d57\u0d62\u0d63\u0d66-\u0d6f\u0d81-\u0d83\u0dca\u0dcf-\u0dd4\u0dd6\u0dd8-\u0ddf\u0de6-\u0def\u0df2\u0df3\u0e31\u0e34-\u0e3a\u0e47-\u0e4e\u0e50-\u0e59\u0eb1\u0eb4-\u0ebc\u0ec8-\u0ecd\u0ed0-\u0ed9\u0f18\u0f19\u0f20-\u0f29\u0f35\u0f37\u0f39\u0f3e\u0f3f\u0f71-\u0f84\u0f86\u0f87\u0f8d-\u0f97\u0f99-\u0fbc\u0fc6\u102b-\u103e\u1040-\u1049\u1056-\u1059\u105e-\u1060\u1062-\u1064\u1067-\u106d\u1071-\u1074\u1082-\u108d\u108f-\u109d\u135d-\u135f\u1369-\u1371\u1712-\u1714\u1732-\u1734\u1752\u1753\u1772\u1773\u17b4-\u17d3\u17dd\u17e0-\u17e9\u180b-\u180d\u1810-\u1819\u18a9\u1920-\u192b\u1930-\u193b\u1946-\u194f\u19d0-\u19da\u1a17-\u1a1b\u1a55-\u1a5e\u1a60-\u1a7c\u1a7f-\u1a89\u1a90-\u1a99\u1ab0-\u1abd\u1abf\u1ac0\u1b00-\u1b04\u1b34-\u1b44\u1b50-\u1b59\u1b6b-\u1b73\u1b80-\u1b82\u1ba1-\u1bad\u1bb0-\u1bb9\u1be6-\u1bf3\u1c24-\u1c37\u1c40-\u1c49\u1c50-\u1c59\u1cd0-\u1cd2\u1cd4-\u1ce8\u1ced\u1cf4\u1cf7-\u1cf9\u1dc0-\u1df9\u1dfb-\u1dff\u203f\u2040\u2054\u20d0-\u20dc\u20e1\u20e5-\u20f0\u2cef-\u2cf1\u2d7f\u2de0-\u2dff\u302a-\u302f\u3099\u309a\ua620-\ua629\ua66f\ua674-\ua67d\ua69e\ua69f\ua6f0\ua6f1\ua802\ua806\ua80b\ua823-\ua827\ua82c\ua880\ua881\ua8b4-\ua8c5\ua8d0-\ua8d9\ua8e0-\ua8f1\ua8ff-\ua909\ua926-\ua92d\ua947-\ua953\ua980-\ua983\ua9b3-\ua9c0\ua9d0-\ua9d9\ua9e5\ua9f0-\ua9f9\uaa29-\uaa36\uaa43\uaa4c\uaa4d\uaa50-\uaa59\uaa7b-\uaa7d\uaab0\uaab2-\uaab4\uaab7\uaab8\uaabe\uaabf\uaac1\uaaeb-\uaaef\uaaf5\uaaf6\uabe3-\uabea\uabec\uabed\uabf0-\uabf9\ufb1e\ufe00-\ufe0f\ufe20-\ufe2f\ufe33\ufe34\ufe4d-\ufe4f\uff10-\uff19\uff3f";const o=new RegExp("["+r+"]"),i=new RegExp("["+r+s+"]");r=s=null;const a=[0,11,2,25,2,18,2,1,2,14,3,13,35,122,70,52,268,28,4,48,48,31,14,29,6,37,11,29,3,35,5,7,2,4,43,157,19,35,5,35,5,39,9,51,157,310,10,21,11,7,153,5,3,0,2,43,2,1,4,0,3,22,11,22,10,30,66,18,2,1,11,21,11,25,71,55,7,1,65,0,16,3,2,2,2,28,43,28,4,28,36,7,2,27,28,53,11,21,11,18,14,17,111,72,56,50,14,50,14,35,349,41,7,1,79,28,11,0,9,21,107,20,28,22,13,52,76,44,33,24,27,35,30,0,3,0,9,34,4,0,13,47,15,3,22,0,2,0,36,17,2,24,85,6,2,0,2,3,2,14,2,9,8,46,39,7,3,1,3,21,2,6,2,1,2,4,4,0,19,0,13,4,159,52,19,3,21,2,31,47,21,1,2,0,185,46,42,3,37,47,21,0,60,42,14,0,72,26,230,43,117,63,32,7,3,0,3,7,2,1,2,23,16,0,2,0,95,7,3,38,17,0,2,0,29,0,11,39,8,0,22,0,12,45,20,0,35,56,264,8,2,36,18,0,50,29,113,6,2,1,2,37,22,0,26,5,2,1,2,31,15,0,328,18,190,0,80,921,103,110,18,195,2749,1070,4050,582,8634,568,8,30,114,29,19,47,17,3,32,20,6,18,689,63,129,74,6,0,67,12,65,1,2,0,29,6135,9,1237,43,8,8952,286,50,2,18,3,9,395,2309,106,6,12,4,8,8,9,5991,84,2,70,2,1,3,0,3,1,3,3,2,11,2,0,2,6,2,64,2,3,3,7,2,6,2,27,2,3,2,4,2,0,4,6,2,339,3,24,2,24,2,30,2,24,2,30,2,24,2,30,2,24,2,30,2,24,2,7,2357,44,11,6,17,0,370,43,1301,196,60,67,8,0,1205,3,2,26,2,1,2,0,3,0,2,9,2,3,2,0,2,0,7,0,5,0,2,0,2,0,2,2,2,1,2,0,3,0,2,0,2,0,2,0,2,0,2,1,2,0,3,3,2,6,2,3,2,3,2,0,2,9,2,16,6,2,2,4,2,16,4421,42717,35,4148,12,221,3,5761,15,7472,3104,541,1507,4938],l=[509,0,227,0,150,4,294,9,1368,2,2,1,6,3,41,2,5,0,166,1,574,3,9,9,370,1,154,10,176,2,54,14,32,9,16,3,46,10,54,9,7,2,37,13,2,9,6,1,45,0,13,2,49,13,9,3,2,11,83,11,7,0,161,11,6,9,7,3,56,1,2,6,3,1,3,2,10,0,11,1,3,6,4,4,193,17,10,9,5,0,82,19,13,9,214,6,3,8,28,1,83,16,16,9,82,12,9,9,84,14,5,9,243,14,166,9,71,5,2,1,3,3,2,0,2,1,13,9,120,6,3,6,4,0,29,9,41,6,2,3,9,0,10,10,47,15,406,7,2,7,17,9,57,21,2,13,123,5,4,0,2,1,2,6,2,0,9,9,49,4,2,1,2,4,9,9,330,3,19306,9,135,4,60,6,26,9,1014,0,2,54,8,3,82,0,12,1,19628,1,5319,4,4,5,9,7,3,6,31,3,149,2,1418,49,513,54,5,49,9,0,15,0,23,4,2,14,1361,6,2,16,3,6,2,1,2,4,262,6,10,9,419,13,1495,6,110,6,6,9,4759,9,787719,239];function u(e,t){let n=65536;for(let r=0,s=t.length;r<s;r+=2){if(n+=t[r],n>e)return!1;if(n+=t[r+1],n>=e)return!0}return!1}function c(e){return e<65?36===e:e<=90||(e<97?95===e:e<=122||(e<=65535?e>=170&&o.test(String.fromCharCode(e)):u(e,a)))}function d(e){return e<48?36===e:e<58||!(e<65)&&(e<=90||(e<97?95===e:e<=122||(e<=65535?e>=170&&i.test(String.fromCharCode(e)):u(e,a)||u(e,l))))}},"../../node_modules/@babel/helper-validator-identifier/lib/index.js":function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"isIdentifierName",{enumerable:!0,get:function(){return r.isIdentifierName}}),Object.defineProperty(t,"isIdentifierChar",{enumerable:!0,get:function(){return r.isIdentifierChar}}),Object.defineProperty(t,"isIdentifierStart",{enumerable:!0,get:function(){return r.isIdentifierStart}}),Object.defineProperty(t,"isReservedWord",{enumerable:!0,get:function(){return s.isReservedWord}}),Object.defineProperty(t,"isStrictBindOnlyReservedWord",{enumerable:!0,get:function(){return s.isStrictBindOnlyReservedWord}}),Object.defineProperty(t,"isStrictBindReservedWord",{enumerable:!0,get:function(){return s.isStrictBindReservedWord}}),Object.defineProperty(t,"isStrictReservedWord",{enumerable:!0,get:function(){return s.isStrictReservedWord}}),Object.defineProperty(t,"isKeyword",{enumerable:!0,get:function(){return s.isKeyword}});var r=n("../../node_modules/@babel/helper-validator-identifier/lib/identifier.js"),s=n("../../node_modules/@babel/helper-validator-identifier/lib/keyword.js")},"../../node_modules/@babel/helper-validator-identifier/lib/keyword.js":function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.isReservedWord=l,t.isStrictReservedWord=u,t.isStrictBindOnlyReservedWord=c,t.isStrictBindReservedWord=function(e,t){return u(e,t)||c(e)},t.isKeyword=function(e){return o.has(e)};const r=["implements","interface","let","package","private","protected","public","static","yield"],s=["eval","arguments"],o=new Set(["break","case","catch","continue","debugger","default","do","else","finally","for","function","if","return","switch","throw","try","var","const","while","with","new","this","super","class","extends","export","import","null","true","false","in","instanceof","typeof","void","delete"]),i=new Set(r),a=new Set(s);function l(e,t){return t&&"await"===e||"enum"===e}function u(e,t){return l(e,t)||i.has(e)}function c(e){return a.has(e)}},"../../node_modules/@babel/helpers/lib/helpers.js":function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var r,s=(r=n("../../node_modules/@babel/template/lib/index.js"))&&r.__esModule?r:{default:r};const o=Object.create(null);var i=o;t.default=i;const a=e=>t=>({minVersion:e,ast:()=>s.default.program.ast(t)});o.typeof=a("7.0.0-beta.0")`
  export default function _typeof(obj) {
    "@babel/helpers - typeof";

    if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") {
      _typeof = function (obj) { return typeof obj; };
    } else {
      _typeof = function (obj) {
        return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype
          ? "symbol"
          : typeof obj;
      };
    }

    return _typeof(obj);
  }
`,o.jsx=a("7.0.0-beta.0")`
  var REACT_ELEMENT_TYPE;

  export default function _createRawReactElement(type, props, key, children) {
    if (!REACT_ELEMENT_TYPE) {
      REACT_ELEMENT_TYPE = (
        typeof Symbol === "function" && Symbol["for"] && Symbol["for"]("react.element")
      ) || 0xeac7;
    }

    var defaultProps = type && type.defaultProps;
    var childrenLength = arguments.length - 3;

    if (!props && childrenLength !== 0) {
      // If we're going to assign props.children, we create a new object now
      // to avoid mutating defaultProps.
      props = {
        children: void 0,
      };
    }

    if (childrenLength === 1) {
      props.children = children;
    } else if (childrenLength > 1) {
      var childArray = new Array(childrenLength);
      for (var i = 0; i < childrenLength; i++) {
        childArray[i] = arguments[i + 3];
      }
      props.children = childArray;
    }

    if (props && defaultProps) {
      for (var propName in defaultProps) {
        if (props[propName] === void 0) {
          props[propName] = defaultProps[propName];
        }
      }
    } else if (!props) {
      props = defaultProps || {};
    }

    return {
      $$typeof: REACT_ELEMENT_TYPE,
      type: type,
      key: key === undefined ? null : '' + key,
      ref: null,
      props: props,
      _owner: null,
    };
  }
`,o.asyncIterator=a("7.0.0-beta.0")`
  export default function _asyncIterator(iterable) {
    var method
    if (typeof Symbol !== "undefined") {
      if (Symbol.asyncIterator) {
        method = iterable[Symbol.asyncIterator]
        if (method != null) return method.call(iterable);
      }
      if (Symbol.iterator) {
        method = iterable[Symbol.iterator]
        if (method != null) return method.call(iterable);
      }
    }
    throw new TypeError("Object is not async iterable");
  }
`,o.AwaitValue=a("7.0.0-beta.0")`
  export default function _AwaitValue(value) {
    this.wrapped = value;
  }
`,o.AsyncGenerator=a("7.0.0-beta.0")`
  import AwaitValue from "AwaitValue";

  export default function AsyncGenerator(gen) {
    var front, back;

    function send(key, arg) {
      return new Promise(function (resolve, reject) {
        var request = {
          key: key,
          arg: arg,
          resolve: resolve,
          reject: reject,
          next: null,
        };

        if (back) {
          back = back.next = request;
        } else {
          front = back = request;
          resume(key, arg);
        }
      });
    }

    function resume(key, arg) {
      try {
        var result = gen[key](arg)
        var value = result.value;
        var wrappedAwait = value instanceof AwaitValue;

        Promise.resolve(wrappedAwait ? value.wrapped : value).then(
          function (arg) {
            if (wrappedAwait) {
              resume(key === "return" ? "return" : "next", arg);
              return
            }

            settle(result.done ? "return" : "normal", arg);
          },
          function (err) { resume("throw", err); });
      } catch (err) {
        settle("throw", err);
      }
    }

    function settle(type, value) {
      switch (type) {
        case "return":
          front.resolve({ value: value, done: true });
          break;
        case "throw":
          front.reject(value);
          break;
        default:
          front.resolve({ value: value, done: false });
          break;
      }

      front = front.next;
      if (front) {
        resume(front.key, front.arg);
      } else {
        back = null;
      }
    }

    this._invoke = send;

    // Hide "return" method if generator return is not supported
    if (typeof gen.return !== "function") {
      this.return = undefined;
    }
  }

  if (typeof Symbol === "function" && Symbol.asyncIterator) {
    AsyncGenerator.prototype[Symbol.asyncIterator] = function () { return this; };
  }

  AsyncGenerator.prototype.next = function (arg) { return this._invoke("next", arg); };
  AsyncGenerator.prototype.throw = function (arg) { return this._invoke("throw", arg); };
  AsyncGenerator.prototype.return = function (arg) { return this._invoke("return", arg); };
`,o.wrapAsyncGenerator=a("7.0.0-beta.0")`
  import AsyncGenerator from "AsyncGenerator";

  export default function _wrapAsyncGenerator(fn) {
    return function () {
      return new AsyncGenerator(fn.apply(this, arguments));
    };
  }
`,o.awaitAsyncGenerator=a("7.0.0-beta.0")`
  import AwaitValue from "AwaitValue";

  export default function _awaitAsyncGenerator(value) {
    return new AwaitValue(value);
  }
`,o.asyncGeneratorDelegate=a("7.0.0-beta.0")`
  export default function _asyncGeneratorDelegate(inner, awaitWrap) {
    var iter = {}, waiting = false;

    function pump(key, value) {
      waiting = true;
      value = new Promise(function (resolve) { resolve(inner[key](value)); });
      return { done: false, value: awaitWrap(value) };
    };

    if (typeof Symbol === "function" && Symbol.iterator) {
      iter[Symbol.iterator] = function () { return this; };
    }

    iter.next = function (value) {
      if (waiting) {
        waiting = false;
        return value;
      }
      return pump("next", value);
    };

    if (typeof inner.throw === "function") {
      iter.throw = function (value) {
        if (waiting) {
          waiting = false;
          throw value;
        }
        return pump("throw", value);
      };
    }

    if (typeof inner.return === "function") {
      iter.return = function (value) {
        if (waiting) {
          waiting = false;
          return value;
        }
        return pump("return", value);
      };
    }

    return iter;
  }
`,o.asyncToGenerator=a("7.0.0-beta.0")`
  function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) {
    try {
      var info = gen[key](arg);
      var value = info.value;
    } catch (error) {
      reject(error);
      return;
    }

    if (info.done) {
      resolve(value);
    } else {
      Promise.resolve(value).then(_next, _throw);
    }
  }

  export default function _asyncToGenerator(fn) {
    return function () {
      var self = this, args = arguments;
      return new Promise(function (resolve, reject) {
        var gen = fn.apply(self, args);
        function _next(value) {
          asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value);
        }
        function _throw(err) {
          asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err);
        }

        _next(undefined);
      });
    };
  }
`,o.classCallCheck=a("7.0.0-beta.0")`
  export default function _classCallCheck(instance, Constructor) {
    if (!(instance instanceof Constructor)) {
      throw new TypeError("Cannot call a class as a function");
    }
  }
`,o.createClass=a("7.0.0-beta.0")`
  function _defineProperties(target, props) {
    for (var i = 0; i < props.length; i ++) {
      var descriptor = props[i];
      descriptor.enumerable = descriptor.enumerable || false;
      descriptor.configurable = true;
      if ("value" in descriptor) descriptor.writable = true;
      Object.defineProperty(target, descriptor.key, descriptor);
    }
  }

  export default function _createClass(Constructor, protoProps, staticProps) {
    if (protoProps) _defineProperties(Constructor.prototype, protoProps);
    if (staticProps) _defineProperties(Constructor, staticProps);
    return Constructor;
  }
`,o.defineEnumerableProperties=a("7.0.0-beta.0")`
  export default function _defineEnumerableProperties(obj, descs) {
    for (var key in descs) {
      var desc = descs[key];
      desc.configurable = desc.enumerable = true;
      if ("value" in desc) desc.writable = true;
      Object.defineProperty(obj, key, desc);
    }

    // Symbols are not enumerated over by for-in loops. If native
    // Symbols are available, fetch all of the descs object's own
    // symbol properties and define them on our target object too.
    if (Object.getOwnPropertySymbols) {
      var objectSymbols = Object.getOwnPropertySymbols(descs);
      for (var i = 0; i < objectSymbols.length; i++) {
        var sym = objectSymbols[i];
        var desc = descs[sym];
        desc.configurable = desc.enumerable = true;
        if ("value" in desc) desc.writable = true;
        Object.defineProperty(obj, sym, desc);
      }
    }
    return obj;
  }
`,o.defaults=a("7.0.0-beta.0")`
  export default function _defaults(obj, defaults) {
    var keys = Object.getOwnPropertyNames(defaults);
    for (var i = 0; i < keys.length; i++) {
      var key = keys[i];
      var value = Object.getOwnPropertyDescriptor(defaults, key);
      if (value && value.configurable && obj[key] === undefined) {
        Object.defineProperty(obj, key, value);
      }
    }
    return obj;
  }
`,o.defineProperty=a("7.0.0-beta.0")`
  export default function _defineProperty(obj, key, value) {
    // Shortcircuit the slow defineProperty path when possible.
    // We are trying to avoid issues where setters defined on the
    // prototype cause side effects under the fast path of simple
    // assignment. By checking for existence of the property with
    // the in operator, we can optimize most of this overhead away.
    if (key in obj) {
      Object.defineProperty(obj, key, {
        value: value,
        enumerable: true,
        configurable: true,
        writable: true
      });
    } else {
      obj[key] = value;
    }
    return obj;
  }
`,o.extends=a("7.0.0-beta.0")`
  export default function _extends() {
    _extends = Object.assign || function (target) {
      for (var i = 1; i < arguments.length; i++) {
        var source = arguments[i];
        for (var key in source) {
          if (Object.prototype.hasOwnProperty.call(source, key)) {
            target[key] = source[key];
          }
        }
      }
      return target;
    };

    return _extends.apply(this, arguments);
  }
`,o.objectSpread=a("7.0.0-beta.0")`
  import defineProperty from "defineProperty";

  export default function _objectSpread(target) {
    for (var i = 1; i < arguments.length; i++) {
      var source = (arguments[i] != null) ? Object(arguments[i]) : {};
      var ownKeys = Object.keys(source);
      if (typeof Object.getOwnPropertySymbols === 'function') {
        ownKeys = ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function(sym) {
          return Object.getOwnPropertyDescriptor(source, sym).enumerable;
        }));
      }
      ownKeys.forEach(function(key) {
        defineProperty(target, key, source[key]);
      });
    }
    return target;
  }
`,o.objectSpread2=a("7.5.0")`
  import defineProperty from "defineProperty";

  // This function is different to "Reflect.ownKeys". The enumerableOnly
  // filters on symbol properties only. Returned string properties are always
  // enumerable. It is good to use in objectSpread.

  function ownKeys(object, enumerableOnly) {
    var keys = Object.keys(object);
    if (Object.getOwnPropertySymbols) {
      var symbols = Object.getOwnPropertySymbols(object);
      if (enumerableOnly) symbols = symbols.filter(function (sym) {
        return Object.getOwnPropertyDescriptor(object, sym).enumerable;
      });
      keys.push.apply(keys, symbols);
    }
    return keys;
  }

  export default function _objectSpread2(target) {
    for (var i = 1; i < arguments.length; i++) {
      var source = (arguments[i] != null) ? arguments[i] : {};
      if (i % 2) {
        ownKeys(Object(source), true).forEach(function (key) {
          defineProperty(target, key, source[key]);
        });
      } else if (Object.getOwnPropertyDescriptors) {
        Object.defineProperties(target, Object.getOwnPropertyDescriptors(source));
      } else {
        ownKeys(Object(source)).forEach(function (key) {
          Object.defineProperty(
            target,
            key,
            Object.getOwnPropertyDescriptor(source, key)
          );
        });
      }
    }
    return target;
  }
`,o.inherits=a("7.0.0-beta.0")`
  import setPrototypeOf from "setPrototypeOf";

  export default function _inherits(subClass, superClass) {
    if (typeof superClass !== "function" && superClass !== null) {
      throw new TypeError("Super expression must either be null or a function");
    }
    subClass.prototype = Object.create(superClass && superClass.prototype, {
      constructor: {
        value: subClass,
        writable: true,
        configurable: true
      }
    });
    if (superClass) setPrototypeOf(subClass, superClass);
  }
`,o.inheritsLoose=a("7.0.0-beta.0")`
  export default function _inheritsLoose(subClass, superClass) {
    subClass.prototype = Object.create(superClass.prototype);
    subClass.prototype.constructor = subClass;
    subClass.__proto__ = superClass;
  }
`,o.getPrototypeOf=a("7.0.0-beta.0")`
  export default function _getPrototypeOf(o) {
    _getPrototypeOf = Object.setPrototypeOf
      ? Object.getPrototypeOf
      : function _getPrototypeOf(o) {
          return o.__proto__ || Object.getPrototypeOf(o);
        };
    return _getPrototypeOf(o);
  }
`,o.setPrototypeOf=a("7.0.0-beta.0")`
  export default function _setPrototypeOf(o, p) {
    _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) {
      o.__proto__ = p;
      return o;
    };
    return _setPrototypeOf(o, p);
  }
`,o.isNativeReflectConstruct=a("7.9.0")`
  export default function _isNativeReflectConstruct() {
    if (typeof Reflect === "undefined" || !Reflect.construct) return false;

    // core-js@3
    if (Reflect.construct.sham) return false;

    // Proxy can't be polyfilled. Every browser implemented
    // proxies before or at the same time as Reflect.construct,
    // so if they support Proxy they also support Reflect.construct.
    if (typeof Proxy === "function") return true;

    // Since Reflect.construct can't be properly polyfilled, some
    // implementations (e.g. core-js@2) don't set the correct internal slots.
    // Those polyfills don't allow us to subclass built-ins, so we need to
    // use our fallback implementation.
    try {
      // If the internal slots aren't set, this throws an error similar to
      //   TypeError: this is not a Date object.
      Date.prototype.toString.call(Reflect.construct(Date, [], function() {}));
      return true;
    } catch (e) {
      return false;
    }
  }
`,o.construct=a("7.0.0-beta.0")`
  import setPrototypeOf from "setPrototypeOf";
  import isNativeReflectConstruct from "isNativeReflectConstruct";

  export default function _construct(Parent, args, Class) {
    if (isNativeReflectConstruct()) {
      _construct = Reflect.construct;
    } else {
      // NOTE: If Parent !== Class, the correct __proto__ is set *after*
      //       calling the constructor.
      _construct = function _construct(Parent, args, Class) {
        var a = [null];
        a.push.apply(a, args);
        var Constructor = Function.bind.apply(Parent, a);
        var instance = new Constructor();
        if (Class) setPrototypeOf(instance, Class.prototype);
        return instance;
      };
    }
    // Avoid issues with Class being present but undefined when it wasn't
    // present in the original call.
    return _construct.apply(null, arguments);
  }
`,o.isNativeFunction=a("7.0.0-beta.0")`
  export default function _isNativeFunction(fn) {
    // Note: This function returns "true" for core-js functions.
    return Function.toString.call(fn).indexOf("[native code]") !== -1;
  }
`,o.wrapNativeSuper=a("7.0.0-beta.0")`
  import getPrototypeOf from "getPrototypeOf";
  import setPrototypeOf from "setPrototypeOf";
  import isNativeFunction from "isNativeFunction";
  import construct from "construct";

  export default function _wrapNativeSuper(Class) {
    var _cache = typeof Map === "function" ? new Map() : undefined;

    _wrapNativeSuper = function _wrapNativeSuper(Class) {
      if (Class === null || !isNativeFunction(Class)) return Class;
      if (typeof Class !== "function") {
        throw new TypeError("Super expression must either be null or a function");
      }
      if (typeof _cache !== "undefined") {
        if (_cache.has(Class)) return _cache.get(Class);
        _cache.set(Class, Wrapper);
      }
      function Wrapper() {
        return construct(Class, arguments, getPrototypeOf(this).constructor)
      }
      Wrapper.prototype = Object.create(Class.prototype, {
        constructor: {
          value: Wrapper,
          enumerable: false,
          writable: true,
          configurable: true,
        }
      });

      return setPrototypeOf(Wrapper, Class);
    }

    return _wrapNativeSuper(Class)
  }
`,o.instanceof=a("7.0.0-beta.0")`
  export default function _instanceof(left, right) {
    if (right != null && typeof Symbol !== "undefined" && right[Symbol.hasInstance]) {
      return !!right[Symbol.hasInstance](left);
    } else {
      return left instanceof right;
    }
  }
`,o.interopRequireDefault=a("7.0.0-beta.0")`
  export default function _interopRequireDefault(obj) {
    return obj && obj.__esModule ? obj : { default: obj };
  }
`,o.interopRequireWildcard=a("7.0.0-beta.0")`
  function _getRequireWildcardCache() {
    if (typeof WeakMap !== "function") return null;

    var cache = new WeakMap();
    _getRequireWildcardCache = function () { return cache; };
    return cache;
  }

  export default function _interopRequireWildcard(obj) {
    if (obj && obj.__esModule) {
      return obj;
    }

    if (obj === null || (typeof obj !== "object" && typeof obj !== "function")) {
      return { default: obj }
    }

    var cache = _getRequireWildcardCache();
    if (cache && cache.has(obj)) {
      return cache.get(obj);
    }

    var newObj = {};
    var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor;
    for (var key in obj) {
      if (Object.prototype.hasOwnProperty.call(obj, key)) {
        var desc = hasPropertyDescriptor
          ? Object.getOwnPropertyDescriptor(obj, key)
          : null;
        if (desc && (desc.get || desc.set)) {
          Object.defineProperty(newObj, key, desc);
        } else {
          newObj[key] = obj[key];
        }
      }
    }
    newObj.default = obj;
    if (cache) {
      cache.set(obj, newObj);
    }
    return newObj;
  }
`,o.newArrowCheck=a("7.0.0-beta.0")`
  export default function _newArrowCheck(innerThis, boundThis) {
    if (innerThis !== boundThis) {
      throw new TypeError("Cannot instantiate an arrow function");
    }
  }
`,o.objectDestructuringEmpty=a("7.0.0-beta.0")`
  export default function _objectDestructuringEmpty(obj) {
    if (obj == null) throw new TypeError("Cannot destructure undefined");
  }
`,o.objectWithoutPropertiesLoose=a("7.0.0-beta.0")`
  export default function _objectWithoutPropertiesLoose(source, excluded) {
    if (source == null) return {};

    var target = {};
    var sourceKeys = Object.keys(source);
    var key, i;

    for (i = 0; i < sourceKeys.length; i++) {
      key = sourceKeys[i];
      if (excluded.indexOf(key) >= 0) continue;
      target[key] = source[key];
    }

    return target;
  }
`,o.objectWithoutProperties=a("7.0.0-beta.0")`
  import objectWithoutPropertiesLoose from "objectWithoutPropertiesLoose";

  export default function _objectWithoutProperties(source, excluded) {
    if (source == null) return {};

    var target = objectWithoutPropertiesLoose(source, excluded);
    var key, i;

    if (Object.getOwnPropertySymbols) {
      var sourceSymbolKeys = Object.getOwnPropertySymbols(source);
      for (i = 0; i < sourceSymbolKeys.length; i++) {
        key = sourceSymbolKeys[i];
        if (excluded.indexOf(key) >= 0) continue;
        if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue;
        target[key] = source[key];
      }
    }

    return target;
  }
`,o.assertThisInitialized=a("7.0.0-beta.0")`
  export default function _assertThisInitialized(self) {
    if (self === void 0) {
      throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
    }
    return self;
  }
`,o.possibleConstructorReturn=a("7.0.0-beta.0")`
  import assertThisInitialized from "assertThisInitialized";

  export default function _possibleConstructorReturn(self, call) {
    if (call && (typeof call === "object" || typeof call === "function")) {
      return call;
    }
    return assertThisInitialized(self);
  }
`,o.createSuper=a("7.9.0")`
  import getPrototypeOf from "getPrototypeOf";
  import isNativeReflectConstruct from "isNativeReflectConstruct";
  import possibleConstructorReturn from "possibleConstructorReturn";

  export default function _createSuper(Derived) {
    var hasNativeReflectConstruct = isNativeReflectConstruct();

    return function () {
      var Super = getPrototypeOf(Derived), result;
      if (hasNativeReflectConstruct) {
        // NOTE: This doesn't work if this.__proto__.constructor has been modified.
        var NewTarget = getPrototypeOf(this).constructor;
        result = Reflect.construct(Super, arguments, NewTarget);
      } else {
        result = Super.apply(this, arguments);
      }
      return possibleConstructorReturn(this, result);
    }
  }
 `,o.superPropBase=a("7.0.0-beta.0")`
  import getPrototypeOf from "getPrototypeOf";

  export default function _superPropBase(object, property) {
    // Yes, this throws if object is null to being with, that's on purpose.
    while (!Object.prototype.hasOwnProperty.call(object, property)) {
      object = getPrototypeOf(object);
      if (object === null) break;
    }
    return object;
  }
`,o.get=a("7.0.0-beta.0")`
  import superPropBase from "superPropBase";

  export default function _get(target, property, receiver) {
    if (typeof Reflect !== "undefined" && Reflect.get) {
      _get = Reflect.get;
    } else {
      _get = function _get(target, property, receiver) {
        var base = superPropBase(target, property);

        if (!base) return;

        var desc = Object.getOwnPropertyDescriptor(base, property);
        if (desc.get) {
          return desc.get.call(receiver);
        }

        return desc.value;
      };
    }
    return _get(target, property, receiver || target);
  }
`,o.set=a("7.0.0-beta.0")`
  import superPropBase from "superPropBase";
  import defineProperty from "defineProperty";

  function set(target, property, value, receiver) {
    if (typeof Reflect !== "undefined" && Reflect.set) {
      set = Reflect.set;
    } else {
      set = function set(target, property, value, receiver) {
        var base = superPropBase(target, property);
        var desc;

        if (base) {
          desc = Object.getOwnPropertyDescriptor(base, property);
          if (desc.set) {
            desc.set.call(receiver, value);
            return true;
          } else if (!desc.writable) {
            // Both getter and non-writable fall into this.
            return false;
          }
        }

        // Without a super that defines the property, spec boils down to
        // "define on receiver" for some reason.
        desc = Object.getOwnPropertyDescriptor(receiver, property);
        if (desc) {
          if (!desc.writable) {
            // Setter, getter, and non-writable fall into this.
            return false;
          }

          desc.value = value;
          Object.defineProperty(receiver, property, desc);
        } else {
          // Avoid setters that may be defined on Sub's prototype, but not on
          // the instance.
          defineProperty(receiver, property, value);
        }

        return true;
      };
    }

    return set(target, property, value, receiver);
  }

  export default function _set(target, property, value, receiver, isStrict) {
    var s = set(target, property, value, receiver || target);
    if (!s && isStrict) {
      throw new Error('failed to set property');
    }

    return value;
  }
`,o.taggedTemplateLiteral=a("7.0.0-beta.0")`
  export default function _taggedTemplateLiteral(strings, raw) {
    if (!raw) { raw = strings.slice(0); }
    return Object.freeze(Object.defineProperties(strings, {
        raw: { value: Object.freeze(raw) }
    }));
  }
`,o.taggedTemplateLiteralLoose=a("7.0.0-beta.0")`
  export default function _taggedTemplateLiteralLoose(strings, raw) {
    if (!raw) { raw = strings.slice(0); }
    strings.raw = raw;
    return strings;
  }
`,o.readOnlyError=a("7.0.0-beta.0")`
  export default function _readOnlyError(name) {
    throw new Error("\\"" + name + "\\" is read-only");
  }
`,o.classNameTDZError=a("7.0.0-beta.0")`
  export default function _classNameTDZError(name) {
    throw new Error("Class \\"" + name + "\\" cannot be referenced in computed property keys.");
  }
`,o.temporalUndefined=a("7.0.0-beta.0")`
  // This function isn't mean to be called, but to be used as a reference.
  // We can't use a normal object because it isn't hoisted.
  export default function _temporalUndefined() {}
`,o.tdz=a("7.5.5")`
  export default function _tdzError(name) {
    throw new ReferenceError(name + " is not defined - temporal dead zone");
  }
`,o.temporalRef=a("7.0.0-beta.0")`
  import undef from "temporalUndefined";
  import err from "tdz";

  export default function _temporalRef(val, name) {
    return val === undef ? err(name) : val;
  }
`,o.slicedToArray=a("7.0.0-beta.0")`
  import arrayWithHoles from "arrayWithHoles";
  import iterableToArrayLimit from "iterableToArrayLimit";
  import unsupportedIterableToArray from "unsupportedIterableToArray";
  import nonIterableRest from "nonIterableRest";

  export default function _slicedToArray(arr, i) {
    return (
      arrayWithHoles(arr) ||
      iterableToArrayLimit(arr, i) ||
      unsupportedIterableToArray(arr, i) ||
      nonIterableRest()
    );
  }
`,o.slicedToArrayLoose=a("7.0.0-beta.0")`
  import arrayWithHoles from "arrayWithHoles";
  import iterableToArrayLimitLoose from "iterableToArrayLimitLoose";
  import unsupportedIterableToArray from "unsupportedIterableToArray";
  import nonIterableRest from "nonIterableRest";

  export default function _slicedToArrayLoose(arr, i) {
    return (
      arrayWithHoles(arr) ||
      iterableToArrayLimitLoose(arr, i) ||
      unsupportedIterableToArray(arr, i) ||
      nonIterableRest()
    );
  }
`,o.toArray=a("7.0.0-beta.0")`
  import arrayWithHoles from "arrayWithHoles";
  import iterableToArray from "iterableToArray";
  import unsupportedIterableToArray from "unsupportedIterableToArray";
  import nonIterableRest from "nonIterableRest";

  export default function _toArray(arr) {
    return (
      arrayWithHoles(arr) ||
      iterableToArray(arr) ||
      unsupportedIterableToArray(arr) ||
      nonIterableRest()
    );
  }
`,o.toConsumableArray=a("7.0.0-beta.0")`
  import arrayWithoutHoles from "arrayWithoutHoles";
  import iterableToArray from "iterableToArray";
  import unsupportedIterableToArray from "unsupportedIterableToArray";
  import nonIterableSpread from "nonIterableSpread";

  export default function _toConsumableArray(arr) {
    return (
      arrayWithoutHoles(arr) ||
      iterableToArray(arr) ||
      unsupportedIterableToArray(arr) ||
      nonIterableSpread()
    );
  }
`,o.arrayWithoutHoles=a("7.0.0-beta.0")`
  import arrayLikeToArray from "arrayLikeToArray";

  export default function _arrayWithoutHoles(arr) {
    if (Array.isArray(arr)) return arrayLikeToArray(arr);
  }
`,o.arrayWithHoles=a("7.0.0-beta.0")`
  export default function _arrayWithHoles(arr) {
    if (Array.isArray(arr)) return arr;
  }
`,o.iterableToArray=a("7.0.0-beta.0")`
  export default function _iterableToArray(iter) {
    if (typeof Symbol !== "undefined" && Symbol.iterator in Object(iter)) return Array.from(iter);
  }
`,o.iterableToArrayLimit=a("7.0.0-beta.0")`
  export default function _iterableToArrayLimit(arr, i) {
    // this is an expanded form of \`for...of\` that properly supports abrupt completions of
    // iterators etc. variable names have been minimised to reduce the size of this massive
    // helper. sometimes spec compliance is annoying :(
    //
    // _n = _iteratorNormalCompletion
    // _d = _didIteratorError
    // _e = _iteratorError
    // _i = _iterator
    // _s = _step

    if (typeof Symbol === "undefined" || !(Symbol.iterator in Object(arr))) return;

    var _arr = [];
    var _n = true;
    var _d = false;
    var _e = undefined;
    try {
      for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) {
        _arr.push(_s.value);
        if (i && _arr.length === i) break;
      }
    } catch (err) {
      _d = true;
      _e = err;
    } finally {
      try {
        if (!_n && _i["return"] != null) _i["return"]();
      } finally {
        if (_d) throw _e;
      }
    }
    return _arr;
  }
`,o.iterableToArrayLimitLoose=a("7.0.0-beta.0")`
  export default function _iterableToArrayLimitLoose(arr, i) {
    if (typeof Symbol === "undefined" || !(Symbol.iterator in Object(arr))) return;

    var _arr = [];
    for (var _iterator = arr[Symbol.iterator](), _step; !(_step = _iterator.next()).done;) {
      _arr.push(_step.value);
      if (i && _arr.length === i) break;
    }
    return _arr;
  }
`,o.unsupportedIterableToArray=a("7.9.0")`
  import arrayLikeToArray from "arrayLikeToArray";

  export default function _unsupportedIterableToArray(o, minLen) {
    if (!o) return;
    if (typeof o === "string") return arrayLikeToArray(o, minLen);
    var n = Object.prototype.toString.call(o).slice(8, -1);
    if (n === "Object" && o.constructor) n = o.constructor.name;
    if (n === "Map" || n === "Set") return Array.from(o);
    if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))
      return arrayLikeToArray(o, minLen);
  }
`,o.arrayLikeToArray=a("7.9.0")`
  export default function _arrayLikeToArray(arr, len) {
    if (len == null || len > arr.length) len = arr.length;
    for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i];
    return arr2;
  }
`,o.nonIterableSpread=a("7.0.0-beta.0")`
  export default function _nonIterableSpread() {
    throw new TypeError(
      "Invalid attempt to spread non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."
    );
  }
`,o.nonIterableRest=a("7.0.0-beta.0")`
  export default function _nonIterableRest() {
    throw new TypeError(
      "Invalid attempt to destructure non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."
    );
  }
`,o.createForOfIteratorHelper=a("7.9.0")`
  import unsupportedIterableToArray from "unsupportedIterableToArray";

  // s: start (create the iterator)
  // n: next
  // e: error (called whenever something throws)
  // f: finish (always called at the end)

  export default function _createForOfIteratorHelper(o) {
    if (typeof Symbol === "undefined" || o[Symbol.iterator] == null) {
      // Fallback for engines without symbol support
      if (Array.isArray(o) || (o = unsupportedIterableToArray(o))) {
        var i = 0;
        var F = function(){};
        return {
          s: F,
          n: function() {
            if (i >= o.length) return { done: true };
            return { done: false, value: o[i++] };
          },
          e: function(e) { throw e; },
          f: F,
        };
      }

      throw new TypeError("Invalid attempt to iterate non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
    }

    var it, normalCompletion = true, didErr = false, err;

    return {
      s: function() {
        it = o[Symbol.iterator]();
      },
      n: function() {
        var step = it.next();
        normalCompletion = step.done;
        return step;
      },
      e: function(e) {
        didErr = true;
        err = e;
      },
      f: function() {
        try {
          if (!normalCompletion && it.return != null) it.return();
        } finally {
          if (didErr) throw err;
        }
      }
    };
  }
`,o.createForOfIteratorHelperLoose=a("7.9.0")`
  import unsupportedIterableToArray from "unsupportedIterableToArray";

  export default function _createForOfIteratorHelperLoose(o) {
    var i = 0;

    if (typeof Symbol === "undefined" || o[Symbol.iterator] == null) {
      // Fallback for engines without symbol support
      if (Array.isArray(o) || (o = unsupportedIterableToArray(o)))
        return function() {
          if (i >= o.length) return { done: true };
          return { done: false, value: o[i++] };
        }

      throw new TypeError("Invalid attempt to iterate non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
    }

    i = o[Symbol.iterator]();
    return i.next.bind(i);
  }
`,o.skipFirstGeneratorNext=a("7.0.0-beta.0")`
  export default function _skipFirstGeneratorNext(fn) {
    return function () {
      var it = fn.apply(this, arguments);
      it.next();
      return it;
    }
  }
`,o.toPrimitive=a("7.1.5")`
  export default function _toPrimitive(
    input,
    hint /*: "default" | "string" | "number" | void */
  ) {
    if (typeof input !== "object" || input === null) return input;
    var prim = input[Symbol.toPrimitive];
    if (prim !== undefined) {
      var res = prim.call(input, hint || "default");
      if (typeof res !== "object") return res;
      throw new TypeError("@@toPrimitive must return a primitive value.");
    }
    return (hint === "string" ? String : Number)(input);
  }
`,o.toPropertyKey=a("7.1.5")`
  import toPrimitive from "toPrimitive";

  export default function _toPropertyKey(arg) {
    var key = toPrimitive(arg, "string");
    return typeof key === "symbol" ? key : String(key);
  }
`,o.initializerWarningHelper=a("7.0.0-beta.0")`
    export default function _initializerWarningHelper(descriptor, context){
        throw new Error(
          'Decorating class property failed. Please ensure that ' +
          'proposal-class-properties is enabled and runs after the decorators transform.'
        );
    }
`,o.initializerDefineProperty=a("7.0.0-beta.0")`
    export default function _initializerDefineProperty(target, property, descriptor, context){
        if (!descriptor) return;

        Object.defineProperty(target, property, {
            enumerable: descriptor.enumerable,
            configurable: descriptor.configurable,
            writable: descriptor.writable,
            value: descriptor.initializer ? descriptor.initializer.call(context) : void 0,
        });
    }
`,o.applyDecoratedDescriptor=a("7.0.0-beta.0")`
    export default function _applyDecoratedDescriptor(target, property, decorators, descriptor, context){
        var desc = {};
        Object.keys(descriptor).forEach(function(key){
            desc[key] = descriptor[key];
        });
        desc.enumerable = !!desc.enumerable;
        desc.configurable = !!desc.configurable;
        if ('value' in desc || desc.initializer){
            desc.writable = true;
        }

        desc = decorators.slice().reverse().reduce(function(desc, decorator){
            return decorator(target, property, desc) || desc;
        }, desc);

        if (context && desc.initializer !== void 0){
            desc.value = desc.initializer ? desc.initializer.call(context) : void 0;
            desc.initializer = undefined;
        }

        if (desc.initializer === void 0){
            // This is a hack to avoid this being processed by 'transform-runtime'.
            // See issue #9.
            Object.defineProperty(target, property, desc);
            desc = null;
        }

        return desc;
    }
`,o.classPrivateFieldLooseKey=a("7.0.0-beta.0")`
  var id = 0;
  export default function _classPrivateFieldKey(name) {
    return "__private_" + (id++) + "_" + name;
  }
`,o.classPrivateFieldLooseBase=a("7.0.0-beta.0")`
  export default function _classPrivateFieldBase(receiver, privateKey) {
    if (!Object.prototype.hasOwnProperty.call(receiver, privateKey)) {
      throw new TypeError("attempted to use private field on non-instance");
    }
    return receiver;
  }
`,o.classPrivateFieldGet=a("7.0.0-beta.0")`
  export default function _classPrivateFieldGet(receiver, privateMap) {
    var descriptor = privateMap.get(receiver);
    if (!descriptor) {
      throw new TypeError("attempted to get private field on non-instance");
    }
    if (descriptor.get) {
      return descriptor.get.call(receiver);
    }
    return descriptor.value;
  }
`,o.classPrivateFieldSet=a("7.0.0-beta.0")`
  export default function _classPrivateFieldSet(receiver, privateMap, value) {
    var descriptor = privateMap.get(receiver);
    if (!descriptor) {
      throw new TypeError("attempted to set private field on non-instance");
    }
    if (descriptor.set) {
      descriptor.set.call(receiver, value);
    } else {
      if (!descriptor.writable) {
        // This should only throw in strict mode, but class bodies are
        // always strict and private fields can only be used inside
        // class bodies.
        throw new TypeError("attempted to set read only private field");
      }

      descriptor.value = value;
    }

    return value;
  }
`,o.classPrivateFieldDestructureSet=a("7.4.4")`
  export default function _classPrivateFieldDestructureSet(receiver, privateMap) {
    if (!privateMap.has(receiver)) {
      throw new TypeError("attempted to set private field on non-instance");
    }
    var descriptor = privateMap.get(receiver);
    if (descriptor.set) {
      if (!("__destrObj" in descriptor)) {
        descriptor.__destrObj = {
          set value(v) {
            descriptor.set.call(receiver, v)
          },
        };
      }
      return descriptor.__destrObj;
    } else {
      if (!descriptor.writable) {
        // This should only throw in strict mode, but class bodies are
        // always strict and private fields can only be used inside
        // class bodies.
        throw new TypeError("attempted to set read only private field");
      }

      return descriptor;
    }
  }
`,o.classStaticPrivateFieldSpecGet=a("7.0.2")`
  export default function _classStaticPrivateFieldSpecGet(receiver, classConstructor, descriptor) {
    if (receiver !== classConstructor) {
      throw new TypeError("Private static access of wrong provenance");
    }
    if (descriptor.get) {
      return descriptor.get.call(receiver);
    }
    return descriptor.value;
  }
`,o.classStaticPrivateFieldSpecSet=a("7.0.2")`
  export default function _classStaticPrivateFieldSpecSet(receiver, classConstructor, descriptor, value) {
    if (receiver !== classConstructor) {
      throw new TypeError("Private static access of wrong provenance");
    }
    if (descriptor.set) {
      descriptor.set.call(receiver, value);
    } else {
      if (!descriptor.writable) {
        // This should only throw in strict mode, but class bodies are
        // always strict and private fields can only be used inside
        // class bodies.
        throw new TypeError("attempted to set read only private field");
      }
      descriptor.value = value;
    }

    return value;
  }
`,o.classStaticPrivateMethodGet=a("7.3.2")`
  export default function _classStaticPrivateMethodGet(receiver, classConstructor, method) {
    if (receiver !== classConstructor) {
      throw new TypeError("Private static access of wrong provenance");
    }
    return method;
  }
`,o.classStaticPrivateMethodSet=a("7.3.2")`
  export default function _classStaticPrivateMethodSet() {
    throw new TypeError("attempted to set read only static private field");
  }
`,o.decorate=a("7.1.5")`
  import toArray from "toArray";
  import toPropertyKey from "toPropertyKey";

  // These comments are stripped by @babel/template
  /*::
  type PropertyDescriptor =
    | {
        value: any,
        writable: boolean,
        configurable: boolean,
        enumerable: boolean,
      }
    | {
        get?: () => any,
        set?: (v: any) => void,
        configurable: boolean,
        enumerable: boolean,
      };

  type FieldDescriptor ={
    writable: boolean,
    configurable: boolean,
    enumerable: boolean,
  };

  type Placement = "static" | "prototype" | "own";
  type Key = string | symbol; // PrivateName is not supported yet.

  type ElementDescriptor =
    | {
        kind: "method",
        key: Key,
        placement: Placement,
        descriptor: PropertyDescriptor
      }
    | {
        kind: "field",
        key: Key,
        placement: Placement,
        descriptor: FieldDescriptor,
        initializer?: () => any,
      };

  // This is exposed to the user code
  type ElementObjectInput = ElementDescriptor & {
    [@@toStringTag]?: "Descriptor"
  };

  // This is exposed to the user code
  type ElementObjectOutput = ElementDescriptor & {
    [@@toStringTag]?: "Descriptor"
    extras?: ElementDescriptor[],
    finisher?: ClassFinisher,
  };

  // This is exposed to the user code
  type ClassObject = {
    [@@toStringTag]?: "Descriptor",
    kind: "class",
    elements: ElementDescriptor[],
  };

  type ElementDecorator = (descriptor: ElementObjectInput) => ?ElementObjectOutput;
  type ClassDecorator = (descriptor: ClassObject) => ?ClassObject;
  type ClassFinisher = <A, B>(cl: Class<A>) => Class<B>;

  // Only used by Babel in the transform output, not part of the spec.
  type ElementDefinition =
    | {
        kind: "method",
        value: any,
        key: Key,
        static?: boolean,
        decorators?: ElementDecorator[],
      }
    | {
        kind: "field",
        value: () => any,
        key: Key,
        static?: boolean,
        decorators?: ElementDecorator[],
    };

  declare function ClassFactory<C>(initialize: (instance: C) => void): {
    F: Class<C>,
    d: ElementDefinition[]
  }

  */

  /*::
  // Various combinations with/without extras and with one or many finishers

  type ElementFinisherExtras = {
    element: ElementDescriptor,
    finisher?: ClassFinisher,
    extras?: ElementDescriptor[],
  };

  type ElementFinishersExtras = {
    element: ElementDescriptor,
    finishers: ClassFinisher[],
    extras: ElementDescriptor[],
  };

  type ElementsFinisher = {
    elements: ElementDescriptor[],
    finisher?: ClassFinisher,
  };

  type ElementsFinishers = {
    elements: ElementDescriptor[],
    finishers: ClassFinisher[],
  };

  */

  /*::

  type Placements = {
    static: Key[],
    prototype: Key[],
    own: Key[],
  };

  */

  // ClassDefinitionEvaluation (Steps 26-*)
  export default function _decorate(
    decorators /*: ClassDecorator[] */,
    factory /*: ClassFactory */,
    superClass /*: ?Class<*> */,
    mixins /*: ?Array<Function> */,
  ) /*: Class<*> */ {
    var api = _getDecoratorsApi();
    if (mixins) {
      for (var i = 0; i < mixins.length; i++) {
        api = mixins[i](api);
      }
    }

    var r = factory(function initialize(O) {
      api.initializeInstanceElements(O, decorated.elements);
    }, superClass);
    var decorated = api.decorateClass(
      _coalesceClassElements(r.d.map(_createElementDescriptor)),
      decorators,
    );

    api.initializeClassElements(r.F, decorated.elements);

    return api.runClassFinishers(r.F, decorated.finishers);
  }

  function _getDecoratorsApi() {
    _getDecoratorsApi = function() {
      return api;
    };

    var api = {
      elementsDefinitionOrder: [["method"], ["field"]],

      // InitializeInstanceElements
      initializeInstanceElements: function(
        /*::<C>*/ O /*: C */,
        elements /*: ElementDescriptor[] */,
      ) {
        ["method", "field"].forEach(function(kind) {
          elements.forEach(function(element /*: ElementDescriptor */) {
            if (element.kind === kind && element.placement === "own") {
              this.defineClassElement(O, element);
            }
          }, this);
        }, this);
      },

      // InitializeClassElements
      initializeClassElements: function(
        /*::<C>*/ F /*: Class<C> */,
        elements /*: ElementDescriptor[] */,
      ) {
        var proto = F.prototype;

        ["method", "field"].forEach(function(kind) {
          elements.forEach(function(element /*: ElementDescriptor */) {
            var placement = element.placement;
            if (
              element.kind === kind &&
              (placement === "static" || placement === "prototype")
            ) {
              var receiver = placement === "static" ? F : proto;
              this.defineClassElement(receiver, element);
            }
          }, this);
        }, this);
      },

      // DefineClassElement
      defineClassElement: function(
        /*::<C>*/ receiver /*: C | Class<C> */,
        element /*: ElementDescriptor */,
      ) {
        var descriptor /*: PropertyDescriptor */ = element.descriptor;
        if (element.kind === "field") {
          var initializer = element.initializer;
          descriptor = {
            enumerable: descriptor.enumerable,
            writable: descriptor.writable,
            configurable: descriptor.configurable,
            value: initializer === void 0 ? void 0 : initializer.call(receiver),
          };
        }
        Object.defineProperty(receiver, element.key, descriptor);
      },

      // DecorateClass
      decorateClass: function(
        elements /*: ElementDescriptor[] */,
        decorators /*: ClassDecorator[] */,
      ) /*: ElementsFinishers */ {
        var newElements /*: ElementDescriptor[] */ = [];
        var finishers /*: ClassFinisher[] */ = [];
        var placements /*: Placements */ = {
          static: [],
          prototype: [],
          own: [],
        };

        elements.forEach(function(element /*: ElementDescriptor */) {
          this.addElementPlacement(element, placements);
        }, this);

        elements.forEach(function(element /*: ElementDescriptor */) {
          if (!_hasDecorators(element)) return newElements.push(element);

          var elementFinishersExtras /*: ElementFinishersExtras */ = this.decorateElement(
            element,
            placements,
          );
          newElements.push(elementFinishersExtras.element);
          newElements.push.apply(newElements, elementFinishersExtras.extras);
          finishers.push.apply(finishers, elementFinishersExtras.finishers);
        }, this);

        if (!decorators) {
          return { elements: newElements, finishers: finishers };
        }

        var result /*: ElementsFinishers */ = this.decorateConstructor(
          newElements,
          decorators,
        );
        finishers.push.apply(finishers, result.finishers);
        result.finishers = finishers;

        return result;
      },

      // AddElementPlacement
      addElementPlacement: function(
        element /*: ElementDescriptor */,
        placements /*: Placements */,
        silent /*: boolean */,
      ) {
        var keys = placements[element.placement];
        if (!silent && keys.indexOf(element.key) !== -1) {
          throw new TypeError("Duplicated element (" + element.key + ")");
        }
        keys.push(element.key);
      },

      // DecorateElement
      decorateElement: function(
        element /*: ElementDescriptor */,
        placements /*: Placements */,
      ) /*: ElementFinishersExtras */ {
        var extras /*: ElementDescriptor[] */ = [];
        var finishers /*: ClassFinisher[] */ = [];

        for (
          var decorators = element.decorators, i = decorators.length - 1;
          i >= 0;
          i--
        ) {
          // (inlined) RemoveElementPlacement
          var keys = placements[element.placement];
          keys.splice(keys.indexOf(element.key), 1);

          var elementObject /*: ElementObjectInput */ = this.fromElementDescriptor(
            element,
          );
          var elementFinisherExtras /*: ElementFinisherExtras */ = this.toElementFinisherExtras(
            (0, decorators[i])(elementObject) /*: ElementObjectOutput */ ||
              elementObject,
          );

          element = elementFinisherExtras.element;
          this.addElementPlacement(element, placements);

          if (elementFinisherExtras.finisher) {
            finishers.push(elementFinisherExtras.finisher);
          }

          var newExtras /*: ElementDescriptor[] | void */ =
            elementFinisherExtras.extras;
          if (newExtras) {
            for (var j = 0; j < newExtras.length; j++) {
              this.addElementPlacement(newExtras[j], placements);
            }
            extras.push.apply(extras, newExtras);
          }
        }

        return { element: element, finishers: finishers, extras: extras };
      },

      // DecorateConstructor
      decorateConstructor: function(
        elements /*: ElementDescriptor[] */,
        decorators /*: ClassDecorator[] */,
      ) /*: ElementsFinishers */ {
        var finishers /*: ClassFinisher[] */ = [];

        for (var i = decorators.length - 1; i >= 0; i--) {
          var obj /*: ClassObject */ = this.fromClassDescriptor(elements);
          var elementsAndFinisher /*: ElementsFinisher */ = this.toClassDescriptor(
            (0, decorators[i])(obj) /*: ClassObject */ || obj,
          );

          if (elementsAndFinisher.finisher !== undefined) {
            finishers.push(elementsAndFinisher.finisher);
          }

          if (elementsAndFinisher.elements !== undefined) {
            elements = elementsAndFinisher.elements;

            for (var j = 0; j < elements.length - 1; j++) {
              for (var k = j + 1; k < elements.length; k++) {
                if (
                  elements[j].key === elements[k].key &&
                  elements[j].placement === elements[k].placement
                ) {
                  throw new TypeError(
                    "Duplicated element (" + elements[j].key + ")",
                  );
                }
              }
            }
          }
        }

        return { elements: elements, finishers: finishers };
      },

      // FromElementDescriptor
      fromElementDescriptor: function(
        element /*: ElementDescriptor */,
      ) /*: ElementObject */ {
        var obj /*: ElementObject */ = {
          kind: element.kind,
          key: element.key,
          placement: element.placement,
          descriptor: element.descriptor,
        };

        var desc = {
          value: "Descriptor",
          configurable: true,
        };
        Object.defineProperty(obj, Symbol.toStringTag, desc);

        if (element.kind === "field") obj.initializer = element.initializer;

        return obj;
      },

      // ToElementDescriptors
      toElementDescriptors: function(
        elementObjects /*: ElementObject[] */,
      ) /*: ElementDescriptor[] */ {
        if (elementObjects === undefined) return;
        return toArray(elementObjects).map(function(elementObject) {
          var element = this.toElementDescriptor(elementObject);
          this.disallowProperty(elementObject, "finisher", "An element descriptor");
          this.disallowProperty(elementObject, "extras", "An element descriptor");
          return element;
        }, this);
      },

      // ToElementDescriptor
      toElementDescriptor: function(
        elementObject /*: ElementObject */,
      ) /*: ElementDescriptor */ {
        var kind = String(elementObject.kind);
        if (kind !== "method" && kind !== "field") {
          throw new TypeError(
            'An element descriptor\\'s .kind property must be either "method" or' +
              ' "field", but a decorator created an element descriptor with' +
              ' .kind "' +
              kind +
              '"',
          );
        }

        var key = toPropertyKey(elementObject.key);

        var placement = String(elementObject.placement);
        if (
          placement !== "static" &&
          placement !== "prototype" &&
          placement !== "own"
        ) {
          throw new TypeError(
            'An element descriptor\\'s .placement property must be one of "static",' +
              ' "prototype" or "own", but a decorator created an element descriptor' +
              ' with .placement "' +
              placement +
              '"',
          );
        }

        var descriptor /*: PropertyDescriptor */ = elementObject.descriptor;

        this.disallowProperty(elementObject, "elements", "An element descriptor");

        var element /*: ElementDescriptor */ = {
          kind: kind,
          key: key,
          placement: placement,
          descriptor: Object.assign({}, descriptor),
        };

        if (kind !== "field") {
          this.disallowProperty(elementObject, "initializer", "A method descriptor");
        } else {
          this.disallowProperty(
            descriptor,
            "get",
            "The property descriptor of a field descriptor",
          );
          this.disallowProperty(
            descriptor,
            "set",
            "The property descriptor of a field descriptor",
          );
          this.disallowProperty(
            descriptor,
            "value",
            "The property descriptor of a field descriptor",
          );

          element.initializer = elementObject.initializer;
        }

        return element;
      },

      toElementFinisherExtras: function(
        elementObject /*: ElementObject */,
      ) /*: ElementFinisherExtras */ {
        var element /*: ElementDescriptor */ = this.toElementDescriptor(
          elementObject,
        );
        var finisher /*: ClassFinisher */ = _optionalCallableProperty(
          elementObject,
          "finisher",
        );
        var extras /*: ElementDescriptors[] */ = this.toElementDescriptors(
          elementObject.extras,
        );

        return { element: element, finisher: finisher, extras: extras };
      },

      // FromClassDescriptor
      fromClassDescriptor: function(
        elements /*: ElementDescriptor[] */,
      ) /*: ClassObject */ {
        var obj = {
          kind: "class",
          elements: elements.map(this.fromElementDescriptor, this),
        };

        var desc = { value: "Descriptor", configurable: true };
        Object.defineProperty(obj, Symbol.toStringTag, desc);

        return obj;
      },

      // ToClassDescriptor
      toClassDescriptor: function(
        obj /*: ClassObject */,
      ) /*: ElementsFinisher */ {
        var kind = String(obj.kind);
        if (kind !== "class") {
          throw new TypeError(
            'A class descriptor\\'s .kind property must be "class", but a decorator' +
              ' created a class descriptor with .kind "' +
              kind +
              '"',
          );
        }

        this.disallowProperty(obj, "key", "A class descriptor");
        this.disallowProperty(obj, "placement", "A class descriptor");
        this.disallowProperty(obj, "descriptor", "A class descriptor");
        this.disallowProperty(obj, "initializer", "A class descriptor");
        this.disallowProperty(obj, "extras", "A class descriptor");

        var finisher = _optionalCallableProperty(obj, "finisher");
        var elements = this.toElementDescriptors(obj.elements);

        return { elements: elements, finisher: finisher };
      },

      // RunClassFinishers
      runClassFinishers: function(
        constructor /*: Class<*> */,
        finishers /*: ClassFinisher[] */,
      ) /*: Class<*> */ {
        for (var i = 0; i < finishers.length; i++) {
          var newConstructor /*: ?Class<*> */ = (0, finishers[i])(constructor);
          if (newConstructor !== undefined) {
            // NOTE: This should check if IsConstructor(newConstructor) is false.
            if (typeof newConstructor !== "function") {
              throw new TypeError("Finishers must return a constructor.");
            }
            constructor = newConstructor;
          }
        }
        return constructor;
      },

      disallowProperty: function(obj, name, objectType) {
        if (obj[name] !== undefined) {
          throw new TypeError(objectType + " can't have a ." + name + " property.");
        }
      }
    };

    return api;
  }

  // ClassElementEvaluation
  function _createElementDescriptor(
    def /*: ElementDefinition */,
  ) /*: ElementDescriptor */ {
    var key = toPropertyKey(def.key);

    var descriptor /*: PropertyDescriptor */;
    if (def.kind === "method") {
      descriptor = {
        value: def.value,
        writable: true,
        configurable: true,
        enumerable: false,
      };
    } else if (def.kind === "get") {
      descriptor = { get: def.value, configurable: true, enumerable: false };
    } else if (def.kind === "set") {
      descriptor = { set: def.value, configurable: true, enumerable: false };
    } else if (def.kind === "field") {
      descriptor = { configurable: true, writable: true, enumerable: true };
    }

    var element /*: ElementDescriptor */ = {
      kind: def.kind === "field" ? "field" : "method",
      key: key,
      placement: def.static
        ? "static"
        : def.kind === "field"
        ? "own"
        : "prototype",
      descriptor: descriptor,
    };
    if (def.decorators) element.decorators = def.decorators;
    if (def.kind === "field") element.initializer = def.value;

    return element;
  }

  // CoalesceGetterSetter
  function _coalesceGetterSetter(
    element /*: ElementDescriptor */,
    other /*: ElementDescriptor */,
  ) {
    if (element.descriptor.get !== undefined) {
      other.descriptor.get = element.descriptor.get;
    } else {
      other.descriptor.set = element.descriptor.set;
    }
  }

  // CoalesceClassElements
  function _coalesceClassElements(
    elements /*: ElementDescriptor[] */,
  ) /*: ElementDescriptor[] */ {
    var newElements /*: ElementDescriptor[] */ = [];

    var isSameElement = function(
      other /*: ElementDescriptor */,
    ) /*: boolean */ {
      return (
        other.kind === "method" &&
        other.key === element.key &&
        other.placement === element.placement
      );
    };

    for (var i = 0; i < elements.length; i++) {
      var element /*: ElementDescriptor */ = elements[i];
      var other /*: ElementDescriptor */;

      if (
        element.kind === "method" &&
        (other = newElements.find(isSameElement))
      ) {
        if (
          _isDataDescriptor(element.descriptor) ||
          _isDataDescriptor(other.descriptor)
        ) {
          if (_hasDecorators(element) || _hasDecorators(other)) {
            throw new ReferenceError(
              "Duplicated methods (" + element.key + ") can't be decorated.",
            );
          }
          other.descriptor = element.descriptor;
        } else {
          if (_hasDecorators(element)) {
            if (_hasDecorators(other)) {
              throw new ReferenceError(
                "Decorators can't be placed on different accessors with for " +
                  "the same property (" +
                  element.key +
                  ").",
              );
            }
            other.decorators = element.decorators;
          }
          _coalesceGetterSetter(element, other);
        }
      } else {
        newElements.push(element);
      }
    }

    return newElements;
  }

  function _hasDecorators(element /*: ElementDescriptor */) /*: boolean */ {
    return element.decorators && element.decorators.length;
  }

  function _isDataDescriptor(desc /*: PropertyDescriptor */) /*: boolean */ {
    return (
      desc !== undefined &&
      !(desc.value === undefined && desc.writable === undefined)
    );
  }

  function _optionalCallableProperty /*::<T>*/(
    obj /*: T */,
    name /*: $Keys<T> */,
  ) /*: ?Function */ {
    var value = obj[name];
    if (value !== undefined && typeof value !== "function") {
      throw new TypeError("Expected '" + name + "' to be a function");
    }
    return value;
  }

`,o.classPrivateMethodGet=a("7.1.6")`
  export default function _classPrivateMethodGet(receiver, privateSet, fn) {
    if (!privateSet.has(receiver)) {
      throw new TypeError("attempted to get private field on non-instance");
    }
    return fn;
  }
`,o.classPrivateMethodSet=a("7.1.6")`
  export default function _classPrivateMethodSet() {
    throw new TypeError("attempted to reassign private method");
  }
`,o.wrapRegExp=a("7.2.6")`
  import wrapNativeSuper from "wrapNativeSuper";
  import getPrototypeOf from "getPrototypeOf";
  import possibleConstructorReturn from "possibleConstructorReturn";
  import inherits from "inherits";

  export default function _wrapRegExp(re, groups) {
    _wrapRegExp = function(re, groups) {
      return new BabelRegExp(re, undefined, groups);
    };

    var _RegExp = wrapNativeSuper(RegExp);
    var _super = RegExp.prototype;
    var _groups = new WeakMap();

    function BabelRegExp(re, flags, groups) {
      var _this = _RegExp.call(this, re, flags);
      // if the regex is recreated with 'g' flag
      _groups.set(_this, groups || _groups.get(re));
      return _this;
    }
    inherits(BabelRegExp, _RegExp);

    BabelRegExp.prototype.exec = function(str) {
      var result = _super.exec.call(this, str);
      if (result) result.groups = buildGroups(result, this);
      return result;
    };
    BabelRegExp.prototype[Symbol.replace] = function(str, substitution) {
      if (typeof substitution === "string") {
        var groups = _groups.get(this);
        return _super[Symbol.replace].call(
          this,
          str,
          substitution.replace(/\\$<([^>]+)>/g, function(_, name) {
            return "$" + groups[name];
          })
        );
      } else if (typeof substitution === "function") {
        var _this = this;
        return _super[Symbol.replace].call(
          this,
          str,
          function() {
            var args = [];
            args.push.apply(args, arguments);
            if (typeof args[args.length - 1] !== "object") {
              // Modern engines already pass result.groups as the last arg.
              args.push(buildGroups(args, _this));
            }
            return substitution.apply(this, args);
          }
        );
      } else {
        return _super[Symbol.replace].call(this, str, substitution);
      }
    }

    function buildGroups(result, re) {
      // NOTE: This function should return undefined if there are no groups,
      // but in that case Babel doesn't add the wrapper anyway.

      var g = _groups.get(re);
      return Object.keys(g).reduce(function(groups, name) {
        groups[name] = result[g[name]];
        return groups;
      }, Object.create(null));
    }

    return _wrapRegExp.apply(this, arguments);
  }
//# sourceMappingURL=babel-transpiler.c71b3cd9.worker.js.map