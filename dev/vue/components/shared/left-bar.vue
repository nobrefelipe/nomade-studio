<template lang="html">


  <section class="navBar">

    <!-- LOGO -->
    <router-link to="/" id="logo">

      <svg role="img" title="SN">
       <use xlink:href="./static/svg/svgstore.svg#logo"/>
      </svg>

      <span> &lt;studio-nomade/&gt; </span>

    </router-link>



    <div class="menuOpener" @click="openNav($event)">

      <span></span>
      <span></span>
      <span></span>

      <div>MENU</div>

    </div>


    <!-- SOCIAL NAV -->
    <nav class="socialNav">

      <a href="https://github.com/nobrefelipe" title="GITHUB" target="_blank">

        <svg role="img" title="Github">
          <use xlink:href="./static/svg/svgstore.svg#github"/>
        </svg>

      </a>

      <a href="http://instagram.com/canalnomade" title="INSTAGRAM" target="_blank">

        <svg role="img" title="Instagram">
          <use xlink:href="./static/svg/svgstore.svg#instagram"/>
        </svg>

      </a>

    </nav>




  </section>



</template>



<script lang="js">

  export default  {

    name: 'left-bar',

    props: [],

    mounted() {

    },

    data() {

      return {

      }

    },

    methods: {

      openNav(e){

        let navBar = this.$el;

        navBar.classList.toggle('menu-is-opened');

      }

    },

    computed: {

    }

}
</script>
