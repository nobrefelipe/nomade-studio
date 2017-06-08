
export default  {

  name: 'photography',

  props: [],


  mounted() {
    
  },


  data() {
    return {

      showFilter: false,

      filter: "street",

      pics: this.$store.state.photography,

      filtered: []

    }
  },

  mounted(){

    this.filterPics()

  },


  methods: {


    /*
      DOM Event Delegation
      GET FILTER TO APPLY
    */
    onFilter(e){

      //make sure the user clicks on <LI> tag
      if(e.target && e.target.nodeName == "LI"){

        this.filter = e.target.innerText.toLowerCase();

        this.filterPics();

      }

    },


    /*
      FILTER THE PICTURES BASED ON THE SELECTED FILTER
    */
    filterPics(){

      // clear filtered array
      this.filtered = [];

      for( let p of this.pics){

        // this.filter get its value from onFilter()
        if(p[0].tags.includes(this.filter)){

          // generate the filtered array
          this.filtered.push(...p);

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

