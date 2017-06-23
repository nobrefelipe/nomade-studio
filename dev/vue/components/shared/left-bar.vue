
<template lang="html">


  <section id="leftBar" class="leftBar">


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
    <nav class="mainNav" @click="onNavigate($event)">

      <router-link to="/photography" title="PHOTOGRAPHY">photography</router-link>

      <router-link to="/web-development" title="WEB DEVELOPMENT">web development</router-link>

      <router-link to="/lab" title="LABORATORY">laboratory</router-link>

      <router-link to="/about" title="ABOUT ME">about me</router-link>

      <a href="mailto:felipe@nomade.studio" title="HIRE ME">hire me</a>

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



<script>

  import NavTrigger from './nav-trigger';

  export default  {

    name: 'left-bar',

    components:{

      NavTrigger

    },


    methods:{

      /*
        DOM Event Delegation
        CLOSE THE NAVIGATION BAR IF USER CLICKS ON LINK ITEMS
      */
      onNavigate(e){

        // make sure the user clicks on <a> tag
        if(e.target && e.target.nodeName == "A"){

            this.$el.classList.remove('menu-is-opened');

        }

      }

    }

  }

</script>