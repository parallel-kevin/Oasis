import Vue from 'vue'
import Loading from './src/loading'

const L = Vue.extend(Loading)

Loading.install = function (Vue) {
	Vue.component(Loading.name, Loading)
	Vue.directive('loading', {
		bind (el, binding, vnode) {
			console.log()
			const loading = new L({
				el: document.createElement('div')
			})
			el.__loading = loading
			display(loading.$el, binding.value)
			el.append(loading.$el)
		},
		update (el, binding) {
			if (binding.value !== binding.oldValue) {
				display(el.__loading.$el, binding.value)
			}
		}
	})

	function display ($el, visiable) {
		if (visiable === true) {
			$el.style.display = 'block'
		} else {
			$el.style.display = 'none'
		}
	}
}

export default Loading
