<template>

  <div id="app">

    <left-bar></left-bar>

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

        mainTransition: 'fade'

    }
  },

  watch: {

    '$route' (to, from) {

      console.log(from.name)

      let setTransition = '';

      if( from.name == 'Home'){  this.mainTransition = 'from-home';}

      else{ this.mainTransition = 'fade'; }


    }

  }

}

</script>
