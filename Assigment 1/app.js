const app = Vue.createApp({
    data() {
        return {
            myName: "Jakub",
            myAge: 27,
            myImage:
                "https://upload.wikimedia.org/wikipedia/commons/thumb/4/4c/Man_Daeng_Waterfall.jpg/640px-Man_Daeng_Waterfall.jpg",
        };
    },
    methods: {
        myAgePlusFive() {
            return this.myAge + 5;
        },
        myFavouriteNumber() {
            const randomNumber = Math.random();
            return randomNumber;
        },
    },
});

app.mount("#assignment");
