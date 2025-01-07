<script setup>
import { ref } from 'vue';
import Counter from './Counter.vue';
import CounterStateless from './CounterStateless.vue';

const nama1 = 'Ado';
const nama2 = 'Bido';

const counter = ref(0);

function increment(value) {
    counter.value += value;
}
</script>

<template>
    <!-- Ini contoh penggunaan prop -->
    <Counter :name="nama1" initial-count="200"/>
    <Counter :name="nama2" initial-count="300"/><br>

    <!-- Ini contoh penggunaan prop menggunakan variabel ref() mirip share state dan component event (emits) yang @click -->
    <CounterStateless name="Joko" :counter="counter" :increment="1" @click="increment"/>
    <CounterStateless name="Asoy" :counter="counter" :increment="2" @click="increment"/>
</template>

<style scoped>
    
</style>