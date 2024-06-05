import { createApp } from 'vue'
import App from './App.vue'
import { router } from './router/router';
import { IMaskComponent } from 'vue-imask';
import './style.css'

const app = createApp(App);

// components
app.component('mask-input', IMaskComponent);

// Plugins
app.use(router);

app.mount('#app');