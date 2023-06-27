<template>
  <h2>My Course Goal</h2>
  <p v-if="goal.goalIsVisible"> {{ goal.courseGoal }}</p>
  <h3>OUTPUT COURSE GOAL</h3>
  <button @click="toggleGoal">Toggle Goal</button>
  <!-- Task 3: Manage data in three ways -->
  <!-- => Separate refs -->
  <!-- => Ref Object -->
  <!-- => Reactive Object -->
  <!-- Task 4: Also solve the assignment with the Options API -->
</template>

<script setup>
import { ref, reactive } from 'vue';

const goal = reactive({
    courseGoal: 'Finish the course and learn Vue!',
    goalIsVisible: true
})

// toggle courseGoal visibility
function toggleGoal() {
    goal.goalIsVisible = !goal.goalIsVisible;
}

</script>

<style>
html {
  font-family: sans-serif;
}
body {
  margin: 3rem;
  text-align: center;
}
</style>