Vue.component('notification', {
	props: ['type'],

	data: function() {
		return {
			isVisible: true
		};
	},

	template: `
		<div :class="'notification ' + type" v-show="isVisible">
		  <button @click="deleteNotification" class="delete"></button>
		  <slot></slot>
		</div>

		`,
	methods: {
		deleteNotification: function() {
			this.isVisible = false;
		}
	}
});

var app = new Vue({
	el: '#app', 
	data: {
		

	}
});