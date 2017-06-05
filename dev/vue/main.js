
import Vue from 'vue';
import App from './App';
import router from './router';
import ClickOutside from './directives/click-outside';


Vue.config.productionTip = false;

new Vue({

  el: '#app',

  router,

  directives:{

    ClickOutside

  },

  template: '<App/>',

  components: { App }

});
