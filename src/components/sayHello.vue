<script setup>
import {reactive} from 'vue';

const person = reactive({
    firstName: 'Ady',
    lastName: 'nugraha'
});

function sayHello() {
    person.firstName = document.getElementById('firstName').value;
    person.lastName = document.getElementById('lastName').value;
}

function fullname() {
    console.log('fullname called');
    return `${person.firstName} ${person.lastName}`;
}
</script>

<template>
    <div>
        <input placeholder="First Name" type="text" name="firstName" id="firstName">
        <input placeholder="Last Name" type="text" name="lastName" id="lastName">
        <button v-on:click="sayHello">Say Hello</button>
    </div>
    <h1>Hello {{ fullname() }}</h1>
</template>

<style scoped>
    
</style>