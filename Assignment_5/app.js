const app = Vue.createApp({
    data() {
        return {
            newTask: '',
            tasks: [],
            listIsVisible: true,
        }
    },
    methods: {
        addTask() {
            this.tasks.push(this.newTask)
        },
        toggleList() {
            this.listIsVisible = !this.listIsVisible
        }
    },

})

app.mount('#assignment')