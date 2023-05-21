const app = Vue.createApp({
    data() {
        return {
            styleClass: "",
            paragraphIsVisible: true,
            inputBackgroundColor: "",
        };
    },
    computed: {
        paraClasses() {
            return {
                user1: this.styleClass === "user1",
                user2: this.styleClass === "user2",
                visible: this.paragraphIsVisible,
                hidden: !this.paragraphIsVisible,
            };
        },
    },
    methods: {
        toggleParagraphVisibility() {
            this.paragraphIsVisible = !this.paragraphIsVisible;
        },
    },
});

app.mount("#assignment");
