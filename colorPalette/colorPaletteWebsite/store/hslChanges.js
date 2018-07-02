export const state = () => ({
    colorNumber:6,
    hueChange:12,
    satChange:0,
    lightChange:20
  })
  
  export const mutations = {
    set (state, {valueName, value}) {
      state[valueName] = value
    }}