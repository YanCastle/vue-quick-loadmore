!function(t,e){"object"==typeof exports&&"object"==typeof module?module.exports=e():"function"==typeof define&&define.amd?define([],e):"object"==typeof exports?exports["main.js"]=e():t["main.js"]=e()}(window,function(){return function(t){var e={};function n(o){if(e[o])return e[o].exports;var r=e[o]={i:o,l:!1,exports:{}};return t[o].call(r.exports,r,r.exports,n),r.l=!0,r.exports}return n.m=t,n.c=e,n.d=function(t,e,o){n.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:o})},n.r=function(t){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},n.t=function(t,e){if(1&e&&(t=n(t)),8&e)return t;if(4&e&&"object"==typeof t&&t&&t.__esModule)return t;var o=Object.create(null);if(n.r(o),Object.defineProperty(o,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var r in t)n.d(o,r,function(e){return t[e]}.bind(null,r));return o},n.n=function(t){var e=t&&t.__esModule?function(){return t.default}:function(){return t};return n.d(e,"a",e),e},n.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},n.p="",n(n.s=6)}([function(t,e,n){var o=n(2);"string"==typeof o&&(o=[[t.i,o,""]]);var r={hmr:!0,transform:void 0,insertInto:void 0};n(4)(o,r);o.locals&&(t.exports=o.locals)},function(t,e,n){"use strict";var o=n(0);n.n(o).a},function(t,e,n){(t.exports=n(3)(!1)).push([t.i,"\n.vsim-load[data-v-baedd54a] {\r\n  height: 100%;\r\n  overflow: auto;\r\n  -webkit-overflow-scrolling: touch;\n}\n.vsim-load-header[data-v-baedd54a] {\r\n  margin-top: -50px;\r\n  height: 50px;\r\n  line-height: 50px;\r\n  text-align: center;\r\n  font-size: 14px;\r\n  color: #666666;\r\n  letter-spacing: -0.31px;\n}\n.vsim-load-footer[data-v-baedd54a] {\r\n  height: 50px;\r\n  line-height: 50px;\r\n  text-align: center;\r\n  font-size: 13px;\r\n  color: #666666;\r\n  letter-spacing: -0.31px;\n}\r\n",""])},function(t,e){t.exports=function(t){var e=[];return e.toString=function(){return this.map(function(e){var n=function(t,e){var n=t[1]||"",o=t[3];if(!o)return n;if(e&&"function"==typeof btoa){var r=(s=o,"/*# sourceMappingURL=data:application/json;charset=utf-8;base64,"+btoa(unescape(encodeURIComponent(JSON.stringify(s))))+" */"),i=o.sources.map(function(t){return"/*# sourceURL="+o.sourceRoot+t+" */"});return[n].concat(i).concat([r]).join("\n")}var s;return[n].join("\n")}(e,t);return e[2]?"@media "+e[2]+"{"+n+"}":n}).join("")},e.i=function(t,n){"string"==typeof t&&(t=[[null,t,""]]);for(var o={},r=0;r<this.length;r++){var i=this[r][0];"number"==typeof i&&(o[i]=!0)}for(r=0;r<t.length;r++){var s=t[r];"number"==typeof s[0]&&o[s[0]]||(n&&!s[2]?s[2]=n:n&&(s[2]="("+s[2]+") and ("+n+")"),e.push(s))}},e}},function(t,e,n){var o,r,i={},s=(o=function(){return window&&document&&document.all&&!window.atob},function(){return void 0===r&&(r=o.apply(this,arguments)),r}),a=function(t){var e={};return function(t,n){if("function"==typeof t)return t();if(void 0===e[t]){var o=function(t,e){return e?e.querySelector(t):document.querySelector(t)}.call(this,t,n);if(window.HTMLIFrameElement&&o instanceof window.HTMLIFrameElement)try{o=o.contentDocument.head}catch(t){o=null}e[t]=o}return e[t]}}(),u=null,c=0,l=[],f=n(5);function d(t,e){for(var n=0;n<t.length;n++){var o=t[n],r=i[o.id];if(r){r.refs++;for(var s=0;s<r.parts.length;s++)r.parts[s](o.parts[s]);for(;s<o.parts.length;s++)r.parts.push(g(o.parts[s],e))}else{var a=[];for(s=0;s<o.parts.length;s++)a.push(g(o.parts[s],e));i[o.id]={id:o.id,refs:1,parts:a}}}}function p(t,e){for(var n=[],o={},r=0;r<t.length;r++){var i=t[r],s=e.base?i[0]+e.base:i[0],a={css:i[1],media:i[2],sourceMap:i[3]};o[s]?o[s].parts.push(a):n.push(o[s]={id:s,parts:[a]})}return n}function h(t,e){var n=a(t.insertInto);if(!n)throw new Error("Couldn't find a style target. This probably means that the value for the 'insertInto' parameter is invalid.");var o=l[l.length-1];if("top"===t.insertAt)o?o.nextSibling?n.insertBefore(e,o.nextSibling):n.appendChild(e):n.insertBefore(e,n.firstChild),l.push(e);else if("bottom"===t.insertAt)n.appendChild(e);else{if("object"!=typeof t.insertAt||!t.insertAt.before)throw new Error("[Style Loader]\n\n Invalid value for parameter 'insertAt' ('options.insertAt') found.\n Must be 'top', 'bottom', or Object.\n (https://github.com/webpack-contrib/style-loader#insertat)\n");var r=a(t.insertAt.before,n);n.insertBefore(e,r)}}function v(t){if(null===t.parentNode)return!1;t.parentNode.removeChild(t);var e=l.indexOf(t);e>=0&&l.splice(e,1)}function m(t){var e=document.createElement("style");if(void 0===t.attrs.type&&(t.attrs.type="text/css"),void 0===t.attrs.nonce){var o=function(){0;return n.nc}();o&&(t.attrs.nonce=o)}return b(e,t.attrs),h(t,e),e}function b(t,e){Object.keys(e).forEach(function(n){t.setAttribute(n,e[n])})}function g(t,e){var n,o,r,i;if(e.transform&&t.css){if(!(i=e.transform(t.css)))return function(){};t.css=i}if(e.singleton){var s=c++;n=u||(u=m(e)),o=x.bind(null,n,s,!1),r=x.bind(null,n,s,!0)}else t.sourceMap&&"function"==typeof URL&&"function"==typeof URL.createObjectURL&&"function"==typeof URL.revokeObjectURL&&"function"==typeof Blob&&"function"==typeof btoa?(n=function(t){var e=document.createElement("link");return void 0===t.attrs.type&&(t.attrs.type="text/css"),t.attrs.rel="stylesheet",b(e,t.attrs),h(t,e),e}(e),o=function(t,e,n){var o=n.css,r=n.sourceMap,i=void 0===e.convertToAbsoluteUrls&&r;(e.convertToAbsoluteUrls||i)&&(o=f(o));r&&(o+="\n/*# sourceMappingURL=data:application/json;base64,"+btoa(unescape(encodeURIComponent(JSON.stringify(r))))+" */");var s=new Blob([o],{type:"text/css"}),a=t.href;t.href=URL.createObjectURL(s),a&&URL.revokeObjectURL(a)}.bind(null,n,e),r=function(){v(n),n.href&&URL.revokeObjectURL(n.href)}):(n=m(e),o=function(t,e){var n=e.css,o=e.media;o&&t.setAttribute("media",o);if(t.styleSheet)t.styleSheet.cssText=n;else{for(;t.firstChild;)t.removeChild(t.firstChild);t.appendChild(document.createTextNode(n))}}.bind(null,n),r=function(){v(n)});return o(t),function(e){if(e){if(e.css===t.css&&e.media===t.media&&e.sourceMap===t.sourceMap)return;o(t=e)}else r()}}t.exports=function(t,e){if("undefined"!=typeof DEBUG&&DEBUG&&"object"!=typeof document)throw new Error("The style-loader cannot be used in a non-browser environment");(e=e||{}).attrs="object"==typeof e.attrs?e.attrs:{},e.singleton||"boolean"==typeof e.singleton||(e.singleton=s()),e.insertInto||(e.insertInto="head"),e.insertAt||(e.insertAt="bottom");var n=p(t,e);return d(n,e),function(t){for(var o=[],r=0;r<n.length;r++){var s=n[r];(a=i[s.id]).refs--,o.push(a)}t&&d(p(t,e),e);for(r=0;r<o.length;r++){var a;if(0===(a=o[r]).refs){for(var u=0;u<a.parts.length;u++)a.parts[u]();delete i[a.id]}}}};var y,S=(y=[],function(t,e){return y[t]=e,y.filter(Boolean).join("\n")});function x(t,e,n,o){var r=n?"":o.css;if(t.styleSheet)t.styleSheet.cssText=S(e,r);else{var i=document.createTextNode(r),s=t.childNodes;s[e]&&t.removeChild(s[e]),s.length?t.insertBefore(i,s[e]):t.appendChild(i)}}},function(t,e){t.exports=function(t){var e="undefined"!=typeof window&&window.location;if(!e)throw new Error("fixUrls requires window.location");if(!t||"string"!=typeof t)return t;var n=e.protocol+"//"+e.host,o=n+e.pathname.replace(/\/[^\/]*$/,"/");return t.replace(/url\s*\(((?:[^)(]|\((?:[^)(]+|\([^)(]*\))*\))*)\)/gi,function(t,e){var r,i=e.trim().replace(/^"(.*)"$/,function(t,e){return e}).replace(/^'(.*)'$/,function(t,e){return e});return/^(#|data:|http:\/\/|https:\/\/|file:\/\/\/|\s*$)/i.test(i)?t:(r=0===i.indexOf("//")?i:0===i.indexOf("/")?n+i:o+i.replace(/^\.\//,""),"url("+JSON.stringify(r)+")")})}},function(t,e,n){"use strict";n.r(e);var o=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"vsim-load",style:{overflow:t.bottomOverflow},on:{"&scroll":function(e){return t.handleScroll(e)}}},[n("div",{ref:"content",staticClass:"vsim-load-content"},[t._t("top",[n("div",{staticClass:"vsim-load-header"},[n("div",[t._v(t._s(t.topText))])])]),t._v(" "),t._t("default"),t._v(" "),t._t("bottom",[n("div",{directives:[{name:"show",rawName:"v-show",value:t.bottomText,expression:"bottomText"}],staticClass:"vsim-load-footer"},[n("div",[t._v(t._s(t.bottomText))])])])],2)])};o._withStripped=!0;const r="wait",i="pulling",s="limit",a="loading",u="wait",c="loading",l="nodata";var f={props:{disableTop:{type:Boolean,default:!1},nodata:{type:String,default:"暂无更多数据"},loading:{type:String,default:"正在加载更多..."},topLoading:{type:String,default:"正在刷新..."},topPulling:{type:String,default:"下拉刷新"},topLimit:{type:String,default:"释放刷新"},distanceIndex:{type:Number,default:2},topLoadingDistance:{type:Number,default:50},topDistance:{type:Number,default:100},topMethod:{type:Function,default:()=>(function(){console.log("topmethod")})},topStatusChange:{type:Function,default:()=>(function(){console.log("topStatusChange")})},disableBottom:{type:Boolean,default:!1},bottomDistance:{type:Number,default:10},bottomMethod:{type:Function,default:()=>(function(){})},bottomStatusChange:{type:Function,default:()=>(function(){console.log("topStatusChange")})}},data:()=>({startPositionTop:null,startScreenY:0,endScreenY:0,topStatus:r,bottomOverflow:"auto",bottomStatus:u}),components:{},computed:{topText(){switch(this.topStatus){case i:return this.topPulling;case s:return this.topLimit;case a:return this.topLoading;default:return""}},bottomText(){switch(this.bottomStatus){case c:return this.loading;case l:return this.nodata;default:return""}}},watch:{topStatus(t){this.topStatusChange(t)},bottomStatus(t){this.bottomStatusChange(t)}},mounted(){this.init()},methods:{handleScroll(){if(this.disableBottom)return;if(this.bottomStatus!==u)return;this.$el.scrollHeight-this.$el.scrollTop-this.$el.clientHeight<=this.bottomDistance&&(this.bottomStatus=c,this.$nextTick(()=>{this.$el.scrollTo(0,this.$el.scrollHeight)}),this.bottomMethod())},getScrollTop(){return this.$el.scrollTop},setScrollTop(t){this.$nextTick(()=>{this.$el.scrollTop=parseFloat(t)})},init(){this.startPositionTop=this.$refs.content.getBoundingClientRect().top,this.disableTop||this.bindTouchEvents()},bindTouchEvents(){this.$refs.content.addEventListener("touchstart",this.handleTouchStart),this.$refs.content.addEventListener("touchmove",this.handleTouchMove),this.$refs.content.addEventListener("touchend",this.handleTouchEnd)},handleTouchStart(t){if(this.$refs.content.getBoundingClientRect().top<this.startPositionTop)return;if(this.topStatus===a)return;let e=t.touches[0].screenY;this.startScreenY=e},handleTouchMove(t){if(this.$refs.content.getBoundingClientRect().top<this.startPositionTop)return;if("loading"===this.topStatus)return;let e=t.touches[0].screenY;this.endScreenY=e;let n=(e-this.startScreenY)/this.distanceIndex;this.$refs.content.getBoundingClientRect().top>this.startPositionTop&&(this.topStatus=i),n>=this.topDistance&&(this.topStatus=s),n>0&&(t.preventDefault(),t.stopPropagation(),this.transformStyle(this.$refs.content,n))},handleTouchEnd(t){this.$refs.content.getBoundingClientRect().top<this.startPositionTop||(this.topStatus!==i&&this.topStatus!==s||(t.stopPropagation(),t.preventDefault()),"loading"!==this.topStatus&&((this.endScreenY-this.startScreenY)/this.distanceIndex>=this.topDistance?(this.transformStyle(this.$refs.content,this.topLoadingDistance,!0),this.topStatus=a,this.topMethod(),this.disableBottom||(this.bottomStatus=u)):(this.topStatus=r,this.transformStyle(this.$refs.content,0),this.startScreenY=0,this.endScreenY=0)))},onTopLoaded(){this.transformStyle(this.$refs.content,0,!0),this.topStatus=r,this.startScreenY=0,this.endScreenY=0},onBottomLoaded(t=!0){this.bottomStatus=t?u:l},transformStyle(t,e,n,o=200){t.style["-webkit-transform"]="translate3d(0,"+e+"px,0)",t.style.transform="translate3d(0,"+e+"px,0)",t.style.transitionDuration="0ms",n&&(t.style.transitionDuration=o+"ms")}}};n(1);var d=function(t,e,n,o,r,i,s,a){var u,c="function"==typeof t?t.options:t;if(e&&(c.render=e,c.staticRenderFns=n,c._compiled=!0),o&&(c.functional=!0),i&&(c._scopeId="data-v-"+i),s?(u=function(t){(t=t||this.$vnode&&this.$vnode.ssrContext||this.parent&&this.parent.$vnode&&this.parent.$vnode.ssrContext)||"undefined"==typeof __VUE_SSR_CONTEXT__||(t=__VUE_SSR_CONTEXT__),r&&r.call(this,t),t&&t._registeredComponents&&t._registeredComponents.add(s)},c._ssrRegister=u):r&&(u=a?function(){r.call(this,this.$root.$options.shadowRoot)}:r),u)if(c.functional){c._injectStyles=u;var l=c.render;c.render=function(t,e){return u.call(e),l(t,e)}}else{var f=c.beforeCreate;c.beforeCreate=f?[].concat(f,u):[u]}return{exports:t,options:c}}(f,o,[],!1,null,"baedd54a",null);d.options.__file="src/VueQuickLoadmore.vue";var p=d.exports;e.default={install(t){t.component("castle-loadmore",p)}}}])});