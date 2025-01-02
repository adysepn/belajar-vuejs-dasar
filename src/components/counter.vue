<script setup>
import { nextTick, ref } from 'vue';
let counter = ref({
    count: 0,
    name: 'Ady'
});


async function increment() {
    console.log(`increment counter: ${counter.value.count}`);
    counter.value = {
        name: 'Ady',
        count: counter.value.count + 1
    };

    await nextTick();

    counter.value.count++;
    
    await nextTick();

    counter.value.count++;
    
    await nextTick();

    console.log('Increment count after tick');
}

</script>

<template>
    <div>
        <h1 id="counter">counter {{ counter.name }} : {{ counter.count }}</h1>
        <button v-on:click="increment">Increment</button>
    </div>
</template>

<style scoped>
    
</style>