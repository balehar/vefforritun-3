Vue.component('v-tabs', {

	props: ['tabs'],

	data: function() {
		return {
			isVisable0: true,
			isVisable1: false,
			isVisable2: false,
			isVisable3: false
		};
	},

	template: `
			<div>
				<div class="columns">
					<div class="tabs column is-half is-offset-one-quarter is-centered">

				  		<ul>
				  			<li v-for="(tab, index) in tabs"><a @click="showModal(index)">{{tab}}</a></li>
				  		</ul>
					</div>
				</div>
				<v-modal v-show="isVisable0" title="Bjarmi Anes"></v-modal>

				<v-modal v-show="isVisable1" title="Verkefni"></v-modal>

				<v-modal v-show="isVisable2" title="Hafa samband"></v-modal>

				<v-modal v-show="isVisable3" title="Eitthvað skemmtilegt"></v-modal>
			</div>
		`,
	methods: {
		showModal: function($tabId) {
			
			if($tabId == 0)
				isVisable0 = true;

			else if($tabId == 1)
				isVisable1 = true;

			else if($tabId == 2)
				isVisable2 = true;

			else if($tabId == 3)
				isVisable3 = true;
		}
		
	}
});

Vue.component('v-modal', {

	props: ['title'],

	data: function() {
		return {
			
		};
	},

	template: `
			<div class="columns">
				<div class="column is-half is-offset-one-quarter flokinn">
					<div class="columns">
						<p class="title is-4 column is-offset-one-third">{{title}}</p>
					</div>
				</div>
			</div>
		`,
	methods: {
		
		
	}
});

var app = new Vue({
	el: '#app',
	data: {

	},

	methods: {

	}
});