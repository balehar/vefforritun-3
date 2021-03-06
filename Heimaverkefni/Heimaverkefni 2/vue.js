Vue.component('v-task', {
	template: `<ul class="list">

	    <li v-for="task in taskList" v-bind:class="{done: task.checked}">

	      <input type="checkbox" class="checkbox" v-model="task.checked">

	      <label v-if="task.edit === false" v-on:click="task.edit = true" for="checkbox">{{ task.text }}</label>

	      <input class="text-input" v-if="task.edit === true" type="text" v-bind:value="task.text" v-model="task.text" autofocus v-on:keyup.enter="task.edit = false">

	      <button class="delete" v-on:click="removeTask(task)">X</button>

	    </li>

	  </ul>`
});



new Vue({

  
  el: "#todo",

  
  data: {
  	newTask: "",
    taskList: []
	},

	computed: {
	    areAllSelected: function() {
	      //Check if every checked property returns true and if there is at least one todo item
	      return this.taskList.every(function(task) {
	        return task.checked;
	      }) && this.taskList.length > 0;
	    },
	  },

  methods: {
	addTask: function() {
		//trim() is used to remove whitespace from both ends of a string
		var task = this.newTask.trim();
		//if task is not an empty string
		if (task) {
		  //Push an object containing the task to the taskList array
		  this.taskList.push({
		    text: task,
		    checked: false,
		    edit: false
		});
		  //Reset newTask to an empty string so the input field is cleared
		  this.newTask = "";
  		}
  	},

  	removeTask: function(task) {
      var index = this.taskList.indexOf(task);
      this.taskList.splice(index, 1);
    },

    clearList: function() {
      //Setting taskList to an empty array clears the whole list
      this.taskList = [];
    },

    selectAll: function(task) {
	  //targetValue is set to the opposite of areAllSelected
	  var targetValue = this.areAllSelected ? false : true;
	  //we use a for loop to set the checked state of all items to the target value
	  for (var i = 0; i < this.taskList.length; i++) {
	    this.taskList[i].checked = targetValue;
	  }
	}
}
});