/**
 * Created by kate on 5/21/18.
 */
import Color from '../helperJSClasses/Color'

export const state = () => ({
  baseColor: new Color(100, 0, 100, "RGB"),
  pickerPositionX: '0',
  pickerPositionY: '0',
  pickerSatPositionY: 0,
  pickerCircleBorderColor: 'white',
  pickerMouseDown:false,
  pickerMouseMove:false,
  satPickerMouseDown:false,
  satPickerMouseMove:false,
  counter:0,
  mouseDownSaturation:false,
  saturationPickerPositionX:0,
  saturationPickerPositionY:0
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
      for(let j=0; j<202; j+=2){
        ctx.fillStyle = 'hsl(' + i  + ', ' + sat + '%, ' + j/2 + '%)'
        ctx.fillRect(i, j, i, j+2);
      }
    }
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
    state.pickerPositionX=x-15 + 'px'
    state.pickerPositionY=y-15 + 'px'
    let ctx = canvas.getContext("2d");
    let imageData = ctx.getImageData(x, y, 1, 1).data;
    state.baseColor = new Color( imageData[0],  imageData[1],  imageData[2],"RGB")
  },
  changeSaturation(state, {clientY}){
    let canvas = document.getElementById('canvasSaturationPicker')
    let rect = canvas.getBoundingClientRect()
    let y = clientY - rect.top
    state.saturationPickerPositionY = y - 5 + 'px'
    let hsl = state.baseColor.hsl
    state.baseColor = new Color( hsl.hue,  y/2,  hsl.light,"HSL")
    console.log(state.baseColor.hsl.sat)
  },

};
