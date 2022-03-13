import { createApp } from 'vue';
import App from './index.vue';
import svgIcon from '@/components/SvgIcon.vue'

createApp(App).component('svg-icon', svgIcon).mount('#app')