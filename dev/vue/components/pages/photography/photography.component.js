import Vue from 'vue';

//Mint UI Action Sheets
import { Actionsheet } from 'mint-ui';

Vue.component(Actionsheet.name, Actionsheet);


export default  {

  name: 'photography',

  filters:{

    sanitize: function (value) {

      return value.replace(/ /g,"-");

    }

  },


  data() {
    return {

      isMobile: /iPhone|iPod|Android/i.test(navigator.userAgent), // Simple mobile user agent detecting

      sheetVisible: false, // Hide Action Sheets initially

      showFilter: false, // Hide filters initially

      allPics: this.$store.state.photography, // Get all pics from the store

      filtered: [], // The filtered array

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
          method: () => { this.filterPics('black and white') }
        },

        {
          name: 'Landscape',
          method: () => { this.filterPics('landscape') }
        }

      ],


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

        // scroll to top
        window.scrollTo(0, 0);

        // hide filters
        this.showFilter = false;

      }

    },


    /*
      FILTER THE PICTURES BASED ON THE SELECTED FILTER
    */
    filterPics(filter){

      // clear filtered array
      this.filtered = [];

      for( let pic of this.allPics){

        if(filter == "all"){

          this.filtered.push(pic);

        }

        if(pic.tags.includes(filter)) {

          // generate the filtered array
          this.filtered.push(pic)

        }

      }

    },


    /*
      TOGGLE FILTER VISIBILITY
      ( Smartphones will use the Mint UI Action Sheets )
    */
    revealFilters(){

      this.showFilter =  this.showFilter ? false : true;

    }
   
  },

}



