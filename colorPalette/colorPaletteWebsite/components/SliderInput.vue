<template>





  <div class='SliderContainer'>
    <div class='SliderLabel'>{{label}}</div>
    <input class='SliderTextInput' type='text' maxLength='3'
           v-model="value" @input="$store.commit(storePath+'set', {valueName:valueName, value: value})"/>



    <input class='SliderInput' type="range"
           v-model="value" @input="$store.commit(storePath+'set', {valueName:valueName, value: value})" min="min" max="max" step="step"/>
  </div>
</template>

<script>

  export default {
    name: 'SliderInput',
    props: ['label', 'value', 'OnChange', 'min', 'max', 'step', 'ChangeName','valueName', 'storePath'],
    data () {
    },
    methods: {
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
