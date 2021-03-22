import Vue from 'vue';
import VueRouter from 'vue-router';

import routes from './routes';

import { firebase } from './../firebase/config.js';

Vue.use(VueRouter)

/*
 * If not building with SSR mode, you can
 * directly export the Router instantiation;
 *
 * The function below can be async too; either use
 * async/await or return a Promise which resolves
 * with the Router instance.
 */

export default function ({ store, /* ssrContext  */}) {
  const Router = new VueRouter({
    scrollBehavior: () => ({ x: 0, y: 0 }),
    routes,

    // Leave these as they are and change in quasar.conf.js instead!
    // quasar.conf.js -> build -> vueRouterMode
    // quasar.conf.js -> build -> publicPath
    mode: process.env.VUE_ROUTER_MODE,
    base: process.env.VUE_ROUTER_BASE
  });


  Router.beforeEach((to, from, next) => {
    //check if user info is already in store
    let userFromStore = store.getters['example/getAuthUser'];
    console.log('router', userFromStore);
    //otherwise get user info 
    if( !userFromStore ) {
      firebase.auth().onAuthStateChanged((user) => {
        console.log('router', user);
        //store user to store if logged in
        if( user ) {
          let { uid, displayName, email, photoURL } = user;
          store.dispatch('example/storeUserAction', {
            uid,
            displayName,
            email,
            photoURL
          });
        } 
        //proceed regardless if user is logged in
        go(to, from, next, user);
      });
    }else {
      go(to, from, next, userFromStore);
    }

  });
  
  function go(to, from, next, user) {    
    const requiresAuth = to.matched.some(record => record.meta.requiresAuth);
    if (requiresAuth && !user){
      next('Login');
    }else{
      next();
    }
  }

  return Router
}
