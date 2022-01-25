// https://getbootstrap.com/docs/4.1/components/alerts/
Vue.component('message', {
	props: ['title', 'body'],
	template: `
		<article class="message" v-show="isVisible">
		<div class="message-header">
		{{title}}
		<buttton class="close" @click="isVisible=false">X</buttton>
</div>
<div class="message-body">
{{body}}
</div>
		
		</article>
	`,
	data() {
		return {
			isVisible : true
		}
	},
});

new Vue({
	el: '#root'
})
