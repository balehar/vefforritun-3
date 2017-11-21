<template>
  <div id="app">
    <div>
      <div class="columns is-multiline" >

        <div class="column is-1 is is-offset-1">
          <label for="Allt">
            <input type="radio" id="Allt" value="Allt" v-model="filterCompanyName">
            Allt
          </label>
        </div>

        <div class="column is-1">
          <label for="Atlantsolía">
            <input type="radio" id="Atlantsolía" value="Atlantsolía" v-model="filterCompanyName">
            Atlantsolía
          </label>
        </div>

        <div class="column is-1">
          <label for="Costco Iceland">
            <input type="radio" id="Costco Iceland" value="Costco Iceland" v-model="filterCompanyName">
            Costco
          </label>
        </div>

        <div class="column is-1">
          <label for="Dælan">
            <input type="radio" id="Dælan" value="Dælan" v-model="filterCompanyName">
            Dælan
          </label>
        </div>

        <div class="column is-1">
          <label for="N1">
            <input type="radio" id="N1" value="N1" v-model="filterCompanyName">
            N1
          </label>
        </div>

        <div class="column is-1">
          <label for="Olís">
            <input type="radio" id="Olís" value="Olís" v-model="filterCompanyName">
            Olís
          </label>
        </div>

        <div class="column is-1">
          <label for="Orkan">
            <input type="radio" id="Orkan" value="Orkan" v-model="filterCompanyName">
            Orkan
          </label>
        </div>

        <div class="column is-1">
          <label for="Orkan X">
            <input type="radio" id="Orkan X" value="Orkan X" v-model="filterCompanyName">
            Orkan X
          </label>
        </div>

        <div class="column is-1">
          <label for="ÓB">
            <input type="radio" id="ÓB" value="ÓB" v-model="filterCompanyName">
            ÓB
          </label>
        </div>

        <div class="column is-1">
          <label for="Skeljungur">
            <input type="radio" id="Skeljungur" value="Skeljungur" v-model="filterCompanyName">
            Skeljungur
          </label>
        </div>

      </div>
    </div>
    <p class="column is-6 is-offset-3">Fjöldi Stöðvar: {{sortedGasStations.length}}</p>
    <div class="level box column is-6 is-offset-3" v-for="gasStation in sortedGasStations">

      <div class="up">
        <p class="level-left title is-5">{{gasStation.company}}</p>
        <p class="level-right">Bensín: {{gasStation.bensin95}}</p>
      </div>

      <div class="down">
        <p class="level-left subtitle is-5">{{gasStation.name}}</p>
        <p class="level-right">Dísel: {{gasStation.diesel}}</p>
      </div>

    </div>
  </div>
</template>

<script>
import axios from 'axios';
export default {
  data () {
    return {
      gasStations: [],
      filterCompanyName: "Allt",
      numberOfStations: 0
    }
  },
  computed: {
    sortedGasStations() {
      var sorted = this.gasStations.sort(function(a,b) {
        return a.bensin95 - b.bensin95;
      });

      sorted = sorted.filter(function(gasStation) {
        if(this.filterCompanyName == 'Allt')
          return gasStation.company;

        else {
          if (gasStation.company == this.filterCompanyName) {
          return gasStation.company;
          }
        }
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
  }
  
}
</script>

<style lang="scss">
@import "~bulma/bulma";

  .box {
    color: #7a7a7a;
  }

  .box:hover {
    color: black;
  }

  .level-right {
    float: right;
  }

</style>
