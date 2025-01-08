import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'

// https://vite.dev/config/
export default defineConfig({
  plugins: [vue()],
  build: {
    rollupOptions:{
      input:{
        main: 'index.html',
        hello: 'hello.html',
        counter: 'counter.html',
        sayhello: 'say-hello.html',
        style: 'style.html',
        score: 'score.html',
        todolist: 'todolist.html',
        contact: 'contact.html',
        product: 'product.html',
        note: 'note.html',
        button: 'button.html',
        home: 'home.html',
        profile: 'profile.html',
      }
    }
  }
})
