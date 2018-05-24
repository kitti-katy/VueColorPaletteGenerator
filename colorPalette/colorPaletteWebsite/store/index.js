/**
 * Created by kate on 5/21/18.
 */
import Vuex from 'vuex'
import Color from '../helperJSClasses/Color'


const createStore = () => {
  return new Vuex.Store({
  state: {
    editorPage:
      {
        Filters:
          {
            FilterChosen: "HSL",
            HSLFilter: {
              colorPicker: {
                baseColor: new Color(100, 0, 100, 0),
                pickerPositionX: 0,
                pickerPositionY: 0,
                pickerSatPositionY: 0,
                pickerCircleBorderColor: 'white',
                pickerMouseDown:false,
                pickerMouseMove:false,
                satPickerMouseDown:false,
                satPickerMouseMove:false,
              },
              changes: {
                h: 0, s: 0, l: 0, numberOfColors: 6
              }
            }
          }
      },
  },
  mutations: {
    changeBaseColor (state) {
      state.counter++pickerMouseDownPerformed(state,{evt}){},
    },
    changePickerPositionX(state,{evt}){},
    changePickerPositionY(state,{evt}){},
    changeSatPickerPosition(state,{evt}){},
    pickerMouseDownPerformed(state,{evt}){},
    pickerMouseMovePerformed(state,{evt}){},
    satPickerMouseDownPerformed(state,{evt}){},
    satPickerMouseMovePerformed(state,{evt}){},


  }
})
}



export const state = () => ({
  counter: 0
})

export const mutations = {
  increment (state) {
    state.counter++
  }
}
