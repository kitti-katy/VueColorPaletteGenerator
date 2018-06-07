<template>

  <div id="ColorPickerBox">
    
    <div class="MainBox">
    <svg id="pickerCircle" width="15" height="15" 
         :style = "{'margin-left': $store.state.pickerPositionX, 'margin-top': $store.state.pickerPositionY }">
      <circle cx='7.5' cy='7.5' r="7.5" stroke="green" stroke-width="1" fill="yellow"></circle>
    </svg>

    <canvas id = 'canvasColorPicker' width = '360' height = '200'
            v-on:mousemove= "mouseMovePicker"
            v-on:mousedown.left = "colorPicked"
            v-on:mouseup.left = "(e)=>handleFormInputClientXY(e,'colorPickerStore/resetMouseDownPicker')"></canvas>
    
    </div>

    <canvas class="SaturationBox" id = 'canvasSaturationPicker' width = '25' height = '200'
            v-on:mousemove = "(e)=>handleFormInputClientXY(e,'colorPickerStore/mouseMoveSaturation')"
            v-on:mousedown.left = "(e)=>handleFormInputClientXY(e,'colorPickerStore/changeSaturation')"
            v-on:mouseup.left = "(e)=>handleFormInputClientXY(e,'colorPickerStore/resetMouseDownSaturation')"></canvas>


    <div class='HSLInputBox PickerInput'>
      
      <div>H</div>
      <input type="number"  min="0" max="359">

      <div>S</div>
      <input type="number"  min="0" max="99">

      <div>L</div>
      <input type="number"  min="0" max="99">
    
    </div>

    <div class='RGBInputBox PickerInput'>
      
      <div>R</div>
      <input type="number"  min="0" max="256">

      <div>G</div>
      <input type="number"  min="0" max="256">

      <div>B</div>
      <input type="number"  min="0" max="256">
    
    </div>


  </div>


</template>


<script>
export default {
name: 'ColorPicker',
props: ['label', 'textValue', 'sliderValue', 'textChange', 'sliderChange', 'inputMin', 'inputMax'],
data () {
},
  methods:{

    handleFormInputClientXY (e, mutationName) {
      this.$store.commit(mutationName, {clientX:e.clientX, clientY:e.clientY})
    },
    colorPicked(e){
      this.$store.commit('colorPickerStore/getColor', {clientX:e.clientX, clientY:e.clientY})
      this.$store.commit('colorPickerStore/generateSaturationCanvas', {clientX:e.clientX, clientY:e.clientY})
    },
    mouseMovePicker(e){
      if(this.$store.state.colorPickerStore.pickerMouseDown)
      this.colorPicked(e)
    }
},
  mounted: function () {
    this.$store.commit('set', 'pickerPositionX',5)
    this.$store.commit('set', 'pickerPositionY', 5 )
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
    z-Index: 4000
  }

</style>
