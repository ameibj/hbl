// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'

// Symbol字体
import '@/assets/fonts/iconfont'

import AlloyFinger from 'alloyfinger'
// 弹幕
import { vueBaberrage } from 'vue-baberrage'
// 放大镜
import VuePhotoZoomPro from 'vue-photo-zoom-pro'
// 手势库
import AlloyFingerPlugin from 'alloyfinger/vue/alloy_finger_vue'

Vue.use(AlloyFingerPlugin, {
    AlloyFinger
})

// rem 自适应方案
// import responsive from '@/utils/responsive'
// responsive(1920);

Vue.use(VuePhotoZoomPro)

Vue.use(vueBaberrage)

Vue.config.productionTip = false

import ('@/assets/style/index.scss')
/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
