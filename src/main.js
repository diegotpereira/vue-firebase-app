import Vue from 'vue'
import App from './App.vue'
import router from './router'

import firebase from 'firebase'
// import { initializeApp } from 'firebase/app';

Vue.config.productionTip = false

const config = {
    apiKey: "AIzaSyB4WJ_nspMyFA_zsSZ9ky_SoQiS2QOp70I",
    authDomain: "website-ecom-ff223.firebaseapp.com",
    databaseURL: "https://website-ecom-ff223-default-rtdb.firebaseio.com",
    projectId: "website-ecom-ff223",
    storageBucket: "website-ecom-ff223.appspot.com",
    messagingSenderId: "144186283636",
    appId: "1:144186283636:web:42f6cb687a508a429f6321",
    measurementId: "G-X0P5YCHDD8"
};

// const app = initializeApp(firebaseConfig);
firebase.initializeApp(config);

new Vue({
    router,
    render: h => h(App),
}).$mount('#app')