<template>
  <div class="topMarginContainer">
          <b-card>
      <h2>Try It! </h2>


     <b-card   id='appliableComponents' :style="{'background-color':$store.state.tryIt.backgroundColor}">
    <div style="width:100%; height:100%">
      <h1 id="h1" :style="{'color':$store.state.tryIt.h1Color}">Hello</h1>
      <h2 id="h2" :style="{'color':$store.state.tryIt.h2Color}">Hello</h2>
      <h3 id="h3" :style="{'color':$store.state.tryIt.h3Color}">Hello</h3>
      <h4 id="h4" :style="{'color':$store.state.tryIt.h4Color}">Hello</h4>
      <h5 id="h5" :style="{'color':$store.state.tryIt.h5Color}">Hello</h5>

      <p id="p" :style="{'color':$store.state.tryIt.pColor}">
          <span id="span" :style="{'color':$store.state.tryIt.spanColor}"
          >Lorem Ipsum</span> is simply dummy text of the printing and typesetting industry.
        Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,
        when an unknown printer took a galley of type and scrambled it to make a type specimen book.
        It has survived not only five centuries, but also the leap into electronic typesetting,
        remaining essentially unchanged.
        It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages,
        and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
      </p>

      <div style="display:flex; justify-content: space-between ">
      <b-button id="buttonPrimary" style="border:none"
              :style="{'color':$store.state.tryIt.buttonPrimaryFont, 'background-color':$store.state.tryIt.buttonPrimary}">
        primary
      </b-button>
      <b-button id="buttonSecondary" style="border:none"
              :style="{'color':$store.state.tryIt.buttonSecondaryFont, 'background-color':$store.state.tryIt.buttonSecondary}">
        secondary
      </b-button>
      <b-button id="buttonSuccess" style="border:none"
              :style="{'color':$store.state.tryIt.buttonSuccessFont, 'background-color':$store.state.tryIt.buttonSuccess}">
        success
      </b-button>
      <b-button id="buttonInfo" style="border:none"
              :style="{'color':$store.state.tryIt.buttonInfoFont, 'background-color':$store.state.tryIt.buttonInfo}">
        info
      </b-button>
      <b-button id="buttonDanger" style="border:none"
              :style="{'color':$store.state.tryIt.buttonDangerFont, 'background-color':$store.state.tryIt.buttonDanger}">
        danger
      </b-button>
      </div>

    </div>
</b-card>

