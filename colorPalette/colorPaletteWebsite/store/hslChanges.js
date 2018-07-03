export const state = () => ({
    colorNumber:20,
    hueChange:27,
    satChange:0,
    lightChange:12
  })
  
  export const mutations = {
    set (state, {valueName, value}) {
      state[valueName] = value
    }}