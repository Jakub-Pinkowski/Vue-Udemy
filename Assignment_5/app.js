const app = Vue.createApp({
    data() {
        return {
            newTask: "",
            tasks: [],
            listIsVisible: true,
        };
    },
    computed: {
        buttonCaption() {
            return this.listIsVisible ? "Hide List" : "Show List";
        },
    },
    methods: {
        addTask() {
            this.tasks.push(this.newTask);
        },
        toggleList() {
            this.listIsVisible = !this.listIsVisible;
        },
    },
});

app.mount("#assignment");
