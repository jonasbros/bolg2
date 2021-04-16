(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[8],{

/***/ "2f23":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _node_modules_mini_css_extract_plugin_dist_loader_js_ref_8_oneOf_2_0_node_modules_css_loader_dist_cjs_js_ref_8_oneOf_2_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_8_oneOf_2_2_node_modules_sass_loader_dist_cjs_js_ref_8_oneOf_2_3_node_modules_quasar_app_lib_webpack_loader_quasar_scss_variables_js_node_modules_quasar_app_lib_webpack_loader_auto_import_client_js_kebab_node_modules_vue_loader_lib_index_js_vue_loader_options_NewPost_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("9222");
/* harmony import */ var _node_modules_mini_css_extract_plugin_dist_loader_js_ref_8_oneOf_2_0_node_modules_css_loader_dist_cjs_js_ref_8_oneOf_2_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_8_oneOf_2_2_node_modules_sass_loader_dist_cjs_js_ref_8_oneOf_2_3_node_modules_quasar_app_lib_webpack_loader_quasar_scss_variables_js_node_modules_quasar_app_lib_webpack_loader_auto_import_client_js_kebab_node_modules_vue_loader_lib_index_js_vue_loader_options_NewPost_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_mini_css_extract_plugin_dist_loader_js_ref_8_oneOf_2_0_node_modules_css_loader_dist_cjs_js_ref_8_oneOf_2_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_8_oneOf_2_2_node_modules_sass_loader_dist_cjs_js_ref_8_oneOf_2_3_node_modules_quasar_app_lib_webpack_loader_quasar_scss_variables_js_node_modules_quasar_app_lib_webpack_loader_auto_import_client_js_kebab_node_modules_vue_loader_lib_index_js_vue_loader_options_NewPost_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0__);
/* unused harmony reexport * */


/***/ }),

/***/ "9222":
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ "d306":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/@quasar/app/lib/webpack/loader.auto-import-client.js?kebab!./node_modules/vue-loader/lib??vue-loader-options!./src/pages/NewPost.vue?vue&type=template&id=141a6891&
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('q-page',{attrs:{"padding":""}},[_c('div',{staticClass:"row justify-center q-mt-xl"},[_c('div',{staticClass:"col-lg-6 col-md-8 col-sm-10 col-xs-12"},[_c('q-form',{staticClass:"q-gutter-md",attrs:{"autocorrect":"off","autocapitalize":"off","autocomplete":"off","spellcheck":"false"},on:{"submit":function($event){$event.preventDefault();return _vm.onSubmit($event)}}},[_c('q-input',{attrs:{"label":"Title","lazy-rules":"ondemand","outlined":"","color":"secondary","rules":[ function (val) { return val && val.length > 0 || 'Please type something'; } ]},model:{value:(_vm.title),callback:function ($$v) {_vm.title=$$v},expression:"title"}}),_c('q-editor',{attrs:{"dense":_vm.$q.screen.lt.md,"toolbar":[
            [
              {
                label: _vm.$q.lang.editor.align,
                icon: _vm.$q.iconSet.editor.align,
                fixedLabel: true,
                list: 'only-icons',
                options: ['left', 'center', 'right', 'justify']
              },
              {
                label: _vm.$q.lang.editor.align,
                icon: _vm.$q.iconSet.editor.align,
                fixedLabel: true,
                options: ['left', 'center', 'right', 'justify']
              }
            ],
            ['bold', 'italic', 'strike', 'underline', 'subscript', 'superscript'],
            ['token', 'hr', 'link', 'custom_btn'],
            ['print', 'fullscreen'],
            [
              {
                label: _vm.$q.lang.editor.formatting,
                icon: _vm.$q.iconSet.editor.formatting,
                list: 'no-icons',
                options: [
                  'p',
                  'h1',
                  'h2',
                  'h3',
                  'h4',
                  'h5',
                  'h6',
                  'code'
                ]
              },
              {
                label: _vm.$q.lang.editor.fontSize,
                icon: _vm.$q.iconSet.editor.fontSize,
                fixedLabel: true,
                fixedIcon: true,
                list: 'no-icons',
                options: [
                  'size-1',
                  'size-2',
                  'size-3',
                  'size-4',
                  'size-5',
                  'size-6',
                  'size-7'
                ]
              },
              {
                label: _vm.$q.lang.editor.defaultFont,
                icon: _vm.$q.iconSet.editor.font,
                fixedIcon: true,
                list: 'no-icons',
                options: [
                  'default_font',
                  'arial',
                  'arial_black',
                  'comic_sans',
                  'courier_new',
                  'impact',
                  'lucida_grande',
                  'times_new_roman',
                  'verdana'
                ]
              },
              'removeFormat'
            ],
            ['quote', 'unordered', 'ordered', 'outdent', 'indent'],

            ['undo', 'redo'],
            ['viewsource']
          ],"fonts":{
            arial: 'Arial',
            arial_black: 'Arial Black',
            comic_sans: 'Comic Sans MS',
            courier_new: 'Courier New',
            impact: 'Impact',
            lucida_grande: 'Lucida Grande',
            times_new_roman: 'Times New Roman',
            verdana: 'Verdana'
          }},model:{value:(_vm.body),callback:function ($$v) {_vm.body=$$v},expression:"body"}}),_c('q-input',{attrs:{"outlined":"","color":"secondary","label":"Excerpt","lazy-rules":"ondemand","autogrow":"","rules":[ function (val) { return val && val.length > 0 || 'Please type something'; }]},model:{value:(_vm.excerpt),callback:function ($$v) {_vm.excerpt=$$v},expression:"excerpt"}}),_c('q-input',{attrs:{"outlined":"","color":"secondary","label":"Tags","hint":"Press TAB to add tag"},on:{"keydown":function($event){if(!$event.type.indexOf('key')&&_vm._k($event.keyCode,"tab",9,$event.key,"Tab")){ return null; }$event.preventDefault();return _vm.addTags($event)}}}),_vm._l((_vm.tags),function(tag,index){return _c('q-chip',{key:tag + index},[_vm._v("\n          #"+_vm._s(tag)+"\n        ")])}),_c('q-uploader',{staticStyle:{"max-width":"100%"},attrs:{"label":"Upload Header Photo","accept":".jpg, image/*","color":"secondary","hide-upload-btn":"","flat":""},on:{"rejected":_vm.onRejected,"added":_vm.imageAdded}}),_c('div',[_c('q-btn',{attrs:{"label":"Submit","type":"submit","color":"secondary","loading":_vm.disableButton,"disable":_vm.disableButton}})],1)],2)],1)])])}
