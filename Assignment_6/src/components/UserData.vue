<template>
    <form @submit.prevent="submitData">
        <div>
            <label for="name">Name</label>
            <input v-model="enteredName" type="text" required>
        </div>
        <div>
            <label for="age">Age</label>
            <input v-model="enteredAge" type="text" required>
        </div>
        <div>
            <button>Submit</button>
        </div>
    </form>
</template>

<script>

export default {
    emits: [
        'name',
        'age'
    ],
    data() {
        return {
            enteredName: '',
            enteredAge: ''
        }
    },
    methods: {
        submitData() {
            this.$emit('name', this.enteredName);
            this.$emit('age', +this.enteredAge || '');
        }
    }
}

</script>