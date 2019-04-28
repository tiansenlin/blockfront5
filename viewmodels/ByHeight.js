var app = new Vue({
    el: '#app',
    data: {
     byHehigt:[],
     blockheight:''
    },
    mounted(){
      var url = new URL(location.href);
      var height = url.searchParams.get('blockheight');
      this.getBlock(height);

    },

    computed:{
      showgetblocks(){
        var now = Date.now();
        this.byHehigt.forEach(block => {
        
          block.showsizeOnDisk = block.sizeOnDisk.toLocaleString('en');
        });
        return this.byHehigt;
      }
    },
    methods:{
      getBlock(height){
      axios.get('http://localhost:8090/block/getBlockDetailByHeight', {
        params: {
          blockheight:height
           }
      })
      .then(function (response) {
        console.log(response);
        app.byHehigt=response.data;
      })
      .catch(function (error) {
        console.log(error);
      })
    }
  }
  })