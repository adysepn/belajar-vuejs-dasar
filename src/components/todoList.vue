<script setup>
const items = [
    {
        id: 1,
        title: 'Belajar Vue 3',
        completed: false
    },
    {
        id: 2,
        title: 'Belajar Golang',
        completed: true
    },
    {
        id: 3,
        title: 'Belajar Javascript',
        completed: false
    },
]
</script>

<template>
    <h1>Todo List</h1>
    <ul v-for="item in items">
        <li v-for="(value, key) in item">
            {{ key }}: {{ value }}
        </li>
    </ul>
    <!-- <div v-for="i in 10"> div akan diulang sebanyak 10 kali
        <p>Hallo {{ i }}</p>
    </div> -->
    <p v-for="i in 10">Hallo {{ i }}</p>
</template>

<style scoped>
    
</style>