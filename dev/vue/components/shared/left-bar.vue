
<template lang="html">


  <section class="leftBar">


    <!-- LOGO -->
    <router-link to="/" id="logo">

      <svg role="img" title="SN">
       <use xlink:href="./static/svg/svgstore.svg#logo"/>
      </svg>

      <span> &lt;studio-nomade/&gt; </span>

    </router-link>


    <!-- NAV ICON -->
    <nav-trigger></nav-trigger>


    <!-- MAIN NAV -->
    <nav class="mainNav">

      <router-link to="/photography" title="PHOTOGRAPHY" @click.native="onNavigate()">photography</router-link>

      <router-link to="/web-development" title="WEB DEVELOPMENT" @click.native="onNavigate()">web development</router-link>

      <a href="mailto:felipe@nomade.studio" title="HIRE ME" @click.native="onNavigate()">hire me</a>

      <router-link to="/about" title="ABOUT ME" @click.native="onNavigate()">about</router-link>

    </nav>


    <!-- SOCIAL-->
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

    methods:{

      onNavigate(){

        this.$el.classList.remove('menu-is-opened');

      }

    }

  }

</script>