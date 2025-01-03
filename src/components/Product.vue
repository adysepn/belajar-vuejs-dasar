<script setup>
import { onWatcherCleanup, ref, watch, watchEffect } from 'vue';
import ProductDetail from './ProductDetail.vue';

const productId = ref('product1');
const product = ref(null);

// Menggunakan watch untuk memantau perubahan pada productId
watch(productId, async (newVal, oldVal) => {
    console.log('call watch callback'); // this will be called when productId changes
    const response = await fetch(`/${newVal}.json`);
    product.value = await response.json();
}, {
    immediate: true, // this will call the callback immediately
    // once: true // this will only call the callback once hanya sekali
});

// sama dengan watch, tetapi tidak perlu menentukan parameter, dan immediate nya default true
watchEffect(async (newVal, oldVal) => {
    // cleanup function berfungsi untuk membersihkan watcher ketika component diunmount
    onWatcherCleanup(() => {
        console.log('cleanup');
    });

    console.log('call watch callback'); // this will be called when productId changes
    const response = await fetch(`/${newVal}.json`);
    product.value = await response.json();
});

</script>

<template>
    <label for="productId">
        Product Id:
        <select name="product" id="product" v-model="productId">
            <!-- <option value=""></option> -->
            <option value="product1">Product 1</option>
            <option value="product2">Product 2</option>
            <option value="product3">Product 3</option>
        </select>
    </label>

    <div v-if="product">
        <ProductDetail :id="product.id" :price="product.price" :name="product.name"/>
        <!-- <h1>Product</h1>
        <p>Id: {{ product.id }}</p>
        <p>Name: {{ product.name }}</p>
        <p>Price: {{ product.price }}</p> -->
    </div>

</template>

<style scoped>
    
</style>