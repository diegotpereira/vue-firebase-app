import Vue from "vue"
import Router from 'vue-router'

import Home from '@/views/Home'
import Entrar from '@/views/Entrar'
import Inscrever from '@/views/Inscrever'
import firebase from "firebase"

Vue.use(Router)

const router = new Router({

    routes: [

        {
            path: '*',
            redirect: '/entrar'
        },
        {
            path: '/',
            redirect: '/entrar'
        },

        {
            path: '/entrar',
            name: 'Entrar',
            component: Entrar
        },
        {
            path: '/inscrever',
            name: 'Inscrever',
            component: Inscrever
        },
        {
            path: '/home',
            name: 'home',
            component: Home,
            meta: {
                requiresAuth: true
            }
        }
    ]
});

router.beforeEach((to, from, next) => {
    const usuarioAtual = firebase.auth().usuarioAtual
    const requerAuth = to.matched.some(record => record.meta.requerAuth)

    if (requerAuth && !usuarioAtual) next('entrar')
    else if (!requerAuth && usuarioAtual) next('home')
    else next()
})

export default router;