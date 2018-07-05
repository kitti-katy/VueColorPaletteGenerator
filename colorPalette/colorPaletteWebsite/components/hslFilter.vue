<template>

  <div id='HSLMainHolder'>


    <div id='HSLColorPicker'>
      <b-container>
        <color-picker></color-picker>
      </b-container>
    </div>

 <b-container  class="topMarginContainer">
    <h5>Apply HSL Changes </h5>
    <hr>

 <b-container class="topMarginContainer" id='FiltersContainer'>
 <b-row>
      

 <b-col sm="3">
      <slider-input id="HueFilter"
                    :value="$store.state.hslChanges.hueChange"
                    label="Hue Change"
                    value-name="hueChange"
                    store-path="hslChanges/"
                    min="0" max="100" step="1"></slider-input>
      <slider-input class="topMarginComponent" id="SatFilter"
                    :value="$store.state.hslChanges.satChange"
                    label="Saturation Change"
                    value-name="satChange"
                    store-path="hslChanges/"
                    min="0" max="100" step="1"></slider-input>
      <slider-input class="topMarginContainer" id="LightFilter"
                    :value="$store.state.hslChanges.lightChange"
                    label="Light Change"
                    value-name="lightChange"
                    store-path="hslChanges/"
                    min="0" max="100" step="1"></slider-input>
       </b-col>

    <b-col sm="3">
      <slider-input id="HueStepFilter"
                    :value="$store.state.hslChanges.hueStep"
                    label="Hue Step"
                    value-name="hueStep"
                    store-path="hslChanges/"
                    min="1" max="25" step="1"></slider-input>
      <slider-input class="topMarginComponent" id="SatFilter"
                    :value="$store.state.hslChanges.satStep"
                    label="Saturation Step"
                    value-name="satStep"
                    store-path="hslChanges/"
                    min="1" max="25" step="1"></slider-input>

      <slider-input class="topMarginContainer" id="LightFilter"
                    :value="$store.state.hslChanges.lightStep"
                    label="Light Step"
                    value-name="lightStep"
                    store-path="hslChanges/"
                    min="1" max="25" step="1"></slider-input>

       </b-col>

        <b-col sm="3">

 <circled-palette></circled-palette>

     <b-form-select @change="applyPreset" :options="presets" class="mb-3" />

      <slider-input id="HSLColorNumber"
                    :value="$store.state.hslChanges.colorNumber"
                    label="Number Of Colors"
                    value-name="colorNumber"
                    store-path="hslChanges/"
                    min="0" max="120" step="4"></slider-input>

        </b-col>

 <b-col sm="6">
  
 </b-col>




 </b-row>
   </b-container>
 
 </b-container>

 <b-container class="topMarginContainer">
       <h5>Palette Generated  

<button @click="exportPaletteToJsonFile"
style="border:none; background-color:transparent;float:right; font-size:0.75em;cursor: pointer;"> 
<span >Export JSON </span>
<img src='~/static/export.svg' alt="export JSON"/>

</button></h5>
    <hr>

    <b-col id='GeneratedColors' sm="12" class="topMarginContainer">
      <div style="display:inline;width:100px;" v-for="n in parseInt($store.state.hslChanges.colorNumber)" :key="n-1">
        
        <div style="display:inline-block">
        <span style=" display:block;max-width:100px; text-align:center; vertical-align: text-bottom; margin:0">{{getNextColor(n-1).HEXString}}</span>
        <div style="display:inline-block"
              :style="{'min-height':'50px', 'min-width':'80px', 'background-color':getNextColor(n-1).HEXString}">
        </div>
        </div>
      </div>

 </b-col>
 </b-container>

  </div>

</template>
<script>
  import SliderInput from "./SliderInput";
  import ColorPicker from "./ColorPicker";
  import Color from '../helperJSClasses/Color';
  import CircledPalette from "./CircledPalette";
  import getNextColor from '../helperJSClasses/getNextColor';

  export default {
    name: 'hslFilter',
    components: {ColorPicker, SliderInput, CircledPalette},
    props: ['label', 'textValue', 'sliderValue', 'textChange', 'sliderChange', 'inputMin', 'inputMax'],
    data() {
      return {
        headers: ['HSL', 'Starndards', 'Custom', 'From Picture'],
        presets: [
                 {value: {n:40,h:90,s:0,l:10,st_h:10,st_s:1,st_l:1} , text:'square'},
                 {value:{n:120,h:30,s:0,l:10,st_h:10,st_s:1,st_l:1}, text:'analogous'}
                 ]
        }
      }
    ,
    computed: {
      hueChange() {
        return this.$store.state.colorPickerStore.hueChange
      }
    },
    methods: {
      getNextColor(i) {
       return getNextColor(i, this.$store.state.colorPickerStore.baseColor,this.$store.state.hslChanges.hueChange,
         this.$store.state.hslChanges.satChange, this.$store.state.hslChanges.lightChange,
         this.$store.state.hslChanges.hueStep, this.$store.state.hslChanges.satStep, this.$store.state.hslChanges.lightStep)
      },
    exportPaletteToJsonFile() {
      let colorElements = document.getElementById("GeneratedColors").getElementsByTagName("span")
      let colors = {}
      for (var i = 0; i < colorElements.length; i++) { 
        colors["color"+i]=colorElements[i].innerHTML
      }

    let dataStr = JSON.stringify(colors);
    let dataUri = 'data:application/json;charset=utf-8,'+ encodeURIComponent(dataStr);
    
    let exportFileDefaultName = 'palette.json';

    let linkElement = document.createElement('a');
    linkElement.setAttribute('href', dataUri);
    linkElement.setAttribute('download', exportFileDefaultName);
    linkElement.click();
},
   applyPreset(preset){
      this.$store.commit("hslChanges/applyPreset", {p: preset});
   }
    }
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

  #HSLMainHolder {
  /*  height: 100%;
    display: grid;
    grid-gap: 20px;
    grid-template-columns: 1fr 1fr 1fr 1fr;
    grid-template-rows: 200px 204px auto;
    background-color: white;*/
  }

  #HSLColorPicker {
    /*grid-row: 1;
    grid-column: 1 / 5;
    background-color: white;*/
  }

  #HSLColorCircle {/*
    grid-row: 2 / 5;
    grid-column: 2;
    background-color: white;*/
  }

 #FiltersContainer{
  /*  height: 100%;
    display: grid;
    grid-gap: 20px;
    grid-template-columns: 1fr 1fr 1fr 1fr;
    grid-template-rows:  60px; */
 }

  #HueFilter {/*
    width: 50%;
    grid-row: 1 / 4;
    grid-column: 1;
    background-color: white;*/
  }

  #SatFilter {/*
    width: 50%;
    grid-row: 2;
    grid-column: 1;
    background-color: white;*/
  }

  #LightFilter {/*
    width: 50%;
    grid-row: 3;
    grid-column: 1;
    background-color: white;*/
  }

  #HSLColorNumber {/*
    grid-row: 3;
    grid-column: 2;
    background-color: white;*/
  }

  #HSLColorSquares {
    grid-row: 4;
    grid-column: 1 / 5;
    background-color: white;
  }
.icon {
  display: inline-block;
  width: 1em;
  height: 1em;
  stroke-width: 0;
  stroke: red;
  fill: red;
}

/* ==========================================
Single-colored icons can be modified like so:
.icon-name {
  font-size: 32px;
  color: red;
}
========================================== */

</style>
