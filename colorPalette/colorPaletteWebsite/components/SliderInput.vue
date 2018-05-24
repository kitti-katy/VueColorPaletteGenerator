<template>
  <div class='SliderContainer'>
    <div class='SliderLabel'>{{label}}</div>
    <input class='SliderTextInput' type='text' maxLength='3'
           v-model="text.value" @input="text.change"/>
    <input class='SliderInput' type="range"
           v-model="slider.value" @input="slider.change" min="input.min" max="input.max"/>
  </div>
</template>

<script>

  export default {
    name: 'SliderInput',
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

  .SliderContainer
  {
    height: 100%;
    display: grid;
    grid-gap: 2%;
    grid-template-columns: 150px 30px;
    grid-template-rows: 25px 30px;
  }
  .SliderLabel
  {
    grid-row: 1;
    grid-column: 1 / 2;
    line-height: 25px;
    text-align: left;

  }
  .SliderTextInput
  {
    grid-row: 1;
    grid-column: 2;
    height:20px;
  }
  .SliderInput
  {
    grid-row: 2;
    grid-column: 1 / 3;
  }
</style>
