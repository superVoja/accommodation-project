<template>
  <div>
    <TheHeader />
    <nuxt />
  </div>
</template>
<script>
import TheHeader from '@/components/navigation/TheHeader'
export default {
  components: {
    TheHeader
  }
}
</script>
<style lang="scss" >
html,
body {
  font-family: 'Rubik', sans-serif;
  font-size: 16px;
  word-spacing: 1px;
  -ms-text-size-adjust: 100%;
  -webkit-text-size-adjust: 100%;
  -moz-osx-font-smoothing: grayscale;
  -webkit-font-smoothing: antialiased;
  box-sizing: border-box;
  overflow: hidden;
}

*,
*:before,
*:after {
  box-sizing: border-box;
  margin: 0;
  padding: 0;
}
</style>
