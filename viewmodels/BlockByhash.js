var app = new Vue({
    el: '#app',
    data: {
        recentBlocks:[]
    },
    computed:{
        showRecentBlocks(){
            var now = Date.now();
            this.recentBlocks.forEach(block => {
                block.showtime = moment(new Date(block.time)).fromNow();
                block.showSizeOnDisk = block.sizeOnDisk.toLocaleString('en');
            });
            return this.recentBlocks;
        }
    },
    mounted() {
        console.log('view mounted');
        this.getBlockRecent();
    },
    methods: {
        getBlockRecent() {
            axios.get('http://localhost:8090/transaction/getTransactionInfoByTxid')
                .then(function (response) {
                    // handle success
                    console.log(response);
                    app.recentBlocks = response.data;

                })
                .catch(function (error) {
                    // handle error
                    console.log(error);
                });
        },
        handleClick(){
            console.log("Click click");
            location.href="BlockDetail.html";
        },
        handleJiaoyi(){
            console.log("Jiaoyi click");
            location.href="BlockByhash.html";
        },
    }
})