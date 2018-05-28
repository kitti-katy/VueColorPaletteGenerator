
export const state = () => ({
  hueChange: 1,
  satChange:2,
  lightChange:3,
  numberOfColors:6
})

export const mutations = {
  set (state, {valueName, value}) {
    state[valueName] = value
  }
}
