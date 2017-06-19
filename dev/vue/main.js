
/* DEFAULTS */
import Vue from 'vue';
import Vuex from 'vuex';
import App from './App';
import router from './router';
import store from './store/store';


/* MY OWN DIRECTIVES */
import ClickOutside from './directives/click-outside';



/* INSTALLED DIRECTIVES */
import VueLazyload from 'vue-lazyload';
import VueParallaxJs from 'vue-parallax-js';



/* INIT */
Vue.use(Vuex);
Vue.use(VueParallaxJs, {minWidth: 500})

//vue lazyload options
Vue.use(VueLazyload, {

  preLoad: 1.3,

  loading: 'static/svg/spin.svg',

  attempt: 1

});


new Vue({

  el: '#app',

  router,

  store,

  directives:{

    ClickOutside

  },

  template: '<App/>',

  components: { App }

});
