(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[10],{

/***/ "013f":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/@quasar/app/lib/webpack/loader.auto-import-client.js?kebab!./node_modules/vue-loader/lib??vue-loader-options!./src/pages/Login.vue?vue&type=template&id=41d2c8aa&
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('q-page',{staticClass:"flex items-center justify-center",attrs:{"padding":""}},[_c('q-btn',{staticClass:"q-mb-xl",attrs:{"color":"secondary","size":"lg","icon":"fab fa-google","label":"Sign in with Google"},on:{"click":_vm.signInWithGoogle}})],1)}
var staticRenderFns = []


// CONCATENATED MODULE: ./src/pages/Login.vue?vue&type=template&id=41d2c8aa&

// EXTERNAL MODULE: ./node_modules/core-js/modules/es.promise.js
var es_promise = __webpack_require__("e6cf");

// EXTERNAL MODULE: ./src/firebase/config.js
var config = __webpack_require__("8c56");

// CONCATENATED MODULE: ./node_modules/@quasar/app/lib/webpack/loader.transform-quasar-imports.js!./node_modules/babel-loader/lib??ref--2-0!./node_modules/@quasar/app/lib/webpack/loader.auto-import-client.js?kebab!./node_modules/vue-loader/lib??vue-loader-options!./src/pages/Login.vue?vue&type=script&lang=js&

//
//
//
//
//
//
//
//
//
//
//
//
//
//
//

/* harmony default export */ var Loginvue_type_script_lang_js_ = ({
  name: 'Login',

  data() {
    return {
      user: [],
      isAuthUser: null
    };
  },

  async mounted() {
    //if user auth
    this.isAuthUser = this.$store.getters['example/getAuthUser'];

    if (this.isAuthUser) {
      this.$router.push({
        name: 'Home'
      });
    }
  },

  methods: {
    async signInWithGoogle() {
      let db = config["a" /* firebase */].firestore();
      let result = await config["a" /* firebase */].auth().signInWithPopup(config["b" /* googleProvider */]);
      let {
        uid,
        displayName,
        email,
        photoURL
      } = await result.user;
      this.user = {
        uid: uid,
        displayName: displayName,
        email: email,
        photoURL: photoURL
      }; //save to userinfo to db

      let user = await db.collection('users').doc(this.user.uid).get();

      if (!user.exists) {
        await db.collection('users').doc(this.user.uid).set(this.user);
      }

      this.$router.push({
        name: 'Home'
      });
    }

  }
});
// CONCATENATED MODULE: ./src/pages/Login.vue?vue&type=script&lang=js&
 /* harmony default export */ var pages_Loginvue_type_script_lang_js_ = (Loginvue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__("2877");

// EXTERNAL MODULE: ./node_modules/quasar/src/components/page/QPage.js
var QPage = __webpack_require__("9989");

// EXTERNAL MODULE: ./node_modules/quasar/src/components/btn/QBtn.js
var QBtn = __webpack_require__("9c40");

// EXTERNAL MODULE: ./node_modules/@quasar/app/lib/webpack/runtime.auto-import.js
var runtime_auto_import = __webpack_require__("eebe");
var runtime_auto_import_default = /*#__PURE__*/__webpack_require__.n(runtime_auto_import);

// CONCATENATED MODULE: ./src/pages/Login.vue





/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  pages_Loginvue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* harmony default export */ var Login = __webpack_exports__["default"] = (component.exports);



runtime_auto_import_default()(component, 'components', {QPage: QPage["a" /* default */],QBtn: QBtn["a" /* default */]});


/***/ })

}]);
//# sourceMappingURL=10.a3ef54b2.js.map