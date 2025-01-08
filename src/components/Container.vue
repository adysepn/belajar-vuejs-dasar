<script setup>
import { useSlots, ref } from 'vue'

// Mengambil semua slot yang ada pada element
// const slots = useSlots()

const counter = ref(0)

// Di Vue sudah menyedia kan $slots untuk mengambil semua slot yang ada pada element
// jadi tidak perlu menggunakan useSlots diatas
// this.$slots;
</script>
<template>
    <div v-if="$slots.Header">
        <!-- Memasukkan attributes counter kedalam slot Header dan memanggilnya dengan attributes.counter -->
        <slot name="Header" :counter="counter">
            <!-- Sebagai default apabila dimasukkan isinya -->
            <h1>Anda belum mengisi content Header</h1>
        </slot>
    </div>
    <div v-if="$slots.default">
        <slot name="default" :counter="counter">
            <!-- Sebagai default apabila dimasukkan isinya -->
            <p>Anda belum mengisi content slot nya</p>
        </slot>
    </div>
    <div v-if="$slots.Footer">
        <slot name="Footer" :counter="counter">
            <!-- Sebagai default apabila dimasukkan isinya -->
            <p>Anda belum mengisi content Footer</p>
        </slot>
    </div>
    <div>
        <button @click="counter++">Increment {{ counter }}</button>
    </div>
</template>
<style scoped>
    
</style>