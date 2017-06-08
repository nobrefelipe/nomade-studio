export default  {

  name: 'photography',

  filters:{

    sanitize: function (value) {

      return value.replace(/ /g,"-");

    }

  },


  data() {
    return {

      showFilter: false,

      activeFilter: "all",

      allPics: this.$store.state.photography,

      filtered: []

    }

  },


  mounted(){

    // initial state, get all items
    this.filtered =  (this.activeFilter == "all") ? this.allPics : [];

  },


  computed:{

    /*
      USE COMPUTED PROPERTY TO KEEP THE REACTIVITY
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

