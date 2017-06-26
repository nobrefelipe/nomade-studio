<template>

  <div id="app">

    <left-bar v-click-outside="closeNav"></left-bar>

    <transition mode="out-in" :name="mainTransition">

       <router-view></router-view>

    </transition>

  </div>

</template>

<script>

import LeftBar from './components/shared/left-bar';

export default {

  name: 'app',

  components: { LeftBar },

  data(){
    return{

        mainTransition: 'fade',

    }
  },

  watch: {

    // LETS WATCH FOR ROUTE CHANGES
    '$route' (to, from) {

      //If exiting Home Page, use its own page transition
      if( from.name == 'Home'){  this.mainTransition = 'from-home';}

      //Otherwise use fade in/out
      else{ this.mainTransition = 'fade'; }

    }

  },


  methods:{


    // WILL CLOSE THE NAVIGATION IF USER CLICKS OUTSIDE IT
    closeNav(){

        let navBar = document.getElementById('leftBar');

        if(navBar.classList.contains("menu-is-opened")){

          navBar.classList.remove('menu-is-opened');

        }

    }

  }

}

</script>
