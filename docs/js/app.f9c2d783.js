(function(e){function t(t){for(var r,o,l=t[0],u=t[1],c=t[2],s=0,d=[];s<l.length;s++)o=l[s],Object.prototype.hasOwnProperty.call(a,o)&&a[o]&&d.push(a[o][0]),a[o]=0;for(r in u)Object.prototype.hasOwnProperty.call(u,r)&&(e[r]=u[r]);p&&p(t);while(d.length)d.shift()();return i.push.apply(i,c||[]),n()}function n(){for(var e,t=0;t<i.length;t++){for(var n=i[t],r=!0,o=1;o<n.length;o++){var l=n[o];0!==a[l]&&(r=!1)}r&&(i.splice(t--,1),e=u(u.s=n[0]))}return e}var r={},o={2:0},a={2:0},i=[];function l(e){return u.p+"js/"+({}[e]||e)+"."+{1:"42fc9e9c",3:"e6fc4f06",4:"baa405a2",5:"1ba06a9e",6:"e8de6b4f",7:"03751810",8:"5c1c466d",9:"70b49551",10:"43f6242b"}[e]+".js"}function u(t){if(r[t])return r[t].exports;var n=r[t]={i:t,l:!1,exports:{}};return e[t].call(n.exports,n,n.exports,u),n.l=!0,n.exports}u.e=function(e){var t=[],n={1:1,3:1,4:1,5:1,6:1,7:1,8:1};o[e]?t.push(o[e]):0!==o[e]&&n[e]&&t.push(o[e]=new Promise((function(t,n){for(var r="css/"+({}[e]||e)+"."+{1:"83e6d895",3:"e4a5e743",4:"67a6297d",5:"33d7fda2",6:"33d7fda2",7:"33d7fda2",8:"a4d6821f",9:"31d6cfe0",10:"31d6cfe0"}[e]+".css",a=u.p+r,i=document.getElementsByTagName("link"),l=0;l<i.length;l++){var c=i[l],s=c.getAttribute("data-href")||c.getAttribute("href");if("stylesheet"===c.rel&&(s===r||s===a))return t()}var d=document.getElementsByTagName("style");for(l=0;l<d.length;l++){c=d[l],s=c.getAttribute("data-href");if(s===r||s===a)return t()}var p=document.createElement("link");p.rel="stylesheet",p.type="text/css",p.onload=t,p.onerror=function(t){var r=t&&t.target&&t.target.src||a,i=new Error("Loading CSS chunk "+e+" failed.\n("+r+")");i.code="CSS_CHUNK_LOAD_FAILED",i.request=r,delete o[e],p.parentNode.removeChild(p),n(i)},p.href=a;var f=document.getElementsByTagName("head")[0];f.appendChild(p)})).then((function(){o[e]=0})));var r=a[e];if(0!==r)if(r)t.push(r[2]);else{var i=new Promise((function(t,n){r=a[e]=[t,n]}));t.push(r[2]=i);var c,s=document.createElement("script");s.charset="utf-8",s.timeout=120,u.nc&&s.setAttribute("nonce",u.nc),s.src=l(e);var d=new Error;c=function(t){s.onerror=s.onload=null,clearTimeout(p);var n=a[e];if(0!==n){if(n){var r=t&&("load"===t.type?"missing":t.type),o=t&&t.target&&t.target.src;d.message="Loading chunk "+e+" failed.\n("+r+": "+o+")",d.name="ChunkLoadError",d.type=r,d.request=o,n[1](d)}a[e]=void 0}};var p=setTimeout((function(){c({type:"timeout",target:s})}),12e4);s.onerror=s.onload=c,document.head.appendChild(s)}return Promise.all(t)},u.m=e,u.c=r,u.d=function(e,t,n){u.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},u.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},u.t=function(e,t){if(1&t&&(e=u(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(u.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var r in e)u.d(n,r,function(t){return e[t]}.bind(null,r));return n},u.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return u.d(t,"a",t),t},u.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},u.p="/",u.oe=function(e){throw console.error(e),e};var c=window["webpackJsonp"]=window["webpackJsonp"]||[],s=c.push.bind(c);c.push=t,c=c.slice();for(var d=0;d<c.length;d++)t(c[d]);var p=s;i.push([0,0]),n()})({0:function(e,t,n){e.exports=n("2f39")},"2f39":function(e,t,n){"use strict";n.r(t);var r={};n.r(r),n.d(r,"getAuthUser",(function(){return P}));var o={};n.r(o),n.d(o,"storeUserMutation",(function(){return A}));var a={};n.r(a),n.d(a,"storeUserAction",(function(){return S})),n.d(a,"deleteUserAction",(function(){return j}));n("e6cf"),n("5319"),n("573e"),n("7d6e"),n("e54f"),n("985d"),n("31cd");var i=n("2b0e"),l=n("1f91"),u=n("42d2"),c=n("b05d"),s=n("f508"),d=n("2a19");i["a"].use(c["a"],{config:{},lang:l["a"],iconSet:u["a"],plugins:{Loading:s["a"],Notify:d["a"]}});var p=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{attrs:{id:"q-app"}},[n("router-view",{key:e.$route.fullPath})],1)},f=[],h={name:"App",data(){return{isAuthUser:null}},created(){this.isAuthUser=this.$store.getters["example/getAuthUser"]}},m=h,b=n("2877"),g=Object(b["a"])(m,p,f,!1,null,null,null),v=g.exports,y=n("2f62"),w=function(){return{user:null}};function P(e){return e.user}function A(e,t){e.user=t}function S({commit:e},t){e("storeUserMutation",t)}function j({commit:e}){e("storeUserMutation",null)}var x={namespaced:!0,getters:r,mutations:o,actions:a,state:w};i["a"].use(y["a"]);var O=function(){const e=new y["a"].Store({modules:{example:x},strict:!1});return e},U=n("8c4f");n("ddb0");const E=[{path:"/bolg2",component:()=>Promise.all([n.e(0),n.e(1)]).then(n.bind(null,"713b")),children:[{path:"",name:"Home",component:()=>Promise.all([n.e(0),n.e(5)]).then(n.bind(null,"8b24"))}]},{path:"/bolg2/search/:term",component:()=>Promise.all([n.e(0),n.e(1)]).then(n.bind(null,"713b")),children:[{path:"",name:"Search",component:()=>Promise.all([n.e(0),n.e(6)]).then(n.bind(null,"5c65")),props:!0}]},{path:"/bolg2/tag/:tag",component:()=>Promise.all([n.e(0),n.e(1)]).then(n.bind(null,"713b")),children:[{path:"",name:"Tag",component:()=>Promise.all([n.e(0),n.e(7)]).then(n.bind(null,"8839")),props:!0}]},{path:"/bolg2/new-post",component:()=>Promise.all([n.e(0),n.e(1)]).then(n.bind(null,"713b")),meta:{requiresAuth:!0},children:[{path:"",name:"New Post",component:()=>Promise.all([n.e(0),n.e(8)]).then(n.bind(null,"d306"))}]},{path:"/bolg2/post/:id/:slug",component:()=>Promise.all([n.e(0),n.e(1)]).then(n.bind(null,"713b")),children:[{path:"",name:"Post",component:()=>Promise.all([n.e(0),n.e(4)]).then(n.bind(null,"2fde"))}]},{path:"/bolg2/login",component:()=>Promise.all([n.e(0),n.e(3)]).then(n.bind(null,"4632")),children:[{path:"",name:"Login",component:()=>Promise.all([n.e(0),n.e(10)]).then(n.bind(null,"013f"))}]},{path:"/bolg2/*",component:()=>Promise.all([n.e(0),n.e(9)]).then(n.bind(null,"e51e"))}];var L=E,_=n("8c56");i["a"].use(U["a"]);var T=function({store:e}){const t=new U["a"]({scrollBehavior:()=>({x:0,y:0}),routes:L,mode:"history",base:"/"});function n(e,t,n,r){const o=e.matched.some((e=>e.meta.requiresAuth));o&&!r?n({name:"Login"}):n()}return t.beforeEach(((t,r,o)=>{let a=e.getters["example/getAuthUser"];console.log("router",a),a?n(t,r,o,a):_["a"].auth().onAuthStateChanged((a=>{if(console.log("router",a),a){let{uid:t,displayName:n,email:r,photoURL:o}=a;e.dispatch("example/storeUserAction",{uid:t,displayName:n,email:r,photoURL:o})}n(t,r,o,a)}))})),t},k=async function(){const e="function"===typeof O?await O({Vue:i["a"]}):O,t="function"===typeof T?await T({Vue:i["a"],store:e}):T;e.$router=t;const n={router:t,store:e,render:e=>e(v),el:"#q-app"};return{app:n,store:e,router:t}},C=n("bc3a"),N=n.n(C);i["a"].prototype.$axios=N.a;var M=n("9f9a"),q=n.n(M),I=async({Vue:e})=>{e.filter("badwordsFilter",(function(e){let t=new q.a;return e?(e=e.toString(),t.clean(e)):""}))};const B="/";async function V(){const{app:e,store:t,router:n}=await k();let r=!1;const o=e=>{r=!0;const t=Object(e)===e?n.resolve(e).route.fullPath:e;window.location.href=t},a=window.location.href.replace(window.location.origin,""),l=[void 0,I];for(let c=0;!1===r&&c<l.length;c++)if("function"===typeof l[c])try{await l[c]({app:e,router:n,store:t,Vue:i["a"],ssrContext:null,redirect:o,urlPath:a,publicPath:B})}catch(u){return u&&u.url?void(window.location.href=u.url):void console.error("[Quasar] boot error:",u)}!0!==r&&new i["a"](e)}V()},"31cd":function(e,t,n){},"8c56":function(e,t,n){"use strict";n.d(t,"b",(function(){return a})),n.d(t,"c",(function(){return i}));n("e6cf");var r=n("260b");n.d(t,"a",(function(){return r["a"]}));n("ea7b"),n("e71f"),n("588e");const o={apiKey:"AIzaSyASeAQpbJJjvYrMIT8OPKjZdLynlnS5pFo",authDomain:"bolg-7aaec.firebaseapp.com",projectId:"bolg-7aaec",storageBucket:"bolg-7aaec.appspot.com",messagingSenderId:"1007171942822",appId:"1:1007171942822:web:f1bf2266db2bb5644cb767"};r["a"].initializeApp(o);const a=new r["a"].auth.GoogleAuthProvider,i=r["a"].firestore.FieldValue.serverTimestamp}});
