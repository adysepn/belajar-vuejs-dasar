<script setup>
import { ref } from 'vue'
import About from './About.vue';
import Blog from './Blog.vue';
import Contact from './Contact.vue';

const currentPage = ref('about');
const pages = {
    about: About,
    blog: Blog,
    contact: Contact,
};
</script>

<template>
    <button @click="currentPage = 'about'">About</button>
    <button @click="currentPage = 'blog'">Blog</button>
    <button @click="currentPage = 'contact'">contact</button>

    <!-- Untuk melakukan Dynamic Component -->
    <component :is="pages[currentPage]"/>
</template>

<style scoped>
    
</style>