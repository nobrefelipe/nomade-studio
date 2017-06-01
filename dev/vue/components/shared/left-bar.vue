<template lang="html">


  <section class="navBar">

    <!-- LOGO -->
    <router-link to="/" id="logo">

      <svg role="img" title="SN">
       <use xlink:href="./static/svg/svgstore.svg#logo"/>
      </svg>

      <span> &lt;studio-nomade/&gt; </span>

    </router-link>


    <nav-trigger></nav-trigger>


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

  import NavTrigger from './nav-trigger';

  export default  {

    name: 'left-bar',

    components:{

      NavTrigger

    },

  }

</script>
