<template>
  <div>
    <svg width="15" height="15" :style = "{'margin-left': $store.state.pickerPositionX, 'margin-top': $store.state.pickerPositionY }">
      <circle cx='7.5' cy='7.5' r="7.5" stroke="green" stroke-width="1" fill="yellow"></circle>
    </svg>
    <canvas id = 'canvasColorPicker' width = '360' height = '200'
            v-on:mousemove= "(e)=>handleFormInputClientXY(e,'colorPickerStore/mouseMovePicker')"
      v-on:mousedown.left = "colorPicked"
      v-on:mouseup.left = "(e)=>handleFormInputClientXY(e,'colorPickerStore/resetMouseDownPicker')"></canvas>

    <canvas id = 'canvasSaturationPicker' width = '20' height = '200'
            v-on:mousemove = "(e)=>handleFormInputClientXY(e,'colorPickerStore/mouseMoveSaturation')"
            v-on:mousedown.left = "(e)=>handleFormInputClientXY(e,'colorPickerStore/changeSaturation')"
            v-on:mouseup.left = "(e)=>handleFormInputClientXY(e,'colorPickerStore/resetMouseDownSaturation')"></canvas>
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

    }
    mouseMovePicker
},
  mounted: function () {
  console.log("CALLED ON MOUNTED")
    this.$store.commit('set', 'pickerPositionX',5)
    this.$store.commit('set', 'pickerPositionY', 5 )
    this.$store.commit('colorPickerStore/generatePickerCanvas')
    this.$store.commit('colorPickerStore/generateSaturationCanvas')
  },
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
