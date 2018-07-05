import Color from './Color'

 function getNextColor(i, baseColor, hueChange, satChange, lightChange, hueStep, satStep, lightStep) {
    let steppedHue = Math.floor(i/hueStep)
    let steppedSat = Math.floor(i/satStep)
    let steppedLight = Math.floor(i/lightStep)


    let color = new Color(baseColor,
      {
        hueChange: hueChange * (steppedHue) - 360 * (Math.floor(hueChange * steppedHue / 360)),
        satChange: satChange * (steppedSat) - 100 * (Math.floor(satChange * steppedSat / 100)),
        lightChange: lightChange * (steppedLight) - 100 * (Math.floor(lightChange * steppedLight / 100))
      }
      , 0, "ChangeColor")
    return color
  }

  export default  getNextColor;
