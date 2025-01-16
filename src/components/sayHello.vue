<script setup>
import {reactive,ref,computed} from 'vue';

const person = reactive({
    firstName: 'Ady',
    lastName: 'nugraha'
});

function sayHello() {
    person.firstName = document.getElementById('firstName').value;
    person.lastName = document.getElementById('lastName').value;
}

// function fullname() {
//     console.log('fullname called');
//     return `${person.firstName} ${person.lastName}`;
// }

// Agar fungsi fullname() tidak dipanggil terus menerus saat halaman dirender ulang, kita bisa menggunakan computed
const fullname = computed(() => {
    console.log('fullname called');
    return `${person.firstName} ${person.lastName}`;
});

const counter = ref(0);

// function increment() {
//     console.log('increment called');
//     counter.value++;
// }

// Secara manual
// function changeFirstName() {
//     person.firstName = document.getElementById('firstName').value;
// }
// function changeLastName() {
//     person.lastName = document.getElementById('lastName').value;
// }

// Menggunakan event object pada function
function changeFirstName(event) {
    person.firstName = event.target.value;
}
function changeLastName(event) {
    person.lastName = event.target.value;
}

</script>

<template>
    <form>
        <button @click="counter++">Increment {{ counter }}</button> <br>
        <input placeholder="First Name" type="text" id="firstName" v-on:input="changeFirstName"> <br>
        <input placeholder="Last Name" type="text" id="lastName" v-on:input="changeLastName"> <br>
        <button v-on:click.prevent="sayHello">Say Hello</button> <!-- .prevent adalah event modifier untuk mencegah inputan untuk hilang ketika click submit  -->
    </form>
    <h1>Hello {{ fullname }}</h1>
</template>

<style scoped>
    
</style>