<template>
  <div>

    <svg width="15" height="15" id="pickerCircle" :style="{marginLeft: pickerPositionX, pickerPositionY }">
      <circle cx='7.5' cy='7.5' r="7.5" stroke="green" stroke-width="1" fill="yellow" />
    </svg>

    <canvas id = 'canvasColorPicker' width = '360' height = '200'
            @onmousemove="(e)=>mouseMovePicker(e)"
      onMouseDown = {(e)=> this.getColor(e)}
      onMouseUp={this.resetMouseDownPicker}></canvas>

    <canvas id = 'canvasSaturationPicker' width = '20' height = '200'
            onMouseMove={(e) => this.mouseMoveSaturation(e)}
    onMouseDown = {(e)=>this.changeSaturation(e)}
    onMouseUp={this.resetMouseDownSaturation}></canvas>
  </div>

</template>
<script>
export default {
name: 'ColorPicker',
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
