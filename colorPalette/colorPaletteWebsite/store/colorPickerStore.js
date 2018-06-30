/**
 * Created by kate on 5/21/18.
 */
import Color from '../helperJSClasses/Color'

export const state = () => ({
  baseColor: new Color(100, 0, 100, "RGB"),
  pickerCircleBorderColor: 'white',
  pickerMouseDown:false,
  pickerMouseMove:false,
  satPickerMouseDown:false,
  satPickerMouseMove:false,
  counter:0,
  mouseDownSaturation:false,
})

export const mutations = {
  set (state, {valueName, value}) {
    state[valueName] = value
  },
  generatePickerCanvas(state){
    let sat = state.baseColor.hsl.sat
    let canvas = document.getElementById('canvasColorPicker')
    let ctx = canvas.getContext("2d");

for(let i=0; i<360; i+=1){
  var gradient = ctx.createLinearGradient(i, 0, i, 200);
  gradient.addColorStop(0, "hsl("+i+","+sat+"%,0%)");
  gradient.addColorStop(0.5, "hsl("+i+","+sat+"%,50%)");
  gradient.addColorStop(1, "hsl("+i+","+sat+"%,100%)");
  ctx.fillStyle = gradient;
  ctx.fillRect(i, 0, i, 200);
}
/*
   let img = new Image() 
   img.src = "./images/canvas/"+sat*2 +".png" 
   img.onload = function () {
    ctx.drawImage(img,0,0);
   }*/
  },
  generateSaturationCanvas(state){
    //console.log(state.baseColor)
    let hue = state.baseColor.hsl.hue
    let light = state.baseColor.hsl.light
    let canvas = document.getElementById('canvasSaturationPicker')
    let ctx = canvas.getContext("2d");
    for(let j=0; j<202; j+=2){
      for(let i=0; i<20; i+=1){
        ctx.fillStyle = 'hsl(' + hue + ', ' + j/2 + '%, ' + light + '%)'
        ctx.fillRect(i, j, i, j+2);
      }
    }
  },

  getColor(state,{clientX, clientY}, ){
    let canvas = document.getElementById('canvasColorPicker')
    let rect = canvas.getBoundingClientRect()
    let x = clientX - rect.left
    let y = clientY - rect.top
    state.baseColor = new Color( Math.round(x),  state.baseColor.hsl.sat,  Math.round(y/2),"HSL")
  },
  changeSaturation(state, {clientY}){
    let canvas = document.getElementById('canvasSaturationPicker')
    let rect = canvas.getBoundingClientRect()
    let y = clientY - rect.top
    let hsl = state.baseColor.hsl
    state.baseColor = new Color( hsl.hue,  Math.round(y/2),  hsl.light,"HSL")
    console.log(state.baseColor.HEXString)
  },

};
