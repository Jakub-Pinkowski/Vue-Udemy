<template>
    <base-dialog :show="!!error" @close="handleError" title="An error occured">
        <p>{{ error }}</p>
    </base-dialog>
    <section>
        <base-card>
            <header>
                <h2>Requests Received</h2>
            </header>
            <div v-if="isLoading">
                <base-spinner></base-spinner>
            </div>
            <ul v-else-if="hasRequests && !isLoading">
                <request-item v-for="request in receivedRequests" :key="request.id" :email="request.userEmail"
                    :message="request.message"></request-item>
            </ul>
            <h3 v-else>
                You have no requests yet.
            </h3>
        </base-card>
    </section>
</template>

<script>
import RequestItem from '@/components/requests/RequestItem.vue';

export default {
    components: {
        RequestItem
    },
    data() {
        return {
            isLoading: false,
            error: null
        }
    },
    computed: {
        receivedRequests() {
            return this.$store.getters['requests/requests'];
        },
        hasRequests() {
            return this.$store.getters['requests/hasRequests'];
        },
    },
    created() {
        this.loadRequests();
    },
    methods: {
        loadRequests() {
            this.isLoading = true;
            try {
                this.$store.dispatch('requests/fetchRequests');
            } catch (error) {
                this.error = error.message || 'Failed to fetch requests.';
            }
            this.isLoading = false;
        },
        handleError() {
            this.error = null;
        }
    },
}

</script>

<style scoped>
header {
    text-align: center;
}

ul {
    list-style: none;
    margin: 2rem auto;
    padding: 0;
    max-width: 30rem;
}

h3 {
    text-align: center;
}
</style>