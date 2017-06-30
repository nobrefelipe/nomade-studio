export default  {

  name: 'about',

  data() {
    return {

      userid: 1539883988, // Canal Nomade Instagram ID

      instafeed: null

    }
  },

  mounted() {

    // Get Instagram images


    let params = { // Instagram params

      params: {

        access_token: '1539883988.1677ed0.cb4c16a66e70487f9b0396edd1ca8115',  // Canal Nomade Instagram token

        count: 18
      }

    };


    let instafeed = document.getElementById('instafeed');

    this.$http.jsonp('https://api.instagram.com/v1/users/' + this.userid + '/media/recent', params ).then(data => {

      this.instafeed = data.body.data;

    });


  }

}

