<template lang="html">

  <div class="navTrigger" @click="openNav($event)">

    <span></span> <span></span> <span></span>

    <div>MENU</div>

  </div>

</template>



<script lang="js">

  export default  {

    name: 'nav-bar',

    methods: {

      openNav(e){

        let navBar = this.$el.parentNode;

        navBar.classList.toggle('menu-is-opened');

      }

    },

}
</script>

<style scoped lang="scss">

  $pink: #D04058;
  $grey: #4A4A4A;

  .navTrigger{

    position: relative;

    margin-top: auto;

    margin-bottom: auto;

    margin-right: -35px;

    cursor: pointer;

    width: 60px;

    height: 30px;

    transition: all .3s ease-in;


    div{

      position: absolute;

      top: 4px;

      right: -40px;

      font-size: 11px;

      font-weight: 400;

      transform: rotate(-90deg) translateY(-50%);

      transition: all .3s ease-in;

    }


    span{

      position: absolute;

      right: 0;

      height: 3px;

      background: $grey;

      transition: all .3s ease-in;

      &:first-of-type{

        width: 26px;

        top: 0;

      }

      &:nth-child(2){

        width: 38px;

        top: 9px;

      }

      &:last-of-type{

        width: 23px;

        top: 18px;

      }

    }


    &:hover{

      span{

        background: $pink;

      }//span

    }//:hover


    .menu-is-opened &{

      margin-right: 5px;


      div{

        right: -21px;

        color: $pink;

      }

      span{

        background: $pink;

        &:first-of-type{

          width: 26px;

          height: 2px;

          transform: rotate(-45deg) translate(-14px, -1px);


        }

        &:nth-child(2){

          width: 68px;

          opacity: 0;


        }

        &:last-of-type{

          width: 26px;

          height: 2px;

          transform: rotate(45deg) translate(-14px, 1px);


        }

      }//span


    }//.menu-is-opened


  }
</style>