<hr>

    <div id='chooseFrom'>
      <button :style="{'border':$store.state.tryIt.pickedAttribute=='backgroundColor'?'2px solid black':'none'}"
              @click='changePointingAttribute("backgroundColor")'>background-color
      </button>

      <button :style="{'border':$store.state.tryIt.pickedAttribute=='h1Color'?'2px solid black':'none'}"
              @click='changePointingAttribute("h1Color")'>h1
      </button>

      <button :style="{'border':$store.state.tryIt.pickedAttribute=='h2Color'?'2px solid black':'none'}"
              @click='changePointingAttribute("h2Color")'>h2
      </button>

      <button :style="{'border':$store.state.tryIt.pickedAttribute=='h3Color'?'2px solid black':'none'}"
              @click='changePointingAttribute("h3Color")'>h3
      </button>

      <button :style="{'border':$store.state.tryIt.pickedAttribute=='h4Color'?'2px solid black':'none'}"
              @click='changePointingAttribute("h4Color")'>h4
      </button>

      <button :style="{'border':$store.state.tryIt.pickedAttribute=='h5Color'?'2px solid black':'none'}"
              @click='changePointingAttribute("h5Color")'>h5
      </button>

      <button :style="{'border':$store.state.tryIt.pickedAttribute=='pColor'?'2px solid black':'none'}"
              @click='changePointingAttribute("pColor")'>p
      </button>

      <button :style="{'border':$store.state.tryIt.pickedAttribute=='spanColor'?'2px solid black':'none'}"
              @click='changePointingAttribute("spanColor")'>span
      </button>

      <button :style="{'border':$store.state.tryIt.pickedAttribute=='buttonPrimaryFont'?'2px solid black':'none'}"
              @click='changePointingAttribute("buttonPrimaryFont")'>primary button font
      </button>

      <button :style="{'border':$store.state.tryIt.pickedAttribute=='buttonPrimary'?'2px solid black':'none'}"
              @click='changePointingAttribute("buttonPrimary")'>primary button
      </button>

      <button :style="{'border':$store.state.tryIt.pickedAttribute=='buttonSecondaryFont'?'2px solid black':'none'}"
              @click='changePointingAttribute("buttonSecondaryFont")'>secondary button font
      </button>

      <button :style="{'border':$store.state.tryIt.pickedAttribute=='buttonSecondary'?'2px solid black':'none'}"
              @click='changePointingAttribute("buttonSecondary")'>secondary button
      </button>

      <button :style="{'border':$store.state.tryIt.pickedAttribute=='buttonSuccessFont'?'2px solid black':'none'}"
              @click='changePointingAttribute("buttonSuccessFont")'>success button font
      </button>

      <button :style="{'border':$store.state.tryIt.pickedAttribute=='buttonSuccess'?'2px solid black':'none'}"
              @click='changePointingAttribute("buttonSuccess")'>success button
      </button>

      <button :style="{'border':$store.state.tryIt.pickedAttribute=='buttonInfoFont'?'2px solid black':'none'}"
              @click='changePointingAttribute("buttonInfoFont")'>info button font
      </button>

      <button :style="{'border':$store.state.tryIt.pickedAttribute=='buttonInfo'?'2px solid black':'none'}"
              @click='changePointingAttribute("buttonInfo")'>info button
      </button>

      <button :style="{'border':$store.state.tryIt.pickedAttribute=='buttonDangerFont'?'2px solid black':'none'}"
              @click='changePointingAttribute("buttonDangerFont")'>danger button font
      </button>

      <button :style="{'border':$store.state.tryIt.pickedAttribute=='buttonDanger'?'2px solid black':'none'}"
              @click='changePointingAttribute("buttonDanger")'>danger button
      </button>

    </div>

        <hr>

    <div id="colors" style="width:100%">
      <div style="display:inline-block" :id="'pickColor' + n"
           v-for="n in parseInt($store.state.hslChanges.colorNumber)"
           @click="changePointingColor(getNextColor(n-1).HEXString, 'pickColor' + n)"
           :key="n-1" :style="{ 'border':$store.state.tryIt.currentColorSquare=='pickColor' + n?'2px solid black':'none',
           'height':'30px', 'width':'50px', 'background-color':getNextColor(n-1).HEXString}">
      </div>
    </div>
    
<!-- <img src='~/static/tree.svg' id="TreeSVG"/> -->

</b-card>
  </div>




</template>

<script>

  import Color from '../helperJSClasses/Color';

  export default {
    name: 'TryIt',
    data() {
      return {}
    },
    methods: {
      getNextColor(i) {
        let steppedHue = Math.floor(i/this.$store.state.hslChanges.hueStep)
        let steppedSat = Math.floor(i/this.$store.state.hslChanges.satStep)
        let steppedLight = Math.floor(i/this.$store.state.hslChanges.lightStep)
        let hueChange = this.$store.state.hslChanges.hueChange
        let satChange = this.$store.state.hslChanges.satChange
        let lightChange = this.$store.state.hslChanges.lightChange

        let color = new Color(this.$store.state.colorPickerStore.baseColor,
          {
            hueChange: hueChange * (steppedHue) - 360 * (Math.floor(hueChange * steppedHue / 360)),
            satChange: satChange * (steppedSat) - 100 * (Math.floor(satChange * steppedSat / 100)),
            lightChange: lightChange * (steppedLight) - 100 * (Math.floor(lightChange * steppedLight / 100))
          }
          , 0, "ChangeColor")
        return color
      },
      changePointingColor(hexColor, id) {
        this.$store.commit('tryIt/set', {valueName: 'pickedColor', value: hexColor})
        this.$store.commit('tryIt/set', {valueName: 'currentColorSquare', value: id})
        let attributeToChange = this.$store.state.tryIt.pickedAttribute
        this.$store.commit('tryIt/set', {valueName: attributeToChange, value: hexColor})
      },
      changePointingAttribute(pickedAttribute) {
        this.$store.commit('tryIt/set', {valueName: 'pickedAttribute', value: pickedAttribute})
      },
      findAllFills() {

      let colorElements = document.getElementById("TreeSVG").getElementsByTagName("path")
      let colors = {}
      console.log(colorElements)
      for (var i = 0; i < colorElements.length; i++) { 
        colorElements[i].setAttribute("fill", "red");
      }

      }
    },
        mounted: function () {
      //this.findAllFills()
    }
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
