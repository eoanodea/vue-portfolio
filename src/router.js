/*
 * File: router.js
 * Project: vue-portfolio
 * Version: 0.1.0
 * File Created: Tuesday, 11th February 2020 1:44:38 pm
 * Author: Eoan O'Dea - eoan@wspace.ie
 * ---------------
 * File Description: Defining routes for application
 * Last Modified: Tuesday, 11th February 2020 2:08:50 pm
 * Modified By: Eoan O'Dea - eoan@wspace.ie
 * ---------------
 * Copyright 2020 - WebSpace
 */



import Vue from 'vue'
import VueRouter from 'vue-router';
import Home from './pages/Home'
import About from './pages/About'
import Portfolio from './pages/Portfolio'
import Contact from './pages/Contact'

const routes = [
    {
        path: '/',
        name: 'home',
        component: Home
    },
    {
        path: '/about',
        name: 'about',
        component: About
    },
    {
        path: '/portfolio',
        name: 'portfolio',
        component: Portfolio
    },
    {
        path: '/contact',
        name: 'contact',
        component: Contact
    }
]

Vue.use(VueRouter)

export default new VueRouter({
    mode: 'history',
    base: process.env.BASE_URL,
    routes: routes
})