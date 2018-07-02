<template>
  <div class="topMarginContainer">

<h5> Choose Color </h5>
<hr>
    <div id="ColorPickerBox">
      <b-container>
        <b-row>
          <b-col sm="5">
            <div class="MainBox">
              <div id="pickerCircle"
                   :style="{'margin-left': $store.state.colorPickerStore.baseColor.hsl.hue-15 + 'px', 'width':'30px', 'height': '30px',
         'margin-top': $store.state.colorPickerStore.baseColor.hsl.light*2-15 + 'px', 'background-color': $store.state.colorPickerStore.baseColor.HEXString,
         'border':'2px solid white', 'border-radius':'15px' }">
              </div>
              <canvas id='canvasColorPicker' width='360' height='200'
                      v-on:mousemove="mouseMovePicker"
                      v-on:mousedown.left="colorPicked"
                      v-on:mouseup.left="resetMouseOnCanvas($event)"
                      v-on:mouseout="resetMouseOnCanvas($event)"></canvas>
            </div>
          </b-col>

          <b-col sm="1">
            <div>
              <div id="saturationCircle"
                   :style="{'margin-left': '-2.5px', 'width':'32.5px', 'height': '14px',
         'margin-top': $store.state.colorPickerStore.baseColor.hsl.sat*2- 5 + 'px',
         'background-color': $store.state.colorPickerStore.baseColor.HEXString,
         'border':'2px solid white', 'border-radius':'3px' }">
              </div>
              <canvas class="SaturationBox" id='canvasSaturationPicker' width='25' height='200'
                      v-on:mousedown.left="saturationPicked"></canvas>
            </div>
          </b-col>

   <b-col sm="6">

    <b-row>

     <b-col sm="12">
     <b-row>
            <b-col sm="4">


              <b-row>
                <b-col sm="1"><label for="H">H:</label></b-col>
                <b-col sm="8">
                  <b-form-input size="sm" type="number" id="H" min="0" max="359"
                                :value="$store.state.colorPickerStore.baseColor.hsl.hue"
                                @input.native="setNewColorFromHSL($event,'h')">
                  </b-form-input>
                </b-col>
              </b-row>

              <b-row class="topMarginComponent">
                <b-col sm="1"><label for="S">S:</label></b-col>
                <b-col sm="8">
                  <b-form-input size="sm" type="number" id="S" min="0" max="99"
                                :value="$store.state.colorPickerStore.baseColor.hsl.sat"
                                @input.native="setNewColorFromHSL($event,'s')">
                  </b-form-input>
                </b-col>
              </b-row>

              <b-row class="topMarginComponent">
                <b-col sm="1"><label for="L">L:</label></b-col>
                <b-col sm="8">
                  <b-form-input size="sm" type="number" id="L" min="0" max="99"
                                :value="$store.state.colorPickerStore.baseColor.hsl.light"
                                @input.native="setNewColorFromHSL($event,'l')">
                  </b-form-input>
                </b-col>
              </b-row>

            </b-col>

            <b-col sm="4">

              <b-row>
                <b-col sm="1"><label for="R">R:</label></b-col>
                <b-col sm="8">
                  <b-form-input size="sm" type="number" id="R" min="0" max="256"
                                :value="$store.state.colorPickerStore.baseColor.rgb.r"
                                @input.native="setNewColorFromRGB($event,'r')">
                  </b-form-input>
                </b-col>
              </b-row>

              <b-row class="topMarginComponent">
                <b-col sm="1"><label for="G">G:</label></b-col>
                <b-col sm="8">
                  <b-form-input size="sm" type="number" id="G" min="0" max="256"
                                :value="$store.state.colorPickerStore.baseColor.rgb.g"
                                @input.native="setNewColorFromRGB($event,'g')">
                  </b-form-input>
                </b-col>
              </b-row>

              <b-row class="topMarginComponent">
                <b-col sm="1"><label for="B">B:</label></b-col>
                <b-col sm="8">
                  <b-form-input size="sm" type="number" id="B" min="0" max="256"
                                :value="$store.state.colorPickerStore.baseColor.rgb.b"
                                @input.native="setNewColorFromRGB($event,'b')">
                  </b-form-input>
                </b-col>
              </b-row>

            </b-col>
             <b-col sm="4">
   <circled-palette></circled-palette>
             </b-col>

          </b-row>

            <b-row class="topMarginComponent">
                <b-col sm="1"><label for="Hex">Hex:</label></b-col>
                <b-col sm="4">
                  <b-form-input size="sm" type="text" id="Hex"
                                :value="$store.state.colorPickerStore.baseColor.HEXString" @input.native="setNewColorFromHex">
                  </b-form-input>
                </b-col>
                 <b-col sm="7">
                 <p style="display:inline">  Base Color: </p>
   <div  height="100px" width="100px" style="min-width:10px; min-height:40px;"
                 :style="{'background-color':$store.state.colorPickerStore.baseColor.HEXString}">
                 </div>
    </b-col>
              </b-row>
   </b-col>


</b-row>


</b-col>

          
</b-row>

      </b-container>
    </div>
  </div>
