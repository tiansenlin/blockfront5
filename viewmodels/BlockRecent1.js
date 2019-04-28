var app = new Vue({
    el: '#app',
    data: {
      blocks:[]
    },
    computed:{
      showgetblocks(){
        var now = Date.now();
        this.blocks.forEach(block => {
          block.showtime = parseInt(now-block.time/1000/60);
          block.showsizeOnDisk = block.sizeOnDisk.toLocaleString('en');
        });
        return this.blocks;
      }
    },
    mounted(){
      console.log('view mounted');
      this.getBlock();
    },
    methods:{
      getBlock(){
        axios.get('http://localhost:8090/block/getRecentBlocks')
        .then(function (response) {
            // handle success
            console.log(response);
            app.blocks = response.data;

        })
        .catch(function (error) {
            // handle error
            console.log(error);
        });
      }
    }
  })