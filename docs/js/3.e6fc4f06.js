(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([[3],{"216c":function(e,t,a){"use strict";var r=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("q-header",{attrs:{elevated:""}},[a("q-toolbar",{staticClass:"justify-start"},[a("q-icon",{staticClass:"gt-sm",attrs:{name:"fas fa-feather-alt",size:"md",color:"secondary"}}),a("q-icon",{staticClass:"lt-md",attrs:{name:"fas fa-feather-alt",size:"lg",color:"secondary"}}),a("q-toolbar-title",{staticClass:"text-weight-bold",attrs:{shrink:""}},[a("router-link",{staticClass:"text-secondary",attrs:{to:{name:"Home"}}},[e._v("\n        BOLG\n      ")])],1),a("Search",{staticClass:"gt-sm"}),a("q-space"),a("div",{staticClass:"row gt-sm"},[a("q-tabs",{model:{value:e.tab,callback:function(t){e.tab=t},expression:"tab"}},[a("q-route-tab",{staticClass:"text-secondary",attrs:{name:"blogs",label:"Posts",ripple:!1,to:{name:"Home"}}}),a("q-route-tab",{staticClass:"text-secondary",attrs:{name:"newpost",label:"New Post",ripple:!1,to:{name:"New Post"}}})],1),e.isAuthUser&&!e.fromLoginLayout?a("q-btn",{staticClass:"text-secondary",attrs:{flat:"",dense:"",icon:"logout",label:"Logout"},on:{click:function(t){return e.$emit("logout")}}}):e._e(),e.isAuthUser||e.fromLoginLayout?e._e():a("q-btn",{staticClass:"text-secondary",attrs:{flat:"",dense:"",icon:"login",label:"Login",to:{name:"Login"}}})],1),a("div",{staticClass:"lt-md"},[a("q-btn",{attrs:{flat:"",dense:"",color:"secondary",icon:"menu",size:"1.85rem"},on:{click:e.menuButtonClick}})],1)],1)],1)},s=[],n=(a("8c56"),a("c106")),o={name:"Nav",props:{isAuthUser:[Object],fromLoginLayout:{type:Boolean,default:!1}},components:{Search:n["a"]},data(){return{tab:"blogs",drawer:!1}},methods:{menuButtonClick(){this.$emit("openDrawer"),this.drawer=!this.drawer}}},i=o,c=(a("d79f"),a("2877")),l=a("e359"),u=a("65c6"),d=a("0016"),m=a("6ac5"),h=a("2c91"),f=a("429b"),p=a("7867"),b=a("9c40"),w=a("7460"),v=a("eebe"),g=a.n(v),y=Object(c["a"])(i,r,s,!1,null,null,null);t["a"]=y.exports;g()(y,"components",{QHeader:l["a"],QToolbar:u["a"],QIcon:d["a"],QToolbarTitle:m["a"],QSpace:h["a"],QTabs:f["a"],QRouteTab:p["a"],QBtn:b["a"],QTab:w["a"]})},"22f9":function(e,t,a){},4632:function(e,t,a){"use strict";a.r(t);var r=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("q-layout",{attrs:{view:"hHh Lpr fFf"}},[a("Nav",{attrs:{isAuthUser:null,fromLoginLayout:!0},on:{openDrawer:function(t){e.drawer=!0}}}),a("DrawerNav",{attrs:{isAuthUser:null,fromLoginLayout:!0},on:{drawer:function(t){e.drawer=!1}},model:{value:e.drawer,callback:function(t){e.drawer=t},expression:"drawer"}}),a("q-page-container",[a("router-view")],1)],1)},s=[],n=a("c106"),o=a("216c"),i=a("7d59"),c={name:"LoginLayout",components:{Search:n["a"],Nav:o["a"],DrawerNav:i["a"]},data(){return{drawer:!1,tab:"login"}}},l=c,u=a("2877"),d=a("4d5a"),m=a("09e3"),h=a("eebe"),f=a.n(h),p=Object(u["a"])(l,r,s,!1,null,null,null);t["default"]=p.exports;f()(p,"components",{QLayout:d["a"],QPageContainer:m["a"]})},"55fe":function(e,t,a){"use strict";a("22f9")},"7d59":function(e,t,a){"use strict";var r=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("q-drawer",{attrs:{value:e.value,width:e.$q.screen.width,breakpoint:500,side:"right",behavior:"mobile",overlay:"",bordered:""},on:{input:function(t){return e.$emit("drawer",t.target.value)}}},[a("div",{staticClass:"row justify-end q-mt-sm q-mr-md"},[a("q-btn",{directives:[{name:"show",rawName:"v-show",value:e.value,expression:"value"}],attrs:{flat:"",dense:"",color:"secondary",icon:"close",size:"1.85rem"},on:{click:function(t){return e.$emit("drawer")}}})],1),a("q-scroll-area",{staticClass:"fit"},[a("div",{staticClass:"row justify-center q-mt-xl"},[a("div",{staticClass:"col-8"},[a("Search",{staticClass:"mobile__search",attrs:{isDense:!1,isOutlined:!1}})],1)]),a("div",{staticClass:"column justify-center",staticStyle:{width:"60%",margin:"48px auto"}},[a("q-btn",{staticClass:"text-secondary text-h3 text-weight-bold",class:"Home"==e.$route.name?"drawer-active-link":"",attrs:{flat:"",dense:"",label:"Posts",ripple:!1,to:{name:"Home"}},on:{click:function(t){return e.$emit("drawer")}}}),e.isAuthUser&&!e.fromLoginLayout?a("q-btn",{staticClass:"text-secondary text-h3 text-weight-bold",class:"New Post"==e.$route.name?"drawer-active-link":"",attrs:{flat:"",dense:"",label:"New Post",ripple:!1,to:{name:"New Post"}},on:{click:function(t){return e.$emit("drawer")}}}):e._e(),e.isAuthUser?a("q-btn",{staticClass:"text-secondary text-h3 text-weight-bold",attrs:{flat:"",dense:"",ripple:!1,label:"Logout"},on:{click:function(t){return e.$emit("logout")}}}):e._e(),e.isAuthUser||e.fromLoginLayout?e._e():a("q-btn",{staticClass:"text-secondary text-h3 text-weight-bold",class:"Login"==e.$route.name?"drawer-active-link":"",attrs:{flat:"",dense:"",ripple:!1,label:"Login",to:{name:"Login"}}})],1)])],1)},s=[],n=a("c106"),o={name:"DrawerNav",props:{value:{default:!1},isAuthUser:[Object],fromLoginLayout:{type:Boolean,default:!1}},components:{Search:n["a"]},data(){return{}},methods:{test(){alert(1)}}},i=o,c=(a("55fe"),a("2877")),l=a("9404"),u=a("9c40"),d=a("4983"),m=a("eebe"),h=a.n(m),f=Object(c["a"])(i,r,s,!1,null,null,null);t["a"]=f.exports;h()(f,"components",{QDrawer:l["a"],QBtn:u["a"],QScrollArea:d["a"]})},ad98:function(e,t,a){},c106:function(e,t,a){"use strict";var r=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("q-input",{staticClass:"nav__search",staticStyle:{width:"350px"},attrs:{placeholder:"Search",dense:e.isDense,outlined:e.isOutlined,color:"secondary"},on:{keydown:function(t){return!t.type.indexOf("key")&&e._k(t.keyCode,"enter",13,t.key,"Enter")?null:e.execSearch(t)}},scopedSlots:e._u([{key:"append",fn:function(){return[a("q-btn",{ref:"searchInput",attrs:{unelevated:"",icon:"search","lazy-rules":"ondemand",error:e.searchHasError,"error-message":e.searchErrorMessage},on:{click:e.execSearch}})]},proxy:!0}]),model:{value:e.search,callback:function(t){e.search=t},expression:"search"}})},s=[],n=(a("8c56"),{name:"Search",props:{isDense:{type:Boolean,default:!0},isOutlined:{type:Boolean,default:!0}},data(){return{search:this.$route.params.term||"",searchHasError:!1,searchErrorMessage:""}},methods:{execSearch(){if(!this.search)return this.searchHasError=!0,void(this.searchErrorMessage="Please enter a search term.");this.search&&this.$router.push({name:"Search",params:{term:this.search}}).catch((e=>{"NavigationDuplicated"===e.name||e.message.includes("Avoided redundant navigation to current location")||logError(e)}))}}}),o=n,i=(a("e589"),a("2877")),c=a("27f9"),l=a("9c40"),u=a("8572"),d=a("eebe"),m=a.n(d),h=Object(i["a"])(o,r,s,!1,null,null,null);t["a"]=h.exports;m()(h,"components",{QInput:c["a"],QBtn:l["a"],QField:u["a"]})},d79f:function(e,t,a){"use strict";a("ad98")},e589:function(e,t,a){"use strict";a("ff39")},ff39:function(e,t,a){}}]);