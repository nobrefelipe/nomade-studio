
import Vue from 'vue';
import Router from 'vue-router';


import Home from '../components/pages/home/index.vue';
import Photography from '../components/pages/photography/index.vue';
import WebDevelopment from '../components/pages/web-development/index.vue';
import About from '../components/pages/about/index.vue';
import Lab from '../components/pages/laboratory/index.vue';

Vue.use(Router);

export default new Router({

  mode: 'history',

  routes: [

    {

      path: '/',
      name: 'Home',
      component: Home

    },

    {

      path: '/photography',
      name: 'photography',
      component: Photography

    },

    {

      path: '/web-development',
      name: 'web-development',
      component: WebDevelopment

    },

    {

      path: '/lab',
      name: 'lab',
      component: Lab

    },

    {

      path: '/about',
      name: 'about',
      component: About

    }

  ]

})
