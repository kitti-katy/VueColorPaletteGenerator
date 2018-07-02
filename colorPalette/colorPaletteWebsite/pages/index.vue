<template>
  <v-app>
    <div id='mainHolder'>
      <link rel="stylesheet" href="//fonts.googleapis.com/css?family=Roboto:400,500,700,400italic|Material+Icons">

      <nav-bar></nav-bar>

      <b-row align-h="around">
        <b-col lg="7">

          <b-nav tabs>
            <b-nav-item active>HSL</b-nav-item>
            <b-nav-item>Custom</b-nav-item>
            <b-nav-item>From Picture</b-nav-item>
          </b-nav>
          <hsl-filter></hsl-filter>

        </b-col>
        <b-col lg="5">
          <try-it></try-it>
        </b-col>
      </b-row>


    </div>


  </v-app>
</template>

<script>
  import HslFilter from "../components/hslFilter";
  import TryIt from "../components/TryIt";
  import navBar from "../components/navBar";

  export default {
    components: {HslFilter, TryIt, navBar},
    name: 'EditorPage',
    data() {
      return {
        headers: ['HSL', 'Starndards', 'Custom', 'From Picture']
      }
    }
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style>


.topMarginContainer{
  margin-top:24px
}

.topMarginComponent{
  margin-top:12px
}
  /*

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
    }*/
</style>
