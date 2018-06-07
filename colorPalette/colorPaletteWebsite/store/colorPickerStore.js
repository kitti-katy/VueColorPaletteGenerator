/**
 * Created by kate on 5/21/18.
 */
import Color from '../helperJSClasses/Color'

export const state = () => ({
  baseColor: new Color(100, 0, 100, 0),
  pickerPositionX: 0,
  pickerPositionY: 0,
  pickerSatPositionY: 0,
  pickerCircleBorderColor: 'white',
  pickerMouseDown:false,
  pickerMouseMove:false,
  satPickerMouseDown:false,
  satPickerMouseMove:false,
  counter:0,
  mouseDownSaturation:false
})

export const mutations = {
  generatePickerCanvas(state){
    let sat = state.baseColor.hsl.sat
    let canvas = document.getElementById('canvasColorPicker')
    let ctx = canvas.getContext("2d");
    let imageData = ctx.getImageData(0, 0, 360, 202);
    for(let i=0; i<360; i+=1){
      for(let j=0; j<202; j+=2){
        ctx.fillStyle = 'hsl(' + i  + ', ' + sat + '%, ' + j/2 + '%)'
        ctx.fillRect(i, j, i, j+2);
      }
    }
  },
  generateSaturationCanvas(state){
    console.log(state.baseColor)
    let hue = state.baseColor.hsl.hue
    let light = state.baseColor.hsl.light
    let canvas = document.getElementById('canvasSaturationPicker')
    let ctx = canvas.getContext("2d");
    for(let j=0; j<202; j+=2){
      for(let i=0; i<20; i+=1){
        //no idea why without 360 it will show a wrong color but for others it works without 360
        ctx.fillStyle = 'hsl(' + (360-hue) + ', ' + j/2 + '%, ' + light + '%)'
        ctx.fillRect(i, j, i, j+2);
      }
    }
  },
  //HERE
  mouseMovePicker(state,{clientX, clientY}){
    if(state.pickerMouseDown) {
      mutations.getColor(state,{clientX, clientY})
    }
  },

  mouseMoveSaturation(state,{clientX, clientY}){
    if(state.mouseDownSaturation)
      mutations.changeSaturation(state, {clientX, clientY})
  },
  resetMouseDownPicker(state, {clientX, clientY}){
    state.pickerMouseDown=false
  },
  resetMouseDownSaturation(state, {clientX, clientY}){
    state.mouseDownSaturation=false;
  },
  getColor(state,{clientX, clientY}){
    state.pickerMouseDown=true;
    let canvas = document.getElementById('canvasColorPicker')
    let rect = canvas.getBoundingClientRect()
    let x = clientX - rect.left
    let y = clientY - rect.top
    state.pickerPositionX=x-5
    state.pickerPositionY=y-5
    let ctx = canvas.getContext("2d");
    let imageData = ctx.getImageData(360-x, y, 1, 1).data;
    let newColor = new Color( imageData[0],  imageData[1],  imageData[2],0)
    state.baseColor = newColor
  },
  changeSaturation(state, {clientX, clientY}){
    state.mouseDownSaturation = true
    let canvas = document.getElementById('canvasSaturationPicker')
    let rect = canvas.getBoundingClientRect()
    let x = clientX - rect.left
    let y = clientY - rect.top
    let ctx = canvas.getContext("2d");
    let imageData = ctx.getImageData(x, y, 1, 1).data;
    let color = state.baseColor
    let hue = color.hsl.hue
    let light = color.hsl.light
    let newColor = new Color( imageData[0],  imageData[1],  imageData[2],0)
    //did not work just without sat
    let sat = newColor.hsl.sat
    let newColor2 = new Color( hue,  sat,  light,1)
    state.baseColor = newColor2
    mutations.generatePickerCanvas(state.baseColor)
  }

};
