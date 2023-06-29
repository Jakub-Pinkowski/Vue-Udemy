<template>
    <h2>
        {{ userName }}
    </h2>
    <h3>
        {{ age }}
    </h3>
</template>

<script>
import { computed, inject } from 'vue';

export default {
    props: {
        firstName: String,
        lastName: String,
    },
    setup(props, context) {
        const userName = computed(() => {
            return props.firstName + ' ' + props.lastName;
        })

        const age = inject('userAge');

        console.log(context)

        return {
            userName, age
        }
    }
}


</script>