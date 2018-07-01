export const state = () => ({
    colorNumber:6,
    hueChange:30,
    satChange:10,
    lightChange:20
  })
  
  export const mutations = {
    set (state, {valueName, value}) {
      state[valueName] = value
    }}