import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import * as firebase from 'firebase/app'
import 'firebase/firestore'
import VueMeta from 'vue-meta'

Vue.config.productionTip = false

firebase.initializeApp({
  apiKey: 'AIzaSyATH2JKOusQhlrLBnTovIPS_uZ2uWDDZEM',
  authDomain: 'brightlynxtest.firebaseapp.com',
  databaseURL: 'https://brightlynxtest.firebaseio.com',
  projectId: 'brightlynxtest',
  storageBucket: 'brightlynxtest.appspot.com',
  messagingSenderId: '270130080273',
  appId: '1:270130080273:web:617fd18e8bb28a18',
})

Vue.use(VueMeta)

new Vue({
  router,
  store,
  render: h => h(App),
}).$mount('#app')