var staticRenderFns = []


// CONCATENATED MODULE: ./src/pages/NewPost.vue?vue&type=template&id=141a6891&

// EXTERNAL MODULE: ./node_modules/core-js/modules/es.string.replace.js
var es_string_replace = __webpack_require__("5319");

// EXTERNAL MODULE: ./node_modules/core-js/modules/web.dom-collections.iterator.js
var web_dom_collections_iterator = __webpack_require__("ddb0");

// EXTERNAL MODULE: ./node_modules/core-js/modules/es.promise.js
var es_promise = __webpack_require__("e6cf");

// EXTERNAL MODULE: ./node_modules/core-js/modules/es.string.trim.js
var es_string_trim = __webpack_require__("498a");

// EXTERNAL MODULE: ./src/firebase/config.js
var config = __webpack_require__("8c56");

// EXTERNAL MODULE: ./node_modules/image-conversion/index.js
var image_conversion = __webpack_require__("ba9f");

// CONCATENATED MODULE: ./node_modules/@quasar/app/lib/webpack/loader.transform-quasar-imports.js!./node_modules/babel-loader/lib??ref--2-0!./node_modules/@quasar/app/lib/webpack/loader.auto-import-client.js?kebab!./node_modules/vue-loader/lib??vue-loader-options!./src/pages/NewPost.vue?vue&type=script&lang=js&




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


