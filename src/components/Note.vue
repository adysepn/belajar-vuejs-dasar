<script setup>
import { onBeforeMount, onUpdated, onMounted, reactive, ref, useTemplateRef } from 'vue'

const notes = reactive([])
const note = ref('')
const noteInput = useTemplateRef("noteInput")
const notesList = useTemplateRef("notesList")

function addNote() {
    notes.push(note.value)
    note.value = ''
    noteInput.value.focus()
    if (notesList.value) {
        notesList.value.forEach((li) => {
            console.log(li.textContent)
        })
    }
}

onBeforeMount(() => {
    console.log('onBeforeMount')
})
onMounted(() => {
    console.log('onMounted')
})
onUpdated(() => {
    console.log('onUpdated')
})

</script>

<template>
    <h1>Buat Note</h1>
    <div>
        <input type="text" v-model="note" ref="noteInput" placeholder="Tulis note disini" />
        <button @click="addNote">Tambah Note</button>
    </div>

    <h1>Daftar Notes</h1>
    <ul>
        <li v-for="note in notes" ref="notesList">{{ note }}</li>
    </ul>

</template>

<style scoped>
    
</style>