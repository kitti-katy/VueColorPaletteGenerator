<template>
<div id='HSLMainHolder'>


  <div id='HSLColorPicker'>
    HSL FILTER EXISTS
  </div>

  <div id='HSLColorCircle'>
  </div>

  <SliderInput id="HueFilter" ></SliderInput>
  <SliderInput id="SatFilter"></SliderInput>
  <SliderInput id="LightFilter"></SliderInput>
  <SliderInput id="HSLColorNumber"></SliderInput>

  <div id='HSLColorSquares'>
  </div>

</div>

</template>
<script>
export default {
name: 'hslFilter',
props: ['label', 'textValue', 'sliderValue', 'textChange', 'sliderChange', 'inputMin', 'inputMax'],
data () {
return {
headers: ['HSL', 'Starndards', 'Custom', 'From Picture']
}
}
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

  #HSLMainHolder {
    height: 100%;
    display: grid;
    grid-gap: 20px;
    grid-template-columns: 1fr 1fr 1fr 1fr;
    grid-template-rows: 200px 60px 60px 60px auto;
    background-color: white;
  }
  #HSLColorPicker{
    grid-row: 1;
    grid-column: 1 / 3;
    background-color: white;
  }
  #HSLColorCircle{
    grid-row: 2 / 5;
    grid-column: 2;
    background-color: white;
  }
  #HueFilter
  {
    width:50%;
    grid-row: 2 / 5;
    grid-column: 1;
    background-color: white;
  }
  #SatFilter
  {
    width:50%;
    grid-row: 3;
    grid-column: 1;
    background-color: white;
  }
  #LightFilter
  {
    width: 50%;
    grid-row: 4;
    grid-column: 1;
    background-color: white;
  }
  #HSLColorNumber
  {
    grid-row: 4;
    grid-column: 2;
    background-color: white;
  }
  #HSLColorSquares
  {
    gridRow: 5;
    gridColumn: 1 / 5;
    backgroundColor: white;
  }

</style>
