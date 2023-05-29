<template>
    <section>
        <h1>Name and Age</h1>
    </section>
    <active-user :key="user.name" :name="user.name" :age="user.age"></active-user>
    <user-data
        @name="userChangedName"
        @age="userChangedAge"
    ></user-data>
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
        userChangedName(name) {
            this.user.name = name;
        },
        userChangedAge(age) {
            // If age is 0 then don't update it
            if (age) {
                this.user.age = age;
            }
        }
    },
}

</script>


<style>
@import './assets/main.css';
</style>