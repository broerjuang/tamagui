(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[827],{5461:function(e,t,n){"use strict";n.d(t,{W:function(){return h}});var r=n(9097),a=n(2784),o=n(5558),i=n(8042),c=n(8303),l=n(4371),u=n(1801);function f(e,t){var n="undefined"!==typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(!n){if(Array.isArray(e)||(n=function(e,t){if(!e)return;if("string"===typeof e)return s(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);"Object"===n&&e.constructor&&(n=e.constructor.name);if("Map"===n||"Set"===n)return Array.from(e);if("Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return s(e,t)}(e))||t&&e&&"number"===typeof e.length){n&&(e=n);var r=0,a=function(){};return{s:a,n:function(){return r>=e.length?{done:!0}:{done:!1,value:e[r++]}},e:function(e){throw e},f:a}}throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}var o,i=!0,c=!1;return{s:function(){n=n.call(e)},n:function(){var e=n.next();return i=e.done,e},e:function(e){c=!0,o=e},f:function(){try{i||null==n.return||n.return()}finally{if(c)throw o}}}}function s(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,r=new Array(t);n<t;n++)r[n]=e[n];return r}var m=Object.defineProperty,d=Object.getOwnPropertySymbols,p=Object.prototype.hasOwnProperty,y=Object.prototype.propertyIsEnumerable,v=function(e,t,n){return t in e?m(e,t,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[t]=n},g=function(e){var t=e,n=t.href,o=function(e,t){var n={};for(var r in e)p.call(e,r)&&t.indexOf(r)<0&&(n[r]=e[r]);if(null!=e&&d){var a,o=f(d(e));try{for(o.s();!(a=o.n()).done;)r=a.value,t.indexOf(r)<0&&y.call(e,r)&&(n[r]=e[r])}catch(i){o.e(i)}finally{o.f()}}return n}(t,["href"]);return a.createElement(r.default,{passHref:!0,href:n},a.createElement(c.n,function(e,t){for(var n in t||(t={}))p.call(t,n)&&v(e,n,t[n]);if(d){var r,a=f(d(t));try{for(a.s();!(r=a.n()).done;)n=r.value,y.call(t,n)&&v(e,n,t[n])}catch(o){a.e(o)}finally{a.f()}}return e}({tag:"a",size:"$2",fontSize:"$2",opacity:.5,color:"$color",cursor:"pointer",py:"$1",hoverStyle:{opacity:1}},o)))};function h(){var e=(0,a.useState)([]),t=e[0],n=e[1];(0,a.useEffect)((function(){var e=Array.from(document.querySelectorAll("[data-heading]"));n(e)}),[]);var r=function(e){return Number(e.replace("H",""))};return a.createElement(l.FA,{tag:"aside",className:i.Z.classNames.zeroRight,display:"none",$lg:{display:"flex",width:230,flexShrink:0,zIndex:1,position:"fixed",right:0,top:75}},a.createElement(o.Z,null,a.createElement(l.FA,{tag:"nav","aria-labelledby":"site-quick-nav-heading",px:"$5",display:0===t.length?"none":"block",space:!0},a.createElement(u.H4,{size:"$3",id:"site-quick-nav-heading"},"Quick nav"),a.createElement("ul",{style:{margin:0,padding:0}},t.map((function(e){var t=e.id,n=e.nodeName,o=e.innerText;return a.createElement(l.FA,{tag:"li",key:t,"data-level":r(n)},a.createElement(g,{href:"#".concat(t)},o))}))))))}},6149:function(e,t,n){"use strict";n.r(t),n.d(t,{__N_SSG:function(){return l},default:function(){return u}});var r=n(5427),a=n(5461),o=n(6668),i=n(3098),c=n(2784),l=!0;function u(e){var t=e.frontmatter,n=e.code,l=c.useMemo((function(){return(0,i.getMDXComponent)(n)}),[n]);return c.createElement(c.Fragment,null,c.createElement(o.H,{title:"".concat(t.title," \u2014 Tamagui"),description:t.description,image:t.image}),c.createElement(r.Zo,{frontmatter:t},c.createElement(l,{components:r.wx})),c.createElement(a.W,{key:t.slug}))}},3105:function(e,t,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/docs/components/[...slug]",function(){return n(6149)}])}},function(e){e.O(0,[774,58,897,888,179],(function(){return t=3105,e(e.s=t);var t}));var t=e.O();_N_E=t}]);