</template>
<script>
  import Color from "../helperJSClasses/Color";
  import CircledPalette from "./CircledPalette";
  import _ from "lodash";

  export default {
    components: {CircledPalette},
    name: "ColorPicker",
    props: [
      "label",
      "textValue",
      "sliderValue",
      "textChange",
      "sliderChange",
      "inputMin",
      "inputMax"
    ],
    data() {
      self: this;
    },
    methods: {
      // Mouse Down
      colorPicked(e) {
        this.$store.commit("colorPickerStore/set", {
          valueName: "pickerMouseDown",
          value: true
        });
        this.$store.commit("colorPickerStore/getColor", {
          clientX: e.clientX,
          clientY: e.clientY
        });
        this.$store.commit("colorPickerStore/generateSaturationCanvas");
      },
      saturationPicked: function (e) {
        this.$store.commit("colorPickerStore/set", {
          valueName: "mouseDownSaturation",
          value: true
        });
        this.$store.commit("colorPickerStore/changeSaturation", {
          clientY: e.clientY
        });
        this.$store.commit("colorPickerStore/generatePickerCanvas");

        const mouseMoveListenerHandle = window.addEventListener(
          "mousemove",
          function (e) {
            if (this.$store.state.colorPickerStore.mouseDownSaturation)
              this.$store.commit("colorPickerStore/changeSaturation", {
                clientY: e.clientY
              });
            this.$store.commit("colorPickerStore/generatePickerCanvas", {
              clientX: e.clientX,
              clientY: e.clientY
            });
          }.bind(this)
        );

        window.addEventListener(
          "mouseup",
          function () {
            window.removeEventListener("mousemove", mouseMoveListenerHandle);
            this.$store.commit("colorPickerStore/set", {
              valueName: "mouseDownSaturation",
              value: false
            });
          }.bind(this),
          {once: true}
        );
      },

      // Mouse Move
      mouseMoveSaturation: _.throttle(function (e) {
        if (this.$store.state.colorPickerStore.mouseDownSaturation)
          this.saturationPicked(e);
      }, 10),
      mouseMovePicker(e) {
        if (this.$store.state.colorPickerStore.pickerMouseDown)
          this.colorPicked(e);
      },

      // Mouse Up/Out
      resetMouseOnCanvas() {
        this.$store.commit("colorPickerStore/set", {
          valueName: "pickerMouseDown",
          value: false
        });
      },
      resetMouseOnSaturationCanvas() {
        this.$store.commit("colorPickerStore/set", {
          valueName: "mouseDownSaturation",
          value: false
        });
      },

      //text input handling
      //HSL
      setNewColorFromHSL(e, changer) {
        let value = e.target.value;
        let h =
          changer == "h"
            ? value
            : this.$store.state.colorPickerStore.baseColor.hsl.hue;
        let s =
          changer == "s"
            ? value
            : this.$store.state.colorPickerStore.baseColor.hsl.sat;
        let l =
          changer == "l"
            ? value
            : this.$store.state.colorPickerStore.baseColor.hsl.light;
        this.$store.commit("colorPickerStore/set", {
          valueName: "baseColor",
          value: new Color(h, s, l, "HSL")
        });
        this.resetCanvases();
      },
      //RGB
      setNewColorFromRGB(e, changer) {
        let value = e.target.value;
        let r =
          changer == "r"
            ? value
            : this.$store.state.colorPickerStore.baseColor.rgb.r;
        let g =
          changer == "g"
            ? value
            : this.$store.state.colorPickerStore.baseColor.rgb.g;
        let b =
          changer == "b"
            ? value
            : this.$store.state.colorPickerStore.baseColor.rgb.b;
        this.$store.commit("colorPickerStore/set", {
          valueName: "baseColor",
          value: new Color(r, g, b, "RGB")
        });
        this.resetCanvases();
      },
      //Hex
      setNewColorFromHex(e) {
        this.$store.commit("colorPickerStore/set", {
          valueName: "baseColor",
          value: new Color(hex, 0, 0, "Hex")
        });
        this.resetCanvases();
      },
      resetCanvases() {
        this.$store.commit("colorPickerStore/generatePickerCanvas");
        this.$store.commit("colorPickerStore/generateSaturationCanvas");
      }
    },
    mounted: function () {
      this.$store.commit("colorPickerStore/set", "pickerPositionX", 5);
      this.$store.commit("colorPickerStore/set", "pickerPositionY", 5);
      this.$store.commit("colorPickerStore/generatePickerCanvas");
      this.$store.commit("colorPickerStore/generateSaturationCanvas");
    }
  };
</script>


<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  .colorValueLabel {
    display: inline
  }

  #canvasColorPicker {
    min-width: 360px;
    min-height: 200px;
    /* display: grid;
     grid-gap: 5px;
     grid-template-columns: 360px 25px 1fr 1fr;
     grid-template-rows: 200px 60px 60px 60px auto;*/
  }

  #canvasSaturationPicker {
    height: 100%;

    /* display: grid;
     grid-gap: 5px;
     grid-template-columns: 360px 25px 1fr 1fr;
     grid-template-rows: 200px 60px 60px 60px auto;*/
  }

  .MainBox {
    /*
    grid-row: 1 / 3;
    grid-column: 1;*/
  }

  .SaturationBox {
    /*
        grid-column: 2;
        grid-row: 1 / 3;
        background-color: white;*/
  }

  #pickerCircle {
    position: absolute;
    z-index: 4000;
    pointer-events: none;
  }

  #saturationCircle {
    position: absolute;
    z-index: 4000;
    pointer-events: none;
  }
</style>
