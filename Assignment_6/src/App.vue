<template>
    <section>
        <h1>What's up?</h1>
    </section>
    <active-user :key="user.name" :name="user.name" :age="user.age"></active-user>
    <user-data></user-data>
</template>

<script>

export default {
    data() {
        return {
            user: {
                name: 'Max',
                age: 30
            }
        }
    },
}

</script>


<style>
@import './assets/main.css';
</style>