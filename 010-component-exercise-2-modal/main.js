// https://getbootstrap.com/docs/4.1/components/alerts/
Vue.component('modal', {
	props: ['title', 'body'],
	template: `

<div  v-if="showModal" class="modal is-active">
  <div class="modal-background"></div>
  <div class="modal-content">
  <div class="box">
   <slot></slot>
  </div>
  
  </div>
  <button class="modal-close is-large"  @click="$emit('close')" aria-label="close"></button>
</div>
	`
});

new Vue({
	el: '#root',

	data:{
		return:{
			showModal:false
		}
	}
})
