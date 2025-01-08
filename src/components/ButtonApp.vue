<script setup>
import MyButton from './MyButton.vue';
import Container from './container.vue';

function clickHandler() {
    alert('Button clicked');    
}

</script>

<template>

    <!-- Falltrough element = ketika pada child tidak perlu menambahkan prop, emits apapun, tetapi ini hanya berlaku apabila cuman 1 element -->
    <MyButton class="button" @click="clickHandler" name="Ady" contoh="value" />
    <!-- class, @click, name, contoh adalah Attributs -->

    <!-- Container menggunakan slot agar dalamnya dapat diubah atau diisi  -->
    <Container>

        <!-- memanggil semua attributes dan memasukkannya kedalam attributes pada #Header="attributes" -->
        <template #Header="attributes">
            <h1>Judul Slot {{ attributes.counter }}</h1>
        </template>

        <template #default="attributes">
            <p>Ini berasal dari slot {{ attributes.counter }}</p>
            <MyButton class="button" @click="clickHandler" :name="attributes.counter" contoh="value" />
        </template>

        <template #Footer>
            <p>Copyright 2025</p>
        </template>

    </Container>

</template>

<style scoped>
    .button {
        background-color: blue;
        color: white;
    }
</style>