/* harmony default export */ var NewPostvue_type_script_lang_js_ = ({
  name: 'NewPost',

  data() {
    return {
      title: '',
      body: '',
      picture: '',
      excerpt: '',
      disableButton: false,
      tags: []
    };
  },

  computed: {
    keywords() {
      let keywords = [];
      let duplicateCapitalizedWords = [];
      keywords = this.title.split(" ").filter(word => {
        let nonKeywords = ['and', 'the', 'The', 'And'];
        return word.length >= 3 && !nonKeywords.includes(word);
      }).map(word => {
        if (/[A-Z]/.test(word.charAt(0))) {
          duplicateCapitalizedWords.push(word);
        }

        return word.replace(/[^a-zA-Z0-9]/g, '').toLowerCase();
      });
      keywords.push(...duplicateCapitalizedWords);
      return keywords;
    }

  },
  methods: {
    async onSubmit() {
      //body is blank
      if (!this.body) {
        this.$q.notify({
          type: 'negative',
          message: 'Please type something in the body.'
        });
        return;
      } //body is not blank


      let db = config["a" /* firebase */].firestore();
      let userInfo = this.$store.getters['example/getAuthUser'];
      console.log(this.keywords);
      this.$q.loading.show();
      this.disableButton = true; // save

      await db.collection('posts').add({
        title: this.title.trim(),
        body: this.body,
        postPicture: this.picture,
        comments: 0,
        likes: 0,
        createdAt: Object(config["c" /* timestamp */])(),
        userId: userInfo.uid,
        userName: userInfo.displayName,
        userPicture: userInfo.photoURL,
        excerpt: this.excerpt,
        slug: this.title.replaceAll(" ", "-"),
        tags: this.tags,
        keywords: this.keywords
      }); // after save

      this.$q.loading.hide();
      this.disableButton = false;
      this.$router.push({
        name: 'Home'
      });
    },

    async imageAdded(imageFile) {
      let imageId = new Date().valueOf();
      let storageRef = config["a" /* firebase */].storage().ref(`photos/${imageId}.jpg`); //added photo

      this.disableButton = true; //compress photo

      let compressedPhoto = await Object(image_conversion["compress"])(imageFile[0], {
        quality: 0.8,
        type: "image/jpeg",
        scale: 0.75
      }); //upload photo

      let imageSnap = await storageRef.put(compressedPhoto, {
        contentType: 'image/jpeg'
      }); //get photo download URL

      this.picture = await imageSnap.ref.getDownloadURL();
      this.disableButton = false;
    },

    onRejected() {
      this.$q.notify({
        type: 'negative',
        message: 'Only images are allowed'
      });
    },

    addTags(e) {
      if (e.target.value) {
        this.tags.push(e.target.value);
        e.target.value = "";
      }
    }

  }
});
// CONCATENATED MODULE: ./src/pages/NewPost.vue?vue&type=script&lang=js&
 /* harmony default export */ var pages_NewPostvue_type_script_lang_js_ = (NewPostvue_type_script_lang_js_); 
// EXTERNAL MODULE: ./src/pages/NewPost.vue?vue&type=style&index=0&lang=scss&
var NewPostvue_type_style_index_0_lang_scss_ = __webpack_require__("2f23");

// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__("2877");

// EXTERNAL MODULE: ./node_modules/quasar/src/components/page/QPage.js
var QPage = __webpack_require__("9989");

// EXTERNAL MODULE: ./node_modules/quasar/src/components/form/QForm.js
var QForm = __webpack_require__("0378");

// EXTERNAL MODULE: ./node_modules/quasar/src/components/input/QInput.js + 3 modules
var QInput = __webpack_require__("27f9");

// EXTERNAL MODULE: ./node_modules/quasar/src/components/editor/QEditor.js + 16 modules
var QEditor = __webpack_require__("d66b");

// EXTERNAL MODULE: ./node_modules/quasar/src/components/chip/QChip.js
var QChip = __webpack_require__("b047");

// EXTERNAL MODULE: ./node_modules/quasar/src/components/uploader/QUploader.js + 3 modules
var QUploader = __webpack_require__("ee89");

// EXTERNAL MODULE: ./node_modules/quasar/src/components/btn/QBtn.js
var QBtn = __webpack_require__("9c40");

// EXTERNAL MODULE: ./node_modules/@quasar/app/lib/webpack/runtime.auto-import.js
var runtime_auto_import = __webpack_require__("eebe");
var runtime_auto_import_default = /*#__PURE__*/__webpack_require__.n(runtime_auto_import);

// CONCATENATED MODULE: ./src/pages/NewPost.vue






/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  pages_NewPostvue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* harmony default export */ var NewPost = __webpack_exports__["default"] = (component.exports);








runtime_auto_import_default()(component, 'components', {QPage: QPage["a" /* default */],QForm: QForm["a" /* default */],QInput: QInput["a" /* default */],QEditor: QEditor["a" /* default */],QChip: QChip["a" /* default */],QUploader: QUploader["a" /* default */],QBtn: QBtn["a" /* default */]});


/***/ })

}]);
//# sourceMappingURL=8.c7dfd438.js.map