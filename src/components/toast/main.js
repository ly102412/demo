/**
 * Created by liuyong on 2021/4/17
 */
import Vue from 'vue'
import main from './main.vue'
const Toast = Vue.extend(main)

export default function toast (options) {
  const comp = new Toast({
    propsData: options
  })
  comp.vm = comp.$mount()
  document.body.appendChild(comp.vm.$el)
  comp.remove = () => {
    document.body.removeChild(comp.vm.$el)
    comp.vm.$destroy()
  }
  return comp
}
