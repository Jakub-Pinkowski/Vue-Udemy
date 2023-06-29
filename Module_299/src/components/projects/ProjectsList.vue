<template>
    <base-container v-if="user">
        <h2>{{ user.fullName }}: Projects</h2>
        <base-search v-if="hasProjects" @search="updateSearch" :search-term="enteredSearchTerm"></base-search>
        <ul v-if="hasProjects">
            <project-item v-for="prj in availableProjects" :key="prj.id" :title="prj.title"></project-item>
        </ul>
        <h3 v-else>No projects found.</h3>
    </base-container>
    <base-container v-else>
        <h3>No user selected.</h3>
    </base-container>
</template>

<script setup>
import ProjectItem from './ProjectItem.vue';
import { ref, computed, watch } from 'vue';

const props = defineProps({
    user: {
        type: Object,
        required: false,
    },
});

const enteredSearchTerm = ref('');
const activeSearchTerm = ref('');

const hasProjects = computed(() => {
    return props.user.projects && availableProjects.value.length > 0;
});

const availableProjects = computed(() => {
    if (activeSearchTerm.value) {
        return props.user.projects.filter((prj) =>
            prj.title.includes(activeSearchTerm.value)
        );
    }
    return props.user.projects;
});

function updateSearch(searchTerm) {
    enteredSearchTerm.value = searchTerm;
}

watch(enteredSearchTerm, function (newValue) {
    setTimeout(() => {
        if (newValue === enteredSearchTerm.value) {
            activeSearchTerm.value = newValue;
        }
    }, 300);
});

watch(props, function (newValue) {
    enteredSearchTerm.value = '';
});

</script>

<style scoped>
ul {
    list-style: none;
    margin: 0;
    padding: 0;
}
</style>