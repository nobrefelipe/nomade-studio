
import Vue from 'vue';
import Vuex from 'vuex';
import App from './App';
import router from './router';
import store from './store/store';
import ClickOutside from './directives/click-outside';


Vue.use(Vuex);


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
