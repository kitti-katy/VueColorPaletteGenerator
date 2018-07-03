export const state = () => ({
   h1Color:'blue',
   h2Color:'blue',
   h3Color:'blue',
   h4Color:'blue',
   h5Color:'blue',
   pColor: '#141117',
   buttonPrimaryFont: 'white',
   buttonPrimary: '#392b3b',
   buttonSecondaryFont: 'white',
   buttonSecondary: '#5e4556',
   buttonInfoFont: 'white',
   buttonInfo: 'green',
   buttonSuccessFont: 'white',
   buttonSuccess: '#8aa89d',
   buttonDangerFont: 'white',
   buttonDanger: 'green',
   backgroundColor:'#f3f3f6',
   spanColor: 'orange',

   pickedColor:'white',
   pickedAttribute:'h1',
   currentColorSquare:'pickColor1'
  })
  
  export const mutations = {
    set (state, {valueName, value}) {
      state[valueName] = value
    }}