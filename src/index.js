import component from './vue-numeric.vue'
import Base from './base.js'

const plugin = {
  install: Vue => {
    Vue.component(component.name, component)
  }
}

component.install = plugin.install

export default component

export {Base}
