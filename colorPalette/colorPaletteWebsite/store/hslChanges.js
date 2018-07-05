export const state = () => ({
    colorNumber:20,
    hueChange:27,
    satChange:0,
    lightChange:12,
    hueStep:1,
    satStep:1,
    lightStep:1
  })
  
  export const mutations = {
    set (state, {valueName, value}) {
      state[valueName] = value
    },
    applyPreset(state, {p}){
      state.colorNumber = p.n 
      state.hueChange = p.h
      state.satChange = p.s
      state.lightChange = p.l
      state.hueStep = p.st_h
      state.satStep = p.st_s
      state.lightStep = p.st_l
    }
  }