<script setup>

const {counter, name, increment} = defineProps({
    counter: Number,
    name: String,
    increment: Number
});

// Tidak perlu menggunakan defineEmits karena sudah disediakan $emits
// const emits = defineEmits(['click']);
// function buttonClick() {
//     emits('click', increment);     
// }

defineOptions({
    inheritAttrs: false
})

</script>

<template>
    <div>
        <h1>Counter {{ name }} : {{ counter }}</h1>
        <button @click="$emit('click', increment)" >Increment {{ name }}</button>
    </div>
</template>

<style scoped>
    
</style>