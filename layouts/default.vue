<template>
  <div>
    <TheHeader @menuToggle="displayMenu = !displayMenu" />
<TheMenu :show="displayMenu" @close="displayMenu = false"/>
    <nuxt />
    <TheFooter />
  </div>
</template>
<script>
import TheHeader from '@/components/navigation/TheHeader'
import TheMenu from '@/components/navigation/TheMenu'
import TheFooter from '@/components/footer/TheFooter'
export default {
  components: {
    TheHeader,
    TheMenu,
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
*,
*:before,
*:after {
  box-sizing: border-box;
  margin: 0;
  padding: 0;
}
html,
body {
  font-family: 'Montserrat', sans-serif;
  font-size: 16px;
  word-spacing: 1px;
  -ms-text-size-adjust: 100%;
  -webkit-text-size-adjust: 100%;
  -moz-osx-font-smoothing: grayscale;
  -webkit-font-smoothing: antialiased;
  box-sizing: border-box;
  overflow-x: hidden;
}
</style>
