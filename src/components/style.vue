<script setup>
import { ref } from 'vue'

const red = ref(false);
const bold = ref(false);

const array = ["red", "bold"];

function toggleRed() {
    red.value = !red.value;
}

function toggleBold() {
    bold.value = !bold.value;    
}

const style1 = {
    color: "red",
}

const style2 = {
    textTransform: "uppercase",
    fontWeight: "bold",
}

</script>

<template>

    <h1 :class="{red:red, bold:bold}">Style</h1>
    <h1 :class="array">Style</h1>

    <button v-on:click="toggleRed">Toggle Red</button>
    <button v-on:click="toggleBold">Toggle Bold</button>

    <h1 :style="style1">Style</h1>
    <h1 :style="style2">Style</h1>
    <h1 :style="[style1, style2]">Style</h1>

</template>

<style scoped>
    .red {
        color: red;
    }
    .bold {
        text-transform: uppercase;
        font-weight: bold;
    }
</style>