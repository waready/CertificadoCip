// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'

import BootstrapVue from 'bootstrap-vue'
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'

Vue.use(BootstrapVue)

import firebase from 'firebase';
import 'firebase/firestore';
import firebaseConfig from '@/config/firebase';
firebase.initializeApp(firebaseConfig);

const firestore = firebase.firestore();

export const db = firestore;




Vue.config.productionTip = false

let app = null
firebase.auth().onAuthStateChanged(()=>{})

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>',
  
})
