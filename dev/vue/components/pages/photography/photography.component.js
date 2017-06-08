
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

      filter: "all",

      allPics: this.$store.state.photography,

      filtered: []

    }
  },


  mounted(){

    // initial state, get all items
    this.filtered =  (this.filter == "all") ? this.allPics : [];

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

        this.filter = e.target.innerText.toLowerCase();

        // filter it!
        this.filterPics();

      }

    },


    /*
      FILTER THE PICTURES BASED ON THE SELECTED FILTER
    */
    filterPics(){

      // clear filtered array
      this.filtered = [];

      for( let p of this.allPics){

        // this.filter get its value from onFilter()
        if(p.tags.includes(this.filter)) {

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

