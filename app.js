new Vue({
    el: "#app",
    data: {
        title: "Hello World!",
        link: "https://google.com",
        finishedLink: "<a href='index.html'>Katt ide!</a>",
        name: "Őri Tamás",
        age: "21",
        imageURL: "https://lh3.googleusercontent.com/ctHgTBhiR4gllMmThnc_UI7078UQrwWijauvJrvAnWwmocC7SaV2ijv_T5pLqate_g=w412-h220-rw",
        counter: 0,
        x: 0,
        y: 0,
        value: "",
        secondCounter: 0
    },
    computed:{
        output: function () {
            return this.counter > 5 ? "Nagyobb mint 5" : "Kisebb mint 5";
        },
        result: function () {
            return this.secondCounter === 37 ? "done" : "not there yet";
        }
    },
    watch:{
        counter: function (value) {
            var vm = this;
            setTimeout(function () {
                vm.counter = 0;
            },2000);
        },
        secondCounter: function (value) {
            var vm = this;
            setTimeout(function () {
                vm.secondCounter = 0;
            },5000);
        }
    },
    methods:{
        changeTitle: function (event) {
            this.title = event.target.value;
        },
        sayHello: function () {
            return this.title;
        },
        myAgeTimesThree: function () {
            return (parseInt(this.age) * 3).toString();
        },
        randomFloat: function () {
            return Math.random().toString();
        },
        increase: function (iBy, event) {
            this.counter += iBy;
        },
        updateCoordinates: function (event) {
            this.x = event.clientX;
            this.y = event.clientY;
        },
        alertMe: function () {
            alert("Alert!");
        },
        changeValue: function (event) {
            this.value = event.target.value;
        }
    }
});