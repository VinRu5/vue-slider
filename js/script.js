Vue.config.devtools = true;

new Vue({
    el: '#app',
    data: {
        photos: [
            './img/images-1.jpg',
            './img/images-2.jpg',
            './img/images-3.jpg',
            './img/images-4.jpg',
            './img/images-7.jpg',
        ],
        imgIndex: 0,
    },
    methods: {
        next: function () {
            if (this.imgIndex === (this.photos.length - 1)) {
                this.imgIndex = 0;
            }
            this.imgIndex++;
        },
        back: function () {
            if (this.imgIndex === 0) {
                this.imgIndex = this.photos.length;
            }
            this.imgIndex--;
        }
    }
})