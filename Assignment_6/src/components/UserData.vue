<template>
    <form @submit.prevent="submitData">
        <div>
            <label for="name">Name</label>
            <input v-model="enteredName" type="text" required placeholder="Your name">
        </div>
        <div>
            <label for="age">Age</label>
            <input v-model="enteredAge" type="text" required placeholder="Your age">
        </div>
        <div>
            <button>Submit</button>
        </div>
    </form>
</template>

<script>

export default {
    emits: [
        'update-data'
    ],
    data() {
        return {
            enteredName: '',
            enteredAge: ''
        }
    },
    methods: {
        submitData() {
            this.$emit('update-data', this.enteredName, this.enteredAge)
        }
    }
}

</script>