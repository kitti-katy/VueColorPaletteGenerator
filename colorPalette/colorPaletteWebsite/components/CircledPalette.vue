
<template>
        <svg id="circledPalette" height="200" width="200">
                    <polygon v-for="n in parseInt($store.state.hslChanges.colorNumber)"
                        :key="'piece' + (n-1)"
                            :points="getTriangle(360/$store.state.hslChanges.colorNumber, n)" 
                            :style="{'fill':getNextColor(n-1).HEXString}" />
         </svg>
</template>

<script>
  import Color from "../helperJSClasses/Color";
  export default {
    components: {},
    name: 'CircledPalette',
    data() {
      return {
      }
    },
    methods:{

    generatePoints(angle)
    {
        let x = 100
        let y = 0
        let c = 100
        angle = (angle ) * (Math.PI/180); // Convert to radians
        let rotatedX = Math.cos(angle) * (x - c) - Math.sin(angle) * (y - c) + c;
        let rotatedY = Math.sin(angle) * (x - c) + Math.cos(angle) * (y - c) + c;
        return {x: rotatedX,
            y: rotatedY};
    },
        getTriangle(rotationAngle, n){
        let newPointA = this.generatePoints(n*rotationAngle)
        let newPointB = this.generatePoints((n+1)*rotationAngle)
        let coordinates = '100,100 ' + newPointA.x + ', ' + newPointA.y + ' ' + newPointB.x + ', ' + newPointB.y
        return coordinates
    },

    getNextColor(i) {
        let hueChange = this.$store.state.hslChanges.hueChange
        let satChange = this.$store.state.hslChanges.satChange
        let lightChange = this.$store.state.hslChanges.lightChange

        let color = new Color(this.$store.state.colorPickerStore.baseColor,
          {
            hueChange: hueChange * (i) - 360 * (Math.floor(hueChange * i / 360)),
            satChange: satChange * (i) - 100 * (Math.floor(satChange * i / 100)),
            lightChange: lightChange * (i) - 100 * (Math.floor(lightChange * i / 100))
          }
          , 0, "ChangeColor")
        return color
      }

    }
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
#circledPalette{

}
</style>

