<script setup>
import { reactive } from 'vue';

const contact = reactive({
    name: '',
    email: '',
    age: 0,
    type: '',
    complaint: false,
    message: ''
});

</script>

<template>
    <h1>Contact Us</h1>
    <form>
        <div>
            <label for="name">Name
                <input type="text" name="name" id="name" v-model="contact.name">
            </label>
        </div>
        <div>
            <label for="email">Email
                <input type="email" name="email" id="email" v-model="contact.email">
            </label>
        </div>
        <div>
            <label for="age">Age
                <input type="number" name="age" id="age" v-model.number="contact.age">
            </label>
        </div>
        <div>
            <label for="type">type
                <select name="type" id="type" v-model="contact.type">
                    <option value="regular">Regular</option>
                    <option value="vip">VIP</option>
                </select>
            </label>
        </div>
        <div>
            <label for="complaint">Complaint
                <input type="checkbox" name="complaint" id="complaint" v-model="contact.complaint">
            </label>
        </div>
        <div>
            <label for="message">Message
                <textarea name="message" id="message" v-model="contact.message"></textarea>
            </label>
        </div>
    </form>
    
    <h1>Preview</h1>
    <div>
        <p>Name: {{ contact.name }}</p>
        <p>Email: {{ contact.email }}</p>
        <p>Age: {{ contact.age }}</p>
        <p>Type: {{ contact.type }}</p>
        <p>Complaint: {{ contact.complaint }}</p>
        <p>Message: {{ contact.message }}</p>
    </div>
</template>

<style scoped>
    
</style>