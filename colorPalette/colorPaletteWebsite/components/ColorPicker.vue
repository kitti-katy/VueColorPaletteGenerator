<template>
<div>
  <div id="ColorPickerBox">
    
    <div class="MainBox">
    <svg id="pickerCircle" width="15" height="15" 
         :style = "{'margin-left': $store.state.colorPickerStore.pickerPositionX, 'margin-top': $store.state.colorPickerStore.pickerPositionY }">
      <circle cx='7.5' cy='7.5' r="7.5" stroke="green" stroke-width="1" fill="yellow"></circle>
    </svg>

    <canvas id = 'canvasColorPicker' width = '360' height = '200'
            v-on:mousemove= "mouseMovePicker"
            v-on:mousedown.left = "colorPicked"
            v-on:mouseup.left = "resetMouseOnCanvas($event)"
            v-on:mouseout = "resetMouseOnCanvas($event)"></canvas>
    </div>

    <canvas class="SaturationBox" id = 'canvasSaturationPicker' width = '25' height = '200'
            v-on:mousemove = "mouseMoveSaturation"
            v-on:mousedown.left = "saturationPicked"
            v-on:mouseup.left = "resetMouseOnSaturationCanvas($event)"
            v-on:mouseout = "resetMouseOnSaturationCanvas($event)"></canvas>


    <div class='HSLInputBox PickerInput'>      

      <div>H</div>
      <input type="number"  min="0" max="359"
              :value="$store.state.colorPickerStore.baseColor.hsl.hue" @input="setNewColorFromHSL($event,'h')">

      <div>S</div>
      <input type="number"  min="0" max="99" 
              :value="$store.state.colorPickerStore.baseColor.hsl.sat" @input="setNewColorFromHSL($event,'s')">

      <div>L</div>
      <input type="number"  min="0" max="99"
              :value="$store.state.colorPickerStore.baseColor.hsl.light" @input="setNewColorFromHSL($event,'l')">

    </div>

    <div class='RGBInputBox PickerInput'>

      <div>R</div>
      <input type="number"  min="0" max="256"
              :value="$store.state.colorPickerStore.baseColor.rgb.r" @input="setNewColorFromRGB($event,'r')">

      <div>G</div>
      <input type="number"  min="0" max="256"
              :value="$store.state.colorPickerStore.baseColor.rgb.g" @input="setNewColorFromRGB($event,'g')">

      <div>B</div>
      <input type="number"  min="0" max="256"
              :value="$store.state.colorPickerStore.baseColor.rgb.b" @input="setNewColorFromRGB($event,'b')">
    </div>

  </div>
    <div height="100px" width="100px" :style = "{'background-color':$store.state.colorPickerStore.hex}">
  </div>
  </div>
</template>


<script>

import Color from "../helperJSClasses/Color"
import _ from 'lodash'
export default {
name: 'ColorPicker',
props: ['label', 'textValue', 'sliderValue', 'textChange', 'sliderChange', 'inputMin', 'inputMax'],
data () {
  self: this
},
  methods:{

    // Mouse Down
    colorPicked(e){
      this.$store.commit('colorPickerStore/set', {valueName:'pickerMouseDown', value: true})
      this.$store.commit('colorPickerStore/getColor', {clientX:e.clientX, clientY:e.clientY})
      this.$store.commit('colorPickerStore/generateSaturationCanvas', {clientX:e.clientX, clientY:e.clientY})
    },
    saturationPicked(e){
      this.$store.commit('colorPickerStore/set', {valueName:'mouseDownSaturation', value: true})
      this.$store.commit('colorPickerStore/changeSaturation', {clientX:e.clientX, clientY:e.clientY})
      this.$store.commit('colorPickerStore/generatePickerCanvas', {clientX:e.clientX, clientY:e.clientY})
    },

    // Mouse Move
    mouseMoveSaturation:_.throttle((e, self) => {
      if(self.$store.state.colorPickerStore.mouseDownSaturation)
      self.saturationPicked(e)
    }, 2000),
    mouseMovePicker:_.throttle((e, self) => {
      if(self.$store.state.colorPickerStore.pickerMouseDown )
      self.colorPicked(e)
    }, 2000),

    // Mouse Up/Out
    resetMouseOnCanvas(){
      this.$store.commit('colorPickerStore/set', {valueName:'pickerMouseDown', value: false})
    },
    resetMouseOnSaturationCanvas(){
      this.$store.commit('colorPickerStore/set', {valueName:'mouseDownSaturation', value: false})
    },

    
    //text input handling
    //HSL
    setNewColorFromHSL(e, changer){
      let value = e.target.value
      let h = changer =="h"? value : this.$store.state.colorPickerStore.baseColor.HSL.hue
      let s = changer =="s"? value : this.$store.state.colorPickerStore.baseColor.HSL.sat
      let l = changer =="l"? value : this.$store.state.colorPickerStore.baseColor.HSL.light
      this.$store.commit('colorPickerStore/set', {valueName:'baseColor',value:new Color(h,s,l, "HSL")})
    },
    //RGB
    setNewColorFromRGB(e){
      let value = e.target.value
      let r = changer =="r"? value : this.$store.state.colorPickerStore.baseColor.RGB.r
      let g = changer =="g"? value : this.$store.state.colorPickerStore.baseColor.RGB.g
      let b = changer =="b"? value : this.$store.state.colorPickerStore.baseColor.RGB.b
      this.$store.commit('colorPickerStore/set', {valueName:'baseColor', value:new Color(r,g,b, "RGB")})
    },
    //Hex
    setNewColorFromHex(e,stateName){
      this.$store.commit('colorPickerStore/set', {valueName:'baseColor', value:new Color(hex,0,0, "Hex")})
    }
},
  mounted: function () {
    this.$store.commit('colorPickerStore/set', 'pickerPositionX',5)
    this.$store.commit('colorPickerStore/set', 'pickerPositionY', 5 )
    this.$store.commit('colorPickerStore/generatePickerCanvas')
    this.$store.commit('colorPickerStore/generateSaturationCanvas')
  },
}
</script>




<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

  #ColorPickerBox
  {
    height: 100%;
    display: grid;
    grid-gap: 5px;
    grid-template-columns: 360px 25px 1fr 1fr;
    grid-template-rows: 200px 60px 60px 60px auto;

  }
  .MainBox
  {
    grid-row: 1 / 3;
    grid-column: 1;

  }

  .SaturationBox
  {
    grid-column: 2;
    grid-row: 1 / 3;
    background-color: white;
  }

  #pickerCircle{
    position: absolute;
    z-Index: 4000;
    pointer-events:none;
  }

</style>
