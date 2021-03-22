<template>
  <q-page padding>
    <div class="row justify-center text-center">
      <div class="col-7">
        <h1 class="text-weight-bold text-h2">New Post</h1>
      </div>
    </div>

    <div class="row justify-center">
      <div class="col-5">
        <q-form
          autocorrect="off"
          autocapitalize="off"
          autocomplete="off"
          spellcheck="false"
          @submit.prevent="onSubmit"
          class="q-gutter-md"
        >
          <q-input
            outlined
            v-model="title"
            label="Title"
            lazy-rules="ondemand"
            :rules="[ val => val && val.length > 0 || 'Please type something']"
          />

          <q-editor
            v-model="body"
            :dense="$q.screen.lt.md"
            :toolbar="[
              [
                {
                  label: $q.lang.editor.align,
                  icon: $q.iconSet.editor.align,
                  fixedLabel: true,
                  list: 'only-icons',
                  options: ['left', 'center', 'right', 'justify']
                },
                {
                  label: $q.lang.editor.align,
                  icon: $q.iconSet.editor.align,
                  fixedLabel: true,
                  options: ['left', 'center', 'right', 'justify']
                }
              ],
              ['bold', 'italic', 'strike', 'underline', 'subscript', 'superscript'],
              ['token', 'hr', 'link', 'custom_btn'],
              ['print', 'fullscreen'],
              [
                {
                  label: $q.lang.editor.formatting,
                  icon: $q.iconSet.editor.formatting,
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
                  label: $q.lang.editor.fontSize,
                  icon: $q.iconSet.editor.fontSize,
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
                  label: $q.lang.editor.defaultFont,
                  icon: $q.iconSet.editor.font,
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
            ]"
            :fonts="{
              arial: 'Arial',
              arial_black: 'Arial Black',
              comic_sans: 'Comic Sans MS',
              courier_new: 'Courier New',
              impact: 'Impact',
              lucida_grande: 'Lucida Grande',
              times_new_roman: 'Times New Roman',
              verdana: 'Verdana'
            }"
          />

          <q-input
            outlined
            v-model="excerpt"
            label="Excerpt"
            lazy-rules="ondemand"
            autogrow
            :rules="[ val => val && val.length > 0 || 'Please type something']"
          />

          <q-input
            outlined
            @keydown.tab.prevent="addTags"
            label="Tags"
            hint="Press tab to add tag"
          />

          <q-chip v-for="(tag, index) in tags" :key="tag + index">
            {{ tag }}
          </q-chip>


          <q-uploader
            style="max-width: 100%"
            label="Upload Header Photo"
            accept=".jpg, image/*"
            hide-upload-btn
            flat
            @rejected="onRejected"
            @added="imageAdded"
          />

          <div>
            <q-btn 
              label="Submit"
              type="submit"
              color="primary"
              :loading="disableButton"
              :disable="disableButton"
            />
              
          </div>
        </q-form>
      </div>
    </div>
  </q-page>
</template>

<script>
import { firebase, timestamp } from './../firebase/config.js';
import { compress } from 'image-conversion';

export default {
  name: 'NewPost',
  data() {
    return {
      title: '',
      body: '',
      picture: '',
      excerpt: '',
      disableButton: false,
      tags: [],
    }
  },
  computed: {
    keywords() {
      let keywords = [];
      let duplicateCapitalizedWords = [];

      keywords = this.title
        .split(" ")
        .filter((word) => {
          let nonKeywords = ['and', 'the', 'The', 'And'];
          return ( word.length >= 3 && !nonKeywords.includes(word) );
        })
        .map((word) => {
          if( /[A-Z]/.test(word.charAt(0)) ) {
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
      if( !this.body ) {
        this.$q.notify({
          type: 'negative',
          message: 'Please type something in the body.'
        });

        return;
      }
      //body is not blank
      let db = firebase.firestore();
      let userInfo = this.$store.getters['example/getAuthUser'];
      console.log(this.keywords);
      this.$q.loading.show();
      this.disableButton = true;
      // save
      await db.collection('posts').add({
        title: this.title.trim(),
        body: this.body,
        postPicture: this.picture,
        comments: 0,
        likes: 0,
        createdAt: timestamp(),
        userId: userInfo.uid,
        userName: userInfo.displayName,
        userPicture: userInfo.photoURL,
        excerpt: this.excerpt,
        slug: this.title.replaceAll(" ", "-"),
        tags: this.tags,
        keywords: this.keywords,
      });
      // after save
      this.$q.loading.hide();
      this.disableButton = false;
      this.$router.push({ name: 'Home' });
    },
    async imageAdded(imageFile) {
      let imageId = new Date().valueOf();
      let storageRef = firebase.storage().ref(`photos/${imageId}.jpg`);
      //added photo
      this.disableButton = true;
      //compress photo
      let compressedPhoto = await compress(imageFile[0], {
        quality: 0.8,
        type: "image/jpeg",
        scale: 0.5,
      });
      //upload photo
      let imageSnap = await storageRef.put(compressedPhoto, { contentType: 'image/jpeg' });
      //get photo download URL
      this.picture = await imageSnap.ref.getDownloadURL();
      this.disableButton = false;
    },
    onRejected() {
      this.$q.notify({
        type: 'negative',
        message: 'Only images are allowed'
      }) 
    },
    addTags(e) {
      if( e.target.value ) {
        this.tags.push(e.target.value);
        e.target.value = "";
      }
    }
  }
}
</script>

<style lang="scss">
  .q-uploader {
    width: auto;
  }

  .q-uploader__subtitle {
    display: none;
  }

  .q-uploader__list.scroll {
    padding-left: 0;
    padding-right: 0;
  }
</style>