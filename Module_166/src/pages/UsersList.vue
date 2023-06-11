<template>
    <button @click="confirmInput">Confirm</button>
    <button @click="saveChanges">Save Changes</button>
    <ul>
        <user-item v-for="user in users" :key="user.id" :name="user.fullName" :role="user.role"></user-item>
    </ul>
</template>

<script>
import UserItem from '../components/users/UserItem.vue';

export default {
    components: {
        UserItem,
    },
    inject: ['users'],
    data() {
        return {
            changesSaved: false,
        };
    },
    methods: {
        confirmInput() {
            // do something
            this.$router.push('/teams');
        },
        saveChanges() {
            this.changesSaved = true;
        },
    },
    beforeRouteLeave(_, _2, next) {
        console.log('beforeRouteLeave');
        if (this.changesSaved) {
            next();
        } else {
            const answer = confirm('Do you want to leave without saving?');
            if (answer) {
                next();
            } else {
                next(false);
            }
        }
    }

};
</script>

<style scoped>
ul {
    list-style: none;
    margin: 2rem auto;
    max-width: 20rem;
    padding: 0;
}
</style>