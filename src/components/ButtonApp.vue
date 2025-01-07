<script setup>
import MyButton from './MyButton.vue';

function clickHandler() {
    alert('Button clicked');    
}

</script>

<template>
    <!-- Falltrough element = ketika pada child tidak perlu menambahkan prop, emits apapun, tetapi ini hanya berlaku apabila cuman 1 element -->
    <MyButton class="button" @click="clickHandler" name="Ady" contoh="value" />
</template>

<style scope>
    .button {
        background-color: blue;
        color: white;
    }
</style>