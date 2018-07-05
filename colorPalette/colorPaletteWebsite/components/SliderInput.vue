<template>





  <div class='SliderContainer'>
    <div class='SliderLabel'>{{label}}</div>
    <input class='SliderTextInput' type='text' maxLength='3'
           v-model="value" @input="$store.commit(storePath+'set', {valueName:valueName, value: value})"/>


  <div class="SliderInput slidecontainer">
    <input  type="range" class="slider"
           v-model="value" @input="$store.commit(storePath+'set', {valueName:valueName, value: value})" :min="min" :max="max" :step="step"/>
  </div></div>
</template>

<script>

  export default {
    name: 'SliderInput',
    props: ['label', 'value', 'OnChange', 'min', 'max', 'step', 'ChangeName','valueName', 'storePath'],
    data () {
    },
    methods: {

    },
    mounted: function () {
    }
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

  .SliderContainer
  {
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
  .slidecontainer {
    width: 100%; /* Width of the outside container */
}
/* Mouse-over effects */
.slider:hover {
    opacity: 1; /* Fully shown on mouse-over */
}

.slider {
    -webkit-appearance: none;
    width: 100%;
    height: 4px;
    border-radius: 5px;   
    background: #d3d3d3;
    outline: none;
    opacity: 0.7;
    -webkit-transition: .2s;
    transition: opacity .2s;
}

.slider::-webkit-slider-thumb {
    -webkit-appearance: none;
    appearance: none;
    width: 15px;
    height: 15px;
    border-radius: 50%; 
    background: darkgray;
    cursor: pointer;
}

.slider::-moz-range-thumb {
    width: 15px;
    height: 15px;
    border-radius: 50%;
    background: darkgray;
    cursor: pointer;
}
</style>
