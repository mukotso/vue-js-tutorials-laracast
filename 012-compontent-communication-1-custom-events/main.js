Vue.component('coupen', {
	template: '<input @blur="coupenApplied">',
	methods: {
		coupenApplied: function() {
			this.$emit('applied')
		}
	}
});

new Vue({
	el: '#root',
	data: {
		isApplied : false,
	},
	methods: {
		notifyApplied: function(value) {
			alert("Coupen Applied ")
			this.isApplied = true
		}
	}
})
