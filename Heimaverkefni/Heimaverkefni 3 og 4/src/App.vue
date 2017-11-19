<template>
  <div id="app" >
    <div class="column is-1 is-offset-3" v-for="">
      <input type="radio" name="companyName">

    </div>
    <div class="box column is-6 is-offset-3" v-for="gasStation in sortedGasStations">
      <p class="title is-4">{{gasStation.company}}</p>
      <p class="subtitle is-5">{{gasStation.name}}</p>
      <p>Bensín: {{gasStation.bensin95}}</p>
      <p>Dísel: {{gasStation.diesel}}</p>
    </div>
  </div>
</template>

<script>
import axios from 'axios';
export default {
  data () {
    return {
      gasStations: [],
      maxBensinVerd: 300,
    }
  },
  computed: {
    sortedGasStations() {
      var sorted = this.gasStations.sort(function(a,b) {
        return a.bensin95 - b.bensin95;
      });

      sorted = sorted.filter(function(gasStation) {
        return gasStation.bensin95 < this.maxBensinVerd;
      }.bind(this));
      return sorted;
    }
  },
  mounted() {
    var self = this;
    axios.get('http://apis.is/petrol')
      .then(function (response) {
        self.gasStations = response.data.results;
        console.log(response);
    })
    .catch(function (error) {
      console.log(error);
    });
  },
}
</script>

<style lang="scss">
@import "~bulma/bulma";

  
</style>
