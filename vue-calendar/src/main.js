import vuetify from './plugins/vuetify';
import firebase from "firebase";
import App from "./App.vue";
import Vue from 'vue'
import TextareaAutosize from 'vue-textarea-autosize'

Vue.use(Vue.vueTextAreaAutosize)

Vue.config.productionTip = false

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

new Vue({
    vuetify,
    render: h => h(App)
}).$mount('#app')