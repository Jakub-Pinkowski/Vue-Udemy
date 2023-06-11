<template>
    <section>
        <ul>
            <product-item v-for="product in products" :key="product.id" :id="product.id" :title="product.title"
                :image="product.image" :price="product.price" :description="product.description"></product-item>
        </ul>
    </section>
</template>

<script>
import ProductItem from '../components/products/ProductItem.vue';
import { mapGetters } from 'vuex';

export default {
    computed: {
        ...mapGetters(['products']),
    },
    components: {
        ProductItem,
    },
};
</script>

<style scoped>
ul {
    list-style: none;
    margin: 2rem auto;
    padding: 0;
    max-width: 40rem;
}
</style>