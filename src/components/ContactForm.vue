<script setup>
const model = defineModel({
    type: Object,
    required: true,
    // default: {},
    get: (value) => {
        value.email = value.email.toUpperCase();
        return value;
    },

});
</script>

<template>
    <h1>Contact Us</h1>
    <form>
        <div>
            <label for="name">Name
                <input type="text" name="name" id="name" v-model="model.name">
            </label>
        </div>
        <div>
            <label for="email">Email
                <input type="email" name="email" id="email" v-model="model.email">
            </label>
        </div>
        <div>
            <label for="age">Age
                <input type="number" name="age" id="age" v-model.number="model.age">
            </label>
        </div>
        <div>
            <label for="type">type
                <select name="type" id="type" v-model="model.type">
                    <option value="regular">Regular</option>
                    <option value="vip">VIP</option>
                </select>
            </label>
        </div>
        <div>
            <label for="complaint">Complaint
                <input type="checkbox" name="complaint" id="complaint" v-model="model.complaint">
            </label>
        </div>
        <div>
            <label for="message">Message
                <textarea name="message" id="message" v-model="model.message"></textarea>
            </label>
        </div>
    </form>
</template>

<style scoped>
    
</style>