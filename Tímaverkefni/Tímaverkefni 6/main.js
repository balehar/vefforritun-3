Vue.component('modal', {

	props: ['title'],

	data: function() {
		return {
			isVisible: false
		};
	},

	template: `
		<div>
			<button @click="showModal" class="button is-primary">Show Modal</button>
			<div class="modal is-active" v-show="isVisible">
			  <div @click="hideModal" class="modal-background"></div>
			  <div class="modal-content content">
			  	<h3>{{title}}</h3>
			    <slot></slot>
			  </div>
			  <button @click="hideModal" class="modal-close is-large" aria-label="close"></button>
			</div>
		</div>
		`,
	methods: {
		showModal: function() {
			this.isVisible = true;
		},
		hideModal: function() {
			this.isVisible = false;
		}
	}
});

var app = new Vue({
	el: '#app', 
	data: {
		

	}
});