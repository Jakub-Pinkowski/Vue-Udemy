<template>
    <section class="container">
        <user-data :first-name="firstName" :last-name="lastName"></user-data>
        <button @click="setNewAge">Change Age</button>
        <div>
            <input type="text" placeholder="First Name" v-model="firstName" />
            <input type="text" placeholder="Last Name" ref="lastNameInput" />
            <button @click="setLastName">Set Last Name</button>
        </div>
    </section>
</template>

<script setup>
import { ref, computed, watch, provide } from 'vue';
import UserData from './components/UserData.vue';

const firstName = ref('');
const lastName = ref('');
const lastNameInput = ref(null);
const age = ref(27);

provide('userAge', age)

const fullName = computed(() => {
    return firstName.value + ' ' + lastName.value;
})

watch([age, fullName], function (newValue, oldValue) {
    console.log('Old age: ' + oldValue[0])
    console.log('New age: ' + newValue[0])
})

function setNewAge() {
    age.value += 1;
}

function setLastName() {
    lastName.value = lastNameInput.value.value;
}

</script>


<style>
* {
    box-sizing: border-box;
}

html {
    font-family: sans-serif;
}

body {
    margin: 0;
}

.container {
    margin: 3rem auto;
    max-width: 30rem;
    border-radius: 12px;
    box-shadow: 0 2px 8px rgba(0, 0, 0, 0.26);
    padding: 1rem;
    text-align: center;
}
</style>