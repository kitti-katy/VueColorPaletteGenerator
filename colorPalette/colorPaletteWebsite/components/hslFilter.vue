<template>
<div id='HSLMainHolder'>


  <div id='HSLColorPicker'>
    HSL FILTER EXISTS
    <color-picker></color-picker>
  </div>

  <div id='HSLColorCircle'>
</div>

  <slider-input id="HueFilter"
                :value="$store.state.hslChanges.hueChange"
                label="Hue Change"
                value-name="hueChange"
                store-path="hslChanges/"
                min="0" max="100" step="1"></slider-input>
  <slider-input id="SatFilter"
                :value="$store.state.hslChanges.satChange"
                label="Saturation Change"
                value-name="satChange"
                store-path="hslChanges/"
                min="0" max="100" step="1"></slider-input>
  <slider-input id="LightFilter"
                :value="$store.state.hslChanges.lightChange"
                label="Light Change"
                value-name="lightChange"
                store-path="hslChanges/"
                min="0" max="100" step="1"></slider-input>
  <slider-input id="HSLColorNumber"
                :value="$store.state.hslChanges.colorNumber"
                label="Number Of Colors"
                value-name="colorNumber"
                store-path="hslChanges/"
                min="0" max="100" step="4"></slider-input>

  <div id='HSLColorSquares'>
      <div v-for="n in parseInt($store.state.hslChanges.colorNumber)+1"
       :key="n-1" :style="{'height':'100px', 'width':'100px', 'background-color':getNextColor(n-1).HEXString}" >
       {{getNextColor(n-1).HEXString}}</div>
  </div>

</div>

</template>
<script>
import SliderInput from "./SliderInput";
import ColorPicker from "./ColorPicker";
import Color from '../helperJSClasses/Color';
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
  }},
  methods:{
      getNextColor(i){
        let hueChange = this.$store.state.hslChanges.hueChange
        let satChange = this.$store.state.hslChanges.satChange
        let lightChange = this.$store.state.hslChanges.lightChange

        let color = new Color(this.$store.state.colorPickerStore.baseColor ,
            {   hueChange: hueChange * (i) - 360 * (Math.floor( hueChange * i / 360)),
                satChange : satChange * (i) - 100 * (Math.floor(satChange * i  / 100)),
                lightChange : lightChange * (i) - 100 * (Math.floor(lightChange * i / 100))}
            , 0, "ChangeColor")
        return color
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
    grid-row: 5;
    grid-column: 1 / 5;
    background-color: white;
  }

</style>
