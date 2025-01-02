<script setup>
import { ref } from 'vue'

const score = ref(60)
</script>

<template>

<h1>Score App</h1>
<div v-show="score > 80">
    <p>Nilai kamu bagus: {{ score }}</p>
</div>

<div v-if="score > 90">
    <p>Kamu kelas A: {{ score }}</p>
</div>

<div v-else-if="score > 60">
    <p>Kamu kelas B: {{ score }}</p>
</div>

<div v-else>
    <p>Kamu kelas C: {{ score }}</p>
</div>

</template>

<style scoped>
    
</style>