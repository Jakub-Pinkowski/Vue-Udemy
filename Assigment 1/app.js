const app = Vue.createApp({
    data() {
        return {
            myName: "Jakub",
            myAge: 27,
            myImage: "https://en.wikipedia.org/wiki/Erling_Haaland#/media/File:Erling_Haaland_2023_(cropped-v2).jpg"
        };
    },
    methods: {
        myAgePlusFive() {
            return this.myAge + 5;
        },
        myFavouriteNumber() {
            const randomNumber = Math.random();
            return randomNumber;
        }
    }
});

app.mount("#assignment");
