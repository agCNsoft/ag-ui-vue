import { createApp } from 'vue'
import './style.css'
import App from './App.vue'
import ElementPlus from 'element-plus'
import ajui from 'anji-ui-vue/components'
import 'element-plus/dist/index.css'

createApp(App)
.use(ElementPlus)
.use(ajui)
.mount('#app')
