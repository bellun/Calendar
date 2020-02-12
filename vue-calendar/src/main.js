import Vue from 'vue'
import App from './App.vue'
import vuetify from './plugins/vuetify';
import router from './router'
import vueTextAreaAutosize from 'vue-textarea-autosize';
import firebase from 'firebase/app';
import 'firebase/firestore';

Vue.use(Vue.vueTextAreaAutosize);

firebase.initializeApp({
    apiKey: "AIzaSyCmf_bmpg4Zq12jgH8VlylxIjFAdinFa6w",
    authDomain: "vue-calendar-4ae09.firebaseapp.com",
    databaseURL: "https://vue-calendar-4ae09.firebaseio.com",
    projectId: "vue-calendar-4ae09",
    storageBucket: "vue-calendar-4ae09.appspot.com",
    messagingSenderId: "704670923903",
    appId: "1:704670923903:web:d1c636fc6999bf8050d34a",
    measurementId: "G-NSGL1M9EFM"
});

export const db = firebase.firestore();

Vue.config.productionTip = false

new Vue({
    vuetify,
    router,
    render: h => h(App)
}).$mount('#app')