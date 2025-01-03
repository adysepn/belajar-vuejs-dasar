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
        title: 'Belajar Javascript 2',
        completed: false
    },
]
</script>

<template>
    <h1>Todo List</h1>
    <ul v-for="item in items" :key="item.id"> <!-- :key="item.id" digunakan untuk memberikan key pada element yang diulang -->
        <li v-for="(value, key) in item">
            {{ key }}: {{ value }}
        </li>
    </ul>

    <h1>Completed Task</h1>
    <template v-for="item in items" :key="item.id">
        <ul v-if="item.completed">
            <li>{{ item.title }}</li>
        </ul>
    </template>
    
    <h1>Uncompleted Task</h1>
    <template v-for="item in items" :key="item.id">
        <ul v-if="!item.completed">
            <li>{{ item.title }}</li>
        </ul>
    </template>
    <!-- <div v-for="i in 10"> div akan diulang sebanyak 10 kali
        <p>Hallo {{ i }}</p>
    </div> -->
    <h1 v-for="i in 10">Hallo {{ i }}</h1>


</template>

<style scoped>
    
</style>