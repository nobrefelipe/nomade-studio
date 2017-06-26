import Vue from 'vue';

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

      sheetVisible: false,

      showFilter: false,

      activeFilter: "all",

      allPics: this.$store.state.photography,

      filtered: [],

      actions: [
        {
          name: 'Reset',
          method: this.resetFilters
        },
        {
          name: 'Price Highest',
          method: this.filter_priceHigh
        },
        {
          name: 'Price Lowest',
          method: this.filter_priceLow
        },
        {
          name: 'A - Z',
          method: this.filter_aZ
        },
        {
          name: 'Z - A',
          method: this.filter_zA
        }
      ],


    }

  },


  mounted(){

    // initial state, get all items
    this.filtered =  (this.activeFilter == "all") ? this.allPics : [];

  },


  computed:{

    /*
      USE COMPUTED PROPERTY TO KEEP THE REACTIVITY
      every time this.filtered change (by filtering) final_data will bee updated
    */
    final_data(){

      return this.filtered;

    }

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
        this.activeFilter = e.target.innerText.toLowerCase();

        // filter it!
        this.filterPics();


        window.scrollTo(0, 0);


        // hide filters
        this.showFilter = false;

      }

    },


    /*
      FILTER THE PICTURES BASED ON THE SELECTED FILTER
    */
    filterPics(){

      // clear filtered array
      this.filtered = [];

      for( let p of this.allPics){


        if(this.activeFilter == "all"){

          this.filtered.push(p);

        }

        // activeFilter get its value after onFilter()
        if(p.tags.includes(this.activeFilter)) {

          // generate the filtered array
          this.filtered.push(p)

        }

      }

    },


    /*
      TOGGLE FILTER VISIBILITY
    */
    revealFilters(){

      this.showFilter =  this.showFilter ? false : true;

    }
   
  },

}



