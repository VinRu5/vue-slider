Vue.config.devtools = true;

new Vue({
    el: '#app',
    data: {
        photos: [
            './img/images-1.jpg',
            './img/images-8.jpg',
            './img/images-3.jpg',
            './img/images-4.jpg',
            './img/images-7.jpg',
        ],
        imgIndex: 0,
    },
    created(){
        setInterval(() => {
            this.next();
        }, 5000);
    },
    methods: {
        next: function () {
            if (this.imgIndex === (this.photos.length - 1)) {
                this.imgIndex = 0;
            } else {
                this.imgIndex++;
            }
        },
        back: function () {
            if (this.imgIndex === 0) {
                this.imgIndex = this.photos.length - 1;
            } else {
                this.imgIndex--;
            }
        },
        detected: function (index) {
            if (index === this.imgIndex) {
                return 'detected';
            };
        }
    }
})