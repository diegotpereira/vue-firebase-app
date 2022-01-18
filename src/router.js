import Vue from "vue"
import Router from 'vue-router'

import Home from '@/views/Home'
import Entrar from '@/views/Entrar'
import Inscrever from '@/views/Inscrever'

Vue.use(Router)

export default new Router({

    routes: [{
            path: '/home',
            name: 'home',
            component: Home
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
        }
    ]
})