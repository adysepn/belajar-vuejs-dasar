<script setup>
import { ref } from 'vue';
import Counter from './Counter.vue';
import CounterStateless from './CounterStateless.vue';

const nama1 = 'Ado';
const nama2 = 'Bido';

const counter = ref(0);

</script>

<template>
    <Counter :name="nama1" initial-count="200"/>
    <Counter :name="nama2" initial-count="300"/>

    <CounterStateless name="Joko" :counter="counter"/>
    <CounterStateless name="Asoy" :counter="counter"/>
    <button @click="counter++">Increment Counter</button>
</template>

<style scoped>
    
</style>