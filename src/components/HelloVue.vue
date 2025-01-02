<script setup>
console.log('Hello Vue!')

const message = '<h1>Hello Vue 3!</h1>'
const classHello = 'hello'
const id = 'hello'
const data = {
    class: 'hi',
    id: 'hi',
}
</script>

<template>
    <h1 v-bind:class="classHello">Hello Vue!</h1>
    <div>{{ message }}</div>
    <div :id :class="classHello" v-html="message"></div>

    <h1 v-bind="data">Hello Vue!!!!</h1>
    <h1 v-bind:class="data.class" :id="data.id" >Cihuuuuy</h1>
</template>

<style scoped>
.hello {
    color: red;
}
.hi {
    color: blue;
}
</style>