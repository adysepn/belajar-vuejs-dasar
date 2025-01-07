<script setup>
    const [name, nameModifiers] = defineModel("name", {
        type: String,
        get: (value) => {
            if(nameModifiers.uppercase) {
                return value.toUpperCase();
            } else {
                return value;
            }
        }
    })
    const email = defineModel("email", {
        type: String,
    })
    const age = defineModel("age", {
        type: Number,
    })
    const type = defineModel("type", {
        type: String,
    })
    const complaint = defineModel("complaint", {
        type: Boolean,
    })
    const message = defineModel("message", {
        type: String,
    })
</script>
<template>
    <h1>Preview</h1>
    <div>
        <p>Name: {{ name }}</p>
        <p>Email: {{ email }}</p>
        <p>Age: {{ age }}</p>
        <p>Type: {{ type }}</p>
        <p>Complaint: {{ complaint }}</p>
        <p>Message: {{ message }}</p>
    </div>
</template>
<style scope>
    
</style>