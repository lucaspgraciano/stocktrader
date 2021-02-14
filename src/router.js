import Vue from 'vue'
import Router from 'vue-router'

import Home from './components/home'
import Portfolio from './components/portfolio/portfolio'
import Stocks from './components/stock/stocks'

Vue.use(Router)

export default new Router({
    mode: 'history',
    routes: [
        { path: '/', component: Home },
        { path: '/portfolio', component: Portfolio },
        { path: '/stocks', component: Stocks },
    ]
})