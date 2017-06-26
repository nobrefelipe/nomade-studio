export default  {

  name: 'about',

  data() {
    return {

      token: '1539883988.1677ed0.cb4c16a66e70487f9b0396edd1ca8115',

      userid: 1539883988,

      count: 18,

      instafeed: null

    }
  },

  mounted() {

    let instafeed = document.getElementById('instafeed');

    this.$http.jsonp('https://api.instagram.com/v1/users/' + this.userid + '/media/recent', {params: {access_token: this.token, count: this.count}}).then(data => {

      this.instafeed = data.body.data;

    });


  },


  methods: {
   
  }


}

