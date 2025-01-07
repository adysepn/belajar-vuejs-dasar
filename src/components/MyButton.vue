<script setup>
// import { defineOptions } from 'vue'
// Untuk menghindari falltrough element, kita bisa menggunakan defineOptions
// defineOptions({
//     inheritAttrs: false,
// })

import { useAttrs } from 'vue'

// Jika menggunakan defineProps, maka falltrough element tidak akan berjalan
// const props = defineProps(["contoh"])
// console.log(props)

const attr = useAttrs();
console.log(attr)

</script>
<template>
    <!-- ini single element -->
    <button> My Button : {{ attr.name }} </button>

    <!-- <button> My Button </button>  -->
    <!-- Harus single element agar falltrough dapat terjadi -->
</template>
<style scope>
    
</style>