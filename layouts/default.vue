<template>
  <div>
    <TheHeader @menuToggle="displayMenu = !displayMenu" />
<Menu :show="displayMenu" @close="displayMenu = false"/>
    <nuxt />
    <TheFooter />
  </div>
</template>
<script>
import TheHeader from '@/components/navigation/TheHeader'
import Menu from '@/components/navigation/Menu'
import TheFooter from '@/components/footer/TheFooter'
export default {
  components: {
    TheHeader,
    Menu,
    TheFooter
  },
  data() {
    return {
      displayMenu: false
    }
  },
  created() {
    this.$nuxt.$on('toggle', () => {
      this.displayMenu = !this.displayMenu
    })
    this.$nuxt.$on('close', () => {
      this.displayMenu = false
    })
  }
}
</script>
<style lang="scss" >
html,
body {
  font-family: 'Montserrat', sans-serif;
  color: $font-color;
  font-size: 16px;
  word-spacing: 1px;
  -ms-text-size-adjust: 100%;
  -webkit-text-size-adjust: 100%;
  -moz-osx-font-smoothing: grayscale;
  -webkit-font-smoothing: antialiased;
  box-sizing: border-box;
  overflow-x: hidden;
}

*,
*:before,
*:after {
  box-sizing: border-box;
  margin: 0;
  padding: 0;
}
</style>
