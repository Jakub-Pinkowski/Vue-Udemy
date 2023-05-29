<template>
    <section>
        <h1>Name and Age</h1>
    </section>
    <active-user :key="user.name" :name="user.name" :age="user.age"></active-user>
    <user-data @update-data="updateUserData"></user-data>
</template>

<script>

export default {
    data() {
        return {
            user: {
                name: 'Jakub',
                age: 27
            }
        }
    },
    methods: {
        updateUserData(name, age) {
            this.user = {
                name: name,
                age: +age
            }
        }
    }
}

</script>


<style>
@import './assets/main.css';
</style>