<template lang="html">

  <div class="navTrigger" @click="openNav">

    <span></span> <span></span> <span></span>

    <div>MENU</div>

  </div>

</template>



<script>

  export default  {

    name: 'nav-bar',

    methods: {

      openNav(){

        let navBar = document.getElementById('leftBar');

        navBar.classList.toggle("menu-is-opened")

      }

    },

}
</script>

<style scoped lang="scss">

  $pink: #D04058;
  $grey: #4A4A4A;

  .navTrigger{

    position: fixed;

    top: 50%;

    left: 30px;

    z-index: 1000;

    transform: translateY(-50%);

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

      transition-delay: .2s;

    }


    span{

      position: absolute;

      right: 0;

      height: 2px;

      background: $grey;

      transition: all .3s cubic-bezier(.41,1.63,.56,1.17);

      transition-delay: .2s;

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

      div{

        right: -21px;

        color: $pink;

        transition-delay: 0s;

      }

      span{

        background: $pink;

        transition-delay: 0s;

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


    @media (max-width:960px) {

      top: 20px;

      left: 50%;

      transform: translateX(-63%) rotate(90deg);

    }


  }
</style>
