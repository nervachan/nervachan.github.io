import { createApp } from 'vue'
import App from './App.vue'
import 'lenis/dist/lenis.css'
import './assets/main.css'
import { reveal } from './directives/reveal'

createApp(App).directive('reveal', reveal).mount('#app')
