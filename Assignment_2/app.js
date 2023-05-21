const app = Vue.createApp({
    data() {
        return {
            output: "",
            confirmedOutput: "",
        };
    },
    methods: {
        showAlert() {
            alert("Hello World!");
        },
        setOutput(event) {
            this.output = event.target.value;
        },
        confirmOutput() {
            this.confirmedOutput = this.output;
        }
    }
});

app.mount('#assignment')