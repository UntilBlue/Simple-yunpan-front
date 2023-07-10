import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
//引入组件库
import ElementPlus from "element-plus"
import 'element-plus/dist/index.css'
import zhCn from "element-plus/dist/locale/zh-cn.mjs";
//图标
import "@/assets/icon/iconfont.css"
import "@/assets/base.scss"
//引入cookie
import VueCookies from "vue-cookies"

const app = createApp(App)

app.use(router)
app.use(ElementPlus, {
  locale: zhCn,
});

app.mount('#app')
