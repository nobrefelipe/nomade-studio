
import Vue from 'vue';
import Vuex from 'vuex';
import App from './App';
import router from './router';
import store from './store/store';
import ClickOutside from './directives/click-outside';
import VueLazyload from 'vue-lazyload';


Vue.use(Vuex);


/*
  VUE LAZYLOAD OPTION
*/
Vue.use(VueLazyload, {

  preLoad: 1.3,

  loading: 'static/svg/spin.svg',

  attempt: 1

});



Vue.config.productionTip = false;

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
