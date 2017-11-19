Vue.component('v-tab', {

	props: [],

	data: function() {
		return {};
	},

	template: `
			<div class="tabs is-centered is-medium">
			  <ul>
			    <li class="is-active">
			      <a>
			        <span class="icon is-small"><i class="fa fa-image"></i></span>
			        <span>Pictures</span>
			      </a>
			    </li>
			    <li>
			      <a>
			        <span class="icon is-small"><i class="fa fa-music"></i></span>
			        <span>Music</span>
			      </a>
			    </li>
			    <li>
			      <a>
			        <span class="icon is-small"><i class="fa fa-film"></i></span>
			        <span>Videos</span>
			      </a>
			    </li>
			    <li>
			      <a>
			        <span class="icon is-small"><i class="fa fa-file-text-o"></i></span>
			        <span>Documents</span>
			      </a>
			    </li>
			  </ul>
			</div>
		`,
	methods: {
		
	}
});

var app = new Vue({
	el: '#app', 
	data: {
		

	}
});