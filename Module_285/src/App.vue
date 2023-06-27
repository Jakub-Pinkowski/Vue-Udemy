<template>
    <section class="container">
        <h2>{{ fullName }}</h2>
        <h3>{{ age }}</h3>
        <button @click="setNewAge">Change Age</button>
        <div>
            <input type="text" placeholder="First Name" v-model="firstName" />
            <input type="text" placeholder="Last Name" v-model="lastName" />
        </div>
    </section>
</template>

<script setup>
import { ref, computed, watch } from 'vue';

const age = ref(27);
const firstName = ref('');
const lastName = ref('');

const fullName = computed(() => {
    return firstName.value + ' ' + lastName.value;
})

watch([age, fullName], function (newValue, oldValue) {
    console.log('Old age: ' + oldValue[0])
    console.log('New age: ' + newValue[0])
    console.log('Old name: ' + oldValue[1])
    console.log('New name: ' + newValue[1])
})

function setNewAge() {
    age.value += 1;
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