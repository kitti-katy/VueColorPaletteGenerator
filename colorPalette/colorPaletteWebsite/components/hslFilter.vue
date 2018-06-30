<template>
<div id='HSLMainHolder'>


  <div id='HSLColorPicker'>
    HSL FILTER EXISTS
    <color-picker></color-picker>
  </div>

  <div id='HSLColorCircle'>
</div>

  <slider-input id="HueFilter"
                :value="$store.state.colorPickerStore.hueChange"
                label="Hue Change"
                value-name="hueChange"
                min="0" max="100" step="1"></slider-input>
  <slider-input id="SatFilter"
                :value="$store.state.colorPickerStore.satChange"
                label="Saturation Change"
                value-name="satChange"
                min="0" max="100" step="1"></slider-input>
  <slider-input id="LightFilter"
                :value="$store.state.colorPickerStore.lightChange"
                label="Light Change"
                value-name="lightChange"
                min="0" max="100" step="1"></slider-input>
  <slider-input id="HSLColorNumber"
                :value="$store.state.colorPickerStore.numberOfColors"
                label="Number Of Colors"
                value-name="numberOfColors"
                min="0" max="100" step="4"></slider-input>

  <div id='HSLColorSquares'>
  </div>

</div>

</template>
<script>
import SliderInput from "./SliderInput";
import ColorPicker from "./ColorPicker";
export default {
name: 'hslFilter',
  components: {ColorPicker, SliderInput},
  props: ['label', 'textValue', 'sliderValue', 'textChange', 'sliderChange', 'inputMin', 'inputMax'],
data () {
return {
headers: ['HSL', 'Starndards', 'Custom', 'From Picture']
}
}
,
computed: {
  hueChange () {
    return this.$store.state.colorPickerStore.hueChange
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
    grid-column: 1 / 5;
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
