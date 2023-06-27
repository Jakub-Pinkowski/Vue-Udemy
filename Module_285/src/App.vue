<template>
    <section class="container">
        <h2>{{ name }}</h2>
        <h3>{{ age }}</h3>
        <button @click="setNewAge">Change Age</button>
    </section>
</template>

<script setup>
import { ref, reactive } from 'vue';

const age = ref(27);
const name = ref('Jakub');


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