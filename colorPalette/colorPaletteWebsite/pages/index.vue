<template>
  <div id='mainHolder'>
    <div id='topMenu'></div>
    <div id='filters'>

      <div id='filtersMenu'>
        <p v-for="header in headers" :key="header"
           style='display:inline; float:left; margin-left:2%'>{{header}}</p>
      </div>

      <div id='filtersBody'>\
        <hsl-filter></hsl-filter>
      </div>

      <div id='commonFilters'></div>


    </div>
    <div id='tryIt'></div>
  </div>
</template>

<script>
  import HslFilter from "../components/hslFilter";

  export default {
    components: {HslFilter},
    name: 'EditorPage',
    data () {
      return {
        headers: ['HSL', 'Starndards', 'Custom', 'From Picture']
      }
    }
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

  #mainHolder {
    height: 1000px;
    margin: 5%;
    display: grid;
    grid-gap: 10px;
    grid-template-columns: 1fr 1fr;
    grid-template-rows: 100px auto;
    background-color: wheat;
  }
  #topMenu {
    grid-row: 1;
    grid-column: 1 / 3;
    background-color: black;
  }
  #filters {
    grid-row: 2 / 3;
    grid-column: 1;
    background-color: grey;
    width: 100%;
    height: 100%;
    display: grid;
    grid-gap: 2.5%;
    grid-template-columns: auto;
    grid-template-rows: 50px auto 200px
  }
  #tryIt {
    grid-row: 2 / 3;
    grid-column: 2;
    background-color: darkgray;
  }

  #filtersMenu{
    grid-row: 1;
  }
  #filtersBody{
    grid-row: 2;
    background-color: green;
  }
  #commonFilters {
    grid-row: 3;
    background-color: black;
  }
</style>
