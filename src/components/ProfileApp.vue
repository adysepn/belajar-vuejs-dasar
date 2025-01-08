<script setup>
import { provide, reactive } from 'vue'
import Profile from './Profile.vue';
import ProfileAddress from './ProfileAddress.vue';

const profile = reactive({
    name: "Ady",
    email: "adi@mail.com"
});

// untuk membagikan data ke komponen child
provide("profile", profile);
</script>

<template>
    <input type="text" v-model="profile.name" placeholder="nama" />
    <Profile />
    <ProfileAddress />
</template>

<style scoped>
    
</style>