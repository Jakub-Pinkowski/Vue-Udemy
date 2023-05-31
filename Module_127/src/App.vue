<template>
    <ul>
        <li v-for="resource in storedResources" :key="resource.id">
            <h2>{{ resource.title }}</h2>
            <p>{{ resource.description }}</p>
            <a :href="resource.link">Visit</a>
        </li>
    </ul>
</template>

<script>

export default {
    data() {
        return {
            storedResources: [
                {
                    id: 'official-guide',
                    title: 'Official Guide',
                    description: 'The official Vue.js documentation',
                    link: 'https://vuejs.org'
                },
                {
                    id: 'google',
                    title: 'Google',
                    description: 'Where we find everything else',
                    link: 'https://google.com'
                },
                {
                    id: 'stackoverflow',
                    title: 'Stack Overflow',
                    description: 'Where we find and share knowledge',
                    link: 'https://stackoverflow.com'
                }
            ]
        };
    }
}

</script>