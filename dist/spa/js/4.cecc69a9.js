(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([[4],{"15ee":function(t,e,s){"use strict";s("9b5e")},"1fd3":function(t,e,s){"use strict";s("6b75")},"2fde":function(t,e,s){"use strict";s.r(e);var i=function(){var t=this,e=t.$createElement,s=t._self._c||e;return t.post?s("q-page",{staticClass:"post__container",attrs:{padding:""}},[t.post.postPicture?s("div",{staticClass:"row justify-center items-start post__row post__picture-container"},[s("div",{staticClass:"col-12"},[s("div",{staticClass:"post__picture",style:{backgroundImage:"url("+t.post.postPicture+")"}})])]):t._e(),s("div",{staticClass:"row justify-center items-start post__row"},[s("div",{staticClass:"col-lg-6 col-md-7 col-sm-10 col-xs-12"},[s("h1",{staticClass:"text-weight-bold text-h2"},[t._v(t._s(t._f("badwordsFilter")(t.post.title)))]),s("div",{staticClass:"post__user-info-container"},[s("div",{staticClass:"post__user-info"},[s("img",{attrs:{src:t.post.userPicture,alt:t.post.userName}}),s("div",[s("p",{staticClass:"text-weight-bold"},[t._v(t._s(t.post.userName))]),s("p",{staticClass:"text-caption"},[t._v(t._s(t.formattedPostDate))])])]),s("div",[s("Likes",{attrs:{post:Object.assign({},t.post,{id:t.$route.params.id})}})],1)])])]),s("div",{staticClass:"row justify-center items-start post__row"},[s("div",{staticClass:"col-lg-6 col-md-7 col-sm-10 col-xs-12"},t._l(t.post.tags,(function(e,i){return s("q-chip",{key:i,attrs:{color:"secondary"}},[s("router-link",{staticClass:"text-white",attrs:{to:{name:"Tag",params:{tag:e}}}},[t._v("\n          #"+t._s(t._f("badwordsFilter")(e))+"\n        ")])],1)})),1)]),s("div",{staticClass:"row justify-center items-start post__row"},[s("div",{staticClass:"col-lg-6 col-md-7 col-sm-10 col-xs-12"},[s("div",{domProps:{innerHTML:t._s(t.$options.filters.badwordsFilter(t.post.body))}}),s("hr")])]),s("div",{staticClass:"row justify-center items-start post__row"},[s("div",{staticClass:"col-lg-6 col-md-7 col-sm-10 col-xs-12"},[s("Comments",{attrs:{post:Object.assign({},t.post,{id:t.$route.params.id})}})],1)])]):t._e()},a=[],o=(s("e6cf"),s("8c56")),n=s("c1df"),c=s.n(n),r=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",[s("h4",{staticClass:"text-weight-bold q-ma-none q-mb-md"},[t._v("Comments")]),t.isAuthUser?s("div",{staticClass:"row"},[s("div",{staticClass:"col-12"},[s("q-form",{staticClass:"q-gutter-md",on:{submit:function(e){return e.preventDefault(),t.onSubmit(e)}}},[s("q-input",{ref:"commentInput",attrs:{outlined:"",color:"secondary",label:"Add a comment","lazy-rules":"",autogrow:"",rules:[function(t){return t&&t.length>0||"Please type something"}]},model:{value:t.comment,callback:function(e){t.comment=e},expression:"comment"}}),s("div",{staticClass:"q-mt-xs"},[s("q-btn",{attrs:{label:"Submit",type:"submit",color:"secondary",loading:t.submitCommentLoading,disable:t.submitCommentLoading}})],1)],1)],1)]):t._e(),s("div",{staticClass:"row comments__container q-mt-lg"},[s("div",{staticClass:"col-12"},t._l(t.comments,(function(e,i){return s("div",{key:e.id+i,staticClass:"row q-mb-md"},[s("SingleComment",{attrs:{comment:e,post:t.post}})],1)})),0)]),s("div",{staticClass:"row q-mt-md justify-center"},[s("div",{staticClass:"col-8"},[s("q-btn",{staticClass:"full-width",attrs:{color:"secondary",label:"Load comments",loading:t.commentsLoading},on:{click:t.loadComments}})],1)])])},l=[],d=s("ded3"),m=s.n(d),u=(s("ddb0"),function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"col-12"},[s("q-card",{staticClass:"my-card bg-grey-1",attrs:{flat:"",bordered:""}},[s("q-card-section",{staticStyle:{"padding-bottom":"0"}},[s("div",{staticClass:"row items-center no-wrap"},[s("div",{staticClass:"col comment__user-info"},[s("img",{attrs:{src:t.comment.userPicture,alt:t.comment.userName}}),s("div",[s("div",{staticClass:"text-weight-bold"},[t._v(t._s(t.comment.userName))]),s("div",{staticClass:"text-caption"},[t._v(t._s(t.comment.createdAt))])])])])]),s("q-card-section",[t._v("\n      "+t._s(t._f("badwordsFilter")(t.comment.body))+"\n    ")]),s("q-card-section",{staticClass:"text-right text-grey-7",staticStyle:{"padding-top":"0"}},[s("span",{staticClass:"text-subtitle2 q-mr-sm"},[t._v(t._s(t.likes)+" likes")]),s("span",{staticClass:"text-subtitle2"},[t._v(t._s(t.repliesCount)+" replies")])]),t.isAuthUser?s("q-separator"):t._e(),t.isAuthUser?s("q-card-actions",{staticClass:"justify-around"},[s("CommentLikes",{attrs:{comment:t.comment},on:{updateCommentLikesCount:t.updateCommentLikesCount}}),s("q-item",{staticClass:"col-4",attrs:{clickable:""},on:{click:function(e){t.isActiveReply=!t.isActiveReply}}},[s("q-item-section",{attrs:{avatar:""}},[s("q-icon",{attrs:{color:"secondary",name:"far fa-comment-alt"}})],1),s("q-item-section",[s("q-item-label",[t._v("\n            Reply\n          ")])],1)],1)],1):t._e(),s("q-card-section",{directives:[{name:"show",rawName:"v-show",value:t.isActiveReply,expression:"isActiveReply"}],staticClass:"text-grey-7",staticStyle:{"padding-top":"0"}},[s("Reply",{attrs:{comment:t.comment,user:t.isAuthUser},on:{updateCommentRepliesCount:t.updateCommentRepliesCount,appendNewReply:t.appendNewReply}})],1),t.replies.length?s("hr",{staticClass:"q-separator q-separator q-separator--horizontal"}):t._e(),s("q-card-section",{staticClass:"q-pa-none"},t._l(t.replies,(function(t,e){return s("SingleReply",{key:t.id,attrs:{reply:t}})})),1)],1)],1)}),h=[],p=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",[s("q-item",{directives:[{name:"show",rawName:"v-show",value:!t.isLiked,expression:"!isLiked"}],staticClass:"col-4",attrs:{clickable:""},on:{click:t.likeHandler}},[s("q-item-section",{attrs:{avatar:""}},[s("q-icon",{attrs:{color:"secondary",name:"far fa-thumbs-up"}})],1),s("q-item-section",[s("q-item-label",[t._v("\n        Like\n      ")])],1)],1),s("q-item",{directives:[{name:"show",rawName:"v-show",value:t.isLiked,expression:"isLiked"}],staticClass:"col-4",attrs:{clickable:""},on:{click:t.unlikeHandler}},[s("q-item-section",{attrs:{avatar:""}},[s("q-icon",{attrs:{color:"secondary",name:"fas fa-thumbs-up"}})],1),s("q-item-section",[s("q-item-label",[t._v("\n        Like\n      ")])],1)],1)],1)},f=[],b=s("1c16"),j={name:"CommentLikes",props:["comment"],data(){return{likes:0,isLiked:!1,isAuthUser:!1,authUserInfo:[],userLikeId:""}},mounted(){console.log(this.comment),this.authUserInfo=this.$store.getters["example/getAuthUser"],this.likes=this.comment.likes,this.isAuthUser=this.authUserInfo,this.isUserLikedPost()},methods:{likeHandler:Object(b["a"])((async function(){if(this.isLiked||!this.isAuthUser)return;let t=o["a"].firestore(),{uid:e,displayName:s,photoURL:i}=this.authUserInfo,a=this.likes+1,n=await t.collection("comments").doc(this.comment.id).collection("likes").add({userId:e,userName:s,photoURL:i});this.userLikeId=await n.id,await t.collection("comments").doc(this.comment.id).update({likes:a}).then((()=>{this.likes++,this.$emit("updateCommentLikesCount",this.likes),this.isLiked=!0})).catch((t=>{console.log(t)}))}),300),unlikeHandler:Object(b["a"])((async function(){if(!this.isLiked||!this.isAuthUser)return;let t=o["a"].firestore(),e=this.likes-1;await t.collection("comments").doc(this.comment.id).collection("likes").doc(this.userLikeId).delete();await t.collection("comments").doc(this.comment.id).update({likes:e}).then((()=>{this.likes--,this.$emit("updateCommentLikesCount",this.likes),this.isLiked=!1})).catch((t=>{console.log(t)}))}),300),async isUserLikedPost(){let t=o["a"].firestore(),e=await t.collection("comments").doc(this.comment.id).collection("likes").where("userId","==",this.isAuthUser.uid).get();await!e.empty&&(this.userLikeId=e.docs[0].id,this.isLiked=!0)}}},k=j,y=s("2877"),g=s("66e5"),v=s("4074"),C=s("0016"),w=s("0170"),_=s("eebe"),L=s.n(_),A=Object(y["a"])(k,p,f,!1,null,null,null),q=A.exports;L()(A,"components",{QItem:g["a"],QItemSection:v["a"],QIcon:C["a"],QItemLabel:w["a"]});var U=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("q-form",{staticClass:"q-gutter-md",on:{submit:function(e){return e.preventDefault(),t.onSubmit(e)}}},[s("q-input",{ref:"replyInput",attrs:{outlined:"",color:"secondary",label:"Add a reply","lazy-rules":"",autogrow:"",rules:[function(t){return t&&t.length>0||"Please type something"}]},model:{value:t.reply,callback:function(e){t.reply=e},expression:"reply"}}),s("q-btn",{attrs:{label:"Submit",type:"submit",color:"secondary",loading:t.submitReplyLoading,disable:t.submitReplyLoading}})],1)},I=[],x={name:"Reply",props:["comment","user"],data(){return{reply:"",repliesCount:0,submitReplyLoading:!1}},mounted(){console.log(this.comment),this.repliesCount=this.comment.replies},methods:{async onSubmit(){let t=o["a"].firestore();this.submitReplyLoading=!0;let e=await t.collection("comments").doc(this.comment.id).collection("replies").add({userName:this.user.displayName,userId:this.user.uid,userPicture:this.user.photoURL,body:this.reply,createdAt:Object(o["c"])()});await t.collection("comments").doc(this.comment.id).update({replies:this.repliesCount+1}),this.repliesCount++,this.reply="",this.$emit("updateCommentRepliesCount",this.repliesCount),this.loadNewReply(e.id),this.submitReplyLoading=!1},async loadNewReply(t){let e=o["a"].firestore(),s=await e.collection("comments").doc(this.comment.id).collection("replies").doc(t).get();this.commentsLastVisible=s,s=s.data(),s.createdAt=c()(s.createdAt.toDate()).format("MMM DD, YYYY HH:mm:ss a"),this.$emit("appendNewReply",m()({id:t},s)),console.log(this.comments)}}},R=x,z=s("0378"),N=s("27f9"),D=s("9c40"),Y=Object(y["a"])(R,U,I,!1,null,null,null),Q=Y.exports;L()(Y,"components",{QForm:z["a"],QInput:N["a"],QBtn:D["a"]});var $=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"reply__container q-pa-md"},[s("div",{staticClass:"row"},[s("div",{staticClass:"col-12"},[s("div",{staticClass:"row"},[s("img",{attrs:{src:t.reply.userPicture,alt:t.reply.userName}}),s("div",[s("p",{staticClass:"text-weight-bold"},[t._v("\n            "+t._s(t.reply.userName)+"\n          ")]),s("p",{staticClass:"text-caption"},[t._v("\n            "+t._s(t.reply.createdAt)+"\n          ")])])])])]),s("div",{staticClass:"row reply-body__container"},[s("p",[t._v(t._s(t._f("badwordsFilter")(t.reply.body)))])]),s("hr",{staticClass:"q-separator q-separator q-separator--horizontal"})])},P=[],S={name:"SingleReply",props:["reply"],data(){return{}}},O=S,M=(s("15ee"),s("eb85")),H=Object(y["a"])(O,$,P,!1,null,null,null),E=H.exports;L()(H,"components",{QSeparator:M["a"]});var F=s("bd4c"),V={name:"SingleComponent",props:["comment"],components:{CommentLikes:q,Reply:Q,SingleReply:E},data(){return{likes:0,replies:[],repliesCount:0,isAuthUser:null,isActiveReply:!1,isAuthUser:null}},mounted(){this.likes=this.comment.likes,this.repliesCount=this.comment.replies,this.isAuthUser=this.$store.getters["example/getAuthUser"],console.log(this.comment),this.getCommentReplies()},methods:{updateCommentLikesCount(t){this.likes=t},updateCommentRepliesCount(t){this.repliesCount=t,this.isActiveReply=!1},async getCommentReplies(){let t=o["a"].firestore(),e=await t.collection("comments").doc(this.comment.id).collection("replies").orderBy("createdAt","desc").get();this.replies=e.docs.map((t=>{let e=t.data();return e.createdAt=F["a"].formatDate(e.createdAt.toDate(),"MMM DD, YYYY hh:mm:ss a"),m()({id:t.id},e)})),console.log(this.replies)},appendNewReply(t){this.replies.unshift(t)}}},B=V,T=(s("cd32"),s("f09f")),J=s("a370"),G=s("4b7e"),K=Object(y["a"])(B,u,h,!1,null,null,null),W=K.exports;L()(K,"components",{QCard:T["a"],QCardSection:J["a"],QSeparator:M["a"],QCardActions:G["a"],QItem:g["a"],QItemSection:v["a"],QIcon:C["a"],QItemLabel:w["a"]});var X={name:"Comments",props:["post"],components:{SingleComment:W},data(){return{comment:"",commentsLoading:!1,commentsPer:8,commentsLastVisible:[],comments:[],isAuthUser:null,postId:null,submitCommentLoading:!1}},created(){this.isAuthUser=this.$store.getters["example/getAuthUser"],this.postId=this.$route.params.id},methods:{async onSubmit(){if(!this.isAuthUser)return void console.log("No Login!");let t=o["a"].firestore();this.submitCommentLoading=!0;let e=await t.collection("comments").add({userId:this.isAuthUser.uid,userName:this.isAuthUser.displayName,userPicture:this.isAuthUser.photoURL,postId:this.postId,body:this.comment,createdAt:Object(o["c"])(),replies:0,likes:0});this.$refs.commentInput.resetValidation(),this.comment="",this.loadNewComment(e.id),this.submitCommentLoading=!1},async loadNewComment(t){let e=o["a"].firestore(),s=await e.collection("comments").doc(t).get();this.commentsLastVisible=s,s=s.data(),s.createdAt=c()(s.createdAt.toDate()).format("MMM DD, YYYY HH:mm:ss a"),this.comments.unshift(m()({id:t},s)),console.log(this.comments)},async loadComments(){if(!this.commentsLastVisible)return;let t=o["a"].firestore();this.commentsLoading=!0;let e=[];e=this.comments.length?await t.collection("comments").where("postId","==",this.post.id).orderBy("createdAt","desc").startAfter(this.commentsLastVisible).limit(this.commentsPer).get():await t.collection("comments").where("postId","==",this.post.id).orderBy("createdAt","desc").limit(this.commentsPer).get(),this.commentsLastVisible=e.docs[e.docs.length-1],e=await e.docs.map(((t,e,s)=>{let i=t.data();return i.createdAt=this.formattedCommentDate(i.createdAt.toDate()),m()({id:t.id},i)})),this.comments.push(...e),this.commentsLoading=!1},formattedCommentDate(t){return c()(t).format("MMM DD, YYYY hh:mm:ss a")}}},Z=X,tt=Object(y["a"])(Z,r,l,!1,null,null,null),et=tt.exports;L()(tt,"components",{QForm:z["a"],QInput:N["a"],QBtn:D["a"]});var st=s("65c2"),it=(s("9f9a"),{name:"Post",components:{Comments:et,Likes:st["a"]},data(){return{post:null,formattedPostDate:null,metaInfo:"test"}},meta(){return{title:this.post.title}},async created(){this.$q.loading.show();let t=this.$route.params.id,e=await o["a"].firestore().collection("posts").doc(t).get();this.formattedPostDate=c()(e.data().createdAt.toDate()).format("MMM DD, YYYY YYYY HH:mm:ss a"),this.post=await e.data(),this.$q.loading.hide()}}),at=it,ot=(s("1fd3"),s("9989")),nt=s("b047"),ct=Object(y["a"])(at,i,a,!1,null,null,null);e["default"]=ct.exports;L()(ct,"components",{QPage:ot["a"],QChip:nt["a"]})},4678:function(t,e,s){var i={"./af":"2bfb","./af.js":"2bfb","./ar":"8e73","./ar-dz":"a356","./ar-dz.js":"a356","./ar-kw":"423e","./ar-kw.js":"423e","./ar-ly":"1cfd","./ar-ly.js":"1cfd","./ar-ma":"0a84","./ar-ma.js":"0a84","./ar-sa":"8230","./ar-sa.js":"8230","./ar-tn":"6d83","./ar-tn.js":"6d83","./ar.js":"8e73","./az":"485c","./az.js":"485c","./be":"1fc1","./be.js":"1fc1","./bg":"84aa","./bg.js":"84aa","./bm":"a7fa","./bm.js":"a7fa","./bn":"9043","./bn-bd":"9686","./bn-bd.js":"9686","./bn.js":"9043","./bo":"d26a","./bo.js":"d26a","./br":"6887","./br.js":"6887","./bs":"2554","./bs.js":"2554","./ca":"d716","./ca.js":"d716","./cs":"3c0d","./cs.js":"3c0d","./cv":"03ec","./cv.js":"03ec","./cy":"9797","./cy.js":"9797","./da":"0f14","./da.js":"0f14","./de":"b469","./de-at":"b3eb","./de-at.js":"b3eb","./de-ch":"bb71","./de-ch.js":"bb71","./de.js":"b469","./dv":"598a","./dv.js":"598a","./el":"8d47","./el.js":"8d47","./en-au":"0e6b","./en-au.js":"0e6b","./en-ca":"3886","./en-ca.js":"3886","./en-gb":"39a6","./en-gb.js":"39a6","./en-ie":"e1d3","./en-ie.js":"e1d3","./en-il":"7333","./en-il.js":"7333","./en-in":"ec2e","./en-in.js":"ec2e","./en-nz":"6f50","./en-nz.js":"6f50","./en-sg":"b7e9","./en-sg.js":"b7e9","./eo":"65db","./eo.js":"65db","./es":"898b","./es-do":"0a3c","./es-do.js":"0a3c","./es-mx":"b5b7","./es-mx.js":"b5b7","./es-us":"55c9","./es-us.js":"55c9","./es.js":"898b","./et":"ec18","./et.js":"ec18","./eu":"0ff2","./eu.js":"0ff2","./fa":"8df48","./fa.js":"8df48","./fi":"81e9","./fi.js":"81e9","./fil":"d69a","./fil.js":"d69a","./fo":"0721","./fo.js":"0721","./fr":"9f26","./fr-ca":"d9f8","./fr-ca.js":"d9f8","./fr-ch":"0e49","./fr-ch.js":"0e49","./fr.js":"9f26","./fy":"7118","./fy.js":"7118","./ga":"5120","./ga.js":"5120","./gd":"f6b46","./gd.js":"f6b46","./gl":"8840","./gl.js":"8840","./gom-deva":"aaf2","./gom-deva.js":"aaf2","./gom-latn":"0caa","./gom-latn.js":"0caa","./gu":"e0c5","./gu.js":"e0c5","./he":"c7aa","./he.js":"c7aa","./hi":"dc4d","./hi.js":"dc4d","./hr":"4ba9","./hr.js":"4ba9","./hu":"5b14","./hu.js":"5b14","./hy-am":"d6b6","./hy-am.js":"d6b6","./id":"5038","./id.js":"5038","./is":"0558","./is.js":"0558","./it":"6e98","./it-ch":"6f12","./it-ch.js":"6f12","./it.js":"6e98","./ja":"079e","./ja.js":"079e","./jv":"b540","./jv.js":"b540","./ka":"201b","./ka.js":"201b","./kk":"6d79","./kk.js":"6d79","./km":"e81d","./km.js":"e81d","./kn":"3e92","./kn.js":"3e92","./ko":"22f8","./ko.js":"22f8","./ku":"2421","./ku.js":"2421","./ky":"9609","./ky.js":"9609","./lb":"440c","./lb.js":"440c","./lo":"b29d","./lo.js":"b29d","./lt":"26f9","./lt.js":"26f9","./lv":"b97c","./lv.js":"b97c","./me":"293c","./me.js":"293c","./mi":"688b","./mi.js":"688b","./mk":"6909","./mk.js":"6909","./ml":"02fb","./ml.js":"02fb","./mn":"958b","./mn.js":"958b","./mr":"39bd","./mr.js":"39bd","./ms":"ebe4","./ms-my":"6403","./ms-my.js":"6403","./ms.js":"ebe4","./mt":"1b45","./mt.js":"1b45","./my":"8689","./my.js":"8689","./nb":"6ce3","./nb.js":"6ce3","./ne":"3a39","./ne.js":"3a39","./nl":"facd","./nl-be":"db29","./nl-be.js":"db29","./nl.js":"facd","./nn":"b84c","./nn.js":"b84c","./oc-lnc":"167b","./oc-lnc.js":"167b","./pa-in":"f3ff","./pa-in.js":"f3ff","./pl":"8d57","./pl.js":"8d57","./pt":"f260","./pt-br":"d2d4","./pt-br.js":"d2d4","./pt.js":"f260","./ro":"972c","./ro.js":"972c","./ru":"957c","./ru.js":"957c","./sd":"6784","./sd.js":"6784","./se":"ffff","./se.js":"ffff","./si":"eda5","./si.js":"eda5","./sk":"7be6","./sk.js":"7be6","./sl":"8155","./sl.js":"8155","./sq":"c8f3","./sq.js":"c8f3","./sr":"cf1e","./sr-cyrl":"13e9","./sr-cyrl.js":"13e9","./sr.js":"cf1e","./ss":"52bd","./ss.js":"52bd","./sv":"5fbd","./sv.js":"5fbd","./sw":"74dc","./sw.js":"74dc","./ta":"3de5","./ta.js":"3de5","./te":"5cbb","./te.js":"5cbb","./tet":"576c","./tet.js":"576c","./tg":"3b1b","./tg.js":"3b1b","./th":"10e8","./th.js":"10e8","./tk":"5aff","./tk.js":"5aff","./tl-ph":"0f38","./tl-ph.js":"0f38","./tlh":"cf75","./tlh.js":"cf75","./tr":"0e81","./tr.js":"0e81","./tzl":"cf51","./tzl.js":"cf51","./tzm":"c109","./tzm-latn":"b53d","./tzm-latn.js":"b53d","./tzm.js":"c109","./ug-cn":"6117","./ug-cn.js":"6117","./uk":"ada2","./uk.js":"ada2","./ur":"5294","./ur.js":"5294","./uz":"2e8c","./uz-latn":"010e","./uz-latn.js":"010e","./uz.js":"2e8c","./vi":"2921","./vi.js":"2921","./x-pseudo":"fd7e","./x-pseudo.js":"fd7e","./yo":"7f33","./yo.js":"7f33","./zh-cn":"5c3a","./zh-cn.js":"5c3a","./zh-hk":"49ab","./zh-hk.js":"49ab","./zh-mo":"3a6c","./zh-mo.js":"3a6c","./zh-tw":"90ea","./zh-tw.js":"90ea"};function a(t){var e=o(t);return s(e)}function o(t){if(!s.o(i,t)){var e=new Error("Cannot find module '"+t+"'");throw e.code="MODULE_NOT_FOUND",e}return i[t]}a.keys=function(){return Object.keys(i)},a.resolve=o,t.exports=a,a.id="4678"},"65c2":function(t,e,s){"use strict";var i=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",[t.isAuthUser?t._e():s("q-icon",{staticClass:"q-mr-sm",attrs:{color:"secondary",name:"far fa-thumbs-up",size:"1.5em"}}),s("q-btn",{directives:[{name:"show",rawName:"v-show",value:!t.isLiked&&t.isAuthUser,expression:"!isLiked && isAuthUser"}],staticStyle:{"font-size":"0.75rem"},attrs:{flat:"",round:"",color:"secondary",icon:"far fa-thumbs-up"},on:{click:t.likeHandler}}),s("q-btn",{directives:[{name:"show",rawName:"v-show",value:t.isLiked&&t.isAuthUser,expression:"isLiked && isAuthUser"}],staticStyle:{"font-size":"0.75rem"},attrs:{flat:"",round:"",color:"secondary",icon:"fas fa-thumbs-up"},on:{click:t.unlikeHandler}}),s("span",[t._v("\n    "+t._s(t.likes)+" likes\n  ")])],1)},a=[],o=(s("e6cf"),s("1c16")),n=s("8c56"),c={name:"Likes",props:["post"],data(){return{likes:0,isLiked:!1,isAuthUser:!1,authUserInfo:[],userLikeId:""}},mounted(){this.authUserInfo=this.$store.getters["example/getAuthUser"],this.isAuthUser=this.authUserInfo,this.likes=this.post.likes,this.isAuthUser&&this.isUserLikedPost()},methods:{unlikeHandler:Object(o["a"])((async function(){if(!this.isLiked||!this.isAuthUser)return;let t=n["a"].firestore(),e=this.likes-1;await t.collection("likes").doc(this.userLikeId).delete();await t.collection("posts").doc(this.post.id).update({likes:e}).then((()=>{this.likes--,this.isLiked=!1})).catch((t=>{console.log(t)}))}),300),likeHandler:Object(o["a"])((async function(){if(this.isLiked||!this.isAuthUser)return;let t=n["a"].firestore();console.log(this);let{uid:e,displayName:s,photoURL:i}=this.authUserInfo,a=this.likes+1,o=await t.collection("likes").add({userId:e,userName:s,photoURL:i,postId:this.post.id});this.userLikeId=await o.id,await t.collection("posts").doc(this.post.id).update({likes:a}).then((()=>{this.likes++,this.isLiked=!0})).catch((t=>{console.log(t)}))}),300),async isUserLikedPost(){let t=n["a"].firestore(),e=await t.collection("likes").where("userId","==",this.isAuthUser.uid).where("postId","==",this.post.id).get();await!e.empty&&(this.userLikeId=e.docs[0].id,this.isLiked=!0)}}},r=c,l=s("2877"),d=s("0016"),m=s("9c40"),u=s("eebe"),h=s.n(u),p=Object(l["a"])(r,i,a,!1,null,null,null);e["a"]=p.exports;h()(p,"components",{QIcon:d["a"],QBtn:m["a"]})},"6b75":function(t,e,s){},"9b5e":function(t,e,s){},a1f6:function(t,e,s){},cd32:function(t,e,s){"use strict";s("a1f6")}}]);