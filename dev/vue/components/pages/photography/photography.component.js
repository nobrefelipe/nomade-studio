import Vue from 'vue';
import VueFire from "vuefire";
import db from "../../../db";

Vue.use(VueFire);

//Mint UI Action Sheets
import { Actionsheet } from 'mint-ui';

import scrollToTop from '../../../helpers/scroll-to-top';


Vue.component(Actionsheet.name, Actionsheet);


export default  {

  name: 'photography',

  filters:{

    unsanitize: function (value) {

      return value.replace(/-/g," ");

    }

  },

  data() {
    return {

      isMobile: /iPhone|iPod|Android/i.test(navigator.userAgent), // Simple mobile user agent detecting

      sheetVisible: false, // Hide Action Sheets initially

      showFilter: false, // Hide filters initially

      allPics: '', //this.$store.state.photography, // Get all pics from the store

      filtered: null, // The filtered array

      actions: [ // Action Sheet Methods

        {
          name: 'All',
          method: () => { this.filterPics('all') }
        },

        {
          name: 'Street',
          method: () => { this.filterPics('street') }
        },

        {
          name: 'People',
          method: () => { this.filterPics('people') }
        },

        {
          name: 'Portrait',
          method: () => { this.filterPics('portrait') }
        },

        {
          name: 'Black and White',
          method: () => { this.filterPics('bnw') }
        },

        {
          name: 'Landscape',
          method: () => { this.filterPics('landscape') }
        }

      ],


    }

  },

  firebase() {
    return {

      DB_PICS: db.ref('/photography')

    }
  },


  mounted(){

    // initial state, get all items
    this.filterPics('all');


  },


  methods: {


    /*
      DOM Event Delegation
      APPLY FILTER BY CLICKING ON FILTER ITEM
    */
    onFilter(e){

      //make sure the user clicks on <LI> tag
      if(e.target && e.target.nodeName == "LI"){

        // get the inner text value and set the active filter
        let filter = e.target.innerText.toLowerCase();

        // filter it!
        this.filterPics(filter);

      }

    },


    /*
      FILTER THE PICTURES BASED ON THE SELECTED FILTER
    */
    filterPics(filter){

      let vm = this;

      // clear filtered array
      this.filtered = [];


      if(filter == 'all'){

        vm.filtered = vm.DB_PICS;

      }else{

        vm.$firebaseRefs.DB_PICS.orderByChild('tags/' + filter).startAt(filter).once("value").then( res => {


          res.forEach(function (data) {

            vm.filtered.push(data.val());


          });


        });


      }


      /*
      for( let pic of this.allPics){

        if(filter == "all"){

          this.filtered.push(pic);

        }

        if(pic.tags.includes(filter)) {

          // generate the filtered array
          this.filtered.push(pic)

        }

      }
      */

      // hide filters
      this.showFilter = false;

      // scroll to top
      scrollToTop();

    },


    /*
      TOGGLE FILTER VISIBILITY
      ( Smartphones will use the Mint UI Action Sheets )
    */
    revealFilters(){

      this.showFilter =  this.showFilter ? false : true;

    },


    onCLickOutside(){

      this.showFilter = false;

    }
   
  },

}



