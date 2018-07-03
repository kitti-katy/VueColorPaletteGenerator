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

      <slider-input id="HSLColorNumber"
                    :value="$store.state.hslChanges.colorNumber"
                    label="Number Of Colors"
                    value-name="colorNumber"
                    store-path="hslChanges/"
                    min="0" max="100" step="4"></slider-input>

        </b-col>

 <b-col sm="6">
   <circled-palette></circled-palette>
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

  export default {
    name: 'hslFilter',
    components: {ColorPicker, SliderInput, CircledPalette},
    props: ['label', 'textValue', 'sliderValue', 'textChange', 'sliderChange', 'inputMin', 'inputMax'],
    data() {
      return {
        headers: ['HSL', 'Starndards', 'Custom', 'From Picture']
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
        let hueChange = this.$store.state.hslChanges.hueChange
        let satChange = this.$store.state.hslChanges.satChange
        let lightChange = this.$store.state.hslChanges.lightChange

        let color = new Color(this.$store.state.colorPickerStore.baseColor,
          {
            hueChange: hueChange * (i) - 360 * (Math.floor(hueChange * i / 360)),
            satChange: satChange * (i) - 100 * (Math.floor(satChange * i / 100)),
            lightChange: lightChange * (i) - 100 * (Math.floor(lightChange * i / 100))
          }
          , 0, "ChangeColor")
        return color
      },

      
    exportPaletteToJsonFile(jsonData) {
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
