export const state = () => ({
   h1Color:'blue',
   h2Color:'blue',
   h3Color:'blue',
   h4Color:'blue',
   h5Color:'blue',
   pColor: 'blue',
   buttonPrimaryFont: 'white',
   buttonPrimary: 'green',
   buttonSecondaryFont: 'white',
   buttonSecondary: 'green',
   buttonInfoFont: 'white',
   buttonInfo: 'green',
   buttonSuccessFont: 'white',
   buttonSuccess: 'green',
   buttonDangerFont: 'white',
   buttonDanger: 'green',
   backgroundColor:'yellow',
   spanColor: 'orange',

   pickedColor:'white',
   pickedAttribute:'h1',
   currentColorSquare:'pickColor1'
  })
  
  export const mutations = {
    set (state, {valueName, value}) {
      state[valueName] = value
    }}