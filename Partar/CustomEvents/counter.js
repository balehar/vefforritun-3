Vue.component('button-counter', {

	props: [],

	data: function() {
		return {
			counter: 0
		};
	},

	template: `
			<button @click="incrementCounter" class="button is-primary">
				{{counter}}
			</button>
		`,
	methods: {
		incrementCounter: function() {
			this.counter++;
			this.$emit('increment');
		}
		
	}
});

var app = new Vue({
	el: '#app', 
	data: {
		total: 0

	}
});
