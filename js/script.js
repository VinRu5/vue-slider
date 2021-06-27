Vue.config.devtools = true;

new Vue({
    el: '#app',
    data: {
        photos: [
            './img/images-1.jpg',
            './img/images-2.jpg',
            './img/images-3.jpg',
            './img/images-4.jpg',
            './img/images-5.jpg',
            './img/images-6.jpeg',
            './img/images-7.jpg',
            './img/images-8.jpg'
        ],
        photos2: [
            './img/images-1.jpg',
            './img/images-2.jpg',
            './img/images-3.jpg',
            './img/images-4.jpg',
            './img/images-5.jpg',
            './img/images-6.jpeg',
            './img/images-7.jpg',
            './img/images-8.jpg'
        ],

        imgIndex: 0,
        intervallSelected: null,
        active: '',
        fullScreen: false
    },
    created(){
        this.intervallSelected = setInterval(() => {
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
        },
        changePhoto: function (index) {
            this.imgIndex = index;
        },
        noRotate: function () {
            clearInterval(this.intervallSelected);
        },
        rotate: function () {
            this.intervallSelected = setInterval(() => {
                this.next();
            }, 5000);
        },
        noRotateButton: function () {
            if (this.active === 'no-rotate') {
                this.rotate();
                this.active = '';
            } else {
                this.noRotate();
                this.active = 'no-rotate';
            }

        },
        buttonFullScreen: function () {
            this.fullScreen = !this.fullScreen;
        }
    }
})