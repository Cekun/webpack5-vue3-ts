import Vue, { createApp } from 'vue'
import SvgIcon from '@/components/SvgIcon.vue'// svg component

// register globally
Vue.component('svg-icon', SvgIcon)

// createApp(App).use(SvgIcon).mount('#app')

const req = require.context('./svg', false, /\.svg$/)
const requireAll = requireContext => requireContext.keys().map(requireContext)
requireAll(req)