<template lang="html">


  <section class="navBar">

    <!-- LOGO -->
    <router-link to="/" id="logo">

      <svg role="img" title="SN">
       <use xlink:href="./static/svg/svgstore.svg#logo"/>
      </svg>

      <span> &lt;studio-nomade/&gt; </span>

    </router-link>


    <!-- MAIN NAV -->
    <nav class="mainNav">

      <router-link to="/photography" title="PHOTOGRAPHY">photography</router-link>

      <router-link to="/web-development" title="WEB DEVELOPMENT">web development</router-link>


      <router-link to="/about" title="ABOUT ME" class="is-only__small">about</router-link>

      <a href="mailto:felipe@nomade.studio" title="HIRE ME"  class="is-only__small">hire me</a>

    </nav>



    <div class="navBar-bottom">

      <!-- SECONDARY NAV -->
      <nav class="secondaryNav is-hidden__small">

        <router-link to="/about" title="ABOUT ME">about</router-link>

        <a href="mailto:felipe@nomade.studio" title="HIRE ME">hire me</a>

      </nav>


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

    </div>



  </section>

</template>



<script lang="js">

  export default  {
    name: 'nav-bar',
    props: [],
    mounted() {

    },
    data() {
      return {

      }
    },
    methods: {

    },
    computed: {

    }
}
</script>

<style scoped lang="scss">
  .nav-bar {

  }
</style>
