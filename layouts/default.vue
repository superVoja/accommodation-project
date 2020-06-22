<template>
  <div>
    <TheHeader />

    <nuxt />
    <TheFooter />
  </div>
</template>
<script>
import TheHeader from '@/components/navigation/TheHeader'
import TheFooter from '@/components/footer/TheFooter'
export default {
  components: {
    TheHeader,
    TheFooter
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
