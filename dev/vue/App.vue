<template>

  <div id="app">

    <left-bar></left-bar>

    <router-view></router-view>

  </div>

</template>

<script>

import LeftBar from './components/shared/left-bar';

export default {

  name: 'app',

  components: { LeftBar }

}

</script>
