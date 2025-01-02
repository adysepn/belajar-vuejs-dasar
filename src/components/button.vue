<script setup>
console.log('Hello Button!')

const buttonDisabled = true;
</script>

<template>
    <div>
        <button type="button" :disabled="buttonDisabled">click me</button>
    </div>
</template>

<style scoped>
    button {
        padding: 10px 20px;
        border: none;
        border-radius: 5px;
        cursor: pointer;
    }
</style>